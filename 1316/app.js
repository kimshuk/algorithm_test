// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const wordCount = Number(input[0]);
let count = 0;

for (let i = 1; i <= wordCount; i++) {
  const word = input[i];
  let isGroupWord = true;
  const result = [];

  for (let j = 0; j < word.length; j++) {
    if (result.indexOf(word[j]) === -1) {
      result.push(word[j]);
    } else if (result.indexOf(word[j]) !== result.length - 1) {
      isGroupWord = false;
      break;
    }
  }

  if (isGroupWord) {
    count++;
  }
}

console.log(count);
