# Buttons

Buttons are among the most common UI elements, which is why they're an essential part of PragmaCSS.
As you will see shortly, working with buttons is trivial, but at the same time there's huge potential
for customization.


## Basic button

Creating a simple button with default styling is easy as pie; Simply apply the `.btn` class to your element:

<br>

<button class="btn">
  Button
</button>

```html
<button class="btn">
  Button
</button>
```

<br>

## Size modifiers

Changing the width and height of a button is very straightforward. Just add the following classes the
main `.btn` class in order to adjust the vertical or horizontal dimensions of your button&mdash;or both:

### Vertical size modifiers

<div class="space-between wrap">
  <button class="btn v-xs bold lowercase push-down-s">
    .v-xs
  </button>
  <button class="btn v-s bold lowercase push-down-s">
    .v-s
  </button>
  <button class="btn v-m bold lowercase push-down-s">
    .v-m
  </button>
  <button class="btn v-l bold lowercase push-down-s">
    .v-l
  </button>
  <button class="btn v-xl bold lowercase push-down-s">
    .v-xl
  </button>
</div>

```html
<button class="btn v-xs">.v-xs</button>

<button class="btn v-s">.v-s</button>

<button class="btn v-m">.v-m</button>

<button class="btn v-l">.v-l</button>

<button class="btn v-xl">.v-xl</button>
```

<br>

### Horizontal size modifiers

<button class="btn h-xs bold lowercase push-down-s block">
  .h-xs
</button>
<button class="btn h-s bold lowercase push-down-s block">
  .h-s
</button>
<button class="btn h-m bold lowercase push-down-s block">
  .h-m
</button>
<button class="btn h-l bold lowercase push-down-s block">
  .h-l
</button>
<button class="btn h-xl bold lowercase push-down-s block">
  .h-xl
</button>
<button class="btn h-2xl bold lowercase push-down-s block">
  .h-2xl
</button>
<button class="btn h-3xl bold lowercase push-down-s block">
  .h-3xl
</button>

```html
<button class="btn h-xs">.h-xs</button>

<button class="btn h-s">.h-s</button>

<button class="btn h-m">.h-m</button>

<button class="btn h-l">.h-l</button>

<button class="btn h-xl">.h-xl</button>

<button class="btn h-2xl">.h-2xl</button>

<button class="btn h-3xl">.h-3xl</button>
```

<br>

### Combined size modifiers

<div class="space-between wrap">
    <button class="btn vh-xs bold lowercase push-down-s">
      .vh-xs
    </button>
    <button class="btn vh-s bold lowercase push-down-s">
      .vh-s
    </button>
    <button class="btn vh-m bold lowercase push-down-s">
      .vh-m
    </button>
    <button class="btn vh-l bold lowercase push-down-s">
      .vh-l
    </button>
    <button class="btn vh-xl bold lowercase push-down-s">
      .vh-xl
    </button>
</div>

```html
<button class="btn vh-xs">.vh-xs</button>

<button class="btn vh-s">.vh-s</button>

<button class="btn vh-m">.vh-m</button>

<button class="btn vh-l">.vh-l</button>

<button class="btn vh-xl">.vh-xl</button>
```

<br>

## Button colors

To change the color of your button, simply add the desired background color utility class.

<div class="space-evenly wrap pull-right">
    <button class="btn push-down-m push-right dark-bg">
      .dark-bg
    </button>
    <button class="btn push-down-m push-right soft-bg">
      .soft-bg
    </button>
    <button class="btn push-down-m push-right pale-bg">
      .pale-bg
    </button>
    <button class="btn push-down-m push-right black-bg">
      .black-bg
    </button>
    <button class="btn push-down-m push-right red-bg">
      .red-bg
    </button>
    <button class="btn push-down-m push-right orange-bg">
      .orange-bg
    </button>
    <button class="btn push-down-m push-right green-bg">
      .green-bg
    </button>
    <button class="btn push-down-m push-right yellow-bg">
      .yellow-bg
    </button>
    <button class="btn push-down-m push-right blue-bg">
      .blue-bg
    </button>
    <button class="btn push-down-m push-right violet-bg">
      .violet-bg
    </button>
</div>

```html
<button class="btn dark-bg">.dark-bg</button>
<button class="btn soft-bg">.soft-bg</button>
<button class="btn pale-bg">.pale-bg</button>
<button class="btn black-bg">.black-bg</button>
<button class="btn red-bg">.red-bg</button>
<button class="btn orange-bg">.orange-bg</button>
<button class="btn green-bg">.green-bg</button>
<button class="btn yellow-bg">.yellow-bg</button>
<button class="btn blue-bg">.blue-bg</button>
<button class="btn violet-bg">.violet-bg</button>
```

<br>

The `.light-bg` and `.white-bg` classes are designed to be used on dark backgrounds.
In addition, `.white-bg` is compatible with text colors.

<div class="dark-bg pad-left pad-up-m push-down rounded-m center">
  <button class="btn push-down-m push-right light-bg">
    .light-bg
  </button>
  <button class="btn push-down-m push-right white-bg">
    .white-bg
  </button>
  <button class="btn push-down-m push-right white-bg primary">
    .white-bg.primary
  </button>
  <button class="btn push-down-m push-right white-bg soft">
    .white-bg.soft
  </button>
  <button class="btn push-down-m push-right white-bg black">
    .white-bg.black
  </button>
  <button class="btn push-down-m push-right white-bg red">
    .white-bg.red
  </button>
  <button class="btn push-down-m push-right white-bg orange">
    .white-bg.orange
  </button>
  <button class="btn push-down-m push-right white-bg green">
    .white-bg.green
  </button>
  <button class="btn push-down-m push-right white-bg yellow">
    .white-bg.yellow
  </button>
  <button class="btn push-down-m push-right white-bg blue">
    .white-bg.blue
  </button>
  <button class="btn push-down-m push-right white-bg violet">
    .white-bg.violet
  </button>
