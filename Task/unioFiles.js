const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';

function unionFiles() {
   
    let firstfile = createFilewithData();
    let secondfile = createFilewithData();
    let secondFileData = fs.readFileSync(`${folderpath}${secondfile}`,'utf8');
    fs.appendFile(`${folderpath}${firstfile}`,`\n${secondFileData}`,function(err){
        if (err) throw err;
        console.log('the data passed succesfully');
    })
        fs.unlink(`${folderpath}${secondfile}`,function (err){
            if(err)throw err;

    
})
}
module.exports=unionFiles();