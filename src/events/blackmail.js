'use strict';

const {Game} = require('../game');

let event = {
    name: 'blackmail',
    type: 'random',
    image: 'regal-woman-1',
    text: "A noblewoman from a house you recognize approaches the throne and executes a perfect curtsey. In her eyes though, there is menace. She explains that she knows the situation between you and the Archduke, and will tell the Archduke what you're planning unless you pay her off with a large sum of gold. The impudence of this woman! To blackmail a KING! Containing your anger, you consider your options. Before you speak, she tells you quite plainly that any attempt on your part to punish or silence her will not work, as the Archduke will still be informed by her family. She smiles a little too graciously and wiggles her head at you.",
    choices: [{
        text: "Pay the traitor",
        effects: {
            gold: -Game.var.amount.gold.large
        },
        response: "Realizing you have no choice, you arrange the gold to be sent to her. This you will not forget, and you vow your revenge upon her house even if it takes generations."
    }, {
        text: "Imprison her",
        effects: {
            like: -Game.var.amount.like.small,
            callback: function() {
                Game.bonusScore -= 0.1;
            }
        },
        response: "You'll be damned if some noble bosses you around! The guards haul her off as she shrieks with laughter. You know you won't be able to keep her long, and you're fairly certain she wasn't kidding about having the Archduke informed no matter what. Your chances of escape may now be in danger."
    }, {
        text: "Kill her",
        effects: {
            like: -Game.var.amount.like.medium,
            callback: function() {
                Game.bonusScore -= 0.2;
            }
        },
        response: "She barely contains her murderous rage as you sentence her to death. This was not the outcome she was expecting. Perhaps she deserves it, but you are almost certain she isn't lying about informing the Archduke. Your chances of escape may not be in great danger."
    }]
};

module.exports = {
    event
};
