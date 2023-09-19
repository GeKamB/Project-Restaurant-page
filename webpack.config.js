const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    a: './src/a.js',
    b: './src/b.js',
    c: './src/c.js',
    d: './src/d.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};