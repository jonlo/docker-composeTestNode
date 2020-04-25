const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	plugins: [
		new require('copy-webpack-plugin')([
			{ from: 'src/index.html' }
		])
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080
	},
	watch: false
};

