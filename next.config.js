const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');

module.exports = withTypescript(
	withCss({
		webpack: (config) => {
			return config;
		}
	})
);
