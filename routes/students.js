const {Router} = require ("express");
const { addStudent, getStudents, deleteStudent, editStudent } = require("../controllers/student");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getStudents);
router.put ("/", verifyRole, addStudent );
router.delete ("/", verifyRole, deleteStudent);
router.post ("/", verifyRole, editStudent);


module.exports = router;