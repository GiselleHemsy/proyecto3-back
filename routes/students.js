const {Router} = require ("express");
const { addStudent, getStudents, deleteStudent, editStudent, getStudentByCourse, getStudentForEmail } = require("../controllers/student");
const auth = require("../middlewares/auth");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getStudents);
router.get ("/course", getStudentByCourse);
router.get("/email/:email?", getStudentForEmail);
router.put ("/", auth, verifyRole, editStudent );
router.delete ("/:email?",auth, verifyRole, deleteStudent);
router.post ("/",auth, verifyRole, addStudent);

// router.get("/email/:email?",getuserForEmail)
module.exports = router;