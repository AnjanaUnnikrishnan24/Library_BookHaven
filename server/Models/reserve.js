const reservationSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
      reservationDate: { type: Date, default: Date.now },
      status: { type: String, enum: ["pending", "fulfilled", "cancelled"], default: "pending" },
    },
    { timestamps: true }
  );
  
  const Reservation = model("Reservation", reservationSchema);
  export { Reservation };