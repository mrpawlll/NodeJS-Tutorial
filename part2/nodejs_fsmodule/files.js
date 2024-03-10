const fs = require('fs');
//reading files
fs.readFile('./docs/Test.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

    // This is run before fs.readFile() because Node works asynchronously, meaning that it can run multiple processes at once.
    // Therefore, before even waiting for fs.readFile to even finish, Node continous to execute the next lines.
console.log('Ran before y\'all lol');



//writing files
    //callback functions are important because most functions are ran as asynchronously in Node, therefore there needs to be error handling to these functions
fs.writeFile('./w3Test.txt', 'I\'m writing fuckers to this', (err)=>{
    if(err){
        console.log(err);
    }
    console.log('File written');
});



//directories creation and deletion
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Directory ./assets created');
    });
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Directory ./assets deleted');
    })
}



//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    // there's a new function for fs called fs.rm you can use, which does not necessarily require a callback function to run. it can be ran asynchronously too
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File ./docs/deleteme.txt deleted");
    });
}else{
    fs.writeFile('./docs/deleteme.txt','',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File ./docs/deleteme.txt created");
    });
}