const fs = require('fs');

const useTest = process.argv[2] === '-t';
const data = fs.readFileSync(useTest ? './test.txt' : './input-a.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

let sum = 0;

const grid = [];
lines.forEach(line => {
  grid.push(line.split(''));
});

let checkEveryDirection = (i, j) => {
  let checkUp = () => i > 2;
  let checkDown = () => i < grid.length - 3;
  let checkLeft = () => j > 2;
  let checkRight = () => j < grid[0].length - 3;

  // Down
  if (checkDown() && grid[i+1][j] === 'M' && grid[i+2][j] === 'A' && grid[i+3][j] === 'S') {
    sum++;
  }

  // Up
  if (checkUp() && grid[i-1][j] === 'M' && grid[i-2][j] === 'A' && grid[i-3][j] === 'S') {
    sum++;
  }

  // Left
  if (checkLeft() && grid[i][j-1] === 'M' && grid[i][j-2] === 'A' && grid[i][j-3] === 'S') {
    sum++;
  }

  // Right
  if (checkRight() && grid[i][j+1] === 'M' && grid[i][j+2] === 'A' && grid[i][j+3] === 'S') {
    sum++;
  }

  // Down Left
  if (checkDown() && checkLeft && grid[i+1][j-1] === 'M' && grid[i+2][j-2] === 'A' && grid[i+3][j-3] === 'S') {
    sum++;
  }

  // Down Right
  if (checkDown() && checkRight() && grid[i+1][j+1] === 'M' && grid[i+2][j+2] === 'A' && grid[i+3][j+3] === 'S') {
    sum++;
  }

  // Up Left
  if (checkUp() && checkLeft() && grid[i-1][j-1] === 'M' && grid[i-2][j-2] === 'A' && grid[i-3][j-3] === 'S') {
    sum++;
  }

  // Up Right
  if (checkUp() && checkRight() && grid[i-1][j+1] === 'M' && grid[i-2][j+2] === 'A' && grid[i-3][j+3] === 'S') {
    sum++;
  }
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[0].length; + j++) {
    if (grid[i][j] === 'X') {
      checkEveryDirection(i, j);
    }
  }
}

console.log(sum);