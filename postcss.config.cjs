const customMedia = require('postcss-custom-media')

module.exports = {
  plugins: [
    customMedia({
      importFrom: ['src/media.css'],
    }),
  ],
}
