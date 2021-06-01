const randomDice = require("./randomDice");

/**
 * Given an array of entries, pick one.
 *
 * @param {string} rollName name of the roll, used for finding errors easier and testing
 * @param {array} entries a array of values from which to select one randomly
 */
exports.randomArrayEntry = ({ rollName, entries }) => (
    entries[randomDice.randomDice({ rollName, sides: entries.length }) - 1]
);
