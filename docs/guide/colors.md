# Colors

PragmaCSS comes with a carefully-chosen collection of colors that is wide enough to meet most projects needs,
but focused enough as to not make the library unnecessarily bloated.

Colors are separated into three semantic groups: functional, literal and brand colors.

## Brand colors

Brand colors will usually be derived from your logo, which is why sometimes you'll have only one brand color and
at other times two or even three.

The global configuration allows you to easily determine which colors should be available, so you can just disable
the ones that you won't be needing.


### .primary

The leading color; Usually a confident signal color. Think of Twitter's blue or YouTube's red.
Usually used to emphasize interactive elements such as links and buttons.

<color textClass="primary" bgClass="primary-bg" stage="border-primary"/>

---

### .secondary

Sometimes your projects visual identity will have more than one brand color. In such cases you can
add a secondary and / or tertiary color.

<color textClass="secondary" bgClass="secondary-bg" stage="border-secondary"/>

---

### .tertiary

<color textClass="tertiary" bgClass="tertiary-bg" stage="border-tertiary"/>

```html
<div class="primary">Primary text</div>
<div class="primary-bg">Primary background</div>

<div class="secondary">Secondary text</div>
<div class="secondary-bg">Secondary background</div>

<div class="tertiary">Tertiary text</div>
<div class="tertiary-bg">Tertiary background</div>
```

<br>

## Utility colors

Utility colors are designed to give you hierarchical control over your texts appearance via four levels of contrast.


### .dark

A crisp and clear tone, normally used as the default text color for optimal legibility.

<color textClass="dark" bgClass="dark-bg" stage="border-dark"/>

---

### .muted

As the name implies, `.muted` represents a weakened version of `.dark`. It can be used to signify somewhat
lesser relevance, i.e. for footnotes or labels.

<color textClass="muted" bgClass="muted-bg" stage="border-muted"/>

---

### .subtle

An even further muted tone with an intentionally weak contrast (but still readable). It can be
used to signify unavailability, i.e. a disabled button.

<color textClass="subtle" bgClass="subtle-bg" stage="border-subtle"/>

---

### .light

The color with the weakest contrast, barely visible, but nevertheless very useful; Many elements such as
borders and backgrounds often require a very unobtrusive tone.

<color textClass="light" bgClass="light-bg" stage="border-light"/>

```html
<div class="dark">dark text</div>
<div class="dark-bg">dark background</div>

<div class="muted">Muted text</div>
<div class="muted-bg">Muted background</div>

<div class="subtle">Subtle text</div>
<div class="subtle-bg">Subtle background</div>

<div class="light">light text</div>
<div class="light-bg">light background</div>
```

<br>

Keep in mind that utility classes are based on **rgba** values and therefore adapt to their background.
This is to say that they retain their behavior regardless of the background they're used on:

### .dark on .primary-bg

<color textClass="dark" bgClass="dark-bg" stage="primary-bg"/>

---

### .muted on .primary-bg

<color textClass="muted" bgClass="muted-bg" stage="primary-bg"/>

---

### .subtle on .primary-bg

<color textClass="subtle" bgClass="subtle-bg" stage="primary-bg"/>

---

### .light on .primary-bg

<color textClass="light" bgClass="light-bg" stage="primary-bg"/>

<br>

## Color inversion

When used on a dark background, utility colors will become unreadable. To remedy this effect, simply apply the 
`.inverted` class to the parent container.

This will ensure that utility colors will remain legible and button states behave as expected.

### .inverted .dark

<color textClass="dark" bgClass="dark-bg" stage="dark-bg inverted" :darkText="true"/>

---

### .inverted .muted

<color textClass="muted" bgClass="muted-bg" stage="dark-bg inverted"/>

---

### .inverted .subtle

<color textClass="subtle" bgClass="subtle-bg" stage="dark-bg inverted"/>

---

### .inverted .light

<color textClass="light" bgClass="light-bg" stage="dark-bg inverted"/>

<br>

Inversion is a powerful tool that allows you to easily switch the color scheme of a container without having to
change the classes of its children individually.

But what if you need to make an exception and display a utility color in its original form, from within an
inverted container? Simply add the `-forced` modifier to the class name in those circumstances:

<div class="dark-bg inverted big rounded pad">
  <div class="dark push-down-s">This text is <span class="primary">.dark</span>.</div>
  <div class="muted push-down-s">This text is <span class="primary">.muted</span>.</div>
  <div class="subtle push-down-s">This text is <span class="primary">.subtle</span>.</div>
  <div class="light push-down-s">This text is <span class="primary">.light</span>.</div>
  <div class="dark-forced push-down-s">This text is <span class="primary">.dark-forced</span>.</div>
  <div class="muted-forced push-down-s">This text is <span class="primary">.muted-forced</span>.</div>
  <div class="subtle-forced push-down-s">This text is <span class="primary">.subtle-forced</span>.</div>
  <div class="light-forced">This text is <span class="primary">.light-forced</span>.</div>
</div

