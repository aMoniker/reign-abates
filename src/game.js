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
        this.totalTurns = 4;
        this.eventsPerTurn = 4;
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
            return this.gameOver();
        } else if (this.eventsThisTurn === 0) {
            Actions.emit(Actions.game.beginTurn, this.turn, this.totalTurns);
        }

        this.eventsThisTurn++;
        this.currentEvent = this.getNewEvent();
        if (this.currentEvent) {
            Actions.emit(Actions.game.beginEvent, this.currentEvent);
        }
    }

    doneEvent() {
        this.process();
    }

    eventChoice(choiceIndex) {
        let choice = this.currentEvent.choices[choiceIndex];

        // send stat effects event if needed
        if (choice.effects !== undefined) {
            _.each(['gold', 'army', 'like'], (stat) => {
                if (choice.effects[stat] !== undefined) {
                    this.stats[stat] += choice.effects[stat];
                    if (this.stats[stat] < 0) {
                        this.stats[stat] = 0;
                    } else if (this.stats[stat] > 100) {
                        this.stats[stat] = 100;
                    }
                }
            });
        }
        Actions.emit(Actions.game.statUpdate, this.stats);

        // send event response event
        Actions.emit(Actions.game.respondEvent, choice.response);
    }

    // choose the next event according to the current game state
    getNewEvent() {
        let event = undefined;

        if (this.turn === 1 && this.eventsThisTurn === 1) { // first turn intro
            event = this.pluckEvent(this.events.intro);
        } else if (this.isMoneyLow()) { // send the banker
            event = this.pluckEvent(this.events.moneylow, false);
        } else if (this.isMoneyHigh()) { // spend on troops/approval
            event = this.pluckEvent(this.events.moneyhigh, false);
        } else if (this.isArmyLow()) { // get more troops
            event = this.pluckEvent(this.events.armylow, false);
        } else if (this.isArmyHigh()){ // send the troops on missions
            event = this.pluckEvent(this.events.armyhigh, false);
        } else if (this.isLikeLow()) { // garner support
            event = this.pluckEvent(this.events.likelow, false);
        } else if (this.isLikeHigh()) { // use approval for money/soldiers
            event = this.pluckEvent(this.events.likehigh, false);
        } else { // otherwise return a random event
            event = this.pluckEvent(this.events.random);
        }

        // if we somehow run out of events, show the final event
        if (!event) {
            event = this.pluckEvent(this.events.final);
        }

        // if there are no more events, it's game over
        if (!event) {
            return this.gameOver();
        }

        return event;
    }

    // return a random element from the given event array
    // and optionally remove it for the rest of the game
    pluckEvent(eventArray, remove = true) {
        let index = _.random(0, eventArray.length - 1);
        return (remove ? _.pullAt(eventArray, index)[0] : eventArray[index]);
    }

    isMoneyLow() {
        return (this.stats.gold <= 5);
    }

    isMoneyHigh() {
        return (this.stats.gold >= 100);
    }

    isArmyLow() {
        return (this.stats.army <= 10);
    }

    isArmyHigh() {
        return (this.stats.army >= 100);
    }

    isLikeLow() {
        return (this.stats.like <= 0);
    }

    isLikeHigh() {
        return (this.stats.like >= 100);
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

    gameOver() {
        let result = this.getGameResult();
        Actions.emit(Actions.game.endGame, result);
    }

    /**
     * Load all events into memory
     */
    loadEvents() {
        let req = require.context('./events/', false, /\.js$/);
        req.keys().forEach((file) => {
            let {event} = req(file);
            if (this.events[event.type] === undefined) {
                this.events[event.type] = [];
            }
            this.events[event.type].push(event);
        });
    }
}

module.exports = {
    Game: new Game()
};
