const express = require("express");
const { env } = require("./src/config/env");
const { dbConnection } = require("./src/db/dbConnection");


const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working" });
});

const startServer = async () => {
  try {
    await dbConnection();

    app.listen(env.PORT, () => {
      console.log(`Server started on port: ${env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};
startServer();