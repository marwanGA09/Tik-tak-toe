const player = function (name, mark) {
  this.mark = mark;
  this.name = name;

  getMark = () => {
    return this.mark;
  };

  getName = () => {
    return this.name;
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

  markAt = function (player, row, col) {
    if (!gameBoard[row][col]) {
      gameBoard[row][col] = player.getMark();
      if (count < 6) {
        count++;
      }
    }
  };

  checkStatus = function () {
    if (count >= 0) {
      if (
        ((gameBoard[0][0] === gameBoard[1][1]) === gameBoard[2][2]) !== "" ||
        ((gameBoard[2][0] === gameBoard[1][1]) === gameBoard[0][2]) !== ""
      ) {
        return true;
      } else {
        for (let i = 0; i < 3; i++) {
          let first = gameBoard[i][i];
          if (
            (first === gameBoard[i][(i + 1) % 3]) ===
            gameBoard[i][(i + 2) % 3]
          ) {
            return true;
          }
        }
      }
    }
    console.log("false");
    return false;
  };

  return { markAt, checkStatus };
})();

// const player1 = player("adem", "x");
// console.log(player1.getName());
// console.log(player1.getMark());
// const player2 = player("kedir", "0");
// console.log(player2.getName());
// console.log(player2.getMark());

// playControl.markAt(player1, 0, 2);
// playControl.markAt(player1, 1, 1);
// playControl.markAt(player1, 2, 0);
// console.log("jksdfjs", playControl.checkStatus());
// console.log();
