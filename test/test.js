import test2String from './test2'

const test = () => alert(this.test)

class Bork {
    #privateProperty
    #privateMethod() {
        
    }
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    };
}

const reservedKey = {
    default: 'default1'
}

reservedKey.const = "test2"

let a1 =  0o07;
if(true) {
    function blockFunction() {}

    var _blockFUnction = 'a'
}
blockFunction()

test instanceof blockFunction

async function *testG() {
    await 2
    yield 10
}

const obj = {
    objTest: () => {},
    ['x' + 2]: 'x2'
};

const mathResult = 3 ** 2;

for(var i of {x: 1}) {

}

const { ObjectRest, ...ObjectRest2 } = {
    ObjectRest: '1',
    x: 2,
    y: 3
};

/./s.test('\n')

const { objTest } = obj
const arr1 = [1, 2, ...[3, 4,5]]
const [a, b, c, ...d] = [1,2,3,3,4,5,6,7]

async function testA() {
    return await new Promise(resolve => {
        resolve(10)
    })
}

try{
    throw 1
}catch{
    console.log(2)
}

/\p{Unified_Ideograph}/u.test('我的国')


var s = '吉';
 
/^.$/.test(s); // false
/^.$/u.test(s); // true

export default 43

const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

@Decorator()
class NewTarget extends Object{
    constructor() {
        super()
        console.log(new.target)
    }
}

async function *asyncGenerator() {
    await 1;
    yield 2
}

async function runAwait() {
    const runAsyncGenerator = asyncGenerator()
    const runAsyncGeneratorResult = await runAsyncGenerator.next()
}

const getOperation = {
    _test: '',
    get test() {
        console.log('get')
        return 'test'
    },

    get test1() {
        console.log('test1')
    },

    set test(value ) {
        console.log('set')
        this._test = value
    }
}

function TestNewTarget() {
    new.target
}

function parameters(x = 1, { a }, ...list) {
    console.log(x, a, list)
}

const abstract = 3

const shorthandTest = {
    s
}

const stickReg = /s/y

const templateLiterals = `test${parameters(2, { a: 3 }, 4, 5)}`

typeof Symbol === 'symbol'


export v from 'fs'
export * as n from 'fs'
export { writeFile as w } from 'fs'

a ||= 3
a &&= 2

const someDeepData = obj?.test?.name?.realName

function add(x) {
    return x + 1
}

let result = 1 |> add |> add |> add

function add2(x) {
    return (y) => {
        return x + y
    }
}

let result1 = 1 |> add(2) |> add(3) |> add(4)

const nullish = obj ?? 'default'

function *functionSent() {
    var result = function.sent;
    var result2 = yield 10
}


1_000_000_000
0.0_1

const throwExpression = 1 || throw new Error(1)

function testPartial(x, y) {
    return x + y
}

const partialFn = testPartial(1, ?);
const testPartial2 = testPartial.bind(this, 1)

const partialFn1 = function(x) {
    testPartial(1, x)
}
partialFn(2)

const doResult = do {
    if(1) {
        'a'
    } else {
        'b'
    }
}