const { Inkandcartridges } = require("../model/Inkandcartridges");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchInkandcartridgess = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const inkandcartridgess = await Inkandcartridges.find(query).exec();

    // If no Inkandcartridgess are found
    if (!inkandcartridgess || inkandcartridgess.length === 0) {
      return res
        .status(404)
        .json({ message: "No inkandcartridgess found for this category." });
    }

    res.status(200).json(inkandcartridgess);
  } catch (err) {
    console.error("Error fetching Inkandcartridgess:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createInkandcartridges = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Inkandcartridges name and category are required." });
  }

  const inkandcartridges = new Inkandcartridges(req.body);

  try {
    const doc = await inkandcartridges.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating inkandcartridges:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
