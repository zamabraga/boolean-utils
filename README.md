# boolean-utils

<!-- ## Installation

```bash
npm install boolean-utils --save

or

yarn add boolean-utils
``` -->

## Usage

```js
const booleanUtils = require('./../src')

booleanUtils.isTrue(true) // output true
booleanUtils.isTrue('true') // output true
booleanUtils.isTrue('yes') // output true
booleanUtils.isTrue(false) // output false
booleanUtils.isTrue('false') // output false
booleanUtils.isTrue('no') // output false
```
