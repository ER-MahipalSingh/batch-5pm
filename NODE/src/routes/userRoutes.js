const express = require("express");
const {
  loadUser,
  updateUser,
  sendOTPToMail,
} = require("../controller/userController");

const { isAuth } = require("../middleware/isAuth");

const router = express.Router();

router.get("/me", isAuth, loadUser);
router.patch("/update", isAuth, updateUser);
router.post("/send-otp", isAuth, sendOTPToMail);

module.exports = router;
