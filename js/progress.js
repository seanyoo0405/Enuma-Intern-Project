// Progress tracking and management

// Progress tracking state
const progressState = {
    modules: {
        1: { videos: {}, activities: {}, quiz: null },
        2: { videos: {}, activities: {}, quiz: null },
        3: { videos: {}, activities: {}, quiz: null },
        4: { videos: {}, activities: {}, quiz: null }
    },
    certificates: [],
    totalTime: 0,
    lastAccess: null
};

// Initialize progress tracking
function initializeProgress() {
    loadProgress();
    trackTime();
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('aiLiteracyDetailedProgress');
    if (saved) {
        Object.assign(progressState, JSON.parse(saved));
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('aiLiteracyDetailedProgress', JSON.stringify(progressState));
}

// Track time spent
function trackTime() {
    let startTime = Date.now();
    
    // Save time every minute
    setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        progressState.totalTime += elapsed;
        progressState.lastAccess = new Date().toISOString();
        saveProgress();
        startTime = Date.now();
    }, 60000);
    
    // Save on page unload
    window.addEventListener('beforeunload', () => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        progressState.totalTime += elapsed;
        progressState.lastAccess = new Date().toISOString();
        saveProgress();
    });
}

// Mark video as watched
function markVideoWatched(moduleId, videoId) {
    if (!progressState.modules[moduleId].videos[videoId]) {
        progressState.modules[moduleId].videos[videoId] = {
            watched: true,
            timestamp: new Date().toISOString()
        };
        saveProgress();
        updateModuleProgress(moduleId);
    }
}

// Mark activity as completed
function markActivityCompleted(moduleId, activityId) {
    if (!progressState.modules[moduleId].activities[activityId]) {
        progressState.modules[moduleId].activities[activityId] = {
            completed: true,
            timestamp: new Date().toISOString()
        };
        saveProgress();
        updateModuleProgress(moduleId);
        
        // Check for badge unlock
        checkBadgeUnlock(moduleId);
    }
}

// Mark quiz as completed
function markQuizCompleted(moduleId, score) {
    progressState.modules[moduleId].quiz = {
        completed: true,
        score: score,
        timestamp: new Date().toISOString()
    };
    saveProgress();
    updateModuleProgress(moduleId);
    
    // Check for module completion
    checkModuleCompletion(moduleId);
}

// Calculate module progress
function calculateModuleProgress(moduleId) {
    const module = progressState.modules[moduleId];
    const moduleContent = window.moduleContent?.[moduleId];
    
    if (!moduleContent) return 0;
    
    let completed = 0;
    let total = 0;
    
    // Count videos
    total += moduleContent.videos.length;
    completed += Object.keys(module.videos).length;
    
    // Count activities
    total += moduleContent.activities.length;
    completed += Object.keys(module.activities).length;
    
    // Count quiz
    if (moduleContent.quiz) {
        total += 1;
        if (module.quiz?.completed) completed += 1;
    }
    
    return total > 0 ? Math.round((completed / total) * 100) : 0;
}

// Update module progress
function updateModuleProgress(moduleId) {
    const progress = calculateModuleProgress(moduleId);
    
    // Update local storage through main.js
    if (window.aiLiteracy) {
        window.aiLiteracy.updateModuleProgress(moduleId, progress);
    }
    
    // Update UI if on module page
    const progressBar = document.querySelector('.module-progress-fill');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    // Update progress text
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = `${progress}% Complete`;
    }
}

// Check for badge unlock
function checkBadgeUnlock(moduleId) {
    const progress = calculateModuleProgress(moduleId);
    
    if (progress >= 50 && !hasBadge(`module${moduleId}_halfway`)) {
        unlockBadge(`module${moduleId}_halfway`, `Module ${moduleId} Halfway`);
    }
    
    if (progress === 100 && !hasBadge(`module${moduleId}_complete`)) {
        const badges = ['explorer', 'pattern', 'creator', 'teacher'];
        unlockBadge(badges[moduleId - 1], getModuleBadgeName(moduleId));
    }
}

// Check if user has badge
function hasBadge(badgeId) {
    const saved = localStorage.getItem('aiLiteracyProgress');
    if (saved) {
        const data = JSON.parse(saved);
        return data.badges?.includes(badgeId) || false;
    }
    return false;
}

// Unlock badge
function unlockBadge(badgeId, badgeName) {
    if (window.aiLiteracy) {
        window.aiLiteracy.unlockBadge(badgeId);
    }
}

// Get module badge name
function getModuleBadgeName(moduleId) {
    const names = {
        1: 'AI Explorer',
        2: 'Pattern Detective',
        3: 'AI Builder',
        4: 'AI Champion'
    };
    return names[moduleId];
}

