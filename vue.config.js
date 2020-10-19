const NODE_ENV = process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production'

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: NODE_ENV === 'production'
    ? '/test-app/'
    : '/'
}