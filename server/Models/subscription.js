import { Schema, model } from "mongoose";

const planSchema = new Schema({
    planId: { type: Number, required: true, unique: true }, 
    planName: { type: String, required: true }, 
    vaidity: { type:String, required:true },
    description:{type:String,required:true },
    price:{type:Number,required:true},
    offerPrice :{type:Number,required:true},
    bookLimit : {type:Number,required:true}
}, { timestamps: true });

const Subscription = model('Subscriptions', planSchema);

export { Subscription };

