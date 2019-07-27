/**
 * Author: raviupadhyay.bkn@gmail.com
 * DICE THROWING GAME - V-0.0.1
 * 1. There are 4 players
 * 2. Each will throw the dice
 * 3. Initially he needs a special occurance to start with (1, 6)
 * 4. If he gets (6) a bonus chance/turn will be awarded but streak cannot be more than 3.
 * 5. One have to score 36 points to win the game. player to score 36 first will win the game.
 */
const dice =  require('./lib/dice');
const gameRules = require('./lib/game-rules');

const players = ['player-1', 'player-2', 'player-3', 'player-4'];
const scorecard = players.map((playerName) => {
    return {
        playerName,
        score : 0,
        locked: true,
        completed: false,
    }
});

const play = () => {
    let rounds = 1, continuePlay = true;
    do {
        console.log('>>>> ROUND >>>>', rounds);
        for (let i = 0; i < players.length; i++){
            playYourTurn(i);
        }
        console.log('#### SCORECARD ####', scorecard);
        rounds ++;
        continuePlay = gameRules.canContinuePlay(scorecard);
    } while(continuePlay);
};

const playYourTurn = (index) => {
    const player = scorecard[index];
    let got = 0, streak = 0;
    console.log('++++ PLAY TURN (Player) ++++', player);
    if (!player.completed) {
        do {
            streak ++;
            got = dice.throw();
            console.log('**** GOT ****', got);
            if (player.locked) {
                player.locked = !dice.isSpecialOccurance(got);
            }
            if(!player.locked) {
                player.score = player.score + got;
            }
        } while(dice.gotBonusChance(got, streak));
    }
    player.completed = gameRules.playerCompleted(player.score);
}

play();