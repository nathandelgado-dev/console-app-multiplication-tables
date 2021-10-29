const fs = require('fs');
const colors = require('colors');

const createTable = async(base, list, until) => {
    let totalTable = '';
    let totalTableTxt = '';
    
try {
    

    for(let i= 1; i <= until ; i++){ 
        totalTable += `${colors.bold(base)} x ${colors.bold(i)} = ${colors.bold(i*base)}\n`;
        totalTableTxt += `${base} x ${i} = ${i*base}\n`;
    }
    
    if(list) {
        const headerTable = `=====================\n     Table of ${base}\n=====================\n`.bold;
        console.log(headerTable,totalTable);
    }

    const headerTableTxt = `=====================\n     Table of ${base}\n=====================\n`;
    const fileTxt = headerTableTxt + totalTableTxt

    fs.writeFileSync(`./output/table-${base}.txt`, fileTxt)
    
    return `table-${base}.txt`;
} catch (err) {
    throw err;
}
}

module.exports = {
    createFile: createTable
}