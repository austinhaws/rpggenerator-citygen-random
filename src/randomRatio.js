exports.randomRatio = ({ rollName }) => {
    if (!rollName) {
        throw new Error(`Roll missing rollName: ${rollName}`);
    }
    return Math.random();
};
