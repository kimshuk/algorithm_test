// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let sum = 0;

for (let i = 0; i < Number(input[0]); i++) {
  sum += Number(input[1][i]);
}

console.log(sum);
