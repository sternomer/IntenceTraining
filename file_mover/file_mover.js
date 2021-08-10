const {promisify} = require('util');
const fs = require('fs');
const {join} = require('path');
const mv = promisify(fs.rename);





function moveThem (){
    const file_to_move = join(__dirname,'./file_to_move');
    const target = join(__dirname,'./moved_files');
    const fileNames = fs.readdirSync(file_to_move);
    for(let i =0;i < fileNames.length;i++){
        fs.rename(`${file_to_move}/${fileNames[i]}`,`${target}/${fileNames[i]}`,function (err){
            if (err) throw err;
        })
        fs.appendFile(`./moved_files.txt`,`${fileNames[i]}\n`,function (err){
            if (err) throw err
        })
        console.log(`${fileNames[i]}`);
        


    }
   
}

moveThem();

setInterval(moveThem,1500);