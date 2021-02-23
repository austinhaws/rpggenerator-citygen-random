const randomDice = require("../src/randomDice");

test('randomDice', () => {
    expect(() => randomDice.randomDice({})).toThrowError(/Roll missing rollName:/);
    expect(typeof randomDice.randomDice({ rollName: 'Random Test', sides: 3000 })).toBe("number");
});
