const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const spxRouter = require('./routes/spx');
const vixRouter = require('./routes/vix');
const tltRouter = require('./routes/tlt');
const xlbRouter = require('./routes/xlb');
const xleRouter = require('./routes/xle');
const xlfRouter = require('./routes/xlf');
const xliRouter = require('./routes/xli');
const xlkRouter = require('./routes/xlk');
const xlpRouter = require('./routes/xlp');
const xluRouter = require('./routes/xlu');
const xlvRouter = require('./routes/xlv');
const xlyRouter = require('./routes/xly');
const featuresRouter = require('./routes/features');
const ohlcRouter = require('./routes/ohlc');
const fwds5Router = require('./routes/fwds5');
const fwds10Router = require('./routes/fwds10');
const fwds22Router = require('./routes/fwds22');
const customRouter = require('./routes/custom');
const spymlRouter = require('./routes/spyml');
const xlbmlRouter = require('./routes/xlbml');
const xlemlRouter = require('./routes/xleml');
const xlfmlRouter = require('./routes/xlfml');
const xlimlRouter = require('./routes/xliml');
const xlpmlRouter = require('./routes/xlpml');
const xlvmlRouter = require('./routes/xlvml');
const xlymlRouter = require('./routes/xlyml');
const xlkmlRouter = require('./routes/xlkml');
const hctestRouter = require('./routes/hctest');
const hctestrRouter = require('./routes/hctestr');
const spy5pRouter = require('./routes/spy5p');
const spy10pRouter = require('./routes/spy10p');
const xlb5pRouter = require('./routes/xlb5p');
const xlb10pRouter = require('./routes/xlb10p');
const xle5pRouter = require('./routes/xle5p');
const xle10pRouter = require('./routes/xle10p');
const xlf5pRouter = require('./routes/xlf5p');
const xlf10pRouter = require('./routes/xlf10p');
const xli5pRouter = require('./routes/xli5p');
const xli10pRouter = require('./routes/xli10p');
const xlv5pRouter = require('./routes/xlv5p');
const xlv10pRouter = require('./routes/xlv10p');
const xlp5pRouter = require('./routes/xlp5p');
const xlp10pRouter = require('./routes/xlp10p');
const xly5pRouter = require('./routes/xly5p');
const xly10pRouter = require('./routes/xly10p');
const xlk5pRouter = require('./routes/xlk5p');
const xlk10pRouter = require('./routes/xlk10p');
const xlu5pRouter = require('./routes/xlu5p');
const xlu10pRouter = require('./routes/xlu10p');
const tlt5pRouter = require('./routes/tlt5p');
const tlt10pRouter = require('./routes/tlt10p');
const vix5pRouter = require('./routes/vix5p');
const vix10pRouter = require('./routes/vix10p');
const momoRouter = require('./routes/momo');
const momoalloRouter = require('./routes/momoallo');
const momomonthlyRouter = require('./routes/momomonthly');
const momoyearlyRouter = require('./routes/momoyearly');
const mscoreRouter = require('./routes/mscore');
const mscorefiveRouter = require('./routes/mscorefive');
const mscoretenRouter = require('./routes/mscoreten');
const peventsRouter = require('./routes/pevents');
const peventshRouter = require('./routes/peventsh');
const thrustRouter = require('./routes/thrust');
const dvolsigRouter = require('./routes/dvolsig');
const twosdthreshRouter = require('./routes/twosdthresh');
const spy5psyncRouter = require('./routes/spy5psync');
const xlb5psyncRouter = require('./routes/xlb5psync');
const xle5psyncRouter = require('./routes/xle5psync');
const xlf5psyncRouter = require('./routes/xlf5psync');
const xli5psyncRouter = require('./routes/xli5psync');
const xlv5psyncRouter = require('./routes/xlv5psync');
const xlp5psyncRouter = require('./routes/xlp5psync');
const xly5psyncRouter = require('./routes/xly5psync');
const xlk5psyncRouter = require('./routes/xlk5psync');
const xlu5psyncRouter = require('./routes/xlu5psync');
const tlt5psyncRouter = require('./routes/tlt5psync');
const vix5psyncRouter = require('./routes/vix5psync');
const spy10psyncRouter = require('./routes/spy10psync');
const xlb10psyncRouter = require('./routes/xlb10psync');
const xle10psyncRouter = require('./routes/xle10psync');
const xlf10psyncRouter = require('./routes/xlf10psync');
const xli10psyncRouter = require('./routes/xli10psync');
const xlv10psyncRouter = require('./routes/xlv10psync');
const xlp10psyncRouter = require('./routes/xlp10psync');
const xly10psyncRouter = require('./routes/xly10psync');
const xlk10psyncRouter = require('./routes/xlk10psync');
const xlu10psyncRouter = require('./routes/xlu10psync');
const tlt10psyncRouter = require('./routes/tlt10psync');
const vix10psyncRouter = require('./routes/vix10psync');















