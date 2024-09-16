const container = document.querySelector('.game');
const scoreBoard = maker(container, 'div', 'scoreBoard', 'SCORE');
const gameBoard = maker(container, 'div', 'gameBoard', 'GAMEBOARD');
const message = maker(container, 'div', 'message', 'MESSAGE');
const items = ["&#8509;", "&#9730;", "&#9731;", "&#9728;", "&#9732;"]