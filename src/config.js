let config = {
  prodCDN: '',
  devCDN: 'http://localhost:5001/static',
  serverAAA: 'https://aaa-6ghadam.herokuapp.com/api',
  serverData: 'https://data-6ghadam.herokuapp.com/api',
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = config.devCDN;
} else {
  config.cdn = config.prodCDN;
}

module.exports = config;
