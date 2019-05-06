let path = require( 'path' );

module.exports = {
  context: __dirname,
  output: {
    path: path.resolve( './out'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [ 'env' ]
        }
      }
    ]
  }
};


