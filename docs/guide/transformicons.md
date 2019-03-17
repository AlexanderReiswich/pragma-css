# Transformicons

<transformicon class="relative push-up-l pull-down-xl"/>

<div class="push-down-xl pad-s light-bg rounded">
  <div class="space-around push-v-xl">
    <i class="tico-hamburger muted"><span></span></i>
    <i class="tico-search muted"><span></span></i>
    <i class="tico-close muted"><span></span></i>
    <i class="tico-check muted"><span></span></i>
  </div>
  <div class="space-around push-v-xl">
    <i class="tico-plus muted"><span></span></i>
    <i class="tico-minus muted"><span></span></i>
    <i class="tico-alert muted"><span></span></i>
    <i class="tico-info muted"><span></span></i>
  </div>
  <div class="space-around push-v-xl">
    <i class="tico-edit muted"><span></span></i>
    <i class="tico-options muted"><span></span></i>
    <i class="tico-chevron-down muted"><span></span></i>
    <i class="tico-arrow-up muted"><span></span></i>
  </div>
</div>

PragmaCSS includes a small set of essential icons that are constructed purely with CSS, which makes them highly
flexible; Simply by switching the icon classes, they will smoothly transition from one icon to the other.

## Structure

The HTML structure of a transformicon consists of three elements:

- an outer `div` container that controls the size of the icon
- an `i` element that determines which icon to display
- an empty `span` element that is required as the "raw material" to generate the icon

```html
<div class="tico-xl">
  <i class="tico-search">
    <span></span>
  </i>
</div>
```

<br>

The default size of transformicons is xl. If you need an icon with this size, you can avoid using the outer div.
This structure will suffice:

```html
<i class="tico-search">
  <span></span>
</i>
```

<br>

::: tip TIP
The corner roundness of transformicons can be defined via the corresponding global variable. If your
particular style favors hard corners, you can simply set it to 0 in order to get sharply angled icons.
:::

<br>

## Available icons

### Hamburger

<div>
  <div class="tico-s push-right-l">
    <i class="tico-hamburger">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-hamburger">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-hamburger">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-hamburger">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-hamburger">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-hamburger">
      <span></span>
    </i>
  </div>
</div>

```html
<i class="tico-hamburger tico-s"><span></span></i>
<i class="tico-hamburger tico-m"><span></span></i>
<i class="tico-hamburger tico-l"><span></span></i>
<i class="tico-hamburger tico-xl"><span></span></i>
<i class="tico-hamburger tico-2xl"><span></span></i>
<i class="tico-hamburger tico-3xl"><span></span></i>
```

<br>

### Search

<i class="tico-search push-right-l"><span></span></i>
<i class="tico-search-alt"><span></span></i>

<div>
  <div class="tico-s push-right-l">
    <i class="tico-search">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-search">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-search">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-search">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-search">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-search">
      <span></span>
    </i>
  </div>
</div>

```html
<i class="tico-search"><span></span></i>
<i class="tico-search-alt"><span></span></i>

<div class="tico-s">
  <i class="tico-search">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-search">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-search">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-search">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-search">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-search">
    <span></span>
  </i>
</div>
```

<br>

### Edit

<div>
  <div class="tico-s push-right-l">
    <i class="tico-edit">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-edit">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-edit">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-edit">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-edit">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-edit">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-edit">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-edit">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-edit">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-edit">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-edit">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-edit">
    <span></span>
  </i>
</div>
```

<br>

### Close

<div>
  <div class="tico-s push-right-l">
    <i class="tico-close">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-close">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-close">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-close">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-close">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-close">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-close">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-close">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-close">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-close">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-close">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-close">
    <span></span>
  </i>
</div>
```

<br>

### Plus

<div>
  <div class="tico-s push-right-l">
    <i class="tico-plus">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-plus">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-plus">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-plus">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-plus">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-plus">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-plus">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-plus">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-plus">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-plus">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-plus">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-plus">
    <span></span>
  </i>
</div>
```

<br>

### Minus

<div>
  <div class="tico-s push-right-l">
    <i class="tico-minus">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-minus">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-minus">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-minus">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-minus">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-minus">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-minus">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-minus">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-minus">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-minus">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-minus">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-minus">
    <span></span>
  </i>
</div>
```

