import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["info", "warning", "alert"], required: true }, 
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Notification = model("Notifications", notificationSchema);

export { Notification };