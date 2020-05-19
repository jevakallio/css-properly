# css-properly

[PostCSS] plugin for people who prefer to write English properly.

[PostCSS]: https://github.com/postcss/postcss

```diff
.foo {
-  background-colour: white;
-  text-align: centre;
+  background-color: white;
+  text-align: center;
```

## Supported translations:

| From (Proper) | To (American) | Rationale |
|---------------|---------------|-----------|
| colour | `color` | There's a `u` in `colour` |
| centre | `center` | It's spelled `centre` |
| padding-ton | `padding-top` | When you're thinking of your favourite bear |
| z-index | `z-index` | It's the same but it's pronounced "zed", not "zee" |

## Usage

### As a PostCSS plugin

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('css-properly'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage

### As a standalone tool using [PostCSS CLI](https://github.com/postcss/postcss-cli)

First, install `postcss-cli` and `css-properly` globally:

```sh
  npm install -g postcss-cli css-properly
```

Follow your heart:

```sh
  postcss [input.css] --use css-properly  [-o|--output output.css] [--watch|-w]
  postcss <input.css>... --use css-properly  --dir <output-directory> [--watch|-w]
  postcss <input-directory> --use css-properly  --dir <output-directory> [--watch|-w]
  postcss <input-glob-pattern> --use css-properly  --dir <output-directory> [--watch|-w]
  postcss <input.css>... --use css-properly  --replace
```

## License

[MIT](LICENSE)


