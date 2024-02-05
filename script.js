class Player {
  constructor(name, mark) {
    this.p_mark = mark;
    this.p_name = name;
  }

  getMark() {
    return this.p_mark;
  }

  getName() {
    return this.p_name;
  }
}

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

class PlayControl {
  static count = 0;

  static markAt(player, row, col, board) {
    let notRemark = false;
    let gameBoard = board;
    if (gameBoard[row][col] == "") {
      gameBoard[row][col] = player.getMark();
      notRemark = true;
      if (PlayControl.count <= 6) PlayControl.count++;
    }
    return { gameBoard, notRemark };
  }

  static checkStatus(board) {
    gameBoard = board;
    if (PlayControl.count >= 5) {
      for (let i = 0; i < 3; i++) {
        if (
          (gameBoard[i][i] === gameBoard[i][(i + 1) % 3] &&
            gameBoard[i][i] === gameBoard[i][(i + 2) % 3] &&
            gameBoard[i][i] !== "") ||
          (gameBoard[i][i] === gameBoard[(i + 1) % 3][i] &&
            gameBoard[i][i] === gameBoard[(i + 2) % 3][i] &&
            gameBoard[i][i] !== "")
        ) {
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
        return true;
      }
    }
    return false;
  }

  static isDraw(board) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }
}

// ******************************************
// ******************************************
// class GameControl {
//   play = document.querySelector(".play");
//   // play.addEventListener("click", loadPage.bind(this));

//   loadPage() {
//     this.DOM();
//     this.render();
//     this.changeDisplay();
//     this.start.addEventListener("click", this.playGame.bind(this));
//   }

//   reloadPage() {
//     this.dialog.close();
//     document.location.reload();
//     this.loadPage();
//   }

//   playGame() {
//     this.player1 = player(this.input1.value || "player1", "x");
//     this.player2 = player(this.input2.value || "player2", "o");
//     this.turn.classList.remove("hidden");

//     let col,
//       row,
//       currentPlayer = this.player1,
//       mainBoard = gameBoard;

//     this.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
//     this.container.addEventListener("click", (ev) => {
//       [row, col] = [ev.target.dataset.row, ev.target.dataset.col];
//       // col = ev.target.dataset.col;
//       // console.log(col, row);

//       let board = playControl.markAt(currentPlayer, row, col, mainBoard);
//       // console.log(board.gameBoard);
//       // console.log(board.notRemark);
//       if (board.notRemark) {
//         [mainBoard, ev.target.textContent] = [
//           board.gameBoard,
//           currentPlayer.getMark(),
//         ];

//         if (playControl.isDraw(mainBoard)) {
//           this.dialog.showModal();
//           this.winnerDisplay.textContent = `Draw`;
//           this.replay.addEventListener("click", this.reloadPage);
//         } else {
//           if (playControl.checkStatus(mainBoard)) {
//             this.dialog.showModal();
//             this.winnerDisplay.textContent = `${currentPlayer.getName()} win the game`;
//             this.replay.addEventListener("click", this.reloadPage);
//           } else {
//             currentPlayer =
//               currentPlayer.getName() === this.player1.getName()
//                 ? this.player2
//                 : this.player1;

//             this.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
//           }
//         }
//       }
//     });
//   }

//   changeDisplay() {
//     this.play.classList.toggle("hidden");
//     this.player.classList.toggle("hidden");
//   }

//   DOM() {
//     this.container = document.querySelector(".container__board");
//     this.player = document.querySelector(".player");
//     this.start = document.querySelector(".start");
//     this.replay = document.querySelector(".replay");
//     this.winnerDisplay = document.querySelector(".winner-display");
//     this.input1 = document.querySelector("#player1");
//     this.input2 = document.querySelector("#player2");
//     this.dialog = document.querySelector(".dialog");
//     this.turn = document.querySelector(".turn");
//   }

//   render() {
//     for (let row = 0; row < 3; row++) {
//       for (let col = 0; col < 3; col++) {
//         let elem = document.createElement("div");
//         elem.classList.add("item");
//         elem.dataset.col = col;
//         elem.dataset.row = row;
//         // console.log(elem);
//         this.container.appendChild(elem);
//       }
//     }
//   }
// }

// ******************************************
// ******************************************
// const player = function (name, mark) {
//   let p_mark = mark;
//   let p_name = name;

