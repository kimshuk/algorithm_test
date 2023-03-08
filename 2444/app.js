// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

const num_input = Number(input);
let empty = ' ';
let dot = '*';

for (let i = 1; i <= num_input; i++) {
  console.log(empty.repeat(num_input - i) + dot.repeat(2 * i - 1));
}
for (let i = num_input - 1; i >= 1; i--) {
  console.log(empty.repeat(num_input - i) + dot.repeat(2 * i - 1));
}
