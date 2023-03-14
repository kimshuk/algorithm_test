// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

const croAlpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let alpha of croAlpha) {
  input = input.replace(new RegExp(alpha, 'ig'), 'Q');
}

console.log(input.length);
