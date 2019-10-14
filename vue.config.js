/*
 * @Author: RainCruise
 * @Date: 2019-10-10 13:59:17
 * @Last Modified by: RainCruise
 * @Last Modified time: 2019-10-14 17:24:58
 */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const host = '0.0.0.0';
const port = 6500;

module.exports = {
  lintOnSave: true,

  productionSourceMap: false,

  devServer: {
    host,
    port,
    inline: true,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http:xxxx.com',
        changeOrigin: true
      }
    }
  },

  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.ts', '.json'],
      alias: {
        '@components': '@/components',
        '@views': '@/views',
        '@common': '@/common'
      }
    },

    plugins: (process.env.NODE_ENV === 'production'
      ? [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          }
        })
      ]
      : [])
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/common/styles/variables.scss";'
      }
    }
  }
};
