import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    bId: { type: String, required: true, unique: true }, 
    title: { type: String, required: true }, 
    author: { type: String, required: true},
    category: { type: String, required: true },
    edition: { type: String, required: true },
    year: { type: Number, required: true }, 
    description: { type: String, required: true },
    publisher: { type: String, required: true },
    language: { type: String, required: true },
    noOfCopies: { type: Number, required: true, min: 1 },
    borrowedCopies: { type: Number, required: true, min: 0, default: 0 },
    leftCopies: { type: Number, required: true, min: 0 },
    image: { type: String, required: true},
    shelfNo: { type: String,  required: true },
    status: { type: String, enum: ["available", "unavailable"], default: "available" },
}, { timestamps: true });

bookSchema.pre("save", function (next) {
    this.leftCopies = this.noOfCopies - this.borrowedCopies;

    if (this.leftCopies <= 0) {
        this.status = "unavailable";
    } else {
        this.status = "available";
    }

    next(); 
});

const Book = model('Book', bookSchema);

export { Book };