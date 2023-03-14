const CustomError = require("../utils/CustomError");
const Course = require ("../models/Course");
const bcrypt = require ("bcryptjs");
const {validatorResults} = require ("express-validator");
const jwt = require ("jsonwebtoken");




const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({courses})
    } catch (error) {
        res.status (error.code || 500).json({message:"perdon, algo salio mal"});
    }
};

const addCourse = async (req,res)=>{
  try {
    const {name} = req.body;
    const newCourse = new Course({name});
    const courseSaved = await newCourse.save();
    res.status(200).json({ message: "Se ha creado un curso", course: courseSaved });
  } catch (error) {
    res.status(error.code || 500).json({ message: error});
  }
};

const editCourse = async (req,res)=>{
  try {
    const{courseId, fields}= req.body;
    const courseModified= await Course.findByIdAndUpdate(courseId,fields,{new:true});
    res.status(200).json({message:"Se ha editado un curso", courseModified})
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message});
  }
};

const deleteCourse = async (req,res)=>{
  try {
    const {courseId} = req.body;
    const CourseDeleted = await Course.findOneAndDelete({_id:courseId})
    console.log(CourseDeleted)
    if(!CourseDeleted)  throw new CustomError ("No existe el curso", 404)
    res.status(200).json({message:"Se ha borrado un curso", CourseDeleted})
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message});
  }
};
module.exports = {
    getCourses,
    addCourse,
    editCourse,
    deleteCourse
};