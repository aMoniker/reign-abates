'use strict';

const _         = require('lodash');
const {Actions} = require('./actions');

const amount = {
    gold: {
        small: 5,
        medium: 10,
        large: 15,
    },
    army: {
        small: 5,
        medium: 10,
        large: 20,
    },
    like: {
        small: 5,
        medium: 10,
        large: 25,
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
        this.eventsPerTurn = 2;
        this.eventsThisTurn = 0;
        this.gameStarted = false;
        this.introShown = false;

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

        if (!this.introShown) { // first turn intro
            this.introShown = true;
            event = this.pluckEvent(this.events.intro);
            this.eventsThisTurn--; // intro doesn't count
        } else if (this.turn === this.totalTurns
                && this.eventsThisTurn === this.eventsPerTurn
        ) { // if this is the last event, show the final event
            event = this.pluckEvent(this.events.final);
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

    // based on the current game state, determine
    // whether the player won or lost
    // and the description of how they fared
    getGameResult() {
        let worstOutcome = {
            win: false,
            title: 'Your legacy ends.',
            text: "Unfortunately you did not have the resources necessary to escape, and on your way out of the city in disguise, you are spotted by one of the Archduke's spies. His soldiers capture you and your Heir, and haul you into his dungeon, where you are both left to rot while he rules your kingdom...",
        };

        let decentOutcome = {
            win: true,
            title: 'Your Heir Escapes!',
            text: 'You however, are not so lucky. Realizing you were under close scrutiny, you arranged to have the boy dress as a pauper and be hauled out by a few loyal guards who pretended he was a prisoner. In a way, he was. You sit on your throne, sipping wine from a golden goblet, and reminiscing over the unbelievable exploits you\'ve experienced in your long and storied life as king. As the door to the chamber opens, you know who it will be. A smile crosses your lips, you drop the goblet, and stand to meet your fate...',
        };

        let bestOutcome = {
            win: true,
            title: "You escape!",
            text: "Having wisely managed your resources, both you and your Heir are able to sneak out of the kingdom, dressed as commoners, in the dead of night. A core of loyal soldiers scouts ahead, while you bribe your way through foreign lands, to a friendly kingdom ruled by a distant cousin. Here you will plot your revenge, while your young son trains with fierce determination to raise the army he'll need to recapture his birthright. Onward!"
        };

        let escapeThreshold = 40;
        let average = (this.stats.gold + this.stats.army + this.stats.like) / 3;
        if (average < escapeThreshold) {
            return worstOutcome;
        } else {
            let bonusChance = ((average - escapeThreshold) / 100) * 5;
            let roll = Math.random();
            if (roll <= bonusChance) {
                return bestOutcome;
            } else {
                return decentOutcome;
            }
        }
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
