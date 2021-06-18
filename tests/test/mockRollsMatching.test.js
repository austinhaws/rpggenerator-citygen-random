const randomDice = require("../../src/randomDice");
const createTestRoll = require("../../src/test/createTestRoll");
const { mockRolls } = require("../../src/test/mockRolls");

/*
 test  repeat#     #sides  roll    rollName
 A     >1          #       #       String
 B     Infinity    #       #       String
 C     1           #       #       String
 D     >1          NaN     #       String
 E     >1          #       NaN     String
 F     Infinity    NaN     #       String
 G     1           NaN     #       String
 H     Infinity    #       NaN     String
 I     1           #       NaN     String
 J     >1          NaN     NaN     String
 K     Infinity    NaN     NaN     String
 L     1           NaN     NaN     String
 M     >1          #       #       Null
 N     Infinity    #       #       Null
 O     1           #       #       Null
 P     >1          NaN     #       Null
 Q     >1          #       NaN     Null
 R     Infinity    NaN     #       Null
 S     1           NaN     #       Null
 T     Infinity    #       NaN     Null
 U     1           #       NaN     Null
 V     >1          NaN     NaN     Null
 W     Infinity    NaN     NaN     Null
 X     1           NaN     NaN     Null
*/

/**
 *
 * @param {array} rolls an array of CreateTestRoll for the mocked roll results
 * @param {array} tests an array of tests to run against the mocked roll results [{rollName, sides, expectedResult}]
 * @returns
 */
const runTest = ({ rolls, tests }) => (
    mockRolls(
        rolls,
        () => (
            tests.forEach(test => {
                const result = randomDice.randomDice(test);
                if (isNaN(test.expectedResult)) {
                    expect(typeof result).toBe("number");
                } else {
                    expect(result).toBe(test.expectedResult);
                }
            })
        )
    )
);

