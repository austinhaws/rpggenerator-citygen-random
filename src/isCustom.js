exports.isCustom = value => (!value && value !== false) || ((`${value}` || '').toLowerCase() === 'custom');
