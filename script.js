function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let winScore = 0;
let loseScore = 0;
let hardnessVariable = 1000;

// LEVELS OF HARDNESS
const level1 = document.querySelector("#level-1");
const level2 = document.querySelector("#level-2");
const level3 = document.querySelector("#level-3");
level1.addEventListener("click", (event) => {
  hardnessVariable = 1500;
  level1.blur();
});
level2.addEventListener("click", (event) => {
  hardnessVariable = 1000;
  level2.blur();
});
level3.addEventListener("click", (event) => {
  hardnessVariable = 700;
  -level3.blur();
});
//

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    let gameStart = document.querySelector(".game-start-block");

    gameStart.classList.remove("game-start");

    setInterval(() => {
      let randomId = random(1, 8);
      let head = document.querySelector(`#head-id-${randomId}`);
      let lid;

      // Beaver jumping out
      if (randomId <= 4) {
        head.classList.add("head-up");
      }
      // Return of Beaver under a cover
      setTimeout(() => {
        if (head.classList[4] === "head-up") {
          head.classList.remove("head-up");
        }
      }, 600);

      // Left Head Jump
      if (randomId >= 5) {
        head.classList.add("fake-head-up");
      }
      // Return of the Head under the cover
      setTimeout(() => {
        if (head.classList[4] === "fake-head-up") {
          head.classList.remove("fake-head-up");
        }
      }, 600);

      // Lifting the lid
      if (randomId === 1 || randomId === 5) {
        lid = document.querySelector("#lid-1");
        lid.classList.add("lid-up");
      }
      if (randomId === 2 || randomId === 6) {
        lid = document.querySelector("#lid-2");
        lid.classList.add("lid-up");
      }
      if (randomId === 3 || randomId === 7) {
        lid = document.querySelector("#lid-3");
        lid.classList.add("lid-up");
      }
      if (randomId === 4 || randomId === 8) {
        lid = document.querySelector("#lid-4");
        lid.classList.add("lid-up");
      }
      // Returning the lid
      setTimeout(() => {
        if (lid.classList[1] === "lid-up") {
          lid.classList.remove("lid-up");
        }
      }, 600);
    }, hardnessVariable);
  }
});

// HAMMER MOVEMENT
// POINTS LOGIC

const instruction = document.querySelector(".instruction");

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    instruction.remove();
    let hamer = document.querySelector("#hamer-1");
    hamer.classList.add("hamer-right-move");
    setTimeout(() => {
      hamer.classList.remove("hamer-right-move");
    }, 100);

    setTimeout(() => {
      let head = document.querySelector("#head-id-1");
      let fakeHead = document.querySelector("#head-id-5");
      let headPos = parseInt(getComputedStyle(head).getPropertyValue("bottom"));
      let fakeHeadPos = parseInt(
        getComputedStyle(fakeHead).getPropertyValue("bottom")
      );
      if (headPos > 160) {
        winScore++;
        console.log("winScore", winScore);
      }
      if (fakeHeadPos > 230) {
        loseScore++;
        console.log("loseScore", loseScore);
      }
    }, 50);
  }
  if (event.key === "ArrowLeft") {
    instruction.remove();
    let hamer = document.querySelector("#hamer-2");
    hamer.classList.add("hamer-left-move");
    setTimeout(() => {
      hamer.classList.remove("hamer-left-move");
    }, 100);

    setTimeout(() => {
      let head = document.querySelector("#head-id-2");
      let fakeHead = document.querySelector("#head-id-6");
      let headPos = parseInt(getComputedStyle(head).getPropertyValue("bottom"));
      let fakeHeadPos = parseInt(
        getComputedStyle(fakeHead).getPropertyValue("bottom")
      );
      if (headPos > 160) {
        winScore++;
        console.log("winScore", winScore);
      }
      if (fakeHeadPos > 230) {
        loseScore++;
        console.log("loseScore", loseScore);
      }
    }, 50);
  }

  if (event.key === "ArrowRight") {
    instruction.remove();
    let hamer = document.querySelector("#hamer-3");
    hamer.classList.add("hamer-right-move");
    setTimeout(() => {
      hamer.classList.remove("hamer-right-move");
    }, 100);

    setTimeout(() => {
      let head = document.querySelector("#head-id-3");
      let fakeHead = document.querySelector("#head-id-7");
      let headPos = parseInt(getComputedStyle(head).getPropertyValue("bottom"));
      let fakeHeadPos = parseInt(
        getComputedStyle(fakeHead).getPropertyValue("bottom")
      );
      if (headPos > 160) {
        winScore++;
        console.log("winScore", winScore);
      }
      if (fakeHeadPos > 230) {
        loseScore++;
        console.log("loseScore", loseScore);
      }
    }, 50);
  }

  if (event.key === "ArrowDown") {
    instruction.remove();
    let hamer = document.querySelector("#hamer-4");
    hamer.classList.add("hamer-left-move");
    setTimeout(() => {
      hamer.classList.remove("hamer-left-move");
    }, 100);

    setTimeout(() => {
      let head = document.querySelector("#head-id-4");
      let fakeHead = document.querySelector("#head-id-8");
      let headPos = parseInt(getComputedStyle(head).getPropertyValue("bottom"));
      let fakeHeadPos = parseInt(
        getComputedStyle(fakeHead).getPropertyValue("bottom")
      );
      if (headPos > 160) {
        winScore++;
        console.log("winScore", winScore);
      }
      if (fakeHeadPos > 230) {
        loseScore++;
        console.log("loseScore", loseScore);
      }
    }, 50);
  }
});

const loseScore1 = document.querySelector(".lose-1");
const loseScore2 = document.querySelector(".lose-2");
const loseScore3 = document.querySelector(".lose-3");

const winScore1 = document.querySelector(".life-1");
const winScore2 = document.querySelector(".life-2");
const winScore3 = document.querySelector(".life-3");

const redRound1 = document.querySelector(".round-for-icon-1");
const redRound2 = document.querySelector(".round-for-icon-2");
const redRound3 = document.querySelector(".round-for-icon-3");
const redRound4 = document.querySelector(".round-for-icon-4");
const redRound5 = document.querySelector(".round-for-icon-5");
const redRound6 = document.querySelector(".round-for-icon-6");

const gameOver = document.querySelector(".game-over");
const gameOverLose = document.querySelector(".game-over-lose");

setInterval(() => {
  if (winScore >= 1) {
    if (winScore1.classList[1] === "life-1") {
      winScore1.classList.remove("life-1");
      winScore1.classList.add("life-minus");
    }
  }
  if (winScore >= 2) {
    if (winScore2.classList[1] === "life-2") {
      winScore2.classList.remove("life-2");
      winScore2.classList.add("life-minus");
    }
  }
  if (winScore >= 3) {
    if (winScore3.classList[1] === "life-3") {
      winScore3.classList.remove("life-3");
      winScore3.classList.add("life-minus");
      gameOver.classList.add("game-over-show");
    }
  }
  if (loseScore >= 1) {
    if (loseScore1.classList[1] === "lose-1") {
      loseScore1.classList.remove("lose-1");
      loseScore1.classList.add("lose-minus");
    }
  }
  if (loseScore >= 2) {
    if (loseScore2.classList[1] === "lose-2") {
      loseScore2.classList.remove("lose-2");
      loseScore2.classList.add("lose-minus");
    }
  }
  if (loseScore >= 3) {
    if (loseScore3.classList[1] === "lose-3") {
      loseScore3.classList.remove("lose-3");
      loseScore3.classList.add("lose-minus");
      gameOverLose.classList.add("game-over-lose-show");
    }
  }
}, 100);
