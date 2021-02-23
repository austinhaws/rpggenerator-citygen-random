const randomRatio = require("./randomRatio");

exports.randomMinMaxFloat = ({ rollName, minMax }) => randomRatio.randomRatio({ rollName }) * (minMax.max - minMax.min) + minMax.min;
