'use strict';

const {Game} = require('../game');

let event = {
    name: 'like-low',
    type: 'likelow',
    image: 'machiavelli',
    text: "Sire, our populace on the verge of open revolt. They have many grievances, and we shall certainly not make it out alive if they siege the castle. We could simply shower them with gold, or we could send soldiers to root out the criminal gangs that plague the city.",
    choices: [{
        text: 'Distribute gold',
        effects: {
            gold: -Game.var.amount.gold.large * 2,
            like: +Game.var.amount.like.large
        },
        response: "You send carriages through the streets, distributing gold to the commoners in the name of the king. They leap at the coins and rejoice with smiles and laughter. Some openly weep with joy at their good fortune. There is much drunkenness that night, and everyone is heard praising the good king."
    }, {
        text: 'Round up the criminals',
        effects: {
            army: -Game.var.amount.army.large * 2,
            like: +Game.var.amount.like.large
        },
        response: "You send your troops through the streets of the city to round up and remove the criminal menaces that have been preying on the populace. The commoners, no longer extorted by local gangs, are very grateful."
    }]
};

module.exports = {
    event
};
