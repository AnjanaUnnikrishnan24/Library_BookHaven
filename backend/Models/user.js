import { Schema,model } from "mongoose";

const userDetails = new Schema({
    userRole: { type: String, enum: ["admin", "user"], required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
})

const user = model('Users',userDetails);

export { user };

