import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'

const app = express()
const distPath = path.resolve(__dirname, '../../dist/')
const pagesPath = path.resolve(__dirname, '../../pages/')

app.get('/', (req, res) => {
    res.send(JSON.stringify(req.headers, null, 2))
})

app.get('/pages/:path', (req, res) => {
    const html = fs.readFileSync(`${pagesPath}/${req.params.path}`).toString()

    setHeader(res, HttpHeaderContentTypeValue.Html)
    res.send(html)
})

app.get('/feature-test', (req, res) => {
    setHeader(res, HttpHeaderContentTypeValue.Html)
})

app.get('/dist/:path', (req, res) => {
    setHeader(res, HttpHeaderContentTypeValue.Js)
    res.send(fs.readFileSync(`${distPath}/${req.params.path}`))
})

app.listen(81)


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