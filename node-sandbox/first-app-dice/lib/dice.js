const dice = {};
const config = {
    upperLimit : 6,
    zeroAllowed : false,
};

dice.throw = ()=>{
    if (config.zeroAllowed) {
        return Math.round(Math.random() * config.upperLimit);
    } else {
        return Math.ceil(Math.random() * config.upperLimit);
    }
}
module.exports = dice;