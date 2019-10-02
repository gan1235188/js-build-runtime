import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'

const app = express()
const distPath = path.resolve(__dirname, '../../dist/')
const pagesPath = path.resolve(__dirname, '../../pages/')

app.use(express.static('../'))

app.get('/', (req, res) => {
  setHeader(res, HttpHeaderContentTypeValue.Html)
  res.send('hollow express')
})

app.get('/pages/:path', (req, res) => {
  const html = fs.readFileSync(`${pagesPath}/${req.params.path}`).toString()
  setHeader(res, HttpHeaderContentTypeValue.Html)
  res.send(html)
})

// app.get('/feature-test', (req, res) => {
//     const html = fs.readFileSync('./index.html')
//     setHeader(res, HttpHeaderContentTypeValue.Html)
//     res.send(html)
// })

app.get('/dist/:path', (req, res) => {
  setHeader(res, HttpHeaderContentTypeValue.Js)
  const jsContent = fs.readFileSync(`${distPath}/${req.params.path}`)
  res.send(jsContent)
})

const server = app.listen(81)

process.on('beforeExit', exit('beforeExit'))
process.on('exit', exit('exit'))
process.on('SIGKILL', exit('SIGKILL'))
process.on('SIGLOST', exit('SIGLOST'))
process.on('disconnect', exit('disconnect'))
process.on('SIGHUP', exit('SIGHUP'))
process.on('SIGINT', exit('SIGINT'))

let isKilled = false
function exit(event: string) {
  console.log(event)
  
  return () => {
    !isKilled && server.close()
    isKilled = true
    process.exit()
  }
}


enum HttpHeaderKey {
  ContentType = 'Content-Type'
}

enum HttpHeaderContentTypeValue {
  Html = 'text/html; charset=utf-8',
  Js = 'application/javascript; charset=utf-8'
}

function setHeader(res: express.Response, type: HttpHeaderContentTypeValue) {
  res.setHeader(HttpHeaderKey.ContentType, type)
}