/**
 * Expected random roll information that can then be used when mocking rolls
 * to remove randomness from rolling. Helpful for unit tests to prove a path
 * through code that uses random numbers.
 *
 * @param {int} repeatedCount how many times this roll result is to be repeated; use `Infinity` for infinite rolling
 * @param {int} sides how many sides on the die; use `NaN` for any number of sides
 * @param {int} roll the actual value to return when this roll is requested; use `NaN` for having actual randomization kick back in
 * @param {string} rollName the name of the roll; use `null` for allowing any name
 *
 * @returns {object} roll result information to track randomness
 */
module.exports = ({ repeatedCount = 1, sides = NaN, roll = NaN, rollName = null } = {}) => ({ repeatedCount, sides, roll, rollName });
