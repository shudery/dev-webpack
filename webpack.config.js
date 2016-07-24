var path = require('path');
var webpack = require('webpack');
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: './src/main.js',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./src/main.js' // Your appʼs entry point
	],
	output: {
		filename: './build/bundle.js'
	},
	//target: 'node',
	module: {
		loaders: [{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				loaders: ['react-hot', 'jsx?harmony'],
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.s(a|c)ss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, // use ! to chain loaders
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			} // inline base64 URLs for <=8k images, direct URLs for the rest
		]
	},
	plugins: [
		// new webpack.DefinePlugin({
		// 	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
		// }),
		new webpack.HotModuleReplacementPlugin(),
		//提取多个入口文件的公共脚本部分
		//new webpack.optimize.CommonsChunkPlugin('common.js'),
		// new HtmlwebpackPlugin({
		// 	title: 'Webpack-demos',
		// 	filename: 'index.html'
		// }),
		// new OpenBrowserPlugin({
		// 	url: 'http://localhost:8080'
		// }),

		//压缩代码会增加打包代码的时间
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// })

	],
	resolve: {
		// you can now require('file') instead of require('file.coffee')
		extensions: ['', '.js', '.json', '.jsx']
	}
};