# Sass Type Aid

scss mixins to help with typographic rhythms etc.

# Installation

`bower install --save-dev https://github.com/jsit/sass-type-aid.git`

# Usage


## Font size

When setting font sizes, use the `rhythm-font-size` mixin, passing a unitless parameter that will increase the font size that number of steps on the modular scale. For instance:

**Input**
```scss
h4 {
  @include rhythm-font-size(2);
}
```

**Output**
```css
h4 {
  font-size: 23.04px;
  font-size: 1.44rem;
  line-height: 1.80556;
  margin: 0;
}
```

# Dependencies

[Bourbon](https://bourbon.io)
