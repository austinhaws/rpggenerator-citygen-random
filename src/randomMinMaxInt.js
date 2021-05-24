const randomDice = require("./randomDice");

exports.randomMinMaxInt = ({ rollName, minMax }) => (
    (randomDice.randomDice({ rollName, sides: minMax.max - minMax.min + 1 }) + minMax.min - 1)
);
