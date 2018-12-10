# Overview


## File structure

PragmaCSS is separated into multiple stylus files. Each file serves a specific purpose, and the loading order
is important:

### global.styl
This file is purely a collection of Stylus variables. By default, it's filled with sensible defaults,
but in your project, you should duplicate it and then customize it to your particular needs.
This file should only contain variable declarations and no actual CSS.

### base.styl
This stylesheet resets and normalizes the look of basic HTML elements and sets reasonable defaults based on
the global configuration. It also contains classes for common UI elements such as buttons and form inputs.
It's important to load this file before utilities.styl so that you can override it with the utility classes.

### your-custom-styles.styl
This file doesn't actually exist in PragmaCSS, but it probably should in your project. If it does, then this is
the place where it should be loaded&mdash;after base.styl and before utilities.styl. This way you can easily
override all base styles and then still use utility classes to customize your own classes from the HTML.

### utilities.styl
This file contains all the generic, single-purpose utility classes that you'll use to style your pages
from within the HTML.

<br>

## Naming conventions

PragmaCSS favors consistency and attempts to avoid reinventing the wheel whenever possible.

However, as its name implies, it takes a pragmatic approach in most regards, one that strives to take
all relevant real-world considerations into account; Particularly the human aspect.

Humans benefit from consistency, but a naive, dogmatic attempt to make everything systematic and digitized
is everything but human-friendly. Imagine living in a city where every house and every street look exactly
the same and are only distinguished by their numbers. Not only is this depressing and "unnatural",
it's also really hard to memorize and effectively work with.

That's why PragmaCSS uses a balanced approach; A combination of semantic terms **and** abbreviations for abstract
classifications. Here are the commonly used ones:

### Sizes

**-xs, -s, -m, -l, -xl, -2xl, -3xl, etc.**

You're probably quite familiar with this system from clothing sizes.
It's rather intuitive because it doesn't start at an abstract, absolute "0", but rather smack-dab in the middle;
An average value that's concrete and easy to visualize, from where you then can either move up or down.

The "m" size is understood to be the default size, so you can generally assume that you can just omit the entire
size-suffix if you only need the medium value. For example, you can either use the class `.shadow` or
`.shadow-m` in order to add a medium-sized box shadow to an element.

<br>

### Directions

**-v, -h, -vh**

These suffixes are used to set the desired axis. You can probably tell what they stand for:
vertical, horizontal and vertical + horizontal.

We believe that this pattern is more natural for most people than the more mathematical x and y combo (although
it's close).

For the left and right sides&mdash;unsurprisingly&mdash;the **-left** and **-right** suffixes are used.

Both **-up** and **-down**, as well as **-top** and **-bottom** are used as suffixes for the upper and lower sides
depending on semantic and grammatical considerations. For example, the classes `.push-up` / `.push-down` can be used
to add margin, while `.border-top` / `.border-bottom` are used to add a border. You can try to switch them around;
You'll find that it simply makes no sense then.

<br>

### Class naming considerations

PragmaCSS attempts to find the best possible class name by walking through the following hierarchy of considerations:

#### Clarity
Does the class name clearly convey its intended effect?

#### Consistency
Is it a well-known term? Ideally, it should closely tie in with the corresponding CSS property.

#### Length
Is the class name nice and terse? Single words are always preferable to multi-part-words.

#### Intuitiveness
Would people naturally use this class name if they had to guess?

#### Grammar
Does the class name follow proper grammar?

<br>

### Naming style

CSS supports lower- and uppercase letters, as well as dashes and underscores. However, utilizing all possibilities
adds a level of abstract complexity that is hard to justify.

For example, using double dashes to signify mouse states such as `.red--hover` is not self-evident without
explanation. A class such as `.red-on-hover` on the other hand is entirely self-explanatory, at a negligible
cost of a few more characters.

PragmaCSS is entirely kebab-cased, with lower-case letters only. There are no double-dashes or double-underscores.
