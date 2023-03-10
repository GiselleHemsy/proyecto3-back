const CustomError = require("../utils/CustomError");
const User = require ("../models/User");
const bcrypt = require ("bcryptjs");
const {validatorResults} = require ("express-validator");
const jwt = require ("jsonwebtoken");


const getUsers = async (req, res) => {
    try {
        if (req.query.single){
          const user = await User.findById(req.query.id);
        res.status(200).json({user});
        }
        else {
          const users = await User.find();
        res.status(200).json({users});
        }

    } catch (error) {
        res.status (error.code || 500).json({message:"perdon, algo salio mal"});
    }
};

const getuserForEmail = async (req, res) => {
  try {
      const {email} = req.params;
      const user= await User.findOne({email});
      res.status(200).json({user})
  } catch (error) {
      res.status (error.code || 500).json({ message: error.message});
  }
};


const addUser = async (req, res) => {
  try {
    const { name, lastname, dni, email, cel, admin, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypted = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      lastname,
      dni,
      email,
      cel,
      admin,
      password: passwordEncrypted,
    });
    const userSaved = await newUser.save();
    res.status(200).json({ message: "El usuario se creó correctamente", user: userSaved });
  } catch (error) {
    res
      .status(error.code < 600 ? error.code : 500)
      .json({ message: "Ocurrio un error. Motivo:" + error.message });
  }
};


const editUser = async (req,res)=>{
  try {
    const{id, fields}= req.body;
    const userModified= await User.findByIdAndUpdate(id,fields,{new:true});
    res.status(200).json({message:"Se ha editado usuario", userModified})
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
      res.status(200).json({ message: "Ingreso correcto", token, user });
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };




const deleteUser = async (req,res)=>{
  try {
    const {id} = req.body;
    const UserDeleted = await User.findByIdAndDelete(id);
    if(!UserDeleted)  throw new CustomError ("No existe el usuario", 404)
    res.status(200).json({message:"Se ha borrado un usuario"})
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message});
  }
};

const getAuthStatus=async(req, res)=>{
  try {
    const id = req.id;
    const user = await User.findById(id);
    if(!user) throw new CustomError("Autenticacion fallida0")
    res.status(200).json({user});
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message});

  }
}
module.exports = {
    getUsers,
    getuserForEmail,
    addUser,
    editUser,
    deleteUser,
    login,
    getAuthStatus
};