```html
<div class="dark-bg inverted big rounded pad">
  <div class="dark">This text is <span class="primary">.dark</span>.</div>
  <div class="muted">This text is <span class="primary">.muted</span>.</div>
  <div class="subtle">This text is <span class="primary">.subtle</span>.</div>
  <div class="light">This text is <span class="primary">.light</span>.</div>
  <div class="dark-forced">This text is <span class="primary">.dark-forced</span>.</div>
  <div class="muted-forced">This text is <span class="primary">.muted-forced</span>.</div>
  <div class="subtle-forced">This text is <span class="primary">.subtle-forced</span>.</div>
  <div class="light-forced">This text is <span class="primary">.light-forced</span>.</div>
</div>
```

<br>

## Literal colors

This group is a collection of the most widely used base colors.

In a sense, these, too, are functional colors. A conscious decision has been made to use literal names for colors
like red, yellow and green, as opposed to functional names like "success", "warning" and "error".

This is because a single color can have many meanings: Red can signify an error, but it can also be used to
attract attention for other reasons, or imply something entirely different, such as health, warmth and so on.

Using the color ***as*** the functional name solves this issue.

### .white

Colors are, of course, _relative_. There is no reason for white to be a pure "#fff". The only condition
for white is to be "whiter" than all other colors.

<color textClass="white" bgClass="white-bg" stage="dark-bg" :darkText="true"/>

---

### .black

<color textClass="black" bgClass="black-bg" stage="border-black"/>

---

### .red

<color textClass="red" bgClass="red-bg" stage="border-red"/>

---

### .orange

<color textClass="orange" bgClass="orange-bg" stage="border-orange"/>

---

### .violet

<color textClass="violet" bgClass="violet-bg" stage="border-violet"/>

---

### .blue

<color textClass="blue" bgClass="blue-bg" stage="border-blue"/>

---

### .green

<color textClass="green" bgClass="green-bg" stage="border-green"/>

---

### .yellow

<color textClass="yellow" bgClass="yellow-bg" stage="border-yellow"/>

```html
<div class="white">White text</div>
<div class="white-bg">White background</div>

<div class="black">Black text</div>
<div class="black-bg">Black background</div>

<div class="red">Red text</div>
<div class="red-bg">Red background</div>

<div class="orange">Orange text</div>
<div class="orange-bg">Orange background</div>

<div class="violet">Violet text</div>
<div class="violet-bg">Violet background</div>

<div class="blue">Blue text</div>
<div class="blue-bg">Blue background</div>

<div class="green">Green text</div>
<div class="green-bg">Green background</div>

<div class="yellow">Yellow text</div>
<div class="yellow-bg">Yellow background</div>
```

<br>

## Change color on hover

Every now and then we want to change the text or background color of an element when hovering over it.
The following classes allow you to do exactly that. There are no comparable classes for other states such
as :focus or :active by default, since these use-cases are much less frequent and don't justify the
additional ballast.

<color-hover/>

<br>

## Links

All colors can naturally also be applied to links.

### .primary

<div class="big">
    <a href="#" class="primary">Just an example link</a>
</div>

---

### .secondary

<div class="big">
    <a href="#" class="secondary">Just an example link</a>
</div>

---

### .tertiary

<div class="big">
    <a href="#" class="tertiary">Just an example link</a>
</div>

---

### .dark

<div class="big">
    <a href="#" class="dark">Just an example link</a>
</div>

---

### .muted

<div class="big">
    <a href="#" class="muted">Just an example link</a>
</div>

---

### .subtle

<div class="big">
    <a href="#" class="subtle">Just an example link</a>
</div>

---

### .light

<div class="big">
    <a href="#" class="light">Just an example link</a>
</div>

---

### .white

<div class="big">
    <a href="#" class="white">Just an example link</a>
</div>

---

### .black

<div class="big">
    <a href="#" class="black">Just an example link</a>
</div>

---

### .red

<div class="big">
    <a href="#" class="red">Just an example link</a>
</div>

---

### .orange

<div class="big">
    <a href="#" class="orange">Just an example link</a>
</div>

---

### .violet

<div class="big">
    <a href="#" class="violet">Just an example link</a>
</div>

---

### .blue

<div class="big">
    <a href="#" class="blue">Just an example link</a>
</div>

---

### .green

<div class="big">
    <a href="#" class="green">Just an example link</a>
</div>

---

### .yellow

<div class="big">
    <a href="#" class="yellow">Just an example link</a>
</div>

<br>

Make sure to use the .inverted class if you want to use a colored link on a colored background:

### .primary

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="primary">Just an example link</a>
</div>

---

### .secondary

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="secondary">Just an example link</a>
</div>

---

### .tertiary

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="tertiary">Just an example link</a>
</div>

---

### .dark

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="dark">Just an example link</a>
</div>

---

### .muted

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="muted">Just an example link</a>
</div>

---

### .subtle

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="subtle">Just an example link</a>
</div>

---

### .light

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="light">Just an example link</a>
</div>

---

### .white

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="white">Just an example link</a>
</div>

---

### .black

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="black">Just an example link</a>
</div>

---

### .red

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="red">Just an example link</a>
</div>

---

### .orange

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="orange">Just an example link</a>
</div>

---

### .violet

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="violet">Just an example link</a>
</div>

---

### .blue

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="blue">Just an example link</a>
</div>

---

### .green

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="green">Just an example link</a>
</div>

---

### .yellow

<div class="dark-bg inverted pad rounded big">
    <a href="#" class="yellow">Just an example link</a>
</div>

