const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Name is required"],
    },
    otp: {
      type: String,
      required: [true, "OTP is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("OTP", otpSchema);
