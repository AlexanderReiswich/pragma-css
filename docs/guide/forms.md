# Form elements

Buttons are among the most common UI elements, so great care has been put into making them easy to use and
very extensible for all kinds of purposes.

## Text inputs

All input elements are styled by default (based on their corresponding stylus variables), so you don't have
to apply any classes to them&mdash;unless you want to customize individual elements.

<div>
  <label for="text-input">Input label</label>
  <input placeholder="Text input..." id="text-input">
</div>

```html
<label for="text_input">Input label</label>
<input placeholder="Text input..." id="text_input">
```

<br>

### Disabled state

Setting the input field to disabled styles it accordingly.

<div>
  <label for="text-input-disabled">Disabled input label</label>
  <input placeholder="Can't type here..." id="text-input-disabled" disabled>
</div>

```html
<label for="text-input-disabled">Disabled input label</label>
<input placeholder="Can't type here..." id="text-input-disabled">
```

<br>

### Input size control

The size control utility classes that can be used for buttons are also compatible with all input fields:

#### .v-xs

<div>
  <input placeholder="Text input..." class="v-xs size-s">
</div>

---

#### .v-s

<div>
  <input placeholder="Text input..." class="v-s">
</div>

---

#### .v-m

<div>
  <input placeholder="Text input..." class="v-m">
</div>

---

#### .v-l

<div>
  <input placeholder="Text input..." class="v-l size-l">
</div>

---

#### .v-xl

<div>
  <input placeholder="Text input..." class="v-xl size-xl">
</div>

```html
<input placeholder="Text input..." class="v-xs size-s">
<input placeholder="Text input..." class="v-s">
<input placeholder="Text input..." class="v-m">
<input placeholder="Text input..." class="v-l size-l">
<input placeholder="Text input..." class="v-xl size-xl">
```

<br>

### Icons

If you would like to add an icon to your input field, simply wrap it inside of a div container with the
`.input-icon` class. Then add your icon element after the input. It doesn't need to have any special class.

<div class="input-icon push-down">
  <input placeholder="Text input..." class="v-xs size-s">
  <div>
    <div class="tico-s">
        <i class="tico-edit">
          <span></span>
        </i>
      </div>
  </div>
</div>

<div class="input-icon push-down">
  <input placeholder="Text input..." class="v-s">
  <div>
    <div class="tico-m">
        <i class="tico-edit">
          <span></span>
        </i>
      </div>
  </div>
</div>

<div class="input-icon push-down">
  <input placeholder="Text input..." class="v-m">
  <div>
    <div class="tico-l">
        <i class="tico-edit">
          <span></span>
        </i>
      </div>
  </div>
</div>

<div class="input-icon push-down">
  <input placeholder="Text input..." class="v-l size-l">
  <div>
    <div class="tico-xl">
        <i class="tico-edit">
          <span></span>
        </i>
      </div>
  </div>
</div>

<div class="input-icon push-down">
  <input placeholder="Text input..." class="v-xl size-xl">
  <div>
    <div class="tico-2xl">
        <i class="tico-edit">
          <span></span>
        </i>
      </div>
  </div>
</div>

```html
<div class="input-icon">
  <input placeholder="Text input..." class="v-xs size-s">
  <div>
    <div class="tico-s">
        <i class="tico-edit"><span></span></i>
      </div>
  </div>
</div>

<div class="input-icon">
  <input placeholder="Text input..." class="v-s">
  <div>
    <div class="tico-m">
        <i class="tico-edit"><span></span></i>
      </div>
  </div>
</div>

<div class="input-icon">
  <input placeholder="Text input..." class="v-m">
  <div>
    <div class="tico-l">
        <i class="tico-edit"><span></span></i>
      </div>
  </div>
</div>

<div class="input-icon">
  <input placeholder="Text input..." class="v-l size-l">
  <div>
    <div class="tico-xl">
        <i class="tico-edit"><span></span></i>
      </div>
  </div>
</div>

<div class="input-icon">
  <input placeholder="Text input..." class="v-xl size-xl">
  <div>
    <div class="tico-2xl">
        <i class="tico-edit"><span></span></i>
      </div>
  </div>
</div>
```

<br>

## Textarea

<div>
  <textarea placeholder="Type here..."></textarea>
</div>

```html
<textarea placeholder="Type here..."></textarea>
```

<br>

### Disabled state

<div>
  <textarea placeholder="Can't type here..." disabled></textarea>
</div>

