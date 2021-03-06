const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlb10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlb10p'
});

const xlb10p = mongoose.model('xlb10p', xlb10pSchema);

module.exports = xlb10p;