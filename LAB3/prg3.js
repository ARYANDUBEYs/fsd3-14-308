import http from "https";

const server =http.createServer(req,res=>{

    if(http.url=="/"){
        res.end("<h1>homepage</h1>");
    }

    else if(http.url=="/about"){
        res.end("<h2>about page</h2>")
    }

    else if(http.url=="/product"){
        res.end(`<h1>mobile phone</h1>
            <h2>price :25000 </h2>
            <p>discount :5%</p>
            <a href='#'>buy now</a>"`)
    };

    else{
        res.statusCode=404;
        res.end(`<h1>404- page not found</h1>
            <p>page not found</p>
         `)}


});


server.listen(4004,()=>{
    console.log("server running on http://localhost:4004");
})