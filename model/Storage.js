const mongoose = require("mongoose");
const { Schema } = mongoose;

const storageSchema = new Schema({
  label: { type: String, required: true, unique: false },
  value: { type: String, required: true, unique: true },
  // Add a reference to the Category model
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
});

const virtual = storageSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
storageSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Storage = mongoose.model("Storage", storageSchema);
