const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  
  userId:{type: String, required: true},
  dishId: { type: String, required: true }

}, {
  timestamps: true,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;