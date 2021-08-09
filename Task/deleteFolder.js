const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';

function deleteFolder(){
    folderName = ps(`enter the name that you want to erase`);
    fs.rmdir(`${folderpath}${folderName}`,function (err){
        if(err) throw err;
        console.log('the folder was erased');
    });
}
module.exports=deleteFolder();