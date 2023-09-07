document.addEventListener('DOMContentLoaded', function () {
    const imageGrid = document.getElementById('image-grid'); // Get the grid container element

    new Sortable(imageGrid, {
        group: "sorting",
        sort: true,
        animation: 150,
        dragClass: "dragging",
        ghostClass: "ghost",
    });

    // Open the reflection modal
    const openModalButton = document.getElementById("open-reflection-modal");
    const reflectionModal = new bootstrap.Modal(document.getElementById("reflectionModal"));

    openModalButton.addEventListener("click", () => {
        reflectionModal.show();
    });
});