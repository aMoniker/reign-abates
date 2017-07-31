'use strict';

const {Game} = require('../game');

let event = {
    name: 'bank-loan',
    type: 'moneylow',
    image: 'man-10',
    text: 'A sly looking man approaches and greets you. "Greetings my good king. I have heard of your monetary plight, and have come to offer a wonderful deal." Did he just wink at the king? "In return for a relatively small number of soldiers, or alternatively a reasonable number of slaves from your populace, I could certainly help you with some extra gold. At interest, of course." Of course, you think. Well, gold is needed. What will you do?',
    choices: [{
        text: 'Offer soldiers',
        effects: {
            gold: +Game.var.amount.gold.large,
            army: -Game.var.amount.army.medium,
        },
        response: "You select a mix of soldiers to transfer to them. They look disgusted, but are sworn to obey your orders. Only one objects, and the others drag him away in shame. The rest follow the banker as he leaves with a smirk."
    }, {
        text: 'Offer slaves',
        effects: {
            gold: +Game.var.amount.gold.large,
            like: -Game.var.amount.like.large
        },
        response: 'You send soldiers to forcibly remove some of the less desirable but sturdy citizens. Word gets around, and the populace is not happy. The banker makes good on his gold though, at the expense of your approval, and your conscience...'
    }]
};

module.exports = {
    event
};
