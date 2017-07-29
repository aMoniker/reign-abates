const _           = require('lodash');
const {Game}      = require('./game');
const {Interface} = require('./interface');
const {Actions}   = require('./actions');

Game.newGame();

// test
for (var i = 0; i < 10; i++) {
    Game.processTurn();
}
