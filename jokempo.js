idade = prompt("Infome a sua idade:");
if (idade < 18) {
  alert("Voce não pode jogar Jokenpo");
}

if (idade >= 18) {
  escolhajogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
  escolhacomputador = Math.floor(Math.random() * 3) + 1;

  if (escolhajogador == escolhacomputador) {
    alert("Empate!!");
  }

  if (escolhajogador == 1) {
    if (escolhacomputador == 2) {
      alert("Computador venceu, Computador escolheu papel");
    }
    if (escolhacomputador == 3) {
      alert("Jogador venceu, computador escolheu tesoura");
    }
  }

  if (escolhajogador == 2) {
    if (escolhacomputador == 1) {
      alert("Jogador Vence, computador escolheu pedra");
    }
    if (escolhacomputador == 3) {
      alert("Computador venceu, Computador esclheu tesoura");
    }
  }

  if (escolhajogador == 3) {
    if (escolhacomputador == 1) {
      alert("Computador venceu, Computador escolheu pedra");
    }

    if (escolhacomputador == 2) {
      alert("Jogador venceu, Computador escolheu papel");
    }
  }
  alert("A escolha do computador e: " + escolhacomputador);
}