```html
<textarea placeholder="Can't type here..." disabled></textarea>
```

## Selects

<select class="v-xs size-s push-down">
  <option>
    -- Select an option --
  </option>
  <option>
    Option 1
  </option>
  <option>
    Option 2
  </option>
  <option>
    Option 3
  </option>
</select>

<select class="v-s push-down">
  <option>
    -- Select an option --
  </option>
  <option>
    Option 1
  </option>
  <option>
    Option 2
  </option>
  <option>
    Option 3
  </option>
</select>

<select class="v-m push-down">
  <option>
    -- Select an option --
  </option>
  <option>
    Option 1
  </option>
  <option>
    Option 2
  </option>
  <option>
    Option 3
  </option>
</select>

<select class="v-l size-l push-down">
  <option>
    -- Select an option --
  </option>
  <option>
    Option 1
  </option>
  <option>
    Option 2
  </option>
  <option>
    Option 3
  </option>
</select>

<select class="v-xl size-xl push-down">
  <option>
    -- Select an option --
  </option>
  <option>
    Option 1
  </option>
  <option>
    Option 2
  </option>
  <option>
    Option 3
  </option>
</select>

```html
<select class="v-xs size-s">
  <option>...</option>
</select>

<select class="v-s">
  <option>...</option>
</select>

<select class="v-m">
  <option>...</option>
</select>

<select class="v-l size-l">
  <option>...</option>
</select>

<select class="v-xl size-xl">
  <option>...</option>
</select>
```

<br>

### Disabled state

<select class="push-down" disabled>
  <option>
    -- Select an option --
  </option>
  <option>
    Option 1
  </option>
  <option>
    Option 2
  </option>
  <option>
    Option 3
  </option>
</select>

```html
<select disabled>
  <option>...</option>
</select>
```

<br>

## Checkbox

<div class="push-down">
  <label for="sample-checkbox" class="checkbox">
    <input type="checkbox" id="sample-checkbox">
    <span class="checkbox-indicator"></span>
    <span class="size-l">
      Check this!
    </span>
  </label>
</div>

```html
<label for="sample-checkbox" class="checkbox">
  <input type="checkbox" id="sample-checkbox">
  <span class="checkbox-indicator"></span>
  <span class="size-l">
    Check this!
  </span>
</label>
```

<br>

### Disabled state

<div class="push-down">
  <label for="disabled-checkbox" class="checkbox">
    <input type="checkbox" id="disabled-checkbox" checked disabled>
    <span class="checkbox-indicator"></span>
    <span class="size-l subtle">
      Can't touch this.
    </span>
  </label>
</div>

```html
<label for="disabled-checkbox" class="checkbox">
  <input type="checkbox" id="disabled-checkbox" checked disabled>
  <span class="checkbox-indicator"></span>
  <span class="size-l subtle">
    Can't touch this.
  </span>
</label>
```

<br>

### Size control

The checkbox size can be adjusted by adding the desired `.size-x` class to the `.checkbox-indicator` element.
Keep in mind that the text size of the label is not affected by this; You'll have to adjust it via its own
`.size` class.

#### .size-xs

<div class="push-down">
  <label for="checkbox-1" class="checkbox">
    <input type="checkbox" id="checkbox-1">
    <span class="checkbox-indicator size-xs"></span>
    <span class="size-s">
      Check this
    </span>
  </label>
</div>

#### .size-s

<div class="push-down">
  <label for="checkbox-2" class="checkbox">
    <input type="checkbox" id="checkbox-2">
    <span class="checkbox-indicator size-s"></span>
    <span class="size-m">
      Check this
    </span>
  </label>
</div>

#### .size-m

<div class="push-down">
  <label for="checkbox-3" class="checkbox">
    <input type="checkbox" id="checkbox-3">
    <span class="checkbox-indicator size-m"></span>
    <span class="size-l">
      Check this
    </span>
  </label>
</div>

#### .size-l

<div class="push-down">
  <label for="checkbox-4" class="checkbox">
    <input type="checkbox" id="checkbox-4">
    <span class="checkbox-indicator size-l"></span>
    <span class="size-xl">
      Check this
    </span>
  </label>
</div>

#### .size-xl

<div class="push-down">
  <label for="checkbox-5" class="checkbox">
    <input type="checkbox" id="checkbox-5">
    <span class="checkbox-indicator size-xl"></span>
    <span class="size-2xl">
      Check this
    </span>
  </label>
