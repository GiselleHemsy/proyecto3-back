const mongoose = require ("mongoose");

const connectDB = async()=>{
try{
    await mongoose.connect(process.env.DB_URI);
}catch(error) {
    }   
}

module.exports = connectDB;