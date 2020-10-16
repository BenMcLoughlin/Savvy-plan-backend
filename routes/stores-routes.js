const express = require('express');
const router = express.Router();
const storeControllers = require('../controllers/storeControllers')

router.post('/',storeControllers.createStore);


module.exports = router;