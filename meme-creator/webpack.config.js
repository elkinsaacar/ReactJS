const path = require('path');
const MiniCSSPlugin = require('mini-css-extract-plugin');
const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
	entry: path.join(entryPath, 'index.js'),
	output: {
		filename: 'bundle.js',
		path: outputPath
	},
	plugins:[
		new MiniCSSPlugin(),
	],
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(css|scss|sass)$/,
				//loaders: ['style-loader', 'css-loader', 'sass-loader']
				//loaders: [MiniCSSPlugin.loader, 'css-loader', 'sass-loader']
				use:[
					{
						loader: MiniCSSPlugin.loader,
						options: {
							publicPath: outputPath
						}
					},
					'css-loader', 'sass-loader'
				]
			}
		]
	},
	devServer:{
		contentBase: outputPath,
		historyApiFallback: true
	},
	resolve:{
		extensions: ['.jsx', '.js']
	}
}