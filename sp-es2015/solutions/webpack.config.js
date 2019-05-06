var path = require( 'path' );

module.exports = {
  context: __dirname,
  resolve: {
    root: [
      path.resolve( './' )
    ]
  },
  output: {
    path: 'out',
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
          presets: [ 'latest' ]
        }
      }
    ]
  }
};


