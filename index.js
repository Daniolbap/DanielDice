let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

console.log(`${dice1}, ${dice2}`);

function winer() {
  if (dice1 > dice2) {
    console.log(`gano dice 1`);
    document.querySelector(".header").innerHTML = "Player 1 wins 🎉";
  } else if (dice2 > dice1) {
    console.log(`gano dice 2`);
    document.querySelector(".header").innerHTML = "Player 2 wins 🎉";
  } else {
    console.log(`empate`);
    document.querySelector(".header").innerHTML = "Draw 🤝";
  }
}

function diceOne(dice1) {
  if (dice1 == 1) {
    document
      .querySelector(".Dice-1 img")
      .setAttribute("src", "./img/dado_1.png");
    console.log(`${dice1}`);
  } else if (dice1 === 2) {
    document
      .querySelector(".Dice-1 img")
      .setAttribute("src", "./img/dado_2.png");
    console.log(`${dice1}`);
  } else if (dice1 === 3) {
    document
      .querySelector(".Dice-1 img")
      .setAttribute("src", "./img/dado_3.png");
    console.log(`${dice1}`);
  } else if (dice1 === 4) {
    document
      .querySelector(".Dice-1 img")
      .setAttribute("src", "./img/dado_4.png");
    console.log(`${dice1}`);
  } else if (dice1 === 5) {
    document
      .querySelector(".Dice-1 img")
      .setAttribute("src", "./img/dado_5.png");
    console.log(`${dice1}`);
  } else {
    document
      .querySelector(".Dice-1 img")
      .setAttribute("src", "./img/dado_6.png");
    console.log(`${dice1}`);
  }
}

function diceTwo(dice2) {
  if (dice2 == 1) {
    document.querySelector(".Dice-2 img").setAttribute("src", "img/dado_1.png");
    console.log(`${dice2}`);
  } else if (dice2 === 2) {
    document.querySelector(".Dice-2 img").setAttribute("src", "img/dado_2.png");
    console.log(`${dice2}`);
  } else if (dice2 === 3) {
    document.querySelector(".Dice-2 img").setAttribute("src", "img/dado_3.png");
    console.log(`${dice2}`);
  } else if (dice2 === 4) {
    document.querySelector(".Dice-2 img").setAttribute("src", "img/dado_4.png");
    console.log(`${dice2}`);
  } else if (dice2 === 5) {
    document.querySelector(".Dice-2 img").setAttribute("src", "img/dado_5.png");
    console.log(`${dice2}`);
  } else {
    document.querySelector(".Dice-2 img").setAttribute("src", "img/dado_6.png");
    console.log(`${dice2}`);
  }
}

winer();
diceOne(dice1);
diceTwo(dice2);
