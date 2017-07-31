'use strict';

const {Game} = require('../game');

let event = {
    name: 'strange-invention',
    type: 'random',
    image: 'beard-man-1',
    text: 'An odd and excited man is granted an audience. He approaches the throne with an intense look of wonder, and there is a kind of strange fire in his eyes whose origin you cannot quite discern. He approaches and speaks: "Your Majesty! I come from the far north, from a distant kingdom. They do not appreciate my genius there, but I have heard that you are far more refined. I come to offer you an invention that will bestow upon you great power..." He goes on to describe a contraption for harnessing aetheric energy whose mechanics you can\'t quite grasp. However, the uses he describes for it are truly fantastic. "I would be glad to sell you this machine, for enough money so that I may continue my research." He\'s asking for a lot. Will you buy it?',
    choices: [{
        text: 'Buy the stange machine',
        effects: {
            gold: -Game.var.amount.gold.large,
            like: +Game.var.amount.like.medium
        },
        response: "While it isn't entirely useless, your best astronomers can't seem to find much use for it beyond parlour tricks. You give it to the court magician who exhibits it to a bewildered public. They don't know what to make of it either, but they seem to enjoy the spectacle, and leave whispering that the king surely has great powers..."
    }, {
        text: 'Lock the charlatan in the dungeon',
        effects: {
            like: -Game.var.amount.like.small
        },
        response: 'Word gets around of your cruelty. Several members of your staff seem more cautious and distant around you.'
    },  {
        text: 'Send the man away',
        response: "You have no time for the silly inventions of madmen. There are great doings afoot, and you must focus on keeping alive your dynasty."
    }, {
        text: "Offer him a royal appointment",
        effects: {
            army: +Game.var.amount.army.small,
            gold: -Game.var.amount.gold.medium,
        },
        response: "He accepts your offer on the condition of being given enough money to continue his research. With his machine expertise, he's able to improve a few things about your military's weapons.",
    }]
};

module.exports = {
    event
};
