import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from '../Models/user.js'

dotenv.config();

const authenticate = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1] || req.cookies.authToken; // Extract token from header

        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = await User.findById(decoded.id).select("-password"); // Attach user to request

        if (!req.user) {
            return res.status(401).json({ message: "Invalid token or user not found." });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token." });
    }
};


export default authenticate;