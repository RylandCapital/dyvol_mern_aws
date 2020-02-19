const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlpmlSchema = new Schema({
  _index: { type: Date, required: true },
  maxprec_short: { type: Number, required: true },
  x2xrand_short: { type: Number, required: true },
  maxf1_short: { type: Number, required: true },
  _5: { type: Number, required: true },
  maxprec_long: { type: Number, required: true },
  maxf1_long: { type: Number, required: true },
  _10: { type: Number, required: true },
  x2xrand_long: { type: Number, required: true },
  proba_1_short: { type: Number, required: true },
  proba_diff: { type: Number, required: true },
  proba_1_long: { type: Number, required: true },
  close: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'xlpml'
});

const xlpml = mongoose.model('xlpml', xlpmlSchema);

module.exports = xlpml;