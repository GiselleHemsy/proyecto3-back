const express = require ("express");
const usersRoutes = require ("./routes/users");
const teachersRoutes = require ("./routes/teachers");
const subjectRoutes = require ("./routes/subject");
const courseRoutes = require ("./routes/course");
const morgan = require ("morgan");
const cors = require ("cors");
const connectDB = require("./db/db");
const app = express();
require("dotenv").config();


connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cors())


app.use ("/users", (req, res)=>res.status(200).json({test:req.body}))
app.use ("/teachers", teachersRoutes)
app.use ("/subject", subjectRoutes)
app.use ("/course", courseRoutes)

const PORT = process.env.PORT;

app.listen (PORT, () =>{console.log(`server listening on port ${PORT}`)})
