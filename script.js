// const board = (function playBoard() {
//   //   let board = { col1: [0, 0, 0], col2: [0, 0, 0], col3: [0, 0, 0] };
//   return { col1: [0, 0, 0], col2: [0, 0, 0], col3: [0, 0, 0] };
// })();

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

const player1 = player("adem", "x");
console.log(player1.getName());
console.log(player1.getMark());
const player2 = player("kedir", "0");
console.log(player2.getName());
console.log(player2.getMark());