</div>

```html
<div class="push-down">
  <label for="checkbox-1" class="checkbox">
    <input type="checkbox" id="checkbox-1">
    <span class="checkbox-indicator size-xs"></span>
    <span class="size-s">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="checkbox-2" class="checkbox">
    <input type="checkbox" id="checkbox-2">
    <span class="checkbox-indicator size-s"></span>
    <span class="size-m">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="checkbox-3" class="checkbox">
    <input type="checkbox" id="checkbox-3">
    <span class="checkbox-indicator size-m"></span>
    <span class="size-l">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="checkbox-4" class="checkbox">
    <input type="checkbox" id="checkbox-4">
    <span class="checkbox-indicator size-l"></span>
    <span class="size-xl">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="checkbox-5" class="checkbox">
    <input type="checkbox" id="checkbox-5">
    <span class="checkbox-indicator size-xl"></span>
    <span class="size-2xl">
      Check this
    </span>
  </label>
</div>
```

<br>

### Switch

A switch is a variation to the regular checkbox look, but is based on the same structure.

<div class="push-down">
  <label for="sample-switch" class="checkbox">
    <input type="checkbox" id="sample-switch">
    <span class="switch-indicator"></span>
    <span class="size-l">
      Check this!
    </span>
  </label>
</div>

```html
<label for="sample-switch" class="checkbox">
  <input type="checkbox" id="sample-switch">
  <span class="switch-indicator"></span>
  <span class="size-l">
    Switch this!
  </span>
</label>
```

<br>

### Disabled state

<div class="push-down">
  <label for="disabled-switch" class="checkbox">
    <input type="checkbox" id="disabled-switch" checked disabled>
    <span class="switch-indicator"></span>
    <span class="size-l subtle">
      Can't touch this.
    </span>
  </label>
</div>

```html
<label for="disabled-switch" class="checkbox">
  <input type="checkbox" id="disabled-switch" checked disabled>
  <span class="switch-indicator"></span>
  <span class="size-l subtle">
    Can't switch this.
  </span>
</label>
```

<br>

### Size control

#### .size-xs

<div class="push-down">
  <label for="switch-1" class="checkbox">
    <input type="checkbox" id="switch-1">
    <span class="switch-indicator size-xs"></span>
    <span class="size-s">
      Check this
    </span>
  </label>
</div>

#### .size-s

<div class="push-down">
  <label for="switch-2" class="checkbox">
    <input type="checkbox" id="switch-2">
    <span class="switch-indicator size-s"></span>
    <span class="size-m">
      Check this
    </span>
  </label>
</div>

#### .size-m

<div class="push-down">
  <label for="switch-3" class="checkbox">
    <input type="checkbox" id="switch-3">
    <span class="switch-indicator size-m"></span>
    <span class="size-l">
      Check this
    </span>
  </label>
</div>

#### .size-l

<div class="push-down">
  <label for="switch-4" class="checkbox">
    <input type="checkbox" id="switch-4">
    <span class="switch-indicator size-l"></span>
    <span class="size-xl">
      Check this
    </span>
  </label>
</div>

#### .size-xl

<div class="push-down">
  <label for="switch-5" class="checkbox">
    <input type="checkbox" id="switch-5">
    <span class="switch-indicator size-xl"></span>
    <span class="size-2xl">
      Check this
    </span>
  </label>
</div>

```html
<div class="push-down">
  <label for="switch-1" class="checkbox">
    <input type="checkbox" id="switch-1">
    <span class="switch-indicator size-xs"></span>
    <span class="size-s">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="switch-2" class="checkbox">
    <input type="checkbox" id="switch-2">
    <span class="switch-indicator size-s"></span>
    <span class="size-m">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="switch-3" class="checkbox">
    <input type="checkbox" id="switch-3">
    <span class="switch-indicator size-m"></span>
    <span class="size-l">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="switch-4" class="checkbox">
    <input type="checkbox" id="switch-4">
    <span class="switch-indicator size-l"></span>
    <span class="size-xl">
      Check this
    </span>
  </label>
</div>

<div class="push-down">
  <label for="switch-5" class="checkbox">
    <input type="checkbox" id="switch-5">
    <span class="switch-indicator size-xl"></span>
    <span class="size-2xl">
      Check this
    </span>
  </label>
</div>
```

<br>

## Radio

