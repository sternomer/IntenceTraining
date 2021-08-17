import express, { request, Request, Response } from 'express'
import mongoose from 'mongoose'
import Book from './booksModel';

const router = express.Router();

// Get all books
router.get('/', async (req:any, res:any) => {
    try {
      const books:String = await Book.find();
      res.json(books);
    } catch (err) {
      res.json({ message: err });
    }
  });

  router.post('/', async (req:any, res:any) => {
    const {
      nameOfBook, descriptionOfBook, datePublicOfBook, writerOfBook, numberOfPage,
    } = req.body;
    const book = new Book({
      nameOfBook,
      descriptionOfBook,
      datePublicOfBook,
      writerOfBook,
      numberOfPage,
    });
    try {
      const savedBook = await book.save();
      res.json(savedBook);
    } catch (err) {
      res.json({ message: err });
    }
  });

  router.get('/name/:nameOfWriter', async (req:any, res:any) => {
    try {
      const book:String = await Book.find({numberOfPage:req.params.nameOfWriter});
      res.json(book);
    } catch (err) {
      res.json({ message: err });
    }
    
  });
// Delete book
router.delete('delete/:bookId', async (req:any, res:any) => {
    try {
      const removedBook:String = await Book.remove({ _id: req.params.bookId });
      res.json(removedBook);
    } catch (err) {
      res.json({ message: err });
    }
  });
  // Spesific book
router.get('/id/:bookId', async (req:any, res:any) => {
    try {
      const book:String = await Book.findById(req.params.bookId).populate('writerOfBook');
      res.json(book);
    } catch (err) {
      res.json({ message: err });
    }
  });
 
  // find books that have at least 250 pages//
  router.get('/:250',async (req:Request,res:Response)=>{
      try{
          const book :String = await Book.find({numberOfPage:{$gte:250}}).sort({numberOfPage:1});
          res.json(book);
      }
      catch (err){
          res.json({message:err})
      }
  });
  //find a book by name or description //
  router.get('/nameOf',async (req:Request,res:Response)=>{
     try{
         const book :String = await Book.find({
            nameOfBook :{$regex:('david'),$options:('i')}});
        res.json(book);
     }
     catch(err){
         res.json({message:err});
     }
  })
export default router;



