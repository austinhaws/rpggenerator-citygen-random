const randomDice = require('../randomDice');
const randomRatio = require('../randomRatio');

const formatErrorRolls = (useRoll, rollName, sides, useSides) => (
    `${useRoll ? `expected: "${useRoll.rollName}" ${useSides ? `(sides: ${useRoll.sides}` : ''}, roll: ${useRoll.roll}); ` : ''}found: "${rollName}" ${useSides ? `(sides: ${sides})` : ''}`
);

const doRandom = (mockUseRolls, usesSides) => (({ rollName, sides }) => {
    if (!mockUseRolls.length) {
        throw new Error(`Out of rolls for: ${formatErrorRolls(null, rollName, sides, usesSides)}`);
    }
    const useRoll = mockUseRolls.shift();
    if (0 !== useRoll.rollName.localeCompare(rollName)) {
        throw new Error(`Wrong roll name; ${formatErrorRolls(useRoll, rollName, sides, usesSides)}`);
    }
    if (usesSides) {
        if (useRoll.sides !== sides) {
            throw new Error(`Wrong roll sides; ${formatErrorRolls(useRoll, rollName, sides, usesSides)}`);
        }
    }
    if (useRoll.roll === undefined) {
        throw new Error(`Missing roll value for roll: ${formatErrorRolls(useRoll, rollName, sides, usesSides)}`);
    }
    return useRoll.roll;
});

const startMockRolls = rolls => {
    const existingRandomDice = randomDice.randomDice;
    const existingRandomRatio = randomRatio.randomRatio;

    const mockUseRolls = [...(rolls || [])];

    randomDice.randomDice = doRandom(mockUseRolls, true);
    randomRatio.randomRatio = doRandom(mockUseRolls, false);

    return { existingRandomDice, existingRandomRatio, mockUseRolls };
};

const stopMockRolls = ({ existingRandomDice, existingRandomRatio, mockUseRolls }) => {
    randomDice.randomDice = existingRandomDice;
    randomRatio.randomRatio = existingRandomRatio;

    if (mockUseRolls.length) {
        console.error('extra rolls', { mockUseRolls });
        throw new Error('Not all mock rolls used!');
    }
};

exports.mockRolls = (rolls, testFn) => {
    const { existingRandomDice, existingRandomRatio, mockUseRolls } = startMockRolls(rolls);

    const result = testFn();

    stopMockRolls({ existingRandomDice, existingRandomRatio, mockUseRolls });

    return result;
};

exports.mockRollsAsync = async (rolls, testFnAsync) => {
    const { existingRandomDice, existingRandomRatio, mockUseRolls } = startMockRolls(rolls);

    const result = await testFnAsync();

    stopMockRolls({ existingRandomDice, existingRandomRatio, mockUseRolls });

    return result;
};