// Check module completion
function checkModuleCompletion(moduleId) {
    const progress = calculateModuleProgress(moduleId);
    
    if (progress === 100) {
        // Show completion message
        showCompletionMessage(moduleId);
        
        // Check if all modules complete
        checkProgramCompletion();
    }
}

// Show module completion message
function showCompletionMessage(moduleId) {
    const message = document.createElement('div');
    message.className = 'completion-message';
    message.innerHTML = `
        <div class="completion-content">
            <h2>🎉 Module ${moduleId} Complete!</h2>
            <p>Congratulations on completing ${getModuleTitle(moduleId)}!</p>
            <button onclick="this.parentElement.parentElement.remove()">Continue</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .completion-message {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        }
        
        .completion-content {
            background: white;
            padding: 3rem;
            border-radius: 1rem;
            text-align: center;
            max-width: 500px;
        }
        
        .completion-content h2 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .completion-content button {
            margin-top: 1.5rem;
            padding: 0.75rem 2rem;
            background: var(--gradient-primary);
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}

// Get module title
function getModuleTitle(moduleId) {
    const titles = {
        1: 'AI Fundamentals',
        2: 'Computational Thinking',
        3: 'AI System Design',
        4: 'AI in Your Future'
    };
    return titles[moduleId];
}

// Check program completion
function checkProgramCompletion() {
    let allComplete = true;
    
    for (let i = 1; i <= 4; i++) {
        if (calculateModuleProgress(i) < 100) {
            allComplete = false;
            break;
        }
    }
    
    if (allComplete && !progressState.certificates.includes('ai-literacy')) {
        generateCertificate();
    }
}

// Generate certificate
function generateCertificate() {
    progressState.certificates.push({
        id: 'ai-literacy',
        name: 'AI Literacy Student Learning',
        date: new Date().toISOString(),
        modules: 4,
        hours: 8
    });
    saveProgress();
    
    // Show certificate
    showCertificate();
}

// Show certificate
function showCertificate() {
    const certificateHTML = `
        <div class="certificate-modal">
            <div class="certificate-container">
                <div class="certificate-header">
                    <h1 class="certificate-title">Certificate of Achievement</h1>
                    <p class="certificate-subtitle">AI Literacy Student Learning Program</p>
                </div>
                <div class="certificate-body">
                    <p class="certificate-text">This certifies that</p>
                    <h2 class="certificate-recipient">${appState?.currentUser?.name || 'Student'}</h2>
                    <p class="certificate-text">
                        has successfully completed the 8-hour AI Literacy Student Learning Program,
                        demonstrating understanding of AI fundamentals, computational thinking,
                        AI system design, and future applications of AI technology.
                    </p>
                    <p class="certificate-date">Completed on ${new Date().toLocaleDateString()}</p>
                </div>
                <div class="certificate-footer">
                    <div class="signature-block">
                        <div class="signature-line"></div>
                        <p>Program Director</p>
                    </div>
                    <div class="signature-block">
                        <div class="signature-line"></div>
                        <p>UNESCO Representative</p>
                    </div>
                </div>
                <div class="certificate-actions">
                    <button class="cert-btn download" onclick="downloadCertificate()">Download Certificate</button>
                    <button class="cert-btn share" onclick="shareCertificate()">Share</button>
                    <button class="cert-btn" onclick="this.closest('.certificate-modal').remove()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.innerHTML = certificateHTML;
    document.body.appendChild(modal.firstElementChild);
}

// Download certificate (placeholder)
function downloadCertificate() {
    alert('Certificate download feature would be implemented here');
}

// Share certificate (placeholder)
function shareCertificate() {
    alert('Certificate sharing feature would be implemented here');
}

// Get detailed progress report
function getProgressReport() {
    const report = {
        overallProgress: calculateOverallProgress(),
        modules: {},
        totalTime: formatTime(progressState.totalTime),
        lastAccess: progressState.lastAccess,
        certificates: progressState.certificates
    };
    
    for (let i = 1; i <= 4; i++) {
        report.modules[i] = {
            progress: calculateModuleProgress(i),
            videos: Object.keys(progressState.modules[i].videos).length,
            activities: Object.keys(progressState.modules[i].activities).length,
            quiz: progressState.modules[i].quiz
        };
    }
    
    return report;
}

// Format time helper
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}

// Export progress functions
window.progressTracker = {
    initializeProgress,
    markVideoWatched,
    markActivityCompleted,
    markQuizCompleted,
    calculateModuleProgress,
    getProgressReport,
    generateCertificate
};