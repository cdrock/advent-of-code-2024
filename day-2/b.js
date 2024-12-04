const fs = require('fs');

const data = fs.readFileSync('./input-b.txt', 'UTF-8');
// const data = fs.readFileSync('./test.txt', 'UTF-8');

const lines = data.split(/\r?\n/);

let sum = 0;

lines.forEach(line => {
  const data = line.split(' ').map((n) => parseInt(n));

  let checkArray = (a, stop) => {
    let checkIfBad = (x, y) => {
      const bad = increasing && x > y || !increasing && x < y || Math.abs(x - y) > 3 || Math.abs(x - y) < 1;
      return bad;
    }

    let increasing = a[0] < a[1];

    for (let i = 0; i < a.length - 1; i++) {
      if (checkIfBad(a[i], a[i+1])) {
        if (stop) {
          return false;
        }
  
        const ar2 = a.filter((_, index) => index !== i);
        const ar3 = a.filter((_, index) => index !== i+1);
        const ar4 = a.filter((_, index) => index !== i-1);
        return checkArray(ar2, true) || checkArray(ar3, true) || checkArray(ar4, true);
      }
    }

    return true;
  }

  if(checkArray(data, false)) sum++;
});

console.log(sum);