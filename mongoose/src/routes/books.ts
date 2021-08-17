import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import Books from '../models/books';
import author from '../models/author';

const router = express.Router();

//geting All
router.get('/',async(_req:Request,res:Response)=>{
    await  new Books({name:'a',}).save();
    const books =await Books.find({});
    res.send(books);
})

//getting One
router.get('/:id',(req:Request,res:Response)=>{
    res.send(req.params.id)
    
})

//Creating one
router.post('/:id',async(req:Request,res:Response)=>{
    const book = req.body;
   const newBook =await  new Books(book).save()
    res.send(newBook)
})

//Updating 
router.patch('/:id',(req:Request,res:Response)=>{

})
export default router;



