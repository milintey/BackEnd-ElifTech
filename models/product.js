const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: String,
  image: String,
  price: String,
  delivery: String,
});

const Product = model("product", productSchema);

module.exports = Product;
