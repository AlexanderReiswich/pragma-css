# Effects

Various utility classes are available to add commonly utilized effects such as rounded corners, shadows
and transitions to your elements.

## Border

You can add a basic border on all sides with the following classes.


<div class="align-vh space-between wrap push-v-xl pull-right-m">
  <div class="inline border-s border-primary muted bold center extend-m pad-m push-up-s push-right-m va-top">
    .border-s
  </div>
  <div class="inline border border-primary muted bold center extend-m pad-m push-up-s push-right-m va-top">
    .border-m<br>(or .border)
  </div>
  <div class="inline border-l border-primary muted bold center extend-m pad-m push-up-s push-right-m va-top">
    .border-l
  </div>
  <div class="inline border-xl border-primary dark bold center extend-m pad-m push-up-s push-right-m va-top">
    .border-xl
  </div>
</div>

```html
<div class="border-s border-primary">
  .border-s
</div>

<div class="border border-primary">
  .border-m (or .border)
</div>

<div class="border border-primary">
  .border-l
</div>

<div class="border-xl border-primary">
  .border-xl
</div>
```

::: tip INFO
The default border style is configurable via global variables.
:::

<br>

### Targeted borders

You can add borders to specific sides:

<div class="grid gap-l">
    <div class="push-down col s12 m6">
        <div class="border-top border-dark pad-m light-bg dark bold center extend-s">
            .border-top
        </div>
    </div>
    <div class="push-down col s12 m6">
        <div class="border-right border-dark pad-m light-bg dark bold center extend-s">
            .border-right
        </div>
    </div>
</div>

<div class="grid gap-l">
    <div class="push-down col s12 m6">
        <div class="border-bottom border-dark pad-m light-bg dark bold center extend-s">
            .border-bottom
        </div>
    </div>
    <div class="push-down col s12 m6">
        <div class="border-left border-dark pad-m light-bg dark bold center extend-s">
            .border-left
        </div>
    </div>
</div>

```html
<div class="border-top border-dark">
  .border-top
</div>

<div class="border-right border-dark">
  .border-right
</div>

<div class="border-bottom border-dark">
  .border-bottom
</div>

<div class="border-left border-dark">
  .border-left
</div>
```

::: tip GOOD TO KNOW
You can of course further refine all border classes with size suffixes, i.e.: `.border-top-l`, `.border-bottom-s`, etc.
:::

<br>

### Removing borders

It's possible to remove borders on specific sides, as well:

<div class="grid gap-l">
    <div class="push-down col s12 m6">
        <div class="border border-dark border-top-0 border-dark pad-m light-bg dark bold center extend-s">
            .border.border-top-0
        </div>
    </div>
    <div class="push-down col s12 m6">
        <div class="border border-dark border-right-0 border-dark pad-m light-bg dark bold center extend-s">
            .border-right-0
        </div>
    </div>
</div>

<div class="grid gap-l">
    <div class="push-down col s12 m6">
        <div class="border border-dark border-bottom-0 border-dark pad-m light-bg dark bold center extend-s">
            .border.border-bottom-0
        </div>
    </div>
    <div class="push-down col s12 m6">
        <div class="border border-dark border-left-0 border-dark pad-m light-bg dark bold center extend-s">
            .border-left-0
        </div>
    </div>
</div>

```html
<div class="border border-dark border-top-0">
  .border.border-top-0
</div>

<div class="border border-dark border-right-0">
  .border.border-right-0
</div>

<div class="border border-dark border-bottom-0">
  .border.border-bottom-0
</div>

<div class="border border-dark border-left-0">
  .border.border-left-0
</div>
```

<br>

### Border colors

All available colors can be assigned to borders.

<div class="grid gap-m">
    <div class="push-down col s12">
        <div class="border-primary dark bold center extend-m pad-m push-down">
            .border-primary
        </div>
    </div>
</div>

<div class="grid gap-m">
    <div class="push-down col s12 m12 l4">
        <div class="border-dark dark bold center extend-m pad-m push-down">
            .border-dark
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-muted dark bold center extend-m pad-m push-down">
            .border-muted
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-subtle dark bold center extend-m pad-m push-down">
            .border-subtle
        </div>
    </div>
</div>

<div class="grid gap-m">
    <div class="push-down col s12 m12 l4">
        <div class="border-light dark bold center extend-m pad-m push-down">
            .border-light
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-white dark bold center extend-m pad-m push-down">
            .border-white
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-black dark bold center extend-m pad-m push-down">
            .border-black
        </div>
    </div>
</div>

<div class="grid gap-m">
    <div class="push-down col s12 m12 l4">
        <div class="border-red dark bold center extend-m pad-m push-down">
            .border-red
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-green dark bold center extend-m pad-m push-down">
            .border-green
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-yellow dark bold center extend-m pad-m push-down">
            .border-yellow
        </div>
    </div>
