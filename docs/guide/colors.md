# Colors

PragmaCSS comes with a carefully-chosen collection of colors that is wide enough to meet most projects needs,
but focused enough as to not make the library unnecessarily bloated.

Colors are separated into two semantic groups: Functional and literal.

## Functional colors

Functional colors should be based on your project's visual identity. Usually they'll be derived from your logo.

As the name implies, you should select their values based on their *function*.

<color textClass="primary" bgClass="primary-bg" stage="light">

The leading color; Usually a confident signal color. Think of Twitter's blue or YouTube's red.

Often used to signify the interactivity of elements such as links and buttons, or to highlight their importance.

If your project's style includes more than one main color, it's recommended to add a secondary and tertiary class.
But as many projects only have one main color, they are not included by default.

</color>

<color textClass="dark" bgClass="dark-bg" stage="light">
The main color for paragraphs of text; Should allow for good readability.
</color>

<color textClass="soft" bgClass="soft-bg" stage="light">
Signifies lesser relevance, i.e. for footnotes; This is an important tool to establish a proper
visual hierarchy in your designs.
</color>

<color textClass="pale" bgClass="pale-bg" stage="light">
This should be a color with an intentionally weak contrast, but still readable in text. It can be
used to signify unavailability, i.e. a disabled button.
</color>

<color textClass="light" bgClass="light-bg" stage="dark">

Similarly to pale, this should be an intentionally subtle color, barely visible on a white background.
Nevertheless, it acts as a very important tool for UI design, as many elements such as lines require a very
unobtrusive tone.

On a dark background it can also be used for text, just as .dark is normally used on a light background.

</color>

```html
<div class="primary">Primary text</div>
<div class="primary-bg">Primary background</div>

<div class="dark">Dark text</div>
<div class="dark-bg">Dark background</div>

<div class="soft">Soft text</div>
<div class="soft-bg">Soft background</div>

<div class="pale">Pale text</div>
<div class="pale-bg">Pale background</div>

<div class="light">Light text</div>
<div class="light-bg">Light background</div>
```

<br>

## Literal colors

This group is a collection of the most widely used base colors.

In a sense, these, too, are functional colors. A conscious decision has been made to use literal names for something
like red, yellow and green, as opposed to functional names like "success", "warning" and "error".

The reason for this lies in the fact that a single color can have many meanings.
Red can signify an error, but it can also be used to attract attention for other reasons, or imply another meaning,
such as health, warmth and so on.

A functional name would be too limiting and often lead us to disregard the meaning implied in its name.
Using the color name *as* the functional name solves this issue.


<color textClass="white" bgClass="white-bg" stage="dark">
Colors are, of course, relative. There is no reason for white to be purely "#fff". The only real condition
for this particular color is to be lighter than all other colors.
</color>

<color textClass="black" bgClass="black-bg" stage="light">
Similarly to white, black doesn't need to be the darkest color a screen can display. A dark grey or blue may
fit more naturally to your particular design scheme. But it should be the darkest color relative to all others.
</color>

<color textClass="red" bgClass="red-bg" stage="light">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

<color textClass="orange" bgClass="orange-bg" stage="light">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

<color textClass="violet" bgClass="violet-bg" stage="light">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

<color textClass="blue" bgClass="blue-bg" stage="light">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

<color textClass="green" bgClass="green-bg" stage="light">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

<color textClass="yellow" bgClass="yellow-bg" stage="light">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

<br>

Some colors work better on dark backgrounds due to their natural lightness:

<color textClass="green" bgClass="green-bg" stage="dark">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

<color textClass="yellow" bgClass="yellow-bg" stage="dark">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
</color>

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
