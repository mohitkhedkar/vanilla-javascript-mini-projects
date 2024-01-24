let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let winnerMsg = document.querySelector("#winner-msg");
let drawMsg = document.querySelector("#draw-msg");

let turn0 = true;
let playerX = "X";
let playerO = "O";

const winingPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
  winnerMsg.classList.add("hide");
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const endGame = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const gameDraw = () => {
  drawMsg.innerText = `Game was a Draw.`;
  drawMsg.classList.remove("hide");
  endGame();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = playerO;
      turn0 = !turn0;
    } else {
      box.innerHTML = playerX;
      turn0 = !turn0;
    }
    box.disabled = true;
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winingPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

const showWinner = (winner) => {
  winnerMsg.classList.remove("hide");
  winnerMsg.innerHTML = `Congrats "${winner}" is Winner`;
  endGame();
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
