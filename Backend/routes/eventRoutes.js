const express = require("express");
const { createEvent } = require("../controllers/eventControllers");
// const { router } = require("../app");
const router = express.Router();



router.route("/add").post(createEvent)

module.exports = router;