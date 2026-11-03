const mongoose = require("mongoose");
const { env } = require("../config/env");

exports.dbConnection = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error: ", error);
  }
};
