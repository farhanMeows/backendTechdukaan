const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
  // this product we have to get from API body
  const product = new Product(req.body);
  product.discountPrice = Math.round(
    product.price * (1 - product.discountPercentage / 100)
  );
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllProducts = async (req, res) => {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  let condition = {};
  if (!req.query.admin) {
    condition.deleted = { $ne: true };
  }

  let query = Product.find(condition);
  let totalProductsQuery = Product.find(condition);

  console.log(req.query.category);

  if (req.query.category) {
    query = query.find({ category: { $in: req.query.category.split(",") } });
    totalProductsQuery = totalProductsQuery.find({
      category: { $in: req.query.category.split(",") },
    });
  }
  if (req.query.brand) {
    query = query.find({ brand: { $in: req.query.brand.split(",") } });
    totalProductsQuery = totalProductsQuery.find({
      brand: { $in: req.query.brand.split(",") },
    });
  }
  if (req.query.ram) {
    query = query.find({ ram: { $in: req.query.ram.split(",") } });
    totalProductsQuery = totalProductsQuery.find({
      ram: { $in: req.query.ram.split(",") },
    });
  }
  // Filter by subcategory
  if (req.query.subcategory) {
    query = query.find({
      subcategory: { $in: req.query.subcategory.split(",") },
    });
    totalProductsQuery = totalProductsQuery.find({
      subcategory: { $in: req.query.subcategory.split(",") },
    });
  }
  if (req.query.colour) {
    query = query.find({
      colour: { $in: req.query.colour.split(",") },
    });
    totalProductsQuery = totalProductsQuery.find({
      colour: { $in: req.query.colour.split(",") },
    });
  }
  if (req.query.size) {
    query = query.find({
      size: { $in: req.query.size.split(",") },
    });
    totalProductsQuery = totalProductsQuery.find({
      size: { $in: req.query.size.split(",") },
    });
  }
  if (req.query.graphic) {
    query = query.find({
      graphic: { $in: req.query.graphic.split(",") },
    });
    totalProductsQuery = totalProductsQuery.find({
      graphic: { $in: req.query.graphic.split(",") },
    });
  }
  if (req.query.inkandcartridges) {
    query = query.find({
      inkandcartridges: { $in: req.query.inkandcartridges.split(",") },
    });
    totalProductsQuery = totalProductsQuery.find({
      inkandcartridges: { $in: req.query.inkandcartridges.split(",") },
    });
  }
  if (req.query.storage) {
    query = query.find({
      storage: { $in: req.query.storage.split(",") },
    });
    totalProductsQuery = totalProductsQuery.find({
      storage: { $in: req.query.storage.split(",") },
    });
  }
  if (req.query.type) {
    query = query.find({
      type: { $in: req.query.type.split(",") },
    });
    totalProductsQuery = totalProductsQuery.find({
      type: { $in: req.query.type.split(",") },
    });
  }
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  const totalDocs = await totalProductsQuery.count().exec();
  console.log({ totalDocs });

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    product.discountPrice = Math.round(
      product.price * (1 - product.discountPercentage / 100)
    );
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const { q } = req.query;
    let condition = {};

    if (q) {
      // Perform a case-insensitive search using regex on multiple fields
      const searchQuery = { $regex: q, $options: "i" };
      condition = {
        $or: [
          { title: searchQuery },
          { description: searchQuery },
          { brand: searchQuery },
          { category: searchQuery },
          { subcategory: searchQuery },
          { type: searchQuery },
        ],
      };
    }

    const query = Product.find(condition);

    // You can add pagination and sorting here as needed
    const products = await query.exec();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};
