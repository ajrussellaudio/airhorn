function playSound() {
  console.log("Mrrrrrrr!!")
}

function buildButton() {
  var button = document.createElement("button");
  button.textContent = "Airhorn!";
  button.addEventListener('click', playSound);
  document.body.appendChild(button);
}

window.addEventListener('load', buildButton);
