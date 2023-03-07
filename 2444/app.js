// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

const row = 2 * input - 1;
console.log(row);

for (let i = 0; i < row; i++) {}
