const CustomError = require("../utils/CustomError");
const User = require ("../models/User");
const bcrypt = require ("bcryptjs");
const {validatorResults} = require ("express-validator");
const jwt = require ("jsonwebtoken");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status (error.code || 500).json({message:"person, algo salio mal"});
    }
};

const addUser = async (req, res) => {
    try {
      console.log("hola")
      res.status(200).send({message:"hola"})
      const { name, lastname, dni, email, tel, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const passwordEncrypted = await bcrypt.hash(password, salt);
      const newUser = new User({
        name,
        lastname,
        dni,
        email,
        tel,
        admin:false,
        password: passwordEncrypted,
      });
      const userSaved = await newUser.save();
      if (!user) throw new CustomError ("Fallo el guardado");
      res.status(200).json({ message: "El usuario se creo correctamente", user: userSaved });
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };
  
  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        throw new CustomError("Usuario y contraseña son requeridas", 400);
      const user = await User.findOne({ email });
      if (!user) throw new CustomError("Usuario no encontrado", 404);
      const passOk = await bcrypt.compare(password, user.password);
      if (!passOk) throw new CustomError("Contraseña incorrecta", 400);
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {expiresIn: "1h",});
      res.status(200).json({ message: "Ingreso correcto", user, token });
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };
const editUser = (req,res)=>{
    res.status(200).json({message:"Se ha editado usuario"})
}

const deleteUser = (req,res)=>{
    res.status(200).json({message:"Se ha borrado un usuario"})
}

module.exports = {
    getUsers,
    addUser,
    editUser,
    deleteUser,
    login
};