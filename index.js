// import JsFeaturePolyfillRuntime from 'xxx'
import transformConfig from './src/transformConfig'
import webpack from 'webpack'

//如何知道用户浏览器支持的浏览器特性？如何优化测试时间？
//1，缓存测试结果（多久过期？）
//2，使用worker测试
//3，当缓存过期或者不存在时才启动测试
//4，当缓存的测试结果不存在时，启用全编译版本