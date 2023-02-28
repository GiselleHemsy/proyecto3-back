const {Router} = require ("express");
const { addCourse, getCourses, deleteCourse, editCourse } = require("../controllers/course");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getCourses);
router.put ("/", verifyRole, editCourse );
router.delete ("/", /*verifyRole,*/ deleteCourse);
router.post ("/", verifyRole, addCourse);


module.exports = router;