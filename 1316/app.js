// 백준 route
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const wLength = Number(input[0]);

let wordNum = 0;

for (let i = 1; i <= wLength; i++) {
  const letter = [];
  const word = input[i];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    // 전에 없었던 문자이면 array에 저장
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      // 전에 있었던 문자인데 연속된 문자가 아닐 경우 (바로 전에 있던 문자가 아닐경우)
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    wordNum += 1;
  }
}

console.log(wordNum, 'wordNum');
