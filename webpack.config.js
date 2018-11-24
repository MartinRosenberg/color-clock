const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

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
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }
}
