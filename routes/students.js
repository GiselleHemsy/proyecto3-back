const {Router} = require ("express");
const { addStudent, getStudents, deleteStudent, editStudent, getStudentByCourse, getStudentForEmail } = require("../controllers/student");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getStudents);
router.get ("/course", getStudentByCourse);
router.get("/email", getStudentForEmail);
router.put ("/", verifyRole, editStudent );
router.delete ("/", verifyRole, deleteStudent);
router.post ("/", verifyRole, addStudent);


module.exports = router;