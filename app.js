const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs'); 
const colors = require('colors');

console.clear();

createFile(argv.b, argv.l, argv.u)
    .then(fileName => console.log(fileName.bgRed, ' was Created!'.bold.red))
    .catch( err => console.log(err));