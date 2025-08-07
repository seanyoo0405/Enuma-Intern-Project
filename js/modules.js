// Module navigation and content management

// Module content structure
const moduleContent = {
    1: {
        title: 'AI Fundamentals',
        videos: [
            { id: 'v1', title: 'What is AI?', duration: '10:30', url: 'placeholder' },
            { id: 'v2', title: 'Can AI Lie?', duration: '12:15', url: 'placeholder' },
            { id: 'v3', title: 'AI in Your Daily Life', duration: '8:45', url: 'placeholder' },
            { id: 'v4', title: 'AI Ethics and Bias', duration: '9:00', url: 'placeholder' }
        ],
        activities: [
            { id: 'truth-hallucination', title: 'Truth or Hallucination?', type: 'interactive' },
            { id: 'bias-experience', title: 'AI Bias Experience', type: 'interactive' }
        ],
        quiz: {
            questions: [
                {
                    id: 'q1',
                    text: 'What is the main difference between AI and traditional computer programs?',
                    options: [
                        'AI can learn from data',
                        'AI is faster',
                        'AI uses more memory',
                        'AI is more colorful'
                    ],
                    correct: 0
                },
                {
                    id: 'q2',
                    text: 'Which of the following is an example of AI bias?',
                    options: [
                        'An AI system running slowly',
                        'A facial recognition system working better for certain skin tones',
                        'An AI using too much electricity',
                        'A chatbot giving random responses'
                    ],
                    correct: 1
                },
                {
                    id: 'q3',
                    text: 'What does "machine learning" mean?',
                    options: [
                        'Machines that can move',
                        'Computers that improve through experience',
                        'Robots that build other robots',
                        'Software that never needs updates'
                    ],
                    correct: 1
                }
            ]
        }
    },
    2: {
        title: 'Computational Thinking',
        videos: [
            { id: 'v1', title: 'Pattern Recognition Basics', duration: '11:20', url: 'placeholder' },
            { id: 'v2', title: 'Algorithms in Daily Life', duration: '9:50', url: 'placeholder' },
            { id: 'v3', title: 'Decomposition Strategies', duration: '10:15', url: 'placeholder' },
            { id: 'v4', title: 'Abstraction Concepts', duration: '8:35', url: 'placeholder' }
        ],
        activities: [
            { id: 'friend-recommendation', title: 'Friend Recommendation AI', type: 'card-game' },
            { id: 'fish-classification', title: 'Fish vs Shark Classifier', type: 'interactive' },
            { id: 'lesson-plan', title: 'Create Lesson Plan', type: 'form' }
        ]
    },
    3: {
        title: 'AI System Design',
        videos: [
            { id: 'v1', title: 'Introduction to Chatbots', duration: '13:00', url: 'placeholder' },
            { id: 'v2', title: 'AI Image Generation', duration: '11:30', url: 'placeholder' },
            { id: 'v3', title: 'Training AI Models', duration: '14:20', url: 'placeholder' },
            { id: 'v4', title: 'AI Project Planning', duration: '9:10', url: 'placeholder' }
        ],
        activities: [
            { id: 'chat-lab', title: 'Math Helper Chatbot', type: 'simulator' },
            { id: 'image-generation', title: 'AI Art Creator', type: 'creative' },
            { id: 'portfolio', title: 'Build Your Portfolio', type: 'collection' }
        ]
    },
    4: {
        title: 'AI in Your Future',
        videos: [
            { id: 'v1', title: 'AI in Today\'s World', duration: '12:30', url: 'placeholder' },
            { id: 'v2', title: 'Future Career Opportunities', duration: '14:15', url: 'placeholder' },
            { id: 'v3', title: 'Preparing for an AI Future', duration: '11:00', url: 'placeholder' },
            { id: 'v4', title: 'Your AI Learning Journey', duration: '10:30', url: 'placeholder' }
        ],
        activities: [
            { id: 'career-explorer', title: 'Career Explorer', type: 'form' },
            { id: 'future-vision', title: 'Future Vision Board', type: 'creative' }
        ]
    },
    5: {
        title: 'Cybersecurity and Global Impacts',
        videos: [
            { id: 'v1', title: 'Why Should You Care About Cybersecurity?', duration: '12:30', url: 'placeholder' },
            { id: 'v2', title: 'Understanding Privacy and Data Protection', duration: '11:45', url: 'placeholder' },
            { id: 'v3', title: 'Global Cybersecurity Threats', duration: '13:20', url: 'placeholder' },
            { id: 'v4', title: 'Ethical Computing and Digital Citizenship', duration: '10:15', url: 'placeholder' }
        ],
        activities: [
            { id: 'password-strength', title: 'Password Security Lab', type: 'interactive' },
            { id: 'threat-simulation', title: 'Cybersecurity Threat Simulator', type: 'simulator' }
        ]
    },
    6: {
        title: 'AI in Our Lives',
        videos: [
            { id: 'v1', title: 'How AI Learns and Solves Problems', duration: '1:43', url: 'placeholder' },
            { id: 'v2', title: 'How AI Learns and Helps Us', duration: '2:00', url: 'placeholder' }
        ],
        activities: [
            { id: 'vocab-bank', title: 'Vocabulary Bank', type: 'interactive' },
            { id: 'quiz', title: 'Quiz', type: 'assessment' },
            { id: 'data-detective', title: 'Data Detective', type: 'interactive' },
            { id: 'exit-poll', title: 'Exit Poll', type: 'form' }
        ]
    }
};

