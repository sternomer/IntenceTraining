const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';

function createFileinFolder(){
    fileName = ps('enter the name of your file :');
    fs.writeFileSync(`${folderpath}${fileName}`,'');
    
}
module.exports= createFileinFolder();
