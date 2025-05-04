import { Router } from "express";
import { Book } from "../Models/books.js"; 
import authenticate from "../Middleware/auth.js"; 
import adminCheck from "../Middleware/adminCheck.js";  
import upload from "../Middleware/upload.js";  

const bookRoutes = Router();

bookRoutes.post("/addBook", authenticate, adminCheck, upload.single("image"), async (req, res) => {
    try {
        const { bId, title, author, category, edition, publishedYear, description, publisher, language } = req.body;

        const existingBook = await Book.findOne({ bId });
        if (existingBook) {
            return res.status(400).json({ message: "Book with this ID already exists" });
        }

        let imageBase64 = null;
        if (req.file) {
            imageBase64 = req.file.path;
        }

        const newBook = new Book({
            bId,
            title,
            author,
            category,
            edition,
            publishedYear: parseInt(publishedYear),
            description,
            publisher,
            language,
            image: imageBase64,
         });

        await newBook.save();
        res.status(201).json({ message: "Book added successfully", book: newBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

bookRoutes.put("/updateBook/:bId", authenticate, adminCheck, upload.single("image"), async (req, res) => {
    try {
        const { bId } = req.params;
        const updateData = req.body;

        const book = await Book.findOne({ bId });
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        if (updateData.title) book.title = updateData.title;
        if (updateData.author) book.author = updateData.author;
        if (updateData.category) book.category = updateData.category;
        if (updateData.edition) book.edition = updateData.edition;
        if (updateData.publishedYear) book.publishedYear = parseInt(updateData.publishedYear);
        if (updateData.description) book.description = updateData.description;
        if (updateData.publisher) book.publisher = updateData.publisher;
        if (updateData.language) book.language = updateData.language;
        if (req.file) book.image = req.file.path;

        await book.save();
        res.status(200).json({ message: "Book updated successfully", book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

bookRoutes.delete("/deleteBook/:bId", authenticate, adminCheck, async (req, res) => {
    try {
        const { bId } = req.params;

        const book = await Book.findOneAndDelete({ bId });
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

bookRoutes.get("/viewBook/:bId", async (req, res) => {
    try {
        const { bId } = req.params;

        const book = await Book.findOne({ bId }).populate("category"); 
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

bookRoutes.get("/allBooks", async (req, res) => {
    try {
        const books = await Book.find().populate("category"); 
        res.status(200).json({ books });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

bookRoutes.get("/searchBooks", async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }

        const books = await Book.find({
            $or: [
                { title: { $regex: query, $options: "i" } }, 
                { author: { $regex: query, $options: "i" } }, 
                { category: { $regex: query, $options: "i" } }, 
            ],
        }).populate("category");

        if (books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }

        res.status(200).json({ books });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default bookRoutes;