//  test  repeat#     #sides  roll    rollName
//  A     >1          #       #       String
test('mockRolls - Roll Matching : A', () => (
    runTest({
        rolls: [
            createTestRoll({ rollName: 'aa', sides: 6, roll: 3, repeatedCount: 2 }),
            createTestRoll({ rollName: 'ab', sides: 6, roll: 4, repeatedCount: 3 }),
        ],
        tests: [
            { rollName: 'aa', sides: 6, expectedResult: 3 },
            { rollName: 'aa', sides: 6, expectedResult: 3 },

            { rollName: 'ab', sides: 6, expectedResult: 4 },
            { rollName: 'ab', sides: 6, expectedResult: 4 },
            { rollName: 'ab', sides: 6, expectedResult: 4 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// B     Infinity    #       #       String
test('mockRolls - Roll Matching : B', () => (
    runTest({
        rolls: [
            createTestRoll({ rollName: 'ba', sides: 6, roll: 3, repeatedCount: Infinity }),
            createTestRoll({ rollName: 'bb', sides: 6, roll: 4, repeatedCount: Infinity }),
        ],
        tests: [
            { rollName: 'ba', sides: 6, expectedResult: 3 },
            { rollName: 'ba', sides: 6, expectedResult: 3 },

            { rollName: 'bb', sides: 6, expectedResult: 4 },
            { rollName: 'bb', sides: 6, expectedResult: 4 },
            { rollName: 'bb', sides: 6, expectedResult: 4 },
            { rollName: 'bb', sides: 6, expectedResult: 4 },
            { rollName: 'bb', sides: 6, expectedResult: 4 },
            { rollName: 'bb', sides: 6, expectedResult: 4 },
            { rollName: 'bb', sides: 6, expectedResult: 4 },
            { rollName: 'bb', sides: 6, expectedResult: 4 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// C     1           #       #       String
test('mockRolls - Roll Matching : C', () => (
    runTest({
        rolls: [
            createTestRoll({ rollName: 'ca', sides: 6, roll: 3, repeatedCount: 1 }),
            createTestRoll({ rollName: 'cb', sides: 6, roll: 4, repeatedCount: 1 }),
        ],
        tests: [
            { rollName: 'ca', sides: 6, expectedResult: 3 },
            { rollName: 'cb', sides: 6, expectedResult: 4 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// D     >1          NaN     #       String
test('mockRolls - Roll Matching : D', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 2, sides: NaN, roll: 3, rollName: 'd', }),
        ],
        tests: [
            { rollName: 'd', sides: 6, expectedResult: 3 },
            { rollName: 'd', sides: 16, expectedResult: 3 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// E     >1          #       NaN     String
test('mockRolls - Roll Matching : E', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 4, roll: NaN, rollName: 'e', }),
        ],
        tests: [
            { rollName: 'e', sides: 4, expectedResult: NaN },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// F     Infinity    NaN     #       String
test('mockRolls - Roll Matching : F', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: Infinity, sides: NaN, roll: 4, rollName: 'f', }),
        ],
        tests: [
            { rollName: 'f', sides: 4, expectedResult: NaN },
            { rollName: 'f', sides: 5, expectedResult: NaN },
            { rollName: 'f', sides: 6, expectedResult: NaN },
            { rollName: 'f', sides: 7, expectedResult: NaN },
            { rollName: 'f', sides: 8, expectedResult: NaN },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// G     1           NaN     #       String
test('mockRolls - Roll Matching : G', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: NaN, roll: 4, rollName: 'g', }),
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'g-ender', }),
        ],
        tests: [
            { rollName: 'g', sides: 4, expectedResult: 4 },
            { rollName: 'g-ender', sides: 1, expectedResult: 1 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// H     Infinity    #       NaN     String
test('mockRolls - Roll Matching : H', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: Infinity, sides: 3, roll: NaN, rollName: 'h', }),
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'h-ender', }),
        ],
        tests: [
            { rollName: 'h', sides: 3, expectedResult: NaN },
            { rollName: 'h', sides: 3, expectedResult: NaN },
            { rollName: 'h', sides: 3, expectedResult: NaN },
            { rollName: 'h', sides: 3, expectedResult: NaN },
            { rollName: 'h', sides: 3, expectedResult: NaN },
            { rollName: 'h-ender', sides: 1, expectedResult: 1 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// I     1           #       NaN     String
test('mockRolls - Roll Matching : I', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'i-starter', }),
            createTestRoll({ repeatedCount: 1, sides: 3, roll: NaN, rollName: 'i', }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'i-ender', }),
        ],
        tests: [
            { rollName: 'i-starter', sides: 1, expectedResult: 1 },
            { rollName: 'i', sides: 3, expectedResult: NaN },
            { rollName: 'i-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// J     >1          NaN     NaN     String
test('mockRolls - Roll Matching : J', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'j-starter', }),
            createTestRoll({ repeatedCount: 3, sides: NaN, roll: NaN, rollName: 'j', }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'j-ender', }),
        ],
        tests: [
            { rollName: 'j-starter', sides: 1, expectedResult: 1 },
            { rollName: 'j', sides: 3, expectedResult: NaN },
            { rollName: 'j', sides: 4, expectedResult: NaN },
            { rollName: 'j', sides: 5, expectedResult: NaN },
            { rollName: 'j-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// K     Infinity    NaN     NaN     String
test('mockRolls - Roll Matching : K', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'k-starter', }),
            createTestRoll({ repeatedCount: Infinity, sides: NaN, roll: NaN, rollName: 'k', }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'k-ender', }),
        ],
        tests: [
            { rollName: 'k-starter', sides: 1, expectedResult: 1 },
            { rollName: 'k', sides: 3, expectedResult: NaN },
            { rollName: 'k', sides: 4, expectedResult: NaN },
            { rollName: 'k', sides: 5, expectedResult: NaN },
            { rollName: 'k-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// L     1           NaN     NaN     String
test('mockRolls - Roll Matching : L', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'l-starter', }),
            createTestRoll({ repeatedCount: 1, sides: NaN, roll: NaN, rollName: 'l', }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'l-ender', }),
        ],
        tests: [
            { rollName: 'l-starter', sides: 1, expectedResult: 1 },
            { rollName: 'l', sides: 3, expectedResult: NaN },
            { rollName: 'l-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
//  M     >1          #       #       Null
test('mockRolls - Roll Matching : M', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'm-starter', }),
            createTestRoll({ repeatedCount: 4, sides: 5, roll: 3, rollName: 'm', }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'm-ender', }),
        ],
        tests: [
            { rollName: 'm-starter', sides: 1, expectedResult: 1 },
            { rollName: 'm', sides: 5, expectedResult: 3 },
            { rollName: 'm', sides: 5, expectedResult: 3 },
            { rollName: 'm', sides: 5, expectedResult: 3 },
            { rollName: 'm', sides: 5, expectedResult: 3 },
            { rollName: 'm-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// N     Infinity    #       #       Null
test('mockRolls - Roll Matching : N', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'n-starter', }),
            createTestRoll({ repeatedCount: Infinity, sides: 5, roll: 3, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'n-ender', }),
        ],
        tests: [
            { rollName: 'n-starter', sides: 1, expectedResult: 1 },
            { rollName: 'n-null-1', sides: 5, expectedResult: 3 },
            { rollName: 'n-null-2', sides: 5, expectedResult: 3 },
            { rollName: 'n-null-3', sides: 5, expectedResult: 3 },
            { rollName: 'n-null-4', sides: 5, expectedResult: 3 },
            { rollName: 'n-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// O     1           #       #       Null
test('mockRolls - Roll Matching : O', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'o-starter', }),
            createTestRoll({ repeatedCount: 1, sides: 5, roll: 3, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'o-ender', }),
        ],
        tests: [
            { rollName: 'o-starter', sides: 1, expectedResult: 1 },
            { rollName: 'o-null-1', sides: 5, expectedResult: 3 },
            { rollName: 'o-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// P     >1          NaN     #       Null
test('mockRolls - Roll Matching : P', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'p-starter', }),
            createTestRoll({ repeatedCount: 3, sides:  NaN, roll: 3, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'p-ender', }),
        ],
        tests: [
            { rollName: 'p-starter', sides: 1, expectedResult: 1 },
            { rollName: 'p-null-1', sides: 5, expectedResult: 3 },
            { rollName: 'p-null-2', sides: 6, expectedResult: 3 },
            { rollName: 'p-null-3', sides: 7, expectedResult: 3 },
            { rollName: 'p-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// Q     >1          #       NaN     Null
test('mockRolls - Roll Matching : Q', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'q-starter', }),
            createTestRoll({ repeatedCount: 4, sides: 5, roll: NaN, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'q-ender', }),
        ],
        tests: [
            { rollName: 'q-starter', sides: 1, expectedResult: 1 },
            { rollName: 'q-null-1', sides: 5, expectedResult: NaN },
            { rollName: 'q-null-2', sides: 5, expectedResult: NaN },
            { rollName: 'q-null-3', sides: 5, expectedResult: NaN },
            { rollName: 'q-null-4', sides: 5, expectedResult: NaN },
            { rollName: 'q-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// R     Infinity    NaN     #       Null
test('mockRolls - Roll Matching : R', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'r-starter', }),
            createTestRoll({ repeatedCount: Infinity, sides: NaN, roll: 2, rollName: null, }),
        ],
        tests: [
            { rollName: 'r-starter', sides: 1, expectedResult: 1 },
            { rollName: 'r-null-1', sides: 5, expectedResult: 2 },
            { rollName: 'r-null-2', sides: 6, expectedResult: 2 },
            { rollName: 'r-null-3', sides: 7, expectedResult: 2 },
            { rollName: 'r-null-4', sides: 8, expectedResult: 2 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// S     1           NaN     #       Null
test('mockRolls - Roll Matching : S', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 's-starter', }),
            createTestRoll({ repeatedCount: 1, sides: NaN, roll: 4, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 's-ender', }),
        ],
        tests: [
            { rollName: 's-starter', sides: 1, expectedResult: 1 },
            { rollName: 's-null-1', sides: 5, expectedResult: 4 },
            { rollName: 's-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// T     Infinity    #       NaN     Null
test('mockRolls - Roll Matching : T', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 't-starter', }),
            createTestRoll({ repeatedCount: Infinity, sides: 6, roll: NaN, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 't-ender', }),
        ],
        tests: [
            { rollName: 't-starter', sides: 1, expectedResult: 1 },
            { rollName: 't-null-1', sides: 6, expectedResult: NaN },
            { rollName: 't-null-2', sides: 6, expectedResult: NaN },
            { rollName: 't-null-3', sides: 6, expectedResult: NaN },
            { rollName: 't-null-4', sides: 6, expectedResult: NaN },
            { rollName: 't-null-5', sides: 6, expectedResult: NaN },
            { rollName: 't-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// U     1           #       NaN     Null
test('mockRolls - Roll Matching : U', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'u-starter', }),
            createTestRoll({ repeatedCount: 1, sides: 6, roll: NaN, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'u-ender', }),
        ],
        tests: [
            { rollName: 'u-starter', sides: 1, expectedResult: 1 },
            { rollName: 'u-null-1', sides: 6, expectedResult: NaN },
            { rollName: 'u-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// V     >1          NaN     NaN     Null
test('mockRolls - Roll Matching : V', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'v-starter', }),
            createTestRoll({ repeatedCount: 2, sides: NaN, roll: NaN, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'v-ender', }),
        ],
        tests: [
            { rollName: 'v-starter', sides: 1, expectedResult: 1 },
            { rollName: 'v-null-1', sides: 6, expectedResult: NaN },
            { rollName: 'v-null-2', sides: 7, expectedResult: NaN },
            { rollName: 'v-ender', sides: 11, expectedResult: 11 },
        ],
    })
));

// test  repeat#     #sides  roll    rollName
// W     Infinity    NaN     NaN     Null
test('mockRolls - Roll Matching : W', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'w-starter', }),
            createTestRoll({ repeatedCount: Infinity, sides: NaN, roll: NaN, rollName: null, }),
        ],
        tests: [
            { rollName: 'w-starter', sides: 1, expectedResult: 1 },
            { rollName: 'w-null-1', sides: 6, expectedResult: NaN },
            { rollName: 'w-null-2', sides: 7, expectedResult: NaN },
        ],
    })
));


// test  repeat#     #sides  roll    rollName
// X     1           NaN     NaN     Null
test('mockRolls - Roll Matching : X', () => (
    runTest({
        rolls: [
            createTestRoll({ repeatedCount: 1, sides: 1, roll: 1, rollName: 'x-starter', }),
            createTestRoll({ repeatedCount: 1, sides: NaN, roll: NaN, rollName: null, }),
            createTestRoll({ repeatedCount: 1, sides: 11, roll: 11, rollName: 'x-ender', }),
        ],
        tests: [
            { rollName: 'x-starter', sides: 1, expectedResult: 1 },
            { rollName: 'x-null-1', sides: 6, expectedResult: NaN },
            { rollName: 'x-ender', sides: 11, expectedResult: 11 },
        ],
    })
));
