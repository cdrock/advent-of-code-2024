const fs = require('fs');

const useTest = false;
const data = fs.readFileSync(useTest ? './test.txt' : './input-b.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let sum = 0;
const regexp = /mul\([0-9]{1,3},[0-9]{1,3}\)|do\(\)|don't\(\)/g;
const regexp2 = /[0-9]{1,3}/g;

let enabled = true;

lines.forEach(line => {
  const matches = line.match(regexp);
  matches.forEach((m) => {
    if (m === 'don\'t()') {
      enabled = false;
    } else if (m === 'do()') {
      enabled = true;
    } else if (enabled) {
      const [a, b] = m.match(regexp2);
      sum += parseInt(a) * parseInt(b);
    }
  });
});

console.log(sum);