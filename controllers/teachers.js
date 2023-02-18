const CustomError = require("../utils/CustomError");
const Teacher = require ("../models/Teacher");





const getTeachers = (req, res) => {
    res.status(200).json({message:"Todos los profesores"})
}

const addTeacher = (req,res)=>{
    res.status(200).json({message:"Se ha creado un profesor"})
}

const editTeacher = (req,res)=>{
    res.status(200).json({message:"Se ha editado un profesore"})
}

const deleteTeacher = (req,res)=>{
    res.status(200).json({message:"Se ha borrado un profesore"})
}

module.exports = {
    getTeachers,
    addTeacher,
    editTeacher,
    deleteTeacher
};