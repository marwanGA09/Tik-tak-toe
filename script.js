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

class GameControl {
  static play;
  static mainMethod() {
    GameControl.play = document.querySelector(".play");
    GameControl.play.addEventListener("click", GameControl.#loadPage());
  }

  static container = document.querySelector(".container__board");
  static player = document.querySelector(".player");
  static start = document.querySelector(".start");
  static replay = document.querySelector(".replay");
  static winnerDisplay = document.querySelector(".winner-display");
  static input1 = document.querySelector("#player1");
  static input2 = document.querySelector("#player2");
  static dialog = document.querySelector(".dialog");
  static turn = document.querySelector(".turn");
  static player1;
  static player2;

  static #loadPage() {
    GameControl.#render();
    GameControl.#changeDisplay();
    GameControl.start.addEventListener("click", GameControl.#playGame());
  }

  static #reloadPage() {
    GameControl.dialog.close();
    document.location.reload();
    GameControl.#loadPage();
  }

  static #playGame() {
    GameControl.player1 = new Player(
      GameControl.input1.value || "player1",
      "x"
    );
    GameControl.player2 = new Player(
      GameControl.input2.value || "player2",
      "o"
    );
    GameControl.turn.classList.remove("hidden");

    let col,
      row,
      currentPlayer = GameControl.player1,
      mainBoard = gameBoard;

    GameControl.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
    GameControl.container.addEventListener("click", (ev) => {
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
          GameControl.dialog.showModal();
          GameControl.winnerDisplay.textContent = `Draw`;
          GameControl.replay.addEventListener("click", GameControl.#reloadPage);
        } else {
          if (PlayControl.checkStatus(mainBoard)) {
            GameControl.dialog.showModal();
            GameControl.winnerDisplay.textContent = `${currentPlayer.getName()} win the game`;
            GameControl.replay.addEventListener(
              "click",
              GameControl.#reloadPage
            );
          } else {
            currentPlayer =
              currentPlayer.getName() === GameControl.player1.getName()
                ? GameControl.player2
                : GameControl.player1;

            GameControl.turn.textContent = `${currentPlayer.getName()}'s turn ...`;
          }
        }
      }
    });
  }

  static #changeDisplay() {
    GameControl.play.classList.toggle("hidden");
    GameControl.player.classList.toggle("hidden");
  }

  static #render() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let elem = document.createElement("div");
        elem.classList.add("item");
        elem.dataset.col = col;
        elem.dataset.row = row;
        // console.log(elem);
        GameControl.container.appendChild(elem);
      }
    }
  }
}

GameControl.mainMethod();