</div>

```html
<button class="btn light-bg">.light-bg</button>
<button class="btn white-bg">.white-bg</button>
<button class="btn white-bg primary">.white-bg.primary</button>
<button class="btn white-bg soft">.white-bg.soft</button>
<button class="btn white-bg black">.white-bg.black</button>
<button class="btn white-bg red">.white-bg.red</button>
<button class="btn white-bg orange">.white-bg.orange</button>
<button class="btn white-bg green">.white-bg.green</button>
<button class="btn white-bg yellow">.white-bg.yellow</button>
<button class="btn white-bg blue">.white-bg.blue</button>
<button class="btn white-bg violet">.white-bg.violet</button>
```

<br>

## Blank button

Sometimes you might need the functionality of a button without the actual button shape. Simply use the .blank class
to achieve this effect:

<button class="btn push-down push-right">
  Call to action
</button>

<button class="btn blank push-down">
  More details
</button>

```html
<button class="btn push-down push-right">
  Call to action
</button>

<button class="btn blank">
  More details
</button>
```

<div class="pad-left pad-up-m push-down rounded-m center">
  <button class="btn push-down-m push-right blank soft">
    .blank.soft
  </button>
  <button class="btn push-down-m push-right blank black">
    .blank.black
  </button>
  <button class="btn push-down-m push-right blank red">
    .blank.red
  </button>
  <button class="btn push-down-m push-right blank orange">
    .blank.orange
  </button>
  <button class="btn push-down-m push-right blank green">
    .blank.green
  </button>
  <button class="btn push-down-m push-right blank yellow">
    .blank.yellow
  </button>
  <button class="btn push-down-m push-right blank blue">
    .blank.blue
  </button>
  <button class="btn push-down-m push-right blank violet">
    .blank.violet
  </button>
</div>


<br>

## Disabled button

If you either add the `.disabled` class or the `disabled` property to your button, it will be styled accordingly:

<button class="btn push-down-xl" disabled>
  Disabled button
</button>

```html
<button class="btn" disabled>
  Disabled button
</button>
```

<br>

## Ghost buttons

Due to their unobtrusive look, Ghost buttons convey a very subtle call to action. Nevertheless, they
serve a very important role, as they help to establish a clear visual hierarchy which can help the user
navigate successfully through your site.

Naturally, it's possible to also apply all available colors to ghost buttons:

<div class="pad-up-m push-down center">
  <button class="btn ghost push-down-m push-h-m">
    .btn.ghost
  </button>
  <button class="btn ghost dark push-down-m push-h-m">
    .btn.ghost.dark
  </button>
  <button class="btn ghost soft push-down-m push-h-m">
    .btn.ghost.soft
  </button>
  <button class="btn ghost pale push-down-m push-h-m">
    .btn.ghost.pale
  </button>
  <button class="btn ghost black push-down-m push-h-m">
    .btn.ghost.black
  </button>
  <button class="btn ghost red push-down-m push-h-m">
    .btn.ghost.red
  </button>
  <button class="btn ghost orange push-down-m push-h-m">
    .btn.ghost.orange
  </button>
  <button class="btn ghost green push-down-m push-h-m">
    .btn.ghost.green
  </button>
  <button class="btn ghost yellow push-down-m push-h-m">
    .btn.ghost.yellow
  </button>
  <button class="btn ghost blue push-down-m push-h-m">
    .btn.ghost.blue
  </button>
  <button class="btn ghost violet push-down-m push-h-m">
    .btn.ghost.violet
  </button>
</div>

<div class="dark-bg pad-left pad-up-m push-down rounded-m center">
  <button class="btn ghost white push-down-m push-right">
    .btn.ghost
  </button>
</div>

<br>

### Border styling

You can add the `border` utility classes in order to control the width and style of the border.

<div class="pad-up-m push-down center">
  <button class="btn ghostborder-xs push-down-m push-h-m ">
    .btn.ghost.border-xs
  </button>
  <button class="btn ghost border-s push-down-m push-h-m">
    .btn.ghost.border-s
  </button>
  <button class="btn ghost border-m push-down-m push-h-m">
    .btn.ghost.border-m
  </button>
  <button class="btn ghost border-l push-down-m push-h-m">
    .btn.ghost.border-l
  </button>
</div>

```html
<button class="btn ghost border-xs">.ghost.border-xs</button>
<button class="btn ghost border-s">.ghost.border-s</button>
<button class="btn ghost border-m">.ghost.border-m</button>
<button class="btn ghost border-l">.ghost.border-l</button>
```

<br>

## Utility class overrides

Buttons are compatible with other utility classes, which allows you to easily customize them further:


### .btn.reset
<button class="btn reset push-down-m">
  Button
</button>

### .btn.rounded-0
<button class="btn rounded-0 push-down-m">
  Button
</button>

### .btn.rounded-l
<button class="btn rounded-l push-down-m">
  Button
</button>

### .btn.size-xl.bold
<button class="btn size-xl bold push-down-m">
  Button
</button>

### .btn.border-dark.border-xs.dashed
<button class="btn border-dark border-xs dashed push-down-m">
  Button
</button>

### .btn.scale-on-hover-s
<button class="btn scale-on-hover-s push-down-m">
  Button
</button>

### .btn.white-bg.white-bg-on-hover.shadow-s.shadow-m-on-hover
<button class="btn white-bg primary white-bg-on-hover dark-on-hover shadow-s shadow-m-on-hover push-down-m">
  Button
</button>

### .btn.full
<button class="btn full push-down-m">
  Button
</button>
