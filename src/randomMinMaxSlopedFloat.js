const randomSloped = require("./randomSloped");

exports.randomMinMaxSlopedFloat = ({ rollName, minMax }) => (
    randomSloped.randomSloped({ rollName }) * (minMax.max - minMax.min) + minMax.min
);
