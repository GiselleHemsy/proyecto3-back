const jwt = require ("jsonwebtoken");
const CustomError = require("../utils/CustomError");

const auth = (req, res, next) => {
  try {
    const token = req.header('authorization');
    console.log(token);
    if(!token) throw new CustomError('Credenciales inválidas');
    const {id} = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.id = id;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
    }
};

module.exports = auth;