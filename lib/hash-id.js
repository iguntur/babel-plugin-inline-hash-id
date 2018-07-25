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

				let opts = Object.assign({}, {
					uniqPerFile: true,
					fnName: '__hashId'
				}, state.opts);

				if (!path.node.callee.name.includes(opts.fnName)) {
					return;
				}

				const [args1, args2] = path.node.arguments;
				const argOptions = {};

				if (args2) {
					args2.properties.forEach(prop => {
						argOptions[prop.key.name] = prop.value.value;
					});
				}

				const input = args1.value;

				opts = Object.assign({}, opts, argOptions);

				const {filename} = state.file.opts;
				const str = opts.uniqPerFile ? `${filename}~${input}` : `${input}`;
				const hashID = createHash(str, opts);

				path.replaceWith(t.expressionStatement(t.stringLiteral(hashID)));
			}
		}
	};
};
