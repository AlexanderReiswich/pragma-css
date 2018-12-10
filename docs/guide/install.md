# Installation


## NPM

The recommended way is to install via NPM:

```bash
npm install pragma-css
```

<br>

## Usage

::: tip NOTE
Your project needs to have Stylus installed.
:::

<br>

Simply import the stylus files inside your stylus index file:

```stylus
@import '~pragma-css/src/global.styl'
@import '~pragma-css/src/base.styl'
@import '~pragma-css/src/utilities.styl'
```

---

Alternatively, you can add it to your build process by loading the module in your project:

```javascript
import PragmaCSS from 'pragma-css'
```

And then adding the stylus files via their file paths:

```javascript
PragmaCSS.pathTo('global')
PragmaCSS.pathTo('base')
PragmaCSS.pathTo('utilities')
```
