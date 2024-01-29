import fs from 'fs';
const rename = async () => {
    // Write your code here 
    fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', function (err){
        if (err) throw 'FS operation failed';
        console.log('File renamed');
        
    })

};

await rename();