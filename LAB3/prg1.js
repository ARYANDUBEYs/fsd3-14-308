import http from 'http'

const server = http.createServer((req,res)=>{
    console.log('Welcome to Node JS')
    console.log(req.url);
    res.end("hello");
});
const PORT = 4444;

server.listen(PORT, () => console.log("Server is running....."));