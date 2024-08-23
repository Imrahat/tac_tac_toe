const boxes = document.querySelectorAll(".box");
// console.log(boxes)
const resultText = document.getElementById("result-text");
const btn = document.getElementById("new-game");
const resultContainer = document.querySelector(".result");
const newGamebtn = document.getElementById("new-game");

player0 = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const draw = () => {
  resultText.innerHTML = `Its a Draw`;
  resultContainer.classList.remove("hide");
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enableBoxes = () => {
  boxes.forEach((box) => {   
    box.disabled = false;
  });
};
const newGame = () => {
  player0 = true;
  enableBoxes();
  resultContainer.classList.add("hide");
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  document.querySelector(".bg").style.left = "0px";
  count = 0;
};
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player0) {
      box.innerHTML = "O";
      player0 = false;
      box.disabled = true;
      document.querySelector(".bg").style.left = "85px";
    } else {
      box.innerHTML = "X";
      player0 = true;
      box.disabled = true;
      document.querySelector(".bg").style.left = "0";
      // console.log(box.classList);
    }

    console.log(`Count before increment: ${count}`);
    let isWinner = winner();
    if (!isWinner) {
      count++;
      console.log(count);
      if (count === 9) {
        draw();
      }
    }
  });
});

const winner = () => {
  for (let pattern of winPatterns) {
    pos1 = boxes[pattern[0]];
    pos2 = boxes[pattern[1]];
    pos3 = boxes[pattern[2]];
    // console.log(pattern[0]);
    // console.log(pattern[0]);
    // console.log(pos1.innerHTML,pos2,pos3)

    if (pos1.innerHTML != "" && pos2.innerHTML != "" && pos3.innerHTML != "") {
      if (
        pos1.innerHTML === pos2.innerHTML &&
        pos2.innerHTML === pos3.innerHTML
      ) {
        resultText.innerHTML = `Player ${pos1.innerHTML} wins`;
        resultContainer.classList.remove("hide");
        //  for (j = 0; j < 3; j++) {

        //    boxes[pattern[0][j]].style.color = "black";
        //    boxes[pattern[1][j]].style.color = "black";
        //    boxes[pattern[2][j]].style.color = "black";
        //  }

        // boxes[pattern[0]].style.color="black";
        // boxes[pattern[1]].style.color = "black";
        // boxes[pattern[2]].style.color = "black";
        // pos1.2("class", "new");
        // pos2.setAttribute("class", "new");
        // pos3.setAttribute("class", "new");
        // // console.log(pos1)
        disableBoxes();
      }
    }
  }
};

newGamebtn.addEventListener("click", () => {
  newGame();
});
