import fs from 'fs';
const parseEnv = () => {
    // Write your code here 
    console.log('give me two names!');
    process.stdin.on('data', function(data){
        //process.stdout.write('give me two names!');

        process.stdout.write(`RSS_name1=${data.toString().split(' ')[0]} , RSS_name2=${data.toString().split(' ')[1]}`)
         process.exit();
       })
};

parseEnv();