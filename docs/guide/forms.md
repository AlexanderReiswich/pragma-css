# Form elements

Buttons are among the most common UI elements, so great care has been put into making them easy to use and
very extensible for all kinds of purposes.

## Text inputs

All input elements are styled by default (based on their corresponding stylus variables), so you don't have
to apply any classes to them&mdash;unless you want to customize individual elements.

<div>
  <label for="text_input">Input label</label>
  <input placeholder="Text input..." id="text_input">
</div>

```html
<label for="text_input">Input label</label>
<input placeholder="Text input..." id="text_input">
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
  <input placeholder="Text input..." class="v-xs">
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
  <input placeholder="Text input..." class="v-xs">
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

<textarea></textarea>

```html
<textarea></textarea>
```

## Checkbox

<div class="push-down">
  <label for="checkbox-1" class="checkbox">
    <input type="checkbox" id="checkbox-1">
    <span class="checkbox-indicator"></span>
    <span class="size-l">
      Check this
    </span>
  </label>
</div>

```html
<label for="checkbox-1" class="checkbox">
  <input type="checkbox" id="checkbox-1">
  <span class="checkbox-indicator"></span>
  <span class="size-l">
    Check this
  </span>
</label>
```

<br>

## Radio

<div class="push-down">
  <label for="radio-1" class="radio push-right-l">
    <input type="radio" name="radios" value="1" id="radio-1" selected>
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
  <input type="radio" name="radios" value="1" id="radio-1">
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


