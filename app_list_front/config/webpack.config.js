const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  filename: './index.html',
  template: './src/index.html',
})

const rules = [
  {
    exclude: /node_modules/,
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
    },
  },
]

module.exports = {
  module: {
    rules,
  },
  plugins: [htmlPlugin],
}
