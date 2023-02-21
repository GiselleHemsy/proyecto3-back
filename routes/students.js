const {Router} = require ("express");
const { addStudent, getStudents, deleteStudent, editStudent, getCourse, getStudentForEmail } = require("../controllers/student");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getStudents);
router.get ("/:course", getCourse);
router.get("/filter/:email", getStudentForEmail);
router.put ("/", verifyRole, editStudent );
router.delete ("/", verifyRole, deleteStudent);
router.post ("/", verifyRole, addStudent);


module.exports = router;