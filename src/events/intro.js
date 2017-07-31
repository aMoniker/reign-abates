'use strict';

const {Game} = require('../game');

let event = {
    name: 'intro',
    type: 'intro',
    image: 'machiavelli',
    text: 'Your Majesty, we must act quickly. In order for your Heir to escape safely, we must have enough gold to bribe those who must be bribed en route, enough loyal soldiers to see us through, and enough approval of the citizenry so that our passage will not be obstructed.',
    choices: [{
        text: 'Let us begin.',
        response: "We have four weeks to prepare. You must continue to decide and delegate on anything that happens in the interim. Godspeed."
    }],
};

module.exports = {
    event
};
