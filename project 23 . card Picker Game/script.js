const cardsArray = [
    { name: "card1", img: "image/img1.jpg" },
    { name: "card2", img: "image/img2.jpg" },
    { name: "card3", img: "image/img3.jpg" },
    { name: "card4", img: "image/img4.jpg" },
    { name: "card5", img: "image/img5.jpg" },
    { name: "card6", img: "image/img6.jpg" },
    { name: "card1", img: "image/img1.jpg" },
    { name: "card2", img: "image/img2.jpg" },
    { name: "card3", img: "image/img3.jpg" },
    { name: "card4", img: "image/img4.jpg" },
    { name: "card5", img: "image/img5.jpg" },
    { name: "card6", img: "image/img6.jpg" },
];

let gameBoard = document.getElementById('game-board');
let movesDisplay = document.getElementById('moves');
let firstCard = null;
let secondCard = null;
let moves = 0;
let noOfRightFillped = 0;

// Shuffle cards
cardsArray.sort(() => 0.5 - Math.random());

function createBoard() {
    cardsArray.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card.name;

        let cardImage = document.createElement('img');
        cardImage.src = card.img;
        cardElement.appendChild(cardImage);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (this === firstCard || this.classList.contains('flipped')) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        checkStatus(); 
        noOfRightFillped++;
        resetCards();
    } else {
        setTimeout(unflipCards, 400);

    moves++;
    movesDisplay.textContent = moves;
}
}

function unflipCards() {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetCards();
}

const checkStatus=()=>{
    if(noOfRightFillped == 5){
        alert(`you complete in ${moves}.moves`);
     }
     console.log(noOfRightFillped);
}



function resetCards() {
    firstCard = null;
    secondCard = null;
}



createBoard();
