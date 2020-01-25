const { pathToRegexp, match } = require("path-to-regexp");

module.exports = class RoutingEngine {
  constructor(options) {
    this.options = options || {};
  }

  createRegex(route) {
    this.route = route;
    this.keys = [];

    let regex = pathToRegexp(route, this.keys, this.options);
    this.regex = regex;

    return regex;
  }

  match(path) {
    let match = this.regex.exec(path);
    return match ? true : false;
  }

  createParams(path) {
    const matchFunc = match(this.route, { decode: decodeURIComponent });
    return matchFunc(path).params;
  }
};
