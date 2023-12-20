let rockBtn = document.querySelector(".rock");
let scissorBtn = document.querySelector(".scissor");
let paperBtn = document.querySelector(".paper");
let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let result = document.querySelector(".text");


let userWin = " ";

let computerVal = " ";
let humanVal = " ";

rockBtn.addEventListener("click", () => {

    humanVal = "Rock";
    clickIcon();
})
scissorBtn.addEventListener("click", () => {

    humanVal = "Scissor";
    clickIcon();
})
paperBtn.addEventListener("click", () => {

    humanVal = "Paper";
    clickIcon();
})

function clickIcon() {

    computerIcon();
    if (computerVal === humanVal) {
        result.textContent = "Match draw";
        console.log(userWin);
    }
    else if (humanVal === "Rock" && computerVal === "Scissor") {

        userWin = humanVal;
        result.textContent = `You Won! it's ${userWin}`
        scoreCount();
    }
    else if (humanVal === "Rock" && computerVal === "Paper") {

        userWin = computerVal;
        result.textContent = `You loss! it's ${userWin}`
        scoreCount();
    }
    else if (humanVal === "Scissor" && computerVal === "Rock") {

        userWin = computerVal;
        result.textContent = `You loss! it's ${userWin}`
        scoreCount();
    }
    else if (humanVal === "Scissor" && computerVal === "Paper") {

        userWin = humanVal;
        result.textContent = `You Won! it's ${userWin}`
        scoreCount();
    }
    else if (humanVal === "Paper" && computerVal === "Rock") {

        userWin = humanVal;
        result.textContent = `You Won! it's ${userWin}`
        scoreCount();
    }
    else if (humanVal === "Paper" && computerVal === "Scissor") {

        userWin = computerVal;
        result.textContent = `You loss! it's ${userWin}`
        scoreCount();
    }
    else {
        userWin = "error"
        console.log(userWin);
    }

}

function computerIcon() {
    let digit = Math.floor(Math.random() * 3) + 1;
    if (digit === 1) {
        computerVal = "Rock"
    }
    else if (digit === 2) {
        computerVal = "Scissor"
    }
    else {
        computerVal = "Paper"
    }
}

let humanScore = 0;
let computerScore = 0;
function scoreCount() {
    if (userWin === humanVal) {
        humanScore++;
        human.textContent = "Human : " + humanScore;
    }
    else if (userWin === computerVal) {
        computerScore++;
        computer.textContent = " Computer : " + computerScore;
    }
    else {
        console.log("Match draw");
    }
}