const randomStep = require("../src/randomStep");
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
                const steps = [10, 40, 90, 103];
                expect(randomStep.randomStep({ rollName: 'test 1', steps })).toBe(10);
                expect(randomStep.randomStep({ rollName: 'test 2', steps })).toBe(10);
                expect(randomStep.randomStep({ rollName: 'test 3', steps })).toBe(40);
                expect(randomStep.randomStep({ rollName: 'test 4', steps })).toBe(40);
                expect(randomStep.randomStep({ rollName: 'test 5', steps })).toBe(90);
                expect(randomStep.randomStep({ rollName: 'test 6', steps })).toBe(103);
            })
    )
));
