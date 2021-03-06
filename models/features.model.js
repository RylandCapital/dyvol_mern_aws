const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featuresSchema = new Schema({_index: { type: Date, required: true },
_sp1500_rsi_14_over_70: { type: Number, required: true },
_etf_xle_flow: { type: Number, required: true },
_breadth_sector_xlv_bbdown: { type: Number, required: true },
_spx_real20: { type: Number, required: true },
_breadth_sector_xlv_nl4: { type: Number, required: true },
_etf_xly: { type: Number, required: true },
_breadth_sector_xle_bbdown: { type: Number, required: true },
_breadth_sector_xle_50: { type: Number, required: true },
_breadth_sector_xli_10: { type: Number, required: true },
_vix_voli: { type: Number, required: true },
_breadth_sector_xle_nh: { type: Number, required: true },
_cb_points: { type: Number, required: true },
_spx_real10: { type: Number, required: true },
_breadth_sector_xlf_ad: { type: Number, required: true },
_etf_xlb: { type: Number, required: true },
_etf_xlk: { type: Number, required: true },
_breadth_sector_xle_10: { type: Number, required: true },
_breadth_sector_xli_rsi70: { type: Number, required: true },
_breadth_sector_xlk_bbdown: { type: Number, required: true },
_breadth_sector_xly_bbdown: { type: Number, required: true },
_breadth_sector_xlf_bbup: { type: Number, required: true },
_breadth_sector_xlp_nl4: { type: Number, required: true },
_breadth_sector_xlf_10: { type: Number, required: true },
_breadth_sector_xlb_50: { type: Number, required: true },
_breadth_sector_xlu_nl12: { type: Number, required: true },
_breadth_sector_xlp_10: { type: Number, required: true },
_breadth_sector_xlf_nl: { type: Number, required: true },
_breadth_sector_xlv_nl: { type: Number, required: true },
_breadth_sector_xle_nl4: { type: Number, required: true },
_vol_vix_purified: { type: Number, required: true },
_breadth_sector_xly_nh: { type: Number, required: true },
_breadth_sector_xly_bbup: { type: Number, required: true },
_etf_xlu: { type: Number, required: true },
_model_score_bonds: { type: Number, required: true },
_breadth_sector_xle_200: { type: Number, required: true },
_breadth_sector_xlp_nh12: { type: Number, required: true },
_breadth_sector_xlv_rsi30: { type: Number, required: true },
_breadth_mcsumm: { type: Number, required: true },
_breadth_sector_xlp_nh: { type: Number, required: true },
_breadth_sector_xlv_bbup: { type: Number, required: true },
_breadth_sector_xlu_mcosc: { type: Number, required: true },
_breadth_sector_xlu_nh: { type: Number, required: true },
_vol_vix_spread: { type: Number, required: true },
_breadth_sector_xly_10: { type: Number, required: true },
_2_1_1: { type: Number, required: true },
_breadth_sector_xlk_200: { type: Number, required: true },
_vxx_thrust: { type: Number, required: true },
_breadth_sector_xlb_nh: { type: Number, required: true },
_breadth_sector_xlp_nl12: { type: Number, required: true },
_breadth_sector_xlu_rsi30: { type: Number, required: true },
_breadth_sector_xlu_10: { type: Number, required: true },
_breadth_sector_xlb_nh12: { type: Number, required: true },
_breadth_sector_xlk_nh12: { type: Number, required: true },
_breadth_sector_xle_nh12: { type: Number, required: true },
_breadth_sector_xly_nh4: { type: Number, required: true },
_breadth_sector_xli_nh4: { type: Number, required: true },
_breadth_sector_xlf_rsi30: { type: Number, required: true },
_1_spot: { type: Number, required: true },
_vx1_10d_std_dev: { type: Number, required: true },
_breadth_sector_xlp_nh4: { type: Number, required: true },
_breadth_sector_xlk_nh4: { type: Number, required: true },
_breadth_sector_xlv_nh: { type: Number, required: true },
_breadth_sector_xlv_nl12: { type: Number, required: true },
_etf_xly_flow: { type: Number, required: true },
_rydex_assets_bonds_bull_ratio: { type: Number, required: true },
_etf_tlt: { type: Number, required: true },
_vix3m_cross: { type: Number, required: true },
_breadth_sector_xlv_mcosc: { type: Number, required: true },
_breadth_sector_xli_nh12: { type: Number, required: true },
_breadth_sector_xlk_mcosc: { type: Number, required: true },
_breadth_sector_xlu_nh12: { type: Number, required: true },
_breadth_sector_xly_nl: { type: Number, required: true },
_vix_index: { type: Number, required: true },
_avg_4_7: { type: Number, required: true },
_rydex_beta_chase: { type: Number, required: true },
_etf_xlp: { type: Number, required: true },
_vol_vix: { type: Number, required: true },
_sp1500_rsi_14_under_30: { type: Number, required: true },
_pc_bonds_thirty: { type: Number, required: true },
_breadth_sector_xlb_bbdown: { type: Number, required: true },
_breadth_sector_xly_mcosc: { type: Number, required: true },
_breadth_sector_xlu_nl4: { type: Number, required: true },
_etf_xlu_flow: { type: Number, required: true },
_vx2_10d_std_dev: { type: Number, required: true },
_breadth_sector_xlv_50: { type: Number, required: true },
_vix_vxv: { type: Number, required: true },
_breadth_sector_xlp_bbup: { type: Number, required: true },
_breadth_sector_xly_mcsumm: { type: Number, required: true },
_etf_tlt_flow: { type: Number, required: true },
_breadth_sector_xlp_rsi30: { type: Number, required: true },
_breadth_sector_xli_50: { type: Number, required: true },
_breadth_sector_xlk_50: { type: Number, required: true },
_2_1: { type: Number, required: true },
_breadth_sector_xlk_nl: { type: Number, required: true },
_breadth_sector_xlb_rsi30: { type: Number, required: true },
_breadth_sector_xli_mcosc: { type: Number, required: true },
_breadth_sector_xli_rsi30: { type: Number, required: true },
_etf_xlf_flow: { type: Number, required: true },
_breadth_sector_xlp_nl: { type: Number, required: true },
_breadth_sector_xlv_nh4: { type: Number, required: true },
_pc_ise: { type: Number, required: true },
_breadth_sector_xlp_mcsumm: { type: Number, required: true },
_vx1_weight: { type: Number, required: true },
_breadth_sector_xlv_200: { type: Number, required: true },
_breadth_sector_xle_nl12: { type: Number, required: true },
_etf_xlf: { type: Number, required: true },
_breadth_sector_xlv_10: { type: Number, required: true },
_etf_xlb_flow: { type: Number, required: true },
_breadth_sector_xlf_rsi70: { type: Number, required: true },
_breadth_sector_xlu_50: { type: Number, required: true },
_breadth_sector_xly_ad: { type: Number, required: true },
_vol_stock_bond_ratio: { type: Number, required: true },
_vx4_vx7: { type: Number, required: true },
_breadth_sector_xle_mcsumm: { type: Number, required: true },
_breadth_sector_xle_rsi70: { type: Number, required: true },
_breadth_premium_spy: { type: Number, required: true },
_breadth_sector_xlu_bbup: { type: Number, required: true },
_breadth_sector_xly_rsi30: { type: Number, required: true },
_breadth_sector_xly_rsi70: { type: Number, required: true },
_breadth_sector_xlk_rsi30: { type: Number, required: true },
_breadth_sector_xlp_mcosc: { type: Number, required: true },
_breadth_sector_xlb_200: { type: Number, required: true },
_breadth_sector_xlb_rsi70: { type: Number, required: true },
_vix6m_cross: { type: Number, required: true },
_breadth_sector_xlu_mcsumm: { type: Number, required: true },
_breadth_sector_xlu_nl: { type: Number, required: true },
_breadth_sector_xlf_bbdown: { type: Number, required: true },
_pc_oex_determination: { type: Number, required: true },
_breadth_sector_xlb_nl4: { type: Number, required: true },
_breadth_sector_xlf_nl12: { type: Number, required: true },
_breadth_sector_xlb_bbup: { type: Number, required: true },
_breadth_sector_xlb_nh4: { type: Number, required: true },
_breadth_sector_xlv_rsi70: { type: Number, required: true },
_breadth_sector_xlb_ad: { type: Number, required: true },
_breadth_sector_xlk_bbup: { type: Number, required: true },
_breadth_sector_xlp_bbdown: { type: Number, required: true },
_breadth_sector_xlf_200: { type: Number, required: true },
_breadth_sector_xli_ad: { type: Number, required: true },
_breadth_sector_xli_mcsumm: { type: Number, required: true },
_pc_total: { type: Number, required: true },
_breadth_sector_xlb_10: { type: Number, required: true },
_breadth_sector_xle_ad: { type: Number, required: true },
_etf_xli_flow: { type: Number, required: true },
_breadth_sector_xlf_nh12: { type: Number, required: true },
_breadth_sector_xlp_rsi70: { type: Number, required: true },
_breadth_sector_xlu_rsi70: { type: Number, required: true },
_breadth_sector_xlb_nl: { type: Number, required: true },
_breadth_sector_xli_bbup: { type: Number, required: true },
_breadth_sector_xlv_ad: { type: Number, required: true },
_breadth_sector_xli_nh: { type: Number, required: true },
_etf_xlk_flow: { type: Number, required: true },
_breadth_sector_xle_nh4: { type: Number, required: true },
_breadth_sector_xly_nl12: { type: Number, required: true },
_breadth_sector_xly_nh12: { type: Number, required: true },
_breadth_sector_xlf_50: { type: Number, required: true },
_model_smart_dumb_spread: { type: Number, required: true },
_vix_less_spxreal10: { type: Number, required: true },
_breadth_sector_xle_nl: { type: Number, required: true },
_etf_xlv_flow: { type: Number, required: true },
_breadth_sector_xlk_10: { type: Number, required: true },
_breadth_sector_xlf_nh: { type: Number, required: true },
_breadth_sector_xlf_mcsumm: { type: Number, required: true },
_breadth_sector_xlf_mcosc: { type: Number, required: true },
_breadth_sector_spy_200: { type: Number, required: true },
_breadth_sector_xlk_nl12: { type: Number, required: true },
_breadth_sector_xlu_200: { type: Number, required: true },
_breadth_sector_xlk_ad: { type: Number, required: true },
_breadth_sector_xle_mcosc: { type: Number, required: true },
_breadth_sector_xlu_ad: { type: Number, required: true },
_vix_less_spxreal20: { type: Number, required: true },
_breadth_sector_xle_rsi30: { type: Number, required: true },
_vol_skew: { type: Number, required: true },
_breadth_sector_xlu_nh4: { type: Number, required: true },
_breadth_sector_xlp_200: { type: Number, required: true },
_breadth_sector_xli_nl4: { type: Number, required: true },
_breadth_sector_xli_nl: { type: Number, required: true },
_vol_vix_bonds: { type: Number, required: true },
_breadth_sector_xlf_nh4: { type: Number, required: true },
_breadth_sector_xlb_nl12: { type: Number, required: true },
_model_score_short: { type: Number, required: true },
_breadth_sector_xlp_50: { type: Number, required: true },
_breadth_sector_xlk_rsi70: { type: Number, required: true },
_breadth_sector_xlb_mcsumm: { type: Number, required: true },
_breadth_sector_xli_200: { type: Number, required: true },
_breadth_sector_xlv_nh12: { type: Number, required: true },
_breadth_sector_xlb_mcosc: { type: Number, required: true },
_etf_xle: { type: Number, required: true },
_breadth_sector_xle_bbup: { type: Number, required: true },
_etf_xlp_flow: { type: Number, required: true },
_breadth_sector_xlv_mcsumm: { type: Number, required: true },
_breadth_sector_xlu_bbdown: { type: Number, required: true },
_breadth_sector_xlk_nl4: { type: Number, required: true },
_breadth_sector_xly_nl4: { type: Number, required: true },
_breadth_sector_xlp_ad: { type: Number, required: true },
_breadth_sector_xli_nl12: { type: Number, required: true },
_model_percent_spread: { type: Number, required: true },
_breadth_sector_xli_bbdown: { type: Number, required: true },
_breadth_sector_xly_200: { type: Number, required: true },
_breadth_sector_xly_50: { type: Number, required: true },
_etf_xli: { type: Number, required: true },
_breadth_sector_xlk_nh: { type: Number, required: true },
_etf_xlv: { type: Number, required: true },
_breadth_sector_xlk_mcsumm: { type: Number, required: true },
_breadth_sector_xlf_nl4: { type: Number, required: true },
_pc_bonds_ten: { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'features'
});

const features = mongoose.model('features', featuresSchema);

module.exports = features;