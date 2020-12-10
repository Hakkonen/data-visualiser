const path = require("path")

const mode = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
    // development mode makes shit easier to read when devving
    mode: mode,
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings this will reference .babelrc
                    loader: "babel-loader"
                }
            }
        ]
    },
    // source map provides original module of code
    devtool: "source-map",

    // devServer: {
    //     contentBase: "./dist"
    // }
}