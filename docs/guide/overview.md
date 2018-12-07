# Overview

PragmaCSS is separated into multiple parts. The order in which you include them is important:

### global.styl
This file is purely a collection of Stylus variables. By default, it's filled with sensible defaults,
but in your project, you should duplicate it and then customize it to your particular needs.
This file should only contain variable declarations and no actual CSS.

### base.styl
This stylesheet resets and normalizes the look of basic HTML elements and sets reasonable defaults based on
the global configuration. It also contains a base collection of classes for common UI elements such as buttons
and form inputs. It's important to load this file before utilities.styl so that you can override it with
utility classes.

### your-custom-styles.styl
This file doesn't actually exist in PragmaCSS, but it probably will in your project, and this is the place where
it should be loaded - after base.styl and before utilities.styl. This way you can easily override all base styles
and then still use utility classes to customize your own classes from the HTML.

### utilities.styl
This file contains all the generic, single-purpose utility classes that you need to style your pages right
from the HTML.
