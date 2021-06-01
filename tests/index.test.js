const moduleExports = require('../index.js');
const { randomDice, randomRatio, shuffleArray } = require('../index.js');
const { randomArrayEntry } = require('../src/randomArrayEntry');
const { randomMinMaxFloat } = require('../src/randomMinMaxFloat');
const { randomMinMaxInt } = require('../src/randomMinMaxInt');
const { randomMinMaxSlopedFloat } = require('../src/randomMinMaxSlopedFloat');
const { randomMinMaxSlopedInt } = require('../src/randomMinMaxSlopedInt');
const { randomStep } = require('../src/randomStep');
const { randomTableStepEntry } = require('../src/randomTableStepEntry');
const { randomPercentile } = require('../src/randomPercentile');
const createTestRoll = require('../src/test/createTestRoll');
const { mockRolls, mockRollsAsync } = require('../src/test/mockRolls');
const { mockShuffle, mockShuffleAsync } = require('../src/test/mockShuffle');
const { isRandom } = require('../src/isRandom');
const { isCustom } = require('../src/isCustom');

test('exports', () => {
    const knownExports = {
        randomDice,
        randomRatio,

        randomArrayEntry,
        randomMinMaxFloat,
        randomMinMaxInt,
        randomMinMaxSlopedFloat,
        randomMinMaxSlopedInt,
        randomPercentile,
        randomStep,
        randomTableStepEntry,
        shuffleArray,

        createTestRoll,
        mockRolls,
        mockRollsAsync,
        mockShuffle,
        mockShuffleAsync,
        isRandom,
        isCustom,
    };

    expect(Object.keys(moduleExports)).toStrictEqual(Object.keys(knownExports));
    Object.entries(knownExports)
        .forEach(([key, value]) => expect(moduleExports[key]).toBe(value));
});
