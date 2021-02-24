const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  spoontacular_recipe_id: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
})
