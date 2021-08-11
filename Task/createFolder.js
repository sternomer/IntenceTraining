const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';

function createFolder(){
    folderName = ps('enter the name of your folder:');
    fs.mkdir(`${folderpath}${folderName}`,function (err){
        if (err)throw err;
        
    })
}
module.exports= createFolder;