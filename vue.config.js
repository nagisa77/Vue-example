module.exports = {
  transpileDependencies: [],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-example/'
    : '/'
}