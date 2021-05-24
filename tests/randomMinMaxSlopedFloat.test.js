const randomMinMaxFloat = require("../src/randomMinMaxFloat");
const randomMinMaxSlopedFloat = require("../src/randomMinMaxSlopedFloat");
const createTestRoll = require("../src/test/createTestRoll");
const { mockRolls } = require("../src/test/mockRolls");

test('randomMinMaxSlopedFloat', () => {
    expect(() => randomMinMaxSlopedFloat.randomMinMaxSlopedFloat({})).toThrowError(/Roll missing rollName:/);
    expect(typeof randomMinMaxSlopedFloat.randomMinMaxSlopedFloat({ rollName: 'Random Test', minMax: { min: 3000, max: 3002 } })).toBe("number");
    expect(randomMinMaxSlopedFloat.randomMinMaxSlopedFloat({ rollName: 'Random Test', minMax: { min: 3000, max: 3000 } })).toBe(3000);
});

test('randomMinMaxSlopedFloat - bigger than non-sloped', async () => {
    mockRolls(
        [
            createTestRoll({ rollName: 'Sloped test', sides: 3000, roll: .5 }),
            createTestRoll({ rollName: 'Sloped test', sides: 3000, roll: .5 }),
        ],
        async () => {
            expect(randomMinMaxSlopedFloat.randomMinMaxSlopedFloat({ rollName: 'Sloped test', minMax: { min: 1, max: 3000 } })).toBe(2121.6132367784558);
            expect(randomMinMaxFloat.randomMinMaxFloat({ rollName: 'Sloped test', minMax: { min: 1, max: 3000 } })).toBe(1500.5);
        }
    )
})
