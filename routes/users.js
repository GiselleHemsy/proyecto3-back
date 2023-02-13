const {Router} = require ("express");
const { getUsers, addUser, editUser, deleteUser } = require("../controllers/users");
const verifyRole = require("../middlewares/verifyRole");
const router = Router();

router.get ("/", getUsers);
router.put ("/", verifyRole, editUser);
router.delete ("/", verifyRole, deleteUser);
router.post ("/", verifyRole, addUser);


module.exports = router;