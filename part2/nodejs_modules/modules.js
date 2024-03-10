//import people object only from people.
const { people } = require('./people')
console.log(people);

//import all the objects exported by people.js
const xyz = require('./people')
console.log(xyz); //output object of xyz
console.log(xyz.people,xyz.ages); //output fields of the object called inside xyz

//os is a module already provided by Node, but this line explicitly imports the os module to this file
const os = require('os');
console.log(os);