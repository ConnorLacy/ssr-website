import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app/app.mjs'

const __dirname = path.resolve()
const server = express()
const port = 8080

server.use('/assets', express.static(path.resolve(__dirname, 'dist')))
server.get('/', (req, res) => {
    const reactive = ReactDOMServer.renderToString(<App/>);
    const body = `
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
            </head>
            <body>
                <h1>Some other stuff</h1>
                <div id="app">${reactive}</div>
            </body>
            <script src="/assets/bundle.js"></script>
        </html>
    `
    res.send(body)
})
server.listen(port, () => console.log(`Your server is running on port ${port}`))