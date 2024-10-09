const { Brand } = require("../model/Brand");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchBrands = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const brands = await Brand.find(query).exec();

    // If no brands are found
    if (!brands || brands.length === 0) {
      return res
        .status(404)
        .json({ message: "No brands found for this category." });
    }

    res.status(200).json(brands);
  } catch (err) {
    console.error("Error fetching brands:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createBrand = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Brand name and category are required." });
  }

  const brand = new Brand(req.body);

  try {
    const doc = await brand.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating brand:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
