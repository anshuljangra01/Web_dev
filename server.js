
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


// // Server with navigation or conditions 

// const http = require('http');
// const server2 = http.createServer((req, res)=>{
//    const {method, url} = req
//    if(method == 'GET' && url  == '/Exercise7.2'){
//     res.writeHead(200, {"content-type": "html"});
//     res.end('This is homepage')
//    }
//    else if(method == 'GET' && url  == '/about'){
//     res.writeHead(200, {"content-type": "text/html"});
//     res.end('This is about page')
//    }
//    else if(method == 'POST' && url  == '/signin'){
//     const body = req;
//     console.log(body)
//     res.writeHead(200, {"content-type": "text/html"});
//     res.end('Loged In successfully')
//    }
//    else if(method == 'GET' && url  == '/contact'){
//     res.writeHead(200, {"content-type": "text/html"});
//     res.end('This is contact page')
//    }
// });
// server2.listen(3000, ()=> {
//     console.log(' This is Server 2 listen on port no-3000 ')
// });

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


// // server hendles request  (GET, POST,PUT,DELETE)
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/Exercise7.html') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Handling GET request' }));
    } 
    else if (req.method === 'POST' && req.url === '/data') {
        res.writeHead(201);
        res.end(JSON.stringify({ message: 'Handling POST request' }));
    } 
    else if (req.method === 'PUT' && req.url === '/data') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Handling PUT request' }));
    } 
    else if (req.method === 'DELETE' && req.url === '/data') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Handling DELETE request' }));
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

// Start server
server.listen(3000, () => {s
    console.log('Server running at http://localhost:3000');
});
