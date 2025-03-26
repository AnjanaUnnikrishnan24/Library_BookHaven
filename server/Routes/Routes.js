import { Router } from "express";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/adminCheck.js";
import { Book } from "../Models/books.js";
import upload from "../Middleware/upload.js";

const adminRoutes = Router();

const convertToBase64 = (buffer) => {
    return buffer.toString("base64");
};

adminRoutes.post("/addBook", authenticate, adminCheck, upload.single('bookImage'), async (req, res) => {
    try {
        const { bId, title, author, category, edition, year, description, publisher, language, noOfCopies, borrowedCopies, shelfNo } = req.body;

        const existingBook = await Book.findOne({ bId });
        if (existingBook) {
            return res.status(400).json({ msg: "Book already exists" });
        }

        let imageBase64 = null;
        if (req.file && req.file.buffer) {
            imageBase64 = convertToBase64(req.file.buffer);
        }

        const newBook = new Book({
            bId,
            title,
            author,
            category,
            edition,
            year,
            description,
            publisher,
            language,
            noOfCopies: noOfCopies,
            borrowedCopies: borrowedCopies || 0,
            leftCopies: noOfCopies - (borrowedCopies || 0),
            image: imageBase64,
            shelfNo,
            status: (noOfCopies - (borrowedCopies || 0)) > 0 ? "available" : "unavailable"
        });

        await newBook.save();
        res.status(201).json({ msg: "Book added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

adminRoutes.put('/updateBook', authenticate, adminCheck, upload.single('bookImage'), async (req, res) => {
    try {
        const { bId, title, author, category, edition, year, description, publisher, language, noOfCopies, borrowedCopies, shelfNo } = req.body;

        const existingBook = await Book.findOne({ bId });
        if (!existingBook) {
            return res.status(404).json({ msg: "Book not found" });
        }

        let imageBase64 = null;
        if (req.file && req.file.buffer) {
            imageBase64 = convertToBase64(req.file.buffer);
        }

        existingBook.title = title;
        existingBook.author = author;
        existingBook.category = category;
        existingBook.edition = edition;
        existingBook.year = year;
        existingBook.description = description;
        existingBook.publisher = publisher;
        existingBook.language = language;
        existingBook.noOfCopies = noOfCopies;
        existingBook.borrowedCopies = borrowedCopies || 0;
        existingBook.leftCopies = noOfCopies - (borrowedCopies || 0);
        existingBook.image = imageBase64 || existingBook.image;
        existingBook.shelfNo = shelfNo;
        existingBook.status = (noOfCopies - (borrowedCopies || 0)) > 0 ? "available" : "unavailable";

        await existingBook.save();
        res.status(200).json({ msg: "Book updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});


adminRoutes.get('/viewBook', async (req, res) => {
    try {
        const bookId = req.query.bId; // Use bId as per schema
        console.log(bookId);

        const result = await Book.findOne({ bId: bookId }); // Use bId as per schema
        console.log(result);

        if (!result) {
            return res.status(404).json({ msg: "Book doesn't exist" });
        }

        res.status(200).json({
            bId: result.bId,
            title: result.title,
            author: result.author,
            category: result.category,
            edition: result.edition,
            year: result.year,
            description: result.description,
            publisher: result.publisher,
            language: result.language,
            noOfCopies: result.noOfCopies,
            borrowedCopies: result.borrowedCopies,
            leftCopies: result.leftCopies,
            image: result.image,
            shelfNo: result.shelfNo,
            status: result.status,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// Get all books
adminRoutes.get('/allBooks', authenticate, adminCheck, async (req, res) => {
    try {
        const allBooks = await Book.find();
        console.log(allBooks);
        res.status(200).json(allBooks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Delete a book by bId
adminRoutes.delete('/deletebook', authenticate, adminCheck, async (req, res) => {
    try {
        const { bId } = req.body; // Use bId as per schema
        const result = await Book.findOne({ bId });

        if (result) {
            await Book.findOneAndDelete({ bId });
            res.status(200).json({ msg: "Book deleted successfully" });
        } else {
            res.status(404).json({ msg: "Book not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// Search for books by title, category, or author
adminRoutes.get('/searchBook', async (req, res) => {
    try {
        const { searchValue } = req.query; // Use query instead of body for GET requests

        if (!searchValue) {
            return res.status(400).json({ message: "Search value is required" });
        }

        const books = await Book.find({
            $or: [
                { title: { $regex: searchValue, $options: "i" } },
                { category: { $regex: searchValue, $options: "i" } },
                { author: { $regex: searchValue, $options: "i" } },
            ],
        });

        if (books.length === 0) {
            return res.status(404).json({ message: "No books found matching your search" });
        }

        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Issue a book to a user
adminRoutes.post("/issueBook", authenticate, adminCheck, async (req, res) => {
    try {
        const { userId, bookId, returnDate } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const existingBook = await Book.findOne({ bId: bookId });
        if (!existingBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        if (existingBook.leftCopies <= 0) {
            return res.status(400).json({ message: "No copies left for this book" });
        }

        const newIssue = new Issue({
            user: userId,
            book: existingBook._id,
            returnDate,
        });
        await newIssue.save();

        existingBook.borrowedCopies += 1;
        existingBook.leftCopies = existingBook.noOfCopies - existingBook.borrowedCopies;
        existingBook.status = existingBook.leftCopies > 0 ? "available" : "unavailable";
        await existingBook.save();

        res.status(201).json({ message: "Book issued successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Add a new category
adminRoutes.post("/category", async (req, res) => {
    try {
        const { categoryName } = req.body;

        const existingCategory = await Category.findOne({ categoryName });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const newCategory = new Category({ categoryName });
        await newCategory.save();

        res.status(201).json({ message: "Category added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Reserve a book
adminRoutes.post("/reserveBook", authenticate, async (req, res) => {
    try {
        const { userId, bookId } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const existingBook = await Book.findOne({ bId: bookId });
        if (!existingBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        if (existingBook.leftCopies <= 0) {
            return res.status(400).json({ message: "No copies left for this book" });
        }

        // Add reservation logic here (e.g., create a reservation record)
        res.status(201).json({ message: "Book reserved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export default adminRoutes;