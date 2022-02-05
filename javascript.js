function computerPlay () {

		play = Math.floor(Math.random() * 3);
		if (play == 0) {
			return 'pedra';
		}
		else if (play == 1) {
			return 'papel';
		}
		else {return 'tesoura'};


	}

function playRound (playerSelection, computerSelection) {
		if (playerSelection == computerSelection) {
			return 'Empate';
		}

		if (playerSelection === 'pedra') {
			if (computerSelection === 'tesoura') {
				return 'Você ganhou!';
			}
			else {return 'Você perdeu!'};
		}

		if (playerSelection === 'papel') {
			if (computerSelection === 'pedra') {
				return 'Você ganhou!';
			}
			else {return 'Você perdeu!'};
		}

		if (playerSelection === 'tesoura') {
			if (computerSelection === 'pedra') {
				return 'Você perdeu!';
			}
			else {return 'Você ganhou!'};
		}
	}







let vitoria = 0, derrota = 0, empate = 0;

for (i = 0; i < 5; i++) {

	let playerSelection = prompt('Escolha entre pedra, papel e tesoura, e digite abaixo');


	const computerSelection = computerPlay();
	console.log(`A máquina escolheu ${computerSelection}`);
	console.log(playRound(playerSelection, computerSelection));

	console.log(i);


	if (playRound(playerSelection, computerSelection)=='Você ganhou!') {
		vitoria++;
	} else if (playRound(playerSelection, computerSelection)=='Você perdeu!') {
		derrota++;

	} else {
		empate++;
	}
}


console.log(`De 5 partidas, você ganhou ${vitoria}, perdeu ${ derrota}, e empatou ${empate}.`);
