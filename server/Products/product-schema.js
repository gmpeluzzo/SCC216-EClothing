const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true,
    default: 1
  },
  quantity: {
    type: Number,
    default: 1
  },
  description: {
    type: String,
    default: "Esse produto não possui descrição."
  }
});

module.exports = mongoose.model('Products', productSchema);