'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@public': resolve('public'), // eslint-disable-line
      '@core': resolve('src/core'), // eslint-disable-line
      '@': resolve('src/application'), // eslint-disable-line
      '@assets': resolve('src/application/assets'), // eslint-disable-line
      '@less': resolve('src/application/assets/stylus/components'), // eslint-disable-line
      '@impl': resolve('src/core/service/impl') // eslint-disable-line
    }
  },
};