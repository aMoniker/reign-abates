'use strict';

const {Game} = require('../game');

let event = {
    name: 'money-high',
    type: 'moneyhigh',
    image: 'machiavelli',
    text: 'Sire, our gold reserves overflow the vault. We cannot keep this much, but we can use it for other purposes. We could hire mercenaries, or distribute it to the population. What shall we do?',
    choices: [{
        text: 'Hire mercenaries',
        effects: {
            gold: -Game.var.amount.gold.large * 3,
            army: +Game.var.amount.army.large,
        },
        response: "You hire a number of professional soldiers from a band of mercenaries. They may not be loyal, but they will fight..."
    }, {
        text: 'Distribute money to the populace',
        effects: {
            gold: -Game.var.amount.gold.large * 3,
            like: +Game.var.amount.like.large
        },
        response: 'You send carriages through the streets, distributing gold to the commoners in the name of the king. They leap at the coins and rejoice with smiles and laughter. Some openly weep with joy at their good fortune. There is much drunkenness that night, and everyone is heard praising the good king.'
    }]
};

module.exports = {
    event
};
