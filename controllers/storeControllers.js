const mongoose = require("mongoose");
const Store = require("../models/store");
const catchAsync = require("./../utils/catchAsync");
const User = require("../models/userModel");

exports.createStore = catchAsync(async (req, res, next) => {
  req.body.userId = req.user.id;
  const doc = await Store.create(req.body);
  const user = await User.findByIdAndUpdate(req.user.id, { ...req.body.userId, storeId: doc.id });
  res.status(201).json({ status: "success", data: doc, user });
});

exports.getStore = catchAsync(async (req, res, next) => {
  let query = Store.findOne({ userId: req.user.id });
  const doc = await query;
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.saveStore = catchAsync(async (req, res, next) => {

  const doc = await Store.findByIdAndUpdate(req.user.storeId, { ...req.body });
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  doc.save();
  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });

});

// exports.createStore = (req, res, next) => {
//   req.params.id = req.user.id;
//   next();
// };

// const createStore = async (req, res, next) => {
//   const storeData = req.body
//   console.log()
//   let store
//   try {
//      store = await new Store(storeData)
//   } catch (error) {
//     return next(error)
//   }

//   try {
//   await store.save()
//   } catch (error) {
//     console.log(error)
//   }
//   res.send({store: store})
// }

// exports.createStore = createStore;
