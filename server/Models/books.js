import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    bId: { type: String, required: true, unique: true }, 
    title: { type: String, required: true }, 
    author: { type: String, required: true},
    category: { type: String, required: true },
    edition: { type: String, required: true },
    publishedYear: { type: Number, required: true }, 
    description: { type: String, required: true },
    publisher: { type: String, required: true },
    language: { type: String, required: true },
    image: { type: String, required: true},
}, { timestamps: true });

const Book = model('Book', bookSchema);

export { Book };