</div>

<div class="grid gap-m">
    <div class="push-down col s12 m12 l4">
        <div class="border-orange dark bold center extend-m pad-m push-down">
            .border-orange
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-blue dark bold center extend-m pad-m push-down">
            .border-blue
        </div>
    </div>
    <div class="push-down col s12 m12 l4">
        <div class="border-violet dark bold center extend-m pad-m push-down">
            .border-violet
        </div>
    </div>
</div>


### Border styles

The default border style is predefined in a global variable, but can be explicitly set
via the following classes:

<div class="border-primary solid dark bold center extend-m pad-m push-down">
    <span class="subtle">.border-primary</span>.solid
</div>

<div class="border-primary dashed dark bold center extend-m pad-m push-down">
    <span class="subtle">.border-primary</span>.dashed
</div>

<div class="border-primary dotted dark bold center extend-m pad-m push-down">
    <span class="subtle">.border-primary</span>.dotted
</div>

<br>

## Rounded corners

This set of classes adds roundness to an elements corners.

<div class="rounded-s inline blue-bg white bold center extend-m pad-m push-down-m push-right-m">
    .rounded-s
</div>

<div class="rounded-m inline blue-bg white bold center extend-m pad-m push-down-m push-right-m">
    .rounded-m
</div>

<div class="rounded-l inline blue-bg white bold center extend-m pad-m push-down-m push-right-m">
    .rounded-l
</div>

<div class="rounded-xl inline blue-bg white bold center extend-m pad-m push-down-m push-right-m">
    .rounded-xl
</div>

<br>

<div class="rounded-full inline blue-bg white bold center extend-m pad-m push-down-m push-right-m">
    .rounded-full
</div>

<div class="circular inline blue-bg white bold center extend-m pad-m push-down-m push-right-m">
    .circular
</div>

```html
<div class="rounded-s">
  .rounded-s
</div>

<div class="rounded-m">
  .rounded-m
</div>

<div class="rounded-l">
  .rounded-l
</div>

<div class="rounded-xl">
  .rounded-xl
</div>

<div class="rounded-full">
  .rounded-full
</div>

<div class="circular">
  .circular
</div>
```

<br>

You can also negate corner roundness for specific sides via the following classes:

<div class="rounded-full rounded-0 orange-bg white bold pad-m push-down-m push-right-s">
    .rounded-0
</div>

<div class="rounded-full rounded-0-top-left orange-bg white bold pad-m push-down-m push-right-s">
    .rounded-full.rounded-0-top-left
</div>

<div class="rounded-full rounded-0-top-right orange-bg white bold pad-m push-down-m push-right-s">
    .rounded-full.rounded-0-top-right
</div>

<div class="rounded-full rounded-0-bottom-right orange-bg white bold pad-m push-down-m push-right-s">
    .rounded-full.rounded-0-bottom-right
</div>

<div class="rounded-full rounded-0-bottom-left orange-bg white bold pad-m push-down-m push-right-s">
    .rounded-full.rounded-0-bottom-left
</div>

```html
<div class="rounded-full rounded-0-top-left">
  .rounded-full.rounded-0-top-left
</div>

<div class="rounded-full rounded-0-top-right">
  .rounded-full.rounded-0-top-right
</div>

<div class="rounded-full rounded-0-bottom-left">
  .rounded-full.rounded-0-bottom-left
</div>

<div class="rounded-full rounded-0-bottom-right">
  .rounded-full.rounded-0-bottom-right
</div>
```

<br>

## Shadows

The following group of classes adds a box shadow to your element.
You can customize the general shadow style via global variables.

<div class="shadow-s rounded inline white-bg dark bold pad-m push-v-m push-right-xl">
    .shadow-s
</div>

<div class="shadow-m rounded inline white-bg dark bold pad-m push-v-m push-right-xl">
    .shadow-m
</div>

<div class="shadow-l rounded inline white-bg dark bold pad-m push-v-m push-right-xl">
    .shadow-l
</div>

```html
<div class="shadow-s">.shadow-s</div>
<div class="shadow-m">.shadow-m</div>
<div class="shadow-l">.shadow-l</div>
```

<br>

### Shadow on hover

You can also apply shadows on hover only:

<div class="shadow-s-on-hover rounded inline white-bg dark bold pad-m push-v-m push-right-xl cursor-default">
    .shadow-s-on-hover
</div>

<div class="shadow-m-on-hover rounded inline white-bg dark bold pad-m push-v-m push-right-xl cursor-default">
    .shadow-m-on-hover
</div>

<div class="shadow-l-on-hover rounded inline white-bg dark bold pad-m push-v-m push-right-xl cursor-default">
    .shadow-l-on-hover
</div>

