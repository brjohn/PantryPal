const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  pantry: {
    type: Array,
    "default": []
  }
}, {
  timestamps: true
})

// Decide later:
// add booleans for user's dietary preferences
// create an association for user's saved recipe IDs here
// create an association for user's pantry

module.exports = User = mongoose.model('User', UserSchema);