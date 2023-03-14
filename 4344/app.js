// 백준 route
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const test_num = Number(input[0]);

for (let i = 1; i <= test_num; i++) {
  const test_arr = input[i].split(' ').map(Number);
  const student_num = test_arr[0];

  let total_s = test_arr.reduce((accVal, currVal, currIdx) => {
    if (currIdx === 0) {
      return accVal;
    } else {
      return accVal + currVal;
    }
  }, 0);
  const avg_s = total_s / student_num;

  let count_over_avg = 0;

  for (let j = 1; j <= student_num; j++) {
    if (test_arr[j] > avg_s) {
      count_over_avg++;
    }
  }
  console.log(((count_over_avg / student_num) * 100).toFixed(3) + '%');
}
