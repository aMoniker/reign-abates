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

        this.hookInterfaceActions();
    }

    hookInterfaceActions() {
        Actions.on(Actions.interface.newGame, this.newGame);
        Actions.on(Actions.interface.doneIntro, this.process);
        Actions.on(Actions.interface.eventChoice, this.processEventChoice);
        Actions.on(Actions.interface.doneEvent, this.process);
    }

    newGame() {
        this.initialize();
    }

    initialize() {
        this.turn = 0;
        this.totalTurns = 30;
        this.eventsPerTurn = 3;
        this.eventsThisTurn = 0;
        this.gameStarted = false;

        this.stats = {
            gold: 50,
            army: 50,
            like: 50,
        };

        this.currentEvent = null;
    }

    process() {
        if (!this.gameStarted || this.eventsThisTurn === this.eventsPerTurn) {
            if (this.gameStarted) {
                Actions.emit(Actions.game.endTurn(this.turn));
            } else {
                this.gameStarted = true;
            }
            this.turn++;
            this.eventsThisTurn = 0;
        }

        if (this.turn === this.totalTurns) {
            Actions.emit(Actions.game.endGame, result);
        } else if (this.eventsThisTurn === 0) {
            Actions.emit(Actions.type.beginTurn, turn);
        }

        this.eventsThisTurn++;
        this.currentEvent = this.getNewEvent();
        Actions.emit(Actions.game.beginEvent, this.currentEvent);
    }

    processEventChoice(choice) {
        // send stat effects event if needed
        // send event response event
        // wait for doneEvent
    }

    getNewEvent() {
        // choose an event according to the current game state
        // for now just random, eventually events appear based
        // on stats, previous events, etc.
        // return event;
    }

    getGameResult() {
        // based on the current game state, determine
        // whether the player won or lost
        // and the description of how they fared
    }
}

module.exports = {
    Game: new Game()
};
