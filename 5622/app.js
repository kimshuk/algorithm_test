// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('');

let sum = 0;

const dial = {
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

for (let i = 0; i < input.length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (dial[j].includes(input[i])) {
      sum += j + 1;
      break;
    }
  }
}

console.log(sum);
