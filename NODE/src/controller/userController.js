const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All filds are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "Password invalid" });
    }
    user.password = undefined;
    const token = generateToken(user.id, res);
    return res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Error: ", error);

    return res
      .status(500)
      .json({ message: "Somthings went wrong while login" });
  }
};

exports.loadUser = async (req, res) => {
  try {
    const id = req.params.id;
    // const id = req.user.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User data", user });
  } catch (error) {
    console.error("Error: ", error);

    return res
      .status(500)
      .json({ message: "Somthings went wrong while fetch user" });
  }
};
