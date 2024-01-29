import fs from 'fs';
var filesList=[];
const list = async () => {
    // Write your code here 
    fs.access('src/fs/files', function (err) {
        if (err) console.error('FS operation failed');
    })
    fs.readdir('src/fs/files', function (err,files){
        if (err) {
        throw err;
        } else {
        files.forEach(file => filesList.push(file) ) 
           console.log(filesList);
           
        };
        
        })
       
};

await list();