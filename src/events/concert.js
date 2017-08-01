'use strict';

const {Game} = require('../game');

let event = {
    name: 'concert',
    type: 'random',
    image: 'man-2',
    text: "A well-dressed man with wild hair and intensely bright eyes gains an audience. With deference and awe, he explains that he has composed a profound and stirring piece of music. He requests that you give him a small amount of gold so that he may arrange a public concert. You consider his request, knowing that the citizenry would probably appreciate it.",
    choices: [{
        text: "Pay for the concert",
        effects: {
            gold: -Game.var.amount.gold.small,
            like: +Game.var.amount.like.medium,
        },
        response: "You know it will be a cheap way to keep the people happy, so you comply with the man's request. Surprisingly, he wasn't kidding when he said the music was profound. It speaks directly to your heart, and brings a tear to your eye as you are swept away in a vision of your now far-away youth, spent in the sunny fields and mountains of your kingdom's countryside. The raucous cheers from the crowd after the performance break your reverie, and you notice quite a few looking approvingly in your direction."
    }, {
        text: "No funds for this",
        response: "While you appreciate good music, you simply do not have the funds to spare for a frivilous expense. You send the musician on his way, but he does not seem too disappointed."
    }]
};

module.exports = {
    event
};
