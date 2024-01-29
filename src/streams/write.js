import fs from 'fs';

const write = async () => {
    // Write your code here 
    let information;
    var myWrites=fs.createWriteStream('src/streams/files/fileToWrite.txt');
    console.log('write smthing');
    process.stdin.on('data', function(data){
     //
      //information='\n'+data.toString().trim()+'\n';
      myWrites.write('\n'+data.toString().trim()+'\n')
      process.exit();
    })
   
    

   // 
};

await write();