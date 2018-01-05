var fs = require('fs');

var maze = JSON.parse( fs.readFileSync('./maze1.json') );

console.log( maze );
//calculate the solution