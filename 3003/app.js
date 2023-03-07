// 백준 route
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ');

const original = [1, 1, 2, 2, 2, 8];
const diff_pcs = [];

for (let i = 0; i < input.length; i++) {
  const diff = original[i] - input[i];
  diff_pcs.push(diff);
}

console.log(diff_pcs.join(' '));
