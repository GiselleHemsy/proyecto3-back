const CustomError = require("../utils/CustomError");
const Teacher = require ("../models/Teacher");
const bcrypt = require ("bcryptjs");
const {validatorResults} = require ("express-validator");
const jwt = require ("jsonwebtoken");



const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find().populate("course");
        res.status(200).json({teachers});
    } catch (error) {
        res.status (error.code || 500).json({message:"perdon, algo salio mal"});
    }
};

const addTeacher = async (req, res) => {
    try {
      const { name, lastname, dni, email, cel, adress, state, course, income} = req.body;
      const newTeacher = new Teacher({
        name,
        lastname,
        dni,
        email,
        cel,
        adress,
        state,
        course,
        income
      });
      const teacherSaved = await newTeacher.save();
      res.status(200).json({ message: "El profesor se creó correctamente", user: teacherSaved });
    } catch (error) {
      res.status(error.code || 500).json({ message: error});
    }
  };


const editTeacher = async (req,res)=>{
    try {
      const{email, fields}= req.body;
      const teacherModified= await Teacher.findOneAndUpdate({email},fields,{new:true});
      res.status(200).json({message:"Se ha editado un profesor", teacherModified})
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };


const deleteTeacher = async (req,res)=>{
    try {
      const {id} = req.body;
      const TeacherDeleted = await Teacher.findByIdAndDelete(id);
      if(!TeacherDeleted)  throw new CustomError ("No existe el profesor", 404)
      res.status(200).json({message:"Se ha borrado un profesor"})
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };

module.exports = {
    getTeachers,
    addTeacher,
    editTeacher,
    deleteTeacher
};