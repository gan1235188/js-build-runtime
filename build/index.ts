import * as webpack from 'webpack'
import * as path from 'path'
import transformConfig, { featureTransformType } from './transformConfig'

export default function(specialTransformConfig: featureTransformType = transformConfig) {
  const config = getWebpackConfig(specialTransformConfig)

  webpack(config, (err, stats) => {
    if (err) {
      console.error(err)
    }
  })
}


function getWebpackConfig(specialTransformConfig: featureTransformType) {
  const defaultConfig: webpack.Configuration = {
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
                specialTransformConfig,
                envName: 'development',
              }
            }
          ]
        }
      ]
    }
  }

  return defaultConfig
}
