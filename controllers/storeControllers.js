const mongoose = require('mongoose');
const Store = require('../models/store')

const createStore = async (req, res, next) => {
  const storeData = req.body
  let store
  try {
     store = await new Store(storeData)
  } catch (error) {
    return next(error)
  }

  try {
  await store.save()
  } catch (error) {
    console.log(error)
  }
  res.send({store: store})
}


exports.createStore = createStore;

