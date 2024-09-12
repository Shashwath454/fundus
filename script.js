// script.js

// Modal for Donate button
const donateButton = document.getElementById('donateButton');
const donateModal = document.getElementById('donateModal');
const closeModal = document.querySelector('.close');

// Open modal when the "Donate" button is clicked
donateButton.addEventListener('click', () => {
    donateModal.style.display = 'block';
});

// Close the modal when the "X" is clicked
closeModal.addEventListener('click', () => {
    donateModal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target == donateModal) {
        donateModal.style.display = 'none';
    }
});

// Redirect for Join Funding Program button
const joinButton = document.getElementById('joinButton');
joinButton.addEventListener('click', () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeF4I6K5NSJvk2jfEcKySQ1V-mkAVteLSjsuTXlt-DeTLzjzQ/viewform?usp=sf_link'; // Replace with your form URL
});
document.getElementById("redirect-btn").onclick = function() {
    window.location.href = "https://www.google.com";
  };
