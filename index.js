const { pathToRegexp, match } = require("path-to-regexp");

/** Convert standard route to regexp and compile list of keys.
 *
 * @param {String} [path] Base routing path to build regexp for.
 * @param {Array} [keys] Base list for keys to pass to path-to-regexp.
 * @param {Object} [options] Options to apply to path-to-regexp.
 *
 * @return {Object} Object containing created regex and route keys array.
 */
module.exports.toRegex = function(path, keys = [], options) {
  let regex = pathToRegexp(path, keys, options);
  return {
    regex,
    keys
  };
};

/**
 * Create parameters from route data.
 *
 * @param {Object} [data] Object containing data which can be used to create route parameters.
 * @param {String} [data.path] Path requested.
 * @param {String} [data.route] Original route.
 *
 * @return {Object} Object containing all route params.
 */
module.exports.createParams = function(data) {
  let { path, route } = data;
  const matchFunc = match(route, { decode: decodeURIComponent });
  return matchFunc(path).params;
};
