// Name: alok chaubey
// Roll No.: bcs2025476

function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, (round) => {
  console.log("Round " + round);
});
