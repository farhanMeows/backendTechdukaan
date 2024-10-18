const mongoose = require("mongoose");
const { Schema } = mongoose;

const graphicSchema = new Schema({
  label: { type: String, required: true, unique: false },
  value: { type: String, required: true, unique: true },
  // Add a reference to the Category model
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
});

const virtual = graphicSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
graphicSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Graphic = mongoose.model("Graphic", graphicSchema);
