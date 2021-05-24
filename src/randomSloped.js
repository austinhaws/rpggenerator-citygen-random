const randomRatio = require("./randomRatio");

// get a random number that tends to be on the large size
exports.randomSloped = ({ rollName }) => {
    if (!rollName) {
        throw new Error(`Roll missing rollName: ${rollName}`);
    }
    // using half of pi makes the numbers skew larger is it is just the first 1/4th of the full sin cycle
    return Math.sin(randomRatio.randomRatio({ rollName }) * Math.PI / 2);
};
