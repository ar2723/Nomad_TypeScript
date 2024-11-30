// @ts-nocheck
/**
 * Gets the first element of `array`.
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 */
export function head(array) {
    return (array && array.length) ? array[0] : undefined;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 * @param {Object} object The object to query.
 * @param {Array | string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
export function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Checks if `value` is classified as a boolean primitive or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 */
export function isBoolean(value) {
    return value === true || value === false || 
        (isObjectLike(value) && baseGetTag(value) == boolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function toString(value) {
    return value == null ? '' : baseToString(value);
}

/**
 * Splits `string` by `separator`.
 * @param {string} [string=''] The string to split.
 * @param {RegExp | string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 */
export function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
    }
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
        return [];
    }
    string = toString(string);
    if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
        )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
        return castSlice(stringToArray(string), 0, limit);
        }
    }
    return string.split(separator, limit);
}

/**
 * Checks if `path` exists on `object`.
 * @param {Object} object The object to query.
 * @param {Array | string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
export function hasPath(object, path, hasFunc) {
    path = castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
        break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
}

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 * @param {Array | Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
export function filter(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    return func(collection, getIteratee(predicate, 3));
}

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 * @param {Array | Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
export function every(collection, predicate, guard) {
    var func = isArray(collection) ? arrayEvery : baseEvery;
    if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
    }
    return func(collection, getIteratee(predicate, 3));
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 * @param {Array | Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
export function map(collection, iteratee) {
    var func = isArray(collection) ? arrayMap : baseMap;
    return func(collection, getIteratee(iteratee, 3));
}