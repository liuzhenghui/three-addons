const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "ThreeAddons.min.js",
        library: "ThreeAddons",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["babel-loader", "ts-loader"],
                exclude: [path.resolve(__dirname, "node_modules")]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
    // devtool: "inline-source-map"
};