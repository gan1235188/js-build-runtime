export enum TestType {
    checkResult, //比较结果
    noWrong //不抛出错误
}

export type TestOption = {
    expression: string
    type?: TestType
    args?: any[]
    result?: any,
    resultCheckFn?: (expect: any, result: any) => boolean
}

const defaultTestOption = {
    expression: '',
    type: TestType.noWrong,
    args: [] as any,
    result: undefined as any,
    resultCheckFn: Object.is
}

function getTestOpt(opt: TestOption) {
    return {
        ...defaultTestOption,
        ...opt
    }
}

export function runTest(testOpt: TestOption = defaultTestOption): boolean {
    const opt = getTestOpt(testOpt)
    if(opt.type === TestType.noWrong) {
        return testNoWrong(opt)
    } else {
        return testCheckResult(opt)
    }
    
}

function testNoWrong(opt: TestOption): boolean {
    const fn = new Function(...opt.args, opt.expression)
    try{
        fn()
        return true
    }catch(e) {}

    return true
}

function testCheckResult(opt: TestOption): boolean {
    const fn = new Function(...opt.args, opt.expression)
    try{

        return opt.resultCheckFn(opt.resultCheckFn, fn())
    }catch(e) {}

    return false
}