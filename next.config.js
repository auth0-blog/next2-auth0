const webpack = require('webpack');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.AUTH0_SECRET': JSON.stringify(process.env.AUTH0_SECRET)
      })
    );

    return config;
  },
};