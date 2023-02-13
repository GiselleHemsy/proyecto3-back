

const verifyRole = (req,res,next)=>{
    console.log(req.body)
    const admin = true;
    if(admin){
        next();
    }else{
        res.status(403).json({
            message:"Usted no tiene acceso"
        })
    }
}

module.exports = verifyRole;