'use strict';

const $ = require('jquery');
const {Actions} = require('./actions');

class Interface {
    constructor() {
        this.hookGameActions();
    }

    initialize() {
        $(function() {
            // reinitialize template
            let template = $('#game-template').html();
            this.$game = $('#game');
            this.$game.html(template);

            // hide other sections so splash shows
            this.$game.find('#gameplay').hide();
            this.$game.find('#intro').hide();

            this.hookInterface();
        }.bind(this));
    }

    hookInterface() {
        var $splash = $('#splash');
        var $intro = $('#intro');
        var $gameplay = $('#gameplay');

        // splash screen leads to intro
        $splash.find('.new-game').on('click', function(e) {
            $(e.target).css({
                opacity: 0,
                pointerEvents: 'none'
            });
            $splash.fadeOut(function() {
                $intro.fadeIn();
            });
        }.bind(this));

        // intro leads to gameplay
        $intro.find('.start-game').on('click', function(e) {
            $(e.target).css({
                opacity: 0,
                pointerEvents: 'none'
            });
            $intro.fadeOut(function() {
                Actions.emit(Actions.interface.newGame);
                $gameplay.fadeIn();
            });
        });
    }

    reset() {
        this.initialize();
    }

    begin() {
        // show the intro text
        // show the Done button
    }

    beginTurn() {
        // show turn intro
    }

    endTurn() {
        // show turn outro
    }

    beginEvent(event) {
        // display the event and its choices
    }

    respondEvent(response) {
        // show the response to the event choice and a Done button
    }

    endEvent(event) {
        // show the event outro
    }

    endGame(result) {
        // display the final result and a Play Again button
    }

    statUpdate(stats) {
        // update the display of the player's current stats
    }

    hookGameActions() {
        let gameActions = [
            'reset', 'begin', 'beginTurn', 'endTurn',
            'beginEvent', 'respondEvent', 'endEvent',
            'endGame', 'statUpdate'
        ];

        for (let action of gameActions) {
            Actions.on(Actions.game[action], this[action].bind(this));
        }
    }
}

module.exports = {
    Interface: new Interface
};
