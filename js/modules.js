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
        title: 'Professional Development',
        videos: [
            { id: 'v1', title: 'Teaching AI Effectively', duration: '12:40', url: 'placeholder' },
            { id: 'v2', title: 'Future of Education', duration: '10:55', url: 'placeholder' },
            { id: 'v3', title: 'Case Studies', duration: '15:00', url: 'placeholder' },
            { id: 'v4', title: 'Best Practices', duration: '11:25', url: 'placeholder' }
        ],
        activities: [
            { id: 'mock-lesson', title: 'Practice Teaching', type: 'presentation' },
            { id: 'future-classroom', title: '2035 Classroom Vision', type: 'drawing' },
            { id: 'final-project', title: 'Final Project', type: 'submission' }
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

// Create lesson viewer sidebar
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
            <div class="lesson-sections"></div>
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
    
    const moduleContent = document.querySelector('.module-content');
    if (moduleContent) {
        moduleContent.insertBefore(toggleBtn, moduleContent.firstChild);
    }
}

// Toggle lesson sidebar
function toggleLessonSidebar() {
    const sidebar = document.getElementById('lesson-sidebar');
    const isOpen = sidebar.classList.contains('open');
    
    if (!isOpen) {
        openLessonSidebar();
    } else {
        closeLessonSidebar();
    }
}

// Open lesson sidebar with module content
function openLessonSidebar(moduleId = null) {
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
    
    sectionsContainer.innerHTML = `
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
        
        ${module.quiz ? `
        <div class="sidebar-section">
            <h4 class="section-title">📝 Assessment</h4>
            <div class="section-items">
                <div class="sidebar-item ${currentSection.type === 'quiz' ? 'active' : ''}" 
                     onclick="loadLessonContent('quiz', 0, ${moduleId})">
                    <span class="item-title">Module Quiz</span>
                    <span class="item-status ${isCompleted(moduleId, 'quiz') ? 'completed' : ''}">
                        ${isCompleted(moduleId, 'quiz') ? '✓' : ''}
                    </span>
                </div>
            </div>
        </div>
        ` : ''}
    `;
    
    // Update navigation buttons
    updateSidebarNavigation();
}

// Get current section info
function getCurrentSection() {
    const activeTab = document.querySelector('.tab-btn.active');
    const tabType = activeTab ? activeTab.dataset.tab : 'videos';
    
    // Try to determine current index based on active content
    let index = 0;
    
    return { type: tabType, index: index };
}

// Check if content is completed
function isCompleted(moduleId, type, itemId) {
    const progress = window.progressState?.modules[moduleId];
    if (!progress) return false;
    
    switch (type) {
        case 'video':
            return progress.videos[itemId] ? true : false;
        case 'activity':
            return progress.activities[itemId] ? true : false;
        case 'quiz':
            return progress.quiz?.completed || false;
        default:
            return false;
    }
}

// Load lesson content from sidebar
function loadLessonContent(type, index, moduleId) {
    const module = moduleContent[moduleId];
    if (!module) return;
    
    // Switch to appropriate tab
    const tabMap = {
        'video': 'videos',
        'activity': 'activities',
        'quiz': 'quiz'
    };
    
    const targetTab = tabMap[type];
    const tabBtn = document.querySelector(`[data-tab="${targetTab}"]`);
    if (tabBtn) {
        tabBtn.click();
    }
    
    // Load specific content
    setTimeout(() => {
        switch (type) {
            case 'video':
                const videoItem = document.querySelectorAll('.video-item')[index];
                if (videoItem) videoItem.click();
                break;
            
            case 'activity':
                const activityCard = document.querySelectorAll('.activity-card')[index];
                if (activityCard) {
                    activityCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // For Truth or Hallucination activity, ensure it's visible
                    const activity = module.activities[index];
                    if (activity && activity.id === 'truth-hallucination') {
                        // Force expand/highlight the activity
                        const activityContent = activityCard.querySelector('.activity-content');
                        if (activityContent && activityContent.style.display === 'none') {
                            activityContent.style.display = 'block';
                        }
                        
                        // Add highlight effect
                        activityCard.style.border = '2px solid var(--primary-color)';
                        activityCard.style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.3)';
                        
                        // Remove highlight after 2 seconds
                        setTimeout(() => {
                            activityCard.style.border = '';
                            activityCard.style.boxShadow = '';
                        }, 2000);
                    }
                }
                break;
            
            case 'quiz':
                const startQuizBtn = document.querySelector('.quiz-intro button');
                if (startQuizBtn) startQuizBtn.click();
                break;
        }
        
        // Update sidebar active state
        updateSidebarActiveState(type, index);
    }, 300);
}

// Update sidebar active state
function updateSidebarActiveState(type, index) {
    // Remove all active states
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active state to current item
    const sections = document.querySelectorAll('.sidebar-section');
    const sectionMap = { 'video': 0, 'activity': 1, 'quiz': 2 };
    const sectionIndex = sectionMap[type];
    
    if (sections[sectionIndex]) {
        const items = sections[sectionIndex].querySelectorAll('.sidebar-item');
        if (items[index]) {
            items[index].classList.add('active');
        }
    }
}

// Navigate between lessons
function navigateLesson(direction) {
    const moduleId = window.currentModuleId || getCurrentModuleId();
    const module = moduleContent[moduleId];
    if (!module) return;
    
    const allItems = [
        ...module.videos.map((v, i) => ({ type: 'video', index: i })),
        ...module.activities.map((a, i) => ({ type: 'activity', index: i })),
        ...(module.quiz ? [{ type: 'quiz', index: 0 }] : [])
    ];
    
    const currentSection = getCurrentSection();
    const currentIndex = allItems.findIndex(item => 
        item.type === currentSection.type && item.index === currentSection.index
    );
    
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= 0 && nextIndex < allItems.length) {
        const nextItem = allItems[nextIndex];
        loadLessonContent(nextItem.type, nextItem.index, moduleId);
    }
}

// Update navigation buttons
function updateSidebarNavigation() {
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    
    // Logic to enable/disable navigation buttons based on current position
    // This would need to be implemented based on current content state
}

// Get current module ID
function getCurrentModuleId() {
    // Extract from URL or page content
    const match = window.location.pathname.match(/module(\d+)/);
    return match ? parseInt(match[1]) : 1;
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
    navigateLesson
};

// Export moduleContent
window.moduleContent = moduleContent;

// Make functions globally available
window.closeLessonSidebar = closeLessonSidebar;
window.toggleLessonSidebar = toggleLessonSidebar;
window.loadLessonContent = loadLessonContent;
window.navigateLesson = navigateLesson;