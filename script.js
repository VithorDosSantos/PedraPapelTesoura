function play(playerChoice) {
    const choices = ["pedra", "papel", "stesoura"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let resultText;
    if (playerChoice === computerChoice) {
      resultText = "Empate!";
    } else if (
      (playerChoice === "pedra" && computerChoice === "tesoura") ||
      (playerChoice === "papel" && computerChoice === "pedra") ||
      (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
      resultText = "Voce venceu!";
    } else {
      resultText = "Voce perdeu!";
    }
  
    document.getElementById("result").textContent = `Voce escolheu ${playerChoice}. Computador escolheu ${computerChoice}. ${resultText}`;
  }
  function resetGame() {
    document.getElementById("result").textContent = "escolha uma opçao";
  }
  