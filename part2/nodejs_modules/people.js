const people = ['yoshi','ryu','chun-li','mario'];
const ages = [20, 25, 30, 35];

//export people and ages, without module.exports, you'll only be running the content of people.js once in module.js
module.exports = {
    people, ages
};