<br>

### Options

<div>
  <div class="tico-s push-right-l">
    <i class="tico-options">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-options">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-options">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-options">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-options">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-options">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-options">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-options">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-options">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-options">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-options">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-options">
    <span></span>
  </i>
</div>
```

<br>

### Alert

<div>
  <div class="tico-s push-right-l">
    <i class="tico-alert">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-alert">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-alert">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-alert">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-alert">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-alert">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-alert">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-alert">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-alert">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-alert">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-alert">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-alert">
    <span></span>
  </i>
</div>
```

<br>

### Info

<div>
  <div class="tico-s push-right-l">
    <i class="tico-info">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-info">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-info">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-info">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-info">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-info">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-info">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-info">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-info">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-info">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-info">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-info">
    <span></span>
  </i>
</div>
```

<br>

### Square

<div>
  <div class="tico-s push-right-l">
    <i class="tico-square">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-square">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-square">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-square">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-square">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-square">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-square">
    <span></span>
  </i>
</div>
<div class="tico-m">
  <i class="tico-square">
    <span></span>
  </i>
</div>
<div class="tico-l">
  <i class="tico-square">
    <span></span>
  </i>
</div>
<div class="tico-xl">
  <i class="tico-square">
    <span></span>
  </i>
</div>
<div class="tico-2xl">
  <i class="tico-square">
    <span></span>
  </i>
</div>
<div class="tico-3xl">
  <i class="tico-square">
    <span></span>
  </i>
</div>
```

<br>

### Check

<div>
  <div class="tico-s push-right-l">
    <i class="tico-check">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-check">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-check">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-check">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-check">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-check">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-check">
    <span></span>
  </i>
</div>
<div class="tico-m">
  <i class="tico-check">
    <span></span>
  </i>
</div>
<div class="tico-l">
  <i class="tico-check">
    <span></span>
  </i>
</div>
<div class="tico-xl">
  <i class="tico-check">
    <span></span>
  </i>
</div>
<div class="tico-2xl">
  <i class="tico-check">
    <span></span>
  </i>
</div>
<div class="tico-3xl">
  <i class="tico-check">
    <span></span>
  </i>
</div>
```

<br>

### Chevron

<div class="push-v">
  <div class="tico-xl push-right-l">
    <i class="tico-chevron-up">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-chevron-right">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-chevron-down">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-chevron-left">
      <span></span>
    </i>
  </div>
</div>

<div class="push-down">
  <div class="tico-s push-right-l">
    <i class="tico-chevron-down">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-chevron-down">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-chevron-down">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-chevron-down">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-chevron-down">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-chevron-down">
      <span></span>
    </i>
  </div>
</div>

```html
<i class="tico-chevron-up"><span></span></i>
<i class="tico-chevron-right"><span></span></i>
<i class="tico-chevron-down"><span></span></i>
<i class="tico-chevron-left"><span></span></i>

<div class="tico-s">
  <i class="tico-chevron-down"><span></span></i>
</div>

<div class="tico-m">
  <i class="tico-chevron-down"><span></span></i>
</div>

<div class="tico-l">
  <i class="tico-chevron-down"><span></span></i>
</div>

<div class="tico-xl">
  <i class="tico-chevron-down"><span></span></i>
</div>

<div class="tico-2xl">
  <i class="tico-chevron-down"><span></span></i>
</div>

<div class="tico-3xl">
  <i class="tico-chevron-down"><span></span></i>
</div>
```

<br>

### Arrow

<div class="push-v">
  <div class="tico-xl push-right-l">
    <i class="tico-arrow-up">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-arrow-right">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-arrow-down">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-arrow-left">
      <span></span>
    </i>
  </div>
</div>

<div class="push-down">
  <div class="tico-s push-right-l">
    <i class="tico-arrow-down">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-arrow-down">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-arrow-down">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-arrow-down">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-arrow-down">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-arrow-down">
      <span></span>
    </i>
  </div>
</div>

```html
<i class="tico-arrow-up"><span></span></i>
<i class="tico-arrow-right"><span></span></i>
<i class="tico-arrow-down"><span></span></i>
<i class="tico-arrow-left"><span></span></i>

