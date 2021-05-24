const { randomMinMaxInt } = require("./randomMinMaxInt");

exports.randomMinMaxSlopedInt = ({ rollName, minMax }) => {
    // run randomMinMaxInt
    const linearResult = randomMinMaxInt({rollName, minMax});

    // see what the ratio is of where this is between min/max
    const linearRatio = minMax.min === minMax.max ? 1 : (linearResult - minMax.min) / (minMax.max - minMax.min);

    // use this ratio as a ratio of PI/2
    const piRatio = linearRatio * Math.PI / 2;

    // pass that ratio in to sin to get a sloped ratio
    const slopedRatio = Math.sin(piRatio);

    // convert this sloped ratio to a value between min/max
    return minMax.min + Math.floor(slopedRatio * (minMax.max - minMax.min));
};