<div class="push-down">
  <label for="radio-1" class="radio push-right-l">
    <input type="radio" name="radios" value="1" id="radio-1" checked>
    <span class="radio-indicator"></span>
    <span class="size-l">
      Value 1
    </span>
  </label>
  <label for="radio-2" class="radio push-right-l">
    <input type="radio" name="radios" value="2" id="radio-2">
    <span class="radio-indicator"></span>
    <span class="size-l">
      Value 2
    </span>
  </label>
  <label for="radio-3" class="radio push-right-l">
    <input type="radio" name="radios" value="3" id="radio-3">
    <span class="radio-indicator"></span>
    <span class="size-l">
      Value 3
    </span>
  </label>
</div>

```html
<label for="radio-1" class="radio push-right-l">
  <input type="radio" name="radios" value="1" id="radio-1" checked>
  <span class="radio-indicator"></span>
  <span class="size-l">
    Value 1
  </span>
</label>

<label for="radio-2" class="radio push-right-l">
  <input type="radio" name="radios" value="2" id="radio-2">
  <span class="radio-indicator"></span>
  <span class="size-l">
    Value 2
  </span>
</label>

<label for="radio-3" class="radio push-right-l">
  <input type="radio" name="radios" value="3" id="radio-3">
  <span class="radio-indicator"></span>
  <span class="size-l">
    Value 3
  </span>
</label>
```

<br>

### Disabled state

<div class="push-down">
  <label for="disabled-radio-1" class="radio push-right-l">
    <input type="radio" name="disabled-radio" value="1" id="disabled-radio-1" disabled checked>
    <span class="radio-indicator"></span>
    <span class="size-l subtle">
      Value 1
    </span>
  </label>
  <label for="disabled-radio-2" class="radio push-right-l">
    <input type="radio" name="disabled-radio" value="2" id="disabled-radio-2" disabled>
    <span class="radio-indicator"></span>
    <span class="size-l subtle">
      Value 2
    </span>
  </label>
</div>

```html
<label for="disabled-radio-1" class="radio push-right-l">
  <input type="radio" name="radios" value="1" id="disabled-radio-1" checked disabled>
  <span class="radio-indicator"></span>
  <span class="size-l subtle">
    Value 1
  </span>
</label>
<label for="disabled-radio-2" class="radio push-right-l">
  <input type="radio" name="radios" value="2" id="disabled-radio-2" checked disabled>
  <span class="radio-indicator"></span>
  <span class="size-l subtle">
    Value 2
  </span>
</label>
```

<br>

### Size control

The checkbox size can be adjusted by adding the desired `.size-x` class to the `.checkbox-indicator` element.
Keep in mind that the text size of the label is not affected by this; You'll have to adjust it via its own
`.size` class.

#### .size-xs

<div class="push-down">
  <label for="radio-xs" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="1" id="radio-xs" checked>
    <span class="radio-indicator size-xs"></span>
    <span class="size-s">
      Value 1
    </span>
  </label>
</div>

#### .size-s

<div class="push-down">
  <label for="radio-s" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="2" id="radio-s">
    <span class="radio-indicator size-s"></span>
    <span class="size-m">
      Value 2
    </span>
  </label>
</div>

#### .size-m

<div class="push-down">
  <label for="radio-m" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="3" id="radio-m">
    <span class="radio-indicator size-m"></span>
    <span class="size-l">
      Value 3
    </span>
  </label>
</div>

#### .size-l

<div class="push-down">
  <label for="radio-l" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="4" id="radio-l">
    <span class="radio-indicator size-l"></span>
    <span class="size-xl">
      Value 4
    </span>
  </label>
</div>

#### .size-xl

<div class="push-down">
  <label for="radio-xl" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="5" id="radio-xl">
    <span class="radio-indicator size-xl"></span>
    <span class="size-2xl">
      Value 5
    </span>
  </label>
</div>

```html
<div class="push-down">
  <label for="radio-xs" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="1" id="radio-xs" checked>
    <span class="radio-indicator size-xs"></span>
    <span class="size-s">
      Value 1
    </span>
  </label>
</div>

<div class="push-down">
  <label for="radio-s" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="2" id="radio-s">
    <span class="radio-indicator size-s"></span>
    <span class="size-m">
      Value 2
    </span>
  </label>
</div>

<div class="push-down">
  <label for="radio-m" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="3" id="radio-m">
    <span class="radio-indicator size-m"></span>
    <span class="size-l">
      Value 3
    </span>
  </label>
</div>

<div class="push-down">
  <label for="radio-l" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="4" id="radio-l">
    <span class="radio-indicator size-l"></span>
    <span class="size-xl">
      Value 4
    </span>
  </label>
</div>

<div class="push-down">
  <label for="radio-xl" class="radio push-right-l">
    <input type="radio" name="radio-sizes" value="5" id="radio-xl">
    <span class="radio-indicator size-xl"></span>
    <span class="size-2xl">
      Value 5
    </span>
  </label>
</div>
```

