const path = require('path')

module.exports = {
  entry: {
    featureTest: './src/feature-test/index.ts'
  },
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'dist/feature-test.js'
  },
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main'],
    extensions: ['.ts', '.js']
  },
  devtool: false,
  devServer: {
    contentBase: './pages/',
    compress: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        include: path.resolve(__dirname, './src/'),
        loader: "ts-loader"
      }
    ]
  }
}