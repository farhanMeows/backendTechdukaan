const express = require("express");
const { fetchRams, createRam } = require("../controller/Ram");

const router = express.Router();

//  /Rams is already added in base path
router.route("/").get(fetchRams).post(createRam);

exports.router = router;
