'use strict';
const pluginTester = require('babel-plugin-tester');
const plugin = require('../lib/hash-id');

pluginTester({
	plugin,
	pluginName: 'inline-hash-id',
	babelOptions: {
		presets: [
			'react'
		]
	},
	tests: [
		{
			title: 'basic generate hash',
			code: `__hashId('🌈')`,
			snapshot: true
		},
		{
			title: 'with option',
			code: `__hashId('🌈', {uniqPerFile: false})`,
			snapshot: true
		},
		{
			title: 'with react #1',
			code: `
				React.createElement('div', {
					id: __hashId('root')
				});

				React.createElement('div', {
					id: __hashId('root', {uniqPerFile: false})
				});
			`,
			snapshot: true
		},
		{
			title: 'with react #2',
			code: `
				<body>
					<div id={__hashId('root')}></div>
				</body>
			`,
			snapshot: true
		},
		{
			title: 'inside function',
			code: `
				document.getElementById(__hashId('root'));
			`,
			snapshot: true
		}
	]
});
