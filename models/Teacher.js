const { Schema, model } = require ("mongoose");

const TeacherSchema = new Schema(
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
    id:{
        type:Number,
        required:[true, "por favor agrega un id"],
        trim:true,
        unique:[true, "agraga un id unico"],
        minLength:[5, "No puede tener menos de 5 caracteres"],
        maxLength:[5, "No puede tener mas de 5 caracteres"]
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
    adress:{
        type:String,
        trim:true
    },
    state:{
        type:Boolean,
        required:[true, "El estado es obligatorio"]
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
    }},{
    timestamps:{
        createdAt:true,
        updatedAt:false,
    },
    versionKey:false
}
);

module.exports = model("Teacher", TeacherSchema);