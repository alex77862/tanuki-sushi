const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  // imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  versionKey: false
});

module.exports = mongoose.model('Article', articleSchema);