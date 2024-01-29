import fs from 'fs';
import {stdout} from 'node:process';
const read = async () => {
    // Write your code here 
    var rs=fs.createReadStream('src/streams/files/fileToRead.txt');
    rs.on('data', function(data){
        console.log('open');
        
        process.stdout.write(data)
    })
};

await read();