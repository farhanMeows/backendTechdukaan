const { Graphic } = require("../model/Graphic");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchGraphics = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const graphics = await Graphic.find(query).exec();

    // If no Graphics are found
    if (!graphics || graphics.length === 0) {
      return res
        .status(404)
        .json({ message: "No graphics found for this category." });
    }

    res.status(200).json(graphics);
  } catch (err) {
    console.error("Error fetching Graphics:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createGraphic = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Graphic name and category are required." });
  }

  const graphic = new Graphic(req.body);

  try {
    const doc = await graphic.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating graphic:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
