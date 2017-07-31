'use strict';

const {Game} = require('../game');

let event = {
    name: 'foreign-general',
    type: 'random',
    image: 'beard-man-7',
    text: "Your chamberlain introduces a foreign general. He explains that he and what remains of his troops fled from a neighboring kingdom into your land, and seeks a place to rest and recover. He offers some of his troops and a small amount of gold. Judging by his appearance though, it seems he might have a lot more...",
    choices: [{
        text: 'Accept his offer',
        effects: {
            gold: +Game.var.amount.gold.medium,
            like: -Game.var.amount.like.small,
        },
        response: "The general bows graciously and signals for a small chest of gold to be delivered at your feet. He camps outside of town while his troops recover. The population seems a bit uneasy with a foreign army outside the city."
    }, {
        text: 'Demand more gold',
        effects: {
            gold: +Game.var.amount.gold.large,
            like: -Game.var.amount.like.medium
        },
        response: 'The general has no choice but to grudgingly accept your offer. He camps outside of town, but looks the other way when his soldiers decide to stir up trouble with the locals.'
    }, {
        text: 'Kill him and his small army',
        effects: {
            gold: +Game.var.amount.gold.large * 3,
            army: -Game.var.amount.army.medium,
            like: -Game.var.amount.like.medium,
        },
        response: 'The general betrays no hint of shock as he draws his sword and orders his troops to defend themselves. Your overwhelming army make short work of the remnants of his, and you discover that he was hoarding quite a lot of gold. Some of your citizens are outraged at the bloodshed, and many of them fear for their own lives.'
    }]
};

module.exports = {
    event
};
