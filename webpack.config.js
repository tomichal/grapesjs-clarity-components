var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var name = 'grapesjs-clarity-components';
var env = process.env.WEBPACK_ENV;
var plugins = [];

if (env !== 'dev') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }));
  plugins.push(new webpack.BannerPlugin(pkg.name + ' - ' + pkg.version));
}

module.exports = {
  entry: './src',
  output: {
      filename: './dist/' + name + '.min.js',
      library: name,
      libraryTarget: 'umd',
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/,
        query: {
          presets: ['es2015']
        }
    }],
  },
  plugins: plugins
};
