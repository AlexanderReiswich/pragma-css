# PragmaCSS

<br>

> A pragmatic CSS framework to facilitate the creation of custom UI and style systems.

<br>

**Official documentation:** [https://alexanderreiswich.github.io/](https://alexanderreiswich.github.io/)

<br>

PragmaCSS is an **opinionated, practically oriented CSS library**. It combines the components-focused approach that we
know and love from "traditional" CSS frameworks like [bootstrap](https://getbootstrap.com/) or
[materialize](https://materializecss.com) with concepts from utility CSS libraries like [tachyons](https://tachyons.io/)
or [tailwind](https://tailwindcss.com/); Unifying them in a sane way while aiming for a sensible balance between
simplicity and feature-richness.

PragmaCSS is quite light-weight as it focuses on providing the most essential features, which include a
shallow **HTML reset**, a **grid system** with gap-control, **UI classes** for buttons, forms and
various other elements, as well as plenty of **utility classes** for colors, typography, alignment,
responsiveness, animation and much more. No JavaScript functionality is included, it's just CSS.

PragmaCSS is built with [Stylus](http://stylus-lang.com), a very elegant, powerful and unrestrictive CSS
preprocessor. Stylus variables are used to configure all variable style attributes from a central file,
thus enabling you to effortlessly **customize** the entire style to your specific projects design needs.

PragmaCSS is separated into multiple stylus files. Each file serves a specific purpose, and the loading order
is important:

#### global.styl
This file is purely a collection of Stylus variables. By default, it's filled with sensible defaults,
but in your project, you should duplicate it and then customize it to your particular needs.
This file should only contain variable declarations and no actual CSS.

#### base.styl
This stylesheet resets and normalizes the look of basic HTML elements and sets reasonable defaults based on
the global configuration. It also contains classes for common UI elements such as buttons and form inputs.
It's important to load this file before utilities.styl so that you can override it with the utility classes.

#### your-custom-styles.styl
This is a placeholder for your own styles. Naturally, it can be a single file or multiple, but this is
the place where it should be loaded&mdash;after base.styl and before utilities.styl. This way you can easily
override all base styles and then still use utility classes to customize your own classes from the HTML.

#### utilities.styl
This file contains all the generic, single-purpose utility classes that you'll use to style your pages
from within the HTML.

### Install it via NPM

```bash
npm install pragma-css
```

### Usage

Note: Your project needs to have [Stylus](http://stylus-lang.com) installed.

Simply import the stylus files inside your stylus index file:

```stylus
@import '~pragma-css/src/global.styl'
@import '~pragma-css/src/base.styl'
@import '~pragma-css/src/utilities.styl'
```

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
