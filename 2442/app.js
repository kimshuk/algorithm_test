// 백준 route
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

const num_input = Number(input);

for (let i = 1; i <= num_input; i++) {
  let empty = ' ';
  let dot = '*';
  console.log(empty.repeat(num_input - i) + dot.repeat(2 * i - 1));
}
