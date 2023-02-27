const {Schema, model} = require ("mongoose");

const CourseSchema = new Schema(
    {
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"],
        trim:true,
        uppercase:true
    }},{
    timestamps:{
            createdAt:true,
            updatedAt:false,
        },
    versionKey:false
    }
);

module.exports = model("Course", CourseSchema);