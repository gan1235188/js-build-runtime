import * as webpack from 'webpack'
import * as path from 'path'
import transformConfig, { featureTransformType } from './transformConfig'

let specialTransformConfig: featureTransformType

interface dynamicProperty {
  [key: string]: boolean
}

export async function build(featureMap: dynamicProperty, specialWebpackConfig: any = {}) {
  const pluginConfig = createSpecialPluginConfigByFeatureMap(featureMap, specialTransformConfig)
  const specialConfig = getWebpackConfig(pluginConfig)

  return new Promise((resolve, reject) => {
    webpack({
      ...specialConfig,
      ...specialWebpackConfig
    }, (err, stats) => {
      if (err) {
        reject(err)
        console.error(err)
        return
      }

      resolve()
    })
  })
}

export function setTransformPlugin(_specialTransformConfig: featureTransformType = transformConfig) {
  // const config = getWebpackConfig(specialTransformConfig)
  // specialConfig = config
  specialTransformConfig = _specialTransformConfig
}

function createSpecialPluginConfigByFeatureMap(featureMap: dynamicProperty, specialTransformConfig: featureTransformType) {
  const result: featureTransformType = {}

  Object.keys(specialTransformConfig).forEach(key => {
    if(!featureMap[key]) {
      result[key] = specialTransformConfig[key]
    }
  })

  return result
}


function getWebpackConfig(specialTransformConfig: featureTransformType) {
  const defaultConfig: any = {
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
