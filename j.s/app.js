var dice = document.getElementById("dice");
var win_loss = document.getElementById("win_loss");
var dice_input = document.getElementById("dice_input");

function generateDiceNumber() {
  var userValue = dice_input.value;
  if (userValue < 11) {
    var diceNumber = Math.ceil(Math.random() * 10);
    dice.innerText = diceNumber;
    if (userValue == diceNumber) {
      win_loss.innerText = "You win";
      win_loss.style.color = "Green";
    } else {
      win_loss.innerText = "You loss, Try Again";
      win_loss.style.color = "red";
    }
  } else {
    win_loss.style.color = "orange";
  }
}


