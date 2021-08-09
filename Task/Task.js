
const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const {join} = require('path');
const folderpath = './filesandfolders/';



   let exit = 0;
   while(exit==0){ 
    console.log('Select the action:\n\n1: Delete file\n2: Create file'+
    '\n3: Write text to a file\n4: Create folder \n5: Delete folder'+
     '\n6: Create a file in a folder\n7: Delete a file from a fold'+
     'er\n8: Union Files\n9: Log Off\n');
       option= ps();
       console.clear;
       switch(option){
           case('1'):
           const removeFile=require('./deleteFile');
           break;

           case('2'):
           const  createfile = require('./createFile');
           break;

           case('3'):
           const createFilewithdata = require('./createFileWithData');
           break;

           case ('4'):
            const createFolder = require('./createFolder');
            break;

            case('5'):
            const deletefolder = require('./deleteFolder');
            break;

            case('6'):
            const createFileinFolder = require('./createFileinFolder');
            break;

            case('7'):
            const deleteFileFromFolder = require('./deleteFileFromFolder');
            break;

            case('8'):
            const unionFiles = require('./unioFiles');
            break;

            case('9'):
            console.log('Thank you we hope you enjoyed');
            exit = 1;


            

       }
      
   }