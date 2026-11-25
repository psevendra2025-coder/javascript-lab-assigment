// Name: sevendra
 // Roll No.: bcs2025534

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
