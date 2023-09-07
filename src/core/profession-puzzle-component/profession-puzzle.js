import { IMAGES } from "./images.js";

document.addEventListener('DOMContentLoaded', function () {
    const imageGrid = document.getElementById('image-grid'); // Get the grid container element


    IMAGES.forEach(imageSrc => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");
        imageItem.setAttribute("draggable", "true");

        const img = document.createElement("img");
        img.src = `../../assets/images/${imageSrc}`;
        img.alt = imageSrc.split(".")[0]; // Extracting alt text from filename

        imageItem.appendChild(img);
        imageGrid.appendChild(imageItem);
    });

    // Open the reflection modal
    const openModalButton = document.getElementById("open-reflection-modal");
    const reflectionModal = new bootstrap.Modal(document.getElementById("reflectionModal"));
    const reflectionButton = document.getElementById("submit-reflection");

    new Sortable(imageGrid, {
        group: "sorting",
        sort: true,
        animation: 150,
        dragClass: "dragging",
        ghostClass: "ghost",
    });


    openModalButton.addEventListener("click", () => {
        reflectionModal.show();
    });

    reflectionButton.addEventListener('click', (event) => {
        $("#modal-go-to-vocation").modal('show')
    });
});

document.getElementById('button-continue').addEventListener('click', function(){
    window.location.href = '../vocation-puzzle-component/vocation-puzzle.html';
})