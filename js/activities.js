// Interactive activities implementation

// Load interactive activity (drag and drop classification)
function loadInteractiveActivity(container, moduleId, activity) {
    if (activity.id === 'truth-hallucination') {
        container.innerHTML = `
            <div class="truth-game-container">
                <h4>Truth or Hallucination?</h4>
                <p>Read each statement and decide if it's a real fact or an AI hallucination (made-up information).</p>
                <div class="game-instructions">
                    <p><strong>Instructions:</strong> Click "Truth" if you think the statement is a real fact, or "Hallucination" if you think it's AI-generated misinformation.</p>
                </div>
                <div class="statements-container" id="statements-container">
                    ${generateTruthStatements()}
                </div>
                <div class="game-controls">
                    <button class="activity-btn" onclick="checkTruthAnswers('${activity.id}', ${moduleId})">Check My Answers</button>
                    <button class="activity-btn" onclick="resetTruthGame('${activity.id}')" style="display: none;" id="reset-btn">Try Again</button>
                </div>
                <div class="feedback-area" id="feedback-${activity.id}"></div>
            </div>
        `;
        
        setupTruthGame();
    } else if (activity.id === 'bias-experience') {
        container.innerHTML = `
            <div class="bias-game-container">
                <h4>AI Career Prediction Game</h4>
                <p>Click on photos to see AI predictions. Notice any patterns?</p>
                <div class="photo-grid">
                    ${generateBiasGamePhotos()}
                </div>
                <div class="bias-discussion">
                    <h4>Reflection Questions:</h4>
                    <ul>
                        <li>Did you notice any patterns in the AI's predictions?</li>
                        <li>How might this bias affect real job applications?</li>
                        <li>What can we do to make AI more fair?</li>
                    </ul>
                    <textarea class="reflection-input" placeholder="Write your thoughts here..."></textarea>
                    <button class="activity-btn" onclick="submitReflection('${activity.id}', ${moduleId})">Submit Reflection</button>
                </div>
            </div>
        `;
        
        setupBiasGame();
    }
}

// Load card game activity
function loadCardGameActivity(container, moduleId, activity) {
    if (activity.id === 'friend-recommendation') {
        container.innerHTML = `
            <div class="card-game-container">
                <h4>Becoming a Friend Recommendation AI</h4>
                <p>Match students with similar interests to recommend friendships!</p>
                <div class="student-cards">
                    ${generateStudentCards()}
                </div>
                <div class="recommendation-area">
                    <h4>Your Recommendations:</h4>
                    <div class="recommendation-pairs" id="recommendation-pairs"></div>
                    <button class="activity-btn" onclick="checkRecommendations('${activity.id}', ${moduleId})">Check Recommendations</button>
                </div>
            </div>
        `;
        
        setupCardMatching();
    } else if (activity.id === 'fish-classification') {
        container.innerHTML = `
            <div class="classification-demo">
                <h4>Fish vs Shark Classifier</h4>
                <div class="classification-grid">
                    ${generateFishImages()}
                </div>
                <div class="classification-controls">
                    <button class="activity-btn" onclick="trainClassifier('${activity.id}')">Train AI</button>
                    <button class="activity-btn" onclick="testClassifier('${activity.id}', ${moduleId})">Test Classifier</button>
                </div>
                <div class="results-area" id="classification-results"></div>
            </div>
        `;
    }
}

