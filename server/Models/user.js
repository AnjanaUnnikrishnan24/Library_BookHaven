import { Schema,model } from "mongoose";

const userDetails = new Schema({
    userRole: { type: String, enum: ["admin", "user"], required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    address: { type: String, trim: true },
    lastLoginDate: { type: Date, default: Date.now },
    membershipId: { type: String, unique: true, trim: true },
    status: { type: String, enum: ["active", "inactive", "suspended"], default: "active" },
    borrowedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
},{ timestamps: true })

const User = model('Users',userDetails);

export { User };

