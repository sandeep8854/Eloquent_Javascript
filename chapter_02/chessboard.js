'use strict';
const chessBoard = num => {
  let output = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if ((i + j) % 2 == 0 ? (output = output + ' ') : (output = output + '#'));
    }
    output = output + '\n';
  }
  console.log(output);
};
chessBoard(8);
