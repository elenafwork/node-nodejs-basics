import fs from 'fs';
const create = async () => {
    // Write your code here
    fs.appendFile('src/fs/files/fresh.txt','I am fresh and young', function(err){
        if (err) console.error('FS operation failed');
        console.log('file is created');
        
    }) 
};

await create();