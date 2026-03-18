const http = require('http');
const fs =require('fs');
const server3 = http.createServer((req, res)=>{
  fs.readFile('text.txt',(err ,data)=>
{
    if(err){
        res.write("Error Loading file");
        res.end();
        return;
    }
    res.write(data);
    res.end();
});

});

server3.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});