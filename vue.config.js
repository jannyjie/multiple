/*eslint semi: "error"*/
const path = require('path');

const PORT = 8550;
const DEV_HOST = 'vmep.com';

/**
 * https://cli.vuejs.org/config/#pages
 */
module.exports = {
  indexPath: 'index.asp',
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.asp',
      filename: 'index.asp',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    manage: {
      entry: 'src/manage/main.js',
      template: 'public/index.asp',
      filename: 'manage/index.asp',
      title: 'Manage Page',
      chunks: ['chunk-vendors', 'chunk-common', 'manage']
    },
    dashboard: {
      entry: 'src/dashboard/main.js',
      template: 'public/index.asp',
      filename: 'dashboard/index.asp',
      title: 'Dashboard Page',
      chunks: ['chunk-vendors', 'chunk-common', 'dashboard']
    }
  },

  devServer: {
    port: PORT,
    historyApiFallback: {
      rewrites: [
        { from: /^\/manage\/?.*/, to: path.posix.join('/', 'manage/index.asp') },
        { from: /./, to: path.posix.join('/', 'index.asp') }
      ]
    },
    allowedHosts: [DEV_HOST]
  }
};