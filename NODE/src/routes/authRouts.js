const express = require("express");
const { register, login } = require("../controller/userController");
const { validate } = require("../middleware/validate");
const {
  registerValidate,
  loginValidate,
} = require("../validatores/userValidatore");

const router = express.Router();

router.post("/register", validate(registerValidate), register);
router.post("/login", validate(loginValidate), login);

module.exports = router;
