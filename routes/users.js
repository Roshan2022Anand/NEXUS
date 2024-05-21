const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNo: String,
  whatsApp: String,
  qualification: String,
  address: String
});


module.exports = mongoose.model('users', userSchema);