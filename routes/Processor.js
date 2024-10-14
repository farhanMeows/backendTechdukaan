const express = require("express");
const { fetchProcessors, createProcessor } = require("../controller/Processor");

const router = express.Router();

//  /Processors is already added in base path
router.route("/").get(fetchProcessors).post(createProcessor);

exports.router = router;
