// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

console.log(input[0]);

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(input[i][0] + input[i][input[i].length - 1]);
}
