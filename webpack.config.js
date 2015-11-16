var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + "/lib",
	devtool: 'sourcemap',
	entry: [
		'./boot'
	],
	output: {
		path: __dirname + "/dist",
		filename: "app.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loaders: [ 'babel' ] },
			{ test: /\.json$/, loader: 'json-loader'},
			{ test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json', '.scss', '.css' ],
		moduleDirectories: [ 'lib', 'node_modules' ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Simplenote",
			templateContent: require( './index-builder.js' ),
			inject: false
		})
	],
	postcss: [ autoprefixer() ]
};