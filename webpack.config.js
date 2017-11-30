module.exports = {
	"entry": "./index.js","output": "./bundle.js",
	module:{
		loaders:[
			{
				test: /\.jsx?/,
				use: [
					{
						loader:'babel-loader'
					}
				]
			},
			{
				test:/\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			}
			
		]
	},
	devServer:{
		historyApiFallback:true
	},
	devtool: 'eval'
}
