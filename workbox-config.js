module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,png,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};