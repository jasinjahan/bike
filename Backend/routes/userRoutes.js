const express = require("express");
const { userRegister, userLogin, updateProfile, userLogout, getAllUsers } = require("../controllers/userControllers");
const { userAuthenticate, userAuthorized } = require("../middlewares/auth");
const router = express.Router();

router.route('/register').post(userRegister);
router.route('/login').post(userLogin)
router.route('/me').patch(userAuthenticate,updateProfile);
router.route('/logout').post(userAuthenticate,userLogout);
router.route('/list').get(userAuthenticate,userAuthorized(['admin']),getAllUsers);

module.exports = router;