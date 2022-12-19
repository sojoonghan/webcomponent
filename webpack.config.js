const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")


module.exports = (env, argv) => {
    return {
        mode: "development", //production | development |none
        entry: ["@babel/polyfill", './src/index.js'],
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js",
            clean: true,
        },
        target: "web",
        devtool: argv.mode === "production" ? "cheap-source-map" : "inline-source-map",
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'build')
            },
            port: 9999,
            compress: true,
            client: {
                overlay: {
                    errors: true,
                },
            },
            hot: true,
            open: true,
            liveReload: true,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        }
                    },
                },
                {
                    test: /\.html$/i,
                    use: ["raw-loader"]
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
            }),
            new CleanWebpackPlugin(),
            // new CopyPlugin({
            //     patterns: [
            //         { from: "src/assets", to: "assets" },
            //         { from: "src/style.css", to: "style.css" }
            //         { from: "src/index.css", to: "index.css" }
            //     ],
            // }),
        ],
        optimization: {
            minimize: argv.mode === "production",
        },
    }
}
