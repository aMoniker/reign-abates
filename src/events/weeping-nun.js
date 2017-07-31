'use strict';

const {Game} = require('../game');

let event = {
    name: 'weeping-nun',
    type: 'random',
    image: 'crying-nun',
    text: "A weeping nun barges into the throne room and kneels before you. You recognize her as the assistant to the mother superior at the abbey outside the city. She explains that some local scoundrels have been harassing and assaulting the sisters, causing much distress. She begs you to solve the problem. Even though she is upset, you still see a pleading mercy in her eyes.",
    choices: [{
        text: 'Slaughter the bastards',
        effects: {
            like: -Game.var.amount.like.small
        },
        response: "A small number of troops makes short work of the miscreants. The nuns are horrified at the bloodshed, and hold a vigil for the criminals. Perplexing."
    }, {
        text: 'Pay off the ruffians',
        effects: {
            gold: -Game.var.amount.gold.small,
            like: +Game.var.amount.like.small,
        },
        response: 'While you detest bargaining with criminals, you realize that the nuns will not put up with bloodshed. You have some gold sent to them on the condition that they do not return. They greedily accept.'
    }, {
        text: 'Drive them away without bloodshed',
        effects: {
            like: +Game.var.amount.like.small,
            army: -Game.var.amount.army.small,
        },
        response: 'The sisters appreciate that your troops removed the louts without killing them, but your troops do not agree. Fed up with what they see as your weakness, a few desert, and malcontent spreads among the rest.'
    }, {
        text: 'Send the nun away',
        effects: {
            like: -Game.var.amount.like.large,
            army: -Game.var.amount.army.small,
        },
        response: "You don't have time to attend to the needs of these religious nuts. If their God is so merciful, why doesn't he help them? You callously send the sister away while silent tears fall from her despondent eyes. The wretches keep harassing the nuns, and your reputation among the populace and your own troops suffers for your cruelty."
    }]
};

module.exports = {
    event
};
