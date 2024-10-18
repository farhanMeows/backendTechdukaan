const express = require("express");
const { fetchTypes, createType } = require("../controller/Type");

const router = express.Router();
//  /Types is already added in base path
router.get("/", fetchTypes).post("/", createType);

exports.router = router;
