// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let result = '';
  const arr = input[i].split(' ');

  for (let j = 0; j < arr[1].length; j++) {
    result += arr[1][j].repeat(Number(arr[0]));
  }
  console.log(result);
}
