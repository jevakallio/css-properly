let postcss = require('postcss')

module.exports = postcss.plugin('css-properly', () => {
  return css => {
    css.walkDecls(d => {
      if (!d.prop.startsWith('--')) {
        d.prop = d.prop
          .replace('colour', 'color')
          .replace('padding-ton', 'padding-top')
          .replace('behaviour', 'behavior')
      }
      if (!d.value.includes('var(') && !d.value.includes('url(')) {
        d.value = d.value
          .replace('centre', 'center')
          .replace('capitalise', 'capitalize')
      }
    })
  }
})
