const CustomError = require("../utils/CustomError");
const user = require ("../models/User");
const User = require("../models/User");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status (error.code || 500).json({message:"person, algo salio mal"});
    }
};

const addUser = async (req,res)=>{
    try{
        console.log(req.body)
const newUser = new User (req.body);
const user = await newUser.save();
if (!user) throw new CustomError ("Fallo el guardado");
res. status(201).json({message: "El usuario se creo correctamente", user})
    } catch(error){
        console.log(error)
    res.status(400).json({message:error.message})
    }
}

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
    deleteUser
};