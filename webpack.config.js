const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = (env) => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development'
  require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

  return {
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      // fallback to index.html, to support client-side routing
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    devtool: (env === 'production') ? 'source-map' : 'inline-source-map',
    entry: ['@babel/polyfill', './src/index.jsx'],
    mode: 'development',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.jsx?$/,
          use: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            ...['css-loader', 'sass-loader'].map(loader => ({
              loader, options: { sourceMap: true }
            })),
          ]
        },
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public', 'dist'),
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'styles.css' }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }
}
