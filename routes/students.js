const {Router} = require ("express");
const { addStudent, getStudents, deleteStudent, editStudent, getStudentByCourse, getStudentForEmail } = require("../controllers/student");
const auth = require("../middlewares/auth");
const validateFields = require("../middlewares/validateField");
const verifyRole = require("../middlewares/verifyRole");
const { check } = require("express-validator");
const router = Router();


router.get ("/", getStudents);
router.get ("/course", getStudentByCourse);
router.get("/email/:email?", getStudentForEmail);
router.put ("/", auth, verifyRole, editStudent );
router.delete ("/:email?",auth, verifyRole, deleteStudent);
router.post ("/",
[
  auth, verifyRole, 
  check("name").not().isEmpty().isString().isLength({ min:5, max: 30  }), 
  check("lastname").not().isEmpty().isString().isLength({ min:5, max: 30  }),
  check("expediente").not().isEmpty().matches(/^[0-9]+$/),
  check("dni").not().isEmpty().matches(/^[0-9]+$/),
  check("age").not().isEmpty().matches(/^[0-9]+$/),
  check("email").isEmail().matches(/\S+@\S+\.\S+/),
  check("cel").not().isEmpty().matches(/^[0-9]+$/),
  check("course").not().isEmpty().isMongoId(),
  check("cuota").not().isEmpty().isBoolean(),
    validateFields,
    ],
  addStudent
  );


module.exports = router;


