# contrast-ratio

> Calculate a [WCAG contrast ratio](https://www.w3.org/TR/WCAG20-TECHS/G18.html) based on a foreground and background color

Note: This module only accepts rgb values for simplicity. If you're trying to obtain a ratio for hex,
consider using a helper function/module to first convert your hex strings to an rgb tuple.

## Install

```
$ npm i -S contrast-ratio
```

## Usage

```js
const ratio = require("contrast-ratio");

ratio([255, 255, 255], [0, 0, 0]);
// -> 21

ratio([0, 0, 255], [255, 255, 255]);
// -> 8.59
```

## License

MIT © [Vu Tran](https://github.com/vutran)
