const { Type } = require("../model/Type");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchTypes = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const types = await Type.find(query).exec();

    // If no Types are found
    if (!types || types.length === 0) {
      return res
        .status(404)
        .json({ message: "No types found for this category." });
    }

    res.status(200).json(types);
  } catch (err) {
    console.error("Error fetching types:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createType = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Type name and category are required." });
  }

  const type = new Type(req.body);

  try {
    const doc = await type.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating type:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
