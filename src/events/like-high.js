'use strict';

const {Game} = require('../game');

let event = {
    name: 'like-high',
    type: 'likehigh',
    image: 'machiavelli',
    text: "Sire, our populace is giddy with delight at the way you've been ruling. Most would lay down their lives for you. We should take advantage of this. We could raise taxes, which they would gladly pay, or we could recruit more soldiers from their ranks.",
    choices: [{
        text: 'Collect taxes',
        effects: {
            gold: +Game.var.amount.gold.large * 3,
            like: -Game.var.amount.like.large * 2,
        },
        response: "You send around the tax collectors to gather additional money from the peasants. Suddenly they don't seem to like you as much..."
    }, {
        text: 'Recruit soldiers',
        effects: {
            army: +Game.var.amount.army.large,
            like: -Game.var.amount.like.large,
        },
        response: "You recruit a number of young men and boys from the populace, who enter the ranks of your army willingly. Their parents and friends however, are not so happy."
    }]
};

module.exports = {
    event
};
