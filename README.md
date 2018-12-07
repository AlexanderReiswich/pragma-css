# PragmaCSS

<br>

> A CSS framework for custom style systems built with stylus.

<br>

\
PragmaCSS embraces both atomic and semantic principles. This means you get the flexibility of atomic CSS without an
overload of cryptic class names, thus making it intuitive to understand and memorize all available classes.

Class combinations are beautiful and understandable. Just to give you a taste:

```
<h2 class="primary bold headline extend-m push-down">Some Headline</h2>
```

PragmaCSS also provides you with attractive and reasonable base styles for the most essential elements, which you
can customize through a Stylus variables file.

By offering both a wide array of utility classes as well as plenty of UI element classes — all of which can be
centrally configured — creating unique, customized UI's is very fast and easy.

PragmaCSS does not offer a utility class for every possible CSS property. It embraces the philosophy of using the
right tool for every particular job; Every now and then utility classes won't be the best option. Writing custom
classes may be a much simpler and better solution then.

PragmaCSS is separated into four parts:

**global.styl**\
The global stylesheet is purely a collection of Stylus variables. By default, it's filled with sensible defaults,
but in your project, you should create your own global.styl file and use it to customize all other parts of PragmaCSS.

**html.styl**\
A minimal stylesheet that serves to reset and normalize the look of basic HTML elements and set reasonable defaults.
It also can be configured to define default global attributes to the body.

**utilities.styl**\
This file containts generic, low-level classes that serve a singular, specific purpose, but can be combined for
great effect - thus eliminating the need to create custom classes in many cases.

**ui.styl**\
This file containts a base collection of classes for concrete UI elements such as buttons and form inputs. It
should be loaded before the other stylesheets so that the utility classes can be used as overrides.

### Usage

Note: Your project needs to have Stylus installed.

First, add the module to your project:

```
import PragmaCSS from 'pragma-css'
```

You can include the local path to any of the PragmaCSS Stylus files by using:

```
PragmaCSS.pathTo('html')
PragmaCSS.pathTo('utilities')
PragmaCSS.pathTo('layout')
PragmaCSS.pathTo('style')
```

You can also load the raw Stylus code of a file in this way:

```
PragmaCSS.load('html')
```
