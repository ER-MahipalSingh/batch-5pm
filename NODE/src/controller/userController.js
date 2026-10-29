const User = require("../model/userModel");

exports.register = async () => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All filed are required" });
    }

    const createUser = await User.create(name, email, password);

    return res
      .status(201)
      .json({ message: "Registeration successful", createUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Somthings went wrong while registeration" });
  }
};
