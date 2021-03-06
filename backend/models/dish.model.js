const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: {type: String, required: false},
  dishId: { type: String, required: true,unique:true },
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;