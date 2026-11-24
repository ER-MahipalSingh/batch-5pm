const express = require("express");
const {
  register,
  login,
  loadUser,
  updateUser,
} = require("../controller/userController");
const { validate } = require("../middleware/validate");
const {
  registerValidate,
  loginValidate,
} = require("../validatores/userValidatore");
const { isAuth } = require("../middleware/isAuth");

const router = express.Router();

router.post("/register", validate(registerValidate), register);
router.post("/login", validate(loginValidate), login);
router.get("/me", isAuth, loadUser);
router.patch("/update", isAuth, updateUser);

module.exports = router;