```html
<div class="shadow-s-on-hover">.shadow-s-on-hover</div>
<div class="shadow-m-on-hover">.shadow-m-on-hover</div>
<div class="shadow-l-on-hover">.shadow-l-on-hover</div>
```

<br>

## Scaling

The `.scale-x` classes can be used to "zoom-in" on elements, without actually changing their influence on
the layout around them.

<div class="space-between wrap pull-right-s push-v-xl">
    <div class="scale-s rounded inline blue-bg white bold pad-m push-up-s push-right-s cursor-default">
        .scale-s
    </div>
    <div class="scale-m rounded inline blue-bg white bold pad-m push-up-s push-right-s cursor-default">
        .scale-m
    </div>
    <div class="scale-l rounded inline blue-bg white bold pad-m push-up-s push-right-s cursor-default">
        .scale-l
    </div>
</div>

```html
<div class="scale-s">.scale-s</div>
<div class="scale-m">.scale-m</div>
<div class="scale-l">.scale-l</div>
```

You can also apply these classes on mouse-over:<br>

<div class="space-between wrap pull-right-s push-v-xl">
    <div class="scale-s-on-hover rounded inline violet-bg white bold pad-m push-up-s push-right-s cursor-default">
        .scale-s-on-hover
    </div>
    <div class="scale-m-on-hover rounded inline violet-bg white bold pad-m push-up-s push-right-s cursor-default">
        .scale-m-on-hover
    </div>
    <div class="scale-l-on-hover rounded inline violet-bg white bold pad-m push-up-s push-right-s cursor-default">
        .scale-l-on-hover
    </div>
</div>

```html
<div class="scale-s-on-hover">.scale-s-on-hover</div>
<div class="scale-m-on-hover">.scale-m-on-hover</div>
<div class="scale-l-on-hover">.scale-l-on-hover</div>
```

<br>

## Opacity

The opacity utility classes can be used to add transparency in multiple levels of strength.

<div class="push-v">
    <div class="rounded primary bold pad-m push-up-s cursor-default">
        .opacity-0
    </div>
    <div class="opacity-25 rounded primary-bg white bold pad-m push-up-s cursor-default">
        .opacity-25
    </div>
    <div class="opacity-50 rounded primary-bg white bold pad-m push-up-s cursor-default">
        .opacity-50
    </div>
    <div class="opacity-75 rounded primary-bg white bold pad-m push-up-s cursor-default">
        .opacity-75
    </div>
    <div class="opacity-100 rounded primary-bg white bold pad-m push-up-s cursor-default">
        .opacity-100
    </div>
</div>

```html
<div class="opacity-0">.opacity-0</div>
<div class="opacity-25">.opacity-25</div>
<div class="opacity-50">.opacity-50</div>
<div class="opacity-75">.opacity-75</div>
<div class="opacity-100">.opacity-100</div>
```

<br>

It's also possible to change opacity on hover:

<div class="push-v">
    <div class="opacity-0-on-hover rounded primary-bg white bold pad-m push-up-s cursor-default tween">
        .opacity-0-on-hover
    </div>
    <div class="opacity-25-on-hover rounded primary-bg white bold pad-m push-up-s cursor-default tween">
        .opacity-25-on-hover
    </div>
    <div class="opacity-50-on-hover rounded primary-bg white bold pad-m push-up-s cursor-default tween">
        .opacity-50-on-hover
    </div>
    <div class="opacity-75-on-hover rounded primary-bg white bold pad-m push-up-s cursor-default tween">
        .opacity-75-on-hover
    </div>
    <div class="opacity-100-on-hover rounded primary-bg white bold pad-m push-up-s cursor-default tween">
        .opacity-100-on-hover
    </div>
</div>

```html
<div class="opacity-0-on-hover">.opacity-0-on-hover</div>
<div class="opacity-25-on-hover">.opacity-25-on-hover</div>
<div class="opacity-50-on-hover">.opacity-50-on-hover</div>
<div class="opacity-75-on-hover">.opacity-75-on-hover</div>
<div class="opacity-100-on-hover">.opacity-100-on-hover</div>
```

<br>

## Transitions

`.tween` classes add transitions to your elements.

<div class="space-between wrap pull-right-s">
    <div class="tween-xs rounded inline blue-bg white bold pad-m push-up-s primary-bg-on-hover scale-m-on-hover push-right-s push-down-m cursor-default">
        .tween-xs
    </div>
    <div class="tween-s rounded inline blue-bg white bold pad-m push-up-s primary-bg-on-hover scale-m-on-hover push-right-s push-down-m cursor-default">
        .tween-s
    </div>
    <div class="tween-m rounded inline blue-bg white bold pad-m push-up-s primary-bg-on-hover scale-m-on-hover push-right-s push-down-m cursor-default">
        .tween-m
    </div>
    <div class="tween-l rounded inline blue-bg white bold pad-m push-up-s primary-bg-on-hover scale-m-on-hover push-right-s push-down-m cursor-default">
        .tween-l
    </div>
    <div class="tween-xl rounded inline blue-bg white bold pad-m push-up-s primary-bg-on-hover scale-m-on-hover push-right-s push-down-m cursor-default">
        .tween-xl
    </div>
