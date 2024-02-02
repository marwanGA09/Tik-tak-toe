const player = function (name, mark) {
  let p_mark = mark;
  let p_name = name;

  getMark = () => {
    return p_mark;
  };

  getName = () => {
    return p_name;
  };
  return { getMark, getName };
};

gameBoard = (function () {
  let gameBoardArray = [];
  for (let i = 0; i < 3; i++) {
    gameBoardArray.push([]);
    for (let j = 0; j < 3; j++) {
      gameBoardArray[i].push("");
    }
  }
  return gameBoardArray;
})();

const playControl = (function () {
  let count = 0;

  markAt = function (player, row, col, board) {
    let gameBoard = board;
    if (!gameBoard[row][col]) {
      gameBoard[row][col] = player.getMark();
      if (count <= 6) {
        count++;
        console.log(count);
      }
    }
    return gameBoard;
  };

  checkStatus = function (board) {
    gameBoard = board;
    if (count >= 5) {
      for (let i = 0; i < 3; i++) {
        if (
          (gameBoard[i][i] === gameBoard[i][(i + 1) % 3] &&
            gameBoard[i][i] === gameBoard[i][(i + 2) % 3] &&
            gameBoard[i][i] !== "") ||
          (gameBoard[i][i] === gameBoard[(i + 1) % 3][i] &&
            gameBoard[i][i] === gameBoard[(i + 2) % 3][i] &&
            gameBoard[i][i] !== "")
        ) {
          // console.log("End normal line");
          return true;
        }
      }

      if (
        (gameBoard[1][1] !== "" &&
          gameBoard[2][0] === gameBoard[1][1] &&
          gameBoard[1][1] === gameBoard[0][2]) ||
        (gameBoard[1][1] !== "" &&
          gameBoard[0][0] === gameBoard[1][1] &&
          gameBoard[1][1] === gameBoard[2][2])
      ) {
        // console.log(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]);
        return true;
      }
    }
    return false;
  };

  return { markAt, checkStatus };
})();

function display(board) {
  for (i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// display(gameBoard);
const gameControl = function () {
  this.play = document.querySelector(".play");

  // this.button.addEventListener("click", this.addPopple.bind(this));
  this.play.addEventListener("click", () => {
    this.DOM();
    this.render();
    this.changeDisplay();
    this.start.addEventListener("click", this.playGame.bind(this));
  });

  playGame = () => {
    this.player1 = player(this.input1.value || "player1", "x");
    this.player2 = player(this.input2.value || "player2", "o");
    // console.log(this.player1.getName());

    // let end = false;
    let col, row;
    let currentPlayer = this.player1;
    let mainBoard = gameBoard;

    this.container.addEventListener("click", (ev) => {
      // while (ev) {
      row = ev.target.dataset.row;
      col = ev.target.dataset.col;
      console.log(col, row);
      mainBoard = playControl.markAt(currentPlayer, row, col, mainBoard);
      let currentDiv = document.querySelector(
        `[data-col="${col}"][data-row="${row}"]`
      );
      currentDiv.textContent = currentPlayer.getMark();
      if (playControl.checkStatus(mainBoard)) {
        this.container.classList.add("hidden");
      } else {
        currentPlayer =
          currentPlayer.getName() === this.player1.getName()
            ? this.player2
            : this.player1;
      }
      // }
    });

    // row = prompt(`${currentPlayer.getName()}, row? `);
    // col = prompt(`${currentPlayer.getName()}, col? `);
    // mainBoard = playControl.markAt(currentPlayer, row, col, mainBoard);
    // if (playControl.checkStatus(mainBoard)) {
    //   end = true;
    //   console.log("game end", currentPlayer.getName(), "win");
    // } else {
    //   console.log("game does not end");
    //   currentPlayer =
    //     currentPlayer.getName() === player1.getName() ? player2 : player1;
    // }
    // display(mainBoard);
    // }
  };

  // init = () => {
  // };
  changeDisplay = () => {
    this.play.classList.toggle("hidden");
    this.player.classList.toggle("hidden");
  };

  DOM = () => {
    this.container = document.querySelector(".container__board");
    this.player = document.querySelector(".player");
    this.start = document.querySelector(".start");
    this.input1 = document.querySelector("#player1");
    this.input2 = document.querySelector("#player2");
  };

  render = () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let elem = document.createElement("div");
        elem.classList.add("item");
        elem.dataset.col = col;
        elem.dataset.row = row;
        // console.log(elem);
        this.container.appendChild(elem);
      }
    }
  };

  // this.init();

  // const playerName1 = prompt("name for player 1?");
  // const playerName2 = prompt("name for player 2?");
  // const player1 = player(playerName1, "X");
  // const player2 = player(playerName2, "O");
  // console.log(`player 1 ${player1.getName()}, with mark ${player1.getMark()}`);
  // console.log(`player 2 ${player2.getName()}, with mark ${player2.getMark()}`);
  // let end = false;
  // let col, row;
  // let currentPlayer = player1;
  // let mainBoard = gameBoard;
  // console.log("basic main board");
  // display(mainBoard);
  // while (!end) {
  //   console.log("current player is ", currentPlayer.getName());
  //   row = prompt(`${currentPlayer.getName()}, row? `);
  //   col = prompt(`${currentPlayer.getName()}, col? `);
  //   mainBoard = playControl.markAt(currentPlayer, row, col, mainBoard);
  //   if (playControl.checkStatus(mainBoard)) {
  //     end = true;
  //     console.log("game end", currentPlayer.getName(), "win");
  //   } else {
  //     console.log("game does not end");
  //     currentPlayer =
  //       currentPlayer.getName() === player1.getName() ? player2 : player1;
  //   }
  //   display(mainBoard);
  // }

  console.log("finish");
};
// console.log("a" === "a" && "a" === "a");
gameControl();
// const playerName1 = prompt("name for player 1?");
// const playerName2 = prompt("name for player 2?");
// const player1 = player(playerName1, "X");
// const player2 = player(playerName2, "O");
// let player1 = player("adem", "x");
// let player2 = player("kedir", "0");

// console.log(player1.getName());
// // console.log(player2);
// console.log(`player 1 ${player1.getName()}, with mark ${player1.getMark()}`);
// console.log(`player 2 ${player2.getName()}, with mark ${player2.getMark()}`);

// console.log(gameBoard);
