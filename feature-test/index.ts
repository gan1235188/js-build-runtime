// import * as validators from './featureTest/index'
import featureTestValidators from './featureTest/index'
import { Validator } from './featureTest/types'
import { runTest as runValidator, TestType } from './testTools'

interface FeatureTestOptions {
    validators: Validator[]
}

// demo
const myValidators: Validator[] = [
    {
        name: 'functionBind',
        test(content: any) {
            return runValidator({
                type: TestType.noWrong,
                expression: `{}::()=>{}`
            })
        }
    }
]
featureTest({}, { validators: myValidators })

export function featureTest(content: any, options: FeatureTestOptions) {
    let validators = options ? options.validators || [] : []
    validators = featureTestValidators.concat(validators)
    validators = uniqueValidators(validators)

    const testResult = runTest(content, validators)
    console.log(testResult)
}

function runTest(content: any, validators: Validator[]) {
    const featureTestResult = new Map<string, boolean>()

    validators.forEach(({name, test}) => {
        const testResult = test(content)
        console.log(`${name}: ${testResult}`)
        featureTestResult.set(name, testResult)
    })

    return featureTestResult
}

function uniqueValidators(validators: Validator[]): Validator[] {
    const result:Validator[] = []

    validators.map(validator => {
        if(!result.find((item) => item.name === validator.name)) {
            result.push(validator)
        }
    })

    return result
}


function uniqueValidators__TEST() {
    const result = uniqueValidators([
        {
            name: '1',
            test: () => true
        },
        {
            name: '1',
            test: () => true
        }
    ])

    console.log(result)
}

// uniqueValidators__TEST() //right

// import config from './transformConfig'

// const transform = require('@babel/core').transform
// const plugins = Object.entries(config)

// transform()
