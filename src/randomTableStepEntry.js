const { randomStep } = require("./randomStep");

/**
 * Given a table that has keys as list of steps in a number line, pick a random number and see which step is smallest
 * that contains that random number.
 *
 * This is useful for a table of percent chances that a value should be chosen:
 * ie [10 => '10% chance', 50 => '40% chance', 100 => '50% chance']
 *
 * Only 10, 50, or 100 should be returned, but each one has a different probability of beng selected.
 *
 * @param {string} rollName name of the roll, used for finding errors easier and testing
 * @param {array} stepTable an table from the table repository whose keys are steps with a range of probability
 */
exports.randomTableStepEntry = ({ rollName, stepTable }) => (
    stepTable[randomStep({ rollName, steps: Object.keys(stepTable) })]
);
