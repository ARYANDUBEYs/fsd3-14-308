import http from 'http'

const server=http.createServer(async(req,res)=>
{
    console.log("method:",req.method)
    if(req.url === '/' && req.method==="GET")
    {
        res.end("<h1>Product details</h1>")
    }
    
    else
    {
        res.statusCode=404
        res.end("Not found")
    }
})
server.listen(3000,()=>console.log("Server is running...."))