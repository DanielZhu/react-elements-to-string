# react-elements-to-string
[![NPM version][npm-version-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![License][license-image]][npm-url]

## Features

- Implement the basic conversion logic which can convert react elements written in JSX into **PURE String**
- Add option `useFuncContent`, toggle whether display the function content of only its name
  - `true`: display function content
  - `false`: display only function name
- Support using it as a normal **REACT Component**

## How to use

`npm install react-elements-to-string --save`

```js
import ReactElementToString from 'react-elements-to-string'

// In render
<ReactElementObjectToString reactElements={<div>hello world</div>} useFuncContent={false} />
```

Lisence @MIT

Copyright to @2012-2017 [Staydan.com](http://staydan.com)


[license-image]: https://img.shields.io/npm/l/react-elements-to-string.svg?maxAge=2592000&style=flat-square
[downloads-image]: https://img.shields.io/npm/dm/react-elements-to-string.svg?maxAge=2592000&style=flat-square
[npm-version-image]: http://img.shields.io/npm/v/react-elements-to-string.svg?maxAge=2592000&style=flat-square
[npm-url]: https://www.npmjs.com/package/react-elements-to-string
