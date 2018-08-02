'use strict';
const createHash = require('./create-hash');

module.exports = function ({types: t}) {
	return {
		name: 'inline-hash-id',
		visitor: {
			CallExpression(path, state) {
				if (!(path.node.callee.type === 'Identifier')) {
					return;
				}

				const defaultOptions = {
					uniqPerFile: true,
					fnName: '__hashId'
				};

				const opts = Object.assign(defaultOptions, state.opts);

				if (path.node.callee.name !== opts.fnName) {
					return;
				}

				const [args1] = path.node.arguments;
				const input = args1.value;

				const {filename} = state.file.opts;
				const str = opts.uniqPerFile ? `${filename}~${input}` : `${input}`;
				const hashID = createHash(str, opts);

				path.replaceWith(t.expressionStatement(t.stringLiteral(hashID)));
			}
		}
	};
};
