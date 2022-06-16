function computerPlay () {
	switch (Math.floor(Math.random() * 3)){
		case 0:
			return 'pedra';
			break;
		case 1:
			return 'papel';
			break;
		case 2:
			return 'tesoura';
			break;
		default:
			return console.log('Erro na função computerPlay');
	}
}

function botaoReiniciar (resposta = ' ') {
	pergunta.replaceWith(reiniciar);
	reiniciar.style.display = 'flex';
	document.getElementById('escolha').style.display = 'none';
	ganhar.innerHTML = resposta;
}
/*Jeito antigo
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

}*/

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection)
		return 'Empate';
	const opcoes = {'pedra':'tesoura' , 'tesoura' : 'papel' , 'papel' : 'pedra'};
	if (computerSelection === opcoes[playerSelection]) {
		return 'Você ganhou!';
	} else {return 'Você perdeu!'};
}
function game() {

	const computerSelection = computerPlay();

	jogador.innerHTML = `Você escolheu ${playerSelection}, a máquina escolheu ${computerSelection}.`;

	if (playRound(playerSelection, computerSelection) == 'Você ganhou!') {
		vitoria++;
	} else	if (playRound(playerSelection, computerSelection) == 'Você perdeu!') {
		derrota++;
	} else if (playRound(playerSelection, computerSelection) == 'Empate') {
		empate++;
	};

	pontuacaoJogador.innerHTML = vitoria;
	console.log(`Empate(s): ${empate}`);
	pontuacaoMaquina.innerHTML = derrota;

	if (vitoria == 5) {
		botaoReiniciar('Parabéns! Você ganhou 5 vezes!');
	} else if (derrota == 5) {
		botaoReiniciar('Que pena! Você perdeu 5 vezes!');
	}
}

let reiniciar = document.getElementById('reiniciar');
// let ganhar = document.getElementById('ganhar');
let vitoria = 0, derrota = 0, empate = 0;
let resultado = document.getElementById('resultado');
let maquina = document.getElementById('maquina');
let jogador = document.getElementById('jogador');
let playerSelection;
let pontuacaoJogador = document.getElementById('pontuacao-jogador');
let pontuacaoMaquina = document.getElementById('pontuacao-maquina');

document.getElementById('pedra').addEventListener("click", function() {playerSelection = 'pedra'; game()});

document.getElementById('papel').addEventListener("click", function() {playerSelection = 'papel'; game()});

document.getElementById('tesoura').addEventListener("click",function() {playerSelection = 'tesoura'; game()});

let recarregar = document.getElementById('recarregar');
recarregar.addEventListener("click", function() {location.reload()});




