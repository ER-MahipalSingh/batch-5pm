const dotenv = require("dotenv");

dotenv.config();

exports.env = {
    PORT: process.env.PORT,

    MONGODB_URI: process.env.MONGODB_URI
}