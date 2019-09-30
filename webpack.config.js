const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
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