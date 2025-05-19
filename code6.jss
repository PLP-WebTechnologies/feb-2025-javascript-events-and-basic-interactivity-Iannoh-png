// script.js

document.addEventListener('DOMContentLoaded', () => {
    const textToChange = document.getElementById('text-to-change');
    const changeTextButton = document.getElementById('change-text-button');
    const changeStyleButton = document.getElementById('change-style-button');
    const addElementButton = document.getElementById('add-element-button');
    const removeElementButton = document.getElementById('remove-element-button');
    const contentSection = document.getElementById('content');
    const galleryContainer = document.getElementById('gallery-container');
    const tabButtonsContainer = document.getElementById('tab-buttons-container');
    const tabContentContainer = document.getElementById('tab-content-container');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const form = document.getElementById('registration-form');

    // 1. Event Handling 🎈
    // a. Button click ✅
    changeTextButton.addEventListener('click', () => {
        textToChange.textContent = 'Text has been changed!';
    });

    // b. Hover effects ✅
    changeStyleButton.addEventListener('mouseover', () => {
        changeStyleButton.style.backgroundColor = 'lightblue';
    });
    changeStyleButton.addEventListener('mouseout', () => {
        changeStyleButton.style.backgroundColor = ''; // Reset to default
    });

    // c. Keypress detection ✅
    document.addEventListener('keydown', (event) => {
        console.log('Key pressed:', event.key);
    });

    // d. Bonus: A secret action for a double-click or long press 🤫
    textToChange.addEventListener('dblclick', () => {
        alert('Secret action triggered! Double-clicked the text.');
    });

    // 2. Interactive Elements 🎮
    // a. A button that changes text or color ✅  (Implemented above with changeTextButton and changeStyleButton)

    // b. An image gallery or slideshow
    const images = [
        'https://placehold.co/400x200/EEE/31343C',
        'https://placehold.co/400x200/EEE/8E44AD',
        'https://placehold.co/400x200/EEE/27AE60',
        'https://placehold.co/400x200/EEE/F39C12'
    ];
    let currentImageIndex = 0;
    const galleryImg = document.createElement('img');
    galleryImg.src = images[currentImageIndex];
    galleryContainer.appendChild(galleryImg);

    const nextImageButton = document.createElement('button');
    nextImageButton.textContent = 'Next Image';
    galleryContainer.appendChild(nextImageButton);

    nextImageButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        galleryImg.src = images[currentImageIndex];
    });

    // c. Tabs or accordion-style content
      const tabButtons = ['Tab 1', 'Tab 2', 'Tab 3'];
      const tabContents = ['Content for Tab 1', 'Content for Tab 2', 'Content for Tab 3'];

      tabButtons.forEach((tabName, index) => {
        const tabButton = document.createElement('button');
        tabButton.textContent = tabName;
        tabButton.addEventListener('click', () => {
          // Remove active class from all tab buttons and content
          document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

          // Add active class to the clicked tab button and corresponding content
          tabButton.classList.add('active');
          document.getElementById(`tab-content-${index}`).classList.add('active');
        });
        tabButton.classList.add('tab-button');
        tabButtonsContainer.appendChild(tabButton);

        const tabContent = document.createElement('div');
        tabContent.id = `tab-content-${index}`;
        tabContent.textContent = tabContents[index];
        tabContent.classList.add('tab-content');
        tabContentContainer.appendChild(tabContent);

        if (index === 0) {
          tabButton.classList.add('active');
          tabContent.classList.add('active');
        }
      });

    // 3. Form Validation 📋
    // a. Required field checks ✅
    // b. Email format validation ✅
    // c. Password rules (e.g., min 8 characters) ✅
    form.addEventListener('submit', (event) => {
        let isValid = true;

        if (!nameInput.value.trim()) {
            isValid = false;
            alert('Name is required');
        }

        if (!emailInput.value.trim()) {
            isValid = false;
            alert('Email is required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            isValid = false;
            alert('Invalid email format');
        }

        if (!passwordInput.value.trim()) {
            isValid = false;
            alert('Password is required');
        } else if (passwordInput.value.length < 8) {
            isValid = false;
            alert('Password must be at least 8 characters');
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // d. Bonus: Real-time feedback while typing 🧙‍♂️
    const feedbackElements = {}; // Store feedback elements for each input

    function createFeedbackElement(inputElement) {
        const feedbackElementId = `${inputElement.id}-feedback`;
        let feedbackElement = document.getElementById(feedbackElementId);

        if (!feedbackElement) {
            feedbackElement = document.createElement('div');
            feedbackElement.id = feedbackElementId;
            feedbackElement.classList.add('feedback'); // You can style this in CSS
            inputElement.parentNode.insertBefore(feedbackElement, inputElement.nextSibling);
            feedbackElements[inputElement.id] = feedbackElement; // Store it
        }
        return feedbackElement;
    }

    nameInput.addEventListener('input', () => {
        const feedbackElement = createFeedbackElement(nameInput);
        if (!nameInput.value.trim()) {
            feedbackElement.textContent = 'Name is required';
            feedbackElement.style.color = 'red';
        } else {
            feedbackElement.textContent = 'Looks good!';
            feedbackElement.style.color = 'green';
        }
    });

    emailInput.addEventListener('input', () => {
        const feedbackElement = createFeedbackElement(emailInput);
        if (!emailInput.value.trim()) {
            feedbackElement.textContent = 'Email is required';
            feedbackElement.style.color = 'red';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            feedbackElement.textContent = 'Invalid email format';
            feedbackElement.style.color = 'red';
        } else {
            feedbackElement.textContent = 'Looks good!';
            feedbackElement.style.color = 'green';
        }
    });

    passwordInput.addEventListener('input', () => {
        const feedbackElement = createFeedbackElement(passwordInput);
        if (!passwordInput.value.trim()) {
            feedbackElement.textContent = 'Password is required';
            feedbackElement.style.color = 'red';
        } else if (passwordInput.value.length < 8) {
            feedbackElement.textContent = 'Password must be at least 8 characters';
            feedbackElement.style.color = 'red';
        } else {
            feedbackElement.textContent = 'Strong password!';
            feedbackElement.style.color = 'green';
        }
    });
});

