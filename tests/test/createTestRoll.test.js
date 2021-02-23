const createTestRoll = require("../../src/test/createTestRoll");

test('createTestRoll', () => {
    expect(createTestRoll({}))
        .toStrictEqual({
            rollName: undefined,
            roll: undefined,
            sides: undefined,
        });

    expect(createTestRoll())
        .toStrictEqual({
            rollName: undefined,
            roll: undefined,
            sides: undefined,
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
        });
});
