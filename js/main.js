const stonesCounter = Math.floor(Math.random() * 21);
let checkeds = 0;

let playerOne = {
	'name': 'Player One',
	'backgound': 'white',
	''
}

let playerTwo = {
	'name': 'Player Two',
	'backgounrd': 'white'
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

function changeStoneStatus(checkeds) {
	const stones = document.querySelectorAll('.stone');
	for (let stone of stones) {
		stone.addEventListener('click', function(e) {
			if (e.target.tagName === "IMG") {
				if (e.target.getAttribute('src') === 'img/stch.png') {
					e.target.setAttribute('src', 'img/st.png');
					checkeds--;
				} else {
					if (checkeds != 3) {
						e.target.setAttribute('src', 'img/stch.png');
						checkeds++;
					}
				}
			} else {
				if (e.target.firstChild.getAttribute('src') === 'img/stch.png') {
					e.target.firstChild.setAttribute('src', 'img/st.png');
					checkeds--;
				} else {
					if (checkeds != 3) {
						e.target.firstChild.setAttribute('src', 'img/stch.png');
						checkeds++;
					}
				}
			}
		});
	}
}

generateStones(stonesCounter);
changeStoneStatus(checkeds);
