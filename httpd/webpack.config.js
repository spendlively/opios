
module.exports = {

	entry: './app',
    output: {
        filename: "build.js",
    },
    target: 'electron',
    watch: true,


    resolve: {
        alias: {
            jquery: "./lib/jquery-3.1.0"
        }
    }
}
