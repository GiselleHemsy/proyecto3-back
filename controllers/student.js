const CustomError = require("../utils/CustomError");
const Student = require ("../models/Student");
const bcrypt = require ("bcryptjs");
const {validatorResults} = require ("express-validator");
const jwt = require ("jsonwebtoken");


const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({students})
    } catch (error) {
        res.status (error.code || 500).json({message:"Todos los estudiantes"});
    }
};


const addStudent = async (req,res)=>{
    try {
      const {name, lastname, expediente, dni, age, email, cel, course, cuota} = req.body;
      const salt = await bcrypt.genSalt(10);
      const newStudent = new Student(
        {name, 
        lastname, 
        expediente, 
        dni, 
        age, 
        email, 
        cel, 
        course,
        cuota}
    );
      const studentSaved = await newStudent.save();
      res.status(200).json({ message: "Se ha creado un estudiante", student: studentSaved });
    } catch (error) {
      res.status(error.code || 500).json({ message: error});
    }
  };


  const editStudent = async (req,res)=>{
    try {
      const{email, fields}= req.body;
      const studentModified= await Student.findOneAndUpdate({email},fields,{new:true});
      res.status(200).json({message:"Se ha editado estudiante", studentModified})
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };

  const deleteStudent = async (req,res)=>{
    try {
      const {id} = req.body;
      const StudentDeleted = await Student.findByIdAndDelete(id);
      if(!StudentDeleted)  throw new CustomError ("No existe el estudiante", 404)
      res.status(200).json({message:"Se ha borrado un estudiante"})
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message});
    }
  };

module.exports = {
    getStudents,
    addStudent,
    editStudent,
    deleteStudent
};