const HttpError = require("../helpers/HttpError");

const validateBodv = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(reg.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBodv;
