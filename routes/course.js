const {Router} = require ("express");
const { addCourse, getCourses, deleteCourse, editCourse } = require("../controllers/course");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", verifyRole, getCourses);
router.put ("/", verifyRole, addCourse );
router.delete ("/", verifyRole, deleteCourse);
router.post ("/", verifyRole, editCourse);


module.exports = router;