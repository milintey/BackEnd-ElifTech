const express = require("express");
const cntr = require("../../controllers/products");
// const validateBody = require("../../middlewares/validateBody");
// const { schemas } = require("../../models/order");
const router = express.Router();

router.post("/", cntr.addOrder);

module.exports = router;
