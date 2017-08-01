'use strict';

const {Game} = require('../game');

let event = {
    name: 'raiders',
    type: 'random',
    image: 'horror-man',
    text: "A beleagured man covered in dirt and blood limps into the throne room. The guards take notice and step closer to stop him, but you motion for them to stand down. The man's face has a look unlike any you've ever seen, like a pure horror that has frozen his countenance into a terrible mask. Calming the man, you offer him water and ask him to explain his condition. He tells you that he is the only survivor from a remote village in the bounds of your kingdom, far to the south. Raiders have sacked it, slaughtered everyone, and cannibalized them. He tries to explain what they did, but merely stutters and begins to weep. You signal for an attendant to find the man a place to rest while you decide how to proceed.",
    choices: [{
        text: "Attack with a large force",
        effects: {
            gold: +Game.var.amount.gold.medium,
            army: -Game.var.amount.army.medium,
            like: +Game.var.amount.like.medium,
        },
        response: "One thing you will not put up with under your rule are beasts of men. You order your best soldiers to proceed to the village and destroy every last raider. They willingly oblige, and later return in diminished, exhausted numbers with the collected wealth of the former village. The citizens of neighboring villages are thankful that you spared them a similar fate."
    }, {
        text: "Attack with a small force",
        effects: {
            army: -Game.var.amount.army.small,
            like: +Game.var.amount.like.small,
        },
        response: "You can't afford to send your best, so you send what you can. The soldiers are evenly matched against the raiders, and it turns into a bloodbath on both sides. The remains of the raiders finally leave, and the few soldiers left alive return to the city."
    }, {
        text: "Ignore the raiders",
        effects: {
            army: -Game.var.amount.army.small,
            like: -Game.var.amount.like.small,
        },
        response: "Hoping they'll go back from whence they came or move on to another village outside your realm, you decide to do nothing. Word gets out, and both your army and the citizens are displeased with your decision."
    }]
};

module.exports = {
    event
};
