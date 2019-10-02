import * as webpack from 'webpack'
import * as path from 'path'
import transformConfig from './transformConfig'

// export function build() {

// }
const config: webpack.Configuration = {
  entry: './test-code/index.js',
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'dist/test-code/index.js'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./webpack-loader/webpack-js-build-online-loader.js'),
            options: {
              transformConfig,
              envName: 'development',
            }
          }
        ]
      }
    ]
  }
}

webpack(config, (err, stats) => {
  if (err) {
    console.error(err)
  }
})
