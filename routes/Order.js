const express = require("express");
const {
  createOrder,
  fetchOrdersByUser,
  deleteOrder,
  updateOrder,
  fetchAllOrders,
  fetchOrderById,
} = require("../controller/Order");

const router = express.Router();
//  /orders is already added in base path
router
  .get("/own/", fetchOrdersByUser)
  .get("/:id", fetchOrderById) // New route for fetching order by ID
  .post("/", createOrder)
  .delete("/:id", deleteOrder)
  .patch("/:id", updateOrder)
  .get("/", fetchAllOrders);

exports.router = router;
