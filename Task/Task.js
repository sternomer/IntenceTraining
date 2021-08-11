
const fs = require('fs');
const path = require(`path`);
const ps = require('prompt-sync')();
const { join } = require('path');
const folderpath = './filesandfolders/';
const removeFile = require('./deleteFile');
const unionFiles = require('./unionFiles');
const deleteFileFromFolder = require('./deleteFileFromFolder');
const createFileinFolder = require('./createFileinFolder');
const deletefolder = require('./deleteFolder');
const createFolder = require('./createFolder');
const createFilewithdata = require('./createFileWithData');
const createfile = require('./createFile');



let exit = 0;
while (exit == 0) {
  console.log('Select the action:\n\n1: Delete file\n2: Create file' +
    '\n3: Write text to a file\n4: Create folder \n5: Delete folder' +
    '\n6: Create a file in a folder\n7: Delete a file from a fold' +
    'er\n8: Union Files\n9: Log Off\n');
  option = ps();
  console.clear;
  switch (option) {
    case ('1'):
      removeFile();
      break;

    case ('2'):
      createfile();
      break;

    case ('3'):
      createFilewithdata();
      break;

    case ('4'):
      createFolder();
      break;

    case ('5'):
      deletefolder();
      break;

    case ('6'):
       createFileinFolder();
      break;

    case ('7'):
     deleteFileFromFolder();
      break;

    case ('8'):
     unionFiles();
      break;

    case ('9'):
      console.log('Thank you we hope you enjoyed');
      exit = 1;




  }

}