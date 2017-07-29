const EventEmitter = require('events');

const gameActions = {
    reset        : 'game.reset',        // completely reset game
    begin        : 'game.begin',        // begin a new game
    beginTurn    : 'game.beginTurn',    // begin a new turn N
    endTurn      : 'game.endTurn',      // end the current turn N
    beginEvent   : 'game.beginEvent',   // load a new event for player to handle
    respondEvent : 'game.respondEvent', // send a response to the player choice
    endEvent     : 'game.endEvent',     // end the current event
    endGame      : 'game.endGame',      // game over, send final score data
    statUpdate   : 'game.statUpdate',   // update the current player stats
};

const interfaceActions = {
    newGame     : 'interface.newGame',     // press New Game or Play Again
    doneIntro   : 'interface.doneIntro',   // press Done on intro sequence
    eventChoice : 'interface.eventChoice', // make event choice
    doneEvent   : 'interface.doneEvent',   // press Done on event response
};

class Actions extends EventEmitter {
    constructor() {
        super();
        this.game = gameActions;
        this.interface = interfaceActions;
    }
}

module.exports = {
    Actions: new Actions
};
