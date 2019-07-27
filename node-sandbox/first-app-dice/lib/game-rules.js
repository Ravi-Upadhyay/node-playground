/**
 * Author: raviupadhyay.bkn@gmail.com
 * GAME RULE ENGINE LIBRARY - V-0.0.1
 * Let us know some game rules
 */

const gameRules = {};
const gameConfig = {
    winnerTarget : 36,
    playersNeeded: 2,
};

gameRules.playerCompleted = score => score >= gameConfig.winnerTarget; 

gameRules.canContinuePlay = scorecard => {
    let x, playersInGame = 0;
    for (x of scorecard) {
        if (!x.completed) playersInGame ++;
        if (playersInGame >= gameConfig.playersNeeded) return true;
    }
};

module.exports = gameRules;