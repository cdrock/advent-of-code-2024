const fs = require('fs');

const data = fs.readFileSync('input-a.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let sum = 0;

const f = [];
const b = [];

lines.forEach(line => {
  let [front, back] = line.split("   ");
  f.push(front);
  b.push(back);
});

f.sort();
b.sort();

for(let i = 0; i < f.length; i++) {
  sum += Math.abs(f[i] - b[i]);
}

console.log(sum);