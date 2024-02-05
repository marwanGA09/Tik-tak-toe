// const gameControl = (function () {
//   loadPage = () => {
//     this.DOM();
//     this.render();
//     this.changeDisplay();
//     this.start.addEventListener("click", this.playGame.bind(this));
//   };
//   reloadPage = () => {
//     this.dialog.close();
//     document.location.reload();
//     this.loadPage();
//   };

//   this.play = document.querySelector(".play");
//   this.play.addEventListener("click", this.loadPage.bind(this));

//   playGame = () => {
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
//   };

//   changeDisplay = () => {
//     this.play.classList.toggle("hidden");
//     this.player.classList.toggle("hidden");
//   };

//   DOM = () => {
//     this.container = document.querySelector(".container__board");
//     this.player = document.querySelector(".player");
//     this.start = document.querySelector(".start");
//     this.replay = document.querySelector(".replay");
//     this.winnerDisplay = document.querySelector(".winner-display");
//     this.input1 = document.querySelector("#player1");
//     this.input2 = document.querySelector("#player2");
//     this.dialog = document.querySelector(".dialog");
//     this.turn = document.querySelector(".turn");
//   };

//   render = () => {
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
//   };
// })();
