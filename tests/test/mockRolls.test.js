const randomDice = require("../../src/randomDice");
const randomRatio = require("../../src/randomRatio");
const shuffleArray = require("../../src/shuffleArray");
const createTestRoll = require("../../src/test/createTestRoll");
const { mockRolls, mockRollsAsync } = require("../../src/test/mockRolls");
const { mockShuffle, mockShuffleAsync } = require("../../src/test/mockShuffle");

test('mockRolls - not all rolls used', () => {
    const consoleError = console.error;
    console.error = () => { };
    expect(() => mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 3 })
    ], () => {
        // not all rolls used
    })).toThrowError(/Not all mock rolls used/);
    console.error = consoleError;
});

test('mockRolls - randomDice', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 3 })
    ], () => {
        expect(randomDice.randomDice({
            rollName: 'a',
            sides: 6,
        })).toBe(3);
    });
});

test('mockRolls - randomRatio', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 2 })
    ], () => {
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
    });
});


test('mockRollsAsync - not all rolls used', async () => {
    const consoleError = console.error;
    console.error = () => { };

    try {
        await mockRollsAsync([
            createTestRoll({ rollName: 'a', sides: 6, roll: 3 })
        ], async () => { });
        throw 'Missing exception';
    } catch (e) {
        expect(e.message).toBe('Not all mock rolls used!');
    }

    console.error = consoleError;
});

test('mockRollsAsync - randomDice', () => {
    mockRollsAsync([
        createTestRoll({ rollName: 'a', sides: 6, roll: 3 })
    ], async () => {
        expect(randomDice.randomDice({
            rollName: 'a',
            sides: 6,
        })).toBe(3);
    });
});

test('mockRollsAsync - randomRatio', () => {
    mockRollsAsync([
        createTestRoll({ rollName: 'a', sides: 6, roll: 2 })
    ], async () => {
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
    });
});
