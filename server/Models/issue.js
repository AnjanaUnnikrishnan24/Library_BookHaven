import { Schema,model } from "mongoose";

const issueSchema = new Schema({
    user: { type:Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type:Schema.Types.ObjectId, ref: 'Book', required: true },
    issueDate: { type: Date, default: Date.now },
    returnDate: { type: Date, required: true },
    returned: { type: Boolean, default: false },
    status: { type: String, enum: ["issued", "overdue", "returned"], default: "issued" },
    fine: { type: Number, default: 0 }, 
    remarks: { type: String, trim: true },
}, { timestamps: true });

const Issue = model('Bookissued',issueSchema);

export {Issue};