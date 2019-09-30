// import * as validators from './featureTest/index'
import featureTestValidators from './featureTest/index'

const content = {}
const featureTestResult = new Map()


Object.entries(featureTestValidators).forEach(([name, validator]) => {
    const testResult = validator.test(content)
    console.log(`${name}: ${testResult}`)
    featureTestResult.set(name, testResult)
})


// import config from './transformConfig'

// const transform = require('@babel/core').transform
// const plugins = Object.entries(config)

// transform()
