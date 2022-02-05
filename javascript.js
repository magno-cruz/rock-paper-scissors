function computerPlay () {

	play = Math.floor(Math.random() * 3);
	if (play == 0) {
		return 'rock';
	}
	else if (play == 1) {
		return 'paper';
	}
	else {return 'scissors'};


}

function playRound (playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return 'Empate';
	}

	if (playerSelection == 'rock') {
		if (computerPlay == 'paper') {
			return 'Você perdeu!';
		}
		else {return 'Você ganhou!'};
	}

	return 'Não funcionou';
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(`O que a máquina escolher foi ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
