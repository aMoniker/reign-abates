'use strict';

const {Actions} = require('./actions');

class Interface {
    constructor() {
        this.hookGameActions();
    }

    initialize() {
        // destroy everything
        // create brand new DOM structure
        // display splash screen
    }

    begin() {
        // show the intro text
        // show the Done button
    }

    beginTurn() {
        // show turn intro
    }

    endTurn() {
        // show turn outro
    }

    beginEvent(event) {
        // display the event and its choices
    }

    respondEvent(response) {
        // show the response to the event choice and a Done button
    }

    endEvent(event) {
        // show the event outro
    }

    endGame(result) {
        // display the final result and a Play Again button
    }

    statUpdate(stats) {
        // update the display of the player's current stats
    }

    hookGameActions() {
        Actions.on(Actions.game.reset, this.initialize);
        Actions.on(Actions.game.begin, this.begin);
        Actions.on(Actions.game.beginTurn, this.beginTurn);
        Actions.on(Actions.game.endTurn, this.endTurn);
        Actions.on(Actions.game.beginEvent, this.beginEvent);
        Actions.on(Actions.game.respondEvent, this.respondEvent);
        Actions.on(Actions.game.endEvent, this.endEvent);
        Actions.on(Actions.game.endGame, this.endGame);
        Actions.on(Actions.game.statUpdate, this.statUpdate);
    }
}

module.exports = {
    Interface: new Interface
};
