const randomDice = require("./randomDice");

exports.randomPercentile = ({ rollName }) => randomDice.randomDice({ rollName, sides: 100 });
