let postcss = require('postcss')

module.exports = postcss.plugin('css-properly', () => {
  return css => {
    css.walkDecls(d => {
      d.prop = d.prop
        .replace('colour', 'color')
        .replace('padding-ton', 'padding-top')
      d.value = d.value
        .replace('centre', 'center')
        .replace('capitalise', 'capitalize')
    })
  }
})