//   getMark = () => {
//     return p_mark;
//   };

//   getName = () => {
//     return p_name;
//   };
//   return { getMark, getName };
// };

// ******************************************
// ******************************************

// const playControl = (function () {
//   let count = 0;

//   markAt = function (player, row, col, board) {
//     let notRemark = false;
//     let gameBoard = board;
//     if (gameBoard[row][col] == "") {
//       gameBoard[row][col] = player.getMark();
//       notRemark = true;
//       if (count <= 6) count++;
//     }
//     return { gameBoard, notRemark };
//   };

//   checkStatus = function (board) {
//     gameBoard = board;
//     if (count >= 5) {
//       for (let i = 0; i < 3; i++) {
//         if (
//           (gameBoard[i][i] === gameBoard[i][(i + 1) % 3] &&
//             gameBoard[i][i] === gameBoard[i][(i + 2) % 3] &&
//             gameBoard[i][i] !== "") ||
//           (gameBoard[i][i] === gameBoard[(i + 1) % 3][i] &&
//             gameBoard[i][i] === gameBoard[(i + 2) % 3][i] &&
//             gameBoard[i][i] !== "")
//         ) {
//           return true;
//         }
//       }

//       if (
//         (gameBoard[1][1] !== "" &&
//           gameBoard[2][0] === gameBoard[1][1] &&
//           gameBoard[1][1] === gameBoard[0][2]) ||
//         (gameBoard[1][1] !== "" &&
//           gameBoard[0][0] === gameBoard[1][1] &&
//           gameBoard[1][1] === gameBoard[2][2])
//       ) {
//         return true;
//       }
//     }
//     return false;
//   };

//   isDraw = (board) => {
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (board[i][j] === "") {
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   return { markAt, checkStatus, isDraw };
// })();

// ******************************************
// ******************************************
const gameControl = (function () {
  loadPage = () => {
    this.DOM();
    this.render();
    this.changeDisplay();
    this.start.addEventListener("click", this.playGame.bind(this));
  };
  reloadPage = () => {
    this.dialog.close();
    document.location.reload();
    this.loadPage();
  };

  this.play = document.querySelector(".play");
  this.play.addEventListener("click", this.loadPage.bind(this));

  playGame = () => {
    this.player1 = new Player(this.input1.value || "player1", "x");
    this.player2 = new Player(this.input2.value || "player2", "o");
    this.turn.classList.remove("hidden");

    let col,
      row,
      currentPlayer = this.player1,
      mainBoard = gameBoard;

    this.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
    this.container.addEventListener("click", (ev) => {
      [row, col] = [ev.target.dataset.row, ev.target.dataset.col];
      // col = ev.target.dataset.col;
      // console.log(col, row);

      let board = PlayControl.markAt(currentPlayer, row, col, mainBoard);
      // console.log(board.gameBoard);
      // console.log(board.notRemark);
      if (board.notRemark) {
        [mainBoard, ev.target.textContent] = [
          board.gameBoard,
          currentPlayer.getMark(),
        ];

        if (PlayControl.isDraw(mainBoard)) {
          this.dialog.showModal();
          this.winnerDisplay.textContent = `Draw`;
          this.replay.addEventListener("click", this.reloadPage);
        } else {
          if (PlayControl.checkStatus(mainBoard)) {
            this.dialog.showModal();
            this.winnerDisplay.textContent = `${currentPlayer.getName()} win the game`;
            this.replay.addEventListener("click", this.reloadPage);
          } else {
            currentPlayer =
              currentPlayer.getName() === this.player1.getName()
                ? this.player2
                : this.player1;

            this.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
          }
        }
      }
    });
  };

  changeDisplay = () => {
    this.play.classList.toggle("hidden");
    this.player.classList.toggle("hidden");
  };

  DOM = () => {
    this.container = document.querySelector(".container__board");
    this.player = document.querySelector(".player");
    this.start = document.querySelector(".start");
    this.replay = document.querySelector(".replay");
    this.winnerDisplay = document.querySelector(".winner-display");
    this.input1 = document.querySelector("#player1");
    this.input2 = document.querySelector("#player2");
    this.dialog = document.querySelector(".dialog");
    this.turn = document.querySelector(".turn");
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
})();
