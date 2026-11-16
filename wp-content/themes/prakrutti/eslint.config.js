const wordpress = require( '@wordpress/eslint-plugin' );

module.exports = [
	{ ignores: [ 'node_modules/**', 'vendor/**', 'assets/js/**/*.min.js' ] },
	...wordpress.configs.recommended,
	{
		files: [ 'assets/js/**/*.js' ],
		languageOptions: {
			sourceType: 'script',
			globals: {
				window: 'readonly',
				document: 'readonly',
				prakruttiData: 'readonly',
			},
		},
	},
];
