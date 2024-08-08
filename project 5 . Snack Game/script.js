let playBoard = document.querySelector(".play-board");
let score = document.querySelector("#score");
let restartButton = document.querySelector("#restart-button");
let highScoreDisplay = document.querySelector("#high-score");
let highScore = localStorage.getItem("highScore") || 0;
let currentScore = 0;
let speed = 125;

let foodx, foody;
let snackx = 13;
let snacky = 12;
let velocityX = 0, velocityY = 0;
let gameInterval; 

highScoreDisplay.innerHTML = highScore;


const changeDiraction = (e) => {
    if (e.key === "ArrowUp" && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    }
    intGame();
}

const changeFoodPosition = () => {
    foodx = Math.floor(Math.random() * 30) + 1;
    foody = Math.floor(Math.random() * 30) + 1;
}

const intGame = () => {
    let htmlMackup = `<div class="food" style="grid-area: ${foody} / ${foodx}"> </div>`;

    if (foodx === snackx && foody === snacky) {
        currentScore += 1;
        score.innerHTML = currentScore;
        changeFoodPosition();
        speed = Math.max(50, speed - 10);
        clearInterval(gameInterval);
        gameInterval = setInterval(intGame, speed);
    }

    snackx += velocityX;
    snacky += velocityY;

    
    if (snackx < 1 || snackx > 30 || snacky < 1 || snacky > 30) {
        clearInterval(gameInterval);
        alert("Game Over! Your score: " + currentScore);
        restartButton.style.display = "block";
        if (currentScore > highScore) {
            highScore = currentScore;
            localStorage.setItem("highScore", highScore);
            highScoreDisplay.innerHTML = highScore;
        }
        return;
    }

    htmlMackup += `<div class="snack" style="grid-area: ${snacky} / ${snackx}"> </div>`;
    playBoard.innerHTML = htmlMackup;
}

const resetGame = () => {
    currentScore = 0;
    speed = 125;
    snackx = 13;
    snacky = 12;
    velocityX = 0;
    velocityY = 0;
    score.innerHTML = currentScore;
    restartButton.style.display = "none";
    changeFoodPosition();
    gameInterval = setInterval(intGame, speed);
}

changeFoodPosition();
gameInterval = setInterval(intGame, speed);
document.addEventListener("keydown", changeDiraction);
restartButton.addEventListener("click", resetGame);



