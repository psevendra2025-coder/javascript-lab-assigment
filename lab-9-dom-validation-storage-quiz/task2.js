// Name: alok chaubey
 // Roll No.: bcs2025476
 // Assignment: 9, Task 2

function validateForm(name) {
  const errors = [];

  if (name.trim() === "") {
    errors.push("Name is required");
  }

  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
