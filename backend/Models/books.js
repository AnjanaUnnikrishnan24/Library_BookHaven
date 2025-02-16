import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    bId: { type: String, required: true, unique: true }, 
    title: { type: String, required: true, trim: true }, 
    author: { type: String, required: true, trim: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    edition: { type: String, required: true, trim: true },
    year: { type: Number, required: true }, 
    description: { type: String, required: true },
    noOfCopies: { type: Number, required: true, min: 1 },
    leftCopies: { type: Number, required: true, min: 0 },
    image: { type: String }  
}, { timestamps: true });

const Book = model('Book', bookSchema);

export { Book };
