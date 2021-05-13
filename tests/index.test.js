const moduleExports = require('../index.js');
const { randomDice, randomRatio } = require('../index.js');
const { randomMinMaxFloat } = require('../src/randomMinMaxFloat');
const { randomMinMaxInt } = require('../src/randomMinMaxInt');
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
        randomRatio,

        randomMinMaxFloat,
        randomMinMaxInt,
        randomPercentile,
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
