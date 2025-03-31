// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  subscription: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription', default: null },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  rentedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rental' }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

// models/Book.js
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
  imageUrl: { type: String },
  rentedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);

// models/Subscription.js
const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planName: { type: String, required: true },
  duration: { type: Number, required: true }, 
  bookLimit: { type: Number, required: true },
  booksUsed: { type: Number, default: 0 },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  status: { type: String, enum: ['Active', 'Expired'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);

// models/Rental.js
const RentalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  rentalDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Rented', 'Returned'], default: 'Rented' }
}, { timestamps: true });

module.exports = mongoose.model('Rental', RentalSchema);

// models/Transaction.js
const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
  amount: { type: Number, required: true },
  transactionDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Success', 'Failed', 'Pending'], default: 'Pending' },
  paymentMethod: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);

// models/Review.js
const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);

// models/AdminLog.js
const AdminLogSchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('AdminLog', AdminLogSchema);