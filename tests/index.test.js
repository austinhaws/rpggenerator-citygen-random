const moduleExports = require('../index.js');
const { randomDice } = require('../src/randomDice');
const { randomMinMaxFloat } = require('../src/randomMinMaxFloat');
const { randomMinMaxInt } = require('../src/randomMinMaxInt');
const { randomRatio } = require('../src/randomRatio');
const { randomStep } = require('../src/randomStep');
const { shuffleArray } = require('../src/shuffleArray');
const { randomPercentile } = require('../src/randomPercentile');
const createTestRoll = require('../src/test/createTestRoll');
const { mockRolls, mockRollsAsync } = require('../src/test/mockRolls');
const { mockShuffle, mockShuffleAsync } = require('../src/test/mockShuffle');
const { isRandom } = require('../src/isRandom');

test('exports', () => {
    const knownExports = {
        randomDice,
        randomMinMaxFloat,
        randomMinMaxInt,
        randomPercentile,
        randomRatio,
        randomStep,
        shuffleArray,

        createTestRoll,
        mockRolls,
        mockRollsAsync,
        mockShuffle,
        mockShuffleAsync,
        isRandom,
    };

    expect(Object.keys(moduleExports)).toStrictEqual(Object.keys(knownExports));
    Object.entries(knownExports)
        .forEach(([key, value]) => expect(moduleExports[key]).toBe(value));
});
