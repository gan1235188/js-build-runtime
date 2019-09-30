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

    // html.replace('</body>', "")

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(html)
})

app.get('/dist/:path', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8')
    res.send(fs.readFileSync(`${distPath}/${req.params.path}`))
})

app.listen(81)