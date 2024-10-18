const express = require("express");
const { fetchStorages, createStorage } = require("../controller/Storage");

const router = express.Router();
//  /Storages is already added in base path
router.get("/", fetchStorages).post("/", createStorage);

exports.router = router;
