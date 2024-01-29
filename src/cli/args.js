const parseArgs = () => {
    // Write your code here 
    const propsNames=['--propName value','--prop2Name value2'];
    let answers=[] ; 
    let i=0;
    function asking(i){
        process.stdout.write(propsNames[i]);
    };
    process.stdin.on('data', function(data){
      
            answers.push(data.toString());
            if (answers.length<propsNames.length){
                asking(answers.length);
            }else{
                process.exit();
            }
            
          
    })
    
        
    


    process.on('exit', function(){
        process.stdout.write(`propName is ${answers[0]}, prop2Name is ${answers[1]}`)
    });

    asking(0);
};

parseArgs();