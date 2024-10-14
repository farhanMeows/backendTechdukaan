const { Ram } = require("../model/Ram");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchRams = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Validate categoryId if provided
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const rams = await Ram.find(query).exec();

    // If no RAM is found
    if (!rams || rams.length === 0) {
      return res
        .status(404)
        .json({ message: "No RAM found for this category." });
    }

    res.status(200).json(rams);
  } catch (err) {
    console.error("Error fetching RAM:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createRam = async (req, res) => {
  const { label, value, category } = req.body;

  // Validate the request body
  if (!label || !value || !category) {
    return res
      .status(400)
      .json({ message: "Label, value, and category are required." });
  }

  const ram = new Ram({
    label,
    value,
    category,
  });

  try {
    const doc = await ram.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating RAM:", err);
    if (err.code === 11000) {
      res
        .status(400)
        .json({ message: "RAM with this label or value already exists." });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};
