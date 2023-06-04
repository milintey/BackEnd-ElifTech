const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    required: true,
  },
});

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.number().required(),
  address: Joi.string().required(),
  order: Joi.array().required(),
});

const schemas = {
  addSchema,
};

const Order = model("order", orderSchema);

module.exports = {
  Order,
  schemas,
};
