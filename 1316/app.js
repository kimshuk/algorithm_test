// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const wordlength = Number(input[0]);
let groupWordNum = 0;

for (let i = 1; i <= wordlength; i++) {
  const currentWord = input[i]; // happy;
  const arr = [];
  let isGroupWord = true;

  for (let j = 0; j < currentWord.length; j++) {
    // arr에서 현재 캐릭터를 못찾으면 arr에 추가
    if (arr.indexOf(currentWord[j]) === -1) {
      arr.push(currentWord[j]);
    } else if (arr.indexOf(currentWord[j]) !== arr.length - 1) {
      isGroupWord = false;
      break;
    }
  }

  if (isGroupWord) {
    groupWordNum += 1;
  }
}

console.log(groupWordNum);