// Load form activity (lesson plan creator)
function loadFormActivity(container, moduleId, activity) {
    if (activity.id === 'lesson-plan') {
        container.innerHTML = `
            <div class="lesson-plan-form">
                <h4>Create an AI Lesson Plan</h4>
                <form id="lesson-plan-form">
                    <div class="form-group">
                        <label>Lesson Title:</label>
                        <input type="text" name="title" required placeholder="e.g., Introduction to AI Image Recognition">
                    </div>
                    <div class="form-group">
                        <label>Grade Level:</label>
                        <select name="grade" required>
                            <option value="">Select Grade</option>
                            <option value="3-5">Grades 3-5</option>
                            <option value="6-8">Grades 6-8</option>
                            <option value="9-12">Grades 9-12</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Learning Objectives:</label>
                        <textarea name="objectives" rows="3" required placeholder="What will students learn?"></textarea>
                    </div>
                    <div class="form-group">
                        <label>UNESCO Framework Component:</label>
                        <div class="checkbox-group">
                            <label><input type="checkbox" name="framework" value="understand"> Understand AI</label>
                            <label><input type="checkbox" name="framework" value="apply"> Apply AI</label>
                            <label><input type="checkbox" name="framework" value="create"> Create with AI</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Activities:</label>
                        <textarea name="activities" rows="4" required placeholder="Describe the main activities"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Assessment Method:</label>
                        <textarea name="assessment" rows="2" required placeholder="How will you assess learning?"></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="activity-btn secondary" onclick="previewLessonPlan()">Preview</button>
                        <button type="submit" class="activity-btn primary">Save Lesson Plan</button>
                    </div>
                </form>
                <div class="lesson-preview" id="lesson-preview"></div>
            </div>
        `;
        
        setupLessonPlanForm(activity.id, moduleId);
    }
}

// Load simulator activity
function loadSimulatorActivity(container, moduleId, activity) {
    if (activity.id === 'chat-lab') {
        container.innerHTML = `
            <div class="chat-simulator">
                <h4>Math Helper Chatbot Lab</h4>
                <div class="chat-config">
                    <h5>Configure your chatbot:</h5>
                    <div class="config-options">
                        <label>
                            <input type="checkbox" id="explain-steps" checked>
                            Explain steps clearly
                        </label>
                        <label>
                            <input type="checkbox" id="use-examples">
                            Provide examples
                        </label>
                        <label>
                            <input type="checkbox" id="encourage">
                            Give encouragement
                        </label>
                    </div>
                </div>
                <div class="chat-interface">
                    <div class="chat-messages" id="chat-messages">
                        <div class="message bot">Hello! I'm your Math Helper. What would you like help with today?</div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" id="chat-input" placeholder="Ask a math question...">
                        <button class="send-btn" onclick="sendChatMessage('${activity.id}', ${moduleId})">Send</button>
                    </div>
                </div>
                <button class="activity-btn" onclick="saveChatbot('${activity.id}', ${moduleId})">Save Chatbot Design</button>
            </div>
        `;
        
        setupChatSimulator();
    }
}

// Load creative activity
function loadCreativeActivity(container, moduleId, activity) {
    if (activity.id === 'image-generation') {
        container.innerHTML = `
            <div class="image-gen-interface">
                <h4>AI Art Creator</h4>
                <div class="prompt-builder">
                    <h5>Build your image prompt:</h5>
                    <div class="prompt-options">
                        <select id="subject">
                            <option value="">Choose subject...</option>
                            <option value="a robot">A robot</option>
                            <option value="a classroom">A classroom</option>
                            <option value="students">Students</option>
                            <option value="a teacher">A teacher</option>
                        </select>
                        <select id="style">
                            <option value="">Choose style...</option>
                            <option value="cartoon">Cartoon</option>
                            <option value="realistic">Realistic</option>
                            <option value="watercolor">Watercolor</option>
                            <option value="pixel art">Pixel art</option>
                        </select>
                        <select id="mood">
                            <option value="">Choose mood...</option>
                            <option value="happy">Happy</option>
                            <option value="peaceful">Peaceful</option>
                            <option value="exciting">Exciting</option>
                            <option value="futuristic">Futuristic</option>
                        </select>
                    </div>
                    <div class="prompt-display">
                        <p>Your prompt: <span id="final-prompt"></span></p>
                    </div>
                    <button class="activity-btn" onclick="generateAIImage('${activity.id}', ${moduleId})">Generate Image</button>
                </div>
                <div class="generated-images" id="generated-images">
                    <!-- Generated images will appear here -->
                </div>
            </div>
        `;
        
        setupImageGenerator();
    } else if (activity.id === 'portfolio') {
        container.innerHTML = `
            <div class="portfolio-builder">
                <h4>Build Your AI Portfolio</h4>
                <div class="portfolio-sections">
                    <div class="portfolio-section">
                        <h5>Your Creations</h5>
                        <div class="creation-grid" id="creation-grid">
                            <!-- Saved creations will appear here -->
                        </div>
                    </div>
                    <div class="portfolio-section">
                        <h5>Add Description</h5>
                        <textarea id="portfolio-description" placeholder="Describe your AI learning journey..."></textarea>
                    </div>
                    <div class="portfolio-section">
                        <h5>Share Settings</h5>
                        <label>
                            <input type="checkbox" id="share-public"> Make portfolio public
                        </label>
                        <label>
                            <input type="checkbox" id="share-classmates"> Share with classmates
                        </label>
                    </div>
                    <button class="activity-btn" onclick="savePortfolio('${activity.id}', ${moduleId})">Save Portfolio</button>
                </div>
            </div>
        `;
        
        loadPortfolioItems();
    }
}

