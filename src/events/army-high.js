'use strict';

const {Game} = require('../game');

let event = {
    name: 'army-high',
    type: 'armyhigh',
    image: 'machiavelli',
    text: "Sire, we have many restless soldiers. We should give them something to do before they start getting ideas. I've been receiving reports that the Archduke has been actively recruiting some of the more discontent among them. We could send them on a patrol to attack the highwaymen that have been plaguing our outer roads, or we could have them roam the city, rounding up criminals. What shall it be?",
    choices: [{
        text: 'Send them on patrol',
        effects: {
            gold: +Game.var.amount.gold.large * 3,
            army: -Game.var.amount.army.large * 2,
        },
        response: "The soldiers gladly obey and set out to deter, capture, and slay the robbers of your kingdom's countryside. As they root out the menace, most of the gold they capture is returned to your coffers."
    }, {
        text: 'Have them police the city',
        effects: {
            army: -Game.var.amount.army.large * 2,
            like: +Game.var.amount.like.large
        },
        response: 'You send your troops through the streets of the city to round up and remove the criminal menaces that have been preying on the populace. The commoners, no longer extorted by local gangs, are very grateful.'
    }]
};

module.exports = {
    event
};
