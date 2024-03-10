
//global object properties and available methods
// run once after three seconds
setTimeout(() =>{
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

// run each second
const int = setInterval(()=>{
    console.log('in the interval')
},1000);

console.log(__dirname);
console.log(__filename);
//endof global object properties and available methods