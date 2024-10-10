const mongoose = require("mongoose");
const { Schema } = mongoose;

const specificationSchema = new Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
  // Add a reference to the Category model
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
});

const virtual = specificationSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
specificationSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Specification = mongoose.model("Specification", specificationSchema);
