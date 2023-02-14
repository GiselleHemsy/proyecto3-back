const CustomError = require("../utils/CustomError");
const user = require ("../models/Course");




const getCourses = (req, res) => {
    res.status(200).json({message:"Todos los cursos"})
}

const addCourse = (req,res)=>{
    res.status(200).json({message:"Se ha creado un cursoun curso"})
}

const editCourse = (req,res)=>{
    res.status(200).json({message:"Se ha editado un curso"})
}

const deleteCourse = (req,res)=>{
    res.status(200).json({message:"Se ha borrado un curso"})
}

module.exports = {
    getCourses,
    addCourse,
    editCourse,
    deleteCourse
};