// document.addEventListener('DOMContentLoaded', function () {
//     preloadImage('assets/images/magenta-nature-mystical-landscape.jpg');
//     setTimeout(function () {
//         setDisplayForTextContainer();
//     }, 1000);
// })

$(document).ready(function () {
    // Attach the event listener to a parent element that exists in the DOM
    // and delegate the click event to 'play-button' elements that are added later
    $(document).on('click', '#play-button', function () {
        window.location.href = 'src/core/love-quiz-component/love-quiz.html';
    });
});



/**
 * This method is used to preload the main image when the index page is loaded
 * Otherwise if there is delay in loading the image, the text box is displayed
 * beofre which cause a bad user experience
 * @param {*} url is the path to the image to be loaded
 */
function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

function setDisplayForTextContainer() {
    const divContent = document.getElementById("text-content");
    divContent.style.display = 'block';

}
