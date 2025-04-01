import { Schema,model } from "mongoose";

const userDetails = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    userRole: { type: String, enum: ["admin", "user"], default:"user"},
    lastLoginDate: { type: Date, default: Date.now },
    subscriptionPlan:{ type:Schema.Types.ObjectId ,ref:'Subscription',default:null },
    booksList: [{ type: Schema.Types.ObjectId, ref: "UserbookList" }],
},{ timestamps: true });

const User = model('Users',userDetails);

export default User;