</div>

::: tip GOOD TO KNOW
In case the name "tweening" doesn't ring a bell:
It's a common term used in the animation industry to describe the transitional frames be**tween** keyframes,
which is exactly what happens when you apply CSS transitions.

Compared to "transition", "tween" is much easier to type, which is why it has been chosen instead.
:::

```html
<div class="tween-xs">.tween-xs</div>
<div class="tween-s">.tween-s</div>
<div class="tween-m">.tween-m</div>
<div class="tween-l">.tween-l</div>
<div class="tween-xl">.tween-xl</div>
```

<br>

## Rotation

The `.rotate` classes can be used to rotate elements clockwise.

::: warning NOTE
Please keep in mind that it's not possible to use the rotation classes in combination with scaling classes
:::

### .rotate-45

<div class="rotate-45 rounded inline blue-bg white bold small pad-m push-v-l">
  ROTATE
</div>

### .rotate-90

<div class="rotate-90 rounded inline blue-bg white bold small pad-m push-v-l">
  ROTATE
</div>

### .rotate-135

<div class="rotate-135 rounded inline blue-bg white bold small pad-m push-v-l">
  ROTATE
</div>

### .rotate-180

<div class="rotate-180 rounded inline blue-bg white bold small pad-m push-v-l">
  ROTATE
</div>

### .rotate-225

<div class="rotate-225 rounded inline blue-bg white bold small pad-m push-v-l">
  ROTATE
</div>

### .rotate-270

<div class="rotate-270 rounded inline blue-bg white bold small pad-m push-v-l">
  ROTATE
</div>

### .rotate-315

<div class="rotate-315 rounded inline blue-bg white bold small pad-m push-v-l">
  ROTATE
</div>

```html
<div class="rotate-45">.rotate-45</div>
<div class="rotate-90">.rotate-90</div>
<div class="rotate-135">.rotate-135</div>
<div class="rotate-180">.rotate-180</div>
<div class="rotate-225">.rotate-225</div>
<div class="rotate-270">.rotate-270</div>
<div class="rotate-315">.rotate-315</div>
```

<br>

## Mouse cursor utilities

These classes help you enforce certain mouse cursor behaviors.

<div class="space-between">
    <div class="pointer tween rounded inline yellow-bg dark white-on-hover bold pad-m push-v-s dark-bg-on-hover">
        .pointer
    </div>
    <div class="cursor-default tween rounded inline yellow-bg dark white-on-hover bold pad-m push-v-s dark-bg-on-hover">
        .cursor-default
    </div>
    <div class="no-pointer-events tween rounded inline yellow-bg dark white-on-hover bold pad-m push-v-s dark-bg-on-hover">
        .no-pointer-events
    </div>
</div>

<br>

<div class="cursor-forbidden tween rounded inline subtle-bg white bold pad-m push-v-s">
    .cursor-forbidden
</div>

<br>

<div class="no-select dark push-up-s push-down-l">
    <b>.no-select</b><br>
    This text can't be selected
</div>


```html
<div class="pointer">
  .pointer
</div>

<div class="cursor-default">
  .cursor-default
</div>

<div class="no-pointer-events">
  .no-pointer-events
</div>

<div class="cursor-forbidden">
  .cursor-forbidden
</div>

<div class="no-select">
  .no-select
</div>
```

<br>

## Image utilities

### .responsive

The `.responsive` class forces images to resize in order to fit the available space on smaller screens.

<img :src="$withBase('/logo.png')" alt="Responsive image" class="responsive block centered">

```html
<img src="/logo.png"
  alt="Responsive image"
  class="responsive block centered">
```

<br>

### .responsive-full

This class behaves similarly to `.responsive`, except that it always fills out the available horizontal space.

<img :src="$withBase('/logo.png')" alt="Responsive image" class="responsive-full block centered">

```html
<img src="/logo.png"
  alt="Full width responsive image"
  class="responsive-full block centered">
```

<br>

### .pixelate

When images are scaled up, modern browsers will use anti-aliasing to smooth out individual pixels, which
is not always desirable.

To disable this effect, apply the `.pixelate` class.

<img :src="$withBase('/qr_code.png')" alt="Responsive image" class="pixelate responsive-full block centered">

```html
<img src="/qr_code.png"
  alt="Full width responsive image"
  class="pixelate responsive-full block centered">
```

<br>

For comparison, this is the same scaled up image without the `.pixelated` class:

<img :src="$withBase('/qr_code.png')" alt="Responsive image" class="responsive-full block centered">
