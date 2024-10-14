const mongoose = require("mongoose");
const { Schema } = mongoose;

const processorSchema = new Schema({
  label: { type: String, required: true, unique: false },
  value: { type: String, required: true, unique: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
});

const virtual = processorSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

processorSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Processor = mongoose.model("Processor", processorSchema);
