import fs from 'fs';
const remove = async () => {
    // Write your code here 
    fs.unlink('src/fs/files/fileToRemove.txt', function (err){
        if (err)  throw 'FS operation failed'  ;
        console.log('file is deleted');
  })
};

await remove();