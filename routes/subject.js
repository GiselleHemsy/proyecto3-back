const {Router} = require ("express");
const { getSubjects, editSubject, deleteSubject, addSubject } = require("../controllers/subject");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();


router.get ("/", getSubjects);
router.put ("/", verifyRole, editSubject);
router.delete ("/", verifyRole, deleteSubject);
router.post ("/", verifyRole, addSubject);


module.exports = router;