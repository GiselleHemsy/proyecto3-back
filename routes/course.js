const {Router} = require ("express");
const { addCourse, getCourses, deleteCourse, editCourse } = require("../controllers/course");
const auth = require("../middlewares/auth");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getCourses);
router.put ("/",auth, verifyRole, editCourse );
router.delete ("/", auth, verifyRole, deleteCourse);
router.post ("/", auth, verifyRole, addCourse);


module.exports = router;