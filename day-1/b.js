const fs = require('fs');

const data = fs.readFileSync('./input-b.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let sum = 0;

const f = [];

const m = {};

lines.forEach(line => {
  let [front, back] = line.split("   ");
  f.push(parseInt(front));
  
  if (m[back]) {
    m[back]++;
  } else {
    m[back] = 1;
  }
});

for(let i = 0; i < f.length; i++) {
  const num = f[i];
  
  if (m[num]) {
    sum += num * m[num];
  }
}

console.log(sum);