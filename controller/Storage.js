const { Storage } = require("../model/Storage");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;

exports.fetchStorages = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Check if categoryId is valid, if needed (e.g., ObjectId for MongoDB)
    if (categoryId && !isValidObjectId(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // Build query if categoryId is provided
    const query = categoryId ? { category: categoryId } : {};

    const storages = await Storage.find(query).exec();

    // If no Storages are found
    if (!storages || storages.length === 0) {
      return res
        .status(404)
        .json({ message: "No storages found for this category." });
    }

    res.status(200).json(storages);
  } catch (err) {
    console.error("Error fetching storages:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.createStorage = async (req, res) => {
  // Validate the request body (e.g., ensure required fields are present)
  if (!req.body.name || !req.body.category) {
    return res
      .status(400)
      .json({ message: "Storage name and category are required." });
  }

  const storage = new Storage(req.body);

  try {
    const doc = await storage.save();
    res.status(201).json(doc);
  } catch (err) {
    console.error("Error creating storage:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