// Load drawing activity
function loadDrawingActivity(container, moduleId, activity) {
    if (activity.id === 'future-classroom') {
        container.innerHTML = `
            <div class="drawing-activity">
                <h4>Draw Your 2035 AI-Powered Classroom</h4>
                <canvas id="drawing-canvas" class="drawing-canvas" width="800" height="400"></canvas>
                <div class="canvas-tools">
                    <button class="tool-btn active" data-tool="pen">Pen</button>
                    <button class="tool-btn" data-tool="eraser">Eraser</button>
                    <button class="tool-btn" data-tool="text">Text</button>
                    <input type="color" class="color-picker" id="color-picker" value="#000000">
                    <input type="range" id="brush-size" min="1" max="20" value="3">
                    <button class="tool-btn" onclick="clearCanvas()">Clear</button>
                    <button class="activity-btn" onclick="saveDrawing('${activity.id}', ${moduleId})">Save Drawing</button>
                </div>
                <div class="drawing-prompts">
                    <h5>Ideas to include:</h5>
                    <ul>
                        <li>AI teaching assistants</li>
                        <li>Personalized learning stations</li>
                        <li>Virtual reality areas</li>
                        <li>Collaborative AI projects</li>
                    </ul>
                </div>
            </div>
        `;
        
        setupDrawingCanvas();
    } else if (activity.id === 'mock-lesson') {
        container.innerHTML = `
            <div class="mock-lesson-activity">
                <h4>Practice Teaching with AI</h4>
                <div class="lesson-setup">
                    <h5>Lesson Setup</h5>
                    <select id="lesson-topic">
                        <option value="">Choose your AI topic...</option>
                        <option value="intro">What is AI?</option>
                        <option value="ml">How Machines Learn</option>
                        <option value="ethics">AI Ethics</option>
                        <option value="create">Creating with AI</option>
                    </select>
                    <select id="lesson-duration">
                        <option value="5">5 minutes</option>
                        <option value="10">10 minutes</option>
                        <option value="15">15 minutes</option>
                    </select>
                </div>
                <div class="timer-container">
                    <div class="timer-display" id="timer-display">00:00</div>
                    <div class="timer-controls">
                        <button class="timer-btn start" onclick="startTimer()">Start</button>
                        <button class="timer-btn stop" onclick="stopTimer()">Stop</button>
                        <button class="timer-btn reset" onclick="resetTimer()">Reset</button>
                    </div>
                </div>
                <div class="recording-section">
                    <button class="activity-btn record-btn" onclick="toggleRecording('${activity.id}', ${moduleId})">
                        <span class="record-icon">●</span> Start Recording
                    </button>
                    <div class="recording-status" id="recording-status"></div>
                </div>
                <div class="lesson-notes">
                    <h5>Lesson Notes</h5>
                    <textarea id="lesson-notes" placeholder="Add your teaching notes here..."></textarea>
                </div>
            </div>
        `;
        
        setupMockLesson();
    }
}

// Setup functions for activities
function setupDragAndDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dragItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.outerHTML);
            e.dataTransfer.setData('type', e.target.dataset.type);
            e.target.classList.add('dragging');
        });
        
        item.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const itemHTML = e.dataTransfer.getData('text/plain');
            const itemType = e.dataTransfer.getData('type');
            const droppedItems = zone.querySelector('.dropped-items');
            
            const newItem = document.createElement('div');
            newItem.innerHTML = itemHTML;
            newItem.firstChild.dataset.type = itemType;
            droppedItems.appendChild(newItem.firstChild);
            
            // Remove from original location
            const draggingItem = document.querySelector('.dragging');
            if (draggingItem) {
                draggingItem.remove();
            }
        });
    });
}

