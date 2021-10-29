const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'base of multiplication'
                })
                .option('l',{
                    alias:'list',
                    type: 'boolean',
                    default: false,
                    describe: 'list of multiplication table in console'
                })
                .option('u',{
                    alias:'until',
                    type: 'number',
                    default: 10,
                    describe: 'until the number you want to make the multiplication'
                })
                .check((argv, options) =>{
                    if(isNaN(argv.b)) {
                        throw 'The base is only a number'
                    }
                    return true;         
                })                
                .argv;

module.exports = argv;                