'use strict';

const {Game} = require('../game');

let event = {
    name: 'poison-archduke',
    type: 'random',
    image: 'contempt-woman',
    text: "Late at night, your chamberlain hurriedly escorts in what appears to be a serving woman. She has an evil look about her, and after a token curtsey, explains in hushed tones that she works for the Archduke. She says has reason to despise him, but will not explain exactly why. From the look in her eyes, and your knowledge of the man, you believe she is telling the truth. She goes on to explain that his own troops could be sabotaged by poisoning the common meal they are all served. She would need supplies and a small bribe to carry out the mission.",
    choices: [{
        text: 'Give her supplies and gold',
        effects: {
            gold: -Game.var.amount.gold.medium,
            army: +Game.var.amount.army.small,
        },
        response: "She thanks you, and leaves the chamber with a fierce and determined look. Later, you hear of the misfortune suffered by many soldiers among the Archduke's private guard. This will make your own army stronger by comparison."
    }, {
        text: 'Send the woman away',
        response: "Poisoning is a low and dishonorable action that you refuse to take. As you send the woman away, the fire in her eyes dissipates, and a worried look appears. Who will she turn to now?"
    }]
};

module.exports = {
    event
};
