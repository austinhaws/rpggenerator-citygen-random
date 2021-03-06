const randomDice = require('./src/randomDice');
const randomArrayEntry = require('./src/randomArrayEntry');
const randomMinMaxFloat = require('./src/randomMinMaxFloat');
const randomMinMaxInt = require('./src/randomMinMaxInt');
const randomRatio = require('./src/randomRatio');
const randomStep = require('./src/randomStep');
const randomTableStepEntry = require('./src/randomTableStepEntry');
const shuffleArray = require('./src/shuffleArray');
const randomPercentile = require('./src/randomPercentile');
const createTestRoll = require('./src/test/createTestRoll');
const { mockRolls, mockRollsAsync } = require('./src/test/mockRolls');
const { mockShuffle, mockShuffleAsync } = require('./src/test/mockShuffle');
const { isRandom } = require('./src/isRandom');
const { isCustom } = require('./src/isCustom');
const randomMinMaxSlopedFloat = require('./src/randomMinMaxSlopedFloat');
const randomMinMaxSlopedInt = require('./src/randomMinMaxSlopedInt');

// these get mocked so have to run from object to make sure to use the mocked function
// uses anonymous function to make it easy to use
exports.randomDice = ({ ...params } = {}) => randomDice.randomDice(params);
exports.randomRatio = ({ ...params } = {}) => randomRatio.randomRatio(params);

// functions for doing random
exports.randomArrayEntry = randomArrayEntry.randomArrayEntry;
exports.randomMinMaxFloat = randomMinMaxFloat.randomMinMaxFloat;
exports.randomMinMaxInt = randomMinMaxInt.randomMinMaxInt;
exports.randomMinMaxSlopedFloat = randomMinMaxSlopedFloat.randomMinMaxSlopedFloat;
exports.randomMinMaxSlopedInt = randomMinMaxSlopedInt.randomMinMaxSlopedInt;
exports.randomPercentile = randomPercentile.randomPercentile;
exports.randomStep = randomStep.randomStep;
exports.randomTableStepEntry = randomTableStepEntry.randomTableStepEntry;
exports.shuffleArray = a => shuffleArray.shuffleArray(a);

// functions for mocking randomness
exports.createTestRoll = createTestRoll;
exports.mockRolls = mockRolls;
exports.mockRollsAsync = mockRollsAsync;
exports.mockShuffle = mockShuffle;
exports.mockShuffleAsync = mockShuffleAsync;

// utility functions dealing with randomness
exports.isRandom = isRandom;
exports.isCustom = isCustom;
