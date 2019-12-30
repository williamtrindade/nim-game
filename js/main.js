let stonesCounter = Math.floor(Math.random() * 21);

let marked = 0;

let playerOne = {
	'name': 'Player One',
	'backgound': 'white',
}

let playerTwo = {
	'name': 'Player Two',
	'backgounrd': 'white',
}

let turn = playerOne;

function resetFront() {
	document.querySelector('#player-one-card').style.backgroundColor = 'white';
	document.querySelector('#player-two-card').style.backgroundColor = 'white';
	document.querySelector('#player-one-name').style.color = 'black';
	document.querySelector('#player-two-name').style.color = 'black';
}

function changeTurnFront() {
	if (turn === playerOne) {
		document.querySelector('#player-one-card').style.backgroundColor = 'green';
		document.querySelector('#player-two-card').style.backgroundColor = 'white';
		document.querySelector('#player-one-name').style.color = 'white';
		document.querySelector('#player-two-name').style.color = 'black';
	} else {
		document.querySelector('#player-two-card').style.backgroundColor = 'green';
		document.querySelector('#player-one-card').style.backgroundColor = 'white';
		document.querySelector('#player-two-name').style.color = 'white';
		document.querySelector('#player-one-name').style.color = 'black';
	}
}

function generateStones(stonesCounter) {
	const stonesTable = document.querySelector('#stones-table');
	for (let i = 0; i <= stonesCounter; i++) {
		stoneDiv = document.createElement('div');
		stoneImg = document.createElement('img');
		stoneDiv.setAttribute('class', 'stone');
		stoneDiv.style.float = 'left';
		stoneImg.setAttribute('src', 'img/st.png');
		stoneImg.setAttribute('width', '20%');
		stoneDiv.appendChild(stoneImg);
		stonesTable.appendChild(stoneDiv);
	}
}

function changeStoneStatus() {
	const stones = document.querySelectorAll('.stone');
	for (let stone of stones) {
		stone.addEventListener('click', function(e) {
			if (e.target.tagName === "IMG") {
				if (e.target.getAttribute('src') === 'img/stch.png') {
					e.target.setAttribute('src', 'img/st.png');
					marked--;
				} else {
					if (marked != 3) {
						e.target.setAttribute('src', 'img/stch.png');
						marked++;
					}
				}
			} else {
				if (e.target.firstChild.getAttribute('src') === 'img/stch.png') {
					e.target.firstChild.setAttribute('src', 'img/st.png');
					marked--;
				} else {
					if (marked != 3) {
						e.target.firstChild.setAttribute('src', 'img/stch.png');
						marked++;
					}
				}
			}
		});
	}
}

function resetGame() {
	marked = 0;
	turn = playerOne;
	resetFront();
	changeTurnFront();
	generateStones(Math.floor(Math.random() * 21));
	changeStoneStatus();
	play();
}

function play() {
	const playButton = document.querySelector('#play-button');
	playButton.addEventListener('click', () => {
		if (marked === 0 || marked > 3) {
			alert('Selecione pedras para jogar!');
		} else {
			let player = turn;
			const stones = document.querySelectorAll('.stone');
			for (let stone of stones) {
				if (stone.tagName === 'IMG') {
					if (stone.getAttribute('src') === 'img/stch') {
						stone.remove();
					}
				} else {
					if (stone.firstChild.getAttribute('src') === 'img/stch.png') {
						stone.remove();
					}
				}
			}
			marked = 0;
			const actualStones = document.querySelectorAll('.stone');
			if (actualStones.length === 0 ) {
				alert('O jogador ' + turn.name + ' ganhou o Jogo, pois retirou a última pedra!');
				resetGame();
			} else {
				turn = (turn === playerOne) ? playerTwo : playerOne;
				changeTurnFront();
			}
		}
	});
}

changeTurnFront();

generateStones(stonesCounter);

changeStoneStatus();

play();