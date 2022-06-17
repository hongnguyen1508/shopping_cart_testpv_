const {readFileSync} = require('fs');

let data = () => JSON.parse(readFileSync('src/app/data/shoes.json'));
module.exports = {data};