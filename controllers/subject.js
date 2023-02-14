const CustomError = require("../utils/CustomError");
const user = require ("../models/Subject");




const getSubjects = (req, res) => {
    res.status(200).json({message:"Todas las materias"})
}

const addSubject = (req,res)=>{
    res.status(200).json({message:"Se ha creado una materia"})
}

const editSubject = (req,res)=>{
    res.status(200).json({message:"Se ha editado una materia"})
}

const deleteSubject = (req,res)=>{
    res.status(200).json({message:"Se ha borrado una materia"})
}

module.exports = {
    getSubjects,
    addSubject,
    editSubject,
    deleteSubject
};