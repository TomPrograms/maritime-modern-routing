# Modern Maritime Routing

[![Maritime NPM Version](https://img.shields.io/npm/v/maritime-modern-routing?color=blue)](https://npmjs.org/package/maritime-standard-routing)
[![Maritime License Badge](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
![powered by javascript badge](https://img.shields.io/badge/powered%20by-javascript-red)
[![Maritime Development Badge](https://img.shields.io/badge/engine%20for-maritime-brightgreen)](https://github.com/t0mgithub/maritime)

Routing engine to be used with Maritime to enable modern path-to-regexp style routing. Maritime has been designed to allow different routing engines to be used to compile routes to regexp, to allow users to choose and change the syntax of the routing. A routing engine must contain `toRegex()` to convert a standard path to a regexp and a list of keys and `createParams()` to create an object of URL parameters from a requested route and the list of keys.

### Usage

#### toRegex()

toRegex is used to convert a standard route, using up-to-date path-to-regexp style such as `/:username` to a regexp, to be matched in the Maritime router.

```js
const { toRegex } = require("maritime-modern-routing");
toRegex("/:username", []);
// returns:
// {
//   regex: /^(?:\/([^\/#\?]+?))[\/#\?]?$/i,
// keys: [
//   {
//     name: 'username',
//     prefix: '/',
//     suffix: '',
//     pattern: '[^\\/#\\?]+?',
//     modifier: ''
//   }
// ]
// }
```

#### createParams()

createParams is used to create a list of URL parameters based on the original route and the requested route.

```js
const { createParams } = require("maritime-modern-routing");
createParams({ path: "/hello", route: "/:username" });
// returns: { username: 'hello' }
```

## License

[MIT](LICENSE)
