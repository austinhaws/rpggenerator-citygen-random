const randomDice = require("./randomDice");

/**
 * Given a list of steps in a number line, pick a random number and see which step is smallest
 * that contains that random number.
 *
 * This is useful for a table of percent chances that a value should be chosen:
 * ie [10 => '10% chance', 50 => '40% chance', 100 => '50% chance']
 *
 * Only 10, 50, or 100 should be returned, but each one has a different probability of beng selected.
 *
 * This was originally intended for working with tables from the city-gen-tables repository but
 * it seemed better to not make that repository depend on this repository so came up with a
 * more generic random solution that didn't take a table so that these are no longer tightly coupled.
 *
 * @param {string} rollName name of the roll, used for finding errors easier and testing
 * @param {array} steps an ordered list of Integers that represent a range of selections
 */
exports.randomStep = ({ rollName, steps }) => {

    // what is the maximum step?
    const maxKey = Math.max(...steps);

    const randomKey = randomDice.randomDice({ rollName, sides: maxKey });

    // filter out all keys less than the random value and return the smallest found step
    return Math.min(...steps.filter(key => key >= randomKey));
};
