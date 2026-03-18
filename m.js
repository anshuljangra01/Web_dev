const http =require('http');
const server=http.createServer((req,res)=>{
    if(req.method==='POST' && req.url==='/api'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            console.log("Received body: ", body)
            res.writeHead(200,{'content-type':'text/plain'});
            res.end("Data received");
        })
    }else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("404 not found");
    }
});
server.listen(6000,()=>{
    console.log('Server running at http:/localhost:6000/api');
})
// const http =require('http');
// const server=http.createServer((req,resizeBy)=>{
//     if(req.method==='GET' && req.url==='/api'){
//         const data={message:'hello,JSON!'};
//         resizeBy.writeHead(200,{'content-type':'application/json'});
//         resizeBy.end(JSON.stringify(data));
//     }
// });
// server.listen(6000,()=>{
//     console.log('Server running at http:/localhost:6000/api');
// })