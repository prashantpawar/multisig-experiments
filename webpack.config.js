module.exports = {
  entry: './src/app.es6.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: false
  },
  resolve: {
    extensions: ['.es6.js']
  },
  module: {
    loaders: [
      {
        test: /\.es6.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
