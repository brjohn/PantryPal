const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   ref: "users",
  // },
  // spoonacularId: {
  //   type: Number,
  //   required: true
  // },
  // title: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  //   required: true,
  // },
  // usedIngredients: {
  //   type: String,
  //   required: true,
  // },
  recipeObject: {
    type: Object,  //test this to make sure we can store multiple objects in Recipe schema
    required: true,
  },
}, {
  timestamps: true,
})


// id, title, image, usedIngredients, directions