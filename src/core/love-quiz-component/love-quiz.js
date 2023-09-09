/**
 * Execute code when the DOM content is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get all question containers and next question buttons
    const questionContainers = document.querySelectorAll('.question-container');
    const nextQuestionButtons = document.querySelectorAll('.next-question');
    const answers = [];

    // Add event listeners to next question buttons
    nextQuestionButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            // Get the user's answer from the input field
            const answer = questionContainers[index].querySelector('input').value;
            answers.push(answer);
            // Hide the current question container and show the next one
            questionContainers[index].style.display = 'none';
            questionContainers[index + 1].style.display = 'block';
        });
    });

    // Get all next buttons and the reflection button container
    const nextButtons = document.querySelectorAll('.next-question');
    const reflectButtonContainer = document.getElementById('conditionalElement');

    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get current question container
            const currentContainer = this.closest('.question-container');
            // Hide current question container
            currentContainer.style.display = 'none';

            // Get the next question container by its ID
            const nextContainerId = currentContainer.getAttribute('id').replace(/\d+/, (match) => parseInt(match) + 1);
            const nextContainer = document.getElementById(nextContainerId);

            // Check if the next container is the last one
            if (nextContainer === document.getElementById('question4-container')) {
                reflectButtonContainer.style.display = 'flex';
            }

            // Show next question container
            if (nextContainer) {
                nextContainer.style.display = 'block';
            }
        });

        // Open the reflection modal
        const openModalButton = document.getElementById("open-reflection-modal");
        const reflectionModal = new bootstrap.Modal(document.getElementById("reflectionModal"));

        openModalButton.addEventListener("click", () => {
            reflectionModal.show();
        });

        // Handle reflection submission
        const reflectionButton = document.getElementById("submit-reflection");
        reflectionButton.addEventListener('click', () => {
            $("#modal-go-mission").modal('show')
        });
    });
})

/**
 * Add an event listener to the "Continue" button to navigate to the next page.
 */
document.getElementById('button-continue').addEventListener('click', function () {
    window.location.href = '../mission-game-component/mission-game.html';
})



