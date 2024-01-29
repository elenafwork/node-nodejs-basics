import fs from 'fs';
const read = async () => {
    // Write your code here 
    fs.readFile('src/fs/files/fileToRead.txt', function (err, data){
        if (err) throw 'FS operation failed';
        console.log(data.toString('utf8'))
    })
};

await read();