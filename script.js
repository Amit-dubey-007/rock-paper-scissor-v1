const choices=document.querySelectorAll(".choice");
const comp_score=document.querySelector("#comp-score");
const user_score=document.querySelector("#user-score");
const reset=document.querySelector("#reset");
const result=document.querySelector("#result");
const resultBox=document.querySelector(".move");
let compScore=0;
let userScore=0;

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const resetGame=()=>{
    compScore=0;
    userScore=0;
    comp_score.innerText=compScore;
    user_score.innerText=userScore;
    resultBox.style.backgroundColor="rgb(228, 167, 53)";
    result.style.color="black";
    result.innerText="Play Your Move";
};

const drawGame = () => {
  result.innerText = "Game was Draw. Play again.";
  resultBox.style.backgroundColor = "yellow";
  result.style.color="black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    result.style.color="white";
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
    result.innerText = `You won 😎🎉 Your ${userChoice} beats ${compChoice}`;
    resultBox.style.backgroundColor = "green";
  } else {
    compScore++;
    comp_score.innerText = compScore;
    result.innerText = `You lost 😭😵 ${compChoice} beats your ${userChoice}`;
    resultBox.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


reset.addEventListener("click",resetGame);
