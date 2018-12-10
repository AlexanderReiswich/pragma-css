# UI elements


## Spinner

The spinner is a small inline loading indicator that can easily be added to buttons, form inputs, etc.


### Sizes

Simply add the appropriate suffix to change the size of the spinner to one of the available sizes:

#### .spinner-s
<i class="spinner-s"></i> <span class="size-s">Something is loading...</span>

---

#### .spinner-m (or just .spinner)
<i class="spinner"></i> Something is loading...

---

#### .spinner-l
<i class="spinner-l"></i> <span class="big">Something is loading...</span>

---

#### .spinner-xl
<i class="spinner-xl"></i>

---

#### .spinner-2xl
<i class="spinner-2xl"></i>

---

#### .spinner-3xl
<i class="spinner-3xl"></i>

```html
<i class="spinner-s"></i>
<i class="spinner"></i>
<i class="spinner-l"></i>
<i class="spinner-xl"></i>
<i class="spinner-2xl"></i>
<i class="spinner-3xl"></i>
```

<br>

### Negative mode

Add the `.negative` class if you want to use the spinner on a dark or colored background:

<div class="dark-bg pad rounded center space-evenly">
  <i class="spinner-xl negative"></i>
  <i class="spinner-xl negative border-white"></i>
</div>

```html
<i class="spinner-xl negative"></i>
<i class="spinner-xl negative border-white"></i>
```

<br>

### Colors

You can easily change the color of the spinner by adding any border color utility class such as
`.border-red`:

<div class="space-evenly wrap push-v-xl">
  <i class="spinner-xl border-dark"></i>
  <i class="spinner-xl border-red"></i>
  <i class="spinner-xl border-green"></i>
  <i class="spinner-xl border-yellow"></i>
  <i class="spinner-xl border-orange"></i>
  <i class="spinner-xl border-blue"></i>
  <i class="spinner-xl border-violet"></i>
</div>

```html
<i class="spinner-xl border-dark"></i>
<i class="spinner-xl border-red"></i>
<i class="spinner-xl border-green"></i>
<i class="spinner-xl border-yellow"></i>
<i class="spinner-xl border-orange"></i>
<i class="spinner-xl border-blue"></i>
<i class="spinner-xl border-violet"></i>
```

<br>

By the way, it's also possible to tweak the border width by applying the corresponding utility classes:

<div class="space-evenly wrap push-v-xl">
  <i class="spinner-2xl border-primary border-s"></i>
  <i class="spinner-2xl border-primary border-m"></i>
  <i class="spinner-2xl border-primary border-l"></i>
  <i class="spinner-2xl border-primary border-xl"></i>
</div>

```html
<i class="spinner-2xl border-s"></i>
<i class="spinner-2xl border-m"></i>
<i class="spinner-2xl border-l"></i>
<i class="spinner-2xl border-xl"></i>
```

<br>

### Customization

You can extend the spinner with your own custom classes for further customization. Just keep in mind that
you need to apply the `!important` rule to the border-color on the right, bottom and left side whenever you want
to change it.

<custom-spinner/>

```stylus
.spinner.my-custom-spinner-1
  width 100px
  height 100px
  border-width 16px
  border-top-color #00d9c1
  border-right-color #cbeff2 !important
  border-bottom-color #cbeff2 !important
  border-left-color #cbeff2 !important

.spinner.my-custom-spinner-2
  width 120px
  height 120px
  border-width 10px 10px  0 0
  border-right-color transparent !important
  border-bottom-color transparent !important
  border-left-color transparent !important
  border-top-color #95ea42

.spinner.my-custom-spinner-3
  width 120px
  height 120px
  border-width 2px
  border-top-color #f1486c
  border-right-color #777 !important
  border-bottom-color #ddd !important
  border-left-color #fff !important
  animation-duration 1s
  animation-timing-function linear
```


## Navbar

No special UI classes for navigation are included in PragmaCSS. However, it's easy enough to build a navbar with
the available utility classes. Here are a few examples:

### Regular navbar

<ul class="inline-list space-between rounded border-s border-pale pad-s">
  <li>
    <a class="inline pad dark" href="#">Page 1</a>
  </li>
  <li>
    <a class="inline pad bold primary light-bg rounded-s" href="#">Active Link</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 3</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 4</a>
  </li>
</ul>

```html
<ul class="inline-list space-between rounded border-s border-pale pad-s">
  <li>
    <a class="inline pad dark" href="#">Page 1</a>
  </li>
  <li>
    <a class="inline pad bold primary light-bg rounded-s" href="#">Active Link</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 3</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 4</a>
  </li>
</ul>
```

<br>

### Navbar with logo

<ul class="inline-list space-around rounded border-s border-pale pad-s">
  <li class="push-right-auto">
    <a class="inline pad size-l bold primary" href="#">LOGO</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 1</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 2</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 3</a>
  </li>
</ul>

```html
<ul class="inline-list space-around rounded border-s border-pale pad-s">
  <li class="push-right-auto">
    <a class="inline pad size-l bold primary" href="#">LOGO</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 1</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 2</a>
  </li>
  <li>
    <a class="inline pad dark" href="#">Page 3</a>
  </li>
</ul>
```


