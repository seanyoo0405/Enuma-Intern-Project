// Module navigation and content management

// Module content structure - 5 Unit Curriculum
const moduleContent = {
    1: {
        title: 'Problem Solving with AI',
        description: 'AI as an Assistant, AI Limitations, Bias and Hallucinations, AI for Creativity, AI in Decision-Making',
        videos: [
            { id: 'v1', title: 'AI as Your Assistant', duration: '12:30', url: 'placeholder' },
            { id: 'v2', title: 'Understanding AI Limitations', duration: '10:45', url: 'placeholder' },
            { id: 'v3', title: 'Bias and Hallucinations in AI', duration: '14:20', url: 'placeholder' },
            { id: 'v4', title: 'AI for Creative Problem Solving', duration: '11:15', url: 'placeholder' },
            { id: 'v5', title: 'AI in Decision-Making', duration: '13:00', url: 'placeholder' }
        ],
        activities: [
            { id: 'ai-assistant-demo', title: 'AI Assistant Challenge', type: 'interactive' },
            { id: 'bias-hallucination-game', title: 'Spot the Bias & Hallucination', type: 'interactive' },
            { id: 'creative-ai-project', title: 'Creative AI Project', type: 'creative' },
            { id: 'decision-making-scenario', title: 'AI Decision Making Scenarios', type: 'simulation' }
        ],
        quiz: {
            questions: [
                {
                    id: 'q1',
                    text: 'What is a key limitation of AI assistants?',
                    options: [
                        'They can hallucinate or generate false information',
                        'They are too expensive',
                        'They work too slowly',
                        'They only understand English'
                    ],
                    correct: 0
                },
                {
                    id: 'q2',
                    text: 'AI bias occurs when:',
                    options: [
                        'AI systems favor certain groups over others',
                        'AI runs out of battery',
                        'AI processes data too quickly',
                        'AI costs too much money'
                    ],
                    correct: 0
                },
                {
                    id: 'q3',
                    text: 'Which area can AI effectively assist with creativity?',
                    options: [
                        'Replacing human imagination entirely',
                        'Generating ideas and initial concepts',
                        'Making all creative decisions',
                        'Eliminating the need for human input'
                    ],
                    correct: 1
                }
            ]
        }
    },
    2: {
        title: 'Foundations of AI Programming',
        description: 'Variables, Loops, Conditionals, Functions, Debugging, Ethical Computing',
        videos: [
            { id: 'v1', title: 'Variables in AI Programming', duration: '10:30', url: 'placeholder' },
            { id: 'v2', title: 'Loops and Iteration', duration: '12:15', url: 'placeholder' },
            { id: 'v3', title: 'Conditionals and Logic', duration: '11:45', url: 'placeholder' },
            { id: 'v4', title: 'Functions and Modularity', duration: '13:20', url: 'placeholder' },
            { id: 'v5', title: 'Debugging AI Code', duration: '9:40', url: 'placeholder' },
            { id: 'v6', title: 'Ethical Computing Principles', duration: '15:10', url: 'placeholder' }
        ],
        activities: [
            { id: 'variable-practice', title: 'AI Variable Playground', type: 'coding' },
            { id: 'loop-challenge', title: 'Loop Logic Challenge', type: 'coding' },
            { id: 'conditional-game', title: 'Conditional Decision Tree', type: 'interactive' },
            { id: 'function-builder', title: 'AI Function Builder', type: 'coding' },
            { id: 'debug-detective', title: 'Debug Detective', type: 'debugging' },
            { id: 'ethics-scenarios', title: 'Ethical Computing Scenarios', type: 'discussion' }
        ],
        quiz: {
            questions: [
                {
                    id: 'q1',
                    text: 'What is a variable in programming?',
                    options: [
                        'A container that stores data values',
                        'A type of computer virus',
                        'A broken piece of code',
                        'A programming language'
                    ],
                    correct: 0
                },
                {
                    id: 'q2',
                    text: 'What does a loop do in programming?',
                    options: [
                        'Breaks the program',
                        'Repeats a set of instructions',
                        'Stores data permanently',
                        'Connects to the internet'
                    ],
                    correct: 1
                },
                {
                    id: 'q3',
                    text: 'Why is ethical computing important in AI?',
                    options: [
                        'It makes programs run faster',
                        'It ensures AI systems are fair and beneficial',
                        'It reduces electricity costs',
                        'It makes code easier to read'
                    ],
                    correct: 1
                }
            ]
        }
    },
    3: {
        title: 'AI and the Systems That Power It',
        description: 'Hardware, Software, Data Processing, IoT, Emerging Technologies',
        videos: [
            { id: 'v1', title: 'Hardware for AI Systems', duration: '13:45', url: 'placeholder' },
            { id: 'v2', title: 'AI Software Architecture', duration: '11:30', url: 'placeholder' },
            { id: 'v3', title: 'Data Processing in AI', duration: '14:20', url: 'placeholder' },
            { id: 'v4', title: 'Internet of Things (IoT) and AI', duration: '12:10', url: 'placeholder' },
            { id: 'v5', title: 'Emerging AI Technologies', duration: '16:00', url: 'placeholder' }
        ],
        activities: [
            { id: 'hardware-explorer', title: 'AI Hardware Explorer', type: 'interactive' },
            { id: 'data-pipeline', title: 'Build a Data Pipeline', type: 'simulation' },
            { id: 'iot-designer', title: 'IoT System Designer', type: 'design' },
            { id: 'tech-trends', title: 'Emerging Tech Trends Research', type: 'research' },
            { id: 'system-architecture', title: 'Design AI System Architecture', type: 'design' }
        ],
        quiz: {
            questions: [
                {
                    id: 'q1',
                    text: 'What type of hardware is most important for training AI models?',
                    options: [
                        'Graphics Processing Units (GPUs)',
                        'Computer mice',
                        'Keyboards',
                        'Speakers'
                    ],
                    correct: 0
                },
                {
                    id: 'q2',
                    text: 'What does IoT stand for?',
                    options: [
                        'Internet of Things',
                        'Intelligence of Technology',
                        'Integration of Tools',
                        'Information on Time'
                    ],
                    correct: 0
                },
                {
                    id: 'q3',
                    text: 'Why is data processing crucial for AI systems?',
                    options: [
                        'It makes computers prettier',
                        'AI needs clean, organized data to learn effectively',
                        'It reduces internet costs',
                        'It makes programs load faster'
                    ],
                    correct: 1
                }
            ]
        }
    },
    4: {
        title: 'The Fabric of the Internet and AI',
        description: 'Data Transmission, IP Addresses, Cybersecurity, Digital Divide',
        videos: [
            { id: 'v1', title: 'How AI Data Travels the Internet', duration: '12:20', url: 'placeholder' },
            { id: 'v2', title: 'IP Addresses and AI Networks', duration: '10:45', url: 'placeholder' },
            { id: 'v3', title: 'Cybersecurity for AI Systems', duration: '15:30', url: 'placeholder' },
            { id: 'v4', title: 'Digital Divide and AI Access', duration: '13:15', url: 'placeholder' },
            { id: 'v5', title: 'AI in Network Infrastructure', duration: '11:00', url: 'placeholder' }
        ],
        activities: [
            { id: 'data-journey', title: 'Trace AI Data Journey', type: 'simulation' },
            { id: 'ip-explorer', title: 'IP Address Explorer', type: 'interactive' },
            { id: 'security-audit', title: 'AI Security Audit', type: 'assessment' },
            { id: 'digital-divide-analysis', title: 'Digital Divide Impact Study', type: 'research' },
            { id: 'network-design', title: 'Design AI Network', type: 'design' }
        ],
        quiz: {
            questions: [
                {
                    id: 'q1',
                    text: 'What is an IP address?',
                    options: [
                        'A unique identifier for devices on the internet',
                        'A type of AI algorithm',
                        'A programming language',
                        'A cybersecurity threat'
                    ],
                    correct: 0
                },
                {
                    id: 'q2',
                    text: 'What is the digital divide?',
                    options: [
                        'A mathematical calculation',
                        'The gap between those with and without access to technology',
                        'A type of computer virus',
                        'A programming error'
                    ],
                    correct: 1
                },
                {
                    id: 'q3',
                    text: 'Why is cybersecurity important for AI systems?',
                    options: [
                        'To protect against malicious attacks and data breaches',
                        'To make AI run faster',
                        'To reduce electricity costs',
                        'To improve user interfaces'
                    ],
                    correct: 0
                }
            ]
        }
    },
    5: {
        title: 'Cybersecurity and Global Impacts',
        description: 'Privacy, Security Risks, Ethical Computing, Encryption',
        videos: [
            { id: 'v1', title: 'AI and Privacy Protection', duration: '14:30', url: 'placeholder' },
            { id: 'v2', title: 'Security Risks in AI Systems', duration: '12:45', url: 'placeholder' },
            { id: 'v3', title: 'Ethical Computing in Practice', duration: '16:20', url: 'placeholder' },
            { id: 'v4', title: 'Encryption and AI Data', duration: '11:15', url: 'placeholder' },
            { id: 'v5', title: 'Global Impact of AI Technology', duration: '18:00', url: 'placeholder' }
        ],
        activities: [
            { id: 'privacy-audit', title: 'AI Privacy Audit', type: 'assessment' },
            { id: 'threat-modeling', title: 'AI Threat Modeling', type: 'security' },
            { id: 'ethics-framework', title: 'Build Ethics Framework', type: 'framework' },
            { id: 'encryption-lab', title: 'Encryption Laboratory', type: 'hands-on' },
            { id: 'global-impact-study', title: 'Global AI Impact Study', type: 'research' },
            { id: 'policy-proposal', title: 'AI Policy Proposal', type: 'policy' }
        ],
        quiz: {
            questions: [
                {
                    id: 'q1',
                    text: 'What is encryption?',
                    options: [
                        'A way to secure data by converting it into code',
                        'A type of AI algorithm',
                        'A programming language',
                        'A computer virus'
                    ],
                    correct: 0
                },
                {
                    id: 'q2',
                    text: 'What is a major privacy concern with AI systems?',
                    options: [
                        'They consume too much electricity',
                        'They can collect and misuse personal data',
                        'They are too expensive',
                        'They work too slowly'
                    ],
                    correct: 1
                },
                {
                    id: 'q3',
                    text: 'Why should we consider the global impact of AI?',
                    options: [
                        'AI affects societies, economies, and individuals worldwide',
                        'It makes programming easier',
                        'It reduces internet costs',
                        'It makes computers run faster'
                    ],
                    correct: 0
                }
            ]
        }
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