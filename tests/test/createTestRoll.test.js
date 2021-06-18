const createTestRoll = require("../../src/test/createTestRoll");

test('createTestRoll', () => {
    expect(createTestRoll({}))
        .toStrictEqual({
            rollName: null,
            roll: NaN,
            sides: NaN,
            repeatedCount: 1,
        });

    expect(createTestRoll())
        .toStrictEqual({
            rollName: null,
            roll: NaN,
            sides: NaN,
            repeatedCount: 1,
        });

    expect(createTestRoll({
        rollName: 'Test',
        roll: 31,
        sides: 32,
    }))
        .toStrictEqual({
            rollName: 'Test',
            roll: 31,
            sides: 32,
            repeatedCount: 1,
        });

    expect(createTestRoll({
        rollName: 'Test',
        roll: 31,
        sides: 32,
        repeatedCount: Infinity,
    }))
        .toStrictEqual({
            rollName: 'Test',
            roll: 31,
            sides: 32,
            repeatedCount: Infinity,
        });

    expect(createTestRoll({
        rollName: 'Test',
        roll: 31,
        sides: 32,
        repeatedCount: 3,
    }))
        .toStrictEqual({
            rollName: 'Test',
            roll: 31,
            sides: 32,
            repeatedCount: 3,
        });

    expect(createTestRoll({
        rollName: 'Test',
        roll: NaN,
        sides: 32,
        repeatedCount: 3,
    }))
        .toStrictEqual({
            rollName: 'Test',
            roll: NaN,
            sides: 32,
            repeatedCount: 3,
        });
});
