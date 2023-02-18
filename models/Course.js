const {Schema, model} = require ("mongoose");

const CourseSchema = new Schema(
    {
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"],
        trim:true,
        lowercase:true
    }},{
    timestamps:{
            createdAt:true,
            updatedAt:false,
        },
    versionKey:false
    }
);

module.exports = model("Course", CourseSchema);