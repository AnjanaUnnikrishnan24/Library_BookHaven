import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    categoryName: { type: String, required: true, unique: true }
}, { timestamps: true });

const Category = model('Category', categorySchema);

export {Category};