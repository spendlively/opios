module.exports = {
    entry: "./index",
    resolve: {
        modulesDirectories: [
            "."
        ]
    },
    output: {
        filename: "build.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            }
        ]       
    },
    target: 'electron',
    watch: true
};
