import ACTIONS from './actions.js';

// Define an object to store selected actions categorized by impact level
const selectedActions = {
    "High Impact": [],
    "Somewhat Impactful": [],
    "Low Impact": [],
};

// Execute code when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the actions container and columns for sorting
    const actionsContainer = document.getElementById("actions-container");
    const columns = document.querySelectorAll(".list");
    const reflectionButton = document.getElementById("submit-reflection");

    // Create action elements and add them to the actions container
    ACTIONS.forEach((actionText) => {
        const action = document.createElement("div");
        action.textContent = actionText;
        action.className = "action";
        action.draggable = true;
        actionsContainer.appendChild(action);

    });

    // Initialize sortable behavior for the actions container
    new Sortable(actionsContainer, {
        group: "shared",
        animation: 150,
        ghostClass: "placeholder",
        dragClass: "dragging",
        onEnd: handleActionDrag
    });

    // Initialize sortable behavior for the columns
    columns.forEach((column) => {
        new Sortable(column, {
            group: "shared",
            animation: 150,
            ghostClass: "placeholder",
            dragClass: "dragging",
        });
    });

    // Open the reflection modal
    const openModalButton = document.getElementById("open-reflection-modal");
    const reflectionModal = new bootstrap.Modal(document.getElementById("reflectionModal"));

    openModalButton.addEventListener("click", () => {
        reflectionModal.show();
    });

    // Handle reflection button click event
    reflectionButton.addEventListener('click', () => {
        $("#modal-go-profession").modal('show')
    });
});

// Add an event listener to the "Continue" button to navigate to the next page
document.getElementById('button-continue').addEventListener('click', function () {
    window.location.href = '../profession-puzzle-component/profession-puzzle.html';
})

// Handle the drag-and-drop of actions and update the selectedActions object
function handleActionDrag(event) {
    const selectedAction = event.item.textContent;
    const targetColumnId = event.to.parentNode.id;

    if (targetColumnId === "most-impactful") {
        selectedActions["High Impact"].push(selectedAction);
    } else if (targetColumnId === "somewhat-impactful") {
        selectedActions["Somewhat Impactful"].push(selectedAction);
    } else if (targetColumnId === "least-impactful") {
        selectedActions["Low Impact"].push(selectedAction);
    }

    // Update the reflection sections
    updateReflectionSections();
}

// Update the reflection sections with selected actions
function updateReflectionSections() {
    const somewhatActionsSpan = document.getElementById("somewhat-impactful-actions");
    somewhatActionsSpan.textContent = selectedActions["Somewhat Impactful"].join(", ");

    const mostImpactfulActionsSpan = document.getElementById("most-impactful-actions");
    mostImpactfulActionsSpan.textContent = selectedActions["High Impact"].join(", ");

    const leastImpactfulActionsSpan = document.getElementById("least-impactful-actions");
    leastImpactfulActionsSpan.textContent = selectedActions["Low Impact"].join(", ");
}



