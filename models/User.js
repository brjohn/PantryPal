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
  ingredients: {  
    type: Array,
    "default": []
    // type: Schema.Types.ObjectId,
    // ref: 'ingredients'
  },
  preferences: {
    type: Array,
    "default": []
  },
  exclusions: {
    type: Array,
    "default": []
  },
  recipes: {
    type: Array,
    "default": []  
    // references recipes
  },

}, {
  timestamps: true
})

// Decide later:
// add booleans for user's dietary preferences
// create an association for user's saved recipe IDs here
// create an association for user's pantry

module.exports = User = mongoose.model('User', UserSchema);