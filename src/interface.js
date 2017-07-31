'use strict';

const _ = require('lodash');
const $ = require('jquery');
const {Actions} = require('./actions');

class Interface {
    constructor() {
        this.hookGameActions();
    }

    initialize() {
        $(() => {
            // reinitialize template
            let template = $('#game-template').html();
            this.$game = $('#game');
            this.$game.html(template);

            // hide other sections so splash shows
            this.$game.find('#gameplay').hide();
            this.$game.find('#intro').hide();
            this.$game.find('#game-over-screen').hide();

            this.hookInterface();
        });
    }

    hookInterface() {
        this.$splash = $('#splash');
        this.$intro = $('#intro');
        this.$gameplay = $('#gameplay');

        // splash screen leads to intro
        this.$splash.find('.new-game').on('click', (e) => {
            $(e.target).css({
                opacity: 0,
                pointerEvents: 'none'
            });
            this.showIntro();
        });

        // intro leads to gameplay
        this.$intro.find('.start-game').on('click', (e) => {
            $(e.target).css({
                opacity: 0,
                pointerEvents: 'none'
            });
            this.showGame();
        });

        // clicking an event choice
        this.$gameplay.on('click', '#event-choices .event-choice', (e) => {
            let $button = $(e.target);
            let choice = $button.data('choice');
            $button.closest('#event-choices').html('');
            Actions.emit(Actions.interface.eventChoice, choice);
        });

        // clicking on Continue after event
        this.$gameplay.on('click', '#event-choices .event-next', (e) => {
            let $button = $(e.target);
            $button.closest('#event-choices').html('');
            Actions.emit(Actions.interface.doneEvent);
        });

        // clicking Play Again on the game over screen resets the game
        this.$game.on('click', '#game-over-screen .play-again', (e) => {
            this.reset();
        });
    }

    showIntro() {
        this.$splash.fadeOut(() => {
            this.$intro.fadeIn();
        });
    }

    showGame() {
        this.$intro.fadeOut(() => {
            Actions.emit(Actions.interface.newGame);
            this.$gameplay.fadeIn();
        });
    }

    reset() {
        this.initialize();
    }

    begin() {
        // show the intro text
        // show the Done button
    }

    // show turn intro
    beginTurn(turn, totalTurns) {
        var $turnDisplay = this.$gameplay.find('#turn-display');
        let text = (turn === totalTurns) ? 'Final Week' : `Week ${turn}`;
        $turnDisplay.find('.text').text(text);

        var timedFade = (timeout) => {
            timeout = timeout || 1000;
            setTimeout(() => {
                $turnDisplay.fadeOut();
            }, timeout);
        };

        if (turn === 1) {
            timedFade(2000);
        } else {
            $turnDisplay.show(timedFade);
        }
    }

    endTurn() {
        //
    }

    // display the event and its choices
    beginEvent(event) {
        let $eventContent = this.$gameplay.find('#event-content');
        let $eventChoices = this.$gameplay.find('#event-choices');

        // load the face image
        let image = require(`./images/faces/${event.image}.jpg`);
        $eventContent.find('.event-image').css({
            'background-image': `url("${image}")`
        });

        // load the text
        $eventContent.find('.event-text').text(event.text);

        // load the event choices
        event.choices.forEach((choice, i) => {
            $eventChoices.append(`<div class="event-choice" data-choice="${i}">${choice.text}</div>`);
        });
    }

    respondEvent(response) {
        let $eventContent = this.$gameplay.find('#event-content');
        $eventContent.find('.event-text').text(response || 'Understood.');
        let $eventChoices = this.$gameplay.find('#event-choices');
        $eventChoices.append('<div class="event-next">Continue</div>');
    }

    endEvent(event) {
        // show the event outro
    }

    endGame(result) {
        let $gameOver = this.$game.find('#game-over-screen');
        $gameOver.addClass(result.win ? 'win' : 'lose');
        $gameOver.find('.text h1').text(result.title);
        $gameOver.find('.text .description').text(result.text);
        $gameOver.siblings().remove();
        $gameOver.show();
    }

    // update the display of the player's current stats
    statUpdate(stats) {
        _.each(stats, (amount, stat) => {
            let $stat = this.$gameplay.find(`#stat-${stat}`);
            $stat.find('.amount').text(amount);
            let $meter = $stat.find('.meter');
            $meter.css({ width: Math.min(amount, 100) + '%' });
            $meter[(amount >= 100 ? 'addClass' : 'removeClass')]('flashing');
        });
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