<br>

### Inverted variants

If you wish to use input elements on a dark background, it's recommended to apply the `.inverted` class to
the parent container:

<div class="dark-bg inverted pad rounded push-down-xl">
  <div class="push-down">
    <label for="text-input-inverted" class="muted">Input label</label>
    <input placeholder="Text input..." id="text-input-inverted">
  </div>
  <div class="push-down">
    <label for="text-input-disabled-inverted" class="muted">Disabled input label</label>
    <input placeholder="Can't type here..." id="text-input-disabled-inverted" disabled>
  </div>
  <hr>
  <div class="push-down">
    <label class="muted">Textarea label</label>
    <textarea placeholder="Type here..."></textarea>
  </div>
  <div>
    <label class="muted">Disabled textarea label</label>
    <textarea placeholder="Can't type here..." disabled></textarea>
  </div>
  <hr>
  <label class="muted">Input with icon</label>
  <div class="input-icon">
    <input placeholder="Text input...">
    <div>
      <div class="tico-l">
          <i class="tico-edit">
            <span></span>
          </i>
        </div>
    </div>
  </div>
  <hr>
  <label class="muted">Select input</label>
  <select>
    <option>
      -- Select an option --
    </option>
    <option>
      Option 1
    </option>
    <option>
      Option 2
    </option>
    <option>
      Option 3
    </option>
  </select>
  <hr>
  <div class="push-down">
    <label for="sample-checkbox-inverted" class="checkbox">
      <input type="checkbox" id="sample-checkbox-inverted">
      <span class="checkbox-indicator"></span>
      <span class="size-l muted">
        Checkbox
      </span>
    </label>
  </div>
  <div class="push-down">
    <label for="disabled-checkbox-inverted" class="checkbox">
      <input type="checkbox" id="disabled-checkbox-inverted" checked disabled>
      <span class="checkbox-indicator"></span>
      <span class="size-l subtle">
        Disabled checkbox
      </span>
    </label>
  </div>
  <hr>
  <div class="push-down">
    <label for="sample-switch-inverted" class="checkbox">
      <input type="checkbox" id="sample-switch-inverted">
      <span class="switch-indicator"></span>
      <span class="size-l muted">
        Switch
      </span>
    </label>
  </div>
  <div class="push-down">
    <label for="disabled-switch-inverted" class="checkbox">
      <input type="checkbox" id="disabled-switch-inverted" checked disabled>
      <span class="switch-indicator"></span>
      <span class="size-l subtle">
        Disabled switch
      </span>
    </label>
  </div>
  <hr>
  <div class="push-down">
    <label for="radio-1-inverted" class="radio push-right-l">
      <input type="radio" name="radios-inverted" value="1" id="radio-1-inverted" checked>
      <span class="radio-indicator"></span>
      <span class="size-l muted">
        Value 1
      </span>
    </label>
    <label for="radio-2-inverted" class="radio push-right-l">
      <input type="radio" name="radios-inverted" value="2" id="radio-2-inverted">
      <span class="radio-indicator"></span>
      <span class="size-l muted">
        Value 2
      </span>
    </label>
    <label for="radio-3-inverted" class="radio push-right-l">
      <input type="radio" name="radios-inverted" value="3" id="radio-3-inverted">
      <span class="radio-indicator"></span>
      <span class="size-l muted">
        Value 3
      </span>
    </label>
  </div>
  <div>
    <label for="disabled-radio-1-inverted" class="radio push-right-l">
      <input type="radio" name="disabled-radio-inverted" value="1" id="disabled-radio-1-inverted" disabled checked>
      <span class="radio-indicator"></span>
      <span class="size-l subtle">
        Value 1
      </span>
    </label>
    <label for="disabled-radio-2-inverted" class="radio push-right-l">
      <input type="radio" name="disabled-radio-inverted" value="2" id="disabled-radio-2-inverted" disabled>
      <span class="radio-indicator"></span>
      <span class="size-l subtle">
        Value 2
      </span>
    </label>
  </div>
</div>
