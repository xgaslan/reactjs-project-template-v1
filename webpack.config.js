const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src/main/main.tsx",
	devtool: "inline-source-map",
	devServer: {
		port: "3000",
		static: {
			directory: path.join(__dirname, "public"),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				use: "json-loader",
			},
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.(ts)x?$/,
				exclude: /node_modules|\.d\.ts$/,
				use: {
					loader: "ts-loader",
					options: {
						compilerOptions: {
							noEmit: false,
						},
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: ["file-loader?name=[name].[ext]"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			favicon: "./public/favicon.ico",
			filename: "index.html",
			manifest: "./public/manifest.json",
		}),
	],
}
