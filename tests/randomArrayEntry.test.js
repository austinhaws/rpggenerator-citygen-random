const randomArrayEntry = require("../src/randomArrayEntry");
const createTestRoll = require("../src/test/createTestRoll");
const { mockRolls } = require("../src/test/mockRolls");

test('randomArrayEntry', (
    () => (
        mockRolls([
            createTestRoll({ rollName: 'test 1', sides: 4, roll: 1 }),
            createTestRoll({ rollName: 'test 2', sides: 4, roll: 2 }),
            createTestRoll({ rollName: 'test 3', sides: 4, roll: 3 }),
            createTestRoll({ rollName: 'test 4', sides: 4, roll: 4 }),
        ],
            () => {
                const entries = [10, 40, 90, 103];
                expect(randomArrayEntry.randomArrayEntry({ rollName: 'test 1', entries })).toBe(10);
                expect(randomArrayEntry.randomArrayEntry({ rollName: 'test 2', entries })).toBe(40);
                expect(randomArrayEntry.randomArrayEntry({ rollName: 'test 3', entries })).toBe(90);
                expect(randomArrayEntry.randomArrayEntry({ rollName: 'test 4', entries })).toBe(103);
            })
    )
));
