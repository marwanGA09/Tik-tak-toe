// // ******************************************
// // ******************************************
// class GameControl {
//   static mainMethod() {
//     play = document.querySelector(".play");
//     play.addEventListener("click", GameControl.#loadPage());
//   }

//   static {
//     container = document.querySelector(".container__board");
//     player = document.querySelector(".player");
//     start = document.querySelector(".start");
//     replay = document.querySelector(".replay");
//     winnerDisplay = document.querySelector(".winner-display");
//     input1 = document.querySelector("#player1");
//     input2 = document.querySelector("#player2");
//     dialog = document.querySelector(".dialog");
//     turn = document.querySelector(".turn");
//     player1;
//     player2;
//   }

//   static #loadPage() {
//     GameControl.#render();
//     GameControl.#changeDisplay();
//     GameControl.start.addEventListener("click", GameControl.#playGame());
//   }

//   static #reloadPage() {
//     GameControl.dialog.close();
//     document.location.reload();
//     GameControl.#loadPage();
//   }

//   static #playGame() {
//     player1 = new Player(GameControl.input1.value || "player1", "x");
//     player2 = new Player(GameControl.input2.value || "player2", "o");
//     GameControl.turn.classList.remove("hidden");

//     let col,
//       row,
//       currentPlayer = GameControl.player1,
//       mainBoard = gameBoard;

//     GameControl.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
//     GameControl.container.addEventListener("click", (ev) => {
//       [row, col] = [ev.target.dataset.row, ev.target.dataset.col];
//       // col = ev.target.dataset.col;
//       // console.log(col, row);

//       let board = PlayControl.markAt(currentPlayer, row, col, mainBoard);
//       // console.log(board.gameBoard);
//       // console.log(board.notRemark);
//       if (board.notRemark) {
//         [mainBoard, ev.target.textContent] = [
//           board.gameBoard,
//           currentPlayer.getMark(),
//         ];

//         if (PlayControl.isDraw(mainBoard)) {
//           GameControl.dialog.showModal();
//           GameControl.winnerDisplay.textContent = `Draw`;
//           GameControl.replay.addEventListener(
//             "click",
//             GameControl.#reloadPage()
//           );
//         } else {
//           if (PlayControl.checkStatus(mainBoard)) {
//             GameControl.dialog.showModal();
//             GameControl.winnerDisplay.textContent = `${currentPlayer.getName()} win the game`;
//             GameControl.replay.addEventListener(
//               "click",
//               GameControl.#reloadPage()
//             );
//           } else {
//             currentPlayer =
//               currentPlayer.getName() === GameControl.player1.getName()
//                 ? GameControl.player2
//                 : GameControl.player1;

//             GameControl.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
//           }
//         }
//       }
//     });
//   }

//   static #changeDisplay() {
//     GameControl.play.classList.toggle("hidden");
//     GameControl.player.classList.toggle("hidden");
//   }

//   static #render() {
//     for (let row = 0; row < 3; row++) {
//       for (let col = 0; col < 3; col++) {
//         let elem = document.createElement("div");
//         elem.classList.add("item");
//         elem.dataset.col = col;
//         elem.dataset.row = row;
//         // console.log(elem);
//         GameControl.container.appendChild(elem);
//       }
//     }
//   }
// }
