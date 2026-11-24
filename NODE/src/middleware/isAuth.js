const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(409).json({ message: "User not found from isAuth" });
  }

  try {
    const decoaded = await jwt.verify(token, "jklhjurtfjuy655gcdgh");
    req.user = await User.findById(decoaded.id);
    if (!req.user) {
      return res.status(401).json({ message: "User not authicated" });
    }
    next();
  } catch (error) {
    console.error("Error: ", error);

    return (res.status(500), json({ message: "Authinatcation failed" }));
  }
};
