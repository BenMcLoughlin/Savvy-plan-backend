const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  birthYear: { type: String },
  email: { type: String, required: [true, "Please provide your email"], unique: true },
  password: { type: String, required: [true, "Please provide a password"], minlength: 6 },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
    minlength: 6,
  },
  advisor: { type: mongoose.Types.ObjectId, ref: "Advisor" },
  signUpDate: { type: String, required: true, unique: true },
  planType: {
    type: String,
    enum: ["trial", "subscribed"],
    default: "trial",
  },
  role: {
    type: String,
    enum: ["user", "advisor"],
    default: "user",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  userId: { type: Schema.Types.ObjectId },
  storeId: { type: Schema.Types.ObjectId },
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