<div class="tico-s">
  <i class="tico-arrow-down"><span></span></i>
</div>

<div class="tico-m">
  <i class="tico-arrow-down"><span></span></i>
</div>

<div class="tico-l">
  <i class="tico-arrow-down"><span></span></i>
</div>

<div class="tico-xl">
  <i class="tico-arrow-down"><span></span></i>
</div>

<div class="tico-2xl">
  <i class="tico-arrow-down"><span></span></i>
</div>

<div class="tico-3xl">
  <i class="tico-arrow-down"><span></span></i>
</div>
```

## Border

This is how you can add a round border to your icons:

<div class="push-v">
  <div class="tico-s push-right-l">
    <i class="tico-info border-l border-dark circular">
      <span></span>
    </i>
  </div>
  <div class="tico-m push-right-l">
    <i class="tico-info border-l border-dark circular">
      <span></span>
    </i>
  </div>
  <div class="tico-l push-right-l">
    <i class="tico-info border-l border-dark circular">
      <span></span>
    </i>
  </div>
  <div class="tico-xl push-right-l">
    <i class="tico-info border-l border-dark circular">
      <span></span>
    </i>
  </div>
  <div class="tico-2xl push-right-l">
    <i class="tico-info border-l border-dark circular">
      <span></span>
    </i>
  </div>
  <div class="tico-3xl">
    <i class="tico-info border-l border-dark circular">
      <span></span>
    </i>
  </div>
</div>

```html
<div class="tico-s">
  <i class="tico-info border-l border-dark circular">
    <span></span>
  </i>
</div>

<div class="tico-m">
  <i class="tico-info border-l border-dark circular">
    <span></span>
  </i>
</div>

<div class="tico-l">
  <i class="tico-info border-l border-dark circular">
    <span></span>
  </i>
</div>

<div class="tico-xl">
  <i class="tico-info border-l border-dark circular">
    <span></span>
  </i>
</div>

<div class="tico-2xl">
  <i class="tico-info border-l border-dark circular">
    <span></span>
  </i>
</div>

<div class="tico-3xl">
  <i class="tico-info border-l border-dark circular">
    <span></span>
  </i>
