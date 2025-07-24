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

// Export functions
window.moduleManager = {
    initializeModulePage,
    loadModuleContent,
    trackModuleProgress,
    goBack
};

// Export moduleContent
window.moduleContent = moduleContent;