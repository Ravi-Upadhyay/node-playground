const dice = {};
const config = {
    upperLimit : 6,
    zeroAllowed : false,
    bonusChanceOn : [6],
    bonusChanceStreak : 3,
    specialOccurance: [1,6]
};

dice.throw = ()=>{
    if (config.zeroAllowed) {
        return Math.round(Math.random() * config.upperLimit);
    } else {
        return Math.ceil(Math.random() * config.upperLimit);
    }
}

dice.isSpecialOccurance = (num) => config.specialOccurance.includes(num);

dice.gotBonusChance = (num, streak) => {
    return (config.bonusChanceOn.includes(num) && streak <= config.bonusChanceStreak) ? true : false; 
}

module.exports = dice;