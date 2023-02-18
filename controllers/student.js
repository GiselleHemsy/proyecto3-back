const CustomError = require("../utils/CustomError");
const Student = require ("../models/Student");


const getStudents = (req, res) => {
    res.status(200).json({message:"Todos los cursos"})
}

const addStudent = (req,res)=>{
    res.status(200).json({message:"Se ha creado un cursoun curso"})
}

const editStudent = (req,res)=>{
    res.status(200).json({message:"Se ha editado un curso"})
}

const deleteStudent = (req,res)=>{
    res.status(200).json({message:"Se ha borrado un curso"})
}

module.exports = {
    getStudents,
    addStudent,
    editStudent,
    deleteStudent
};