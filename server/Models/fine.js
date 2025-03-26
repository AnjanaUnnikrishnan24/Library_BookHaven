const fineSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      bookIssued: { type: Schema.Types.ObjectId, ref: "BookIssued", required: true },
      amount: { type: Number, required: true },
      paid: { type: Boolean, default: false },
      dueDate: { type: Date, required: true },
    },
    { timestamps: true }
);
  
const Fine = model("Fine", fineSchema);
export { Fine };