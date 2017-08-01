'use strict';

const {Game} = require('../game');

let event = {
    name: 'angry-merchant',
    type: 'random',
    image: 'angry-man-1',
    text: "A man barges into your throne room and with only the most cursory of bows, proceeds to rant and rave about a problem one of your soldiers has caused. Nearly frothing at the mouth, the merchant explains that one of your soldiers from among the lower ranks openly steals from the merchants stalls in front of his customers. This, he explains, has damaged his reputation and encouraged all manner of thieves to follow the soldier's example. He requests, nay, demands that you do something about this.",
    choices: [{
        text: 'Punish the unruly soldier',
        effects: {
            army: -Game.var.amount.army.small,
            like: +Game.var.amount.like.medium,
        },
        response: "Frowning, you ask the merchant to identify the soldier, and he is brought before you. Visibly sweating, the soldier grovels before you most pitifully. Disgusted, you dismiss him from his post and have him locked in the dungeon for a month. The merchant is pleased, and so is the citizenry, realizing that you put the good of the people above even your own soldiers."
    }, {
        text: 'Agree to help for a price',
        effects: {
            army: -Game.var.amount.army.small,
            gold: +Game.var.amount.gold.small,
        },
        response: "Seeing an opportunity to take advantage of a man with resources, you tell the merchant you'll help him if he pays you a small sum of gold to make up for the loss of one of your soldiers. He looks disgusted, but agrees to your offer. The soldier is removed and arrested."
    }, {
        text: "Punish the merchant",
        effects: {
            like: -Game.var.amount.like.small
        },
        response: "The disrespectful cur ought to learn how to address a king! To the merchant's horror, you order your guard to throw him in a cell for a few days. His eyes take on a dark and piercing gleam, and you know you've made an enemy for life."
    }]
};

module.exports = {
    event
};
