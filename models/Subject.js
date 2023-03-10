const {Schema, model} = require ("mongoose");

const SubjectSchema = new Schema(
    {
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"],
        trim:true,
        uppercase:true
    },
    course:{
        type:Schema.Types.ObjectId,
        ref: "Course"
    }},{
        timestamps:{
            createdAt:true,
            updatedAt:false,
        },
        versionKey:false
    }
);

module.exports = model("Subject", SubjectSchema);