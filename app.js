const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/user-routes");
const storeRoutes = require("./routes/stores-routes");
const dotenv = require("dotenv");
const globalErrorHandler = require("./controllers/errorController");

dotenv.config({ path: "./config.env" });
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "x-requested-with, Content-Type, origin, authorization, accept, client-security-token");
  next();
});



app.use("/api/users", usersRoutes);
app.use("/api/store", storeRoutes);

app.use(globalErrorHandler);

mongoose.set("returnOriginal", false);

mongoose
  .connect(process.env.DATABASE_COMPASS, { useNewUrlParser: true })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
