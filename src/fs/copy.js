import fs from 'fs-extra';
var source='files';
var destination='files_copy';
const copy = async () => {
    // Write your code here 
   fs.copy('src/fs/files', 'src/fs/files_copy', function (err){
    if (err) throw 'FS operation failed';
    console.log('complete!');
    
    
   })
};

await copy();
