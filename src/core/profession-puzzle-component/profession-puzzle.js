import { IMAGES } from "./images.js";

// Execute code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the image grid container element
    const imageGrid = document.getElementById('image-grid'); // Get the grid container element


    // Iterate through the IMAGES array and create image items
    IMAGES.forEach(imageSrc => {
        // Create a div element for the image item
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");
        imageItem.setAttribute("draggable", "true");

        // Create an image element and set its attributes
        const img = document.createElement("img");
        img.src = `../../assets/images/${imageSrc}`;
        img.alt = imageSrc.split(".")[0]; // Extracting alt text from filename

        // Append the image element to the image item
        imageItem.appendChild(img);
        imageGrid.appendChild(imageItem);
    });

    // Open the reflection modal
    const openModalButton = document.getElementById("open-reflection-modal");
    const reflectionModal = new bootstrap.Modal(document.getElementById("reflectionModal"));
    const reflectionButton = document.getElementById("submit-reflection");

    // Initialize sortable behavior for the image grid
    new Sortable(imageGrid, {
        group: "sorting",
        sort: true,
        animation: 150,
        dragClass: "dragging",
        ghostClass: "ghost",
    });

    // Add event listener to open the reflection modal
    openModalButton.addEventListener("click", () => {
        reflectionModal.show();
    });

    // Handle reflection button click event
    reflectionButton.addEventListener('click', (event) => {
        $("#modal-go-to-vocation").modal('show')
    });
});

// Add an event listener to the "Continue" button to navigate to the next page
document.getElementById('button-continue').addEventListener('click', function () {
    window.location.href = '../vocation-puzzle-component/vocation-puzzle.html';
})