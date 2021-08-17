import express from 'express';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017' ,{ useNewUrlParser: true })
import bodyParser from 'body-parser';
import booksRouter from './books/bookRouter';
import { error } from 'console';
import createBook from './books/bookRouter';
import createWriter from './author/authorRouter';



const app = express();
const port = 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/books', createBook);
app.use('/author', createWriter);
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('conencted'));
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})
app.use('/books',booksRouter)
'localhost:3000/booking';
