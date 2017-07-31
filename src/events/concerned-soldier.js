'use strict';

const {Game} = require('../game');

let event = {
    name: 'conerned-soldier',
    type: 'random',
    image: 'soldier-2',
    text: "One of your low-ranking soldiers requests a private audience with you. Noting the grave look of concern on his face, you grant his request, but ask him to make it quick. He explains that he's found out that some of the higher ranking men have been operating a smuggling operation, skimming some gold they were tasked with collecting from local lords. The soldier looks to you expectantly and explains that he does not want to be disloyal to his fellows, but could not in good conscience let them defraud the king.",
    choices: [{
        text: 'Purge the smugglers, promote the soldier',
        effects: {
            gold: +Game.var.amount.gold.small,
            army: -Game.var.amount.army.small,
        },
        response: "You have the smugglers stripped of their rank and imprisoned as a warning to any others who would attempt such a thing. The young soldier is promoted and put in charge of collections. Your income immediately rises."
    }, {
        text: 'Kill the smugglers',
        effects: {
            gold: +Game.var.amount.gold.small,
            army: -Game.var.amount.army.medium,
            like: -Game.var.amount.like.small,
        },
        response: "You tell the young man you'll take care of it, and have the disloyal soldiers summarily executed. Their heads are placed on pikes around the city as a warning to any who would betray you. The young soldier, feeling responsible for their gruesome deaths, abandons his post and leaves the city. The citizens are noticeably fearful.",
    }, {
        text: 'Dismiss the fellow',
        effects: {
            army: -Game.var.amount.army.small
        },
        response: "You don't appreciate soldiers that are not loyal to each other, and dismiss the young man, who looks on the verge of tears. For a moment he appears as if he'll plead with you, but instead he lays his sword at your feet, turns and walks away with eyes downcast."
    }, {
        text: 'Blackmail the smugglers',
        effects: {
            army: +Game.var.amount.army.small
        },
        response: "You assure the young soldier you'll fix the problem. Afterward, you call the smugglers in to your chamber and explain that you know what they've been doing. Their eyes go wide, but before they can stammer a defense, you hold up your hand to silence them. Explaining that you don't care about the gold, but need their loyalty in the times ahead, you make them swear an oath to carry out any dirty work you find necessary. In return, they can keep their operation. They consider for a few moments, and come to agreement."
    }]
};

module.exports = {
    event
};
