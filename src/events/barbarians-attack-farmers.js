'use strict';

const {Game} = require('../game');

let event = {
    name: 'barbarians-attack-farmers',
    type: 'random',
    image: 'machiavelli',
    text: 'Your majesty, I have grave news I must impart. There is a legion of barbarians on the outskirts of the city, harassing the local farmers. They will slaughter them if we do not send them gold.',
    choices: [{
        text: 'Send them gold',
        effects: {
            gold: -Game.var.amount.gold.medium,
            like: Game.var.amount.like.medium
        },
        response: "The barbarians courteously take your money and leave. The farmers are greatly relieved and encouraged that you would consider their lives to be worth so much gold."
    }, {
        text: 'Send them some peasant girls',
        effects: {
            gold: Game.var.amount.gold.small,
            like: -Game.var.amount.like.large
        },
        response: 'Most of the girls are unwilling, but your soldiers see to it that they go. The barbarian chieftan is perplexed at first, but smiles broadly when he understands your offer. They leave with the frightened, pleading girls in tow.'
    }, {
        text: 'Attack with your best legion',
        effects: {
            gold: Game.var.amount.gold.small,
            army: -Game.var.amount.army.small,
        },
        response: 'Your finest soldiers make short work of the barbarians, slaughtering dozens before the rest cut their losses and retreat. Some of your soldiers have been gravely wounded, however. At least the fiends dropped some of their ill-gotten gold as they fled.'
    }, {
        text: 'Attack with your worst legion',
        effects: {
            army: Game.var.amount.army.medium,
        },
        response: "Even your worst soldiers don't have much trouble chasing off the scoundrels. A score of men on each side are killed, and the barbarians begrudgingly retreat."
    }, {
        text: 'Give the farmers weapons',
        effects: {
            gold: -Game.var.amount.gold.small,
            like: -Game.var.amount.like.medium,
        },
        response: "The bewildered farmers don't understand at first, but a look of incredulity appears on their faces as the situation becomes clear to them. Reluctantly they pick up the weapons, unsure of how to wield them. Not wanting to engage the invaders head-on, they wait in ambush until nightfall, when the barbarians start setting houses on fire and kicking down doors. Surprisingly, the farmers kill quite a few, but suffer many losses themselves. The barbarians take what meager treasure they find, and ride off to the next village."
    }, {
        text: 'Do nothing',
        effects: {
            gold: -Game.var.amount.gold.small,
            like: -Game.var.amount.like.large,
        },
        response: "Rumor gets around that you don't intend to give the raiders a response. Offended, they slaughter dozens of innocent farmers, and confiscate everything of value they find before riding off."
    }],
};

module.exports = {
    event
};
