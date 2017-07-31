'use strict';

const {Game} = require('../game');

let event = {
    name: 'sorceress',
    type: 'random',
    image: 'sorceress',
    text: "As you prepare for bed in your chamber, a soft and low voice from behind frightens you. \"Do not be alarmed, Your Majesty, for I come to aid you.\" Spinning around to look, and ready to shout for your guards, you see a tall, pale, and thin woman who has an otherworldly quality about her. She raises a hand and asks you to wait. Entranced, you listen. She explains that she belongs to a coven of powerful mages who practice in secret. She knows about the Archduke and his plans, somehow. Removing a small, luminescent blue stone from the folds of her robe, she promises to aid your escape in return for a select few of your family's ancient gemstones.",
    choices: [{
        text: 'Give her the gems',
        effects: {
            gold: -Game.var.amount.gold.large,
            army: +Game.var.amount.army.large,
        },
        response: "She gives you a mysterious smile and assures you that you've made a wise choice. With the stone in her closed fist, she tilts her head upward and her eyes roll back while she silently chants. With a shudder, she finishes the spell, and explains that your army will have a blessing of protection when they need it most. Before you can speak, she turns and leaps out of the nearest window. You rush to the sill, but see nothing but the black night."
    }, {
        text: 'Call for your guards',
        effects: {
            army: -Game.var.amount.army.small,
        },
        response: '"Fool!", she yells, and throws the stone to the ground. It shatters in a blinding flash of light, and when your vision recovers, she is gone. Your guards rushes in to your aid to find you bewildered, alone, and blinking. They seem concerned, and rumor spreads among the troops that the king who commands them is going insane.'
    }]
};

module.exports = {
    event
};
