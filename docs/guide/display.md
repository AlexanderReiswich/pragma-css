# Display & Position

The following utility classes allow you to set various aspects of how your block elements should behave.


## Display utilities

### .block

As one might expect, this sets display to **block**.


### .inline

Contrary to expectations, `.inline` actually sets the display property to **inline-block** as opposed to just inline,
for the simple reason that it's the much more frequently required one of the two.


### .flex

Sets display to **flex**.


### .hide

Sets display to **none**.

::: warning BREAKPOINTS AVAILABLE
All display classes can be extended with breakpoint modifiers, such as **.block-on-m** and **.flex-on-lxp**.
:::

<br>

## Positioning utilities

### .relative

As the name implies, sets the position attribute to **relative**.


### .absolute

Yep, this sets position to **absolute**. To position it according to your requirements, you can
use the following classes:

`.top`
`.right`
`.bottom`
`.left`


### .fixed

Sets position to **fixed**. To position it according to your requirements, you can use the following classes:

`.top`
`.right`
`.bottom`
`.left`


### .no-overflow

This useful class sets the overflow property to **hidden**.

<br>

## Block alignment

### .centered

<div class="centered w-200 rounded light-bg pad-m push-down">
    The .centered class sets the left and right margin to <b>auto</b>, thus centering the block
    element horizontally.
</div>


### .align-v

<div class="align-v rounded light-bg pad-m push-up-s push-down" style="height: 200px">

<div class="centered w-200 rounded dark-bg light pad-s push-s">
    The .align-v class uses flexbox to vertically align the elements within its parent container.
</div>

<div class="centered w-200 rounded primary-bg light pad-s push-s">
    ...Whether one or more.
</div>

</div>


### .align-h

<div class="align-h rounded light-bg pad-m push-up-s push-down" style="height: 200px">

<div class="w-200 rounded dark-bg light pad-s push-s">
    The .align-h class uses flexbox to horizontally align the elements within its parent container.
</div>

<div class="w-200 rounded primary-bg light pad-s push-s">
    ...Whether one or more.
</div>

</div>


### .align-vh

<div class="align-vh rounded light-bg pad-m push-up-s push-down" style="height: 200px">

<div class="w-200 rounded dark-bg light pad-s push-s">
    The .align-vh class uses flexbox to align the elements within its parent container on both axis.
</div>

<div class="w-200 rounded primary-bg light pad-s push-s">
    ...Whether one or more.
</div>

</div>


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

<br>

::: tip GOOD TO KNOW
The flexbox-based alignment utility classes automatically set display to **flex**. No need to set
it manually.
:::

<br>

## Fixed width

The following classes allow you to set the width of your elements to a particular value.

<div class="w-30 rounded light-bg primary pad-v-s push-v-m size-xs bold center">
.w-30
</div>

<div class="w-50 rounded light-bg primary pad-v-s push-v-m size-xs bold center">
.w-50
</div>

<div class="w-70 rounded light-bg primary pad-v-s push-v-m size-s bold center">
.w-70
</div>

<div class="w-100 rounded light-bg primary pad-s push-v-m bold center">
.w-100
</div>

<div class="w-150 rounded light-bg primary pad-s push-v-m size-l bold center">
.w-150
</div>

<div class="w-200 rounded light-bg primary pad-s push-v-m size-l bold center">
.w-200
</div>

<div class="w-250 rounded light-bg primary pad-s push-v-m size-l bold center">
.w-250
</div>

<div class="w-300 rounded light-bg primary pad-s push-v-m size-l bold center">
.w-300
</div>

As you may notice, width classes violate the usual convention of size suffixes such as xs, s, m, etc.

Additionally, the name is abbreviated with a single letter to differentiate it even further.

The reason for this decision lies in the fact that widths are more useful when linked to actual pixel values
as opposed to abstractions.

You are encouraged to add your own width classes with the values that you need.

It's worth pointing out that there is no counterpart for **height** by default, because setting a fixed
height is not as common. You are of course free to simply add your own height classes if you need them.

<br>

## Width and height utilities

### .full

Sets the width of an element to 100%.

Note: There is no equivalent class for height, since setting height to 100% is very rarely required.

<div class="light-bg pad-m rounded center full">
    .full
</div>

```html
<div class="full">
    .full
</div>
```


### .width-auto

Sets the width of an element to **auto**.

<div class="light-bg pad-m rounded w-100 inline width-auto">
    .width-auto
</div>

```html
<div class="width-auto">
    .width-auto
</div>
```

<br>

## Text block utilities

### .nowrap

This class can be useful to prevent particular word combinations from breaking at awkward and undesired places,
for example currencies <span class="nowrap">(USD<span class="yellow yellow-bg">+</span>999.00)</span> or company
names <span class="nowrap">(Black<span class="yellow yellow-bg">+</span>&<span class="yellow yellow-bg">+</span>Decker)</span>.

<div class="light-bg pad-m rounded w-100">
    <lorem length="2" class="nowrap"/>
</div>

```html
<div>
    <div class="nowrap">Lorem ipsum...</div>
</div>
```


### .truncate

If you want to ensure long text fits in one line without breaking or getting cut off, apply the .truncate class
to elegantly end it with an ellipsis.

<lorem length="4" class="truncate bold blue"/>

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

