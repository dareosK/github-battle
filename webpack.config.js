const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // JS entry point and bundle output
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  // Types of transformations
    module: {
      // Loaders
      rules: [
        // When you find js file, run babel
        { test: /\.(js)$/, use: 'babel-loader'},
        //  When you find a css file, run style-loader(inserts stylesheet
        // on html head) and css-loader(loads css)
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
      ]
  },
  // Development or Production
  mode: 'development',
  // will create a html in the dist forlder with a script that references
  // the bundle that webpack created:
  plugins: [
    new HtmlWebpackPlugin({
      // the new html references our html
      template: 'app/index.html'
    })
  ]
}
