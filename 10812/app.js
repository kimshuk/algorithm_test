// 백준 route
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const [n, m] = input[0].split(' ');

let buckets = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [beg, end, mid] = input[i].split(' ').map(Number);
  let arr = buckets.slice(mid - 1, end);
  buckets.splice(mid - 1, end - mid + 1);
  buckets.splice(beg - 1, 0, ...arr);
}
console.log(buckets.join(' '));
