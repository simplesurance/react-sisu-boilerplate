var path = require('path')
var webpack = require('webpack')

module.exports = {
  // Change this for production to 'production'
  mode: 'development',
  entry: ['babel-polyfill', './src'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../components/common'),
          path.resolve(__dirname, '../components/config'),
          path.resolve(__dirname, '../components/inputs'),
          path.resolve(__dirname, '../components/layout'),
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        include: [
          path.resolve(__dirname, '../components/assets/img')
        ],
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        include: path.resolve(__dirname, '../components/assets/fonts'),
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../components'),
      assets: path.resolve(__dirname, '../components/assets'),
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev')
      },
      rootLevel: JSON.stringify('')
    })
  ]
}
