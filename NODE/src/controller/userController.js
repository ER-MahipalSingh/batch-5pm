const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All filed are required" });
    }

    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(401).json({ message: "User already register" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const createUser = await User.create({ name, email, password: hashPass });

    return res
      .status(201)
      .json({ message: "Registeration successful", createUser });
  } catch (error) {
    console.error("Error: ", error);

    return res
      .status(500)
      .json({ message: "Somthings went wrong while registeration" });
  }
};
