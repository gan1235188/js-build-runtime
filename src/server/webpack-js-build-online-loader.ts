import { getOptions } from 'loader-utils'

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
}

module.exports = function(source: string) {
  console.log('run')
  const options = getOptions(this);

  // validateOptions(schema, options);

  // 对资源应用一些转换……

  return `export default ${ JSON.stringify(source) }`;
};