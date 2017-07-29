'use strict';

const {Actions} = require('./actions');

const amount = {
    gold: {
        small: 1,
        medium: 3,
        large: 5,
    },
    army: {
        small: 2,
        medium: 5,
        large: 10,
    },
    like: {
        small: 5,
        medium: 10,
        large: 15,
    }
};

class Game {
    constructor() {
        this.var = {
            amount: amount,
        };
    }

    newGame() {
        this.initialize();
    }

    initialize() {
        this.turn = 0;
        this.stats = {
            gold: 50,
            army: 50,
            like: 50,
        }
    }

    processTurn() {
        this.turn++;
        Actions.emit(Actions.type.beginTurn, this.turn);
    }
}

module.exports = {
    Game: new Game()
};
