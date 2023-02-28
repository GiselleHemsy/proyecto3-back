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


// const verifyAuth = (req,res,next)=>{
//   try {
//     const token = req.header('authorization');
//     if(!token) throw new Error('Credenciales inválidas');
//     const payload = jwt.verify(token,process.env.JWT_SECRET_KEY);
//     req.id = payload.id;
//     req.email = payload.email;
//     next();
//   } catch (error) {
//     res.status(403).json({message:error.message})
//   }
// }
module.exports = auth;