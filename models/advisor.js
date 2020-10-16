

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const advisorSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  clients: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  signUpDate: { type: String, required: true, unique: true },
  planType: { type: String, required: true, unique: true },
});

advisorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Advisor', advisorSchema);

