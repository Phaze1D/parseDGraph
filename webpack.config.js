var nodeExternals = require('webpack-node-externals')
var webpack = require('webpack')
var path = require('path')


var config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/parser.ts'),
  output: {
    filename: 'parser.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
   rules: [
     {
       test: /\.ts?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     }
   ]
 }
}

module.exports = config
