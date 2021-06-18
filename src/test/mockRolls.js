const randomDice = require('../randomDice');
const randomRatio = require('../randomRatio');

const formatErrorRolls = (useRoll, rollName, sides, useSides) => (
    `${useRoll ? `expected: "${useRoll.rollName}" ${useSides ? `(sides: ${useRoll.sides}` : ''}, roll: ${useRoll.roll}); ` : ''}found: "${rollName}" ${useSides ? `(sides: ${sides})` : ''}`
);

const doRandom = (mockUseRolls, usesSides) => (({ rollName, sides }) => {
    if (!mockUseRolls.length) {
        throw new Error(`Out of rolls, ${formatErrorRolls(null, rollName, sides, usesSides)}`);
    }
    const useRoll = mockUseRolls[0];
    let error = null;
    if (useRoll.rollName !== null && 0 !== useRoll.rollName.localeCompare(rollName)) {
        error = `Wrong roll name; ${formatErrorRolls(useRoll, rollName, sides, usesSides)}`;
    } else if (usesSides && !isNaN(useRoll.sides) && useRoll.sides !== sides) {
        error = `Wrong roll sides; ${formatErrorRolls(useRoll, rollName, sides, usesSides)}`;
    }

    let result = NaN;
    if (error) {
        // if got a mismatch but the current roll has a repeatedCount of `Infinity` then go to the next
        if (mockUseRolls.length > 1 && useRoll.repeatedCount === Infinity) {
            // pull off `Infinity` roll
            mockUseRolls.shift();
            // random again
            result = doRandom(mockUseRolls, usesSides)({ rollName, sides });
        } else {
            // there are no more rolls and this roll doesn't match
            throw new Error(error);
        }
    } else {

        // check if this roll is a repeater; (JS note: (Infinity -1 = Infinity) && (Infinity > 0))
        useRoll.repeatedCount--;
        if (useRoll.repeatedCount <= 0) {
            mockUseRolls.shift();
        }

        // if roll's result is NaN, then do non-mocked random rolling
        if (isNaN(useRoll.roll)) {
            if (sides === undefined) {
                result = existingRandomRatio({ rollName });
            } else {
                // this is a copy of randomDice so that it avoids calling the mocked version of random ratio
                result = Math.floor(existingRandomRatio({ rollName }) * sides) + 1;
            }
        } else {
            result = useRoll.roll;
        }
    }

    return result;
});

// load once; startMockRolls was being called async so was getting mocked functions
let existingRandomDice = randomDice.randomDice;
let existingRandomRatio = randomRatio.randomRatio;
let mockedCount = 0;

// in case mocking is nested, keep the levels of roll mocking to keep the rolls at the levels separate and restorable
let doRandoms = [];
const startMockRolls = rolls => {
    // if starting mocking, substitute mocking methods that use the current level of rolls
    if (0 === mockedCount++) {
        randomDice.randomDice = (...params) => doRandoms[doRandoms.length - 1].randomDice(...params);
        randomDice.randomRatio = (...params) => doRandoms[doRandoms.length - 1].randomRatio(...params);
    }
    const mockUseRolls = [...(rolls || [])];
    doRandoms.push({
        randomDice: doRandom(mockUseRolls, true),
        randomRatio: doRandom(mockUseRolls, false),
    })
    randomDice.randomDice = (...params) => doRandoms[doRandoms.length - 1].randomDice(...params);
    randomRatio.randomRatio = (...params) => doRandoms[doRandoms.length - 1].randomRatio(...params);

    return { mockUseRolls };
};

const stopMockRolls = ({ mockUseRolls }) => {
    // remove level of random rolls in case mocking is nested
    doRandoms.pop();

    // if done mocking, restore non-mocked versions
    if (--mockedCount === 0) {
        randomDice.randomDice = existingRandomDice;
        randomRatio.randomRatio = existingRandomRatio;
    }

    // if the last remaining roll has a repeatedCount of infinity then it's ok to have one left since it's just a grabber for anything
    if (mockUseRolls.length && (mockUseRolls.length !== 1 || mockUseRolls[0].repeatedCount !== Infinity)) {
        console.error('extra rolls', { mockUseRolls });
        throw new Error('Not all mock rolls used!');
    }
};

exports.mockRolls = (rolls, testFn) => {
    const { mockUseRolls } = startMockRolls(rolls);

    const result = testFn();

    stopMockRolls({ mockUseRolls });

    return result;
};

exports.mockRollsAsync = async (rolls, testFnAsync) => {
    const { mockUseRolls } = startMockRolls(rolls);

    const result = await testFnAsync();

    stopMockRolls({ mockUseRolls });

    return result;
};
