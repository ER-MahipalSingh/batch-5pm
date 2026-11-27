const express = require("express");
const {
  loadUser,
  updateUser,
  sendOTPToMail,
  verifyOTPandResetPassword,
} = require("../controller/userController");

const { isAuth } = require("../middleware/isAuth");

const router = express.Router();

router.get("/me", isAuth, loadUser);
router.patch("/update", isAuth, updateUser);
router.post("/send-otp", isAuth, sendOTPToMail);
router.post("/reset-password", verifyOTPandResetPassword);

module.exports = router;
