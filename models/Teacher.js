const { Schema, model } = require ("mongoose");

const TeacherSchema = new Schema(
    {
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"],
        trim:true,
        lowercase:true
    },
    lastname:{
        type:String,
        required:[true, "El apellido es obligatorio"],
        trim:true,
        lowercase:true
    },
    dni:{
        type:Number,
        required:[true, "El DNI es obligatorio"],
        trim:true,
        unique:[true, "Ya existe el DNI"],
        min:[8, "No puede tener menos de 8 caracteres"],
        max:[8, "No puede tener mas de 8 caracteres"]
    },
    email:{
        type:String,
        required:[true, "El email es obligatorio"],
        trim:true,
        unique:[true, "Ya existe el email"]
    },
    tel:{
        type:Number,
        required: [true, "El tel es obligatorio"],
        trim: true,
        min:[6, "No puede tener menos de 6 caracteres"],
        max:[13, "No puede tener mas de 6 caracteres"]
    }},{
    timestamps:{
        createdAt:true,
        updatedAt:false,
    },
    versionKey:false
}
);

module.exports = model("Teacher", TeacherSchema);