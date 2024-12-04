const fs = require('fs');

const data = fs.readFileSync('./input-a.txt', 'UTF-8');
// const data = fs.readFileSync('./test.txt', 'UTF-8');

const lines = data.split(/\r?\n/);

let sum = 0;
const regexp = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
const regexp2 = /[0-9]{1,3}/g;


lines.forEach(line => {
  const matches = line.match(regexp);
  console.log(matches);
  matches.forEach((m) => {
    const [a, b] = m.match(regexp2);
    sum += parseInt(a) * parseInt(b);
  });
});

console.log(sum);