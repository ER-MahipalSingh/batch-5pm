const express = require("express");
const { env } = require("./src/config/env");

const { dbConnection } = require("./src/db/dbConnection");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working" });
});


app.use("/api/v1/auth", userRoutes);


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
