// Name: alok chaubey
 // Roll No.: bcs2025476
 // Assignment: 15, Task 4

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "geeta " },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Meera" }
      ]);
    }, 100);
  });
}

async function showUsers() {
  const users = await getUsers();

  users.forEach((user) => {
    console.log(user.name);
  });
}

showUsers();
