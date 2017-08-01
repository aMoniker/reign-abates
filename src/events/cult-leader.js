'use strict';

const {Game} = require('../game');

let event = {
    name: 'cult-leader',
    type: 'random',
    image: 'beard-man-6',
    text: "Your guards haul in a nonchalant man dressed in plain raiment. He has an enigmatic smile and a strange charisma about him. He doesn't seem to mind being treated roughly like this. The guards explain that he was agitating the peasantry, and putting wild ideas in their minds about their own sovereignty. You ask the man to explain, but he only seems to speak in riddles. The guards go on to say he's attracted quite a large following, and could be a dangerous element if left unchecked.",
    choices: [{
        text: 'Exile the man',
        effects: {
            army: +Game.var.amount.army.small,
            like: -Game.var.amount.like.large,
        },
        response: "Your guards are pleased, but the citizenry is outraged. They don't revolt, but you can tell that their attitude toward you has changed, and you fear they plan revenge."
    }, {
        text: 'Introduce the man to your scribe',
        effects: {
            army: -Game.var.amount.army.small,
            like: +Game.var.amount.like.medium,
        },
        response: "Not being able to made head or tail of his comments, but hearing some strange wisdom in them, you hand the man over to your chief scribe for his opinion. After a long discussion, the scribe returns and tells you the man is a prophet. It would be most unwise to harm him, as the citizens would rebel. Instead, he recommends that he keep eyes on him, and you agree. The soldiers, however, are slightly upset that the man is allowed to continue proselytizing."
    }, {
        text: 'Have the man killed',
        effects: {
            army: +Game.var.amount.army.small,
            like: -Game.var.amount.like.large * 3,
        },
        response: "Perhaps unwisely, you decide to put a quick end to the man, hoping that this will end the spread of his ideas. The most sadistic among the guards are very pleased, but the citizenry is on the verge of outright rebellion."
    }]
};

module.exports = {
    event
};
