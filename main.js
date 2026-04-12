//  Async Read module in node 
// const fs =require('fs');
// fs.readFile('demo.txt','utf-8',(err,data)=>{

// if(err){
//     console.error('Error reading file',err);
//     return ;
// }
// console.log(data);
// });


// Async  write module in node  
// const fs =require('fs');
// content  =" This is new for file update.  "
// fs.writeFile('text.txt',content,'utf-8',(err,data)=>{

// if(err){
//     console.error("Error occur  on writing file ",err);
//     return ;
// }
// console.log("File written successfully ");
// });

// //  sync  write module in node  
// const fs = require('fs');
// const content = "This is new for file update.";

// fs.writeFileSync('text1.txt', content, 'utf-8');
// console.log("File written successfully");

//  async append  file in fs module
// const fs =require('fs');
// content  =" This is new for file update. This is new line for append file or content   "
// fs.appendFile('demo.txt',content,'utf-8',(err,data)=>{
    
// if(err){
//     console.error("Error occur  on Appending that file ",err);
//     return ;
// }
// console.log("Data appended successfully ");
// });
// console.log("Done")

// //sync append  file in fs module
// const fs = require('fs');
// const content = "Appending new content to the file.\n";

// fs.appendFileSync('text1.txt', content, 'utf-8');
// {console.log(content);
// console.log("Content appended successfully");}
// console.log("Done")


// Delete the file with the help of fs molules

// const fs =require('fs');
// // content  =" This is new for file update. This is new line for append file or content   "
// fs.unlink('text.txt',(err)=>{

// if(err){
//     console.error("Error occur on Deleting that file ",err);
//     return ;
// }
// console.log("File deleted successfully ");
// });

// Update the file with the help of fs modules

// const fs =require('fs');
// fs.readFile('text.txt','utf-8',(err,data)=>{

// if(err) throw err;
// let updatedData = data.replace("old text" ,"new text");

// fs.writeFile('text.txt',updatedData,'utf-8',(err,data)=>{

// if(err) throw err; 
   
// console.log("File Updated successfully ");
// });

// });


// // Create and handle Directories
const fs = require('fs');

const dirName = 'MY_Directory';
fs.mkdirSync(dirName);
console.log(`Directory '${dirName}' created.`);
console.log(`Contents:`, fs.readdirSync(dirName));
fs.rmdirSync(dirName);
console.log(`Directory '${dirName}' deleted.`);

 