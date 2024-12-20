const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/Zetra-Vue-WEB/' : '/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'thread-loader',
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
          include: /node_modules/,
        },
      ],
    },
  },
  chainWebpack: config => {
    // Clear existing rules for js files
    config.module.rules.delete('js');
    
    // Add new rule
    config.module
      .rule('js')
      .test(/\.js$/)
      .use('thread-loader')
      .loader('thread-loader')
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        cacheDirectory: true,
      });
  },
});