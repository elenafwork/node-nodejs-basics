import fs from 'fs-extra';

const copy = async () => {
    // Write your code here
    fs.access('src/fs/files_copy', function (err){
        if (!err) {
        console.error('FS operation failed');
        }else {
            fs.copy('src/fs/files', 'src/fs/files_copy', function (err){
           if (err) throw 'FS operation failed';
           console.log('complete!');

        })
    }
    }) 
  
    
    
   
};

await copy();
