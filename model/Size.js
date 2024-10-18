const mongoose = require("mongoose");
const { Schema } = mongoose;

const sizeSchema = new Schema({
  label: { type: String, required: true, unique: false },
  value: { type: String, required: true, unique: true },
  // Add a reference to the Category model
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
});

const virtual = sizeSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
sizeSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Size = mongoose.model("Size", sizeSchema);
