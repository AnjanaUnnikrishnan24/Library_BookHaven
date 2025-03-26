const notificationSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      message: { type: String, required: true },
      read: { type: Boolean, default: false },
    },
    { timestamps: true }
  );
  
  const Notification = model("Notification", notificationSchema);
  export { Notification };