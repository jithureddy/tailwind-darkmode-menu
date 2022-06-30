const path = require('path')

module.exports = {
	entry: {
		index: './src/index.ts'
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
	},
	mode: 'production',
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'ts-loader',
				test: /\.tsx?$/,
			},
		],
	},
	output: {
		filename: '[name].js',
		globalObject: 'this',
		library: 'ui-components',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		alias: {
			react: path.resolve(path.join(__dirname, './node_modules/react')),
			'react-dom': path.resolve(path.join(__dirname, './node_modules/react-dom')),
		},
		extensions: ['.tsx', '.ts', '.js'],
	},
}
