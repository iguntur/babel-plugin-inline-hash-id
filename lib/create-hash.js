'use strict';
const crypto = require('crypto');

function createHash(str = '', options) {
	options = Object.assign({
		algorithm: 'sha256',
		digest: 'base64',
		maxLength: 12
	}, options);

	return crypto
		.createHash(options.algorithm)
		.update(String(str))
		.digest(options.digest)
		.replace(/(\W|\d)/g, '')
		.substring(0, options.maxLength);
}

module.exports = createHash;
