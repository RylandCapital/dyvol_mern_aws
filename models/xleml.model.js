const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlemlSchema = new Schema({
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
  collection: 'xleml'
});

const xleml = mongoose.model('xleml', xlemlSchema);

module.exports = xleml;