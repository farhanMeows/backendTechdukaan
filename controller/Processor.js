const { Processor } = require("../model/Processor");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchProcessors = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Validate categoryId if provided
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const processors = await Processor.find(query).exec();

    // If no Processor is found
    if (!processors || processors.length === 0) {
      return res
        .status(404)
        .json({ message: "No processor found for this category." });
    }

    res.status(200).json(processors);
  } catch (err) {
    console.error("Error fetching processor:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createProcessor = async (req, res) => {
  const { label, value, category } = req.body;

  // Validate the request body
  if (!label || !value || !category) {
    return res
      .status(400)
      .json({ message: "Label, value, and category are required." });
  }

  const processor = new Processor({
    label,
    value,
    category,
  });

  try {
    const doc = await processor.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating Processor:", err);
    if (err.code === 11000) {
      res
        .status(400)
        .json({
          message: "Processor with this label or value already exists.",
        });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};
