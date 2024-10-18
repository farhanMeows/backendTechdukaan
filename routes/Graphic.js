const express = require("express");
const { fetchGraphics, createGraphic } = require("../controller/Graphic");

const router = express.Router();
//  /Graphics is already added in base path
router.get("/", fetchGraphics).post("/", createGraphic);

exports.router = router;
