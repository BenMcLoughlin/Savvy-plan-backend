const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users-routes");
const storeRoutes = require("./routes/stores-routes");

const app = express();

app.use(bodyParser.json());

app.use("/stores", storeRoutes);
app.use("/users", usersRoutes);



//environment variables are stored in the nodemon.json file
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mrznl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority
    `
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
