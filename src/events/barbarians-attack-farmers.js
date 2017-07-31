'use strict';

const {Game} = require('../game');

let event = {
    name: 'barbarians-attack-farmers',
    type: 'random',
    image: 'erasmus',
    text: 'Your majesty, I have grave news I must impart. There is a legion of barbarians on the outskirts of the city, harassing the local farmers. They will slaughter them if we do not send them gold.',
    choices: [{
        text: 'Send them a bribe of gold',
        effects: {
            gold: -Game.var.amount.gold.medium,
            like: Game.var.amount.like.medium
        },
        response: 'Yes your majesty, I will have the gold sent.'
    }, {
        text: 'Send them a bribe of peasant girls',
        effects: {
            gold: Game.var.amount.gold.small,
            like: -Game.var.amount.like.large
        }
    }, {
        text: 'Send your best legion to attack',
        effects: {
            gold: Game.var.amount.gold.small,
            army: -Game.var.amount.army.large,
        }
    }, {
        text: 'Send your worst legion to attack',
        effects: {
            army: Game.var.amount.army.small,
        }
    }, {
        text: 'Send weapons to the farmers',
        effects: {
            like: -Game.var.amount.like.medium,
        }
    }, {
        text: 'Do nothing',
        effects: {
            like: -Game.var.amount.like.large
        }
    }],
};

module.exports = {
    event
};
