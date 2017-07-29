'use strict';

import './style.css';

const {Actions} = require('./actions');

class Interface {
    constructor() {
        this.assignHandlers();
    }

    assignHandlers() {
        console.log('assign handlers..');
        Actions.on(Actions.type.beginTurn, function(turnNum) {
            console.log('beginning turn ' + turnNum);
        });
    }
}

module.exports = {
    Interface: new Interface
};
