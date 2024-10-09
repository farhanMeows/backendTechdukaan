const express = require("express");
const {
  fetchSubCategories,
  createSubCategory,
} = require("../controller/SubCategory");

const router = express.Router();

//  /categories is already added in base path
router.get("/", fetchSubCategories).post("/", createSubCategory);

exports.router = router;
