// 백준 route
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

const num_input = Number(input);

for (let i = 0; i < num_input; i++) {
  console.log(' '.repeat(i) + '*'.repeat(num_input - i));
}
