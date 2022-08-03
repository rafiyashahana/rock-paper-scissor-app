const computerChoiceDiv = document.getElementById("computerChoice");

function getComputerChoice() {
  const options = ["✊", "🤚", "✌"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (
    (playerChoice == "✊" && computerChoice == "🤚") ||
    (playerChoice == "🤚" && computerChoice == "✌") ||
    (playerChoice == "✌" && computerChoice == "✊")
  ) {
    score = -1;
  } else {
    score = 1;
  }
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
const resultDiv = document.getElementById("result");
resultDiv.innerText = `\n`;
function showResult(score, playerChoice, computerChoice) {
  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 1) {
    resultDiv.innerText = "You Win!";
  } else {
    resultDiv.innerText = "It's a Draw!";
  }
}

// ** Calculate who won and show it on the screen **
const rpsbuttonDiv = document.getElementsByClassName("rpsButton");

const yourChoiceDiv = document.getElementById("yourChoice");
function onClickRPS(playerChoice) {
  yourChoiceDiv.innerHTML = `You Selected: ${playerChoice}`;
  return playerChoice;
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  const rpsBtns = document.querySelectorAll(".rpsButton");

  rpsBtns.forEach(
    (btn) =>
      (btn.onclick = () => {
        const res = getComputerChoice();
        computerChoiceDiv.innerText = res;
        onClickRPS(btn.value);

        showResult(getResult(btn.value, res), btn.value, res);
      })
  );
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  computerChoiceDiv.innerText = "";
  yourChoiceDiv.innerHTML = "";
  resultDiv.innerText = `\n`;
}
const endGameButtonDiv = document.getElementById("endGameButton");
endGameButtonDiv.onclick = () => endGame();

playGame();

// const emojis = {rock: "✊", paper: "🤚", scissors: "✌"};
