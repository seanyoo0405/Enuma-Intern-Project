# Enuma-Intern-Project
Adding a video 
 Step 1: Open the modules file
  - Navigate to js/modules.js
  - Find the module you want to add a video to (modules 1-4)

  Step 2: Add the video entry
  - Look for the videos: section in your chosen module
  - Add a new line following this pattern:
  { id: 'v5', title: 'Your Video Title', duration: '10:30', url: 'your-video-url' },
  - Make sure to:
    - Use a unique id (like v5, v6, etc.)
    - Give it a descriptive title
    - Set the duration in MM:SS format
    - Replace 'your-video-url' with the actual video URL

  Adding a Quiz Question

  Step 1: Find the quiz section
  - In js/modules.js, find the quiz: section of your module
  - Look for the questions: array

  Step 2: Add your question
  - Copy this template and modify it:
  {
      id: 'q4',
      text: 'Your question here?',
      options: [
          'First answer option',
          'Second answer option',
          'Third answer option',
          'Fourth answer option'
      ],
      correct: 0
  },
  - Change:
    - id: Use q4, q5, etc. (next number in sequence)
    - text: Your actual question
    - options: Your four answer choices
    - correct: The index of the right answer (0=first, 1=second, 2=third, 3=fourth)

  Adding an Activity

  Step 1: Add to the activities list
  - In js/modules.js, find the activities: section
  - Add a new line:
  { id: 'my-new-activity', title: 'My Activity Name', type: 'interactive' },

  Step 2: Create the activity code
  - Open js/activities.js
  - Find the loadInteractiveActivity function
  - Add a new else if block:
  } else if (activity.id === 'my-new-activity') {
      container.innerHTML = `
          <div class="my-activity-container">
              <h4>My Activity Title</h4>
              <p>Instructions for students</p>
              <div id="activity-content">
                  <!-- Your activity HTML goes here -->
              </div>
              <button class="activity-btn" onclick="completeMyActivity('${activity.id}', ${moduleId})">
                  Complete Activity
              </button>
          </div>
      `;

  Step 3: Add completion function
  - At the bottom of js/activities.js, add:
  function completeMyActivity(activityId, moduleId) {
      // Your activity logic here
      window.aiLiteracy.completeActivity(moduleId, activityId);
      alert('Activity completed!');
  }

  // Make it globally available
  window.completeMyActivity = completeMyActivity;

  Quick Tips:

  1. Always save your files after making changes
  2. Test in a web browser by opening index.html
  3. Use consistent naming - no spaces in IDs, use hyphens instead
  4. Copy existing patterns - look at how current content is structured
  5. Check for typos - missing commas or quotes will break the code

  Simple Activity Ideas:

  - Multiple choice questions with instant feedback
  - Drag and drop sorting activities
  - Click-to-reveal information panels
  - Simple games like matching or categorizing

  The platform is designed to be beginner-friendly - most content additions just require copying existing patterns
  and changing the text/content to match your needs!

