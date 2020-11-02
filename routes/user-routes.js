const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/authControllers");
const userController = require("../controllers/userControllers");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Protect all routes after this middleware
//router.use(authController.protect);
//router.patch("/updateMyPassword", authController.updatePassword);
router.get("/my-profile", userController.getMe, userController.getUser);
router.patch("/update-profile", userController.updateProfile);
// router.patch("/updateProfile", userController.updateProfile);
// router.delete("/deleteMe", userController.deleteMe);
module.exports = router;
