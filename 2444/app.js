// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

const num_input = Number(input);
const row = 2 * input - 1;
console.log(num_input);
console.log(row);

for (let i = 0; i < num_input * 2 - 1; i++) {
  let empty = ' ';
  let dot = '*';
  if (i < num_input) {
    console.log(empty.repeat(num_input - i) + dot.repeat(1 + 2 * i));
  } else {
    console.log(
      empty.repeat(Math.abs(num_input - i)) +
        dot.repeat(row - 2 * (i - num_input))
    );
  }
}
