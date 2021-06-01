const { randomTableStepEntry } = require("../src/randomTableStepEntry");
const createTestRoll = require("../src/test/createTestRoll");
const { mockRolls } = require("../src/test/mockRolls");

test('randomStep', (
    () => (
        mockRolls([
            createTestRoll({ rollName: 'test 1', sides: 103, roll: 1 }),
            createTestRoll({ rollName: 'test 2', sides: 103, roll: 10 }),
            createTestRoll({ rollName: 'test 3', sides: 103, roll: 11 }),
            createTestRoll({ rollName: 'test 4', sides: 103, roll: 40 }),
            createTestRoll({ rollName: 'test 5', sides: 103, roll: 89 }),
            createTestRoll({ rollName: 'test 6', sides: 103, roll: 91 }),
        ],
            () => {
                const stepTable = { 10: 'one', 40: 'two', 90: 'three', 103: 'four' };
                expect(randomTableStepEntry({ rollName: 'test 1', stepTable })).toBe('one');
                expect(randomTableStepEntry({ rollName: 'test 2', stepTable })).toBe('one');
                expect(randomTableStepEntry({ rollName: 'test 3', stepTable })).toBe('two');
                expect(randomTableStepEntry({ rollName: 'test 4', stepTable })).toBe('two');
                expect(randomTableStepEntry({ rollName: 'test 5', stepTable })).toBe('three');
                expect(randomTableStepEntry({ rollName: 'test 6', stepTable })).toBe('four');
            })
    )
));
