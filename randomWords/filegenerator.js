const fs = require('fs');
const randomWords = require(`random-words`);
const readline = require('readline');

function file_generator(numOfFiles, numOfWords) {
    for (let i = 0; i < numOfFiles; i++) {
        fs.writeFile(`./create_file/file ${i+1} `, randomWords(numOfWords), function(err) {

            if (err) throw err;
        });
        console.log(`file ${i +1} has a ${numOfWords} words`);
        console.log(randomWords);
        numOfWords = numOfWords * 2;
    }
    // var numOffil = prompt(`enter the number of files you wan a create`);
    // var numberOfword = prompt(`enter the number of words`);

}
file_generator(2, 5);