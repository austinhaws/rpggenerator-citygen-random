const { mockCrudDao } = require('./src/test/mockCrudDao');
const randomDice = require('./src/service/randomService/methods/randomDice');
const randomMinMaxFloat = require('./src/service/randomService/methods/randomMinMaxFloat');
const randomMinMaxInt = require('./src/service/randomService/methods/randomMinMaxInt');
const randomRatio = require('./src/service/randomService/methods/randomRatio');
const shuffleArray = require('./src/service/randomService/methods/shuffleArray');
const randomPercentile = require('./src/randomPercentile');

exports.randomDice = randomDice.randomDice;
exports.randomMinMaxFloat = randomMinMaxFloat.randomMinMaxFloat;
exports.randomMinMaxInt = randomMinMaxInt.randomMinMaxInt;
exports.randomPercentile = randomPercentile.randomPercentile;
exports.randomRatio = randomRatio.randomRatio;
exports.shuffleArray = shuffleArray.shuffleArray;

exports.mockCrudDao = mockCrudDao;
