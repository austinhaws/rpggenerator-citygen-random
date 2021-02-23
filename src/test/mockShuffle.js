const shuffleArray = require('../shuffleArray');

const startShuffleMock = rotationStep => {
    const existingShuffler = shuffleArray.shuffleArray;

    shuffleArray.shuffleArray = a => {
        const dup = a.concat([]);
        for (let i = 0; i < (rotationStep || 0); i++) {
            dup.push(dup.shift());
        }
        return dup;
    };

    return existingShuffler;
};

const stopShuffleMock = existingShuffler => (
    shuffleArray.shuffleArray = existingShuffler
);

exports.mockShuffle = (rotationStep, fn) => {
    const existingShuffler = startShuffleMock(rotationStep);

    const result = fn();

    stopShuffleMock(existingShuffler);

    return result;
};

exports.mockShuffleAsync = async (rotationStep, fnAsync) => {
    const existingShuffler = startShuffleMock(rotationStep);

    const result = await fnAsync();

    stopShuffleMock(existingShuffler);

    return result;
};
