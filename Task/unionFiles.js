const fs = require('fs');
const { createFile } = require('fs-extra');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';


function unionFiles() {

    let userFirstFileName = ps('enter the first file: ');
   let userSecondFileName = ps('enter the second file name: ');
     if(userFirstFileName=='' || userSecondFileName==''){
     console.log('you must enter values');
     }
    
  
  else if(!fs.existsSync(`${folderpath}${userFirstFileName}`) || !fs.existsSync
   (`${folderpath}${userSecondFileName}`)){
       console.log('one of the files dont exist');
      
           }
   else{
    let secondFileData = fs.readFileSync(`${folderpath}${userSecondFileName}`,'utf8');
    fs.appendFile(`${folderpath}${userFirstFileName}`,`\n${secondFileData}`,function(err){
        if (err) throw err;
        console.log('the data passed succesfully');
    })
        fs.unlink(`${folderpath}${userSecondFileName}`,function (err){
            if(err)throw err;

    
})
   }
   
}

   unionFiles();