import http from 'https'

const server = http.createServer((req,res) => { 
res.end("<h1>SIH Internal</h1>")
});