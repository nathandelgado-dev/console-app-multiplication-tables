const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs'); 
const colors = require('colors');

console.clear();

//traer el argumento desde consola
/* const [, , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=') */



createFile(argv.b, argv.l, argv.u)
    .then(fileName => console.log(fileName.bgRed, ' was Created!'.bold.red))
    .catch( err => console.log(err));