const {readFileSync} = require('fs');

let data = () => JSON.parse(readFileSync('src/app/data/shoes.json'));
console.log(data()) 
module.exports = {data};