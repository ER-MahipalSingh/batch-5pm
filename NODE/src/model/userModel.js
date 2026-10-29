const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: True,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [6, "Password must be content atlist 6 char"],
      max: [10, "Password should benot grater then 10 char"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
