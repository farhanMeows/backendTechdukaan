const { Size } = require("../model/Size");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchSizes = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const sizes = await Size.find(query).exec();

    // If no Sizes are found
    if (!sizes || sizes.length === 0) {
      return res
        .status(404)
        .json({ message: "No sizes found for this category." });
    }

    res.status(200).json(sizes);
  } catch (err) {
    console.error("Error fetching sizes:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createSize = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Size name and category are required." });
  }

  const size = new Size(req.body);

  try {
    const doc = await size.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating size:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
