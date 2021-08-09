const oneLinerJoke= require('one-liner-joke');
const fs = require(`fs`);
const {Console}= require(`console`);
require(`dotenv`).config();



let numOfJokes = process.env.JOKE_AMOUNT || 50;
let jokeSubject =process.env.JOKE_SUBJECT;
console.log(jokeSubject + " " + numOfJokes);



function joke(numOfJokes){
    
    for(let i = 0; i <numOfJokes;i++){
        let getJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
        let convertToString = JSON.stringify(getJokeWithTag);
       
        fs.readFile(`./jokes.txt`,`utf8`,function(err,data){
            if(data.includes(convertToString))throw err;
            fs.appendFile(`jokes.txt`,`here is the joke: ${convertToString}\n`,function(err){
                if (err)throw err;
            })
        })
    }
}
if (numOfJokes < 50){   
    console.log('you must have at least 50 jokes')
    }
        else{
            joke(55);
        }
    
