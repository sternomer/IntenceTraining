const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';

function createFilewithData(){
    fileName = ps('enter the file name:');
    let data = ps('enter the data : ');
    fs.writeFileSync(`${folderpath}${fileName}`,data);
    return fileName;
}
module.exports = createFilewithData();