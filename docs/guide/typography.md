# Typography

## Text styles

<div class="bold push-down">.bold</div>

<div class="italic push-down">.italic</div>

<div class="underline push-down">.underline</div>

<div class="uppercase push-down">.uppercase</div>

<div class="lowercase push-down">.lowercase</div>

<div class="capitalize push-down">.capitalize</div>

<div class="normal-case push-down">.normal-case</div>

```html
<div class="bold">.bold</div>

<div class="italic">.italic</div>

<div class="underline">.underline</div>

<div class="uppercase">.uppercase</div>

<div class="lowercase">.lowercase</div>

<div class="capitalize">.capitalize</div>

<div class="normal-case">.normal-case</div>
```

<br>

To cancel any applied bold and/or italic styles, use the class `.regular`.

<span class="bold italic">
  bold bold bold <span class="regular">Just regular text</span> italic italic
</span>

```html
<div class="bold italic">
  bold bold bold
  <span class="regular">Just regular text</span>
  italic italic
</div>
```

## Letter spacing

A utility class is available to increase letter spacing.

<div class="extend-0 big bold push-down">.extend-0</div>
<div class="extend-s big bold push-down">.extend-s</div>
<div class="extend-m big bold push-down">.extend-m</div>
<div class="extend-l big bold push-down">.extend-l</div>

::: tip GOOD TO KNOW
Letter spacing utilizes the **em** unit by default, which is recommended
in order to ensure proportional spacing between the letters regardless of font size:

<div class="big extend-l push-down-s">Large letter spacing.</div>

<div class="size-xl extend-l push-down-xs">Large letter spacing.</div>

<div class="size-2xl extend-l push-down-m">Large letter spacing.</div>
:::

```html
<div class="extend-0">.extend-0</div>

<div class="extend-s">.extend-s</div>

<div class="extend-m">.extend-m</div>

<div class="extend-l">.extend-l</div>
```


## Font size

Semantic names based on the most common use-cases have been chosen for font size control.

### .size-xs

<lorem length="4" class="size-xs"/>

---

### .size-s

<lorem length="4" class="size-s"/>

---

### .size-m

<lorem length="4" class="size-m"/>

---

### .size-l

<lorem length="4" class="size-l"/>

---

### .size-xl

<lorem length="3" class="size-xl"/>

---

### .size-2xl

<lorem length="2" class="size-2xl tight-s"/>

---

### .size-3xl

<lorem length="2" class="size-3xl tight-m push-up-s"/>

---

### .size-4xl

<lorem length="1" class="size-4xl tight-l push-up-m push-down-xl"/>

<br>

```html
<div class="size-xs">.size-xs</div>

<div class="size-s">.size-s</div>

<div class="size-m">.size-m</div>

<div class="size-l">.size-l</div>

<div class="size-xl">.size-xl</div>

<div class="size-2xl">.size-2xl</div>

<div class="size-3xl">.size-3xl</div>

<div class="size-4xl">.size-4xl</div>
```

::: tip INFO
The larger text size classes are set-up to progressively scale down on smaller screen sizes to fit the screen.
:::

<br>

## Line height

There are classes to both tighten and loosen the line height of your text depending on your particular requirement.
Line height is defined without a unit by default in order to ensure proportional line height regardless of font size.

### .tight-l

<div class="tight-l size-3xl bold uppercase">
    Narrow<br>
    line-height
</div>

---

### .tight-m <span class="regular">(or simply</span> .tight)

<div class="tight size-xl">
    Reducing line height can be useful for very large text with one or multiple line-breaks.
</div>

---

### .tight-s

<div class="tight-s size-s soft extend-s">
    Slightly reduced line height can look appealing for short paragraphs of small text, i.e. an image caption.
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
</div>

::: tip PLEASE NOTE
It's worth pointing out that the `.tight` utility classes behave according to their semantic meaning, which is to say
that a higher strength modifier value ***decreases*** line height.

So `.tight-l` creates tighter text blocks than `.tight-s`.
:::

<br>

### .loose-s

<lorem length="4" class="loose-s"/>

---

### .loose-m <span class="regular">(or simply</span> .loose)

<lorem length="4" class="loose-m"/>

---

### .loose-l

<lorem length="4" class="loose-l"/>

<br>

```html
<div class="tight-l size-3xl bold uppercase">
  Narrow<br>
  line-height
</div>

<div class="tight size-xl">
  Reducing line height can be useful...
</div>

<div class="tight-s size-s soft extend-s">
  Slightly reduced line height...
</div>

<div class="loose-m">
  Lorem ipsum...
</div>

<div class="loose-m">
  Lorem ipsum...
</div>

<div class="loose-l">
  Lorem ipsum...
</div>
```


## Convenience text styles

PragmaCSS provides you with a small number of commonly used font styles for your convenience.
You can easily extend them via utility classes.

### .hero-text

<div class="hero-text">
    Hero<br>
    Text
</div>

---

### .headline

<div class="headline">
    Headline
</div>

---

### .title

<div class="title">
    Title text
</div>

---

### .subtitle

<div class="size-xl push-down">
    Some subtitle
</div>

---

### .big

<lorem length="4" class="big push-down"/>

---

### .small

<lorem length="5" class="small push-down"/>

---

### .label

<div class="label">
    Your label
</div>

::: tip INFO
The .label class is also applied to the actual HTML label element by default.
:::

```html
<div class="hero-text">Hero Text</div>

<div class="headline">Headline</div>

<div class="title">Title text</div>

<div class="subtitle">Some subtitle</div>

<div class="big">Lorem ipsum...</div>

<div class="small">Lorem ipsum...</div>

<div class="label">Your label</div>
```


## Resetting text styles

PragmaCSS applies default styling to particular elements for your convenience, but sometimes you may need
to completely change how a basic element looks like.

For these situations, you can use the `.reset` class in order to set the font size, weight and family,
as well as the line-height, color, letter-spacing and text-transformations to their default values. 
Then you can just use utility or custom classes to customize the element to your liking.

<label>Regular label</label>
<br>
<label class="reset blue">Custom label</label>

```html
<label>Regular label</label>
<label class="reset blue">Custom label</label>
```
