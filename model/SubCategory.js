const mongoose = require("mongoose");
const { Schema } = mongoose;

// Subcategory schema
const SubcategorySchema = new Schema({
  label: { type: String, required: true, unique: false },
  value: { type: String, required: true, unique: true },

  // Add a reference to the Category model
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
});

// Virtual for 'id'
const virtual = SubcategorySchema.virtual("id");
virtual.get(function () {
  return this._id;
});

// Remove _id and versionKey from the output
SubcategorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Export the SubCategory model
exports.SubCategory = mongoose.model("SubCategory", SubcategorySchema);
