// DOM Elements
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const resultCard = document.getElementById('resultCard');
    const displayName = document.getElementById('displayName');
    const displayAge = document.getElementById('displayAge');

    // Handle Form Submission
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Stop page reload

      // Get values
      let name = nameInput.value;
      let age = parseInt(ageInput.value); // convert to number

      // Validate and display
      if (name && !isNaN(age)) {
        displayName.textContent = `Name: ${name}`;
        displayAge.textContent = `Age: ${age} years old`;
        resultCard.classList.remove('hidden');
      }
    });