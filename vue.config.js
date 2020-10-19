const NODE_ENV = process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production'

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}