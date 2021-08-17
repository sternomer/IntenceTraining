import mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
  nameOfBook: { type: String, required: true },
  descriptionOfBook: { type: String, required: true },
  datePublicOfBook: { type: String, required: true },
  numberOfPage: {type: Number, required: true },
}, {versionKey: false});


export default  mongoose.model('book',bookSchema);

