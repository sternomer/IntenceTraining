import mongoose from 'mongoose'

const AuthorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  yearOfBirth: { type: Number, required: true },
  listOfBook:[{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'book'}] 
}, {versionKey: false});
export default  mongoose.model('author',AuthorSchema);