import { Router } from "express";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/adminCheck.js";
import { Book } from "../Models/books.js";
import upload from "../Middleware/upload.js"

const Routes = Router();

const convertToBase64 = (buffer) =>{
    return buffer.toString("base64");
}

Routes.post("/addBook", authenticate, adminCheck,upload.single('bookImage'),async (req, res) => {
    try {
        const { BookId,BookTitle,AuthorName,BookCategory,Edition,PublishedYear,Description,TotalCopies,AvailableCopies } = req.body;
        console.log(BookTitle)
        const existingBook = await Book.findOne({bId:BookId});
        if(existingBook){
            res.status(401).send("Book Already exist");
        }else{
            let imageBase64 = null;
            if(req.file && req.file.buffer ){
                imageBase64 = convertToBase64(req.file.buffer);
            }
            const newBook = new sample({
                bId:BookId,
                title: BookTitle,
                author: AuthorName,
                category: BookCategory,
                edition: Edition,
                year: PublishedYear,
                description:Description,
                noOfCopies:TotalCopies,
                leftCopies:AvailableCopies,
                Image:imageBase64
            });
            await newBook.save();
            res.status(201).send("Book added successfully")
        }
    } catch {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});


Routes.get('/viewBook', async (req, res) => {
    try {
        const bookId = req.query.BookId;
        console.log(bookId);

        const result = await Book.findOne({ BookId: bookId }); 
        console.log(result);

        if (!result) {
            return res.status(404).json({ msg: "Book doesn't exist" });
        }

        res.status(200).json({
            BookId:result.bId,
            BookTitle:result.title,
            AuthorName:result.author,
            BookCategory:result.category,
            Edition:result.edition,
            PublishedYear:result.year,
            Description:result.description,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

Routes.get('/allBooks',authenticate,adminCheck, async (req,res)=>{
    try {
        const allBooks = await Book.find();
        console.log(allBooks);
        res.status(200).json(allBooks);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal Server Error"});
    }
});

Routes.put('/updateBook', authenticate, adminCheck, async(req, res) => {
    try {
        const { BookTitle,BookId,AuthorName,BookCategory,Edition,PublishedYear,Description,TotalCopies,AvailableCopies } = req.body; 
        console.log(BookId);
        const result = await Book.findOne({bId:BookId});
        console.log(result);

        if (result) {
            result.bId=BookId,
            result.title= BookTitle,
            result.author= AuthorName,
            result.category= BookCategory,
            result.edition= Edition,
            result.year= PublishedYear,
            result.description=Description,
            result.noOfCopies=TotalCopies,
            result.leftCopies=AvailableCopies
                
            await result.save();
            res.status(200).json({ msg: "Book updated successfully" });
        } else {
            res.status(404).json({ msg: "Book doesn't found" });
        }
    } catch {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});


Routes.delete('/deletebook', authenticate, adminCheck,async(req, res) => {
    try {
        const { BookId } = req.body; 
        const result = await Book.findOne({bId:BookId});
        if (result) {  
            await Book.findOneAndDelete({bId:BookId});
            res.status(200).json({ msg: "Book deleted successfully" });
        } else {
            res.status(404).json({ msg: "Book not found" });
        }
    } catch {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

Routes.get('/searchBook', async (req, res) => {
    try {
        const { searchValue } = req.body;

        if (!searchValue) {
            return res.status(400).json({ message: "Search value is required" });
        }

        const books = await Book.find({
            $or: [
                { title: { $regex: searchValue, $options: "i" } },
                { category: { $regex: searchValue, $options: "i" } },
                { author: { $regex: searchValue, $options: "i" } }
            ]
        });

        if (books.length === 0) {
            return res.status(404).json({ message: "No products found matching your search" });
        }

        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

Routes.post("/issueBook", authenticate, adminCheck, async (req, res) => {
    try {
        const { userId, bookId, returnDate } = req.body;

        const existingUser = await user.findById(userId);
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

        const newIssue = new issue({
            user: userId,
            book: existingBook._id,
            returnDate,
        });
        await newIssue.save();

        existingBook.leftCopies -= 1;
        await existingBook.save();

        res.status(201).json({ message: "Book issued successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

Routes.post("/category", async (req, res) => {
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
        res.status(500).json({ message: "Internal Server Error" });
    }
});

Routes.post("/reserveBook", authenticate, async (req, res) => {
    try {
        const { userId, BookId } = req.body;

        const existingUser = await user.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const existingBook = await Book.findOne({ bId: BookId });
        if (!existingBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(201).json({ message: "Book reserved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default Routes;