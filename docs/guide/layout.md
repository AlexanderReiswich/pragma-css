# Layout & Grid

PragmaCSS offers a handful of layout-related utility classes. Specific UI layout classes (i.e. sidebar, navbar, etc.)
are not included, as that is outside the scope of a style framework. You can use utility classes and custom
styles to set up the page layout.

<br>

### .page-container

The `.page-container` class literally acts as a container around the entire page. It should be applied to
the root element of your HTML.

This class has no obvious visual effect; It's main purpose relates to the grid system and pull-classes.
It ensures that no undesired horizontal scroll-bar appears due to the use of negative margins.

<br>

### .container

The `.container` class should wrap the content area of your page. It will be centered and behave properly on
smaller screen sizes (padding will be added to the sides).

This class should not receive a background color, border or anything like that. It's purely intended properly
fit the content area on all screen sizes.

By default, the `.container` class uses up the entire screen width, creating what's known as a fluid layout.

You can limit its width with the help of the following classes:

`.max-width-s` (600px by default)</div>

`.max-width-m` (900px by default)</div>

`.max-width-l` (1200px by default)</div>

`.max-width-xl` (1500px by default)</div>

These widths are based on the breakpoint variables that you can customize in the global configuration.

A simple example of the recommended HTML structure:

```html
<!DOCTYPE html>
<head>
  ...
</head>
<body>
  <div class="page-container">
    <section class="container">
      Your content goes here.
    </section>
  </div>
</body>
</html>
```

<br>

::: tip NOTE
You don't have to use the .container class if you utilize some special kind of layout. But you should always
use the page-container class.
:::

<br>

## Grid system

The grid system allows you to responsively divide your content into rows of up to 12 columns.
Unlike some other modern grid systems, the PragmaCSS grid is fairly minimalistic.
There are no offset classes and it is based on classical floats instead of flexbox.

This is intentional, because we believe that grids shouldn't be used for complex or unusual layouts.
Utility classes and custom CSS will serve you better in those cases.

<br>

### Responsive grid

The responsiveness modifiers are based on the breakpoints that you can define in the global variables.

| s   | m        | l        | x         | xl        |
|:---:|:--------:|:--------:|:---------:|:---------:|
| all | 600- ~px | 901- ~px | 1200- ~px | 1500- ~px |

<grid-responsive/>

```html
<div class="grid gap-s">
  <div class="col s12 m6 l4 xl3">
    Column 1
  </div>
  <div class="col s12 m6 l4 xl3">
    Column 2
  </div>
  <div class="col s12 m6 l4 xl3">
    Column 3
  </div>
  <div class="col s12 m6 l4 xl3">
    Column 4
  </div>
</div>
```

<br>

### Grid gaps

You can also define the vertical gaps between the columns:

<grid-gaps/>

<br>

### Grid with border separation

In addition to just gaps, you can also add a border separator to each individual column via the
**.separated** class.

The breakpoint system is supported. For example, if you only want it to be visible on small screens,
use **.separated-on-s**.

<grid-separated/>

```html
<div class="grid gap-s">
  <div class="col s12 m6 separated-on-mlx separated-on-p">
    col s12 m6 separated-on-mlx separated-on-p
  </div>
  <div class="col s12 m6">
    col s12 m6
  </div>
</div>
```

<br>

## Spacing

Various utility classes allow you to control the distance between the elements in your layout.
A semantic naming convention has been chosen with the aim of making the use of these frequently used
utilities natural and intuitive.

<br>

### Push

Use push classes to add margins to your elements.

#### Very small push - xs

<spacing name="push" :pad="true" suffix="-xs"/>

#### Small push - s

<spacing name="push" :pad="true" suffix="-s"/>

#### Medium push - m (or just .push)

<spacing name="push" :pad="true" suffix="-m"/>

#### Large push - l

<spacing name="push" :pad="true" suffix="-l"/>

#### Very large push - xl

<spacing name="push" :pad="true" suffix="-xl"/>

#### Extremely large push - xxl

<spacing name="push" :pad="true" suffix="-xxl"/>

#### No push

These classes are meant to be used as overrides for already assigned push classes.
For example, if you want to add margin to all sides except to the left, you can add the following class combo:
**push push-left-0**

<spacing name="push" :pad="true" prefix="push" suffix="-0"/>

#### Push auto

Similar to push-0, except that the margin is set to auto as opposed to 0.

<spacing name="push" :pad="true" prefix="push" suffix="-auto"/>


### Pull

Pull classes add negative margins to elements, allowing you to offset padding when necessary.
Be aware that there's no corresponding pull for every push class. This is due to inherent limitations in
how negative margins work.

#### Very small pull - xs

<spacing-pull name="pull" suffix="-xs" outer="pad-xs"/>

#### Small pull - s

<spacing-pull name="pull" suffix="-s" outer="pad-s"/>

#### Medium pull - m (or just .pull)

<spacing-pull name="pull" suffix="-m" outer="pad-m"/>

#### Large pull - l

<spacing-pull name="pull" suffix="-l" outer="pad-l"/>

#### Very large pull - xl

<spacing-pull name="pull" suffix="-xl" outer="pad-xl"/>

#### Extremely large pull - xxl

<spacing-pull name="pull" suffix="-xxl" outer="pad-xxl"/>


### Pad

Pad classes allow you to add padding to your elements.

#### Very small pad - xs

<spacing name="pad" suffix="-xs" :outline="true"/>

#### Small pad - s

<spacing name="pad" suffix="-s" :outline="true"/>

#### Medium pad - m (or just .pad)

<spacing name="pad" suffix="-m" :outline="true"/>

#### Large pad - l

<spacing name="pad" suffix="-l" :outline="true"/>

#### Very large pad - xl

<spacing name="pad" suffix="-xl" :outline="true"/>

#### Extremely large pad - xxl

<spacing name="pad" suffix="-xxl" :outline="true"/>

#### No pad

These classes are meant to be used as overrides for already added pad classes.
For example, if you want to have padding on all sides except on the left, you can add the following class combo:
**pad pad-left-0**

<spacing name="pad" prefix="pad" suffix="-0" :outline="true"/>
