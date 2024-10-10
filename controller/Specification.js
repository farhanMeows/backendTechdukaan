const { Specification } = require("../model/Specification");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchSpecifications = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const specifications = await Specification.find(query).exec();

    // If no Specifications are found
    if (!specifications || specifications.length === 0) {
      return res
        .status(404)
        .json({ message: "No specifications found for this category." });
    }

    res.status(200).json(specifications);
  } catch (err) {
    console.error("Error fetching specifications:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createSpecification = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Specification name and category are required." });
  }

  const specification = new Specification(req.body);

  try {
    const doc = await specification.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating specification:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
