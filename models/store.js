const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Stream = require("./schemaTypes/streamSchemaType");
const UserVariables = require("./schemaTypes/userSchemaType");

const storeSchema = new Schema({
  stream_reducer: { type: Map, of: Stream },
  ui_reducer: {
    colorIndex: {
      type: Number,
      required: true,
    },
    dualSelectValue: {
      type: Boolean,
      required: true,
    },
    newStream: {
      type: Boolean,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
    scenarios: {
      type: Map,
      required: true,
    },
    selectedAccount: {
      type: String,
      required: true,
    },
    selectedId: {
      type: String,
      required: true,
    },
    selectedPage: {
      type: String,
      required: true,
    },
    selectedScenario: {
      type: Number,
      required: true,
    },
    selectedUser: {
      type: String,
      required: true,
    },
  },
  user_reducer: {
    desiredRetirementIncome: {
      type: Number,
      required: true,
    },
    hasChildrenStatus: {
      type: String,
    },
    inflationRate: {
      type: Number,
      required: true,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    MER: {
      type: Number,
      required: true,
    },
    numberOfChildren: {
      type: Number,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    rate1: {
      type: Number,
      required: true,
    },
    rate2: {
      type: Number,
      required: true,
    },
    user1: UserVariables,
    user2: UserVariables,
  },
  userId: { type: ObjectID },
});

// const storeSchema = new Schema({
//   ui_reducer: {
//     colorIndex: {
//       type: Number,
//       required: true,
//     },
//     dualSelectValue: {
//       type: Boolean,
//       required: true,
//     },
//     newStream: {
//       type: Boolean,
//       required: true,
//     },
//     progress: {
//       type: Number,
//       required: true,
//     },
//     scenarios: {
//       type: Map,
//       required: true,
//     },
//     selectedAccount: {
//       type: String,
//       required: true,
//     },
//     selectedId: {
//       type: String,
//       required: true,
//     },
//     selectedPage: {
//       type: String,
//       required: true,
//     },
//     selectedScenario: {
//       type: Number,
//       required: true,
//     },
//     selectedUser: {
//       type: String,
//       required: true,
//     },
//   },
//   user_reducer: {
//     desiredRetirementIncome: {
//       type: Number,
//       required: true,
//     },
//     hasChildrenStatus: {
//       type: String,
//       required: true,
//     },
//     inflationRate: {
//       type: Number,
//       required: true,
//     },
//     maritalStatus: {
//       type: String,
//       required: true,
//     },
//     MER: {
//       type: Number,
//       required: true,
//     },
//     numberOfChildren: {
//       type: Number,
//       required: true,
//     },
//     province: {
//       type: String,
//       required: true,
//     },
//     rate1: {
//       type: Number,
//       required: true,
//     },
//     rate2: {
//       type: Number,
//       required: true,
//     },
//     user1: UserVariables,
//     user2: UserVariables,
//   },
//   stream_reducer: { type: Map, of: Stream },
//   // userId: { type: ObjectID },
// });

module.exports = mongoose.model("Stream", storeSchema);

// const storeSchema = new Schema({
//   ui_reducer: {
//     colorIndex:{
//       type: Number,
//       required: true,
//     },
//     dualSelectValue: {
//       type: String,
//       required: true,
//     },
//     progress: {
//       type: Number,
//       required: true,
//     },
//     selectedAccount: {
//       type: String,
//       required: true,
//     },
//     selectedUser: {
//       type: String,
//       required: true,
//     },
//     selectedId: {
//       type: String,
//       required: true,
//     },
//     selectedPage: {
//       type: String,
//       required: true,
//     },
//     selectedScenario: {
//       type: Number,
//       required: true,
//     },
//     scenarios: {
//       type: Number,
//       required: true,
//     },
//   },
//   user_reducer: {
//     hasUnsecuredDebt: {
//       type: Boolean,
//       required: true,
//     },
//     hasChildrenStatus: {
//       type: String,
//       required: true,
//     },
//     inflationRate: {
//       type: Number,
//       required: true,
//     },
//     ownHome: {
//       type: Boolean,
//       required: true,
//     },
//     numberOfChildren: {
//       type: Number,
//       required: true,
//     },
//     province: {
//       type: Number,
//       required: true,
//     },
//     user1: {
//       birthYear: {
//         type: Number,
//         required: true,
//       },
//       firstName: {
//         type: Number,
//         required: true,
//       },
//      hasChildren: {
//         type: Boolean,
//         required: true,
//       },
//      isMarried: {
//         type: Boolean,
//         required: true,
//       },
//       gender: {
//         type: String,
//         required: true,
//       },
//     },
//     user2: {
//       birthYear: {
//         type: Number,
//         required: true,
//       },
//       firstName: {
//         type: Number,
//         required: true,
//       },
//       gender: {
//         type: String,
//         required: true,
//       },
//     },
//   },
//   main_reducer: Schema.Types.Mixed,
// });
