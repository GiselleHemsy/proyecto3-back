const User = require("../models/User");


const verifyRole = async(req,res,next)=>{
    const id = req.id
    const user = await User.findById(id);
    const admin = user?.admin
    if(admin){
        next();
    }else{
        res.status(403).json({
            message:"Usted no tiene acceso"
        })
    }
}

module.exports = verifyRole;