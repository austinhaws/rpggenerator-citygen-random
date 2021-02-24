const randomDice = require('./src/randomDice');
const randomMinMaxFloat = require('./src/randomMinMaxFloat');
const randomMinMaxInt = require('./src/randomMinMaxInt');
const randomRatio = require('./src/randomRatio');
const shuffleArray = require('./src/shuffleArray');
const randomPercentile = require('./src/randomPercentile');
const createTestRoll = require('./src/test/createTestRoll');
const { mockRolls, mockRollsAsync } = require('./src/test/mockRolls');
const { mockShuffle, mockShuffleAsync } = require('./src/test/mockShuffle');
const { isRandom } = require('./src/isRandom');

exports.randomDice = randomDice.randomDice;
exports.randomMinMaxFloat = randomMinMaxFloat.randomMinMaxFloat;
exports.randomMinMaxInt = randomMinMaxInt.randomMinMaxInt;
exports.randomPercentile = randomPercentile.randomPercentile;
exports.randomRatio = randomRatio.randomRatio;
exports.shuffleArray = shuffleArray.shuffleArray;

exports.createTestRoll = createTestRoll;
exports.mockShuffle = mockShuffle;
exports.mockShuffleAsync = mockShuffleAsync;
exports.mockRolls = mockRolls;
exports.mockRollsAsync = mockRollsAsync;

exports.isRandom = isRandom;
