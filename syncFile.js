const fs =require('fs');
fs.readFileSync('text.txt','utf-8',(err,data)=>{

if(err){
    console.error('Error reading file',err);
    return ;
}
console.log(data);
});

// Async operations 

const fs =require('fs');
fs.readFile('text.txt','utf-8',(err,data)=>{

if(err){
    console.error('Error reading file',err);
    return ;
}
console.log("We reading the file")
console.log(data);
});