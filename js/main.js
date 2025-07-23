// Main JavaScript file for AI Literacy Training Platform

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadUserProgress();
    updateDashboard();
});

// Global state
const appState = {
    currentUser: {
        name: 'Student',
        progress: {},
        badges: [],
        completedActivities: 0
    },
    modules: [
        {
            id: 1,
            title: 'AI Fundamentals',
            duration: 2,
            activities: ['videos', 'classification-game', 'bias-experience', 'quiz'],
            progress: 0
        },
        {
            id: 2,
            title: 'Computational Thinking',
            duration: 2,
            activities: ['videos', 'friend-recommendation', 'fish-classification', 'problem-solving', 'quiz'],
            progress: 0
        },
        {
            id: 3,
            title: 'AI System Design',
            duration: 2,
            activities: ['videos', 'chat-lab', 'image-generation', 'portfolio', 'quiz'],
            progress: 0
        },
        {
            id: 4,
            title: 'Professional Development',
            duration: 2,
            activities: ['videos', 'career-exploration', 'future-ai', 'final-project', 'certificate'],
            progress: 0
        }
    ]
};

// Initialize application
function initializeApp() {
    console.log('AI Literacy Training Platform initialized');
    
    // Set up event listeners
    const moduleBtns = document.querySelectorAll('.module-btn');
    moduleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
    
    // Module card click handler
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.addEventListener('click', () => {
            const moduleId = card.dataset.module;
            if (!card.querySelector('.module-btn').contains(event.target)) {
                startModule(moduleId);
            }
        });
    });
}

// Load user progress from localStorage
function loadUserProgress() {
    const savedProgress = localStorage.getItem('aiLiteracyProgress');
    if (savedProgress) {
        const data = JSON.parse(savedProgress);
        appState.currentUser = { ...appState.currentUser, ...data };
        
        // Update module progress
        if (data.moduleProgress) {
            appState.modules.forEach((module, index) => {
                if (data.moduleProgress[module.id]) {
                    appState.modules[index].progress = data.moduleProgress[module.id];
                }
            });
        }
    }
}

// Save user progress to localStorage
function saveUserProgress() {
    const progressData = {
        name: appState.currentUser.name,
        progress: appState.currentUser.progress,
        badges: appState.currentUser.badges,
        completedActivities: appState.currentUser.completedActivities,
        moduleProgress: {}
    };
    
    appState.modules.forEach(module => {
        progressData.moduleProgress[module.id] = module.progress;
    });
    
    localStorage.setItem('aiLiteracyProgress', JSON.stringify(progressData));
}

// Update dashboard UI
function updateDashboard() {
    // Update overall progress
    const totalProgress = calculateOverallProgress();
    const overallProgressBar = document.getElementById('overall-progress');
    if (overallProgressBar) {
        overallProgressBar.style.width = `${totalProgress}%`;
    }
    
    // Update stats
    document.getElementById('completed-activities').textContent = appState.currentUser.completedActivities;
    document.getElementById('earned-badges').textContent = appState.currentUser.badges.length;
    
    // Update module progress bars
    appState.modules.forEach(module => {
        const moduleCard = document.querySelector(`[data-module="${module.id}"]`);
        if (moduleCard) {
            const progressFill = moduleCard.querySelector('.progress-fill');
            const progressText = moduleCard.querySelector('.progress-text');
            if (progressFill) {
                progressFill.style.width = `${module.progress}%`;
                progressFill.setAttribute('data-progress', module.progress);
            }
            if (progressText) {
                progressText.textContent = `${module.progress}% Complete`;
            }
        }
    });
    
    // Update badges
    updateBadges();
}

// Calculate overall progress
function calculateOverallProgress() {
    const totalProgress = appState.modules.reduce((sum, module) => sum + module.progress, 0);
    return Math.round(totalProgress / appState.modules.length);
}

// Update badges display
function updateBadges() {
    const badges = [
        { id: 'explorer', name: 'AI Explorer', requirement: 'module1' },
        { id: 'pattern', name: 'Pattern Detective', requirement: 'module2' },
        { id: 'creator', name: 'AI Builder', requirement: 'module3' },
        { id: 'teacher', name: 'AI Champion', requirement: 'module4' }
    ];
    
    badges.forEach((badge, index) => {
        const badgeElement = document.querySelectorAll('.badge')[index];
        if (badgeElement && appState.currentUser.badges.includes(badge.id)) {
            badgeElement.classList.remove('locked');
            badgeElement.classList.add('unlocked');
        }
    });
}

// Start a module
function startModule(moduleId) {
    console.log(`Starting module ${moduleId}`);
    
    // Save current state before navigation
    saveUserProgress();
    
    // Navigate to module page
    window.location.href = `modules/module${moduleId}/index.html`;
}

// Update module progress
function updateModuleProgress(moduleId, progress) {
    const moduleIndex = appState.modules.findIndex(m => m.id === parseInt(moduleId));
    if (moduleIndex !== -1) {
        appState.modules[moduleIndex].progress = Math.min(100, progress);
        
        // Check for badge unlock
        if (progress === 100) {
            unlockBadge(moduleId);
        }
        
        saveUserProgress();
        updateDashboard();
    }
}

// Unlock a badge
function unlockBadge(moduleId) {
    const badgeMap = {
        1: 'explorer',
        2: 'pattern',
        3: 'creator',
        4: 'teacher'
    };
    
    const badgeId = badgeMap[moduleId];
    if (badgeId && !appState.currentUser.badges.includes(badgeId)) {
        appState.currentUser.badges.push(badgeId);
        showBadgeNotification(badgeId);
    }
}

// Show badge notification
function showBadgeNotification(badgeId) {
    const badgeNames = {
        explorer: 'AI Explorer',
        pattern: 'Pattern Detective',
        creator: 'AI Builder',
        teacher: 'AI Champion'
    };
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'badge-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <h3>Badge Unlocked!</h3>
            <p>You've earned the ${badgeNames[badgeId]} badge!</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .badge-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--gradient-primary);
            color: white;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: var(--shadow-lg);
            animation: slideIn 0.3s ease;
            z-index: 9999;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 3000);
}

// Activity completion handler
function completeActivity(moduleId, activityId) {
    const key = `module${moduleId}_${activityId}`;
    if (!appState.currentUser.progress[key]) {
        appState.currentUser.progress[key] = true;
        appState.currentUser.completedActivities++;
        
        // Calculate module progress
        const module = appState.modules.find(m => m.id === parseInt(moduleId));
        if (module) {
            const completedCount = module.activities.filter(activity => 
                appState.currentUser.progress[`module${moduleId}_${activity}`]
            ).length;
            const progress = Math.round((completedCount / module.activities.length) * 100);
            updateModuleProgress(moduleId, progress);
        }
    }
}

// Export functions for use in other modules
window.aiLiteracy = {
    appState,
    startModule,
    updateModuleProgress,
    completeActivity,
    saveUserProgress,
    loadUserProgress
};