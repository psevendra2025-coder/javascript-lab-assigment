// Name: alok chaubey
 // Roll No.: bcs2025476
 // Assignment: 12, Task 1

function applyTwice(func, value) {
  return func(func(value));
}

function addTen(number) {
  return number + 10;
}

console.log(applyTwice(addTen, 5));
