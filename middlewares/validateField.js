const { validationResult } = require("express-validator");

const validateFields = (req, res, next) => {
  const { errors } = validationResult(req);
  if (errors.length > 0)
  {console.log(errors)
    res.status(400).json({ message: "Hay un error", errors });}
  next();
};

module.exports = validateFields;
