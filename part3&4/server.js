const http = require('http');
const fs = require('fs');

const portNumber = 3000;

const server = http.createServer((req,res) =>{

    // routing
    let path = `./views/`;
    switch(req.url){
        case `/`:
            path+=`index.html`;
            res.statusCode = 200;
            break;
        case `/about`:
            path+=`about.html`;
            res.statusCode = 200;
            break;
        // redirect
        case `/about-me`:
            path+=`about.html`;
            res.statusCode = 301;
            res.setHeader(`Location`,`/about`);
            res.end();
            break;
        default:
            path+=`404.html`;
            res.statusCode = 404;
            break;
    }

    // set header content-type
    res.setHeader('Content-Type','text/html');
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });
});

server.listen(portNumber,'localhost',()=>{
console.log(`Listening for request on port ${portNumber}`);
});