const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';

function deleteFileFromFolder(){
    let fileName = ps('enter the file you want to erase : ');
    // const folderpath = './filesandfolders/';
    
     
    fs.unlink(`${folderpath}${fileName}`,function (err){
        if(err)throw err;
        console.log(folderpath + fileName);

    })


}
module.exports=deleteFileFromFolder();