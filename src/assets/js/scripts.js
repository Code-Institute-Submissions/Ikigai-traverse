$(document).ready(function () {
    // Attach the event listener to a parent element that exists in the DOM
    // and delegate the click event to 'play-button' elements that are added later
    $(document).on('click', '#play-button', function () {
        window.location.href = 'src/core/love-quiz-component/love-quiz.html';
    });
});
