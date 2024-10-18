const { Colour } = require("../model/Colour");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchColours = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const colours = await Colour.find(query).exec();

    // If no Colours are found
    if (!colours || colours.length === 0) {
      return res
        .status(404)
        .json({ message: "No colours found for this category." });
    }

    res.status(200).json(colours);
  } catch (err) {
    console.error("Error fetching colours:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createColour = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Colour name and category are required." });
  }

  const colour = new Colour(req.body);

  try {
    const doc = await colour.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating colour:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
