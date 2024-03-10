const fs = require('fs');

// uncomment this if you wanna see the different chunks read at once using the readStream function
// var temp = 0;
const readStream = fs.createReadStream('./temp.txt',{ encoding: 'utf8'});
const writeStream = fs.createWriteStream('./w2temp.txt');

//piping
    // this one line code represents these:
    // readStream.on('data',(chunk)=>{
    //     temp++
    //     writeStream.write(`\n\n-----CHUNK ${temp}-----\n\n`)
    //     writeStream.write(chunk);
    // });
readStream.pipe(writeStream);