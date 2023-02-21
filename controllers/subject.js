const CustomError = require("../utils/CustomError");
const Subject = require ("../models/Subject");
const bcrypt = require ("bcryptjs");
const {validatorResults} = require ("express-validator");
const jwt = require ("jsonwebtoken");



const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({subjects})
    } catch (error) {
        res.status (error.code || 500).json({message:"Todas las materias"});
    }
};


const addSubject = async (req,res)=>{
    try {
      const {name} = req.body;
      const newSubject = new Subject({name});
      const subjectSaved = await newSubject.save();
      res.status(200).json({ message: "Se ha creado una materia", subject: subjectSaved });
    } catch (error) {
      res.status(error.code || 500).json({ message: error});
    }
  };


const editSubject = async (req,res)=>{
    try {
      const{name, fields}= req.body;
      const subjectModified= await Subject.findOneAndUpdate({name},fields,{new:true});
      res.status(200).json({message:"Se ha editado una materia", subjectModified})
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };


  const deleteSubject = async (req,res)=>{
    try {
      const {id} = req.body;
      const SubjectDeleted = await Subject.findByIdAndDelete(id);
      if(!SubjectDeleted)  throw new CustomError ("No existe la materia", 404)
      res.status(200).json({message:"Se ha borrado una materia"})
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };


module.exports = {
    getSubjects,
    addSubject,
    editSubject,
    deleteSubject
};