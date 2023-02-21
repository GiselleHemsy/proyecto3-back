const {Router} = require ("express");
const { addStudent, getStudents, deleteStudent, editStudent, getCourse } = require("../controllers/student");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getStudents);
router.get ("/", getCourse);
router.put ("/", verifyRole, editStudent );
router.delete ("/", verifyRole, deleteStudent);
router.post ("/", verifyRole, addStudent);


module.exports = router;