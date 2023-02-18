const express = require ("express");
const morgan = require ("morgan");
const cors = require ("cors");

const connectDB = require("./db/db");

const usersRoutes = require ("./routes/users");
const teachersRoutes = require ("./routes/teachers");
const subjectRoutes = require ("./routes/subject");
const courseRoutes = require ("./routes/course");
const studentsRoutes = require ("./routes/students");


const app = express();
require("dotenv").config();
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cors())


app.use ("/users", usersRoutes)
app.use ("/teachers", teachersRoutes)
app.use ("/subject", subjectRoutes)
app.use ("/course", courseRoutes)
app.use ("/students", studentsRoutes)

const PORT = process.env.PORT;

app.listen (PORT, () =>{console.log(`server listening on port ${PORT}`)})
