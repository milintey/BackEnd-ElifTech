const express = require("express");
const cntr = require("../../controllers/products");
const router = express.Router();

router.get("/", cntr.getAllProducts);

module.exports = router;
