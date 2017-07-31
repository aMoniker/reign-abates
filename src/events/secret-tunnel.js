'use strict';

const {Game} = require('../game');

let event = {
    name: 'secret-tunnel',
    type: 'random',
    image: 'erasmus',
    text: "Your most senior scribe gets your attention and asks a moment of your time. He explains that while studying the ancient history of the castle, he discovered that there used to be a secret tunnel leading to the forest outside the city. The tunnel fell into disrepair, but he knows its location, and thinks that with some inexpensive supplies and a good number of soldiers working away, it can be reopened. This would significantly increase your chances of escape. He further explains that with even more resources, the tunnel could be rigged to collapse behind you, making it near impossible for anyone to capture you en route.",
    choices: [{
        text: 'Dig the tunnel',
        effects: {
            gold: -Game.var.amount.gold.small,
            army: -Game.var.amount.army.medium,
            callback: () => {
                Game.bonusScore += 0.1;
            }
        },
        response: "You have your scribe quietly procure the needed supplies and set your most trustworthy soldiers on the task. They find the ancient passage and make good progress on digging it out. They expect to be finished just in time for your escape."
    }, {
        text: 'Dig the tunnel, rig the collapse',
        effects: {
            gold: -Game.var.amount.gold.medium,
            army: -Game.var.amount.army.large,
            callback: () => {
                Game.bonusScore += 0.2;
            },
        },
        response: "It's exceedingly expensive, but who can put a price on your lineage? You procure a large number of supplies and set many of your most loyal soldiers to the task while your scribe oversees the engineering aspects. It's tough work, but they think it can be finished just in time for you to escape."
    }, {
        text: "We can't risk it",
        response: "You thank your scribe for calling this to your attention, but it's just not worth the risk. If the Archduke got word of this he would know something was wrong, and might accelerate his plans."
    }]
};

module.exports = {
    event
};
