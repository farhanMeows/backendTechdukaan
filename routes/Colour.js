const express = require("express");
const { fetchColours, createColour } = require("../controller/Colour");

const router = express.Router();
//  /Colours is already added in base path
router.get("/", fetchColours).post("/", createColour);

exports.router = router;
