var webpack = require('webpack');
var path = require('path');

var plugins = [];

if (process.env.NODE_ENV === `production`) {
  console.log(`bundling for production.`);
  plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`production`)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ];
}

module.exports = {
  context: `${__dirname}`,
  entry: `./main.jsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: `bundle.js`,
    publicPath: `/`
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          `babel-loader`
        ]
      }
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8888
  }
};
