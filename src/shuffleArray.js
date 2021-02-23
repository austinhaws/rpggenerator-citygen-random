const { knuthShuffle } = require('knuth-shuffle');

exports.shuffleArray = a => {
    const dup = a.concat([]);
    knuthShuffle(dup);
    return dup;
}
