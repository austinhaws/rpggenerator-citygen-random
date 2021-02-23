const randomDice = require("./randomDice");

exports.randomMinMaxInt = ({ rollName, minMax }) => (
    minMax.min === minMax.max
        ? minMax.min
        : (randomDice.randomDice({ rollName, sides: minMax.max - minMax.min + 1 }) + minMax.min - 1)
);
