const shuffleArray = require("../../src/shuffleArray");
const { mockShuffle, mockShuffleAsync } = require("../../src/test/mockShuffle");

test('mockShuffle - creates copy and rotates', () => {
    mockShuffle(1, () => {
        const a = [1, 2, 3, 4, 5];

        expect(shuffleArray.shuffleArray(a)).toStrictEqual([2, 3, 4, 5, 1]);
        expect(shuffleArray.shuffleArray(a)).toStrictEqual([2, 3, 4, 5, 1]);

        let shuffledArray = shuffleArray.shuffleArray(a);
        shuffledArray.pop();

        expect(shuffledArray).toStrictEqual([2, 3, 4, 5]);
        expect(a).toStrictEqual([1, 2, 3, 4, 5]);
    })
});

test('mockShuffleAsync - creates copy and rotates', () => {
    mockShuffleAsync(1, async () => {
        const a = [1, 2, 3, 4, 5];

        expect(shuffleArray.shuffleArray(a)).toStrictEqual([2, 3, 4, 5, 1]);
        expect(shuffleArray.shuffleArray(a)).toStrictEqual([2, 3, 4, 5, 1]);

        let shuffledArray = shuffleArray.shuffleArray(a);
        shuffledArray.pop();

        expect(shuffledArray).toStrictEqual([2, 3, 4, 5]);
        expect(a).toStrictEqual([1, 2, 3, 4, 5]);
    })
});
