let outcomes = [1, 2, 3, 4, 5, 6];
let rolledNumbers = []; 

function rollDice() {
  let guess = +document.getElementById('guess').value;

  if (rolledNumbers.length === outcomes.length) {
    rolledNumbers = [];
  }

  let remainingNumbers = outcomes.filter(num => !rolledNumbers.includes(num));

  if (remainingNumbers.length > 0) {
    let rolledNumberIndex = Math.floor(Math.random() * remainingNumbers.length);
    let rolledNumber = remainingNumbers[rolledNumberIndex];
    rolledNumbers.push(rolledNumber);

    if (guess === rolledNumber) {
      document.getElementById('result').innerHTML = 'Congratulations!';
    } else {
      document.getElementById('result').innerHTML = 'Try again. The rolled number was ' + rolledNumber + '.';
    }
  } else {
    document.getElementById('result').innerHTML = 'All numbers have been rolled. Please reset the game.';
  }
}
