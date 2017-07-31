'use strict';

const {Game} = require('../game');

let event = {
    name: 'army-low',
    type: 'armylow',
    image: 'machiavelli',
    text: "Sire, we are running dangerously low on loyal soldiers. If we do not find more, it will be noticed, and there will be no holding off the usurpers. We can hire more from mercenary bands, or conscript the best men from the citizenry.",
    choices: [{
        text: 'Hire mercenaries',
        effects: {
            gold: -Game.var.amount.gold.large * 5,
            army: +Game.var.amount.army.large,
        },
        response: "You hire a number of professional soldiers from a band of mercenaries. They may not be loyal, but they will fight..."
    }, {
        text: 'Conscript citizens',
        effects: {
            army: +Game.var.amount.army.large * 2,
            like: -Game.var.amount.like.large * 2
        },
        response: 'You send out your remaining troops to forcibly conscript strong young men and boys from the populace. A few are glad of the opportunity, but most detest being taken against their will.'
    }]
};

module.exports = {
    event
};