app.use(express.static(path.join(__dirname, "client/build")))
app.use('/spx', spxRouter);
app.use('/vix', vixRouter);
app.use('/tlt', tltRouter);
app.use('/xlb', xlbRouter);
app.use('/xle', xleRouter);
app.use('/xlf', xlfRouter);
app.use('/xli', xliRouter);
app.use('/xlk', xlkRouter);
app.use('/xlp', xlpRouter);
app.use('/xlu', xluRouter);
app.use('/xlv', xlvRouter);
app.use('/xly', xlyRouter);
app.use('/features', featuresRouter);
app.use('/ohlc', ohlcRouter);
app.use('/fwds5', fwds5Router);
app.use('/fwds10', fwds10Router);
app.use('/fwds22', fwds22Router);
app.use('/custom', customRouter);
app.use('/spyml', spymlRouter);
app.use('/xlbml', xlbmlRouter);
app.use('/xleml', xlemlRouter);
app.use('/xlfml', xlfmlRouter);
app.use('/xliml', xlimlRouter);
app.use('/xlpml', xlpmlRouter);
app.use('/xlvml', xlvmlRouter);
app.use('/xlyml', xlymlRouter);
app.use('/xlkml', xlkmlRouter);
app.use('/hctest', hctestRouter);
app.use('/hctestr', hctestrRouter);
app.use('/spy5p', spy5pRouter);
app.use('/spy10p', spy10pRouter);
app.use('/xlb5p', xlb5pRouter);
app.use('/xlb10p', xlb10pRouter);
app.use('/xle5p', xle5pRouter);
app.use('/xle10p', xle10pRouter);
app.use('/xlf5p', xlf5pRouter);
app.use('/xlf10p', xlf10pRouter);
app.use('/xli5p', xli5pRouter);
app.use('/xli10p', xli10pRouter);
app.use('/xlv5p', xlv5pRouter);
app.use('/xlv10p', xlv10pRouter);
app.use('/xlp5p', xlp5pRouter);
app.use('/xlp10p', xlp10pRouter);
app.use('/xly5p', xly5pRouter);
app.use('/xly10p', xly10pRouter);
app.use('/xlk5p', xlk5pRouter);
app.use('/xlk10p', xlk10pRouter);
app.use('/xlu5p', xlu5pRouter);
app.use('/xlu10p', xlu10pRouter);
app.use('/tlt5p', tlt5pRouter);
app.use('/tlt10p', tlt10pRouter);
app.use('/vix5p', vix5pRouter);
app.use('/vix10p', vix10pRouter);
app.use('/momo', momoRouter);
app.use('/momoallo', momoalloRouter);
app.use('/momomonthly', momomonthlyRouter);
app.use('/momoyearly', momoyearlyRouter);
app.use('/mscore', mscoreRouter);
app.use('/mscorefive', mscorefiveRouter);
app.use('/mscoreten', mscoretenRouter);
app.use('/pevents', peventsRouter);
app.use('/peventsh', peventshRouter);
app.use('/thrust', thrustRouter);
app.use('/dvolsig', dvolsigRouter);
app.use('/twosdthresh', twosdthreshRouter);
app.use('/spy5psync', spy5psyncRouter);
app.use('/xlb5psync', xlb5psyncRouter);
app.use('/xle5psync', xle5psyncRouter);
app.use('/xlf5psync', xlf5psyncRouter);
app.use('/xli5psync', xli5psyncRouter);
app.use('/xlv5psync', xlv5psyncRouter);
app.use('/xlp5psync', xlp5psyncRouter);
app.use('/xly5psync', xly5psyncRouter);
app.use('/xlk5psync', xlk5psyncRouter);
app.use('/xlu5psync', xlu5psyncRouter);
app.use('/tlt5psync', tlt5psyncRouter);
app.use('/vix5psync', vix5psyncRouter);
app.use('/spy10psync', spy10psyncRouter);
app.use('/xlb10psync', xlb10psyncRouter);
app.use('/xle10psync', xle10psyncRouter);
app.use('/xlf10psync', xlf10psyncRouter);
app.use('/xli10psync', xli10psyncRouter);
app.use('/xlv10psync', xlv10psyncRouter);
app.use('/xlp10psync', xlp10psyncRouter);
app.use('/xly10psync', xly10psyncRouter);
app.use('/xlk10psync', xlk10psyncRouter);
app.use('/xlu10psync', xlu10psyncRouter);
app.use('/tlt10psync', tlt10psyncRouter);
app.use('/vix10psync', vix10psyncRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});