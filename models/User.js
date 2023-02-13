const {Schema, model} = require ("mongoose");

const UserSchema = new Schema(
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
        min:[8, "No puede tener menos de 8 caracteres"],
        max:[8, "No puede tener mas de 8 caracteres"]
    },
    age:{
        type:Number,
        required: [true, "La edad es obligatoria"],
        trim: true,
        min:[2, "No puede tener menos de 2 caracteres"],
        max:[2, "No puede tener mas de 2 caracteres"]

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

    },
    course:{
        type:Number,
        required: [true, "El curso es obligatorio"],
        trim:true

    },
    cuota:{
        type: Boolean,
        required: true
    },
    admin:{
        type: Boolean,
        default: false
    }},{
        timestamps:{
            createdAt:true,
            updatedAt:false,
        },
        versionkey:false
    }
)

module.exports = model("User", UserSchema);