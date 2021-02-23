const randomRatio = require("./randomRatio");

exports.randomDice = ({ rollName, sides }) => Math.floor(randomRatio.randomRatio({ rollName }) * sides) + 1;
