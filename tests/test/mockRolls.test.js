const randomDice = require("../../src/randomDice");
const randomRatio = require("../../src/randomRatio");
const createTestRoll = require("../../src/test/createTestRoll");
const { mockRolls, mockRollsAsync } = require("../../src/test/mockRolls");

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

test('mockRolls - out of rolls', () => {
    const consoleError = console.error;
    console.error = () => { };
    expect(() => mockRolls([
    ], () => {
        expect(randomDice.randomDice({
            rollName: 'a',
            sides: 6,
        })).toBe(3);
        // out of rolls
    })).toThrowError(/Out of rolls/);
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

test('mockRollsAsync - repeatedCount > 0', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 2, repeatedCount: 3 })
    ], async () => {
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
    });
});

test('mockRolls - repeatedCount = infinity', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 2, repeatedCount: Infinity })
    ], async () => {
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(2);
    });
});

test('mockRolls - repeatedCount = infinity; surrounded by other rolls', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 3 }),
        createTestRoll({ rollName: 'b', sides: 6, roll: 2, repeatedCount: Infinity }),
        createTestRoll({ rollName: 'c', sides: 6, roll: 3 }),
    ], async () => {
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(3);
        expect(randomRatio.randomRatio({
            rollName: 'b',
            sides: 6,
        })).toBe(2);
        expect(randomRatio.randomRatio({
            rollName: 'b',
            sides: 6,
        })).toBe(2);
        expect(randomRatio.randomRatio({
            rollName: 'c',
            sides: 6,
        })).toBe(3);
    });
});

test('mockRolls - repeatedCount = 0 infinity; surrounded by other rolls', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 3 }),
        createTestRoll({ rollName: 'b', sides: 6, roll: 2, repeatedCount: Infinity }),
        createTestRoll({ rollName: 'c', sides: 6, roll: 3 }),
    ], async () => {
        expect(randomRatio.randomRatio({
            rollName: 'a',
            sides: 6,
        })).toBe(3);
        expect(randomRatio.randomRatio({
            rollName: 'c',
            sides: 6,
        })).toBe(3);
    });
});

test('mockRolls - roll', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: NaN }),
    ], async () => {
        expect(
            typeof (randomRatio.randomRatio({
                rollName: 'a',
                sides: 6,
            })))
            .toBe('number');
    });
});

test('mockRolls - Roll Matching', () => {
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: NaN }),
    ], async () => {
        expect(
            typeof (randomRatio.randomRatio({
                rollName: 'a',
                sides: 6,
            })))
            .toBe('number');
    });
});

test('mockRolls - no more rolls infinite', () => (
    mockRolls([
        createTestRoll({ rollName: 'a', sides: 6, roll: 3, repeatedCount: Infinity }),
    ], async () => {
        expect(randomDice.randomDice({ rollName: 'a', sides: 6, }))
            .toBe(3);
        expect(randomDice.randomDice({ rollName: 'a', sides: 6, }))
            .toBe(3);
        expect(() => randomDice.randomDice({ rollName: 'a', sides: 7, }))
            .toThrowError('Wrong roll sides; expected: "a" (sides: 6, roll: 3); found: "a" (sides: 7)');
    })
));

test('mockRolls - randomRatio for NaN roll', () => (
    mockRolls([
        createTestRoll({ rollName: 'a', roll: NaN }),
    ], async () => {
        expect(typeof randomDice.randomDice({ rollName: 'a' }))
            .toBe('number');
    })
));

test('mockRolls - no rolls', () => (
    mockRolls(undefined, async () => expect(true).toBe(true))
));

test('mockRolls - nested mocking', () => (
    mockRolls(
        [createTestRoll({ rollName: 'a', sides: 10, roll: 5 })],
        () => {
            mockRolls(
                [createTestRoll({ rollName: 'b', sides: 11, roll: 6 })],
                async () => expect(randomDice.randomDice({ rollName: 'b', sides: 11 })).toBe(6)
            );
            expect(randomDice.randomDice({ rollName: 'a', sides: 10 })).toBe(5);
        }
    )
));
