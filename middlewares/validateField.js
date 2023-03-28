const { validationResult } = require("express-validator");

const validateFields = (req, res, next) => {
  const { errors } = validationResult(req);
  if (errors.length > 0){
  console.log(errors)
  return res.status(400).json({ message: "Validaciones del back, verificar los datos enviados", errors });}
  next();
};

module.exports = validateFields;
