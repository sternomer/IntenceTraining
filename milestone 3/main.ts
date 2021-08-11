import { log } from "console";
import express from "express";
// import config from './config';

const app = express();
const POST_PATH : string = 'api/numbers/prime/validate';
const GET_PATH :string = 'api/numbers/prime?amount=n' ;
const env = require("dotenv").config();
const isPrime = require('prime-number')
const port = process.env.SERVER_PORT || 3000;




app.use(express.json);
app.use(express.text);

app.post(POST_PATH,(req:any,res:any)=>{
  let bodyNumber:number = req.body;
  let bodynumobject = Object.values(bodyNumber);
  let isTheNumberPrime:boolean[]=[];  

  bodynumobject.forEach(value => {
    isTheNumberPrime.push(isPrime(value));  
  })
  res.send(isTheNumberPrime);
})

app.listen(port,()=>console.log('the server running'));



