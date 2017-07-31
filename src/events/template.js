'use strict';

const {Game} = require('../game');

let event = {
    name: 'template',
    type: 'template',
    image: 'erasmus',
    text: 'Intro text here',
    choices: [{
        text: 'Choice 1',
        effects: {
            gold: -Game.var.amount.gold.small,
            army: -Game.var.amount.army.medium,
            like: -Game.var.amount.like.large
        },
        response: "Choice 1 response"
    }, {
        text: 'Choice 2',
        effects: {
            gold: Game.var.amount.gold.small,
            army: Game.var.amount.army.medium,
            like: Game.var.amount.like.large
        },
        response: 'Choice 2 response'
    }]
};

module.exports = {
    event
};
