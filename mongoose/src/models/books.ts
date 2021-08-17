import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
    name:{
     type:String,
     required:true
    },
    bookDescription:{
        type:String,
       

    },
    publishDate:{
        type:Date,
        default:Date.now
    },
   numberOfPages:{
     type:Number
   }
    
})


export default  mongoose.model('book',booksSchema);

