const fs = require('fs');

const useTest = process.argv[2] === '-t';
const data = fs.readFileSync(useTest ? './test.txt' : './input-b.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let sum = 0;

const grid = [];
lines.forEach(line => {
  grid.push(line.split(''));
});

let checkEveryDirection = (i, j) => {
  const topLeft = grid[i-1][j-1];
  const topRight = grid[i-1][j+1];
  const bottomLeft = grid[i+1][j-1];
  const bottomRight = grid[i+1][j+1];

  if (topLeft !== 'M' && topLeft !== 'S') return;
  if (topRight !== 'M' && topRight !== 'S') return;
  if (bottomLeft !== 'M' && bottomLeft !== 'S') return;
  if (bottomRight !== 'M' && bottomRight !== 'S') return;
  if (topLeft === bottomRight) return;
  if (topRight === bottomLeft) return;
  sum++;
}

for (let i = 1; i < grid.length - 1; i++) {
  for (let j = 1; j < grid[0].length - 1; + j++) {
    if (grid[i][j] === 'A') {
      checkEveryDirection(i, j);
    }
  }
}

console.log(sum);