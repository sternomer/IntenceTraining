const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';


function deleteFile(){
    let fileName = ps('enter the file you want to erase : ');
    console.log(`enter ${fileName}` )
    // const folderpath = './filesandfolders/';
    
     
    fs.unlink(`${fileName}`,function (err){
        if(err)throw err;
        
    })

}
module.exports= deleteFile;