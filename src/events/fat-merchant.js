'use strict';

const {Game} = require('../game');

let event = {
    name: 'fat-merchant',
    type: 'random',
    image: 'fat-man-1',
    text: "A well dressed and quite rotund man saunters into your chamber, giving an overly dramatic bow that ends with a smarmy flourish, bordering on outright disrespect. You frown as the man explains that he is the world's finest purveyor of arms, which he would gladly sell to your army. He demonstrates some of the weapons, which do seem of quite high quality. They're expensive, but they would give your army an edge...",
    choices: [{
        text: 'Buy arms for all your troops',
        effects: {
            gold: -Game.var.amount.gold.large * 2,
            army: +Game.var.amount.army.large,
            like: -Game.var.amount.like.small
        },
        response: "The merchant's eyes grow wide when you explain how many weapons you'd like to buy. He wipes his mouth and smacks his lips as he promises to have them delivered immediately. It costs a small fortune, but your soldiers seem impressed with their new hardware. Later, you notice the commoners acting more nervous than usual around your guards."
    }, {
        text: 'Buy arms for your elite troops',
        effects: {
            gold: -Game.var.amount.gold.large,
            army: +Game.var.amount.army.medium,
        },
        response: "Equipping your entire army would be prohibitively expensive, so you buy enough to distribute to only your best soldiers and royal guard. The rest of your troops are a little jealous, but it also gives them incentive to climb the ranks. The merchant waddles away with a heavy sack of gold and a satisfied grin."
    }, {
        text: 'Send the merchant away',
        effects: {
            army: -Game.var.amount.army.small,
        },
        response: "The smile immediately drops from the merchant's fat mug, and he strides out with a look of frustration. Some of your troops, having seen the weapons on offer, are disappointed that they didn't get any."
    }, {
        text: 'Lock the bastard up',
        effects: {
            like: -Game.var.amount.like.large
        },
        response: "You don't take kindly to merchants who don't show proper respect and deference to the king. The man's eyes show great fear and his stammering mouth is agape in horror as he is dragged away, pleading. Word of your actions gets around, and you find it much harder to find trading partners for some reason..."
    }]
};

module.exports = {
    event
};
