import ACTIONS from './actions.js';
const selectedActions = {
    "High Impact": [],
    "Somewhat Impactful": [],
    "Low Impact": [],
};
document.addEventListener("DOMContentLoaded", function () {
    const actionsContainer = document.getElementById("actions-container");
    const columns = document.querySelectorAll(".list");
    const reflectionButton= document.getElementById("submit-reflection");

    ACTIONS.forEach((actionText) => {
        const action = document.createElement("div");
        action.textContent = actionText;
        action.className = "action";
        action.draggable = true;
        actionsContainer.appendChild(action);
        
    });

    new Sortable(actionsContainer, {
        group: "shared",
        animation: 150,
        ghostClass: "placeholder",
        dragClass: "dragging",
        onEnd:handleActionDrag
    });

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

    reflectionButton.addEventListener('click', () => {
        $("#modal-go-profession").modal('show')
    });
});

document.getElementById('button-continue').addEventListener('click', function(){
    window.location.href = '../profession-puzzle-component/profession-puzzle.html';
})

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
    console.log("selected Actions are: ", selectedActions)

    // Update the reflection sections
    updateReflectionSections();
}

function updateReflectionSections() {
    const somewhatActionsSpan = document.getElementById("somewhat-actions");
    somewhatActionsSpan.textContent = selectedActions["Somewhat Impactful"].join(", ");

    const mostImpactfulActionsSpan = document.getElementById("most-impactful-actions");
    mostImpactfulActionsSpan.textContent = selectedActions["High Impact"].join(", ");

    const leastImpactfulActionsSpan = document.getElementById("least-impactful-actions");
    leastImpactfulActionsSpan.textContent = selectedActions["Low Impact"].join(", ");
}