// Initialize module page
function initializeModulePage(moduleId) {
    const module = moduleContent[moduleId];
    if (!module) return;
    
    // Set up tab navigation
    setupTabNavigation();
    
    // Load module content
    loadModuleContent(moduleId);
    
    // Update progress tracking
    trackModuleProgress(moduleId);
}

// Set up tab navigation
function setupTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Update active states
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Load module content
function loadModuleContent(moduleId) {
    const module = moduleContent[moduleId];
    
    // Load videos
    loadVideos(module.videos);
    
    // Load activities
    loadActivities(moduleId, module.activities);
    
    // Load quiz if exists
    if (module.quiz) {
        loadQuiz(moduleId, module.quiz);
    }
}

// Load video content
function loadVideos(videos) {
    const videoList = document.querySelector('.video-list');
    if (!videoList) return;
    
    videoList.innerHTML = videos.map(video => `
        <div class="video-item" data-video-id="${video.id}">
            <div class="video-thumbnail"></div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-duration">${video.duration}</div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', () => {
            playVideo(item.dataset.videoId);
        });
    });
}

// Play video (placeholder function)
function playVideo(videoId) {
    const player = document.querySelector('.video-player');
    if (player) {
        player.innerHTML = `
            <div class="video-placeholder">
                <p>Playing video: ${videoId}</p>
                <p>This is a placeholder for video content</p>
            </div>
        `;
    }
}

// Load activities
function loadActivities(moduleId, activities) {
    const container = document.querySelector('.activities-container');
    if (!container) return;
    
    activities.forEach(activity => {
        const activityCard = createActivityCard(moduleId, activity);
        container.appendChild(activityCard);
    });
}

// Create activity card
function createActivityCard(moduleId, activity) {
    const card = document.createElement('div');
    card.className = 'activity-card';
    card.innerHTML = `
        <div class="activity-header">
            <h3 class="activity-title">${activity.title}</h3>
            <span class="activity-status pending">Not Started</span>
        </div>
        <div class="activity-content" id="activity-${activity.id}">
            <!-- Activity content will be loaded here -->
        </div>
    `;
    
    // Load specific activity content
    setTimeout(() => {
        loadActivityContent(moduleId, activity);
    }, 100);
    
    return card;
}

// Load specific activity content based on type
function loadActivityContent(moduleId, activity) {
    const container = document.getElementById(`activity-${activity.id}`);
    if (!container) return;
    
    switch (activity.type) {
        case 'interactive':
            loadInteractiveActivity(container, moduleId, activity);
            break;
        case 'card-game':
            loadCardGameActivity(container, moduleId, activity);
            break;
        case 'form':
            loadFormActivity(container, moduleId, activity);
            break;
        case 'simulator':
            loadSimulatorActivity(container, moduleId, activity);
            break;
        case 'creative':
            loadCreativeActivity(container, moduleId, activity);
            break;
        case 'drawing':
            loadDrawingActivity(container, moduleId, activity);
            break;
        default:
            container.innerHTML = '<p>Activity type not implemented yet</p>';
    }
}

// Track module progress
function trackModuleProgress(moduleId) {
    // Implementation in progress.js
    updateModuleView(moduleId);
}

// Update module view with progress
function updateModuleView(moduleId) {
    const progress = getModuleProgress(moduleId);
    const progressBar = document.querySelector('.module-progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

// Get module progress
function getModuleProgress(moduleId) {
    const savedProgress = localStorage.getItem('aiLiteracyProgress');
    if (savedProgress) {
        const data = JSON.parse(savedProgress);
        return data.moduleProgress?.[moduleId] || 0;
    }
    return 0;
}

// Navigate back to dashboard
function goBack() {
    window.location.href = '../../index.html';
}

// Sidebar functionality (integrated from Sean's implementation)
function createLessonViewer() {
    const sidebar = document.createElement('div');
    sidebar.id = 'lesson-sidebar';
    sidebar.className = 'lesson-sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <h3>Lesson Contents</h3>
            <button class="sidebar-close" onclick="closeLessonSidebar()">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
        <div class="sidebar-content">
            <div class="lesson-sections">
                <p>Loading lesson contents...</p>
            </div>
        </div>
        <div class="sidebar-footer">
            <button class="sidebar-nav-btn" id="prev-lesson" onclick="navigateLesson('prev')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Previous
            </button>
            <button class="sidebar-nav-btn" id="next-lesson" onclick="navigateLesson('next')">
                Next
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                <button class="sidebar-nav-btn" onclick="if(window.resetModuleProgress && confirm('Are you sure you want to reset all progress? This cannot be undone.')) { window.resetModuleProgress(); }" style="width: 100%; background: #ef4444; color: white; border: none;">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1 4V10H7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M3.51 15A9 9 0 006 2.13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Reset Progress
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(sidebar);
    
    // Add toggle button to module pages
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'sidebar-toggle';
    toggleBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>Lesson Contents</span>
    `;
    toggleBtn.onclick = toggleLessonSidebar;
    
    const moduleContentElement = document.querySelector('.module-content');
    if (moduleContentElement) {
        moduleContentElement.insertBefore(toggleBtn, moduleContentElement.firstChild);
    }
}

// Toggle lesson sidebar
function toggleLessonSidebar() {
    const sidebar = document.getElementById('lesson-sidebar');
    if (!sidebar) {
        createLessonViewer();
        return openLessonSidebar();
    }
    
    if (sidebar.classList.contains('open')) {
        closeLessonSidebar();
    } else {
        openLessonSidebar();
    }
}

// Open lesson sidebar
function openLessonSidebar(moduleId) {
    const sidebar = document.getElementById('lesson-sidebar');
    if (!sidebar) {
        createLessonViewer();
        return openLessonSidebar(moduleId);
    }
    
    sidebar.classList.add('open');
    
    // Get current module ID if not provided
    if (!moduleId) {
        moduleId = window.currentModuleId || getCurrentModuleId();
    }
    
    // Load module content into sidebar
    loadSidebarContent(moduleId);
}

// Close lesson sidebar
function closeLessonSidebar() {
    const sidebar = document.getElementById('lesson-sidebar');
    if (sidebar) {
        sidebar.classList.remove('open');
    }
}

// Load content into sidebar
function loadSidebarContent(moduleId) {
    const module = moduleContent[moduleId];
    if (!module) return;
    
    const sectionsContainer = document.querySelector('.lesson-sections');
    if (!sectionsContainer) return;
    
    let currentSection = getCurrentSection();
    
    const htmlContent = `
        <div class="sidebar-section">
            <h4 class="section-title">📹 Video Lessons</h4>
            <div class="section-items">
                ${module.videos.map((video, index) => `
                    <div class="sidebar-item ${currentSection.type === 'video' && currentSection.index === index ? 'active' : ''}" 
                         onclick="loadLessonContent('video', ${index}, ${moduleId})">
                        <span class="item-number">${index + 1}</span>
                        <span class="item-title">${video.title}</span>
                        <span class="item-duration">${video.duration}</span>
                        <span class="item-status ${isCompleted(moduleId, 'video', video.id) ? 'completed' : ''}">
                            ${isCompleted(moduleId, 'video', video.id) ? '✓' : ''}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="sidebar-section">
            <h4 class="section-title">🎯 Activities</h4>
            <div class="section-items">
                ${module.activities.map((activity, index) => `
                    <div class="sidebar-item ${currentSection.type === 'activity' && currentSection.index === index ? 'active' : ''}" 
                         onclick="loadLessonContent('activity', ${index}, ${moduleId})">
                        <span class="item-number">${index + 1}</span>
                        <span class="item-title">${activity.title}</span>
                        <span class="item-status ${isCompleted(moduleId, 'activity', activity.id) ? 'completed' : ''}">
                            ${isCompleted(moduleId, 'activity', activity.id) ? '✓' : ''}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="sidebar-section">
            <h4 class="section-title">📝 Assessment</h4>
            <div class="section-items">
                <div class="sidebar-item ${currentSection.type === 'quiz' ? 'active' : ''}" 
                     onclick="loadLessonContent('quiz', 0, ${moduleId})">
                    <span class="item-number">📝</span>
                    <span class="item-title">Module Quiz</span>
                    <span class="item-status ${isCompleted(moduleId, 'quiz', 'quiz') ? 'completed' : ''}">
                        ${isCompleted(moduleId, 'quiz', 'quiz') ? '✓' : ''}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    sectionsContainer.innerHTML = htmlContent;
}

// Load lesson content based on sidebar selection
function loadLessonContent(type, index, moduleId) {
    // For activities, use the existing openActivityWindow function
    if (type === 'activity') {
        const module = moduleContent[moduleId];
        const activity = module.activities[index];
        if (activity && window.openActivityWindow) {
            window.openActivityWindow(activity.id);
        }
    } else if (type === 'quiz') {
        if (window.openActivityWindow) {
            window.openActivityWindow('assessment');
        }
    } else if (type === 'video') {
        // For videos, we'll highlight the section in the main content
        const contentSections = document.querySelectorAll('.content-section');
        if (contentSections[index]) {
            contentSections[index].scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Update active state in sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`.sidebar-item[onclick*="${type}, ${index}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        closeLessonSidebar();
    }
}

// Navigate through lessons
function navigateLesson(direction) {
    // This would implement prev/next navigation
    // For now, we'll keep it simple and just close the sidebar
    closeLessonSidebar();
}

// Helper functions
function getCurrentSection() {
    // Simple implementation - could be enhanced based on current content
    return { type: 'video', index: 0 };
}

function getCurrentModuleId() {
    // Extract module ID from URL or use currentModuleId
    return window.currentModuleId || 1;
}

function isCompleted(moduleId, type, id) {
    // Check if item is completed using progress tracker
    if (window.progressTracker && typeof window.progressTracker.getModuleProgress === 'function') {
        try {
            const progress = window.progressTracker.getModuleProgress(moduleId);
            if (progress) {
                if (type === 'video') {
                    return progress.videosWatched && progress.videosWatched.includes(id);
                } else if (type === 'activity') {
                    return progress.activitiesCompleted && progress.activitiesCompleted.includes(id);
                } else if (type === 'quiz') {
                    return progress.quizCompleted;
                }
            }
        } catch (error) {
            console.log('Progress tracking error:', error);
        }
    }
    return false;
}

// Export functions
window.moduleManager = {
    initializeModulePage,
    loadModuleContent,
    trackModuleProgress,
    goBack,
    createLessonViewer,
    openLessonSidebar,
    closeLessonSidebar,
    toggleLessonSidebar,
    loadLessonContent,
    loadSidebarContent,
    navigateLesson
};

// Export moduleContent
window.moduleContent = moduleContent;

// Make sidebar functions globally available
window.closeLessonSidebar = closeLessonSidebar;
window.toggleLessonSidebar = toggleLessonSidebar;
window.loadLessonContent = loadLessonContent;
window.navigateLesson = navigateLesson;