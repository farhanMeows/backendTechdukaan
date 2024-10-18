const express = require("express");
const { fetchSizes, createSize } = require("../controller/Size");

const router = express.Router();
//  /Sizes is already added in base path
router.get("/", fetchSizes).post("/", createSize);

exports.router = router;
