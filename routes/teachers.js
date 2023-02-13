const {Router} = require ("express");
const { getTeachers, editTeacher, deleteTeacher, addTeacher} = require("../controllers/teachers");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getTeachers);
router.put ("/",verifyRole, editTeacher);
router.delete ("/", verifyRole, deleteTeacher);
router.post ("/", verifyRole, addTeacher);


module.exports = router;