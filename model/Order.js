const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentMethods = {
  values: ["card", "cash"],
  message: "enum validator failed for payment Methods",
};

const orderSchema = new Schema(
  {
    items: { type: [Schema.Types.Mixed], required: true },
    totalAmount: { type: Number },
    totalItems: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: { type: String, required: true, enum: paymentMethods },
    paymentStatus: { type: String, default: "pending" },
    status: { type: String, default: "pending" },
    selectedAddress: { type: Schema.Types.Mixed, required: true },
    orderId: { type: String, unique: true }, // New field for orderId
  },
  { timestamps: true }
);

// Create a virtual field for id
const virtual = orderSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

// Function to generate a random character (only letters)
const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

// Pre-save hook to generate orderId
orderSchema.pre("save", async function (next) {
  if (this.isNew) {
    // Get the current year and month
    const currentYear = new Date().getFullYear();
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const totalOrders = await mongoose.model("Order").countDocuments(); // Count total orders

    // Generate random characters
    const randomChar1 = getRandomChar();
    const randomChar2 = getRandomChar();

    // Format the orderId
    this.orderId = `${currentYear}${randomChar1}${currentMonth}${randomChar2}${
      totalOrders + 1
    }`;
  }
  next();
});

// Set toJSON options to remove _id and include virtuals
orderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Order = mongoose.model("Order", orderSchema);
