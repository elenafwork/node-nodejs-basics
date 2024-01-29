import fs from 'fs';
//import path from 'path';
const create = async () => {
    // Write your code here
    fs.exists('src/fs/files/fresh.txt', function (exists ){
        if (exists) {
            console.error('FS operation failed');
        } else {
            fs.appendFile('src/fs/files/fresh.txt','I am fresh and young', function(err){
        if (err) throw err;
        console.log('file is created');
        
    }) 
        }
        
    })
    
    
};

await create();