module.exports = {
  transpileDependencies: [],
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-example/'
    : '/',

    chainWebpack: (config) => {
      config.module
        .rule('markdown')
        .test(/\.md$/)
        .use('markdown-loader')
        .loader('raw-loader');
    },
}