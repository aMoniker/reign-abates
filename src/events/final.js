'use strict';

const {Game} = require('../game');

let event = {
    name: 'final',
    type: 'final',
    image: 'machiavelli',
    text: "The hour has arrived, Your Majesty. We have gathered what gold and loyal guards we can, and the populace has been placated as much as possible. We are now at the mercy of fate. It has been my great honor and privilege to have served you.",
    choices: [{
        text: 'May God help us all.',
        response: "Your chamberlain gives a grave bow and leaves your chamber to make the final preparations for escape. You sit comtemplative, thinking that you should be feeling nervous or anxious. Instead what you feel is a strange sort of giddy anticipation. There is some kind of relief at leaving all these problems behind. Whatever happens, you know you are ready.",
    }]
};

module.exports = {
    event
};
