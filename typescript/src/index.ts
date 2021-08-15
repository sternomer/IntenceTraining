import config from './config';
import express = require('express');
import * as bodyParser from 'body-parser';
const app = express();
const env = require("dotenv").config();
var isprime = require('isprime');
const path = require('path');
app.use(bodyParser.json());
const port = process.env.SERVER_PORT || config.PORT ;
// app.set('views',path.join('/home/omer/Desktop/typescript/views'));
app.set('view engine','pug');




app.post('/api/numbers/prime/validate', (req:any, res:any) => {
    let NumberProperties:number = req.body;
    let numberValue: number[] = Object.values(NumberProperties);
   
    
    for(let i = 0;  i < numberValue.length;i++) {
      let numberResult:boolean = isprime(numberValue[i]);
      if(numberResult ===false) {
        res.send(false);
        break;
      }
    }
    res.send (true);
})

app.get('/api/numbers/prime/', (req:any, res:any) => {
    let amountValue:number = (req.query.amount); 
    let allPrimeNumbers:number[]=[];
    
    if(amountValue <= 32){
      for (let i = 1; allPrimeNumbers.length< amountValue; i++) {
        let myNewprimeNumber:number = i;
        let isTheNumberPrime :boolean = isprime(i);
    
      
      if(isTheNumberPrime === true) {
        allPrimeNumbers.push(myNewprimeNumber);
       
        
      }
    }
    
} 
res.send(allPrimeNumbers); 
  
})
app.get('/api/numbers/prime/display', function (req, res) {
  
    let allPrimeNumbers:number[]=[2,3,5,7,11,13,17,19,23,29];
    
    
    
   var number1 :number=allPrimeNumbers[0]; 
   var number2 :number=allPrimeNumbers[1]; 
   var number3 :number=allPrimeNumbers[2]; 
   var number4 :number=allPrimeNumbers[3]; 
   var number5 :number=allPrimeNumbers[4]; 
   var number6 :number=allPrimeNumbers[5]; 
   var number7 :number=allPrimeNumbers[6]; 
   var number8 :number=allPrimeNumbers[7]; 
   var number9 :number=allPrimeNumbers[8];
   var number10 :number=allPrimeNumbers[9];  
    res.render('index', { number1,number2,number3,number4,number5,number6,number7,number8,number9,number10 });
  
   
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

