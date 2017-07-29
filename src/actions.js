// handles events for the game
// any class that needs events should require this

const EventEmitter = require('events');
console.log('emitter?', EventEmitter);

const type = {
    beginTurn: 1,
}

class Actions extends EventEmitter {
    constructor() {
        super();
        this.type = type;
    }
}

module.exports = {
    Actions: new Actions
};
