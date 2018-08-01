let config = {
  prodCDN: '',
  devCDN: 'http://localhost:5001/static'
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = config.devCDN;
} else {
  config.cdn = config.prodCDN;
}

module.exports = config;
