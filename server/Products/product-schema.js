const mongoose = require('mongoose');
const { Schema } = mongoose;

const carroSchema = new Schema({
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
    require: true
  },
  descripion: {
    type: String,
    default: "Esse produto não possui descrição."
  }
});

module.exports = mongoose.model('Products', carroSchema);