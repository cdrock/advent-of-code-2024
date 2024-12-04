const fs = require('fs');

const data = fs.readFileSync('./input-a.txt', 'UTF-8');
// const data = fs.readFileSync('./test.txt', 'UTF-8');

const lines = data.split(/\r?\n/);

let sum = 0;

lines.forEach(line => {
  const a = line.split(' ').map((n) => parseInt(n));

  let good = true;
  let increasing = a[0] < a[1];

  for (let i = 0; i < a.length - 1; i++) {
    if ((increasing && a[i] > a[i+1] || !increasing && a[i] < a[i+1]) || Math.abs(a[i] - a[i+1]) > 3 || Math.abs(a[i] - a[i+1]) < 1) {
      good = false;
      break;
    }
  }

  if (good) sum++;
});

console.log(sum);