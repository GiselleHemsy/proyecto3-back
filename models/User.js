const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      uppercase: true,
      minLength: [2, "Debe tener al menos dos caracteres"],
      maxLength: [30, "Debe tener como máximo treinta caracteres"],
    },
    lastname: {
      type: String,
      required: [true, "El apellido es obligatorio"],
      trim: true,
      uppercase: true,
      minLength: [2, "Debe tener al menos dos caracteres"],
      maxLength: [30, "Debe tener como máximo treinta caracteres"],
    },
    dni: {
      type: Number,
      required: [true, "El DNI es obligatorio"],
      trim: true,
      unique: [true, "Ya existe el DNI"],
      minLength: [8, "No puede tener menos de 8 caracteres"],
      maxLength: [9, "No puede tener mas de 8 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      trim: true,
      unique: [true, "Ya existe el email"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "La contraseña es obligatoria"],
    },
    cel: {
      type: Number,
      required: [true, "El tel es obligatorio"],
      trim: true,
      minLength: [9, "No puede tener menos de 9 caracteres"],
      maxLength: [13, "No puede tener mas de 6 caracteres"],
    },
    admin: {
      type: Boolean,
      default: false,
    },
    adress:{
      type:String,
      trim:true
    },
    state:{
      type:Boolean,
      required:[true, "El estado es obligatorio"],
      default: true,
    },
    course:{
      type:Schema.Types.ObjectId,
      ref: "Course"
    },
    income:{
      type:Date,
      trim:true,
      required: [true, "La fecha de ingreso es obligatoria"],
      minLength:[6, "No puede tener menos de 6 caracteres"],
      maxLength:[8, "No puede tener mas de 8 caracteres"]
  }
},
{
    timestamps: {
        createdAt: true,
        updatedAt: false,
    },
  
  }
);



module.exports = model("User", UserSchema);
