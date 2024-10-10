const express = require("express");
const {
  fetchSpecifications,
  createSpecification,
} = require("../controller/Specification");

const router = express.Router();
//  /Specifications is already added in base path
router.get("/", fetchSpecifications).post("/", createSpecification);

exports.router = router;
