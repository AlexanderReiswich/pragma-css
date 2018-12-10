# Display & Position

The following utility classes allow you to set various aspects of how your block elements should behave.


## Display utilities

### .block

As one might expect, this sets display to **block**.

---

### .inline

Contrary to expectations, `.inline` actually sets the display property to **inline-block** as opposed to just inline,
for the simple reason that it's the much more frequently required one of the two.

---

### .flex

Sets display to **flex**.

---

### .hide

Sets display to **none**.

::: warning BREAKPOINTS AVAILABLE
All display classes can be extended with breakpoint modifiers, such as **.block-on-m** and **.flex-on-lxp**.
:::

<br>

## Positioning utilities

### .relative

As the name implies, sets the position attribute to **relative**.

---

### .absolute

Yep, this sets position to **absolute**. To position it according to your requirements, you can
use the following classes:

`.top`
`.right`
`.bottom`
`.left`

---

### .fixed

Sets position to **fixed**. To position it according to your requirements, you can use the following classes:

`.top`
`.right`
`.bottom`
`.left`

---

### .no-overflow

This useful class sets the overflow property to **hidden**.

<br>

## Block alignment (Flexbox)

### .centered

<div class="centered width-200 rounded light-bg pad-m push-down">
  The .centered class sets the left and right margin to <b>auto</b>, thus centering the block
  element horizontally.
</div>

---

### .align-v

<div class="align-v rounded light-bg pad-m push-up-s push-down" style="height: 200px">
  <div class="centered width-200 rounded dark-bg light pad-s push-s">
    The .align-v class uses flexbox to vertically align the elements within its parent container.
  </div>
  <div class="centered width-200 rounded primary-bg light pad-s push-s">
    ...Whether one or more.
  </div>
</div>

---

### .align-h

<div class="align-h rounded light-bg pad-m push-up-s push-down" style="height: 200px">
  <div class="width-200 rounded dark-bg light pad-s push-s">
    The .align-h class uses flexbox to horizontally align the elements within its parent container.
  </div>
  <div class="width-200 rounded primary-bg light pad-s push-s">
    ...Whether one or more.
  </div>
</div>

---

### .align-vh

<div class="align-vh rounded light-bg pad-m push-up-s push-down" style="height: 200px">
  <div class="width-200 rounded dark-bg light pad-s push-s">
    The .align-vh class uses flexbox to align the elements within its parent container in both directions.
  </div>
  <div class="width-200 rounded primary-bg light pad-s push-s">
    ...Whether one or more.
  </div>
</div>

---

### .space-evenly

<div class="space-evenly rounded light-bg pad-m push-up-s push-down">
  <div class="rounded dark-bg light pad-s push-s">
    Some Item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    Another item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    And a third item item
  </div>
</div>

---

### .space-around

<div class="space-around rounded light-bg pad-m push-up-s push-down">
  <div class="rounded dark-bg light pad-s push-s">
    Some Item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    Another item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    And a third item item
  </div>
</div>

---

### .space-between

<div class="space-between rounded light-bg pad-m push-up-s push-down">
  <div class="rounded dark-bg light pad-s push-s">
    Some Item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    Another item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    And a third item item
  </div>
</div>

---

### .flex-start

<div class="space-between flex-start rounded light-bg pad-m push-up-s push-down">
  <div class="rounded dark-bg light pad-s push-s">
    Some Item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    Another item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    And a third item item
  </div>
</div>

---

### .flex-end

<div class="space-between flex-end rounded light-bg pad-m push-up-s push-down">
  <div class="rounded dark-bg light pad-s push-s">
    Some Item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    Another item
  </div>
  <div class="rounded dark-bg light pad-s push-s">
    And a third item item
  </div>
</div>

---

### .column-reverse

<div class="space-between column-reverse rounded light-bg pad-h-m pad-v-s">
  <div class="full rounded dark-bg light pad-v push-v-s center">
    Upper column
  </div>
  <div class="full rounded primary-bg light pad-v push-v-s center">
    Lower column
  </div>
</div>

---

### .row-reverse

<div class="space-between row-reverse rounded light-bg pad-m push-up-s push-down">
  <div class="full rounded dark-bg light pad-s push-s center">
    Left column
  </div>
  <div class="full rounded primary-bg light pad-s push-s center">
    Right column
  </div>
</div>

<br>

::: tip GOOD TO KNOW
The flexbox-based alignment utility classes automatically set display to **flex**. No need to set
it manually.
:::

<br>

## Fixed width

The following classes allow you to set the width of your elements to a particular pixel value.

<div class="width-30 rounded light-bg primary pad-v-s push-v-m size-xs bold center">
  .width-30
</div>

<div class="width-50 rounded light-bg primary pad-v-s push-v-m size-xs bold center">
  .width-50
</div>

<div class="width-70 rounded light-bg primary pad-v-s push-v-m size-s bold center">
  .width-70
</div>

<div class="width-100 rounded light-bg primary pad-s push-v-m bold center">
  .width-100
</div>

<div class="width-150 rounded light-bg primary pad-s push-v-m size-l bold center">
  .width-150
</div>

<div class="width-200 rounded light-bg primary pad-s push-v-m size-l bold center">
  .width-200
</div>

<div class="width-250 rounded light-bg primary pad-s push-v-m size-l bold center">
  .width-250
</div>

<div class="width-300 rounded light-bg primary pad-s push-v-m size-l bold center">
  .width-300
</div>

<div class="width-400 rounded light-bg primary pad-s push-v-m size-l bold center">
  .width-400
</div>

<div class="width-500 rounded light-bg primary pad-s push-v-m size-l bold center">
  .width-500
</div>

You can configure your own width values in the global configuration.

<br>

