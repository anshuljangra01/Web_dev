
// Server 
// const http = require('http');
// const server1 = http.createServer((req, res)=>{
//     res.writeHead(200, {"content-type": "text/html"});
//     res.end('This is server 1 Running ');
//    });

// // Start server 
// server1.listen(3000,()=>{
//     console.log('Server Running at http://localhost:3000/');
// });   


// Server with navigation or conditions 

const http = require('http');
const server2 = http.createServer((req, res)=>{
   const {method, url} = req
   if(method == 'GET' && url  == '/'){
    res.writeHead(200, {"content-type": "text/html"});
    res.end('This is homepage')
   }
   else if(method == 'GET' && url  == '/about'){
    res.writeHead(200, {"content-type": "text/html"});
    res.end('This is about page')
   }
   else if(method == 'POST' && url  == '/signin'){
    const body = req;
    console.log(body)
    res.writeHead(200, {"content-type": "text/html"});
    res.end('Loged In successfully')
   }
   else if(method == 'GET' && url  == '/contact'){
    res.writeHead(200, {"content-type": "text/html"});
    res.end('This is contact page')
   }
});
server2.listen(3000, ()=> {
    console.log(' This is Server 2 listen on port no-3000 ')
});

// -------------------server with fs module
// const http = require('http');
// const fs =require('fs');
// const server3 = http.createServer((req, res)=>{
//   fs.readFile('text.txt',(err ,data)=>
// {
//     if(err){
//         res.write("Error Loading file");
//         res.end();
//         return;
//     }
//     res.write(data);
//     res.end();
// });

// });

// server3.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
// });