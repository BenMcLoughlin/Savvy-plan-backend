const express = require("express");
const router = express.Router();
const { createStore, getStore, saveStore } = require("../controllers/storeControllers");
const { createOne, getOne, updateOne } = require("../controllers/handlerFactory");
const {protect} = require("../controllers/authControllers");
const Store = require("../models/store");

router.post("/createStore", protect, createStore);
router.get("/getStore", protect, getStore);
router.patch("/saveStore", protect, saveStore);


module.exports = router;