## Max-width

In addition to width, max-width classes are also available, and can be configured just the same.

<div class="max-width-100 rounded light-bg primary pad-s push-v-m bold center">
  .max-width-100
</div>

<div class="max-width-200 rounded light-bg primary pad-s push-v-m size-l bold center">
  .max-width-200
</div>

<div class="max-width-300 rounded light-bg primary pad-s push-v-m size-l bold center">
  .max-width-300
</div>

<br>

## Height

Height classes are also available, even though fewer are available by default.

<div class="height-30 rounded light-bg primary pad-s push-v-m bold center">
  .height-30
</div>

<div class="height-50 rounded light-bg primary pad-s push-v-m bold center">
  .height-50
</div>

<div class="height-70 rounded light-bg primary pad-s push-v-m bold center">
  .height-70
</div>

<div class="height-100 rounded light-bg primary pad-s push-v-m bold center">
  .height-100
</div>

<br>

## Max-height

Same as the height classes, but for max-height.

<div class="max-height-30 rounded light-bg primary pad-s push-v-m bold center no-overflow">
  <lorem length="5"/>
</div>

<div class="max-height-50 rounded light-bg primary pad-s push-v-m bold center no-overflow">
  <lorem length="5"/>
</div>

<div class="max-height-70 rounded light-bg primary pad-s push-v-m bold center no-overflow">
  <lorem length="5"/>
</div>

<div class="max-height-100 rounded light-bg primary pad-s push-v-m bold center no-overflow">
  <lorem length="5"/>
</div>

<br>

## Width and height utilities

### .full-width

Sets the width of an element to 100%.

<div class="light-bg pad-m rounded center full">
  .full-width (or just .full)
</div>

```html
<div class="full">
  .full-width (or just .full)
</div>
```

### .full-height

Sets the height of an element to 100%.

<div class="light-bg pad-m rounded center full-height">
  .full-height
</div>

::: tip Note
The need to set height to 100% is quite rare, which is why .full is a shorthand for full width.
:::

```html
<div class="full-height">
  .full-height
</div>
```

<br>

### .width-auto

Sets the width of an element to **auto**.

<div class="light-bg pad-m rounded width-100 inline width-auto">
  .width-auto
</div>

```html
<div class="width-100 width-auto">
  .width-auto
</div>
```

<br>

### .height-auto

Sets the height of an element to **auto**.

<div class="light-bg pad-m rounded height-100 inline height-auto">
  .height-auto
</div>

```html
<div class="height-100 height-auto">
  .height-auto
</div>
```

<br>

## Text block utilities

### .nowrap

This class can be useful to prevent particular word combinations from breaking at awkward and undesired points.
Common use cases are currencies <span class="nowrap">(USD<span class="yellow yellow-bg">+</span>999.00)</span> or
company names <span class="nowrap">(Black<span class="yellow yellow-bg">+</span>&<span class="yellow yellow-bg">+</span>Decker)</span>.

<div class="light-bg pad-m rounded width-100">
  <lorem length="2" class="nowrap"/>
</div>

```html
<div>
  <div class="nowrap">Lorem ipsum dolor sit amet</div>
</div>
```

<br>

### .truncate

If you want to ensure long text fits in one line without breaking or getting cut off, apply the .truncate class
to elegantly end it with an ellipsis.

<lorem length="4" class="truncate big bold blue"/>

```html
<div class="truncate">Lorem ipsum...</div>
```

<br>

## Text alignment

<div class="center bold pad-m light-bg rounded push-up-s">
  .center
</div>

<div class="align-right bold pad-m light-bg rounded push-up-s">
  .align-right
</div>

<div length="5" class="align-left bold pad-m light-bg rounded push-up-s">
  .align-left
</div>

```html
<div class="center pad-m">
  .center
</div>

<div class="align-right">
  .align-right
</div>

<div class="align-left">
  .align-left
</div>
```

::: warning BREAKPOINTS AVAILABLE
All alignment classes can be extended with breakpoint modifiers, such as **.align-right-on-ml** and **.center-on-p**.
:::

<br>

## Float

<lorem length="5" class="push-up-s">
  <div class="float-left push-right-s pad-m light-bg rounded bold extend-s">.float-left</div>
</lorem>

<br>

<lorem length="5" class="push-up-s">
  <div class="float-right push-left-s pad-m light-bg rounded bold extend-s">.float-right</div>
</lorem>

```html
<div class="float-left">
  .float-left
</div>

<div class="float-right">
  float-right
</div>
Lorem ipsum...
```

::: warning BREAKPOINTS AVAILABLE
All float classes can be extended with breakpoint modifiers, such as **.float-left-on-mlx** and **.float-right-s**.
:::

<br>

### Clear float

Clear the effects of preceding floating elements with `.clear`.

```html
<div class="float-left">
  .float-left
</div>

<div class="clear">
  Clear the previous float
</div>
```

<br>

## Vertical text alignment

The vertical alignment utility classes are useful to align non-text elements such as buttons or icons
within a line of text.

<br>
<br>

<div>
  <div class="va-top btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-top</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

---

<div>
  <div class="va-bottom btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-bottom</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

---

<div>
  <div class="va-text-top btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-text-top</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

---

<div>
  <div class="va-text-bottom btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-text-bottom</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

---

<div>
  <div class="va-middle btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-middle</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

---

<div>
  <div class="va-baseline btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-baseline</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

---

<div>
  <div class="va-sub btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-sub</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

---

<div>
  <div class="va-super btn tight bold normal-case size-m push-right-s push-down-s cursor-default">.va-super</div>
  <div class="inline">Lorem ipsum.</div>
  <div class="inline title tight-l">Lorem ipsum.</div>
</div>

