// 백준 route
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('');
let isPalindrome = true;

for (let i = 0; i < Math.ceil(input.length / 2); i++) {
  const front = input[i];
  const back = input[input.length - 1 - i];

  console.log(front);
  console.log(back);
  if (front !== back) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(1);
} else {
  console.log(0);
}