// Check classification answers
function checkClassification(activityId, moduleId) {
    const aiZone = document.querySelector('[data-category="ai"] .dropped-items');
    const notAiZone = document.querySelector('[data-category="not-ai"] .dropped-items');
    
    let correct = 0;
    let total = 0;
    
    // Check AI zone
    aiZone.querySelectorAll('.drag-item').forEach(item => {
        total++;
        if (item.dataset.type === 'ai') correct++;
    });
    
    // Check Not-AI zone
    notAiZone.querySelectorAll('.drag-item').forEach(item => {
        total++;
        if (item.dataset.type === 'not-ai') correct++;
    });
    
    const feedback = document.getElementById(`feedback-${activityId}`);
    const percentage = Math.round((correct / total) * 100);
    
    feedback.innerHTML = `
        <div class="feedback ${percentage === 100 ? 'success' : 'partial'}">
            <h4>Results: ${correct}/${total} correct (${percentage}%)</h4>
            ${percentage === 100 ? 
                '<p>Excellent! You correctly classified all items!</p>' : 
                '<p>Good try! Review the items and try again.</p>'
            }
        </div>
    `;
    
    if (percentage === 100) {
        window.aiLiteracy.completeActivity(moduleId, activityId);
    }
}

// Generate student cards for matching game
function generateStudentCards() {
    const students = [
        { name: 'Alex', interests: ['Soccer', 'Video Games', 'Science'] },
        { name: 'Jordan', interests: ['Basketball', 'Music', 'Math'] },
        { name: 'Sam', interests: ['Soccer', 'Art', 'Science'] },
        { name: 'Casey', interests: ['Reading', 'Music', 'Math'] },
        { name: 'Morgan', interests: ['Video Games', 'Coding', 'Science'] },
        { name: 'Taylor', interests: ['Basketball', 'Video Games', 'Art'] }
    ];
    
    return students.map((student, index) => `
        <div class="student-card" data-student-id="${index}" data-interests='${JSON.stringify(student.interests)}'>
            <div class="student-avatar">${student.name[0]}</div>
            <h5>${student.name}</h5>
            <div class="interests">
                ${student.interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Setup card matching for friend recommendations
function setupCardMatching() {
    const cards = document.querySelectorAll('.student-card');
    let selectedCards = [];
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (selectedCards.length < 2 && !selectedCards.includes(card)) {
                card.classList.add('selected');
                selectedCards.push(card);
                
                if (selectedCards.length === 2) {
                    // Create recommendation pair
                    const pairsContainer = document.getElementById('recommendation-pairs');
                    const pair = document.createElement('div');
                    pair.className = 'friend-pair';
                    pair.innerHTML = `
                        <span>${selectedCards[0].querySelector('h5').textContent}</span>
                        <span>↔</span>
                        <span>${selectedCards[1].querySelector('h5').textContent}</span>
                        <button class="remove-pair" onclick="this.parentElement.remove()">×</button>
                    `;
                    pairsContainer.appendChild(pair);
                    
                    // Reset selection
                    selectedCards.forEach(c => c.classList.remove('selected'));
                    selectedCards = [];
                }
            }
        });
    });
}

// Drawing canvas setup
function setupDrawingCanvas() {
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let currentTool = 'pen';
    let currentColor = '#000000';
    let brushSize = 3;
    
    // Tool selection
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTool = btn.dataset.tool;
        });
    });
    
    // Color picker
    document.getElementById('color-picker').addEventListener('change', (e) => {
        currentColor = e.target.value;
    });
    
    // Brush size
    document.getElementById('brush-size').addEventListener('change', (e) => {
        brushSize = e.target.value;
    });
    
    // Drawing events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    function startDrawing(e) {
        drawing = true;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    
    function draw(e) {
        if (!drawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        
        if (currentTool === 'pen') {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = currentColor;
        } else if (currentTool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
        }
        
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    
    function stopDrawing() {
        drawing = false;
        ctx.beginPath();
    }
}

// Clear canvas
function clearCanvas() {
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Save drawing
function saveDrawing(activityId, moduleId) {
    const canvas = document.getElementById('drawing-canvas');
    const dataURL = canvas.toDataURL();
    
    // Save to localStorage
    const drawings = JSON.parse(localStorage.getItem('aiDrawings') || '[]');
    drawings.push({
        id: Date.now(),
        activityId,
        moduleId,
        data: dataURL,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('aiDrawings', JSON.stringify(drawings));
    
    // Complete activity
    window.aiLiteracy.completeActivity(moduleId, activityId);
    
    // Show success message
    alert('Drawing saved successfully!');
}

// Timer functionality
let timerInterval;
let timerSeconds = 0;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const display = document.getElementById('timer-display');
    if (display) {
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Generate truth/hallucination statements
function generateTruthStatements() {
    const statements = [
        {
            id: 1,
            text: "The Great Wall of China is visible from space with the naked eye.",
            isTrue: false,
            explanation: "This is a common myth! The Great Wall is not visible from space without aid."
        },
        {
            id: 2,
            text: "Octopuses have three hearts and blue blood.",
            isTrue: true,
            explanation: "This is true! Octopuses have 3 hearts and blue blood due to copper-based hemocyanin."
        },
        {
            id: 3,
            text: "Shakespeare invented over 1,700 words that we still use today, including 'emoji' and 'selfie'.",
            isTrue: false,
            explanation: "Shakespeare did invent many words, but 'emoji' and 'selfie' are modern inventions from the digital age."
        },
        {
            id: 4,
            text: "Honey never spoils and can last thousands of years.",
            isTrue: true,
            explanation: "True! Honey's low moisture and acidic pH make it naturally antimicrobial."
        },
        {
            id: 5,
            text: "A group of flamingos is called a 'flamboyance'.",
            isTrue: true,
            explanation: "This is correct! A group of flamingos is indeed called a flamboyance."
        },
        {
            id: 6,
            text: "Bananas grow on trees and are technically a type of wood fruit.",
            isTrue: false,
            explanation: "Bananas grow on large herbaceous flowering plants, not trees, and are berries, not wood fruits."
        },
        {
            id: 7,
            text: "The human brain uses approximately 20% of the body's total energy.",
            isTrue: true,
            explanation: "True! Despite being only 2% of body weight, the brain uses about 20% of our energy."
        },
        {
            id: 8,
            text: "Goldfish have a 3-second memory span.",
            isTrue: false,
            explanation: "This is a myth! Goldfish can remember things for months, not just 3 seconds."
        }
    ];
    
    return statements.map(statement => `
        <div class="statement-card" data-statement-id="${statement.id}" data-is-true="${statement.isTrue}">
            <div class="statement-text">${statement.text}</div>
            <div class="statement-buttons">
                <button class="truth-btn" onclick="selectAnswer(${statement.id}, true)">Truth</button>
                <button class="hallucination-btn" onclick="selectAnswer(${statement.id}, false)">Hallucination</button>
            </div>
            <div class="statement-explanation hidden" id="explanation-${statement.id}">
                ${statement.explanation}
            </div>
        </div>
    `).join('');
}

// Setup truth game interactions
function setupTruthGame() {
    // Reset any previous game state
    window.truthGameAnswers = {};
}

// Select answer for a statement
function selectAnswer(statementId, userAnswer) {
    window.truthGameAnswers = window.truthGameAnswers || {};
    window.truthGameAnswers[statementId] = userAnswer;
    
    // Update UI to show selection
    const card = document.querySelector(`[data-statement-id="${statementId}"]`);
    const buttons = card.querySelectorAll('.truth-btn, .hallucination-btn');
    
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    if (userAnswer) {
        card.querySelector('.truth-btn').classList.add('selected');
    } else {
        card.querySelector('.hallucination-btn').classList.add('selected');
    }
}

// Check all truth game answers
function checkTruthAnswers(activityId, moduleId) {
    const statements = document.querySelectorAll('.statement-card');
    let correct = 0;
    let total = statements.length;
    
    statements.forEach(statement => {
        const statementId = parseInt(statement.dataset.statementId);
        const isTrue = statement.dataset.isTrue === 'true';
        const userAnswer = window.truthGameAnswers[statementId];
        const explanation = statement.querySelector('.statement-explanation');
        
        // Show explanation
        explanation.classList.remove('hidden');
        
        // Check if correct
        if (userAnswer === isTrue) {
            correct++;
            statement.classList.add('correct');
        } else {
            statement.classList.add('incorrect');
        }
    });
    
    const feedback = document.getElementById(`feedback-${activityId}`);
    const percentage = Math.round((correct / total) * 100);
    
    feedback.innerHTML = `
        <div class="feedback ${percentage >= 70 ? 'success' : 'partial'}">
            <h4>Results: ${correct}/${total} correct (${percentage}%)</h4>
            ${percentage >= 70 ? 
                '<p>Great job! You\'re getting good at spotting AI hallucinations!</p>' : 
                '<p>Keep practicing! Understanding AI accuracy is an important skill.</p>'
            }
            <p><strong>Remember:</strong> AI can sometimes generate false information that sounds convincing. Always verify important facts!</p>
        </div>
    `;
    
    // Show reset button
    document.getElementById('reset-btn').style.display = 'inline-block';
    
    if (percentage >= 70) {
        window.aiLiteracy.completeActivity(moduleId, activityId);
    }
}

// Reset truth game
function resetTruthGame(activityId) {
    window.truthGameAnswers = {};
    
    // Reset UI
    const statements = document.querySelectorAll('.statement-card');
    statements.forEach(statement => {
        statement.classList.remove('correct', 'incorrect');
        statement.querySelectorAll('.truth-btn, .hallucination-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        statement.querySelector('.statement-explanation').classList.add('hidden');
    });
    
    // Clear feedback
    const feedback = document.getElementById(`feedback-${activityId}`);
    feedback.innerHTML = '';
    
    // Hide reset button
    document.getElementById('reset-btn').style.display = 'none';
}

// Export activity functions
window.activities = {
    loadInteractiveActivity,
    loadCardGameActivity,
    loadFormActivity,
    loadSimulatorActivity,
    loadCreativeActivity,
    loadDrawingActivity,
    checkClassification,
    setupDragAndDrop,
    clearCanvas,
    saveDrawing,
    startTimer,
    stopTimer,
    resetTimer,
    generateTruthStatements,
    setupTruthGame,
    selectAnswer,
    checkTruthAnswers,
    resetTruthGame
};

// Submit reflection for bias activity
function submitReflection(activityId, moduleId) {
    const reflection = document.querySelector('.reflection-input').value;
    if (reflection.trim().length > 10) {
        window.aiLiteracy.completeActivity(moduleId, activityId);
        alert('Reflection submitted successfully! You\'ve completed the AI Bias Experience activity.');
    } else {
        alert('Please write a more detailed reflection (at least 10 characters).');
    }
}

// Show prediction in bias game
function showPrediction(photoId) {
    const prediction = document.getElementById(`prediction-${photoId}`);
    if (prediction) {
        prediction.classList.remove('hidden');
    }
}

// Train classifier function
function trainClassifier(activityId) {
    const results = document.getElementById('classification-results');
    if (results) {
        results.innerHTML = `
            <p>🤖 Training AI classifier...</p>
            <p>✅ Training complete! The AI has learned to distinguish between fish and sharks.</p>
            <p>Click "Test Classifier" to see how well it performs!</p>
        `;
    }
}

// Test classifier function
function testClassifier(activityId, moduleId) {
    const results = document.getElementById('classification-results');
    if (results) {
        results.innerHTML = `
            <p>🧪 Testing classifier...</p>
            <p>🎉 100% accuracy! Great job training the AI!</p>
            <p>The AI successfully identified all fish and sharks correctly.</p>
        `;
        
        // Mark activity as completed
        window.aiLiteracy.completeActivity(moduleId, activityId);
    }
}

// Also make key functions globally available
window.checkTruthAnswers = checkTruthAnswers;
window.resetTruthGame = resetTruthGame;
window.selectAnswer = selectAnswer;
window.submitReflection = submitReflection;
window.showPrediction = showPrediction;
window.trainClassifier = trainClassifier;
window.testClassifier = testClassifier;