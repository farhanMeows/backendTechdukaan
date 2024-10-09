const { SubCategory } = require("../model/SubCategory");

exports.fetchSubCategories = async (req, res) => {
  try {
    // Get the category ID from the request (query params in this case)
    const { categoryId } = req.query;

    // Build the query based on the presence of categoryId
    const query = categoryId ? { category: categoryId } : {};

    // Find subcategories based on the categoryId filter if provided
    const subcategories = await SubCategory.find(query).exec();

    res.status(200).json(subcategories);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createSubCategory = async (req, res) => {
  // Validate the request body
  const { label, value, category } = req.body;

  if (!label || !value || !category) {
    return res
      .status(400)
      .json({ error: "All fields are required: label, value, and category." });
  }

  // Create a new SubCategory instance
  const subcategory = new SubCategory(req.body);

  try {
    // Save the new subcategory to the database
    const doc = await subcategory.save();
    res.status(201).json(doc);
  } catch (err) {
    // Handle specific Mongoose errors
    if (err.code === 11000) {
      return res.status(400).json({
        error: "Subcategory with this label or value already exists.",
      });
    }

    res.status(400).json(err);
  }
};
