// const fs = require('fs')
const http = require('http')
const chalk = require('chalk')
const url = require('url')

http.createServer((request, response) => {
    console.log(url)
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write('<del>hello world</del>'),
        response.end()
}).listen(5173, () => {
    console.log('Address: ' + chalk.blue('http://localhost:5173/'))
})