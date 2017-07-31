'use strict';

const _         = require('lodash');
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
        let interfaceActions = ['newGame', 'eventChoice', 'doneEvent'];
        for (let action of interfaceActions) {
            Actions.on(Actions.interface[action], this[action].bind(this));
        }
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
        Actions.emit(Actions.game.statUpdate, this.stats);

        this.events = [];
        this.currentEvent = null;

        this.loadEvents();
        this.process();
    }

    process() {
        if (!this.gameStarted || this.eventsThisTurn >= this.eventsPerTurn) {
            if (this.gameStarted) {
                Actions.emit(Actions.game.endTurn, this.turn);
            } else {
                this.gameStarted = true;
            }

            this.turn++;
            this.eventsThisTurn = 0;
        }

        if (this.turn > this.totalTurns) {
            let result = this.getGameResult();
            Actions.emit(Actions.game.endGame, result);
            return;
        } else if (this.eventsThisTurn === 0) {
            Actions.emit(Actions.game.beginTurn, this.turn, this.totalTurns);
        }

        this.eventsThisTurn++;
        this.currentEvent = this.getNewEvent();
        Actions.emit(Actions.game.beginEvent, this.currentEvent);
    }

    doneEvent() {
        this.process();
    }

    eventChoice(choiceIndex) {
        let choice = this.currentEvent.choices[choiceIndex];

        // send stat effects event if needed
        _.each(['gold', 'army', 'like'], (stat) => {
            if (choice.effects[stat] !== undefined) {
                this.stats[stat] += choice.effects[stat];
                if (this.stats[stat] < 0) {
                    this.stats[stat] = 0;
                }
            }
        });
        Actions.emit(Actions.game.statUpdate, this.stats);

        // send event response event
        Actions.emit(Actions.game.respondEvent, choice.response);
    }

    getNewEvent() {
        // choose an event according to the current game state
        // for now just random, eventually events appear based
        // on stats, previous events, etc.
        let event = _.sample(this.events);
        return event;
    }

    getGameResult() {
        // based on the current game state, determine
        // whether the player won or lost
        // and the description of how they fared
        return {
            win: true,
            title: 'Your Heir Escapes!',
            text: 'You however, are not so lucky. Realizing you were under close scrutiny, you arranged to have the boy dress as a pauper and be hauled out by a few loyal guards who pretended he was a prisoner. In a way, he was. You sit on your throne, sipping wine from a golden goblet, and reminiscing over the unbelievable exploits you\'ve experienced in your long and storied life as king. As the door to the chamber opens, you know who it will be. A smile crosses your lips, you drop the goblet, and stand to meet your fate...',
        };
    }

    /**
     * Load all events into memory
     */
    loadEvents() {
        let req = require.context('./events/', false, /\.js$/);
        req.keys().forEach((file) => {
            let {event} = req(file);
            this.events.push(event);
        });
    }
}

module.exports = {
    Game: new Game()
};