</div>
```


## Colors

Transformicons support all base colors.

### .primary

<div class="space-around push-v-l">
  <i class="tico-hamburger primary"><span></span></i>
  <i class="tico-search primary"><span></span></i>
  <i class="tico-close primary"><span></span></i>
  <i class="tico-check primary"><span></span></i>
</div>

---

### .dark

<div class="space-around push-v-l">
  <i class="tico-hamburger dark"><span></span></i>
  <i class="tico-search dark"><span></span></i>
  <i class="tico-close dark"><span></span></i>
  <i class="tico-check dark"><span></span></i>
</div>

---

### .muted

<div class="space-around push-v-l">
  <i class="tico-hamburger muted"><span></span></i>
  <i class="tico-search muted"><span></span></i>
  <i class="tico-close muted"><span></span></i>
  <i class="tico-check muted"><span></span></i>
</div>

---

### .subtle

<div class="space-around push-v-l">
  <i class="tico-hamburger subtle"><span></span></i>
  <i class="tico-search subtle"><span></span></i>
  <i class="tico-close subtle"><span></span></i>
  <i class="tico-check subtle"><span></span></i>
</div>

---

### .light

<div class="push-v pad-v-s rounded">
  <div class="space-around push-v">
    <i class="tico-hamburger light"><span></span></i>
    <i class="tico-search light"><span></span></i>
    <i class="tico-close light"><span></span></i>
    <i class="tico-check light"><span></span></i>
  </div>
</div>

---

### .white

<div class="push-v pad-v-s dark-bg rounded">
  <div class="space-around push-v">
    <i class="tico-hamburger white"><span></span></i>
    <i class="tico-search white"><span></span></i>
    <i class="tico-close white"><span></span></i>
    <i class="tico-check white"><span></span></i>
  </div>
</div>

---

### .black

<div class="space-around push-v-l">
  <i class="tico-hamburger black"><span></span></i>
  <i class="tico-search black"><span></span></i>
  <i class="tico-close black"><span></span></i>
  <i class="tico-check black"><span></span></i>
</div>

---

### .red

<div class="space-around push-v-l">
  <i class="tico-hamburger red"><span></span></i>
  <i class="tico-search red"><span></span></i>
  <i class="tico-close red"><span></span></i>
  <i class="tico-check red"><span></span></i>
</div>

---

### .green

<div class="space-around push-v-l">
  <i class="tico-hamburger green"><span></span></i>
  <i class="tico-search green"><span></span></i>
  <i class="tico-close green"><span></span></i>
  <i class="tico-check green"><span></span></i>
</div>

---

### .yellow

<div class="space-around push-v-l">
  <i class="tico-hamburger yellow"><span></span></i>
  <i class="tico-search yellow"><span></span></i>
  <i class="tico-close yellow"><span></span></i>
  <i class="tico-check yellow"><span></span></i>
</div>

---

### .orange

<div class="space-around push-v-l">
  <i class="tico-hamburger orange"><span></span></i>
  <i class="tico-search orange"><span></span></i>
  <i class="tico-close orange"><span></span></i>
  <i class="tico-check orange"><span></span></i>
</div>

---

### .blue

<div class="space-around push-v-l">
  <i class="tico-hamburger blue"><span></span></i>
  <i class="tico-search blue"><span></span></i>
  <i class="tico-close blue"><span></span></i>
  <i class="tico-check blue"><span></span></i>
</div>

---

### .violet

<div class="space-around push-v-l">
  <i class="tico-hamburger violet"><span></span></i>
  <i class="tico-search violet"><span></span></i>
  <i class="tico-close violet"><span></span></i>
  <i class="tico-check violet"><span></span></i>
</div>


## Thin variants

All transformicons are also available in a thin variant, which can be set via the `.tico-thin` class.

<div class="push-v-xl pad-s light-bg rounded">
  <div class="space-around push-v-xl">
    <i class="tico-hamburger tico-thin"><span></span></i>
    <i class="tico-search tico-thin"><span></span></i>
    <i class="tico-close tico-thin"><span></span></i>
    <i class="tico-check tico-thin"><span></span></i>
  </div>
  <div class="space-around push-v-xl">
    <i class="tico-plus tico-thin"><span></span></i>
    <i class="tico-minus tico-thin"><span></span></i>
    <i class="tico-alert tico-thin"><span></span></i>
    <i class="tico-info tico-thin"><span></span></i>
  </div>
  <div class="space-around push-v-xl">
    <i class="tico-edit tico-thin"><span></span></i>
    <i class="tico-options tico-thin"><span></span></i>
    <i class="tico-chevron-down tico-thin"><span></span></i>
    <i class="tico-chevron-up tico-thin"><span></span></i>
  </div>
  <div class="space-around push-v-xl">
    <i class="tico-arrow-down tico-thin"><span></span></i>
    <i class="tico-arrow-up tico-thin"><span></span></i>
    <i class="tico-square tico-thin"><span></span></i>
    <i class="tico-search-alt tico-thin"><span></span></i>
  </div>
</div>

```html
<i class="tico-hamburger tico-thin"><span></span></i>
<i class="tico-search tico-thin"><span></span></i>
<i class="tico-close tico-thin"><span></span></i>
<i class="tico-check tico-thin"><span></span></i>

<i class="tico-plus tico-thin"><span></span></i>
<i class="tico-minus tico-thin"><span></span></i>
<i class="tico-alert tico-thin"><span></span></i>
<i class="tico-info tico-thin"><span></span></i>

<i class="tico-edit tico-thin"><span></span></i>
<i class="tico-options tico-thin"><span></span></i>
<i class="tico-chevron-down tico-thin"><span></span></i>
<i class="tico-chevron-up tico-thin"><span></span></i>

<i class="tico-arrow-down tico-thin"><span></span></i>
<i class="tico-arrow-up tico-thin"><span></span></i>
<i class="tico-square tico-thin"><span></span></i>
<i class="tico-search-alt tico-thin"><span></span></i>
```
