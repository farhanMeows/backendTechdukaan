const express = require("express");
const { createOrUpdateBanner, getBanner } = require("../controller/Banner");
const router = express.Router();

// Route to create or update the banner
router.post("/", createOrUpdateBanner); // Use this route to create or update

// Route to get the banner
router.get("/", getBanner); // Use this route to get the current banner

exports.router = router;
