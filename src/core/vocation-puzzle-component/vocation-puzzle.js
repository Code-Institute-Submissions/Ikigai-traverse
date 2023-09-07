let cards = [
    { attribute: 'Teacher', shared_id: 1 },
    { attribute: '€45,000', shared_id: 1 },
    { attribute: 'Doctor', shared_id: 2 },
    { attribute: '€65,000', shared_id: 2 },
    { attribute: 'Content Creator', shared_id: 3 },
    { attribute: '€20,000', shared_id: 3 },
    { attribute: 'Research Scientist', shared_id: 4 },
    { attribute: '€50,000', shared_id: 4 },
    { attribute: 'Coach', shared_id: 5 },
    { attribute: '€35,000', shared_id: 5 },
    { attribute: 'Manager', shared_id: 6 },
    { attribute: '€45,000 ', shared_id: 6 },
];

let flippedCards = [];
let totalFlippedCards = 0;
let score = 0;
let startTime;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function cardClicked(cardElement, cardData) {
    if (flippedCards.length >= 2 || cardElement.classList.contains('flipped')) {
        return;
    }

    cardElement.classList.add('flipped');
    cardElement.textContent = cardData.attribute;

    flippedCards.push({ cardElement, cardData });

    if (flippedCards.length === 2) {
        if (flippedCards[0].cardData.shared_id === flippedCards[1].cardData.shared_id) {
            score++;
            document.getElementById('score').innerText = score;

            const toastSuccess = new bootstrap.Toast(document.getElementById('toastSuccess'));
            toastSuccess.show();

            flippedCards = [];
        } else {
            // Wait for a second and then flip back
            setTimeout(() => {
                flippedCards[0].cardElement.classList.remove('flipped');
                flippedCards[1].cardElement.classList.remove('flipped');
                flippedCards[0].cardElement.textContent = '?';
                flippedCards[1].cardElement.textContent = '?';
                flippedCards = [];
            }, 1000);
        }
    }
    if (score === (cards.length / 2)) {
        console.log("here denabled", (cards.length / 2))
        openModalButton.removeAttribute('disabled');
        stopTimer();
    }
}

let timerInterval;
function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(() => {
        const now = new Date();
        const timeDiff = now - startTime;
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        document.getElementById('timer').innerText = `${minutes}:${seconds % 60}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function initializeGame() {
    const gameBoard = document.getElementById('game-board');
    shuffle(cards); // Shuffle the cards before displaying
    cards.forEach(card => {
        // Create a div for each card
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';
        cardContainer.dataset.attribute = card.attribute;
        cardContainer.dataset.shared_id = card.shared_id;
        cardContainer.textContent = '?';

        // Add click event
        cardContainer.addEventListener('click', function () {
            cardClicked(cardContainer, card)
        })

        // Append each card to the gameBoard
        gameBoard.appendChild(cardContainer);

    });
    startTimer();
}

window.onload = function () {
    initializeGame();
};

// Open the reflection modal
const openModalButton = document.getElementById("open-reflection-modal");
const reflectionModal = new bootstrap.Modal(document.getElementById("reflectionModal"));

openModalButton.addEventListener("click", () => {
    reflectionModal.show();
});


