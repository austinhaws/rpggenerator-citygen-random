const randomMinMaxInt = require("../src/randomMinMaxInt");
const randomMinMaxSlopedInt = require("../src/randomMinMaxSlopedInt");
const createTestRoll = require("../src/test/createTestRoll");
const { mockRolls } = require("../src/test/mockRolls");

test('randomMinMaxSlopedInt', () => {
    expect(() => randomMinMaxSlopedInt.randomMinMaxSlopedInt({ minMax: { min: 0 } })).toThrowError(/Roll missing rollName:/);
    expect(typeof randomMinMaxSlopedInt.randomMinMaxSlopedInt({ rollName: 'Random Test', minMax: { min: 3000, max: 3002 } })).toBe("number");
    expect(randomMinMaxSlopedInt.randomMinMaxSlopedInt({ rollName: 'Random Test', minMax: { min: 3000, max: 3000 } })).toBe(3000);
});

test('randomMinMaxSlopedInt - bigger than non-sloped', async () => {
    mockRolls(
        [
            createTestRoll({ rollName: 'Sloped test', sides: 3000, roll: 1500 }),
            createTestRoll({ rollName: 'Sloped test', sides: 3000, roll: 1500 }),
        ],
        async () => {
            expect(randomMinMaxSlopedInt.randomMinMaxSlopedInt({ rollName: 'Sloped test', minMax: { min: 1, max: 3000 } })).toBe(2121);
            expect(randomMinMaxInt.randomMinMaxInt({ rollName: 'Sloped test', minMax: { min: 1, max: 3000 } })).toBe(1500);
        }
    )
});

test('randomMinMaxSlopedInt - low values', async () => {
    mockRolls(
        [
            createTestRoll({ rollName: 'Sloped test 2', sides: 3000, roll: 5 }),
            createTestRoll({ rollName: 'Sloped test 2', sides: 3000, roll: 5 }),
        ],
        async () => {
            expect(randomMinMaxSlopedInt.randomMinMaxSlopedInt({ rollName: 'Sloped test 2', minMax: { min: 1, max: 3000 } })).toBe(7);
            expect(randomMinMaxInt.randomMinMaxInt({ rollName: 'Sloped test 2', minMax: { min: 1, max: 3000 } })).toBe(5);
        }
    )
});

test('randomMinMaxSlopedInt - high values', async () => {
    mockRolls(
        [
            createTestRoll({ rollName: 'Sloped test 2', sides: 3000, roll: 2900 }),
            createTestRoll({ rollName: 'Sloped test 2', sides: 3000, roll: 2900 }),
        ],
        async () => {
            expect(randomMinMaxSlopedInt.randomMinMaxSlopedInt({ rollName: 'Sloped test 2', minMax: { min: 1, max: 3000 } })).toBe(2995);
            expect(randomMinMaxInt.randomMinMaxInt({ rollName: 'Sloped test 2', minMax: { min: 1, max: 3000 } })).toBe(2900);
        }
    )
});
