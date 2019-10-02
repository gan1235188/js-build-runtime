import webpack from 'webpack'

// export function build() {

// }

webpack({
    entry: './es6-test/index.js',
    mode: 'development',
    output: {
        path: __dirname,
        filename: 'dist/es6-test.js'
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js/,
                loader: require('./webpack-js-build-online-loader.js')
            }
        ]
    }
})