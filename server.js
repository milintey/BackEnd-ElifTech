const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Ilia:NEWlife@cluster0.uvs9aws.mongodb.net/delivery";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Server running. Use our API on port: 3000");
    console.log("Database connect success");
  })
  .catch((error) => console.log(error.message));
