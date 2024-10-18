const express = require("express");
const {
  fetchInkandcartridgess,
  createInkandcartridges,
} = require("../controller/inkandcartridges");

const router = express.Router();
//  /Inkandcartridgess is already added in base path
router.get("/", fetchInkandcartridgess).post("/", createInkandcartridges);

exports.router = router;
