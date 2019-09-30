import { runTest, TestType } from '../testTools'
import { Validator } from './types'

const validator: Validator = {
    test(content: any): boolean {
        return runTest({
            expression: '(() => 1)()',
            type: TestType.noWrong
        })
    }
}

export default validator
