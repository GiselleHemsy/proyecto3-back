const {Schema, model} = require ("mongoose");

const StudentSchema = new Schema(
    {
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"],
        trim:true,
        uppercase:true
    },
    lastname:{
        type:String,
        required:[true, "El apellido es obligatorio"],
        trim:true,
        uppercase:true
    },
    expediente:{
        type: Number,
        required:[true, "El N° de expediente es obligatorio"],
        trim:true,
        unique:[true, "Ya existe el N° de expediente"]
    },
    dni:{
        type:Number,
        required:[true, "El DNI es obligatorio"],
        trim:true,
        unique:[true, "Ya existe el DNI"],
        minLength:[8, "No puede tener menos de 8 caracteres"],
        maxLength:[8, "No puede tener mas de 8 caracteres"]
    },
    age:{
        type:Number,
        required: [true, "La edad es obligatoria"],
        trim: true,
        minLength:[2, "No puede tener menos de 2 caracteres"],
        maxLength:[2, "No puede tener mas de 2 caracteres"]

    },
    email:{
        type:String,
        required:[true, "El email es obligatorio"],
        trim:true,
        unique:[true, "Ya existe el email"]
    },
    cel:{
        type:Number,
        required: [true, "El tel es obligatorio"],
        trim: true,
        minLength:[6, "No puede tener menos de 6 caracteres"],
        maxLength:[13, "No puede tener mas de 6 caracteres"]

    },
    course:{
        type:Number,
        required: [true, "El curso es obligatorio"],
        trim:true
    },
    cuota:{
        type:Boolean,
        required: [true, "La cuota es obligatorio"]
    }},{
    timestamps:{
            createdAt:true,
            updatedAt:false,
        },
        versionKey:false
    }
);

module.exports = model("Student", StudentSchema);