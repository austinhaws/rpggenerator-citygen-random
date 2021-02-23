const { knuthShuffle } = require('knuth-shuffle');

module.exports = a => {
    const dup = a.concat([]);
    knuthShuffle(dup);
    return dup;
}
