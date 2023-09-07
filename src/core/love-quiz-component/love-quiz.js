document.addEventListener('DOMContentLoaded', (event) => {
    const loveQuiz = document.getElementById('love-quiz');
    const questionContainers = document.querySelectorAll('.question-container');
    const nextQuestionButtons = document.querySelectorAll('.next-question');
    const answers = [];

    nextQuestionButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const answer = questionContainers[index].querySelector('input').value;
            answers.push(answer);
            questionContainers[index].style.display = 'none';
            questionContainers[index + 1].style.display = 'block';
        });
    });

    loveQuiz.addEventListener('submit', (event) => {
        event.preventDefault();
        const lastAnswer = document.getElementById('question4').value;
        answers.push(lastAnswer);
        console.log(answers);
        // Display the summary of answers
        displaySummary(answers);
    });
});


document.getElementById('button-continue').addEventListener('click', function(){
    window.location.href = '../mission-game-component/mission-game.html';
})
function displaySummary(answers) {
    const mainContent = document.getElementById('main-content');
    const summary = document.createElement('div');
    summary.id = 'summary';
    summary.style.minWidth = "400px";
    summary.style.backgroundColor = 'rgb(240 255 255 / 50%)';
    summary.style.borderRadius = "20px";
    summary.innerHTML = '<h2>Summary</h2>';
    answers.forEach((answer, index) => {
        summary.innerHTML += `<p>Question ${index + 1}: ${answer}</p>`;
    });
    mainContent.innerHTML = '';
    mainContent.appendChild(summary);

    setTimeout(() =>{
        $("#myModal").modal('show')
    },1000)
}




