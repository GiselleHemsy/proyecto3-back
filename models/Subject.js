const {Schema, model} = require ("mongoose");

const UserSchema = new Schema(
    {
    name:{
        type:String,
        required:[true, "El nombre es obligatorio"],
        trim:true,
        lowercase:true
    },{
        timestamps:{
            createdAt:true,
            updatedAt:false,
        },
        versionkey:false
    }
)

module.exports = model("Subject", UserSchema);