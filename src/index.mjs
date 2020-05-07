import express from 'express';
import path from 'path';
const __dirname = path.resolve()

const server = express()
const port = 8080

server.use('/assets', express.static(path.resolve(__dirname, 'dist')))
server.get('/', (req, res) => {
    let body = `
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
            </head>
            <body>
                <h1>Some other stuff</h1>
                <div id="app"></div>
            </body>
        </html>
    `
    res.send(body)
})
server.listen(port, () => console.log(`Your server is running on port ${port}`))