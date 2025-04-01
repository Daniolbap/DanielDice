let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

console.log(`${dice1}, ${dice2}`);

function winer() {
  if (dice1 > dice2) {
    console.log(`gano dice 1`);
  } else if (dice2 > dice1) {
    console.log(`gano dice 2`);
  } else {
    console.log(`empate`);
  }
}
