exports.isRandom = value => (!value && value !== false) || ((value || '').toLowerCase() === 'random');
