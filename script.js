function nextStep(currentStep) {
    // Hide current step
    document.getElementById(`step-${currentStep}`).style.display = 'none';
    // Show next step
    document.getElementById(`step-${currentStep + 1}`).style.display = 'block';
}

function previousStep(currentStep) {
    // Hide current step
    document.getElementById(`step-${currentStep}`).style.display = 'none';
    // Show previous step
    document.getElementById(`step-${currentStep - 1}`).style.display = 'block';
}

// Handle form submission
document.getElementById('multi-stage-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('user-name').value,
        email: document.getElementById('user-email').value,
        team: document.getElementById('select-team').value
    };

    // Send data to a demo POST endpoint
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Registration successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    });
});
