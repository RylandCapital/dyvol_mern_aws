const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spy10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'spy10p'
});

const spy10p = mongoose.model('spy10p', spy10pSchema);

module.exports = spy10p;