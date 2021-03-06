const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momoalloSchema = new Schema({
    index: { type: String, required: true },
    value: { type: Number, required: true },
    pnl: { type: Number, required: true },
    cost: { type: Number, required: true },
    shares: { type: Number, required: true },
    pct_allo: { type: Number, required: true },
    pct_pnl: { type: Number, required: true },
    portfolio_pct_pnl: { type: Number, required: true },
    score: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'momoallo'
});

const momoallo= mongoose.model('momoallo', momoalloSchema);

module.exports = momoallo;