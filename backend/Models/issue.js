import { Schema,model } from "mongoose";

const issueSchema = new Schema({
    user: { type:Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type:Schema.Types.ObjectId, ref: 'Book', required: true },
    issueDate: { type: Date, default: Date.now },
    returnDate: { type: Date, required: true },
    returned: { type: Boolean, default: false }
}, { timestamps: true });

const issue = model('Bookissued',issueSchema);

export {issue};