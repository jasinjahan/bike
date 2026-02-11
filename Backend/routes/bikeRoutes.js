const express = require("express");
const { createBike } = require("../controllers/bikeControllers");
const { userAuthenticate, userAuthorized } = require("../middlewares/auth");
const router = express.Router();

router.route('/add').post(userAuthenticate,userAuthorized(['admin','seller']),createBike)


module.exports= router;

