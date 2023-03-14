const {Router} = require ("express");
const {check} = require ("express-validator");
const { getUsers, addUser, editUser, deleteUser, login, getuserForEmail, getAuthStatus } = require("../controllers/users");
const validateFields = require("../middlewares/validateField");
const verifyRole = require("../middlewares/verifyRole");
const auth = require ("../middlewares/auth");
const router = Router();

router.get ("/", getUsers);
router.put ("/", auth, verifyRole, editUser);
router.delete ("/",auth, verifyRole, deleteUser);
router.get("/email/:email?",getuserForEmail)
router.post("/",auth, verifyRole, addUser)

router.post ("/",
[
    auth,verifyRole,
    check("name").isString().not().isEmpty().isLength({min:2, max:30}),
    check("lastname").isString().not().isEmpty().isLength({min:2, mas:30}),
    check("dni").not().isEmpty().matches(/^[0-9]+$/),
    check("email").isEmail().matches(/\S+@\S+\.\S+/),
    check("password").not().isEmpty().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
    check("cel").not().isEmpty().matches(/^[0-9]+$/),
    check("course").not().isEmpty(),
    check("state").not().isEmpty(),
    check("adress").not().isEmpty(),
    check("admin").not().isEmpty(),
    check("income").not().isEmpty(),
    validateFields,
], 
addUser);

router.post ("/login",[
    check("email").isEmail().isLength({ min: 5, max: 50 }),
    check("password").not().isEmpty(),
    validateFields,
], login);

router.get("/authStatus",auth , getAuthStatus)


module.exports = router;



