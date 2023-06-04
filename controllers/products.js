const Product = require("../models/product");
const { Order } = require("../models/order");

const getAllProducts = async (req, res) => {
  const result = await Product.find();
  res.status(200).json(result);
};

const addOrder = async (req, res) => {
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

module.exports = {
  getAllProducts,
  addOrder,
};
