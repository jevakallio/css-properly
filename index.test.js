let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('translates "colour" prop to "color"', async () => {
  await run(
    'div{ colour: red }',
    'div{ color: red }', { }
  )
})

it('translates props including "colour" to "color"', async () => {
  await run(
    'div{ background-colour: red }',
    'div{ background-color: red }', { }
  )
})

it('translates values including "centre" to "center"', async () => {
  await run(
    'div{ text-align: centre }',
    'div{ text-align: center }', { }
  )
})

it('translates "padding-ton" prop to "padding-top"', async () => {
  await run(
    'div{ padding-ton: 10px }',
    'div{ padding-top: 10px }', { }
  )
})

it('translates "capitalise" prop to "capitalize"', async () => {
  await run(
    'div{ text-transform: capitalise }',
    'div{ text-transform: capitalize }', { }
  )
})

it('translates "z-index" prop to "z-index"', async () => {
  await run(
    'div{ z-index: 1 }',
    'div{ z-index: 1 }', { }
  )
})

it('translates "behaviour" prop to "behavior"', async () => {
  await run(
    'div{ scroll-behaviour: smooth }',
    'div{ scroll-behavior: smooth }', { }
  )
})
