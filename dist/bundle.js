(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// these aren't really private, but nor are they really useful to document
/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);
  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }
  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */
var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);
  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }
  return InvalidDateTimeError;
}(LuxonError);

/**
 * @private
 */
var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);
  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }
  return InvalidIntervalError;
}(LuxonError);

/**
 * @private
 */
var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);
  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }
  return InvalidDurationError;
}(LuxonError);

/**
 * @private
 */
var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);
  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }
  return ConflictingSpecificationError;
}(LuxonError);

/**
 * @private
 */
var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);
  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }
  return InvalidUnitError;
}(LuxonError);

/**
 * @private
 */
var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);
  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }
  return InvalidArgumentError;
}(LuxonError);

/**
 * @private
 */
var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);
  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }
  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */

var n = "numeric",
  s = "short",
  l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/**
 * @interface
 */
var Zone = /*#__PURE__*/function () {
  function Zone() {}
  var _proto = Zone.prototype;
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */;
  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */;
  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */;
  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */;
  _createClass(Zone, [{
    key: "type",
    get:
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    function get() {
      throw new ZoneIsAbstractError();
    }

    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "ianaName",
    get: function get() {
      return this.name;
    }

    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
  }, {
    key: "isUniversal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);
  return Zone;
}();

var singleton$1 = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
var SystemZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(SystemZone, _Zone);
  function SystemZone() {
    return _Zone.apply(this, arguments) || this;
  }
  var _proto = SystemZone.prototype;
  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
      locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }

  /** @override **/;
  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override **/;
  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/;
  _proto.equals = function equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/;
  _createClass(SystemZone, [{
    key: "type",
    get: /** @override **/
    function get() {
      return "system";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    /** @override **/
  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",
    get:
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    function get() {
      if (singleton$1 === null) {
        singleton$1 = new SystemZone();
      }
      return singleton$1;
    }
  }]);
  return SystemZone;
}(Zone);

var dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    });
  }
  return dtfCache[zone];
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    fMonth = parsed[1],
    fDay = parsed[2],
    fYear = parsed[3],
    fadOrBc = parsed[4],
    fHour = parsed[5],
    fMinute = parsed[6],
    fSecond = parsed[7];
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date);
  var filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
      type = _formatted$i.type,
      value = _formatted$i.value;
    var pos = typeToPos[type];
    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */;
  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */;
  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */;
  IANAZone.isValidZone = function isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  };
  function IANAZone(name) {
    var _this;
    _this = _Zone.call(this) || this;
    /** @private **/
    _this.zoneName = name;
    /** @private **/
    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }

  /** @override **/
  var _proto = IANAZone.prototype;
  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
      locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }

  /** @override **/;
  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override **/;
  _proto.offset = function offset(ts) {
    var date = new Date(ts);
    if (isNaN(date)) return NaN;
    var dtf = makeDTF(this.name);
    var _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
      year = _ref2[0],
      month = _ref2[1],
      day = _ref2[2],
      adOrBc = _ref2[3],
      hour = _ref2[4],
      minute = _ref2[5],
      second = _ref2[6];
    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    var adjustedHour = hour === 24 ? 0 : hour;
    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override **/;
  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }

  /** @override **/;
  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }

    /** @override **/
  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);
  return IANAZone;
}(Zone);

var _excluded = ["base"],
  _excluded2 = ["padTo", "floor"];

// todo - remap caching

var intlLFCache = {};
function getCachedLF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var key = JSON.stringify([locString, opts]);
  var dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
var intlDTCache = {};
function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
var intlNumCache = {};
function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
var intlRelCache = {};
function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var _opts = opts;
    _opts.base;
    var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded); // exclude `base` from the options
  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
var sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  // private subtags and unicode subtags have ordering requirements,
  // and we're not properly parsing this, so just strip out the
  // private ones if they exist.
  var xIndex = localeStr.indexOf("-x-");
  if (xIndex !== -1) {
    localeStr = localeStr.substring(0, xIndex);
  }
  var uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var selectedStr;
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
      selectedStr = localeStr;
    } catch (e) {
      var smaller = localeStr.substring(0, uIndex);
      options = getCachedDTF(smaller).resolvedOptions();
      selectedStr = smaller;
    }
    var _options = options,
      numberingSystem = _options.numberingSystem,
      calendar = _options.calendar;
    return [selectedStr, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    if (!localeStr.includes("-u-")) {
      localeStr += "-u";
    }
    if (outputCalendar) {
      localeStr += "-ca-" + outputCalendar;
    }
    if (numberingSystem) {
      localeStr += "-nu-" + numberingSystem;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  var ms = [];
  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  var ms = [];
  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}

/**
 * @private
 */
var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    opts.padTo;
      opts.floor;
      var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2);
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      var intlOpts = _extends({
        useGrouping: false
      }, opts);
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  var _proto = PolyNumberFormatter.prototype;
  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
      return padStart(_fixed, this.padTo);
    }
  };
  return PolyNumberFormatter;
}();
/**
 * @private
 */
var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.originalZone = undefined;
    var z = undefined;
    if (this.opts.timeZone) {
      // Don't apply any workarounds if a timeZone is explicitly provided in opts
      this.dt = dt;
    } else if (dt.zone.type === "fixed") {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      var gmtOffset = -1 * (dt.offset / 60);
      var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
        // we manually apply the offset and substitute the zone as needed.
        z = "UTC";
        this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({
          minutes: dt.offset
        });
        this.originalZone = dt.zone;
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else if (dt.zone.type === "iana") {
      this.dt = dt;
      z = dt.zone.name;
    } else {
      // Custom zones can have any offset / offsetName so we just manually
      // apply the offset and substitute the zone as needed.
      z = "UTC";
      this.dt = dt.setZone("UTC").plus({
        minutes: dt.offset
      });
      this.originalZone = dt.zone;
    }
    var intlOpts = _extends({}, this.opts);
    intlOpts.timeZone = intlOpts.timeZone || z;
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  var _proto2 = PolyDateFormatter.prototype;
  _proto2.format = function format() {
    if (this.originalZone) {
      // If we have to substitute in the actual zone name, we have to use
      // formatToParts so that the timezone can be replaced.
      return this.formatToParts().map(function (_ref) {
        var value = _ref.value;
        return value;
      }).join("");
    }
    return this.dtf.format(this.dt.toJSDate());
  };
  _proto2.formatToParts = function formatToParts() {
    var _this = this;
    var parts = this.dtf.formatToParts(this.dt.toJSDate());
    if (this.originalZone) {
      return parts.map(function (part) {
        if (part.type === "timeZoneName") {
          var offsetName = _this.originalZone.offsetName(_this.dt.ts, {
            locale: _this.dt.locale,
            format: _this.opts.timeZoneName
          });
          return _extends({}, part, {
            value: offsetName
          });
        } else {
          return part;
        }
      });
    }
    return parts;
  };
  _proto2.resolvedOptions = function resolvedOptions() {
    return this.dtf.resolvedOptions();
  };
  return PolyDateFormatter;
}();
/**
 * @private
 */
var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = _extends({
      style: "long"
    }, opts);
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  var _proto3 = PolyRelFormatter.prototype;
  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };
  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };
  return PolyRelFormatter;
}();
/**
 * @private
 */
var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };
  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }
    var specifiedLocale = locale || Settings.defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };
  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };
  Locale.fromObject = function fromObject(_temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
      locale = _ref2.locale,
      numberingSystem = _ref2.numberingSystem,
      outputCalendar = _ref2.outputCalendar;
    return Locale.create(locale, numberingSystem, outputCalendar);
  };
  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
      parsedLocale = _parseLocaleString[0],
      parsedNumberingSystem = _parseLocaleString[1],
      parsedOutputCalendar = _parseLocaleString[2];
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  var _proto4 = Locale.prototype;
  _proto4.listingMode = function listingMode() {
    var isActuallyEn = this.isEnglish();
    var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  };
  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };
  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }
    return this.clone(_extends({}, alts, {
      defaultToEN: true
    }));
  };
  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }
    return this.clone(_extends({}, alts, {
      defaultToEN: false
    }));
  };
  _proto4.months = function months$1(length, format, defaultOK) {
    var _this2 = this;
    if (format === void 0) {
      format = false;
    }
    if (defaultOK === void 0) {
      defaultOK = true;
    }
    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
          month: length,
          day: "numeric"
        } : {
          month: length
        },
        formatStr = format ? "format" : "standalone";
      if (!_this2.monthsCache[formatStr][length]) {
        _this2.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this2.extract(dt, intl, "month");
        });
      }
      return _this2.monthsCache[formatStr][length];
    });
  };
  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this3 = this;
    if (format === void 0) {
      format = false;
    }
    if (defaultOK === void 0) {
      defaultOK = true;
    }
    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
          weekday: length,
          year: "numeric",
          month: "long",
          day: "numeric"
        } : {
          weekday: length
        },
        formatStr = format ? "format" : "standalone";
      if (!_this3.weekdaysCache[formatStr][length]) {
        _this3.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this3.extract(dt, intl, "weekday");
        });
      }
      return _this3.weekdaysCache[formatStr][length];
    });
  };
  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this4 = this;
    if (defaultOK === void 0) {
      defaultOK = true;
    }
    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this4.meridiemCache) {
        var intl = {
          hour: "numeric",
          hourCycle: "h12"
        };
        _this4.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this4.extract(dt, intl, "dayperiod");
        });
      }
      return _this4.meridiemCache;
    });
  };
  _proto4.eras = function eras$1(length, defaultOK) {
    var _this5 = this;
    if (defaultOK === void 0) {
      defaultOK = true;
    }
    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!_this5.eraCache[length]) {
        _this5.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this5.extract(dt, intl, "era");
        });
      }
      return _this5.eraCache[length];
    });
  };
  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find(function (m) {
        return m.type.toLowerCase() === field;
      });
    return matching ? matching.value : null;
  };
  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };
  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };
  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };
  _proto4.listFormatter = function listFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }
    return getCachedLF(this.intl, opts);
  };
  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };
  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };
  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }
      return this.fastNumbersCached;
    }
  }]);
  return Locale;
}();

var singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */;
  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  };
  function FixedOffsetZone(offset) {
    var _this;
    _this = _Zone.call(this) || this;
    /** @private **/
    _this.fixed = offset;
    return _this;
  }

  /** @override **/
  var _proto = FixedOffsetZone.prototype;
  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }

  /** @override **/;
  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }

  /** @override **/;
  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }

  /** @override **/;
  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }

  /** @override **/;
  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "ianaName",
    get: function get() {
      if (this.fixed === 0) {
        return "Etc/UTC";
      } else {
        return "Etc/GMT" + formatOffset(-this.fixed, "narrow");
      }
    }
  }, {
    key: "isUniversal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "utcInstance",
    get:
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    function get() {
      if (singleton === null) {
        singleton = new FixedOffsetZone(0);
      }
      return singleton;
    }
  }]);
  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);
  function InvalidZone(zoneName) {
    var _this;
    _this = _Zone.call(this) || this;
    /**  @private */
    _this.zoneName = zoneName;
    return _this;
  }

  /** @override **/
  var _proto = InvalidZone.prototype;
  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }

  /** @override **/;
  _proto.formatOffset = function formatOffset() {
    return "";
  }

  /** @override **/;
  _proto.offset = function offset() {
    return NaN;
  }

  /** @override **/;
  _proto.equals = function equals() {
    return false;
  }

  /** @override **/;
  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }

    /** @override **/
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }

    /** @override **/
  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);
  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone;else if (lowered === "local" || lowered === "system") return SystemZone.instance;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
    return Date.now();
  },
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  twoDigitCutoffYear = 60,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
var Settings = /*#__PURE__*/function () {
  function Settings() {}
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };
  _createClass(Settings, null, [{
    key: "now",
    get:
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    function get() {
      return now;
    }

    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */,
    set: function set(n) {
      now = n;
    }

    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */
  }, {
    key: "defaultZone",
    get:
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    function get() {
      return normalizeZone(defaultZone, SystemZone.instance);
    }

    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(zone) {
      defaultZone = zone;
    }
  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }

    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(locale) {
      defaultLocale = locale;
    }

    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }

    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }

    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }

    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }

    /**
     * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
     * @type {number}
     */
  }, {
    key: "twoDigitCutoffYear",
    get: function get() {
      return twoDigitCutoffYear;
    }

    /**
     * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
     * @type {number}
     * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
     * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
     * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
     * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
     */,
    set: function set(cutoffYear) {
      twoDigitCutoffYear = cutoffYear % 100;
    }

    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }

    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);
  return Settings;
}();

/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce(function (best, next) {
    var pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }
  var isNeg = input < 0;
  var padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }
  var factor = Math.pow(10, digits),
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
    // so if obj.year is in 99, but obj.day makes it roll over into year 100,
    // the calculations done by Date.UTC are using year 2000 - which is incorrect
    d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
  }
  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > Settings.twoDigitCutoffYear ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }
  var date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  var modified = _extends({
    timeZoneName: offsetFormat
  }, intlOpts);
  var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
    return m.type.toLowerCase() === "timezonename";
  });
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  var offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  var normalized = {};
  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);
    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);
    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}

/**
 * @private
 */

var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [].concat(monthsNarrow);
    case "short":
      return [].concat(monthsShort);
    case "long":
      return [].concat(monthsLong);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [].concat(weekdaysNarrow);
    case "short":
      return [].concat(weekdaysShort);
    case "long":
      return [].concat(weekdaysLong);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [].concat(erasNarrow);
    case "short":
      return [].concat(erasShort);
    case "long":
      return [].concat(erasLong);
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }
  if (narrow === void 0) {
    narrow = false;
  }
  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];
      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];
      case 0:
        return isDay ? "today" : "this " + units[unit][0];
    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}

function stringifyTokens(splits, tokenToString) {
  var s = "";
  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}
var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};

/**
 * @private
 */
var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }
    return new Formatter(locale, opts);
  };
  Formatter.parseFormat = function parseFormat(fmt) {
    // white-space is always considered a literal in user-provided formats
    // the " " token has a special meaning (see unitForToken)

    var current = null,
      currentFull = "",
      bracketed = false;
    var splits = [];
    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed || /^\s+$/.test(currentFull),
            val: currentFull
          });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: /^\s+$/.test(currentFull),
            val: currentFull
          });
        }
        currentFull = c;
        current = c;
      }
    }
    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed || /^\s+$/.test(currentFull),
        val: currentFull
      });
    }
    return splits;
  };
  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };
  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  var _proto = Formatter.prototype;
  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };
  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };
  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.formatToParts();
  };
  _proto.formatInterval = function formatInterval(interval, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var df = this.loc.dtFormatter(interval.start, _extends({}, this.opts, opts));
    return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
  };
  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.resolvedOptions();
  };
  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }
    var opts = _extends({}, this.opts);
    if (p > 0) {
      opts.padTo = p;
    }
    return this.loc.numberFormatter(opts).format(n);
  };
  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;
    var knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = function string(opts, extract) {
        return _this.loc.extract(dt, opts, extract);
      },
      formatOffset = function formatOffset(opts) {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }
        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = function meridiem() {
        return knownEnglish ? meridiemForDateTime(dt) : string({
          hour: "numeric",
          hourCycle: "h12"
        }, "dayperiod");
      },
      month = function month(length, standalone) {
        return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
          month: length
        } : {
          month: length,
          day: "numeric"
        }, "month");
      },
      weekday = function weekday(length, standalone) {
        return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
          weekday: length
        } : {
          weekday: length,
          month: "long",
          day: "numeric"
        }, "weekday");
      },
      maybeMacro = function maybeMacro(token) {
        var formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return _this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = function era(length) {
        return knownEnglish ? eraForDateTime(dt, length) : string({
          era: length
        }, "era");
      },
      tokenToString = function tokenToString(token) {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return _this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return _this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return _this.num(dt.second);
          case "ss":
            return _this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return _this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return _this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return _this.num(dt.minute);
          case "mm":
            return _this.num(dt.minute, 2);
          // hours
          case "h":
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return _this.num(dt.hour);
          case "HH":
            return _this.num(dt.hour, 2);
          // offset
          case "Z":
            // like +6
            return formatOffset({
              format: "narrow",
              allowZ: _this.opts.allowZ
            });
          case "ZZ":
            // like +06:00
            return formatOffset({
              format: "short",
              allowZ: _this.opts.allowZ
            });
          case "ZZZ":
            // like +0600
            return formatOffset({
              format: "techie",
              allowZ: _this.opts.allowZ
            });
          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, {
              format: "short",
              locale: _this.loc.locale
            });
          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, {
              format: "long",
              locale: _this.loc.locale
            });
          // zone
          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({
              day: "numeric"
            }, "day") : _this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({
              day: "2-digit"
            }, "day") : _this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            // like 1
            return _this.num(dt.weekday);
          case "ccc":
            // like 'Tues'
            return weekday("short", true);
          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);
          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            // like 1
            return _this.num(dt.weekday);
          case "EEE":
            // like 'Tues'
            return weekday("short", false);
          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);
          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone
          case "L":
            // like 1
            return useDateTimeFormatter ? string({
              month: "numeric",
              day: "numeric"
            }, "month") : _this.num(dt.month);
          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter ? string({
              month: "2-digit",
              day: "numeric"
            }, "month") : _this.num(dt.month, 2);
          case "LLL":
            // like Jan
            return month("short", true);
          case "LLLL":
            // like January
            return month("long", true);
          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format
          case "M":
            // like 1
            return useDateTimeFormatter ? string({
              month: "numeric"
            }, "month") : _this.num(dt.month);
          case "MM":
            // like 01
            return useDateTimeFormatter ? string({
              month: "2-digit"
            }, "month") : _this.num(dt.month, 2);
          case "MMM":
            // like Jan
            return month("short", false);
          case "MMMM":
            // like January
            return month("long", false);
          case "MMMMM":
            // like J
            return month("narrow", false);
          // years
          case "y":
            // like 2014
            return useDateTimeFormatter ? string({
              year: "numeric"
            }, "year") : _this.num(dt.year);
          case "yy":
            // like 14
            return useDateTimeFormatter ? string({
              year: "2-digit"
            }, "year") : _this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            // like 0012
            return useDateTimeFormatter ? string({
              year: "numeric"
            }, "year") : _this.num(dt.year, 4);
          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter ? string({
              year: "numeric"
            }, "year") : _this.num(dt.year, 6);
          // eras
          case "G":
            // like AD
            return era("short");
          case "GG":
            // like Anno Domini
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return _this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return _this.num(dt.weekYear, 4);
          case "W":
            return _this.num(dt.weekNumber);
          case "WW":
            return _this.num(dt.weekNumber, 2);
          case "o":
            return _this.num(dt.ordinal);
          case "ooo":
            return _this.num(dt.ordinal, 3);
          case "q":
            // like 1
            return _this.num(dt.quarter);
          case "qq":
            // like 01
            return _this.num(dt.quarter, 2);
          case "X":
            return _this.num(Math.floor(dt.ts / 1000));
          case "x":
            return _this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };
    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };
  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;
    var tokenToField = function tokenToField(token) {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      tokenToString = function tokenToString(lildur) {
        return function (token) {
          var mapped = tokenToField(token);
          if (mapped) {
            return _this2.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        };
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(function (found, _ref) {
        var literal = _ref.literal,
          val = _ref.val;
        return literal ? found : found.concat(val);
      }, []),
      collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
        return t;
      }));
    return stringifyTokens(tokens, tokenToString(collapsed));
  };
  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  var _proto = Invalid.prototype;
  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };
  return Invalid;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }
  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}
function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }
  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
        mergedZone = _ref[1],
        cursor = _ref[2];
      var _ex = ex(m, cursor),
        val = _ex[0],
        zone = _ex[1],
        next = _ex[2];
      return [_extends({}, mergedVals, val), zone || mergedZone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}
function parse(s) {
  if (s == null) {
    return [null, null];
  }
  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }
  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
      regex = _patterns$_i[0],
      extractor = _patterns$_i[1];
    var m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }
  return function (match, cursor) {
    var ret = {};
    var i;
    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoExtendedZone = "(?:" + offsetRegex.source + "?(?:\\[(" + ianaRegex.source + ")\\])?)?";
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + isoExtendedZone);
var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match, cursor) {
  var item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
    fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$");

// ISO duration parsing

var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match) {
  var s = match[0],
    yearStr = match[1],
    monthStr = match[2],
    weekStr = match[3],
    dayStr = match[4],
    hourStr = match[5],
    minuteStr = match[6],
    secondStr = match[7],
    millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";
  var negativeSeconds = secondStr && secondStr[0] === "-";
  var maybeNegate = function maybeNegate(num, force) {
    if (force === void 0) {
      force = false;
    }
    return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
  };
  return [{
    years: maybeNegate(parseFloating(yearStr)),
    months: maybeNegate(parseFloating(monthStr)),
    weeks: maybeNegate(parseFloating(weekStr)),
    days: maybeNegate(parseFloating(dayStr)),
    hours: maybeNegate(parseFloating(hourStr)),
    minutes: maybeNegate(parseFloating(minuteStr)),
    seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
    milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
  }];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}

// RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match) {
  var weekdayStr = match[1],
    dayStr = match[2],
    monthStr = match[3],
    yearStr = match[4],
    hourStr = match[5],
    minuteStr = match[6],
    secondStr = match[7],
    obsOffset = match[8],
    milOffset = match[9],
    offHourStr = match[10],
    offMinuteStr = match[11],
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset)];
}
function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}

// http date

var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
    dayStr = match[2],
    monthStr = match[3],
    yearStr = match[4],
    hourStr = match[5],
    minuteStr = match[6],
    secondStr = match[7],
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match) {
  var weekdayStr = match[1],
    monthStr = match[2],
    dayStr = match[3],
    hourStr = match[4],
    minuteStr = match[5],
    secondStr = match[6],
    yearStr = match[7],
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);

/*
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID$2 = "Invalid Duration";

// unit conversion constants
var lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000
    },
    hours: {
      minutes: 60,
      seconds: 60 * 60,
      milliseconds: 60 * 60 * 1000
    },
    minutes: {
      seconds: 60,
      milliseconds: 60 * 1000
    },
    seconds: {
      milliseconds: 1000
    }
  },
  casualMatrix = _extends({
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000
    }
  }, lowOrderMatrix),
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = _extends({
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: daysInYearAccurate * 24 / 4,
      minutes: daysInYearAccurate * 24 * 60 / 4,
      seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
    }
  }, lowOrderMatrix);

// units ordered by size
var orderedUnits$1 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits$1.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }
  // deep merge for vals
  var conf = {
    values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix
  };
  return new Duration(conf);
}
function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
  var newVals = {};
  for (var _i = 0, _Object$entries = Object.entries(vals); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    var matrix = accurate ? accurateMatrix : casualMatrix;
    if (config.matrix) {
      matrix = config.matrix;
    }

    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = matrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject({
      milliseconds: count
    }, opts);
  }

  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */;
  Duration.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix
    });
  }

  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */;
  Duration.fromDurationLike = function fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
    }
  }

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */;
  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
      parsed = _parseISODuration[0];
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }

  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */;
  Duration.fromISOTime = function fromISOTime(text, opts) {
    var _parseISOTimeOnly = parseISOTimeOnly(text),
      parsed = _parseISOTimeOnly[0];
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }

  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */;
  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }

  /**
   * @private
   */;
  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }

  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */;
  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */;
  var _proto = Duration.prototype;
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = _extends({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }

  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */;
  _proto.toHuman = function toHuman(opts) {
    var _this = this;
    if (opts === void 0) {
      opts = {};
    }
    var l = orderedUnits$1.map(function (unit) {
      var val = _this.values[unit];
      if (isUndefined(val)) {
        return null;
      }
      return _this.loc.numberFormatter(_extends({
        style: "unit",
        unitDisplay: "long"
      }, opts, {
        unit: unit.slice(0, -1)
      })).format(val);
    }).filter(function (n) {
      return n;
    });
    return this.loc.listFormatter(_extends({
      type: "conjunction",
      style: opts.listStyle || "narrow"
    }, opts)).format(l);
  }

  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */;
  _proto.toObject = function toObject() {
    if (!this.isValid) return {};
    return _extends({}, this.values);
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */;
  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */;
  _proto.toISOTime = function toISOTime(opts) {
    if (opts === void 0) {
      opts = {};
    }
    if (!this.isValid) return null;
    var millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;
    opts = _extends({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    var str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */;
  _proto.toJSON = function toJSON() {
    return this.toISO();
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */;
  _proto.toString = function toString() {
    return this.toISO();
  }

  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */;
  _proto.toMillis = function toMillis() {
    return this.as("milliseconds");
  }

  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */;
  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */;
  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration),
      result = {};
    for (var _i2 = 0, _orderedUnits = orderedUnits$1; _i2 < _orderedUnits.length; _i2++) {
      var k = _orderedUnits[_i2];
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }
    return clone$1(this, {
      values: result
    }, true);
  }

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */;
  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */;
  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};
    for (var _i3 = 0, _Object$keys = Object.keys(this.values); _i3 < _Object$keys.length; _i3++) {
      var k = _Object$keys[_i3];
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, {
      values: result
    }, true);
  }

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */;
  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */;
  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = _extends({}, this.values, normalizeObject(values, Duration.normalizeUnit));
    return clone$1(this, {
      values: mixed
    });
  }

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */;
  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      locale = _ref.locale,
      numberingSystem = _ref.numberingSystem,
      conversionAccuracy = _ref.conversionAccuracy,
      matrix = _ref.matrix;
    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    });
    var opts = {
      loc: loc,
      matrix: matrix,
      conversionAccuracy: conversionAccuracy
    };
    return clone$1(this, opts);
  }

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */;
  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */;
  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, {
      values: vals
    }, true);
  }

  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */;
  _proto.rescale = function rescale() {
    if (!this.isValid) return this;
    var vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone$1(this, {
      values: vals
    }, true);
  }

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */;
  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }
    if (!this.isValid) return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
      accumulated = {},
      vals = this.toObject();
    var lastUnit;
    for (var _i4 = 0, _orderedUnits2 = orderedUnits$1; _i4 < _orderedUnits2.length; _i4++) {
      var k = _orderedUnits2[_i4];
      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if (isNumber(vals[k])) {
          own += vals[k];
        }
        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (var down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone$1(this, {
      values: built
    }, true).normalize();
  }

  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */;
  _proto.shiftToAll = function shiftToAll() {
    if (!this.isValid) return this;
    return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
  }

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */;
  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};
    for (var _i5 = 0, _Object$keys2 = Object.keys(this.values); _i5 < _Object$keys2.length; _i5++) {
      var k = _Object$keys2[_i5];
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, {
      values: negated
    }, true);
  }

  /**
   * Get the years.
   * @type {number}
   */;
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }
    for (var _i6 = 0, _orderedUnits3 = orderedUnits$1; _i6 < _orderedUnits3.length; _i6++) {
      var u = _orderedUnits3[_i6];
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  };
  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }

    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }

    /**
     * Get the quarters.
     * @type {number}
     */
  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }

    /**
     * Get the months.
     * @type {number}
     */
  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }

    /**
     * Get the weeks
     * @type {number}
     */
  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }

    /**
     * Get the days.
     * @type {number}
     */
  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }

    /**
     * Get the hours.
     * @type {number}
     */
  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }

    /**
     * Get the minutes.
     * @type {number}
     */
  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }

    /**
     * Get the seconds.
     * @return {number}
     */
  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }

    /**
     * Get the milliseconds.
     * @return {number}
     */
  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }

    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }

    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }

    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);
  return Duration;
}();

var INVALID$1 = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */;
  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
      builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */;
  Interval.after = function after(start, duration) {
    var dur = Duration.fromDurationLike(duration),
      dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */;
  Interval.before = function before(end, duration) {
    var dur = Duration.fromDurationLike(duration),
      dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */;
  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
      s = _split[0],
      e = _split[1];
    if (s && e) {
      var start, startIsValid;
      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }
      var end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);
        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }
    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }

  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */;
  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */;
  var _proto = Interval.prototype;
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }
    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */;
  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }
    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
  }

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */;
  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */;
  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */;
  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */;
  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */;
  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */;
  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      start = _ref.start,
      end = _ref.end;
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */;
  _proto.splitAt = function splitAt() {
    var _this = this;
    if (!this.isValid) return [];
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }
    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
        return _this.contains(d);
      }).sort(),
      results = [];
    var s = this.s,
      i = 0;
    while (s < this.e) {
      var added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }
    return results;
  }

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */;
  _proto.splitBy = function splitBy(duration) {
    var dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    var s = this.s,
      idx = 1,
      next;
    var results = [];
    while (s < this.e) {
      var added = this.start.plus(dur.mapUnits(function (x) {
        return x * idx;
      }));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }
    return results;
  }

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */;
  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */;
  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */;
  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */;
  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */;
  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */;
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */;
  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;
    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */;
  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */;
  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
        return a.s - b.s;
      }).reduce(function (_ref2, item) {
        var sofar = _ref2[0],
          current = _ref2[1];
        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      }, [[], null]),
      found = _intervals$sort$reduc[0],
      final = _intervals$sort$reduc[1];
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */;
  Interval.xor = function xor(intervals) {
    var _Array$prototype;
    var start = null,
      currentCount = 0;
    var results = [],
      ends = intervals.map(function (i) {
        return [{
          time: i.s,
          type: "s"
        }, {
          time: i.e,
          type: "e"
        }];
      }),
      flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
      arr = flattened.sort(function (a, b) {
        return a.time - b.time;
      });
    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }
        start = null;
      }
    }
    return Interval.merge(results);
  }

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */;
  _proto.difference = function difference() {
    var _this2 = this;
    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }
    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */;
  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }

  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */;
  _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
    if (formatOpts === void 0) {
      formatOpts = DATE_SHORT;
    }
    if (opts === void 0) {
      opts = {};
    }
    return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */;
  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }

  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */;
  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }

  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */;
  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }

  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */;
  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
      _ref3$separator = _ref3.separator,
      separator = _ref3$separator === void 0 ? " – " : _ref3$separator;
    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */;
  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */;
  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };
  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }

    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */
  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }

    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }

    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }

    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);
  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
var Info = /*#__PURE__*/function () {
  function Info() {}
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }
    var proto = DateTime.now().setZone(zone).set({
      month: 12
    });
    return !zone.isUniversal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */;
  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }

  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */;
  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */;
  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? null : _ref$locale,
      _ref$numberingSystem = _ref.numberingSystem,
      numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
      _ref$locObj = _ref.locObj,
      locObj = _ref$locObj === void 0 ? null : _ref$locObj,
      _ref$outputCalendar = _ref.outputCalendar,
      outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */;
  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$locale = _ref2.locale,
      locale = _ref2$locale === void 0 ? null : _ref2$locale,
      _ref2$numberingSystem = _ref2.numberingSystem,
      numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
      _ref2$locObj = _ref2.locObj,
      locObj = _ref2$locObj === void 0 ? null : _ref2$locObj,
      _ref2$outputCalendar = _ref2.outputCalendar,
      outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */;
  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$locale = _ref3.locale,
      locale = _ref3$locale === void 0 ? null : _ref3$locale,
      _ref3$numberingSystem = _ref3.numberingSystem,
      numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem,
      _ref3$locObj = _ref3.locObj,
      locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */;
  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }
    var _ref4 = _temp4 === void 0 ? {} : _temp4,
      _ref4$locale = _ref4.locale,
      locale = _ref4$locale === void 0 ? null : _ref4$locale,
      _ref4$numberingSystem = _ref4.numberingSystem,
      numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem,
      _ref4$locObj = _ref4.locObj,
      locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */;
  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
      _ref5$locale = _ref5.locale,
      locale = _ref5$locale === void 0 ? null : _ref5$locale;
    return Locale.create(locale).meridiems();
  }

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */;
  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }
    var _ref6 = _temp6 === void 0 ? {} : _temp6,
      _ref6$locale = _ref6.locale,
      locale = _ref6$locale === void 0 ? null : _ref6$locale;
    return Locale.create(locale, null, "gregory").eras(length);
  }

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */;
  Info.features = function features() {
    return {
      relative: hasRelative()
    };
  };
  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
      return dt.toUTC(0, {
        keepLocalTime: true
      }).startOf("day").valueOf();
    },
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["quarters", function (a, b) {
    return b.quarter - a.quarter + (b.year - a.year) * 4;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var earlier = cursor;
  var lowestOrder, highWater;
  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
      unit = _differs$_i[0],
      differ = _differs$_i[1];
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      results[unit] = differ(cursor, later);
      highWater = earlier.plus(results);
      if (highWater > later) {
        results[unit]--;
        cursor = earlier.plus(results);
      } else {
        cursor = highWater;
      }
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
    cursor = _highOrderDiffs[0],
    results = _highOrderDiffs[1],
    highWater = _highOrderDiffs[2],
    lowestOrder = _highOrderDiffs[3];
  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus;
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[lowestOrder] = 1, _cursor$plus));
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  var duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;
    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
            min = _numberingSystemsUTF[0],
            max = _numberingSystemsUTF[1];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;
  if (append === void 0) {
    append = "";
  }
  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }
  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "[ " + NBSP + "]";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}
function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
        m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}
function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  var one = digitRegex(loc),
    two = digitRegex(loc, "{2}"),
    three = digitRegex(loc, "{3}"),
    four = digitRegex(loc, "{4}"),
    six = digitRegex(loc, "{6}"),
    oneOrTwo = digitRegex(loc, "{1,2}"),
    oneToThree = digitRegex(loc, "{1,3}"),
    oneToSix = digitRegex(loc, "{1,6}"),
    oneToNine = digitRegex(loc, "{1,9}"),
    twoToFour = digitRegex(loc, "{2,4}"),
    fourToSix = digitRegex(loc, "{4,6}"),
    literal = function literal(t) {
      return {
        regex: RegExp(escapeToken(t.val)),
        deser: function deser(_ref5) {
          var s = _ref5[0];
          return s;
        },
        literal: true
      };
    },
    unitate = function unitate(t) {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);
        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true, false), 1);
        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false, false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
        case "ZZZ":
          return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
        case " ":
          return simple(/[^\S\n\r]/);
        default:
          return literal(t);
      }
    };
  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function tokenForPart(part, formatOpts) {
  var type = part.type,
    value = part.value;
  if (type === "literal") {
    var isSpace = /^\s+$/.test(value);
    return {
      literal: !isSpace,
      val: isSpace ? " " : value
    };
  }
  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val: val
    };
  }
  return undefined;
}
function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}
function match(input, regex, handlers) {
  var matches = input.match(regex);
  if (matches) {
    var all = {};
    var matchIndex = 1;
    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  var zone = null;
  var specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }
  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);
    if (f) {
      r[f] = matches[k];
    }
    return r;
  }, {});
  return [vals, zone, specificOffset];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  var tokens = formatOptsToTokens(formatOpts, locale);
  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  var _Array$prototype;
  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
    units = tokens.map(function (t) {
      return unitForToken(t, locale);
    }),
    disqualifyingUnit = units.find(function (t) {
      return t.invalidReason;
    });
  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
      regexString = _buildRegex[0],
      handlers = _buildRegex[1],
      regex = RegExp(regexString, "i"),
      _match = match(input, regex, handlers),
      rawMatches = _match[0],
      matches = _match[1],
      _ref6 = matches ? dateTimeFromMatches(matches) : [null, null, undefined],
      result = _ref6[0],
      zone = _ref6[1],
      specificOffset = _ref6[2];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }
    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone,
      specificOffset: specificOffset
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
    result = _explainFromTokens.result,
    zone = _explainFromTokens.zone,
    specificOffset = _explainFromTokens.specificOffset,
    invalidReason = _explainFromTokens.invalidReason;
  return [result, zone, specificOffset, invalidReason];
}
function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }
  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map(function (p) {
    return tokenForPart(p, formatOpts);
  });
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}
function dayOfWeek(year, month, day) {
  var d = new Date(Date.UTC(year, month - 1, day));
  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  var js = d.getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex(function (i) {
      return i < ordinal;
    }),
    day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  var year = gregObj.year,
    month = gregObj.month,
    day = gregObj.day,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return _extends({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
    weekNumber = weekData.weekNumber,
    weekday = weekData.weekday,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
    month = _uncomputeOrdinal.month,
    day = _uncomputeOrdinal.day;
  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
    month = gregData.month,
    day = gregData.day;
  var ordinal = computeOrdinal(year, month, day);
  return _extends({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
    ordinal = ordinalData.ordinal;
  var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
    month = _uncomputeOrdinal2.month,
    day = _uncomputeOrdinal2.day;
  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
    validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
    validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
    validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
    validMonth = integerBetween(obj.month, 1, 12),
    validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
    minute = obj.minute,
    second = obj.second,
    millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
    validMinute = integerBetween(minute, 0, 59),
    validSecond = integerBetween(second, 0, 59),
    validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID = "Invalid DateTime";
var MAX_DATE = 8.64e15;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(_extends({}, current, alts, {
    old: current
  }));
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  var o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  var o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  var oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = _extends({}, inst.c, {
      year: year,
      month: month,
      day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }),
    millisToAdd = Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds
    }).as("milliseconds"),
    localTS = objToLocalTS(c);
  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
    ts = _fixOffset[0],
    o = _fixOffset[1];
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }
  return {
    ts: ts,
    o: o
  };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  var setZone = opts.setZone,
    zone = opts.zone;
  if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
    var interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(parsed, _extends({}, opts, {
        zone: interpretationZone,
        specificOffset: specificOffset
      }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function _toISODate(o, extended) {
  var longFormat = o.c.year > 9999 || o.c.year < 0;
  var c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);
  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}
function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
  var c = padStart(o.c.hour);
  if (extended) {
    c += ":";
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }
  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);
    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }
  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}

// defaults for unspecified units in the supported calendars
var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };

// Units in the supported calendars, sorted by bigness
var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  var zone = normalizeZone(opts.zone, Settings.defaultZone),
    loc = Locale.fromObject(opts),
    tsNow = Settings.now();
  var ts, o;

  // assume we have the higher-order units
  if (!isUndefined(obj.year)) {
    for (var _i = 0, _orderedUnits = orderedUnits; _i < _orderedUnits.length; _i++) {
      var u = _orderedUnits[_i];
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    var offsetProvis = zone.offset(tsNow);
    var _objToTS = objToTS(obj, offsetProvis, zone);
    ts = _objToTS[0];
    o = _objToTS[1];
  } else {
    ts = tsNow;
  }
  return new DateTime({
    ts: ts,
    zone: zone,
    loc: loc,
    o: o
  });
}
function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
    format = function format(c, unit) {
      c = roundTo(c, round || opts.calendary ? 0 : 2, true);
      var formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = function differ(unit) {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (var _iterator = _createForOfIteratorHelperLoose(opts.units), _step; !(_step = _iterator()).done;) {
    var unit = _step.value;
    var count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  var opts = {},
    args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
      o = null;
    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        var _ref = [config.old.c, config.old.o];
        c = _ref[0];
        o = _ref[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  DateTime.now = function now() {
    return new DateTime({});
  }

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */;
  DateTime.local = function local() {
    var _lastOpts = lastOpts(arguments),
      opts = _lastOpts[0],
      args = _lastOpts[1],
      year = args[0],
      month = args[1],
      day = args[2],
      hour = args[3],
      minute = args[4],
      second = args[5],
      millisecond = args[6];
    return quickDT({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    }, opts);
  }

  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */;
  DateTime.utc = function utc() {
    var _lastOpts2 = lastOpts(arguments),
      opts = _lastOpts2[0],
      args = _lastOpts2[1],
      year = args[0],
      month = args[1],
      day = args[2],
      hour = args[3],
      minute = args[4],
      second = args[5],
      millisecond = args[6];
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    }, opts);
  }

  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */;
  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }
    var ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }
    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }

  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */;
  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }

  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */;
  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }

  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */;
  DateTime.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }
    obj = obj || {};
    var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    var tsNow = Settings.now(),
      offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow),
      normalized = normalizeObject(obj, normalizeUnit),
      containsOrdinal = !isUndefined(normalized.ordinal),
      containsGregorYear = !isUndefined(normalized.year),
      containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = Locale.fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;

    // configure ourselves to deal with gregorian dates or week stuff
    var units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    var foundFirst = false;
    for (var _iterator2 = _createForOfIteratorHelperLoose(units), _step2; !(_step2 = _iterator2()).done;) {
      var u = _step2.value;
      var v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
      invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
      _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
      tsFinal = _objToTS2[0],
      offsetFinal = _objToTS2[1],
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc: loc
      });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }
    return inst;
  }

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */;
  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _parseISODate = parseISODate(text),
      vals = _parseISODate[0],
      parsedZone = _parseISODate[1];
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */;
  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _parseRFC2822Date = parseRFC2822Date(text),
      vals = _parseRFC2822Date[0],
      parsedZone = _parseRFC2822Date[1];
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */;
  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _parseHTTPDate = parseHTTPDate(text),
      vals = _parseHTTPDate[0],
      parsedZone = _parseHTTPDate[1];
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }

  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */;
  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    var _opts = opts,
      _opts$locale = _opts.locale,
      locale = _opts$locale === void 0 ? null : _opts$locale,
      _opts$numberingSystem = _opts.numberingSystem,
      numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
      localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      }),
      _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
      vals = _parseFromTokens[0],
      parsedZone = _parseFromTokens[1],
      specificOffset = _parseFromTokens[2],
      invalid = _parseFromTokens[3];
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
    }
  }

  /**
   * @deprecated use fromFormat instead
   */;
  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */;
  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _parseSQL = parseSQL(text),
      vals = _parseSQL[0],
      parsedZone = _parseSQL[1];
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }

  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */;
  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }

  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */;
  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  }

  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */;
  DateTime.parseFormatForOpts = function parseFormatForOpts(formatOpts, localeOpts) {
    if (localeOpts === void 0) {
      localeOpts = {};
    }
    var tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map(function (t) {
      return t ? t.val : null;
    }).join("");
  }

  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */;
  DateTime.expandFormat = function expandFormat(fmt, localeOpts) {
    if (localeOpts === void 0) {
      localeOpts = {};
    }
    var expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
    return expanded.map(function (t) {
      return t.val;
    }).join("");
  }

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */;
  var _proto = DateTime.prototype;
  _proto.get = function get(unit) {
    return this[unit];
  }

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */;
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
      locale = _Formatter$create$res.locale,
      numberingSystem = _Formatter$create$res.numberingSystem,
      calendar = _Formatter$create$res.calendar;
    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  }

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */;
  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }
    if (opts === void 0) {
      opts = {};
    }
    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */;
  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */;
  _proto.setZone = function setZone(zone, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$keepLocalTime = _ref2.keepLocalTime,
      keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime,
      _ref2$keepCalendarTim = _ref2.keepCalendarTime,
      keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();
        var _objToTS3 = objToTS(asObj, offsetGuess, zone);
        newTS = _objToTS3[0];
      }
      return clone(this, {
        ts: newTS,
        zone: zone
      });
    }
  }

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */;
  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
      locale = _ref3.locale,
      numberingSystem = _ref3.numberingSystem,
      outputCalendar = _ref3.outputCalendar;
    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone(this, {
      loc: loc
    });
  }

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */;
  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */;
  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit),
      settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday),
      containsOrdinal = !isUndefined(normalized.ordinal),
      containsGregorYear = !isUndefined(normalized.year),
      containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    var mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = _extends({}, this.toObject(), normalized);

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    var _objToTS4 = objToTS(mixed, this.o, this.zone),
      ts = _objToTS4[0],
      o = _objToTS4[1];
    return clone(this, {
      ts: ts,
      o: o
    });
  }

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */;
  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */;
  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */;
  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
      normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }
    return this.set(o);
  }

  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */;
  _proto.endOf = function endOf(unit) {
    var _this$plus;
    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  }

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */;
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */;
  _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
    if (formatOpts === void 0) {
      formatOpts = DATE_SHORT;
    }
    if (opts === void 0) {
      opts = {};
    }
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }

  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */;
  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */;
  _proto.toISO = function toISO(_temp3) {
    var _ref4 = _temp3 === void 0 ? {} : _temp3,
      _ref4$format = _ref4.format,
      format = _ref4$format === void 0 ? "extended" : _ref4$format,
      _ref4$suppressSeconds = _ref4.suppressSeconds,
      suppressSeconds = _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds,
      _ref4$suppressMillise = _ref4.suppressMilliseconds,
      suppressMilliseconds = _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise,
      _ref4$includeOffset = _ref4.includeOffset,
      includeOffset = _ref4$includeOffset === void 0 ? true : _ref4$includeOffset,
      _ref4$extendedZone = _ref4.extendedZone,
      extendedZone = _ref4$extendedZone === void 0 ? false : _ref4$extendedZone;
    if (!this.isValid) {
      return null;
    }
    var ext = format === "extended";
    var c = _toISODate(this, ext);
    c += "T";
    c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */;
  _proto.toISODate = function toISODate(_temp4) {
    var _ref5 = _temp4 === void 0 ? {} : _temp4,
      _ref5$format = _ref5.format,
      format = _ref5$format === void 0 ? "extended" : _ref5$format;
    if (!this.isValid) {
      return null;
    }
    return _toISODate(this, format === "extended");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */;
  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */;
  _proto.toISOTime = function toISOTime(_temp5) {
    var _ref6 = _temp5 === void 0 ? {} : _temp5,
      _ref6$suppressMillise = _ref6.suppressMilliseconds,
      suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
      _ref6$suppressSeconds = _ref6.suppressSeconds,
      suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
      _ref6$includeOffset = _ref6.includeOffset,
      includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
      _ref6$includePrefix = _ref6.includePrefix,
      includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
      _ref6$extendedZone = _ref6.extendedZone,
      extendedZone = _ref6$extendedZone === void 0 ? false : _ref6$extendedZone,
      _ref6$format = _ref6.format,
      format = _ref6$format === void 0 ? "extended" : _ref6$format;
    if (!this.isValid) {
      return null;
    }
    var c = includePrefix ? "T" : "";
    return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
  }

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */;
  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */;
  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */;
  _proto.toSQLDate = function toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return _toISODate(this, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */;
  _proto.toSQLTime = function toSQLTime(_temp6) {
    var _ref7 = _temp6 === void 0 ? {} : _temp6,
      _ref7$includeOffset = _ref7.includeOffset,
      includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
      _ref7$includeZone = _ref7.includeZone,
      includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone,
      _ref7$includeOffsetSp = _ref7.includeOffsetSpace,
      includeOffsetSpace = _ref7$includeOffsetSp === void 0 ? true : _ref7$includeOffsetSp;
    var fmt = "HH:mm:ss.SSS";
    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }
    return toTechFormat(this, fmt, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */;
  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }
    if (!this.isValid) {
      return null;
    }
    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */;
  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */;
  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */;
  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */;
  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */;
  _proto.toUnixInteger = function toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */;
  _proto.toJSON = function toJSON() {
    return this.toISO();
  }

  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */;
  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }

  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */;
  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }
    if (!this.isValid) return {};
    var base = _extends({}, this.c);
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */;
  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */;
  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }
    if (opts === void 0) {
      opts = {};
    }
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    var durOpts = _extends({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);
    var units = maybeArray(unit).map(Duration.normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = _diff(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */;
  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }
    if (opts === void 0) {
      opts = {};
    }
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */;
  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */;
  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    var inputMs = otherDateTime.valueOf();
    var adjustedToZone = this.setZone(otherDateTime.zone, {
      keepLocalTime: true
    });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */;
  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */;
  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }
    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({}, {
        zone: this.zone
      }),
      padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    var units = ["years", "months", "days", "hours", "minutes", "seconds"];
    var unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), _extends({}, options, {
      numeric: "always",
      units: units,
      unit: unit
    }));
  }

  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */;
  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }
    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({}, {
      zone: this.zone
    }), this, _extends({}, options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */;
  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */;
  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  }

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */;
  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      _options$locale = _options.locale,
      locale = _options$locale === void 0 ? null : _options$locale,
      _options$numberingSys = _options.numberingSystem,
      numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
      localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      });
    return explainFromTokens(localeToUse, text, fmt);
  }

  /**
   * @deprecated use fromFormatExplain instead
   */;
  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */;
  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }

    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }

    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }

    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }

    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }

    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }

    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }

    /**
     * Get the name of the time zone.
     * @type {string}
     */
  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }

    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }

    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }

    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }

    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }

    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }

    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }

    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }

    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }

    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }

    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }

    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }

    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }

    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }

    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }

    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }

    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }

    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }

    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.isUniversal : null;
    }

    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1,
          day: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }

    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }

    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }

    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }

    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }

    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }

    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }

    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);
  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

var VERSION = "3.3.0";

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.Settings = Settings;
exports.SystemZone = SystemZone;
exports.VERSION = VERSION;
exports.Zone = Zone;


},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rand_in_range = exports.in_range = exports.dist = exports.meters_to_px = exports.insideRectangle = void 0;
function insideRectangle(rect, point) {
    return (rect.point_1.x <= point.x &&
        rect.point_2.x >= point.x &&
        rect.point_1.y <= point.y &&
        rect.point_2.y >= point.y &&
        rect.point_1.z <= point.z &&
        rect.point_2.z >= point.z);
}
exports.insideRectangle = insideRectangle;
function meters_to_px(meters, venue_length, length) {
    return (meters / venue_length) * length;
}
exports.meters_to_px = meters_to_px;
function dist(a, b) {
    return Math.abs(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
}
exports.dist = dist;
function in_range(a, range) {
    return a >= range[0] && a <= range[1];
}
exports.in_range = in_range;
function rand_in_range(a, b) {
    return Math.random() * (b - a) + a;
}
exports.rand_in_range = rand_in_range;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gk_attribute_names = exports.attribute_names = exports.PitchArea = exports.Polygon = exports.Shape = void 0;
const place_1 = require("../worker/place");
function onLine(l1, p) {
    if (p.x <= Math.max(l1.point_1.x, l1.point_2.x) &&
        p.x <= Math.min(l1.point_1.x, l1.point_2.x) &&
        p.y <= Math.max(l1.point_1.y, l1.point_2.y) &&
        p.y <= Math.min(l1.point_1.y, l1.point_2.y)) {
        return true;
    }
    return false;
}
function direction(a, b, c) {
    let val = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
    if (val == 0) {
        return 0;
    }
    return val > 0 ? 1 : 2;
}
function isIntersect(l1, l2) {
    let dir1 = direction(l1.point_1, l1.point_2, l2.point_1);
    let dir2 = direction(l1.point_1, l1.point_2, l2.point_2);
    let dir3 = direction(l2.point_1, l2.point_2, l1.point_1);
    let dir4 = direction(l2.point_1, l2.point_2, l1.point_2);
    if (dir1 != dir2 && dir3 != dir4) {
        return true;
    }
    if (dir1 == 0 && onLine(l1, l2.point_1)) {
        return true;
    }
    if (dir2 == 0 && onLine(l1, l2.point_2)) {
        return true;
    }
    if (dir3 == 0 && onLine(l2, l1.point_1)) {
        return true;
    }
    if (dir4 == 0 && onLine(l2, l1.point_2)) {
        return true;
    }
    return false;
}
class Shape {
    constructor(points) {
        this._points = points;
    }
    addPoint(point) {
        this._points.push(point);
    }
    set points(points) {
        this._points = points;
    }
    get points() {
        return this._points;
    }
}
exports.Shape = Shape;
class Polygon extends Shape {
    constructor(points) {
        if (points.length < 3) {
            throw new Error("Polygon must have at least 3 points");
        }
        super(points);
    }
    isInside(point) {
        let extreme = { x: 100000, y: point.y, z: 0 };
        let exline = { point_1: point, point_2: extreme };
        let count = 0;
        let i = 0;
        do {
            let side = {
                point_1: this.points[i],
                point_2: this.points[(i + 1) % this.points.length],
            };
            if (isIntersect(side, exline)) {
                if (direction(side.point_1, point, side.point_2) == 0) {
                    return onLine(side, point);
                }
                count++;
            }
            i = (i + 1) % this.points.length;
        } while (i != 0);
        return count % 2 == 1;
    }
}
exports.Polygon = Polygon;
class PitchArea {
    constructor(venue) {
        this.length = venue.length;
        this.width = venue.width;
    }
    set venue(venue) {
        this._venue = venue;
    }
    get venue() {
        return this._venue;
    }
    gk_area(side) {
        let points;
        if (side == "left") {
            points = [
                {
                    x: 0,
                    y: this.width / 2 + place_1.PitchDimensions.six_yard_box_width / 2 + 4,
                    z: 0,
                },
                {
                    x: place_1.PitchDimensions.six_yard_box_length + 4,
                    y: this.width / 2 - place_1.PitchDimensions.six_yard_box_width / 2 - 4,
                    z: 0,
                },
            ];
            return points;
        }
        else {
        }
    }
}
exports.PitchArea = PitchArea;
exports.attribute_names = [
    "pace",
    "acceleration",
    "agility",
    "aggression",
    "balance",
    "dribbling",
    "technique",
    "finishing",
    "passing",
    "vision",
    "tackling",
    "heading",
    "strength",
    "stamina",
    "positioning",
    "movement",
    "decisions",
    "flair",
    "natural_fitness",
    "work_rate",
    "determination",
    "leadership",
    "teamwork",
    "jumping",
    "reactions",
];
exports.gk_attribute_names = [
    "handling",
    "reactions",
    "one_on_ones",
    "rushing_out",
    "communication",
    "eccentricity",
    "throwing",
    "kicking",
    "vision",
    "positioning",
    "pace",
    "acceleration",
    "strength",
    "jumping",
    "stamina",
    "natural_fitness",
    "determination",
    "work_rate",
    "leadership",
    "teamwork",
];

},{"../worker/place":8}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
class Club {
    constructor(name) {
        this._name = name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set players(players) {
        this._players = players;
    }
    get players() {
        return this._players;
    }
    set location(loc) {
        this._location = loc;
    }
    get location() {
        return this._location;
    }
}
exports.Club = Club;

},{}],5:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = exports.Match = exports.Team = exports.PlayerOnPitch = void 0;
const club_1 = require("./club");
const person_1 = require("./person");
const place_1 = require("./place");
const luxon_1 = require("luxon");
const index_1 = require("./index");
const helpers_1 = require("../common/helpers");
class PlayerOnPitch extends person_1.Player {
    set role(role) {
        this._role = role;
    }
    set position(position) {
        this._position = position;
    }
    get position() {
        return this._position;
    }
    set instructions(instructions) {
        this._instructions = instructions;
    }
    get instructions() {
        return this._instructions;
    }
    set loc(loc) {
        this._loc = loc;
    }
    get loc() {
        return this._loc;
    }
    set dx(dx) {
        this._dx = dx;
    }
    get dx() {
        return this._dx;
    }
    set dy(dy) {
        this._dy = dy;
    }
    get dy() {
        return this._dy;
    }
    set dz(dz) {
        this._dz = dz;
    }
    get dz() {
        return this._dz;
    }
    calculate_optimal_position(teamInPossession) {
        // move towards more threatening positions
        // or provide passing options
        // iterate through positions in radius
        // pick one based on movement attribute
        // and team tactics
        let radius = 10;
        // 10 m
        let positions = [];
        for (let x = this.loc.x - radius; x < this.loc.x + radius; x += 2) {
            for (let y = this.loc.y - radius; y < this.loc.y + radius; y += 2) {
                positions.push({ x: x, y: y, z: 0 });
            }
        }
        let scores = Array(positions.length).fill(0);
        for (let p of positions) {
            let threat = this.threat_at_position(this.team, p);
            scores[positions.indexOf(p)] += threat;
        }
        // sort positions by score
        scores.sort((a, b) => {
            return b - a;
        });
        positions.sort((a, b) => {
            return scores[positions.indexOf(b)] - scores[positions.indexOf(a)];
        });
        let movement = this.attributes.get_attr("movement");
        if (movement == undefined) {
            movement = 25;
        }
        // lower movement means more deviation
        // maximum randomness = 0.5
        // minimum randomness = 0.1
        let randomness = 0.5 - (movement / 100) * 0.4;
        let index = Math.floor(Math.random() * randomness * 10);
        let target = positions[index];
        console.log("moving to target" + target.x + " " + target.y);
        return target;
    }
    kickoff_position() {
        return 0;
    }
    dribble() {
        let dribbling = this.attributes.get_attr("dribbling");
        if (dribbling == undefined) {
            dribbling = 25;
        }
        let target = this.calculate_optimal_position(this.team);
        this.dx = 0;
        this.dy = 0;
    }
    decelerate() {
        // deceleration = 0.5 * acceleration
        let acceleration = this.attributes.get_attr("acceleration");
        if (acceleration == undefined) {
            acceleration = 25;
        }
        let max_deceleration = 6 + (acceleration / 100) * 2;
        let deceleration = max_deceleration / 2;
        if (this.dx > 0) {
            this.dx -= deceleration / 60;
            if (this.dx < 0) {
                this.dx = 0;
            }
        }
        if (this.dx < 0) {
            this.dx += deceleration / 60;
            if (this.dx > 0) {
                this.dx = 0;
            }
        }
        if (this.dy > 0) {
            this.dy -= deceleration / 60;
            if (this.dy < 0) {
                this.dy = 0;
            }
        }
        if (this.dy < 0) {
            this.dy += deceleration / 60;
            if (this.dy > 0) {
                this.dy = 0;
            }
        }
    }
    shoot() {
        let shooting = this.attributes.get_attr("finishing");
        if (shooting == undefined) {
            shooting = 25;
        }
        // accuracy
        // max accuracy_radius = 1.25m
        // min accuracy_radius = 0.25m
        let accuracy_radius = 1.25 - (shooting / 100) * 1;
        // power
        let technique = this.attributes.get_attr("technique");
        if (technique == undefined) {
            technique = 25;
        }
        // max power = 25 m/s
        // min power = 15 m/s
        let max_power = 15 + (technique / 100) * 10;
        let power = max_power;
        // distance to goal
        let direction = this.team.attacking_direction;
        let left = {
            x: 0,
            y: this.venue.width / 2,
            z: 0,
        };
        let right = {
            x: this.venue.length,
            y: this.venue.width / 2,
            z: 0,
        };
        // choose side of goal
        let target;
        if (direction == "left") {
            if (Math.random() < 0.5) {
                target = {
                    x: -2,
                    y: this.venue.width / 2 - 1,
                    z: 1.25,
                };
            }
            else {
                target = {
                    x: -2,
                    y: this.venue.width / 2 + 1,
                    z: 1.25,
                };
            }
        }
        else {
            if (Math.random() < 0.5) {
                target = {
                    x: this.venue.length + 2,
                    y: this.venue.width / 2 - 1,
                    z: 1.25,
                };
            }
            else {
                target = {
                    x: this.venue.length + 2,
                    y: this.venue.width / 2 + 1,
                    z: 1.25,
                };
            }
        }
        // apply error to target_coords based on shooting accuracy and distance
        target.x += (0, helpers_1.rand_in_range)(-accuracy_radius, accuracy_radius);
        target.y += (0, helpers_1.rand_in_range)(-accuracy_radius, accuracy_radius);
        target.z += (0, helpers_1.rand_in_range)(-accuracy_radius, accuracy_radius);
        // caluclate speed to apply to ball
        let speed = max_power;
        let distance = (0, helpers_1.dist)(this.loc, target);
        let error_plus_minus_percentage = 0.15 - (technique / 100) * 0.1;
        let dx = ((target.x - this.loc.x) / distance) * speed;
        let dy = ((target.y - this.loc.y) / distance) * speed;
        let dz = ((target.z - this.loc.z) / distance) * speed;
        dx /= 60;
        dy /= 60;
        dz /= 60;
        this.attempt_shot(dx, dy, dz);
    }
    attempt_shot(dx, dy, dz) {
        this.m.ball_dx = dx;
        this.m.ball_dy = dy;
        this.m.ball_dz = dz;
        this.m.record("shots", this);
    }
    decide_action(m) {
        // if ball is not possessed by anyone, and player is closest 
        // teammate, try to get it
        if (m.possession == null) {
            let closest = m.closest_to_ball();
            if (closest.includes(this)) {
                this.get_ball(m);
            }
            else {
                if (this.receive_pass) {
                    console.log("receiving pass");
                    this.move_to(m.ball_pos, 'max');
                }
                else {
                    this.calculate_optimal_position(m.outOfPossession);
                    this.move_to(this.target_loc, 'medium');
                }
            }
        }
        else {
            this.receive_pass = false;
            // if ball is possessed by self
            if (m.player_possession == this) {
                // dribble, pass, or shoot
                // calculate teammate threat
                let teammate_threat = new Array(this.team.playersOnPitch.length - 1).fill(0);
                let teammate_pressure = new Array(this.team.playersOnPitch.length - 1).fill(0);
                let diff = new Array(this.team.playersOnPitch.length - 1).fill(0);
                for (let p of this.team.playersOnPitch.filter((player) => {
                    return player != this;
                })) {
                    let threat = p.calculate_threat(this.team);
                    let pressure = p.calculate_pressure(m.outOfPossession);
                    teammate_threat[this.team.playersOnPitch.indexOf(p)] = threat;
                    teammate_pressure[this.team.playersOnPitch.indexOf(p)] = pressure;
                    diff[this.team.playersOnPitch.indexOf(p)] = (threat - pressure) * .75;
                }
                let self_threat = this.calculate_threat(this.team);
                let self_pressure = this.calculate_pressure(m.outOfPossession);
                let self_diff = self_threat - self_pressure;
                let max_diff = Math.max(...diff);
                console.log(self_diff, max_diff);
                if (max_diff > self_diff) {
                    // pass
                    this.pass(this.team, m.outOfPossession);
                }
                else if (self_diff > max_diff) {
                    // if self diff is lower than shot threshold,
                    // dribble to a more threatening position
                    if (self_diff < 0.0001) {
                        this.dribble();
                    }
                    else {
                        // shoot
                        this.shoot();
                    }
                }
                ;
            }
            else {
                // if ball is possessed by teammate
                // move to optimal position
                let target = this.calculate_optimal_position(m.outOfPossession);
                if (target == undefined) {
                    target = { x: 0, y: 0, z: 0 };
                }
                this.move_to(target, 'medium');
            }
        }
    }
    calculate_closest_teammate(m) {
    }
    get_ball(m) {
        let target = m.ball_pos;
        this.move_to(target, 'max');
    }
    move_to(target, speed) {
        // calculate dx, dy, dz
        let pace = this.attributes.get_attr("pace");
        if (pace == undefined) {
            pace = 25;
        }
        // max speed of 100 pace player = 10 m/s
        // max speed of 0 pace player = 7 m/s
        let max_speed = 7 + (pace / 100) * 3;
        let acceleration = this.attributes.get_attr("acceleration");
        if (acceleration == undefined) {
            acceleration = 25;
        }
        if (speed == "high") {
            max_speed *= 0.85;
        }
        if (speed == "medium") {
            max_speed *= 0.7;
        }
        if (speed == "slow") {
            max_speed *= 0.5;
        }
        // max acceleration of 100 acceleration player = 8 m/s/s
        // max acceleration of 0 acceleration player = 6 m/s/s
        let max_acceleration = 6 + (acceleration / 100) * 2;
        if (speed == "high") {
            max_acceleration *= 0.85;
        }
        if (speed == "medium") {
            max_acceleration *= 0.7;
        }
        if (speed == "slow") {
            max_acceleration *= 0.5;
        }
        //calculate target dx and dy
        // i.e. vectorize max_speed
        let dx = ((target.x - this.loc.x) / (0, helpers_1.dist)(this.loc, target)) * max_speed;
        let dy = ((target.y - this.loc.y) / (0, helpers_1.dist)(this.loc, target)) * max_speed;
        dx /= 60;
        dy /= 60;
        if (dx > this.dx) {
            this.dx += max_acceleration / 360;
        }
        else if (dx < this.dx) {
            this.dx -= max_acceleration / 360;
        }
        if (dy > this.dy) {
            this.dy += max_acceleration / 360;
        }
        else if (dy < this.dy) {
            this.dy -= max_acceleration / 360;
        }
    }
    attempt_pass(dx, dy, dz) {
        this.m.ball_dx = dx;
        this.m.ball_dy = dy;
        this.m.ball_dz = dz;
        this.m.record("passes_attempted", this);
    }
    move() {
        this.loc.x += this.dx;
        this.loc.y += this.dy;
        this.loc.z += this.dz;
        if (this.dx == 0 && this.dy == 0 && this.dz == 0) {
            this.passive_movement();
        }
    }
    pass(team, opp) {
        let target = this.choose_pass_target(team, opp);
        target.receive_pass = true;
        // passing accuracy
        let pass_accuracy = this.attributes.get_attr("passing");
        if (pass_accuracy == undefined) {
            pass_accuracy = 25;
        }
        // distance to target
        let d = (0, helpers_1.dist)(this.loc, target.loc);
        let target_coords = {
            x: target.loc.x,
            y: target.loc.y,
            z: target.loc.z,
        };
        this.m.ball_target = target_coords;
        // choose whether to lob or pass on ground
        let lob = false;
        if (d > 20) {
            // lob
            lob = true;
        }
        let cross = false;
        // if passer in crossing zone and target in box, cross
        let direction = team.attacking_direction;
        if (direction == "left") {
            if ((this.loc.x < 20 &&
                this.loc.y <
                    this.venue.width / 2 + place_1.PitchDimensions.penalty_area_width / 2) ||
                this.loc.y >
                    this.venue.width / 2 - place_1.PitchDimensions.penalty_area_width / 2) {
                // if target in box
                if (target.loc.x < 11 &&
                    target.loc.y >
                        this.venue.width / 2 - place_1.PitchDimensions.penalty_area_width / 3 &&
                    target.loc.y <
                        this.venue.width / 2 + place_1.PitchDimensions.penalty_area_width / 3) {
                    cross = true;
                }
            }
        }
        else if (direction == "right") {
            if ((this.loc.x > this.venue.length - 20 &&
                this.loc.y <
                    this.venue.width / 2 + place_1.PitchDimensions.penalty_area_width / 2) ||
                this.loc.y >
                    this.venue.width / 2 - place_1.PitchDimensions.penalty_area_width / 2) {
                // if target in box
                if (target.loc.x > this.venue.length - 11 &&
                    target.loc.y >
                        this.venue.width / 2 - place_1.PitchDimensions.penalty_area_width / 3 &&
                    target.loc.y <
                        this.venue.width / 2 + place_1.PitchDimensions.penalty_area_width / 3) {
                    cross = true;
                }
            }
        }
        //calculate accuracy
        //apply error to target_coords based on passing accuracy and distance
        // worse passing accuracy means a larger error radius
        // max radius: 2m
        // min radius: .35m
        let error_radius = 0.35 + (pass_accuracy / 100) * 1.65;
        // pick random point in the circle
        let r = Math.random() * error_radius;
        let theta = Math.random() * 2 * Math.PI;
        target_coords.x += r * Math.cos(theta);
        target_coords.y += r * Math.sin(theta);
        // caluclate speed to apply to ball
        // better passing and technique means faster pass
        // max speed = 25 m/s
        // min speed = 15 m/s
        // optimal speed is one that takes 1 second to reach target
        let max_speed = 15 + (pass_accuracy / 100) * 10;
        let speed = max_speed;
        let distance = (0, helpers_1.dist)(this.loc, target_coords);
        let technique = this.attributes.get_attr("technique");
        if (technique == undefined) {
            technique = 25;
        }
        let error_plus_minus_percentage = 0.15 - (technique / 100) * 0.1;
        let optimal_speed = distance / 2;
        speed = optimal_speed * (1 + error_plus_minus_percentage * (0, helpers_1.rand_in_range)(-1, 1));
        if (speed > max_speed) {
            speed = max_speed;
        }
        // calculate dx, dy, dz
        let dx = ((target_coords.x - this.loc.x) / d) * speed;
        let dy = ((target_coords.y - this.loc.y) / d) * speed;
        let dz = 0;
        if (lob || cross) {
            dz = ((target_coords.z - this.loc.z) / d) * speed;
        }
        dx /= 60;
        dy /= 60;
        if (lob || cross) {
            dz /= 60;
        }
        this.attempt_pass(dx, dy, dz);
    }
    choose_pass_target(team, opp) {
        let players = team.playersOnPitch.filter((player) => {
            return player != this;
        });
        // target scores for each other player
        // initially array of 10 0's
        let scores = Array(10).fill(0);
        for (let p of players) {
            let d = (0, helpers_1.dist)(this.loc, p.loc);
            // normal distribution by distance
            // if team instruction is shorter passing, reduce the standard deviation
            // if team instruction is longer passing, increase the standard deviation
            // if player instruction is shorter passing, reduce the standard deviation
            // if player instruction is longer passing, increase the standard deviation
            let std_dev = 1;
            if (team.tactics.includes("shorter_passing")) {
                // reduce standard deviation
                std_dev = 0.8;
            }
            if (team.tactics.includes("longer_passing")) {
                // increase standard deviation
                std_dev = 1.2;
            }
            if (this.instructions.includes("shorter_passing")) {
                std_dev = std_dev - 0.15;
            }
            if (this.instructions.includes("longer_passing")) {
                std_dev = std_dev + 0.15;
            }
            scores[players.indexOf(p)] += Math.exp((-0.5 * (d * d)) / (std_dev * std_dev));
            // players that the passer is currently facing have a higher chance of being passed to
            let angle = Math.atan2(p.loc.y - this.loc.y, p.loc.x - this.loc.x);
            let facing = Math.atan2(this.dy, this.dx);
            let diff = Math.abs(angle - facing);
            if (diff < Math.PI / 4) {
                scores[players.indexOf(p)] += 1;
            }
            // players under pressure have a lower chance of being passed to
            let pressure = p.calculate_pressure(opp);
            scores[players.indexOf(p)] -= pressure;
            // players in a threatening position have a higher chance of being passed to
            let threat = p.calculate_threat(team);
            scores[players.indexOf(p)] += threat;
            // sort scores
            scores.sort((a, b) => {
                return b - a;
            });
        }
        // randomly choose player
        // use decision making attribute
        // use team tactics
        // use player instructions
        let decisions = this.attributes.get_attr("decisions");
        if (decisions == undefined) {
            decisions = 25;
        }
        // lower decisions means more deviatione
        // maximum randomness = 0.5
        // minimum randomness = 0.1
        let randomness = 0.5 - (decisions / 100) * 0.4;
        let index = Math.floor(Math.random() * randomness * 10);
        let target = players[index];
        return target;
    }
    calculate_pressure(opp) {
        let opponents = opp.playersOnPitch;
        let pressure = 0;
        opponents.forEach((player) => {
            let d = (0, helpers_1.dist)(this.loc, player.loc);
            if (d < 10) {
                if (d == 0) {
                    d += 0.1;
                }
                pressure += 1 / (d * d);
            }
        });
        return pressure;
    }
    passive_movement() {
        // "brownian motion" for players
        // randomly move around in small radius around current location
        let radius = 0.05;
        let x = this.loc.x + (Math.random() - 0.5) * radius;
        let y = this.loc.y + (Math.random() - 0.5) * radius;
        // check if new location is within pitch
        if (x < 0) {
            x = 0;
        }
        if (x > this.venue.length) {
            x = this.venue.length;
        }
        if (y < 0) {
            y = 0;
        }
        if (y > this.venue.width) {
            y = this.venue.width;
        }
        this.loc = {
            x: x,
            y: y,
            z: this.loc.z,
        };
    }
    calculate_threat(team) {
        // distance to goal
        let direction = team.attacking_direction;
        let left = {
            x: 0,
            y: this.venue.width / 2,
            z: 0,
        };
        let right = {
            x: this.venue.length,
            y: this.venue.width / 2,
            z: 0,
        };
        if (direction == "left") {
            //left side goal
            let d = (0, helpers_1.dist)(this.loc, left);
            return 1 / (d * d);
        }
        else {
            //right side goal
            let d = (0, helpers_1.dist)(this.loc, right);
            return 1 / (d * d);
        }
    }
    threat_at_position(team, loc) {
        // distance to goal
        let direction = team.attacking_direction;
        let left = {
            x: 0,
            y: this.venue.width / 2,
            z: 0,
        };
        let right = {
            x: this.venue.length,
            y: this.venue.width / 2,
            z: 0,
        };
        if (direction == "left") {
            //left side goal
            let d = (0, helpers_1.dist)(loc, left);
            return 1 / (d * d);
        }
        else {
            //right side goal
            let d = (0, helpers_1.dist)(loc, right);
            return 1 / (d * d);
        }
    }
    initialize() {
        this.target_speed = 0;
        this.target_loc = ({ x: 105 / 2, y: 68 / 2, z: 0 });
        this.loc = { x: 40, y: 52, z: 0 };
        this.dx = 0;
        this.dy = 0;
        this.dz = 0;
        this.instructions = [];
    }
}
exports.PlayerOnPitch = PlayerOnPitch;
class Team extends club_1.Club {
    constructor(name) {
        super(name);
        this.tactics = [];
    }
    set playersOnPitch(players) {
        this._playersOnPitch = players;
    }
    get playersOnPitch() {
        return this._playersOnPitch;
    }
    set substitutes(substitutes) {
        this._substitutes = substitutes;
    }
    set attacking_direction(direction) {
        this._attacking_direction = direction;
    }
    get attacking_direction() {
        return this._attacking_direction;
    }
    add_instruction(instruction) {
        this.tactics.push(instruction);
    }
    remove_instruction(instruction) {
        let index = this.tactics.indexOf(instruction);
        this.tactics.splice(index, 1);
    }
    get instructions() {
        return this.tactics;
    }
}
exports.Team = Team;
class Match {
    set home(home) {
        this._home = home;
    }
    get home() {
        return this._home;
    }
    set away(away) {
        this._away = away;
    }
    get away() {
        return this._away;
    }
    set date_time(date) {
        this._date_time = date;
    }
    get date_time() {
        return this._date_time;
    }
    set venue(venue) {
        this._venue = venue;
    }
    get venue() {
        return this._venue;
    }
    record(stat, player) {
        this.stat.record(stat, player);
    }
    initialize(rules) {
        this.time = 0.0;
        this.home_goals = 0;
        this.away_goals = 0;
        this.max_time = 90.0 * 60.0;
        this.ticks = 0;
        this.TOP_LEFT = {
            x: 0,
            y: 0,
            z: 0,
        };
        this.TOP_RIGHT = {
            x: this._venue.length,
            y: 0,
            z: 0,
        };
        this.BOTTOM_LEFT = {
            x: 0,
            y: this._venue.width,
            z: 0,
        };
        this.BOTTOM_RIGHT = {
            x: this._venue.length,
            y: this._venue.width,
            z: 0,
        };
        this.ball_pos = {
            x: this.venue.dimensions.kickoff_spot.x,
            y: this.venue.width / 2,
            z: 0,
        };
        this.ball_dx = 0 / 60;
        this.ball_dy = 0 / 60;
        this.ball_dz = 0;
        this.ball_target = {
            x: this.venue.dimensions.kickoff_spot.x,
            y: this.venue.dimensions.kickoff_spot.y,
            z: 0,
        };
        let rand = Math.random();
        if (rand < 0.5) {
            this.home.attacking_direction = "right";
            this.away.attacking_direction = "left";
        }
        else {
            this.home.attacking_direction = "left";
            this.away.attacking_direction = "right";
        }
        this.half = 1;
        this.max_1st_half_time = 45.0 * 60.0;
        this.max_2nd_half_time = 45.0 * 60.0;
        if (rules.get("extra_time") == true) {
            this.possible_extra_time = true;
            this.is_extra_time = false;
            this.extra_time_half = 1;
            this.max_1st_half_extra_time = 15.0 * 60.0;
            this.max_2nd_half_extra_time = 15.0 * 60.0;
        }
        else {
            this.possible_extra_time = false;
            this.is_extra_time = false;
            this.extra_time_half = 1;
            this.max_1st_half_extra_time = 0;
            this.max_2nd_half_extra_time = 0;
        }
        if (rules.get("penalties") == true) {
            this.possible_penalties = true;
            this.is_penalties = false;
        }
        else {
            this.possible_penalties = false;
            this.is_penalties = false;
        }
        this.home.playersOnPitch.forEach((player) => {
            player.venue = this.venue;
            player.team = this.home;
            player.m = this;
        });
        this.away.playersOnPitch.forEach((player) => {
            player.venue = this.venue;
            player.team = this.away;
            player.m = this;
        });
        this.playersOnPitch = [
            ...this.home.playersOnPitch,
            ...this.away.playersOnPitch,
        ];
        this.stat = new Stat(this);
        this.background = new OffscreenCanvas(900, 900);
        (0, index_1.draw_pitch)(this.background);
        this.bitmap = this.background.transferToImageBitmap();
        let pitch = document.querySelector("#pitch");
        pitch.height = this.background.height;
        pitch.width = this.background.width;
        this.backgroundCtx = pitch.getContext("bitmaprenderer");
        this.backgroundCtx.transferFromImageBitmap(this.bitmap);
        this.foreground = document.createElement("canvas");
        this.foreground.id = "foreground";
        this.foreground.width = 900;
        this.foreground.height = this.background.height;
        pitch.insertAdjacentElement("afterend", this.foreground);
        this.update_clock();
    }
    update_clock() {
        const clock = document.querySelector("#clock");
        if (clock) {
            clock.innerHTML = this.fmt_seconds(this.time);
            setInterval(() => {
                clock.innerHTML = this.fmt_seconds(this.time);
            }, 1000);
        }
    }
    fmt_seconds(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        // pad seconds with 0 if less than 10
        if (secs < 10) {
            return `${minutes}:0${secs}`;
        }
        return `${minutes}:${secs}`;
    }
    players_decide() {
        this.away.playersOnPitch.forEach((player) => {
            player.decide_action(this);
        });
        this.home.playersOnPitch.forEach((player) => {
            player.decide_action(this);
        });
    }
    // update ball possession
    update_possession() {
        let closest = this.closest_to_ball();
        // if the ball is more than 2m away from any players,
        // possession is null
        if ((0, helpers_1.dist)(closest[0].loc, this.ball_pos) > 2 && (0, helpers_1.dist)(closest[1].loc, this.ball_pos) > 2) {
            this.player_possession = null;
            this.set_possession(null);
        }
        else {
            closest.sort((a, b) => {
                return (0, helpers_1.dist)(a.loc, this.ball_pos) - (0, helpers_1.dist)(b.loc, this.ball_pos);
            });
            this.player_possession = closest[0];
            this.set_possession(closest[0].team);
        }
    }
    closest_to_ball() {
        let closest = [];
        let temp = this.home.playersOnPitch[0];
        let min_dist = 1000;
        for (let p of this.home.playersOnPitch) {
            let d = (0, helpers_1.dist)(p.loc, this.ball_pos);
            if (d < min_dist) {
                temp = p;
                min_dist = d;
            }
        }
        closest.push(temp);
        min_dist = 1000;
        for (let p of this.away.playersOnPitch) {
            let d = (0, helpers_1.dist)(p.loc, this.ball_pos);
            if (d < min_dist) {
                temp = p;
                min_dist = d;
            }
        }
        closest.push(temp);
        return closest;
    }
    collision_detection() {
        // two players can't occupy the same space
        let radius = 0.8;
        for (let p of this.playersOnPitch) {
            for (let q of this.playersOnPitch
                .filter((player) => {
                return player != p;
            })) {
                let d = (0, helpers_1.dist)(p.loc, q.loc);
                if (d < radius) {
                    // collision
                    // move p and q apart
                    p.loc.x += (p.loc.x - q.loc.x) / 8;
                    p.loc.y += (p.loc.y - q.loc.y) / 8;
                    q.loc.x += (q.loc.x - p.loc.x) / 8;
                    q.loc.y += (q.loc.y - p.loc.y) / 8;
                }
            }
        }
        // player can't go off the screen
        for (let p of this.playersOnPitch) {
            if (p.loc.x < 0) {
                p.loc.x = 0;
            }
            if (p.loc.x > this.venue.length) {
                console.log('here');
                p.loc.x = this.venue.length;
            }
            if (p.loc.y < 0) {
                p.loc.y = 0;
            }
            if (p.loc.y > this.venue.width) {
                p.loc.y = this.venue.width;
            }
        }
        // ball can't be inside a player
        let ball_radius = 0.22;
        for (let p of this.playersOnPitch) {
            let d = (0, helpers_1.dist)(p.loc, this.ball_pos);
            if (d < ball_radius) {
                // collision
                //move ball away from player
                this.ball_pos.x += (this.ball_pos.x - p.loc.x) / 2;
                this.ball_pos.y += (this.ball_pos.y - p.loc.y) / 2;
            }
        }
    }
    move_ball() {
        this.ball_pos.x += this.ball_dx;
        this.ball_pos.y += this.ball_dy;
        this.ball_pos.z += this.ball_dz;
        // calculate decelration
        // mass = 0.43 kg
        // friction coefficient = 0.03
        // f_friction = 0.03 * 0.43 kg * 9.81 m/s/s = 0.01265 kg m/s/s
        // f_drag = 0.5 * 0.03 * pi*(0.11m)^2 * 1.2 kg/m^3 * velocity^2
        // velocity = dx * 60 + dy * 60 + dz * 60 (m/s)
        // f_total = f_friction + f_drag
        // a = f_total / mass
        let f_friction = 0.01265;
        let f_drag_x = 0.5 * 0.03 * Math.PI * 0.11 * 0.11 * 1.2 * this.ball_dx * this.ball_dx;
        let f_drag_y = 0.5 * 0.03 * Math.PI * 0.11 * 0.11 * 1.2 * this.ball_dy * this.ball_dy;
        let f_drag_z = 0.5 * 0.03 * Math.PI * 0.11 * 0.11 * 1.2 * this.ball_dz * this.ball_dz;
        let f_total_x = f_friction + f_drag_x;
        let f_total_y = f_friction + f_drag_y;
        let f_total_z = f_drag_z;
        let a_x = f_total_x / 0.43;
        let a_y = f_total_y / 0.43;
        let a_z = f_total_z / 0.43;
        // calculate new velocity
        // v = u + at
        // u = v - at
        // v = 0
        // t = 1/60
        //apply a to dx, dy, dz
        if (this.ball_dx > 0) {
            this.ball_dx -= a_x / 60;
        }
        else if (this.ball_dx < 0) {
            this.ball_dx += a_x / 60;
        }
        if (this.ball_dy > 0) {
            this.ball_dy -= a_y / 60;
        }
        else if (this.ball_dy < 0) {
            this.ball_dy += a_y / 60;
        }
        if (this.ball_dz > 0) {
            this.ball_dz -= a_z / 60;
        }
        else if (this.ball_dz < 0) {
            this.ball_dz += a_z / 60;
        }
        // if velocity is too small, set to 0
        if (this.ball_dx < 0.02 && this.ball_dx > -0.02) {
            this.ball_dx = 0;
        }
        if (this.ball_dy < 0.02 && this.ball_dy > -0.02) {
            this.ball_dy = 0;
        }
        if (this.ball_dz < 0.02 && this.ball_dz > -0.02) {
            this.ball_dz = 0;
        }
    }
    move_players() {
        this.home.playersOnPitch.forEach((player) => {
            player.move();
        });
        this.away.playersOnPitch.forEach((player) => {
            player.move();
        });
    }
    draw_agents() {
        var _a;
        let ctx = (_a = this.foreground) === null || _a === void 0 ? void 0 : _a.getContext("2d");
        if (this.foreground) {
            ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, this.foreground.width, this.foreground.height);
            this.draw_ball();
            this.draw_players();
        }
    }
    draw_ball() {
        requestAnimationFrame(() => {
            var _a;
            let ctx = (_a = this.foreground) === null || _a === void 0 ? void 0 : _a.getContext("2d");
            if (this.foreground) {
                if (ctx) {
                    let length = this.background.width;
                    let width = this.background.height;
                    if (ctx) {
                        let x = (this.ball_pos.x / this.venue.length) * length;
                        let y = (this.ball_pos.y / this.venue.width) * width;
                        // if z is larger than the radius should be larger
                        let radius = 3.4;
                        if (this.ball_pos.z > 0) {
                            radius += this.ball_pos.z * 2;
                        }
                        ctx.fillStyle = "black";
                        ctx.beginPath();
                        ctx.arc(x, y, radius, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.fillStyle = "white";
                        ctx.beginPath();
                        ctx.arc(x, y, radius - 1, 0, 2 * Math.PI);
                        ctx.fill();
                        let target_x = (this.ball_target.x / this.venue.length) * length;
                        let target_y = (this.ball_target.y / this.venue.width) * width;
                        ctx.strokeStyle = "red";
                        ctx.beginPath();
                        ctx.arc(target_x, target_y, radius, 0, 2 * Math.PI);
                        ctx.stroke();
                    }
                }
            }
        });
    }
    draw_players() {
        requestAnimationFrame(() => {
            var _a;
            let ctx = (_a = this.foreground) === null || _a === void 0 ? void 0 : _a.getContext("2d");
            if (this.foreground) {
                let length = this.background.width;
                let width = this.background.height;
                this.home.playersOnPitch.forEach((player) => {
                    let x = (player.loc.x / this.venue.length) * length;
                    let y = (player.loc.y / this.venue.width) * width;
                    if (ctx) {
                        ctx.fillStyle = "black";
                        ctx.beginPath();
                        ctx.arc(x, y, 4.4, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.fillStyle = "white";
                        ctx.beginPath();
                        ctx.arc(x, y, 3.4, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                });
                this.away.playersOnPitch.forEach((player) => {
                    let x = (player.loc.x / this.venue.length) * length;
                    let y = (player.loc.y / this.venue.width) * width;
                    if (ctx) {
                        ctx.fillStyle = "white";
                        ctx.beginPath();
                        ctx.arc(x, y, 5, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.fillStyle = "black";
                        ctx.beginPath();
                        ctx.arc(x, y, 4, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                });
            }
        });
    }
    tick() {
        var _a;
        this.time += 1 / 60;
        this.ticks += 1;
        if (this.ticks == 10) {
            this.update_possession();
            console.log((_a = this.possession) === null || _a === void 0 ? void 0 : _a.name);
            // human reaction time is roughly
            // a sixth of a second so only
            // update every 10 ticks
            this.ticks = 0;
            this.players_decide();
        }
        this.draw_agents();
        this.collision_detection();
        this.move_players();
        this.move_ball();
    }
    getKickoffPlayer(team) {
        let players = team.playersOnPitch;
        // if team has striker
        players = players.filter((player) => {
            return player.position.abbreviation == "ST";
        });
        if (players.length > 0) {
            if (players.length > 1) {
                // choose the one with better passing
                players.sort((a, b) => {
                    return a.get_attribute("passing") - b.get_attribute("passing");
                });
            }
            return players[0];
        }
        else {
            // choose most attacking player
            players.filter((player) => {
                return (player.position.abbreviation == "LW" ||
                    player.position.abbreviation == "RW");
            });
            if (players.length > 0) {
                if (players.length > 1) {
                    // choose the one with better passing
                    players.sort((a, b) => {
                        return a.get_attribute("passing") - b.get_attribute("passing");
                    });
                }
                return players[0];
            }
            else {
                players.filter((player) => {
                    return (player.position.abbreviation == "CAM" ||
                        player.position.abbreviation == "LAM" ||
                        player.position.abbreviation == "RAM");
                });
                if (players.length > 0) {
                    if (players.length > 1) {
                        // choose the one with better passing
                        players.sort((a, b) => {
                            return a.get_attribute("passing") - b.get_attribute("passing");
                        });
                    }
                    return players[0];
                }
                else {
                    players.filter((player) => {
                        return (player.position.abbreviation == "CM" ||
                            player.position.abbreviation == "LM" ||
                            player.position.abbreviation == "RM");
                    });
                    if (players.length > 0) {
                        if (players.length > 1) {
                            // choose the one with better passing
                            players.sort((a, b) => {
                                return a.get_attribute("passing") - b.get_attribute("passing");
                            });
                        }
                        return players[0];
                    }
                    else {
                        players.filter((player) => {
                            return (player.position.abbreviation == "CDM" ||
                                player.position.abbreviation == "LCM" ||
                                player.position.abbreviation == "CM" ||
                                player.position.abbreviation == "RCM");
                        });
                        if (players.length > 0) {
                            if (players.length > 1) {
                                // choose the one with better passing
                                players.sort((a, b) => {
                                    return (a.get_attribute("passing") - b.get_attribute("passing"));
                                });
                            }
                            return players[0];
                        }
                        else {
                            players.filter((player) => {
                                return (player.position.abbreviation == "CDM" ||
                                    player.position.abbreviation == "LDM" ||
                                    player.position.abbreviation == "RDM");
                            });
                            if (players.length > 0) {
                                if (players.length > 1) {
                                    // choose the one with better passing
                                    players.sort((a, b) => {
                                        return (a.get_attribute("passing") - b.get_attribute("passing"));
                                    });
                                }
                                return players[0];
                            }
                            else
                                return players[0];
                        }
                    }
                }
            }
        }
    }
    set_possession(team) {
        if (team instanceof Team) {
            this.possession = team;
            this.outOfPossession = team == this.home ? this.away : this.home;
        }
        else {
            this.possession = null;
            this.outOfPossession = null;
        }
    }
    do_kickoff(half) {
        const rand = Math.random();
        let team = 0;
        if (!half) {
            if (rand < 0.5) {
                this.set_possession(this.home);
                this.team_kicked_off_first = this.home;
            }
            else {
                this.set_possession(this.away);
                team = 1;
                this.team_kicked_off_first = this.away;
            }
        }
        else {
            if (this.team_kicked_off_first == this.home) {
                this.set_possession(this.away);
                team = 1;
            }
            else {
                this.set_possession(this.home);
                team = 0;
            }
        }
        let t = team == 0 ? this.home : this.away;
        let o = team == 0 ? this.away : this.home;
        const p1 = this.getKickoffPlayer(t);
        p1.loc.x = this.venue.dimensions.kickoff_spot.x;
        if (p1.team.attacking_direction == "left") {
            p1.loc.x -= 1;
        }
        else {
            p1.loc.x += 1;
        }
        p1.loc.y = this.venue.dimensions.kickoff_spot.y;
        this.player_possession = p1;
        this.player_possession.pass(t, o);
    }
    play() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initialize(new Map([
                ["extra_time", false],
                ["penalties", false],
            ]));
            while (this.half == 1 && this.time < this.max_1st_half_time) {
                if (!this.started) {
                    this.do_kickoff(false);
                    this.started = true;
                }
                let now = luxon_1.DateTime.now();
                this.tick();
                if (luxon_1.DateTime.now().diff(now).milliseconds < 1000 / 60) {
                    yield new Promise((resolve) => setTimeout(resolve, 1000 / 60 - luxon_1.DateTime.now().diff(now).milliseconds));
                }
            }
            this.half = 2;
            this.started = false;
            while (this.half == 2 && this.time < this.max_2nd_half_time) {
                if (!this.started) {
                    this.do_kickoff(true);
                    this.started = true;
                }
                let now = luxon_1.DateTime.now();
                this.tick();
                if (luxon_1.DateTime.now().diff(now).milliseconds < 1000 / 60) {
                    yield new Promise((resolve) => setTimeout(resolve, 1000 / 60 - luxon_1.DateTime.now().diff(now).milliseconds));
                }
            }
            if (this.possible_extra_time) {
                if (this.home_goals == this.away_goals) {
                    this.extra_time_half = 1;
                    this.is_extra_time = true;
                    this.started = false;
                    while (this.extra_time_half == 1 &&
                        this.time < this.max_1st_half_extra_time) {
                        if (!this.started) {
                            this.do_kickoff(false);
                            this.started = true;
                        }
                        let now = luxon_1.DateTime.now();
                        this.tick();
                        if (luxon_1.DateTime.now().diff(now).milliseconds < 1000 / 60) {
                            yield new Promise((resolve) => setTimeout(resolve, 1000 / 60 - luxon_1.DateTime.now().diff(now).milliseconds));
                        }
                    }
                    this.extra_time_half = 2;
                    this.started = false;
                    while (this.extra_time_half == 2 &&
                        this.time < this.max_2nd_half_extra_time) {
                        if (!this.started) {
                            this.do_kickoff(true);
                            this.started = true;
                        }
                        let now = luxon_1.DateTime.now();
                        this.tick();
                        if (luxon_1.DateTime.now().diff(now).milliseconds < 1000 / 60) {
                            yield new Promise((resolve) => setTimeout(resolve, 1000 / 60 - luxon_1.DateTime.now().diff(now).milliseconds));
                        }
                    }
                }
            }
        });
    }
}
exports.Match = Match;
class Stat {
    constructor(match) {
        let i = 0;
        this.player_stats = new PlayerMatchStats();
        for (let _ of match.playersOnPitch) {
            this.player_stats.push(i);
        }
    }
    record(stat, type) {
        if (type instanceof person_1.Player) {
            // record player stat
            this.player_stats.record(stat);
        }
    }
}
exports.Stat = Stat;
class PlayerMatchStats {
    constructor() {
        this._id = 0;
        this._stats = new Map();
    }
    push(id) {
        this._id = id;
        this._stats.set(id, {
            goals: 0,
            assists: 0,
            passes_attempted: 0,
            passes_completed: 0,
            shots: 0,
            shots_on_target: 0,
            tackles_attempted: 0,
            tackles_completed: 0,
            interceptions: 0,
            fouls: 0,
            fouls_suffered: 0,
            yellow_cards: 0,
            red_cards: 0,
            saves: 0,
            goals_conceded: 0,
            clean_sheets: 0,
            penalties_scored: 0,
            penalties_missed: 0,
            penalties_saved: 0,
            own_goals: 0,
            minutes_played: 0,
            xG: 0,
            xA: 0,
        });
    }
    record(stat) {
        let s = this._stats.get(this._id);
        if (s) {
            if (stat == "passes_attempted") {
                s.passes_attempted += 1;
            }
            if (stat == "passes_completed") {
                s.passes_completed += 1;
            }
            if (stat == "shots") {
                s.shots += 1;
            }
            if (stat == "shots_on_target") {
                s.shots_on_target += 1;
            }
        }
    }
}

},{"../common/helpers":2,"./club":4,"./index":6,"./person":7,"./place":8,"luxon":1}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw_pitch = void 0;
const game_1 = require("./game");
const person_1 = require("./person");
const place_1 = require("./place");
const person_2 = require("./person");
const helpers_1 = require("../common/helpers");
const types_1 = require("../common/types");
const team1 = new game_1.Team("Barcelona");
const team2 = new game_1.Team("Real Madrid");
const match = new game_1.Match();
const venue = new place_1.Venue();
venue.pitch_dimensions = [105, 68];
match.venue = venue;
venue.name = "Camp Nou";
venue.capacity = 99354;
const city = new place_1.City();
city.name = "Barcelona";
const country = new place_1.Country();
country.name = "Spain";
city.country = country;
venue.city = city;
const positions = [
    { name: "Goalkeeper", abbreviation: "GK" },
    { name: "Left Back", abbreviation: "LB" },
    { name: "Right Back", abbreviation: "RB" },
    { name: "Right Center Back", abbreviation: "RCB" },
    { name: "Left Center Back", abbreviation: "LCB" },
    { name: "Defensive Midfielder", abbreviation: "DM" },
    { name: "Right Central Midfielder", abbreviation: "RCM" },
    { name: "Left Central Midfielder", abbreviation: "LCM" },
    { name: "Left Winger", abbreviation: "LW" },
    { name: "Right Winger", abbreviation: "RW" },
    { name: "Striker", abbreviation: "ST" },
];
let players1 = [];
let players2 = [];
for (let i = 0; i < 22; i++) {
    const p = new game_1.PlayerOnPitch();
    p.name = "Player " + i;
    p.position = new person_1.Position();
    p.position.name = positions[i % 11].name;
    p.position.abbreviation = positions[i % 11].abbreviation;
    p.initialize();
    if (i < 11) {
        players1.push(p);
    }
    else {
        players2.push(p);
    }
}
team1.playersOnPitch = players1;
team2.playersOnPitch = players2;
for (let i = 0; i < 22; i++) {
    let p1;
    if (i < 11) {
        p1 = team1.playersOnPitch[i];
    }
    else {
        p1 = team2.playersOnPitch[i - 11];
    }
    p1.attributes = new person_2.Attributes();
    let is_gk = false;
    if (p1.position.name === "Goalkeeper") {
        is_gk = true;
    }
    if (is_gk) {
        for (let a = 0; a < types_1.gk_attribute_names.length; a++) {
            p1.attributes.set_attr(types_1.gk_attribute_names[a], Math.floor(Math.random() * 100) + 1);
        }
    }
    else {
        for (let a = 0; a < types_1.attribute_names.length; a++) {
            p1.attributes.set_attr(types_1.attribute_names[a], Math.floor(Math.random() * 100) + 1);
        }
    }
}
venue.init_pitch_dimensions();
function draw_pitch(canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const length = 800;
        const width = venue.dimensions.width * (length / venue.dimensions.length);
        canvas.width = length + 100;
        canvas.height = width + 100;
        ctx.fillStyle = "#00ae00";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ae00";
        ctx.fillRect(50, 50, length, width);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1.5;
        ctx.rect(50, 50, length, width);
        ctx.stroke();
        // draw white center line
        ctx.beginPath();
        ctx.moveTo(length / 2 + 50, 50);
        ctx.lineTo(length / 2 + 50, width + 50);
        ctx.stroke();
        // draw white center circle
        const radius = (place_1.PitchDimensions.center_circle_radius / venue.dimensions.length) * length;
        ctx.beginPath();
        ctx.arc(length / 2 + 50, width / 2 + 50, radius, 0, 2 * Math.PI);
        ctx.stroke();
        // draw kickoff spot
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(length / 2 + 50, width / 2 + 50, 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        // draw white penalty area
        let x1 = (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length;
        let y1 = (place_1.PitchDimensions.penalty_area_width / venue.dimensions.width) * width;
        ctx.beginPath();
        ctx.rect(50, width / 2 - y1 / 2 + 50, x1, y1);
        ctx.stroke();
        // draw white penalty spot
        x1 =
            (place_1.PitchDimensions.penalty_spot_distance / venue.dimensions.length) *
                length +
                50;
        y1 = width / 2 + 50;
        ctx.beginPath();
        ctx.arc(x1, y1, 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        // draw white six yard box
        x1 =
            (place_1.PitchDimensions.six_yard_box_length / venue.dimensions.length) * length;
        y1 = (place_1.PitchDimensions.six_yard_box_width / venue.dimensions.width) * width;
        ctx.beginPath();
        ctx.rect(50, width / 2 - y1 / 2 + 50, x1, y1);
        ctx.stroke();
        // draw white goal area
        x1 = (place_1.PitchDimensions.goal_depth / venue.dimensions.length) * length;
        y1 = (place_1.PitchDimensions.goal_width / venue.dimensions.width) * width;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(50 - x1, width / 2 - y1 / 2 + 50, x1, y1);
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(50 - x1, width / 2 - y1 / 2 + 50, x1, y1);
        ctx.stroke();
        //draw corner arc
        ctx.beginPath();
        const one_meter = (1 / venue.dimensions.length) * length;
        ctx.arc(50, 50, one_meter, 0, (1 / 2) * Math.PI);
        ctx.stroke();
        //other corner arc
        ctx.beginPath();
        ctx.arc(50, width + 50, one_meter, 0, (3 / 2) * Math.PI, true);
        ctx.stroke();
        // other side
        ctx.beginPath();
        ctx.arc(length + 50, 50, one_meter, (1 / 2) * Math.PI, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(length + 50, width + 50, one_meter, Math.PI, (3 / 2) * Math.PI);
        ctx.stroke();
        x1 = (place_1.PitchDimensions.goal_depth / venue.dimensions.length) * length;
        y1 = (place_1.PitchDimensions.goal_width / venue.dimensions.width) * width;
        ctx.beginPath();
        ctx.rect(length + 50, width / 2 - y1 / 2 + 50, x1, y1);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        x1 =
            (place_1.PitchDimensions.six_yard_box_length / venue.dimensions.length) * length;
        y1 = (place_1.PitchDimensions.six_yard_box_width / venue.dimensions.width) * width;
        ctx.beginPath();
        ctx.rect(length - x1 + 50, width / 2 - y1 / 2 + 50, x1, y1);
        ctx.stroke();
        x1 =
            (place_1.PitchDimensions.penalty_spot_distance / venue.dimensions.length) *
                length;
        y1 = width / 2 + 50;
        const pen_spot2 = [
            (place_1.PitchDimensions.penalty_spot_distance / venue.dimensions.length) *
                length,
            width / 2 + 50,
        ];
        ctx.beginPath();
        ctx.arc(length - x1 + 50, y1, 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        x1 =
            (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length;
        y1 = (place_1.PitchDimensions.penalty_area_width / venue.dimensions.width) * width;
        ctx.beginPath();
        ctx.rect(length - x1 + 50, width / 2 - y1 / 2 + 50, x1, y1);
        ctx.stroke();
        // penalty arcs
        const pen_radius = (place_1.PitchDimensions.penalty_arc_radius / venue.dimensions.length) * length;
        let x = length -
            (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length +
            50;
        // https://en.wikipedia.org/wiki/Circular_segment#Radius_and_central_angle
        const chord_length = (5.419 / venue.dimensions.length) * length;
        y1 = width / 2 + chord_length + 50;
        const y2 = width / 2 - chord_length + 50;
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(x, y1);
        ctx.arcTo(x - (0, helpers_1.meters_to_px)(3.65, venue.dimensions.length, length), width / 2 + 50, x, y2, pen_radius);
        ctx.stroke();
        x =
            (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length +
                50;
        ctx.beginPath();
        ctx.moveTo(x, y1);
        ctx.arcTo(x + (0, helpers_1.meters_to_px)(3.65, venue.dimensions.length, length), width / 2 + 50, x, y2, pen_radius);
        ctx.stroke();
    }
}
exports.draw_pitch = draw_pitch;
match.home = team1;
match.away = team2;
match.play();
//let areas = new PitchArea();
//let gk_area = PitchArea.

},{"../common/helpers":2,"../common/types":3,"./game":5,"./person":7,"./place":8}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instruction = exports.Role = exports.Position = exports.Player = exports.Attributes = void 0;
class Person {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set dob(dob) {
        this._dob = dob;
    }
    get dob() {
        return this._dob;
    }
    calculate_age(now) {
        // calculate age (years and days)
        console.log(now);
        const diff = now.diff(this._dob, ["years", "days"]);
        return diff.years + " years, " + diff.days + " days";
    }
    set nationalities(nationalities) {
        this._nationalities = nationalities;
    }
    get nationalities() {
        return this._nationalities;
    }
    set place_of_birth(place_of_birth) {
        this._place_of_birth = place_of_birth;
    }
    get place_of_birth() {
        return this._place_of_birth;
    }
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    set weight(weight) {
        this._weight = weight;
    }
    get weight() {
        return this._weight;
    }
}
class Attributes {
    constructor() {
        this._attributes = new Map();
    }
    set attributes(attributes) {
        this._attributes = attributes;
    }
    get attributes() {
        return this._attributes;
    }
    get_attr(name) {
        return this._attributes.get(name);
    }
    set_attr(name, value) {
        this._attributes.set(name, value);
    }
}
exports.Attributes = Attributes;
class Player extends Person {
    set attributes(attr) {
        this._attributes = attr;
    }
    get attributes() {
        return this._attributes;
    }
    get_attribute(name) {
        let attr = this._attributes.get_attr(name);
        if (typeof attr === "number") {
            return attr;
        }
        return 0;
    }
    set positions(positions) {
        this._positions = positions;
    }
}
exports.Player = Player;
class Position {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set abbreviation(abbreviation) {
        this._abbreviation = abbreviation;
    }
    get abbreviation() {
        return this._abbreviation;
    }
    set roles(roles) {
        this._roles = roles;
    }
}
exports.Position = Position;
class Role {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set abbreviation(abbreviation) {
        this._abbreviation = abbreviation;
    }
    get abbreviation() {
        return this._abbreviation;
    }
    set positions(positions) {
        this._positions = positions;
    }
    get positions() {
        return this._positions;
    }
    set primary_attributes(primary_attributes) {
        this._primary_attributes = primary_attributes;
    }
    get primary_attributes() {
        return this._primary_attributes;
    }
    set secondary_attributes(secondary_attributes) {
        this._secondary_attributes = secondary_attributes;
    }
    get secondary_attributes() {
        return this._secondary_attributes;
    }
    set description(description) {
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set is_goalkeeper(is_goalkeeper) {
        this._is_goalkeeper = is_goalkeeper;
    }
    get is_goalkeeper() {
        return this._is_goalkeeper;
    }
    set tactical_instructions(tactical_instructions) {
        this._tactical_instructions = tactical_instructions;
    }
}
exports.Role = Role;
class Instruction {
    set description(description) {
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set instruction(instruction) {
        this._instruction = instruction;
    }
    get instruction() {
        return this._instruction;
    }
}
exports.Instruction = Instruction;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PitchDimensions = exports.Venue = exports.City = exports.Country = void 0;
class Place {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class Country extends Place {
    set flag(flag) {
        this._flag = flag;
    }
    get flag() {
        return this._flag;
    }
    set population(population) {
        this._population = population;
    }
    get population() {
        return this._population;
    }
    set capital(capital) {
        this._capital = capital;
    }
    get capital() {
        return this._capital;
    }
    set currency(currency) {
        this._currency = currency;
    }
    get currency() {
        return this._currency;
    }
    set languages(languages) {
        this._languages = languages;
    }
    get languages() {
        return this._languages;
    }
}
exports.Country = Country;
class City extends Place {
    set population(population) {
        this._population = population;
    }
    get population() {
        return this._population;
    }
    set country(country) {
        this._country = country;
    }
    get country() {
        return this._country;
    }
}
exports.City = City;
class Venue extends Place {
    set capacity(capacity) {
        this._capacity = capacity;
    }
    get capacity() {
        return this._capacity;
    }
    set city(city) {
        this._city = city;
    }
    get city() {
        return this._city;
    }
    set pitch_dimensions(pitch_dimensions) {
        this.length = pitch_dimensions[0];
        this.width = pitch_dimensions[1];
        this.init_pitch_dimensions();
    }
    init_pitch_dimensions() {
        this._dimensions = new PitchDimensions();
        this._dimensions.length = this.length;
        this._dimensions.width = this.width;
        this._dimensions.init();
    }
    get dimensions() {
        return this._dimensions;
    }
}
exports.Venue = Venue;
class PitchDimensions {
    set length(length) {
        this._length = length;
    }
    get length() {
        return this._length;
    }
    set width(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
    init() {
        this.penalty_spot_1_coords = {
            x: this.width / 2,
            y: PitchDimensions.penalty_spot_distance,
            z: 0,
        };
        this.penalty_spot_2_coords = {
            x: this.width / 2,
            y: this.length - PitchDimensions.penalty_spot_distance,
            z: 0,
        };
        this.kickoff_spot = {
            x: this.length / 2,
            y: this.width / 2,
            z: 0,
        };
        this.goal_1 = {
            point_1: {
                x: this.width / 2 - PitchDimensions.goal_width / 2,
                y: 0,
                z: 0,
            },
            point_2: {
                x: this.width / 2 + PitchDimensions.goal_width / 2,
                y: 0,
                z: PitchDimensions.goal_height,
            },
        };
        this.goal_2 = {
            point_1: {
                x: this.width / 2 - PitchDimensions.goal_width / 2,
                y: this.length,
                z: 0,
            },
            point_2: {
                x: this.width / 2 + PitchDimensions.goal_width / 2,
                y: this.length,
                z: PitchDimensions.goal_height,
            },
        };
    }
}
exports.PitchDimensions = PitchDimensions;
PitchDimensions.center_circle_radius = 9.15;
PitchDimensions.penalty_area_length = 16.5;
PitchDimensions.penalty_area_width = 40.32;
PitchDimensions.penalty_spot_distance = 11;
PitchDimensions.six_yard_box_length = 5.5;
PitchDimensions.six_yard_box_width = 18.32;
PitchDimensions.goal_width = 7.32;
PitchDimensions.goal_height = 2.44;
PitchDimensions.goal_depth = 2.44;
PitchDimensions.penalty_arc_radius = 9.15;

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbHV4b24vYnVpbGQvY2pzLWJyb3dzZXIvbHV4b24uanMiLCJzcmMvY29tbW9uL2hlbHBlcnMudHMiLCJzcmMvY29tbW9uL3R5cGVzLnRzIiwic3JjL3dvcmtlci9jbHViLnRzIiwic3JjL3dvcmtlci9nYW1lLnRzIiwic3JjL3dvcmtlci9pbmRleC50cyIsInNyYy93b3JrZXIvcGVyc29uLnRzIiwic3JjL3dvcmtlci9wbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlvUEEsU0FBZ0IsZUFBZSxDQUFDLElBQWUsRUFBRSxLQUFhO0lBQzVELE9BQU8sQ0FDTCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUMxQixDQUFDO0FBQ0osQ0FBQztBQVRELDBDQVNDO0FBRUQsU0FBZ0IsWUFBWSxDQUMxQixNQUFjLEVBQ2QsWUFBb0IsRUFDcEIsTUFBYztJQUVkLE9BQU8sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzFDLENBQUM7QUFORCxvQ0FNQztBQUVELFNBQWdCLElBQUksQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUN2QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUZELG9CQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLENBQVMsRUFBRSxLQUF1QjtJQUN6RCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFGRCxzQ0FFQzs7Ozs7O0FDL0JELDJDQUF5RDtBQWtCekQsU0FBUyxNQUFNLENBQUMsRUFBUSxFQUFFLENBQVM7SUFDakMsSUFDRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDM0M7UUFDQSxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEUsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ1osT0FBTyxDQUFDLENBQUM7S0FDVjtJQUVELE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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LE9BQU8sRUFBRTtnQkFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLFVBQVUsR0FBRyxDQUFDO2dCQUNsRCxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELE9BQU8sRUFBRTtnQkFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLFVBQVUsR0FBRyxDQUFDO2dCQUNsRCxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ2QsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxXQUFXO2FBQy9CO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBek00QiwwQ0FBZTtBQWdKckMsb0NBQW9CLEdBQUcsSUFBSSxDQUFDO0FBQzVCLG1DQUFtQixHQUFHLElBQUksQ0FBQztBQUMzQixrQ0FBa0IsR0FBRyxLQUFLLENBQUM7QUFDM0IscUNBQXFCLEdBQUcsRUFBRSxDQUFDO0FBQzNCLG1DQUFtQixHQUFHLEdBQUcsQ0FBQztBQUMxQixrQ0FBa0IsR0FBRyxLQUFLLENBQUM7QUFDM0IsMEJBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsMkJBQVcsR0FBRyxJQUFJLENBQUM7QUFDbkIsMEJBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsa0NBQWtCLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpO1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7XG4gIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICB2YXIgaSA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxuXG4vLyB0aGVzZSBhcmVuJ3QgcmVhbGx5IHByaXZhdGUsIGJ1dCBub3IgYXJlIHRoZXkgcmVhbGx5IHVzZWZ1bCB0byBkb2N1bWVudFxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgTHV4b25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKEx1eG9uRXJyb3IsIF9FcnJvcik7XG4gIGZ1bmN0aW9uIEx1eG9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIF9FcnJvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgcmV0dXJuIEx1eG9uRXJyb3I7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgSW52YWxpZERhdGVUaW1lRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWREYXRlVGltZUVycm9yLCBfTHV4b25FcnJvcik7XG4gIGZ1bmN0aW9uIEludmFsaWREYXRlVGltZUVycm9yKHJlYXNvbikge1xuICAgIHJldHVybiBfTHV4b25FcnJvci5jYWxsKHRoaXMsIFwiSW52YWxpZCBEYXRlVGltZTogXCIgKyByZWFzb24udG9NZXNzYWdlKCkpIHx8IHRoaXM7XG4gIH1cbiAgcmV0dXJuIEludmFsaWREYXRlVGltZUVycm9yO1xufShMdXhvbkVycm9yKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgSW52YWxpZEludGVydmFsRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yMikge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkSW50ZXJ2YWxFcnJvciwgX0x1eG9uRXJyb3IyKTtcbiAgZnVuY3Rpb24gSW52YWxpZEludGVydmFsRXJyb3IocmVhc29uKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yMi5jYWxsKHRoaXMsIFwiSW52YWxpZCBJbnRlcnZhbDogXCIgKyByZWFzb24udG9NZXNzYWdlKCkpIHx8IHRoaXM7XG4gIH1cbiAgcmV0dXJuIEludmFsaWRJbnRlcnZhbEVycm9yO1xufShMdXhvbkVycm9yKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgSW52YWxpZER1cmF0aW9uRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yMykge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkRHVyYXRpb25FcnJvciwgX0x1eG9uRXJyb3IzKTtcbiAgZnVuY3Rpb24gSW52YWxpZER1cmF0aW9uRXJyb3IocmVhc29uKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yMy5jYWxsKHRoaXMsIFwiSW52YWxpZCBEdXJhdGlvbjogXCIgKyByZWFzb24udG9NZXNzYWdlKCkpIHx8IHRoaXM7XG4gIH1cbiAgcmV0dXJuIEludmFsaWREdXJhdGlvbkVycm9yO1xufShMdXhvbkVycm9yKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yNCkge1xuICBfaW5oZXJpdHNMb29zZShDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciwgX0x1eG9uRXJyb3I0KTtcbiAgZnVuY3Rpb24gQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cbiAgcmV0dXJuIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yO1xufShMdXhvbkVycm9yKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgSW52YWxpZFVuaXRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I1KSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRVbml0RXJyb3IsIF9MdXhvbkVycm9yNSk7XG4gIGZ1bmN0aW9uIEludmFsaWRVbml0RXJyb3IodW5pdCkge1xuICAgIHJldHVybiBfTHV4b25FcnJvcjUuY2FsbCh0aGlzLCBcIkludmFsaWQgdW5pdCBcIiArIHVuaXQpIHx8IHRoaXM7XG4gIH1cbiAgcmV0dXJuIEludmFsaWRVbml0RXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBJbnZhbGlkQXJndW1lbnRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I2KSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRBcmd1bWVudEVycm9yLCBfTHV4b25FcnJvcjYpO1xuICBmdW5jdGlvbiBJbnZhbGlkQXJndW1lbnRFcnJvcigpIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3I2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gSW52YWxpZEFyZ3VtZW50RXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBab25lSXNBYnN0cmFjdEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjcpIHtcbiAgX2luaGVyaXRzTG9vc2UoWm9uZUlzQWJzdHJhY3RFcnJvciwgX0x1eG9uRXJyb3I3KTtcbiAgZnVuY3Rpb24gWm9uZUlzQWJzdHJhY3RFcnJvcigpIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3I3LmNhbGwodGhpcywgXCJab25lIGlzIGFuIGFic3RyYWN0IGNsYXNzXCIpIHx8IHRoaXM7XG4gIH1cbiAgcmV0dXJuIFpvbmVJc0Fic3RyYWN0RXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG4gPSBcIm51bWVyaWNcIixcbiAgcyA9IFwic2hvcnRcIixcbiAgbCA9IFwibG9uZ1wiO1xudmFyIERBVEVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG5cbn07XG52YXIgREFURV9NRUQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG5cbn07XG52YXIgREFURV9NRURfV0lUSF9XRUVLREFZID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBzXG59O1xudmFyIERBVEVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogblxufTtcbnZhciBEQVRFX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGxcbn07XG52YXIgVElNRV9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogblxufTtcbnZhciBUSU1FX1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG5cbn07XG52YXIgVElNRV9XSVRIX1NIT1JUX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogc1xufTtcbnZhciBUSU1FX1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG52YXIgVElNRV8yNF9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiXG59O1xudmFyIFRJTUVfMjRfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiXG59O1xudmFyIFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gIHRpbWVab25lTmFtZTogc1xufTtcbnZhciBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gIHRpbWVab25lTmFtZTogbFxufTtcbnZhciBEQVRFVElNRV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xudmFyIERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG5cbn07XG52YXIgREFURVRJTUVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG52YXIgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG5cbn07XG52YXIgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogcyxcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xudmFyIERBVEVUSU1FX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xudmFyIERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xudmFyIERBVEVUSU1FX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xudmFyIERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xudmFyIFpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBab25lKCkge31cbiAgdmFyIF9wcm90byA9IFpvbmUucHJvdG90eXBlO1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgX3Byb3RvLm9mZnNldE5hbWUgPSBmdW5jdGlvbiBvZmZzZXROYW1lKHRzLCBvcHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyB2YWx1ZSBhcyBhIHN0cmluZ1xuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG9mZnNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0cyAnbmFycm93JywgJ3Nob3J0Jywgb3IgJ3RlY2hpZScuIFJldHVybmluZyAnKzYnLCAnKzA2OjAwJywgb3IgJyswNjAwJyByZXNwZWN0aXZlbHlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by5mb3JtYXRPZmZzZXQgPSBmdW5jdGlvbiBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBvZmZzZXQgaW4gbWludXRlcyBmb3IgdGhpcyB6b25lIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBjb21wdXRlIHRoZSBvZmZzZXRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi87XG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgdmFsaWQuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovO1xuICBfY3JlYXRlQ2xhc3MoWm9uZSwgW3tcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB6b25lXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgem9uZS5cbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlhbmFOYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpc1VuaXZlcnNhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFpvbmU7XG59KCk7XG5cbnZhciBzaW5nbGV0b24kMSA9IG51bGw7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbnZhciBTeXN0ZW1ab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShTeXN0ZW1ab25lLCBfWm9uZSk7XG4gIGZ1bmN0aW9uIFN5c3RlbVpvbmUoKSB7XG4gICAgcmV0dXJuIF9ab25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICB2YXIgX3Byb3RvID0gU3lzdGVtWm9uZS5wcm90b3R5cGU7XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikge1xuICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlO1xuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqLztcbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KHRzKSB7XG4gICAgcmV0dXJuIC1uZXcgRGF0ZSh0cykuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfY3JlYXRlQ2xhc3MoU3lzdGVtWm9uZSwgW3tcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogLyoqIEBvdmVycmlkZSAqKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJzeXN0ZW1cIjtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaW5zdGFuY2VcIixcbiAgICBnZXQ6XG4gICAgLyoqXG4gICAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBsb2NhbCB6b25lXG4gICAgICogQHJldHVybiB7U3lzdGVtWm9uZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoc2luZ2xldG9uJDEgPT09IG51bGwpIHtcbiAgICAgICAgc2luZ2xldG9uJDEgPSBuZXcgU3lzdGVtWm9uZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNpbmdsZXRvbiQxO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3lzdGVtWm9uZTtcbn0oWm9uZSk7XG5cbnZhciBkdGZDYWNoZSA9IHt9O1xuZnVuY3Rpb24gbWFrZURURih6b25lKSB7XG4gIGlmICghZHRmQ2FjaGVbem9uZV0pIHtcbiAgICBkdGZDYWNoZVt6b25lXSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICAgIHRpbWVab25lOiB6b25lLFxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgIGVyYTogXCJzaG9ydFwiXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGR0ZkNhY2hlW3pvbmVdO1xufVxudmFyIHR5cGVUb1BvcyA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDEsXG4gIGRheTogMixcbiAgZXJhOiAzLFxuICBob3VyOiA0LFxuICBtaW51dGU6IDUsXG4gIHNlY29uZDogNlxufTtcbmZ1bmN0aW9uIGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICB2YXIgZm9ybWF0dGVkID0gZHRmLmZvcm1hdChkYXRlKS5yZXBsYWNlKC9cXHUyMDBFL2csIFwiXCIpLFxuICAgIHBhcnNlZCA9IC8oXFxkKylcXC8oXFxkKylcXC8oXFxkKykgKEFEfEJDKSw/IChcXGQrKTooXFxkKyk6KFxcZCspLy5leGVjKGZvcm1hdHRlZCksXG4gICAgZk1vbnRoID0gcGFyc2VkWzFdLFxuICAgIGZEYXkgPSBwYXJzZWRbMl0sXG4gICAgZlllYXIgPSBwYXJzZWRbM10sXG4gICAgZmFkT3JCYyA9IHBhcnNlZFs0XSxcbiAgICBmSG91ciA9IHBhcnNlZFs1XSxcbiAgICBmTWludXRlID0gcGFyc2VkWzZdLFxuICAgIGZTZWNvbmQgPSBwYXJzZWRbN107XG4gIHJldHVybiBbZlllYXIsIGZNb250aCwgZkRheSwgZmFkT3JCYywgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdO1xufVxuZnVuY3Rpb24gcGFydHNPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcbiAgdmFyIGZpbGxlZCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1hdHRlZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfZm9ybWF0dGVkJGkgPSBmb3JtYXR0ZWRbaV0sXG4gICAgICB0eXBlID0gX2Zvcm1hdHRlZCRpLnR5cGUsXG4gICAgICB2YWx1ZSA9IF9mb3JtYXR0ZWQkaS52YWx1ZTtcbiAgICB2YXIgcG9zID0gdHlwZVRvUG9zW3R5cGVdO1xuICAgIGlmICh0eXBlID09PSBcImVyYVwiKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbGxlZDtcbn1cbnZhciBpYW5hWm9uZUNhY2hlID0ge307XG4vKipcbiAqIEEgem9uZSBpZGVudGlmaWVkIGJ5IGFuIElBTkEgaWRlbnRpZmllciwgbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xudmFyIElBTkFab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShJQU5BWm9uZSwgX1pvbmUpO1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBab25lIG5hbWVcbiAgICogQHJldHVybiB7SUFOQVpvbmV9XG4gICAqL1xuICBJQU5BWm9uZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobmFtZSkge1xuICAgIGlmICghaWFuYVpvbmVDYWNoZVtuYW1lXSkge1xuICAgICAgaWFuYVpvbmVDYWNoZVtuYW1lXSA9IG5ldyBJQU5BWm9uZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGlhbmFab25lQ2FjaGVbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgbG9jYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqLztcbiAgSUFOQVpvbmUucmVzZXRDYWNoZSA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGUoKSB7XG4gICAgaWFuYVpvbmVDYWNoZSA9IHt9O1xuICAgIGR0ZkNhY2hlID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaXMgYSB2YWxpZCBzcGVjaWZpZXIuIFRoaXMgb25seSBjaGVja3MgdGhlIHN0cmluZydzIGZvcm1hdCwgbm90IHRoYXQgdGhlIHNwZWNpZmllciBpZGVudGlmaWVzIGEga25vd24gem9uZTsgc2VlIGlzVmFsaWRab25lIGZvciB0aGF0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBzdHJpbmcgdG8gY2hlY2sgdmFsaWRpdHkgb25cbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlIGZvciBzb21lIHZhbGlkIElBTkEgbmFtZXMuIFVzZSBpc1ZhbGlkWm9uZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIgPSBmdW5jdGlvbiBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkWm9uZShzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpZGVudGlmaWVzIGEgcmVhbCB6b25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gVGhlIHN0cmluZyB0byBjaGVja1xuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gZmFsc2VcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIElBTkFab25lLmlzVmFsaWRab25lID0gZnVuY3Rpb24gaXNWYWxpZFpvbmUoem9uZSkge1xuICAgIGlmICghem9uZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICAgIHRpbWVab25lOiB6b25lXG4gICAgICB9KS5mb3JtYXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIElBTkFab25lKG5hbWUpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIF90aGlzLnpvbmVOYW1lID0gbmFtZTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgX3RoaXMudmFsaWQgPSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShuYW1lKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICB2YXIgX3Byb3RvID0gSUFOQVpvbmUucHJvdG90eXBlO1xuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUodHMsIF9yZWYpIHtcbiAgICB2YXIgZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICBsb2NhbGUgPSBfcmVmLmxvY2FsZTtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUsIHRoaXMubmFtZSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqLztcbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KHRzKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0cyk7XG4gICAgaWYgKGlzTmFOKGRhdGUpKSByZXR1cm4gTmFOO1xuICAgIHZhciBkdGYgPSBtYWtlRFRGKHRoaXMubmFtZSk7XG4gICAgdmFyIF9yZWYyID0gZHRmLmZvcm1hdFRvUGFydHMgPyBwYXJ0c09mZnNldChkdGYsIGRhdGUpIDogaGFja3lPZmZzZXQoZHRmLCBkYXRlKSxcbiAgICAgIHllYXIgPSBfcmVmMlswXSxcbiAgICAgIG1vbnRoID0gX3JlZjJbMV0sXG4gICAgICBkYXkgPSBfcmVmMlsyXSxcbiAgICAgIGFkT3JCYyA9IF9yZWYyWzNdLFxuICAgICAgaG91ciA9IF9yZWYyWzRdLFxuICAgICAgbWludXRlID0gX3JlZjJbNV0sXG4gICAgICBzZWNvbmQgPSBfcmVmMls2XTtcbiAgICBpZiAoYWRPckJjID09PSBcIkJDXCIpIHtcbiAgICAgIHllYXIgPSAtTWF0aC5hYnMoeWVhcikgKyAxO1xuICAgIH1cblxuICAgIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgaG91cjEyIGFuZCBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDI1NTY0JmNhbj0yJnE9JTIyMjQlM0EwMCUyMiUyMGRhdGV0aW1lZm9ybWF0XG4gICAgdmFyIGFkanVzdGVkSG91ciA9IGhvdXIgPT09IDI0ID8gMCA6IGhvdXI7XG4gICAgdmFyIGFzVVRDID0gb2JqVG9Mb2NhbFRTKHtcbiAgICAgIHllYXI6IHllYXIsXG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXk6IGRheSxcbiAgICAgIGhvdXI6IGFkanVzdGVkSG91cixcbiAgICAgIG1pbnV0ZTogbWludXRlLFxuICAgICAgc2Vjb25kOiBzZWNvbmQsXG4gICAgICBtaWxsaXNlY29uZDogMFxuICAgIH0pO1xuICAgIHZhciBhc1RTID0gK2RhdGU7XG4gICAgdmFyIG92ZXIgPSBhc1RTICUgMTAwMDtcbiAgICBhc1RTIC09IG92ZXIgPj0gMCA/IG92ZXIgOiAxMDAwICsgb3ZlcjtcbiAgICByZXR1cm4gKGFzVVRDIC0gYXNUUykgLyAoNjAgKiAxMDAwKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJpYW5hXCIgJiYgb3RoZXJab25lLm5hbWUgPT09IHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfY3JlYXRlQ2xhc3MoSUFOQVpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcImlhbmFcIjtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJQU5BWm9uZTtcbn0oWm9uZSk7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJiYXNlXCJdLFxuICBfZXhjbHVkZWQyID0gW1wicGFkVG9cIiwgXCJmbG9vclwiXTtcblxuLy8gdG9kbyAtIHJlbWFwIGNhY2hpbmdcblxudmFyIGludGxMRkNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRMRihsb2NTdHJpbmcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICB2YXIgZHRmID0gaW50bExGQ2FjaGVba2V5XTtcbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5MaXN0Rm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bExGQ2FjaGVba2V5XSA9IGR0ZjtcbiAgfVxuICByZXR1cm4gZHRmO1xufVxudmFyIGludGxEVENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWREVEYobG9jU3RyaW5nLCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0ge307XG4gIH1cbiAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgdmFyIGR0ZiA9IGludGxEVENhY2hlW2tleV07XG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsRFRDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG52YXIgaW50bE51bUNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRJTkYobG9jU3RyaW5nLCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0ge307XG4gIH1cbiAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgdmFyIGluZiA9IGludGxOdW1DYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG52YXIgaW50bFJlbENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0ge307XG4gIH1cbiAgdmFyIF9vcHRzID0gb3B0cztcbiAgICBfb3B0cy5iYXNlO1xuICAgIHZhciBjYWNoZUtleU9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb3B0cywgX2V4Y2x1ZGVkKTsgLy8gZXhjbHVkZSBgYmFzZWAgZnJvbSB0aGUgb3B0aW9uc1xuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgY2FjaGVLZXlPcHRzXSk7XG4gIHZhciBpbmYgPSBpbnRsUmVsQ2FjaGVba2V5XTtcbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsUmVsQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxudmFyIHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcbmZ1bmN0aW9uIHN5c3RlbUxvY2FsZSgpIHtcbiAgaWYgKHN5c0xvY2FsZUNhY2hlKSB7XG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xuICB9IGVsc2Uge1xuICAgIHN5c0xvY2FsZUNhY2hlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGU7XG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZUxvY2FsZVN0cmluZyhsb2NhbGVTdHIpIHtcbiAgLy8gSSByZWFsbHkgd2FudCB0byBhdm9pZCB3cml0aW5nIGEgQkNQIDQ3IHBhcnNlclxuICAvLyBzZWUsIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9iY3AtNDdcbiAgLy8gSW5zdGVhZCwgd2UnbGwgZG8gdGhpczpcblxuICAvLyBhKSBpZiB0aGUgc3RyaW5nIGhhcyBubyAtdSBleHRlbnNpb25zLCBqdXN0IGxlYXZlIGl0IGFsb25lXG4gIC8vIGIpIGlmIGl0IGRvZXMsIHVzZSBJbnRsIHRvIHJlc29sdmUgZXZlcnl0aGluZ1xuICAvLyBjKSBpZiBJbnRsIGZhaWxzLCB0cnkgYWdhaW4gd2l0aG91dCB0aGUgLXVcblxuICAvLyBwcml2YXRlIHN1YnRhZ3MgYW5kIHVuaWNvZGUgc3VidGFncyBoYXZlIG9yZGVyaW5nIHJlcXVpcmVtZW50cyxcbiAgLy8gYW5kIHdlJ3JlIG5vdCBwcm9wZXJseSBwYXJzaW5nIHRoaXMsIHNvIGp1c3Qgc3RyaXAgb3V0IHRoZVxuICAvLyBwcml2YXRlIG9uZXMgaWYgdGhleSBleGlzdC5cbiAgdmFyIHhJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXgtXCIpO1xuICBpZiAoeEluZGV4ICE9PSAtMSkge1xuICAgIGxvY2FsZVN0ciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgeEluZGV4KTtcbiAgfVxuICB2YXIgdUluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCItdS1cIik7XG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciBzZWxlY3RlZFN0cjtcbiAgICB0cnkge1xuICAgICAgb3B0aW9ucyA9IGdldENhY2hlZERURihsb2NhbGVTdHIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgICAgc2VsZWN0ZWRTdHIgPSBsb2NhbGVTdHI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmFyIHNtYWxsZXIgPSBsb2NhbGVTdHIuc3Vic3RyaW5nKDAsIHVJbmRleCk7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgICAgc2VsZWN0ZWRTdHIgPSBzbWFsbGVyO1xuICAgIH1cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX29wdGlvbnMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgY2FsZW5kYXIgPSBfb3B0aW9ucy5jYWxlbmRhcjtcbiAgICByZXR1cm4gW3NlbGVjdGVkU3RyLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyXTtcbiAgfVxufVxuZnVuY3Rpb24gaW50bENvbmZpZ1N0cmluZyhsb2NhbGVTdHIsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpIHtcbiAgaWYgKG91dHB1dENhbGVuZGFyIHx8IG51bWJlcmluZ1N5c3RlbSkge1xuICAgIGlmICghbG9jYWxlU3RyLmluY2x1ZGVzKFwiLXUtXCIpKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gXCItdVwiO1xuICAgIH1cbiAgICBpZiAob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgIGxvY2FsZVN0ciArPSBcIi1jYS1cIiArIG91dHB1dENhbGVuZGFyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gXCItbnUtXCIgKyBudW1iZXJpbmdTeXN0ZW07XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVTdHI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfVxufVxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcbiAgdmFyIG1zID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICB2YXIgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgaSwgMSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuZnVuY3Rpb24gbWFwV2Vla2RheXMoZikge1xuICB2YXIgbXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgdmFyIGR0ID0gRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMyArIGkpO1xuICAgIG1zLnB1c2goZihkdCkpO1xuICB9XG4gIHJldHVybiBtcztcbn1cbmZ1bmN0aW9uIGxpc3RTdHVmZihsb2MsIGxlbmd0aCwgZGVmYXVsdE9LLCBlbmdsaXNoRm4sIGludGxGbikge1xuICB2YXIgbW9kZSA9IGxvYy5saXN0aW5nTW9kZShkZWZhdWx0T0spO1xuICBpZiAobW9kZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJlblwiKSB7XG4gICAgcmV0dXJuIGVuZ2xpc2hGbihsZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnRsRm4obGVuZ3RoKTtcbiAgfVxufVxuZnVuY3Rpb24gc3VwcG9ydHNGYXN0TnVtYmVycyhsb2MpIHtcbiAgaWYgKGxvYy5udW1iZXJpbmdTeXN0ZW0gJiYgbG9jLm51bWJlcmluZ1N5c3RlbSAhPT0gXCJsYXRuXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxvYy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiIHx8ICFsb2MubG9jYWxlIHx8IGxvYy5sb2NhbGUuc3RhcnRzV2l0aChcImVuXCIpIHx8IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvYy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIFBvbHlOdW1iZXJGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQb2x5TnVtYmVyRm9ybWF0dGVyKGludGwsIGZvcmNlU2ltcGxlLCBvcHRzKSB7XG4gICAgdGhpcy5wYWRUbyA9IG9wdHMucGFkVG8gfHwgMDtcbiAgICB0aGlzLmZsb29yID0gb3B0cy5mbG9vciB8fCBmYWxzZTtcbiAgICBvcHRzLnBhZFRvO1xuICAgICAgb3B0cy5mbG9vcjtcbiAgICAgIHZhciBvdGhlck9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShvcHRzLCBfZXhjbHVkZWQyKTtcbiAgICBpZiAoIWZvcmNlU2ltcGxlIHx8IE9iamVjdC5rZXlzKG90aGVyT3B0cykubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGludGxPcHRzID0gX2V4dGVuZHMoe1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgIH0sIG9wdHMpO1xuICAgICAgaWYgKG9wdHMucGFkVG8gPiAwKSBpbnRsT3B0cy5taW5pbXVtSW50ZWdlckRpZ2l0cyA9IG9wdHMucGFkVG87XG4gICAgICB0aGlzLmluZiA9IGdldENhY2hlZElORihpbnRsLCBpbnRsT3B0cyk7XG4gICAgfVxuICB9XG4gIHZhciBfcHJvdG8gPSBQb2x5TnVtYmVyRm9ybWF0dGVyLnByb3RvdHlwZTtcbiAgX3Byb3RvLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChpKSB7XG4gICAgaWYgKHRoaXMuaW5mKSB7XG4gICAgICB2YXIgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7XG4gICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcbiAgICAgIHZhciBfZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XG4gICAgICByZXR1cm4gcGFkU3RhcnQoX2ZpeGVkLCB0aGlzLnBhZFRvKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBQb2x5TnVtYmVyRm9ybWF0dGVyO1xufSgpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgUG9seURhdGVGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgaW50bCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5vcmlnaW5hbFpvbmUgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHogPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMub3B0cy50aW1lWm9uZSkge1xuICAgICAgLy8gRG9uJ3QgYXBwbHkgYW55IHdvcmthcm91bmRzIGlmIGEgdGltZVpvbmUgaXMgZXhwbGljaXRseSBwcm92aWRlZCBpbiBvcHRzXG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwiZml4ZWRcIikge1xuICAgICAgLy8gVVRDLTggb3IgRXRjL1VUQy04IGFyZSBub3QgcGFydCBvZiB0emRhdGEsIG9ubHkgRXRjL0dNVCs4IGFuZCB0aGUgbGlrZS5cbiAgICAgIC8vIFRoYXQgaXMgd2h5IGZpeGVkLW9mZnNldCBUWiBpcyBzZXQgdG8gdGhhdCB1bmxlc3MgaXQgaXM6XG4gICAgICAvLyAxLiBSZXByZXNlbnRpbmcgb2Zmc2V0IDAgd2hlbiBVVEMgaXMgdXNlZCB0byBtYWludGFpbiBwcmV2aW91cyBiZWhhdmlvciBhbmQgZG9lcyBub3QgYmVjb21lIEdNVC5cbiAgICAgIC8vIDIuIFVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOlxuICAgICAgLy8gICAgLSBzb21lIGRvIG5vdCBzdXBwb3J0IEV0Yy9cbiAgICAgIC8vICAgIC0gPCBFdGMvR01ULTE0LCA+IEV0Yy9HTVQrMTIsIGFuZCAzMC1taW51dGUgb3IgNDUtbWludXRlIG9mZnNldHMgYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YVxuICAgICAgdmFyIGdtdE9mZnNldCA9IC0xICogKGR0Lm9mZnNldCAvIDYwKTtcbiAgICAgIHZhciBvZmZzZXRaID0gZ210T2Zmc2V0ID49IDAgPyBcIkV0Yy9HTVQrXCIgKyBnbXRPZmZzZXQgOiBcIkV0Yy9HTVRcIiArIGdtdE9mZnNldDtcbiAgICAgIGlmIChkdC5vZmZzZXQgIT09IDAgJiYgSUFOQVpvbmUuY3JlYXRlKG9mZnNldFopLnZhbGlkKSB7XG4gICAgICAgIHogPSBvZmZzZXRaO1xuICAgICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3QgYWxsIGZpeGVkLW9mZnNldCB6b25lcyBsaWtlIEV0Yy8rNDozMCBhcmUgcHJlc2VudCBpbiB0emRhdGEgc29cbiAgICAgICAgLy8gd2UgbWFudWFsbHkgYXBwbHkgdGhlIG9mZnNldCBhbmQgc3Vic3RpdHV0ZSB0aGUgem9uZSBhcyBuZWVkZWQuXG4gICAgICAgIHogPSBcIlVUQ1wiO1xuICAgICAgICB0aGlzLmR0ID0gZHQub2Zmc2V0ID09PSAwID8gZHQgOiBkdC5zZXRab25lKFwiVVRDXCIpLnBsdXMoe1xuICAgICAgICAgIG1pbnV0ZXM6IGR0Lm9mZnNldFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFpvbmUgPSBkdC56b25lO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZHQuem9uZS50eXBlID09PSBcInN5c3RlbVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwiaWFuYVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDdXN0b20gem9uZXMgY2FuIGhhdmUgYW55IG9mZnNldCAvIG9mZnNldE5hbWUgc28gd2UganVzdCBtYW51YWxseVxuICAgICAgLy8gYXBwbHkgdGhlIG9mZnNldCBhbmQgc3Vic3RpdHV0ZSB0aGUgem9uZSBhcyBuZWVkZWQuXG4gICAgICB6ID0gXCJVVENcIjtcbiAgICAgIHRoaXMuZHQgPSBkdC5zZXRab25lKFwiVVRDXCIpLnBsdXMoe1xuICAgICAgICBtaW51dGVzOiBkdC5vZmZzZXRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcmlnaW5hbFpvbmUgPSBkdC56b25lO1xuICAgIH1cbiAgICB2YXIgaW50bE9wdHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRzKTtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IGludGxPcHRzLnRpbWVab25lIHx8IHo7XG4gICAgdGhpcy5kdGYgPSBnZXRDYWNoZWREVEYoaW50bCwgaW50bE9wdHMpO1xuICB9XG4gIHZhciBfcHJvdG8yID0gUG9seURhdGVGb3JtYXR0ZXIucHJvdG90eXBlO1xuICBfcHJvdG8yLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAodGhpcy5vcmlnaW5hbFpvbmUpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgdG8gc3Vic3RpdHV0ZSBpbiB0aGUgYWN0dWFsIHpvbmUgbmFtZSwgd2UgaGF2ZSB0byB1c2VcbiAgICAgIC8vIGZvcm1hdFRvUGFydHMgc28gdGhhdCB0aGUgdGltZXpvbmUgY2FuIGJlIHJlcGxhY2VkLlxuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VG9QYXJ0cygpLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KS5qb2luKFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0KHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH07XG4gIF9wcm90bzIuZm9ybWF0VG9QYXJ0cyA9IGZ1bmN0aW9uIGZvcm1hdFRvUGFydHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcGFydHMgPSB0aGlzLmR0Zi5mb3JtYXRUb1BhcnRzKHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gICAgaWYgKHRoaXMub3JpZ2luYWxab25lKSB7XG4gICAgICByZXR1cm4gcGFydHMubWFwKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgIGlmIChwYXJ0LnR5cGUgPT09IFwidGltZVpvbmVOYW1lXCIpIHtcbiAgICAgICAgICB2YXIgb2Zmc2V0TmFtZSA9IF90aGlzLm9yaWdpbmFsWm9uZS5vZmZzZXROYW1lKF90aGlzLmR0LnRzLCB7XG4gICAgICAgICAgICBsb2NhbGU6IF90aGlzLmR0LmxvY2FsZSxcbiAgICAgICAgICAgIGZvcm1hdDogX3RoaXMub3B0cy50aW1lWm9uZU5hbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHBhcnQsIHtcbiAgICAgICAgICAgIHZhbHVlOiBvZmZzZXROYW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH07XG4gIF9wcm90bzIucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfTtcbiAgcmV0dXJuIFBvbHlEYXRlRm9ybWF0dGVyO1xufSgpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgUG9seVJlbEZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvbHlSZWxGb3JtYXR0ZXIoaW50bCwgaXNFbmdsaXNoLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gX2V4dGVuZHMoe1xuICAgICAgc3R5bGU6IFwibG9uZ1wiXG4gICAgfSwgb3B0cyk7XG4gICAgaWYgKCFpc0VuZ2xpc2ggJiYgaGFzUmVsYXRpdmUoKSkge1xuICAgICAgdGhpcy5ydGYgPSBnZXRDYWNoZWRSVEYoaW50bCwgb3B0cyk7XG4gICAgfVxuICB9XG4gIHZhciBfcHJvdG8zID0gUG9seVJlbEZvcm1hdHRlci5wcm90b3R5cGU7XG4gIF9wcm90bzMuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvMy5mb3JtYXRUb1BhcnRzID0gZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCkge1xuICAgIGlmICh0aGlzLnJ0Zikge1xuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuICByZXR1cm4gUG9seVJlbEZvcm1hdHRlcjtcbn0oKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIExvY2FsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIExvY2FsZS5mcm9tT3B0cyA9IGZ1bmN0aW9uIGZyb21PcHRzKG9wdHMpIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShvcHRzLmxvY2FsZSwgb3B0cy5udW1iZXJpbmdTeXN0ZW0sIG9wdHMub3V0cHV0Q2FsZW5kYXIsIG9wdHMuZGVmYXVsdFRvRU4pO1xuICB9O1xuICBMb2NhbGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciwgZGVmYXVsdFRvRU4pIHtcbiAgICBpZiAoZGVmYXVsdFRvRU4gPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdFRvRU4gPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlO1xuICAgIC8vIHRoZSBzeXN0ZW0gbG9jYWxlIGlzIHVzZWZ1bCBmb3IgaHVtYW4gcmVhZGFibGUgc3RyaW5ncyBidXQgYW5ub3lpbmcgZm9yIHBhcnNpbmcvZm9ybWF0dGluZyBrbm93biBmb3JtYXRzXG4gICAgdmFyIGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpO1xuICAgIHZhciBudW1iZXJpbmdTeXN0ZW1SID0gbnVtYmVyaW5nU3lzdGVtIHx8IFNldHRpbmdzLmRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XG4gICAgdmFyIG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gbmV3IExvY2FsZShsb2NhbGVSLCBudW1iZXJpbmdTeXN0ZW1SLCBvdXRwdXRDYWxlbmRhclIsIHNwZWNpZmllZExvY2FsZSk7XG4gIH07XG4gIExvY2FsZS5yZXNldENhY2hlID0gZnVuY3Rpb24gcmVzZXRDYWNoZSgpIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XG4gICAgaW50bERUQ2FjaGUgPSB7fTtcbiAgICBpbnRsTnVtQ2FjaGUgPSB7fTtcbiAgICBpbnRsUmVsQ2FjaGUgPSB7fTtcbiAgfTtcbiAgTG9jYWxlLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KF90ZW1wKSB7XG4gICAgdmFyIF9yZWYyID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBsb2NhbGUgPSBfcmVmMi5sb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMi5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYyLm91dHB1dENhbGVuZGFyO1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcik7XG4gIH07XG4gIGZ1bmN0aW9uIExvY2FsZShsb2NhbGUsIG51bWJlcmluZywgb3V0cHV0Q2FsZW5kYXIsIHNwZWNpZmllZExvY2FsZSkge1xuICAgIHZhciBfcGFyc2VMb2NhbGVTdHJpbmcgPSBwYXJzZUxvY2FsZVN0cmluZyhsb2NhbGUpLFxuICAgICAgcGFyc2VkTG9jYWxlID0gX3BhcnNlTG9jYWxlU3RyaW5nWzBdLFxuICAgICAgcGFyc2VkTnVtYmVyaW5nU3lzdGVtID0gX3BhcnNlTG9jYWxlU3RyaW5nWzFdLFxuICAgICAgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgPSBfcGFyc2VMb2NhbGVTdHJpbmdbMl07XG4gICAgdGhpcy5sb2NhbGUgPSBwYXJzZWRMb2NhbGU7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmcgfHwgcGFyc2VkTnVtYmVyaW5nU3lzdGVtIHx8IG51bGw7XG4gICAgdGhpcy5vdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyIHx8IHBhcnNlZE91dHB1dENhbGVuZGFyIHx8IG51bGw7XG4gICAgdGhpcy5pbnRsID0gaW50bENvbmZpZ1N0cmluZyh0aGlzLmxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIHRoaXMub3V0cHV0Q2FsZW5kYXIpO1xuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbUNhY2hlID0gbnVsbDtcbiAgICB0aGlzLmVyYUNhY2hlID0ge307XG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XG4gIH1cbiAgdmFyIF9wcm90bzQgPSBMb2NhbGUucHJvdG90eXBlO1xuICBfcHJvdG80Lmxpc3RpbmdNb2RlID0gZnVuY3Rpb24gbGlzdGluZ01vZGUoKSB7XG4gICAgdmFyIGlzQWN0dWFsbHlFbiA9IHRoaXMuaXNFbmdsaXNoKCk7XG4gICAgdmFyIGhhc05vV2VpcmRuZXNzID0gKHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBudWxsIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIikgJiYgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gXCJncmVnb3J5XCIpO1xuICAgIHJldHVybiBpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MgPyBcImVuXCIgOiBcImludGxcIjtcbiAgfTtcbiAgX3Byb3RvNC5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKGFsdHMpIHtcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoYWx0cy5sb2NhbGUgfHwgdGhpcy5zcGVjaWZpZWRMb2NhbGUsIGFsdHMubnVtYmVyaW5nU3lzdGVtIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBhbHRzLm91dHB1dENhbGVuZGFyIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIsIGFsdHMuZGVmYXVsdFRvRU4gfHwgZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvNC5yZWRlZmF1bHRUb0VOID0gZnVuY3Rpb24gcmVkZWZhdWx0VG9FTihhbHRzKSB7XG4gICAgaWYgKGFsdHMgPT09IHZvaWQgMCkge1xuICAgICAgYWx0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jbG9uZShfZXh0ZW5kcyh7fSwgYWx0cywge1xuICAgICAgZGVmYXVsdFRvRU46IHRydWVcbiAgICB9KSk7XG4gIH07XG4gIF9wcm90bzQucmVkZWZhdWx0VG9TeXN0ZW0gPSBmdW5jdGlvbiByZWRlZmF1bHRUb1N5c3RlbShhbHRzKSB7XG4gICAgaWYgKGFsdHMgPT09IHZvaWQgMCkge1xuICAgICAgYWx0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jbG9uZShfZXh0ZW5kcyh7fSwgYWx0cywge1xuICAgICAgZGVmYXVsdFRvRU46IGZhbHNlXG4gICAgfSkpO1xuICB9O1xuICBfcHJvdG80Lm1vbnRocyA9IGZ1bmN0aW9uIG1vbnRocyQxKGxlbmd0aCwgZm9ybWF0LCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHtcbiAgICAgIGZvcm1hdCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdE9LID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRPSyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIG1vbnRocywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGludGwgPSBmb3JtYXQgPyB7XG4gICAgICAgICAgbW9udGg6IGxlbmd0aCxcbiAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgbW9udGg6IGxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXRTdHIgPSBmb3JtYXQgPyBcImZvcm1hdFwiIDogXCJzdGFuZGFsb25lXCI7XG4gICAgICBpZiAoIV90aGlzMi5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0pIHtcbiAgICAgICAgX3RoaXMyLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcE1vbnRocyhmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmV4dHJhY3QoZHQsIGludGwsIFwibW9udGhcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzMi5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XG4gICAgfSk7XG4gIH07XG4gIF9wcm90bzQud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyQxKGxlbmd0aCwgZm9ybWF0LCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHtcbiAgICAgIGZvcm1hdCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdE9LID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRPSyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIHdlZWtkYXlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IGZvcm1hdCA/IHtcbiAgICAgICAgICB3ZWVrZGF5OiBsZW5ndGgsXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICB3ZWVrZGF5OiBsZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCFfdGhpczMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0pIHtcbiAgICAgICAgX3RoaXMzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwV2Vla2RheXMoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5leHRyYWN0KGR0LCBpbnRsLCBcIndlZWtkYXlcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzMy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvNC5tZXJpZGllbXMgPSBmdW5jdGlvbiBtZXJpZGllbXMkMShkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcbiAgICBpZiAoZGVmYXVsdE9LID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRPSyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgdW5kZWZpbmVkLCBkZWZhdWx0T0ssIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZXJpZGllbXM7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSW4gdGhlb3J5IHRoZXJlIGNvdWxkIGJlIGFyaWJpdHJhcnkgZGF5IHBlcmlvZHMuIFdlJ3JlIGdvbm5hIGFzc3VtZSB0aGVyZSBhcmUgZXhhY3RseSB0d29cbiAgICAgIC8vIGZvciBBTSBhbmQgUE0uIFRoaXMgaXMgcHJvYmFibHkgd3JvbmcsIGJ1dCBpdCdzIG1ha2VzIHBhcnNpbmcgd2F5IGVhc2llci5cbiAgICAgIGlmICghX3RoaXM0Lm1lcmlkaWVtQ2FjaGUpIHtcbiAgICAgICAgdmFyIGludGwgPSB7XG4gICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgaG91ckN5Y2xlOiBcImgxMlwiXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzNC5tZXJpZGllbUNhY2hlID0gW0RhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDkpLCBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCAxOSldLm1hcChmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmV4dHJhY3QoZHQsIGludGwsIFwiZGF5cGVyaW9kXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpczQubWVyaWRpZW1DYWNoZTtcbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvNC5lcmFzID0gZnVuY3Rpb24gZXJhcyQxKGxlbmd0aCwgZGVmYXVsdE9LKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG4gICAgaWYgKGRlZmF1bHRPSyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0T0sgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBlcmFzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IHtcbiAgICAgICAgZXJhOiBsZW5ndGhcbiAgICAgIH07XG5cbiAgICAgIC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cbiAgICAgIGlmICghX3RoaXM1LmVyYUNhY2hlW2xlbmd0aF0pIHtcbiAgICAgICAgX3RoaXM1LmVyYUNhY2hlW2xlbmd0aF0gPSBbRGF0ZVRpbWUudXRjKC00MCwgMSwgMSksIERhdGVUaW1lLnV0YygyMDE3LCAxLCAxKV0ubWFwKGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUuZXh0cmFjdChkdCwgaW50bCwgXCJlcmFcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzNS5lcmFDYWNoZVtsZW5ndGhdO1xuICAgIH0pO1xuICB9O1xuICBfcHJvdG80LmV4dHJhY3QgPSBmdW5jdGlvbiBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICB2YXIgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyksXG4gICAgICByZXN1bHRzID0gZGYuZm9ybWF0VG9QYXJ0cygpLFxuICAgICAgbWF0Y2hpbmcgPSByZXN1bHRzLmZpbmQoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBmaWVsZDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfTtcbiAgX3Byb3RvNC5udW1iZXJGb3JtYXR0ZXIgPSBmdW5jdGlvbiBudW1iZXJGb3JtYXR0ZXIob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgLy8gdGhpcyBmb3JjZXNpbXBsZSBvcHRpb24gaXMgbmV2ZXIgdXNlZCAodGhlIG9ubHkgY2FsbGVyIHNob3J0LWNpcmN1aXRzIG9uIGl0LCBidXQgaXQgc2VlbXMgc2FmZXIgdG8gbGVhdmUpXG4gICAgLy8gKGluIGNvbnRyYXN0LCB0aGUgcmVzdCBvZiB0aGUgY29uZGl0aW9uIGlzIHVzZWQgaGVhdmlseSlcbiAgICByZXR1cm4gbmV3IFBvbHlOdW1iZXJGb3JtYXR0ZXIodGhpcy5pbnRsLCBvcHRzLmZvcmNlU2ltcGxlIHx8IHRoaXMuZmFzdE51bWJlcnMsIG9wdHMpO1xuICB9O1xuICBfcHJvdG80LmR0Rm9ybWF0dGVyID0gZnVuY3Rpb24gZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSB7XG4gICAgaWYgKGludGxPcHRzID09PSB2b2lkIDApIHtcbiAgICAgIGludGxPcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9seURhdGVGb3JtYXR0ZXIoZHQsIHRoaXMuaW50bCwgaW50bE9wdHMpO1xuICB9O1xuICBfcHJvdG80LnJlbEZvcm1hdHRlciA9IGZ1bmN0aW9uIHJlbEZvcm1hdHRlcihvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvbHlSZWxGb3JtYXR0ZXIodGhpcy5pbnRsLCB0aGlzLmlzRW5nbGlzaCgpLCBvcHRzKTtcbiAgfTtcbiAgX3Byb3RvNC5saXN0Rm9ybWF0dGVyID0gZnVuY3Rpb24gbGlzdEZvcm1hdHRlcihvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2FjaGVkTEYodGhpcy5pbnRsLCBvcHRzKTtcbiAgfTtcbiAgX3Byb3RvNC5pc0VuZ2xpc2ggPSBmdW5jdGlvbiBpc0VuZ2xpc2goKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlID09PSBcImVuXCIgfHwgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gXCJlbi11c1wiIHx8IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlLnN0YXJ0c1dpdGgoXCJlbi11c1wiKTtcbiAgfTtcbiAgX3Byb3RvNC5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUgPT09IG90aGVyLmxvY2FsZSAmJiB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gb3RoZXIubnVtYmVyaW5nU3lzdGVtICYmIHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG90aGVyLm91dHB1dENhbGVuZGFyO1xuICB9O1xuICBfY3JlYXRlQ2xhc3MoTG9jYWxlLCBbe1xuICAgIGtleTogXCJmYXN0TnVtYmVyc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID0gc3VwcG9ydHNGYXN0TnVtYmVycyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTG9jYWxlO1xufSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBBIHpvbmUgd2l0aCBhIGZpeGVkIG9mZnNldCAobWVhbmluZyBubyBEU1QpXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xudmFyIEZpeGVkT2Zmc2V0Wm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1pvbmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoRml4ZWRPZmZzZXRab25lLCBfWm9uZSk7XG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlc1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UgPSBmdW5jdGlvbiBpbnN0YW5jZShvZmZzZXQpIHtcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSBvZiBGaXhlZE9mZnNldFpvbmUgZnJvbSBhIFVUQyBvZmZzZXQgc3RyaW5nLCBsaWtlIFwiVVRDKzZcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBvZmZzZXQgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQys2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQyswNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMtNjowMFwiKVxuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqLztcbiAgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyID0gZnVuY3Rpb24gcGFyc2VTcGVjaWZpZXIocykge1xuICAgIGlmIChzKSB7XG4gICAgICB2YXIgciA9IHMubWF0Y2goL151dGMoPzooWystXVxcZHsxLDJ9KSg/OjooXFxkezJ9KSk/KT8kL2kpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIGZ1bmN0aW9uIEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIF90aGlzLmZpeGVkID0gb2Zmc2V0O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIHZhciBfcHJvdG8gPSBGaXhlZE9mZnNldFpvbmUucHJvdG90eXBlO1xuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0JDEodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmZpeGVkO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImZpeGVkXCIgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9jcmVhdGVDbGFzcyhGaXhlZE9mZnNldFpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcImZpeGVkXCI7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqKi9cbiAgfSwge1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXhlZCA9PT0gMCA/IFwiVVRDXCIgOiBcIlVUQ1wiICsgZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIFwibmFycm93XCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpYW5hTmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuZml4ZWQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFwiRXRjL1VUQ1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiRXRjL0dNVFwiICsgZm9ybWF0T2Zmc2V0KC10aGlzLmZpeGVkLCBcIm5hcnJvd1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJ1dGNJbnN0YW5jZVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgVVRDXG4gICAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChzaW5nbGV0b24gPT09IG51bGwpIHtcbiAgICAgICAgc2luZ2xldG9uID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZSgwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGaXhlZE9mZnNldFpvbmU7XG59KFpvbmUpO1xuXG4vKipcbiAqIEEgem9uZSB0aGF0IGZhaWxlZCB0byBwYXJzZS4gWW91IHNob3VsZCBuZXZlciBuZWVkIHRvIGluc3RhbnRpYXRlIHRoaXMuXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xudmFyIEludmFsaWRab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkWm9uZSwgX1pvbmUpO1xuICBmdW5jdGlvbiBJbnZhbGlkWm9uZSh6b25lTmFtZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfdGhpcyA9IF9ab25lLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAvKiogIEBwcml2YXRlICovXG4gICAgX3RoaXMuem9uZU5hbWUgPSB6b25lTmFtZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICB2YXIgX3Byb3RvID0gSW52YWxpZFpvbmUucHJvdG90eXBlO1xuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqLztcbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KCkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqLztcbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqLztcbiAgX2NyZWF0ZUNsYXNzKEludmFsaWRab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqKi9cbiAgfSwge1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuICB9LCB7XG4gICAga2V5OiBcImlzVW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEludmFsaWRab25lO1xufShab25lKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICB2YXIgbG93ZXJlZCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxvd2VyZWQgPT09IFwiZGVmYXVsdFwiKSByZXR1cm4gZGVmYXVsdFpvbmU7ZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJsb2NhbFwiIHx8IGxvd2VyZWQgPT09IFwic3lzdGVtXCIpIHJldHVybiBTeXN0ZW1ab25lLmluc3RhbmNlO2Vsc2UgaWYgKGxvd2VyZWQgPT09IFwidXRjXCIgfHwgbG93ZXJlZCA9PT0gXCJnbXRcIikgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtlbHNlIHJldHVybiBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIobG93ZXJlZCkgfHwgSUFOQVpvbmUuY3JlYXRlKGlucHV0KTtcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICByZXR1cm4gRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGlucHV0KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09IFwib2JqZWN0XCIgJiYgaW5wdXQub2Zmc2V0ICYmIHR5cGVvZiBpbnB1dC5vZmZzZXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAvLyBUaGlzIGlzIGR1bWIsIGJ1dCB0aGUgaW5zdGFuY2VvZiBjaGVjayBhYm92ZSBkb2Vzbid0IHNlZW0gdG8gcmVhbGx5IHdvcmtcbiAgICAvLyBzbyB3ZSdyZSBkdWNrIGNoZWNraW5nIGl0XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgSW52YWxpZFpvbmUoaW5wdXQpO1xuICB9XG59XG5cbnZhciBub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCk7XG4gIH0sXG4gIGRlZmF1bHRab25lID0gXCJzeXN0ZW1cIixcbiAgZGVmYXVsdExvY2FsZSA9IG51bGwsXG4gIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudWxsLFxuICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBudWxsLFxuICB0d29EaWdpdEN1dG9mZlllYXIgPSA2MCxcbiAgdGhyb3dPbkludmFsaWQ7XG5cbi8qKlxuICogU2V0dGluZ3MgY29udGFpbnMgc3RhdGljIGdldHRlcnMgYW5kIHNldHRlcnMgdGhhdCBjb250cm9sIEx1eG9uJ3Mgb3ZlcmFsbCBiZWhhdmlvci4gTHV4b24gaXMgYSBzaW1wbGUgbGlicmFyeSB3aXRoIGZldyBvcHRpb25zLCBidXQgdGhlIG9uZXMgaXQgZG9lcyBoYXZlIGxpdmUgaGVyZS5cbiAqL1xudmFyIFNldHRpbmdzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2V0dGluZ3MoKSB7fVxuICAvKipcbiAgICogUmVzZXQgTHV4b24ncyBnbG9iYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBTZXR0aW5ncy5yZXNldENhY2hlcyA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGVzKCkge1xuICAgIExvY2FsZS5yZXNldENhY2hlKCk7XG4gICAgSUFOQVpvbmUucmVzZXRDYWNoZSgpO1xuICB9O1xuICBfY3JlYXRlQ2xhc3MoU2V0dGluZ3MsIG51bGwsIFt7XG4gICAga2V5OiBcIm5vd1wiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBudW1iZXIsIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYW4gRXBvY2ggbWlsbGlzZWNvbmQgY291bnRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gRGF0ZS5ub3coKSArIDMwMDAgLy8gcHJldGVuZCBpdCBpcyAzIHNlY29uZHMgaW4gdGhlIGZ1dHVyZVxuICAgICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IDAgLy8gYWx3YXlzIHByZXRlbmQgaXQncyBKYW4gMSwgMTk3MCBhdCBtaWRuaWdodCBpbiBVVEMgdGltZVxuICAgICAqLyxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuKSB7XG4gICAgICBub3cgPSBuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdFpvbmVcIixcbiAgICBnZXQ6XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSBvYmplY3QgY3VycmVudGx5IHVzZWQgdG8gY3JlYXRlIERhdGVUaW1lcy4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgc3lzdGVtJ3MgdGltZSB6b25lICh0aGUgb25lIHNldCBvbiB0aGUgbWFjaGluZSB0aGF0IHJ1bnMgdGhpcyBjb2RlKS5cbiAgICAgKiBAdHlwZSB7Wm9uZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplWm9uZShkZWZhdWx0Wm9uZSwgU3lzdGVtWm9uZS5pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi8sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoem9uZSkge1xuICAgICAgZGVmYXVsdFpvbmUgPSB6b25lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0TG9jYWxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqLyxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChsb2NhbGUpIHtcbiAgICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdE51bWJlcmluZ1N5c3RlbVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRPdXRwdXRDYWxlbmRhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqLyxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvdXRwdXRDYWxlbmRhcikge1xuICAgICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXRvZmYgeWVhciBhZnRlciB3aGljaCBhIHN0cmluZyBlbmNvZGluZyBhIHllYXIgYXMgdHdvIGRpZ2l0cyBpcyBpbnRlcnByZXRlZCB0byBvY2N1ciBpbiB0aGUgY3VycmVudCBjZW50dXJ5LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwidHdvRGlnaXRDdXRvZmZZZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHdvRGlnaXRDdXRvZmZZZWFyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3V0b2ZmIHllYXIgYWZ0ZXIgd2hpY2ggYSBzdHJpbmcgZW5jb2RpbmcgYSB5ZWFyIGFzIHR3byBkaWdpdHMgaXMgaW50ZXJwcmV0ZWQgdG8gb2NjdXIgaW4gdGhlIGN1cnJlbnQgY2VudHVyeS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDAgLy8gY3V0LW9mZiB5ZWFyIGlzIDAsIHNvIGFsbCAneXknIGFyZSBpbnRlcnByZXR0ZWQgYXMgY3VycmVudCBjZW50dXJ5XG4gICAgICogQGV4YW1wbGUgU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID0gNTAgLy8gJzQ5JyAtPiAxOTQ5OyAnNTAnIC0+IDIwNTBcbiAgICAgKiBAZXhhbXBsZSBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPSAxOTUwIC8vIGludGVycHJldHRlZCBhcyA1MFxuICAgICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDIwNTAgLy8gQUxTTyBpbnRlcnByZXR0ZWQgYXMgNTBcbiAgICAgKi8sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoY3V0b2ZmWWVhcikge1xuICAgICAgdHdvRGlnaXRDdXRvZmZZZWFyID0gY3V0b2ZmWWVhciAlIDEwMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0aHJvd09uSW52YWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRocm93T25JbnZhbGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqLyxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICB0aHJvd09uSW52YWxpZCA9IHQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTZXR0aW5ncztcbn0oKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8vIFRZUEVTXG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwibnVtYmVyXCI7XG59XG5mdW5jdGlvbiBpc0ludGVnZXIobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwibnVtYmVyXCIgJiYgbyAlIDEgPT09IDA7XG59XG5mdW5jdGlvbiBpc1N0cmluZyhvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIjtcbn1cbmZ1bmN0aW9uIGlzRGF0ZShvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBEYXRlXVwiO1xufVxuXG4vLyBDQVBBQklMSVRJRVNcblxuZnVuY3Rpb24gaGFzUmVsYXRpdmUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSBcInVuZGVmaW5lZFwiICYmICEhSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gT0JKRUNUUyBBTkQgQVJSQVlTXG5cbmZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddO1xufVxuZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChiZXN0LCBuZXh0KSB7XG4gICAgdmFyIHBhaXIgPSBbYnkobmV4dCksIG5leHRdO1xuICAgIGlmICghYmVzdCkge1xuICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfSBlbHNlIGlmIChjb21wYXJlKGJlc3RbMF0sIHBhaXJbMF0pID09PSBiZXN0WzBdKSB7XG4gICAgICByZXR1cm4gYmVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfVxuICB9LCBudWxsKVsxXTtcbn1cbmZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoYSwgaykge1xuICAgIGFba10gPSBvYmpba107XG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbi8vIE5VTUJFUlMgQU5EIFNUUklOR1NcblxuZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XG59XG5cbi8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxuZnVuY3Rpb24gZmxvb3JNb2QoeCwgbikge1xuICByZXR1cm4geCAtIG4gKiBNYXRoLmZsb29yKHggLyBuKTtcbn1cbmZ1bmN0aW9uIHBhZFN0YXJ0KGlucHV0LCBuKSB7XG4gIGlmIChuID09PSB2b2lkIDApIHtcbiAgICBuID0gMjtcbiAgfVxuICB2YXIgaXNOZWcgPSBpbnB1dCA8IDA7XG4gIHZhciBwYWRkZWQ7XG4gIGlmIChpc05lZykge1xuICAgIHBhZGRlZCA9IFwiLVwiICsgKFwiXCIgKyAtaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwYWRkZWQgPSAoXCJcIiArIGlucHV0KS5wYWRTdGFydChuLCBcIjBcIik7XG4gIH1cbiAgcmV0dXJuIHBhZGRlZDtcbn1cbmZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZUZsb2F0aW5nKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmcpO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZU1pbGxpcyhmcmFjdGlvbikge1xuICAvLyBSZXR1cm4gdW5kZWZpbmVkIChpbnN0ZWFkIG9mIDApIGluIHRoZXNlIGNhc2VzLCB3aGVyZSBmcmFjdGlvbiBpcyBub3Qgc2V0XG4gIGlmIChpc1VuZGVmaW5lZChmcmFjdGlvbikgfHwgZnJhY3Rpb24gPT09IG51bGwgfHwgZnJhY3Rpb24gPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHZhciBmID0gcGFyc2VGbG9hdChcIjAuXCIgKyBmcmFjdGlvbikgKiAxMDAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGYpO1xuICB9XG59XG5mdW5jdGlvbiByb3VuZFRvKG51bWJlciwgZGlnaXRzLCB0b3dhcmRaZXJvKSB7XG4gIGlmICh0b3dhcmRaZXJvID09PSB2b2lkIDApIHtcbiAgICB0b3dhcmRaZXJvID0gZmFsc2U7XG4gIH1cbiAgdmFyIGZhY3RvciA9IE1hdGgucG93KDEwLCBkaWdpdHMpLFxuICAgIHJvdW5kZXIgPSB0b3dhcmRaZXJvID8gTWF0aC50cnVuYyA6IE1hdGgucm91bmQ7XG4gIHJldHVybiByb3VuZGVyKG51bWJlciAqIGZhY3RvcikgLyBmYWN0b3I7XG59XG5cbi8vIERBVEUgQkFTSUNTXG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XG59XG5mdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICB2YXIgbW9kTW9udGggPSBmbG9vck1vZChtb250aCAtIDEsIDEyKSArIDEsXG4gICAgbW9kWWVhciA9IHllYXIgKyAobW9udGggLSBtb2RNb250aCkgLyAxMjtcbiAgaWYgKG1vZE1vbnRoID09PSAyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIobW9kWWVhcikgPyAyOSA6IDI4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb2RNb250aCAtIDFdO1xuICB9XG59XG5cbi8vIGNvdmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGxvY2FsIHRpbWVzdGFtcCAoZXBvY2gsIGJ1dCB3aXRoIHRoZSBvZmZzZXQgYmFrZWQgaW4pXG5mdW5jdGlvbiBvYmpUb0xvY2FsVFMob2JqKSB7XG4gIHZhciBkID0gRGF0ZS5VVEMob2JqLnllYXIsIG9iai5tb250aCAtIDEsIG9iai5kYXksIG9iai5ob3VyLCBvYmoubWludXRlLCBvYmouc2Vjb25kLCBvYmoubWlsbGlzZWNvbmQpO1xuXG4gIC8vIGZvciBsZWdhY3kgcmVhc29ucywgeWVhcnMgYmV0d2VlbiAwIGFuZCA5OSBhcmUgaW50ZXJwcmV0ZWQgYXMgMTlYWDsgcmV2ZXJ0IHRoYXRcbiAgaWYgKG9iai55ZWFyIDwgMTAwICYmIG9iai55ZWFyID49IDApIHtcbiAgICBkID0gbmV3IERhdGUoZCk7XG4gICAgLy8gc2V0IHRoZSBtb250aCBhbmQgZGF5IGFnYWluLCB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHllYXIgMjAwMCBpcyBhIGxlYXAgeWVhciwgYnV0IHllYXIgMTAwIGlzIG5vdFxuICAgIC8vIHNvIGlmIG9iai55ZWFyIGlzIGluIDk5LCBidXQgb2JqLmRheSBtYWtlcyBpdCByb2xsIG92ZXIgaW50byB5ZWFyIDEwMCxcbiAgICAvLyB0aGUgY2FsY3VsYXRpb25zIGRvbmUgYnkgRGF0ZS5VVEMgYXJlIHVzaW5nIHllYXIgMjAwMCAtIHdoaWNoIGlzIGluY29ycmVjdFxuICAgIGQuc2V0VVRDRnVsbFllYXIob2JqLnllYXIsIG9iai5tb250aCAtIDEsIG9iai5kYXkpO1xuICB9XG4gIHJldHVybiArZDtcbn1cbmZ1bmN0aW9uIHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcikge1xuICB2YXIgcDEgPSAod2Vla1llYXIgKyBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNCkgLSBNYXRoLmZsb29yKHdlZWtZZWFyIC8gMTAwKSArIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0MDApKSAlIDcsXG4gICAgbGFzdCA9IHdlZWtZZWFyIC0gMSxcbiAgICBwMiA9IChsYXN0ICsgTWF0aC5mbG9vcihsYXN0IC8gNCkgLSBNYXRoLmZsb29yKGxhc3QgLyAxMDApICsgTWF0aC5mbG9vcihsYXN0IC8gNDAwKSkgJSA3O1xuICByZXR1cm4gcDEgPT09IDQgfHwgcDIgPT09IDMgPyA1MyA6IDUyO1xufVxuZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhcikge1xuICBpZiAoeWVhciA+IDk5KSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSByZXR1cm4geWVhciA+IFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA/IDE5MDAgKyB5ZWFyIDogMjAwMCArIHllYXI7XG59XG5cbi8vIFBBUlNJTkdcblxuZnVuY3Rpb24gcGFyc2Vab25lSW5mbyh0cywgb2Zmc2V0Rm9ybWF0LCBsb2NhbGUsIHRpbWVab25lKSB7XG4gIGlmICh0aW1lWm9uZSA9PT0gdm9pZCAwKSB7XG4gICAgdGltZVpvbmUgPSBudWxsO1xuICB9XG4gIHZhciBkYXRlID0gbmV3IERhdGUodHMpLFxuICAgIGludGxPcHRzID0ge1xuICAgICAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiXG4gICAgfTtcbiAgaWYgKHRpbWVab25lKSB7XG4gICAgaW50bE9wdHMudGltZVpvbmUgPSB0aW1lWm9uZTtcbiAgfVxuICB2YXIgbW9kaWZpZWQgPSBfZXh0ZW5kcyh7XG4gICAgdGltZVpvbmVOYW1lOiBvZmZzZXRGb3JtYXRcbiAgfSwgaW50bE9wdHMpO1xuICB2YXIgcGFyc2VkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBtb2RpZmllZCkuZm9ybWF0VG9QYXJ0cyhkYXRlKS5maW5kKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInRpbWV6b25lbmFtZVwiO1xuICB9KTtcbiAgcmV0dXJuIHBhcnNlZCA/IHBhcnNlZC52YWx1ZSA6IG51bGw7XG59XG5cbi8vIHNpZ25lZE9mZnNldCgnLTUnLCAnMzAnKSAtPiAtMzMwXG5mdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XG4gIHZhciBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApO1xuXG4gIC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcbiAgICBvZmZIb3VyID0gMDtcbiAgfVxuICB2YXIgb2ZmTWluID0gcGFyc2VJbnQob2ZmTWludXRlU3RyLCAxMCkgfHwgMCxcbiAgICBvZmZNaW5TaWduZWQgPSBvZmZIb3VyIDwgMCB8fCBPYmplY3QuaXMob2ZmSG91ciwgLTApID8gLW9mZk1pbiA6IG9mZk1pbjtcbiAgcmV0dXJuIG9mZkhvdXIgKiA2MCArIG9mZk1pblNpZ25lZDtcbn1cblxuLy8gQ09FUkNJT05cblxuZnVuY3Rpb24gYXNOdW1iZXIodmFsdWUpIHtcbiAgdmFyIG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiIHx8IHZhbHVlID09PSBcIlwiIHx8IE51bWJlci5pc05hTihudW1lcmljVmFsdWUpKSB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJJbnZhbGlkIHVuaXQgdmFsdWUgXCIgKyB2YWx1ZSk7XG4gIHJldHVybiBudW1lcmljVmFsdWU7XG59XG5mdW5jdGlvbiBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVyKSB7XG4gIHZhciBub3JtYWxpemVkID0ge307XG4gIGZvciAodmFyIHUgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgdSkpIHtcbiAgICAgIHZhciB2ID0gb2JqW3VdO1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgIG5vcm1hbGl6ZWRbbm9ybWFsaXplcih1KV0gPSBhc051bWJlcih2KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5mdW5jdGlvbiBmb3JtYXRPZmZzZXQob2Zmc2V0LCBmb3JtYXQpIHtcbiAgdmFyIGhvdXJzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgLyA2MCkpLFxuICAgIG1pbnV0ZXMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAlIDYwKSksXG4gICAgc2lnbiA9IG9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBcIlwiICsgc2lnbiArIHBhZFN0YXJ0KGhvdXJzLCAyKSArIFwiOlwiICsgcGFkU3RhcnQobWludXRlcywgMik7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFwiXCIgKyBzaWduICsgaG91cnMgKyAobWludXRlcyA+IDAgPyBcIjpcIiArIG1pbnV0ZXMgOiBcIlwiKTtcbiAgICBjYXNlIFwidGVjaGllXCI6XG4gICAgICByZXR1cm4gXCJcIiArIHNpZ24gKyBwYWRTdGFydChob3VycywgMikgKyBwYWRTdGFydChtaW51dGVzLCAyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJWYWx1ZSBmb3JtYXQgXCIgKyBmb3JtYXQgKyBcIiBpcyBvdXQgb2YgcmFuZ2UgZm9yIHByb3BlcnR5IGZvcm1hdFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gdGltZU9iamVjdChvYmopIHtcbiAgcmV0dXJuIHBpY2sob2JqLCBbXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0pO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG1vbnRoc0xvbmcgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbnZhciBtb250aHNTaG9ydCA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcbnZhciBtb250aHNOYXJyb3cgPSBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG5mdW5jdGlvbiBtb250aHMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChtb250aHNOYXJyb3cpO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChtb250aHNTaG9ydCk7XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbXS5jb25jYXQobW9udGhzTG9uZyk7XG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgY2FzZSBcIjItZGlnaXRcIjpcbiAgICAgIHJldHVybiBbXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLCBcIjA1XCIsIFwiMDZcIiwgXCIwN1wiLCBcIjA4XCIsIFwiMDlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG52YXIgd2Vla2RheXNMb25nID0gW1wiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiwgXCJTdW5kYXlcIl07XG52YXIgd2Vla2RheXNTaG9ydCA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbnZhciB3ZWVrZGF5c05hcnJvdyA9IFtcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiLCBcIlNcIl07XG5mdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gW10uY29uY2F0KHdlZWtkYXlzTmFycm93KTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbXS5jb25jYXQod2Vla2RheXNTaG9ydCk7XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbXS5jb25jYXQod2Vla2RheXNMb25nKTtcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG52YXIgbWVyaWRpZW1zID0gW1wiQU1cIiwgXCJQTVwiXTtcbnZhciBlcmFzTG9uZyA9IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXTtcbnZhciBlcmFzU2hvcnQgPSBbXCJCQ1wiLCBcIkFEXCJdO1xudmFyIGVyYXNOYXJyb3cgPSBbXCJCXCIsIFwiQVwiXTtcbmZ1bmN0aW9uIGVyYXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChlcmFzTmFycm93KTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZXJhc1Nob3J0KTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChlcmFzTG9uZyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBtZXJpZGllbUZvckRhdGVUaW1lKGR0KSB7XG4gIHJldHVybiBtZXJpZGllbXNbZHQuaG91ciA8IDEyID8gMCA6IDFdO1xufVxuZnVuY3Rpb24gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHdlZWtkYXlzKGxlbmd0aClbZHQud2Vla2RheSAtIDFdO1xufVxuZnVuY3Rpb24gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBtb250aHMobGVuZ3RoKVtkdC5tb250aCAtIDFdO1xufVxuZnVuY3Rpb24gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gZXJhcyhsZW5ndGgpW2R0LnllYXIgPCAwID8gMCA6IDFdO1xufVxuZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCBudW1lcmljLCBuYXJyb3cpIHtcbiAgaWYgKG51bWVyaWMgPT09IHZvaWQgMCkge1xuICAgIG51bWVyaWMgPSBcImFsd2F5c1wiO1xuICB9XG4gIGlmIChuYXJyb3cgPT09IHZvaWQgMCkge1xuICAgIG5hcnJvdyA9IGZhbHNlO1xuICB9XG4gIHZhciB1bml0cyA9IHtcbiAgICB5ZWFyczogW1wieWVhclwiLCBcInlyLlwiXSxcbiAgICBxdWFydGVyczogW1wicXVhcnRlclwiLCBcInF0ci5cIl0sXG4gICAgbW9udGhzOiBbXCJtb250aFwiLCBcIm1vLlwiXSxcbiAgICB3ZWVrczogW1wid2Vla1wiLCBcIndrLlwiXSxcbiAgICBkYXlzOiBbXCJkYXlcIiwgXCJkYXlcIiwgXCJkYXlzXCJdLFxuICAgIGhvdXJzOiBbXCJob3VyXCIsIFwiaHIuXCJdLFxuICAgIG1pbnV0ZXM6IFtcIm1pbnV0ZVwiLCBcIm1pbi5cIl0sXG4gICAgc2Vjb25kczogW1wic2Vjb25kXCIsIFwic2VjLlwiXVxuICB9O1xuICB2YXIgbGFzdGFibGUgPSBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdLmluZGV4T2YodW5pdCkgPT09IC0xO1xuICBpZiAobnVtZXJpYyA9PT0gXCJhdXRvXCIgJiYgbGFzdGFibGUpIHtcbiAgICB2YXIgaXNEYXkgPSB1bml0ID09PSBcImRheXNcIjtcbiAgICBzd2l0Y2ggKGNvdW50KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9tb3Jyb3dcIiA6IFwibmV4dCBcIiArIHVuaXRzW3VuaXRdWzBdO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ5ZXN0ZXJkYXlcIiA6IFwibGFzdCBcIiArIHVuaXRzW3VuaXRdWzBdO1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvZGF5XCIgOiBcInRoaXMgXCIgKyB1bml0c1t1bml0XVswXTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNJblBhc3QgPSBPYmplY3QuaXMoY291bnQsIC0wKSB8fCBjb3VudCA8IDAsXG4gICAgZm10VmFsdWUgPSBNYXRoLmFicyhjb3VudCksXG4gICAgc2luZ3VsYXIgPSBmbXRWYWx1ZSA9PT0gMSxcbiAgICBsaWxVbml0cyA9IHVuaXRzW3VuaXRdLFxuICAgIGZtdFVuaXQgPSBuYXJyb3cgPyBzaW5ndWxhciA/IGxpbFVuaXRzWzFdIDogbGlsVW5pdHNbMl0gfHwgbGlsVW5pdHNbMV0gOiBzaW5ndWxhciA/IHVuaXRzW3VuaXRdWzBdIDogdW5pdDtcbiAgcmV0dXJuIGlzSW5QYXN0ID8gZm10VmFsdWUgKyBcIiBcIiArIGZtdFVuaXQgKyBcIiBhZ29cIiA6IFwiaW4gXCIgKyBmbXRWYWx1ZSArIFwiIFwiICsgZm10VW5pdDtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VG9rZW5zKHNwbGl0cywgdG9rZW5Ub1N0cmluZykge1xuICB2YXIgcyA9IFwiXCI7XG4gIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uoc3BsaXRzKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICB2YXIgdG9rZW4gPSBfc3RlcC52YWx1ZTtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcyArPSB0b2tlbi52YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcztcbn1cbnZhciBfbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcbiAgRDogREFURV9TSE9SVCxcbiAgREQ6IERBVEVfTUVELFxuICBEREQ6IERBVEVfRlVMTCxcbiAgRERERDogREFURV9IVUdFLFxuICB0OiBUSU1FX1NJTVBMRSxcbiAgdHQ6IFRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIHR0dHQ6IFRJTUVfV0lUSF9MT05HX09GRlNFVCxcbiAgVDogVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBUSU1FXzI0X1dJVEhfU0VDT05EUyxcbiAgVFRUOiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VULFxuICBUVFRUOiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IERBVEVUSU1FX1NIT1JULFxuICBmZjogREFURVRJTUVfTUVELFxuICBmZmY6IERBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IERBVEVUSU1FX0hVR0UsXG4gIEY6IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyxcbiAgRkY6IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMsXG4gIEZGRkY6IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTXG59O1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBGb3JtYXR0ZXIuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGxvY2FsZSwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGb3JtYXR0ZXIobG9jYWxlLCBvcHRzKTtcbiAgfTtcbiAgRm9ybWF0dGVyLnBhcnNlRm9ybWF0ID0gZnVuY3Rpb24gcGFyc2VGb3JtYXQoZm10KSB7XG4gICAgLy8gd2hpdGUtc3BhY2UgaXMgYWx3YXlzIGNvbnNpZGVyZWQgYSBsaXRlcmFsIGluIHVzZXItcHJvdmlkZWQgZm9ybWF0c1xuICAgIC8vIHRoZSBcIiBcIiB0b2tlbiBoYXMgYSBzcGVjaWFsIG1lYW5pbmcgKHNlZSB1bml0Rm9yVG9rZW4pXG5cbiAgICB2YXIgY3VycmVudCA9IG51bGwsXG4gICAgICBjdXJyZW50RnVsbCA9IFwiXCIsXG4gICAgICBicmFja2V0ZWQgPSBmYWxzZTtcbiAgICB2YXIgc3BsaXRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gZm10LmNoYXJBdChpKTtcbiAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGxpdGVyYWw6IGJyYWNrZXRlZCB8fCAvXlxccyskLy50ZXN0KGN1cnJlbnRGdWxsKSxcbiAgICAgICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gbnVsbDtcbiAgICAgICAgY3VycmVudEZ1bGwgPSBcIlwiO1xuICAgICAgICBicmFja2V0ZWQgPSAhYnJhY2tldGVkO1xuICAgICAgfSBlbHNlIGlmIChicmFja2V0ZWQpIHtcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gY3VycmVudCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGxpdHMucHVzaCh7XG4gICAgICAgICAgICBsaXRlcmFsOiAvXlxccyskLy50ZXN0KGN1cnJlbnRGdWxsKSxcbiAgICAgICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RnVsbCA9IGM7XG4gICAgICAgIGN1cnJlbnQgPSBjO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgc3BsaXRzLnB1c2goe1xuICAgICAgICBsaXRlcmFsOiBicmFja2V0ZWQgfHwgL15cXHMrJC8udGVzdChjdXJyZW50RnVsbCksXG4gICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3BsaXRzO1xuICB9O1xuICBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IGZ1bmN0aW9uIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pIHtcbiAgICByZXR1cm4gX21hY3JvVG9rZW5Ub0Zvcm1hdE9wdHNbdG9rZW5dO1xuICB9O1xuICBmdW5jdGlvbiBGb3JtYXR0ZXIobG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gZm9ybWF0T3B0cztcbiAgICB0aGlzLmxvYyA9IGxvY2FsZTtcbiAgICB0aGlzLnN5c3RlbUxvYyA9IG51bGw7XG4gIH1cbiAgdmFyIF9wcm90byA9IEZvcm1hdHRlci5wcm90b3R5cGU7XG4gIF9wcm90by5mb3JtYXRXaXRoU3lzdGVtRGVmYXVsdCA9IGZ1bmN0aW9uIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7XG4gICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7XG4gICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7XG4gICAgfVxuICAgIHZhciBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRzLCBvcHRzKSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdCgpO1xuICB9O1xuICBfcHJvdG8uZm9ybWF0RGF0ZVRpbWUgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZShkdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH07XG4gIF9wcm90by5mb3JtYXREYXRlVGltZVBhcnRzID0gZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWVQYXJ0cyhkdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0VG9QYXJ0cygpO1xuICB9O1xuICBfcHJvdG8uZm9ybWF0SW50ZXJ2YWwgPSBmdW5jdGlvbiBmb3JtYXRJbnRlcnZhbChpbnRlcnZhbCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoaW50ZXJ2YWwuc3RhcnQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZHRmLmZvcm1hdFJhbmdlKGludGVydmFsLnN0YXJ0LnRvSlNEYXRlKCksIGludGVydmFsLmVuZC50b0pTRGF0ZSgpKTtcbiAgfTtcbiAgX3Byb3RvLnJlc29sdmVkT3B0aW9ucyA9IGZ1bmN0aW9uIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYucmVzb2x2ZWRPcHRpb25zKCk7XG4gIH07XG4gIF9wcm90by5udW0gPSBmdW5jdGlvbiBudW0obiwgcCkge1xuICAgIGlmIChwID09PSB2b2lkIDApIHtcbiAgICAgIHAgPSAwO1xuICAgIH1cbiAgICAvLyB3ZSBnZXQgc29tZSBwZXJmIG91dCBvZiBkb2luZyB0aGlzIGhlcmUsIGFubm95aW5nbHlcbiAgICBpZiAodGhpcy5vcHRzLmZvcmNlU2ltcGxlKSB7XG4gICAgICByZXR1cm4gcGFkU3RhcnQobiwgcCk7XG4gICAgfVxuICAgIHZhciBvcHRzID0gX2V4dGVuZHMoe30sIHRoaXMub3B0cyk7XG4gICAgaWYgKHAgPiAwKSB7XG4gICAgICBvcHRzLnBhZFRvID0gcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubG9jLm51bWJlckZvcm1hdHRlcihvcHRzKS5mb3JtYXQobik7XG4gIH07XG4gIF9wcm90by5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZtdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGtub3duRW5nbGlzaCA9IHRoaXMubG9jLmxpc3RpbmdNb2RlKCkgPT09IFwiZW5cIixcbiAgICAgIHVzZURhdGVUaW1lRm9ybWF0dGVyID0gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgJiYgdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgIT09IFwiZ3JlZ29yeVwiLFxuICAgICAgc3RyaW5nID0gZnVuY3Rpb24gc3RyaW5nKG9wdHMsIGV4dHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxvYy5leHRyYWN0KGR0LCBvcHRzLCBleHRyYWN0KTtcbiAgICAgIH0sXG4gICAgICBmb3JtYXRPZmZzZXQgPSBmdW5jdGlvbiBmb3JtYXRPZmZzZXQob3B0cykge1xuICAgICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcbiAgICAgICAgICByZXR1cm4gXCJaXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR0LmlzVmFsaWQgPyBkdC56b25lLmZvcm1hdE9mZnNldChkdC50cywgb3B0cy5mb3JtYXQpIDogXCJcIjtcbiAgICAgIH0sXG4gICAgICBtZXJpZGllbSA9IGZ1bmN0aW9uIG1lcmlkaWVtKCkge1xuICAgICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkgOiBzdHJpbmcoe1xuICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIGhvdXJDeWNsZTogXCJoMTJcIlxuICAgICAgICB9LCBcImRheXBlcmlvZFwiKTtcbiAgICAgIH0sXG4gICAgICBtb250aCA9IGZ1bmN0aW9uIG1vbnRoKGxlbmd0aCwgc3RhbmRhbG9uZSkge1xuICAgICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyhzdGFuZGFsb25lID8ge1xuICAgICAgICAgIG1vbnRoOiBsZW5ndGhcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBtb250aDogbGVuZ3RoLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgfSwgXCJtb250aFwiKTtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5ID0gZnVuY3Rpb24gd2Vla2RheShsZW5ndGgsIHN0YW5kYWxvbmUpIHtcbiAgICAgICAgcmV0dXJuIGtub3duRW5nbGlzaCA/IHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyhzdGFuZGFsb25lID8ge1xuICAgICAgICAgIHdlZWtkYXk6IGxlbmd0aFxuICAgICAgICB9IDoge1xuICAgICAgICAgIHdlZWtkYXk6IGxlbmd0aCxcbiAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgICB9LCBcIndlZWtkYXlcIik7XG4gICAgICB9LFxuICAgICAgbWF5YmVNYWNybyA9IGZ1bmN0aW9uIG1heWJlTWFjcm8odG9rZW4pIHtcbiAgICAgICAgdmFyIGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbik7XG4gICAgICAgIGlmIChmb3JtYXRPcHRzKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcmEgPSBmdW5jdGlvbiBlcmEobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBrbm93bkVuZ2xpc2ggPyBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyh7XG4gICAgICAgICAgZXJhOiBsZW5ndGhcbiAgICAgICAgfSwgXCJlcmFcIik7XG4gICAgICB9LFxuICAgICAgdG9rZW5Ub1N0cmluZyA9IGZ1bmN0aW9uIHRva2VuVG9TdHJpbmcodG9rZW4pIHtcbiAgICAgICAgLy8gV2hlcmUgcG9zc2libGU6IGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZS0xL2RhdGUtdGltZSNUT0MtU3RhbmRhbG9uZS12cy4tRm9ybWF0LVN0eWxlc1xuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgICAgLy8gbXNcbiAgICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taWxsaXNlY29uZCk7XG4gICAgICAgICAgY2FzZSBcInVcIjpcbiAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgY2FzZSBcIlNTU1wiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taWxsaXNlY29uZCwgMyk7XG4gICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnNlY29uZCk7XG4gICAgICAgICAgY2FzZSBcInNzXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnNlY29uZCwgMik7XG4gICAgICAgICAgLy8gZnJhY3Rpb25hbCBzZWNvbmRzXG4gICAgICAgICAgY2FzZSBcInV1XCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKE1hdGguZmxvb3IoZHQubWlsbGlzZWNvbmQgLyAxMCksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ1dXVcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwMCkpO1xuICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taW51dGUpO1xuICAgICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taW51dGUsIDIpO1xuICAgICAgICAgIC8vIGhvdXJzXG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xuICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMiwgMik7XG4gICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91cik7XG4gICAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIsIDIpO1xuICAgICAgICAgIC8vIG9mZnNldFxuICAgICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICs2XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHtcbiAgICAgICAgICAgICAgZm9ybWF0OiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgICBhbGxvd1o6IF90aGlzLm9wdHMuYWxsb3daXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzA2OjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHtcbiAgICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzA2MDBcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoe1xuICAgICAgICAgICAgICBmb3JtYXQ6IFwidGVjaGllXCIsXG4gICAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEVTVFxuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywge1xuICAgICAgICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgbG9jYWxlOiBfdGhpcy5sb2MubG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7XG4gICAgICAgICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgICAgICAgIGxvY2FsZTogX3RoaXMubG9jLmxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gem9uZVxuICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAvLyBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAgICAgICAgICAgIHJldHVybiBkdC56b25lTmFtZTtcbiAgICAgICAgICAvLyBtZXJpZGllbXNcbiAgICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgICAgcmV0dXJuIG1lcmlkaWVtKCk7XG4gICAgICAgICAgLy8gZGF0ZXNcbiAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgfSwgXCJkYXlcIikgOiBfdGhpcy5udW0oZHQuZGF5KTtcbiAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICAgIGRheTogXCIyLWRpZ2l0XCJcbiAgICAgICAgICAgIH0sIFwiZGF5XCIpIDogX3RoaXMubnVtKGR0LmRheSwgMik7XG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla2RheSk7XG4gICAgICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlcydcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwic2hvcnRcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcIm5hcnJvd1wiLCBmYWxzZSk7XG4gICAgICAgICAgLy8gbW9udGhzIC0gc3RhbmRhbG9uZVxuICAgICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgfSwgXCJtb250aFwiKSA6IF90aGlzLm51bShkdC5tb250aCk7XG4gICAgICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoLCAyKTtcbiAgICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphblxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgfSwgXCJtb250aFwiKSA6IF90aGlzLm51bShkdC5tb250aCk7XG4gICAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgICBtb250aDogXCIyLWRpZ2l0XCJcbiAgICAgICAgICAgIH0sIFwibW9udGhcIikgOiBfdGhpcy5udW0oZHQubW9udGgsIDIpO1xuICAgICAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCBmYWxzZSk7XG4gICAgICAgICAgLy8geWVhcnNcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAyMDE0XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIpO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxNFxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgICAgeWVhcjogXCIyLWRpZ2l0XCJcbiAgICAgICAgICAgIH0sIFwieWVhclwiKSA6IF90aGlzLm51bShkdC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgICBjYXNlIFwieXl5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMDEyXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIsIDQpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAgIC8vIGVyYXNcbiAgICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBRFxuICAgICAgICAgICAgcmV0dXJuIGVyYShcInNob3J0XCIpO1xuICAgICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxuICAgICAgICAgICAgcmV0dXJuIGVyYShcImxvbmdcIik7XG4gICAgICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgICAgICByZXR1cm4gZXJhKFwibmFycm93XCIpO1xuICAgICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrWWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla1llYXIsIDQpO1xuICAgICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuICAgICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrTnVtYmVyLCAyKTtcbiAgICAgICAgICBjYXNlIFwib1wiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5vcmRpbmFsKTtcbiAgICAgICAgICBjYXNlIFwib29vXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xuICAgICAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQucXVhcnRlcik7XG4gICAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnF1YXJ0ZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKE1hdGguZmxvb3IoZHQudHMgLyAxMDAwKSk7XG4gICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQudHMpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbWF5YmVNYWNybyh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgdG9rZW5Ub1N0cmluZyk7XG4gIH07XG4gIF9wcm90by5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXREdXJhdGlvbkZyb21TdHJpbmcoZHVyLCBmbXQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICB2YXIgdG9rZW5Ub0ZpZWxkID0gZnVuY3Rpb24gdG9rZW5Ub0ZpZWxkKHRva2VuKSB7XG4gICAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG4gICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJob3VyXCI7XG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgICAgICByZXR1cm4gXCJ3ZWVrXCI7XG4gICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG4gICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgIHJldHVybiBcInllYXJcIjtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlblRvU3RyaW5nID0gZnVuY3Rpb24gdG9rZW5Ub1N0cmluZyhsaWxkdXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgIHZhciBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xuICAgICAgICAgIGlmIChtYXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uIChmb3VuZCwgX3JlZikge1xuICAgICAgICB2YXIgbGl0ZXJhbCA9IF9yZWYubGl0ZXJhbCxcbiAgICAgICAgICB2YWwgPSBfcmVmLnZhbDtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwgPyBmb3VuZCA6IGZvdW5kLmNvbmNhdCh2YWwpO1xuICAgICAgfSwgW10pLFxuICAgICAgY29sbGFwc2VkID0gZHVyLnNoaWZ0VG8uYXBwbHkoZHVyLCByZWFsVG9rZW5zLm1hcCh0b2tlblRvRmllbGQpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0pKTtcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcbiAgfTtcbiAgcmV0dXJuIEZvcm1hdHRlcjtcbn0oKTtcblxudmFyIEludmFsaWQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLmV4cGxhbmF0aW9uID0gZXhwbGFuYXRpb247XG4gIH1cbiAgdmFyIF9wcm90byA9IEludmFsaWQucHJvdG90eXBlO1xuICBfcHJvdG8udG9NZXNzYWdlID0gZnVuY3Rpb24gdG9NZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb24gKyBcIjogXCIgKyB0aGlzLmV4cGxhbmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb247XG4gICAgfVxuICB9O1xuICByZXR1cm4gSW52YWxpZDtcbn0oKTtcblxuLypcbiAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6XG4gKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC5cbiAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3RcbiAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLlxuICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhIFwiY3Vyc29yXCIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgaW4gdGhlIG1hdGNoIHRvIGxvb2sgYXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBjb21iaW5lIGV4dHJhY3RvcnMuXG4gKiBjb21iaW5lRXh0cmFjdG9ycygpIGRvZXMgdGhlIHdvcmsgb2YgY29tYmluaW5nIHRoZW0sIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnNvciB0aHJvdWdoIG11bHRpcGxlIGV4dHJhY3Rpb25zLlxuICogU29tZSBleHRyYWN0aW9ucyBhcmUgc3VwZXIgZHVtYiBhbmQgc2ltcGxlUGFyc2UgYW5kIGZyb21TdHJpbmdzIGhlbHAgRFJZIHRoZW0uXG4gKi9cblxudmFyIGlhbmFSZWdleCA9IC9bQS1aYS16XystXXsxLDI1Nn0oPzo6P1xcL1tBLVphLXowLTlfKy1dezEsMjU2fSg/OlxcL1tBLVphLXowLTlfKy1dezEsMjU2fSk/KT8vO1xuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZWdleGVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlZ2V4ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgdmFyIGZ1bGwgPSByZWdleGVzLnJlZHVjZShmdW5jdGlvbiAoZiwgcikge1xuICAgIHJldHVybiBmICsgci5zb3VyY2U7XG4gIH0sIFwiXCIpO1xuICByZXR1cm4gUmVnRXhwKFwiXlwiICsgZnVsbCArIFwiJFwiKTtcbn1cbmZ1bmN0aW9uIGNvbWJpbmVFeHRyYWN0b3JzKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGV4dHJhY3RvcnMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBleHRyYWN0b3JzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChfcmVmLCBleCkge1xuICAgICAgdmFyIG1lcmdlZFZhbHMgPSBfcmVmWzBdLFxuICAgICAgICBtZXJnZWRab25lID0gX3JlZlsxXSxcbiAgICAgICAgY3Vyc29yID0gX3JlZlsyXTtcbiAgICAgIHZhciBfZXggPSBleChtLCBjdXJzb3IpLFxuICAgICAgICB2YWwgPSBfZXhbMF0sXG4gICAgICAgIHpvbmUgPSBfZXhbMV0sXG4gICAgICAgIG5leHQgPSBfZXhbMl07XG4gICAgICByZXR1cm4gW19leHRlbmRzKHt9LCBtZXJnZWRWYWxzLCB2YWwpLCB6b25lIHx8IG1lcmdlZFpvbmUsIG5leHRdO1xuICAgIH0sIFt7fSwgbnVsbCwgMV0pLnNsaWNlKDAsIDIpO1xuICB9O1xufVxuZnVuY3Rpb24gcGFyc2Uocykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhdHRlcm5zID0gbmV3IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBwYXR0ZXJuc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuICBmb3IgKHZhciBfaSA9IDAsIF9wYXR0ZXJucyA9IHBhdHRlcm5zOyBfaSA8IF9wYXR0ZXJucy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgX3BhdHRlcm5zJF9pID0gX3BhdHRlcm5zW19pXSxcbiAgICAgIHJlZ2V4ID0gX3BhdHRlcm5zJF9pWzBdLFxuICAgICAgZXh0cmFjdG9yID0gX3BhdHRlcm5zJF9pWzFdO1xuICAgIHZhciBtID0gcmVnZXguZXhlYyhzKTtcbiAgICBpZiAobSkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RvcihtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtudWxsLCBudWxsXTtcbn1cbmZ1bmN0aW9uIHNpbXBsZVBhcnNlKCkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGtleXMgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBrZXlzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwgY3Vyc29yKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXRba2V5c1tpXV0gPSBwYXJzZUludGVnZXIobWF0Y2hbY3Vyc29yICsgaV0pO1xuICAgIH1cbiAgICByZXR1cm4gW3JldCwgbnVsbCwgY3Vyc29yICsgaV07XG4gIH07XG59XG5cbi8vIElTTyBhbmQgU1FMIHBhcnNpbmdcbnZhciBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS87XG52YXIgaXNvRXh0ZW5kZWRab25lID0gXCIoPzpcIiArIG9mZnNldFJlZ2V4LnNvdXJjZSArIFwiPyg/OlxcXFxbKFwiICsgaWFuYVJlZ2V4LnNvdXJjZSArIFwiKVxcXFxdKT8pP1wiO1xudmFyIGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsMzB9KSk/KT8pPy87XG52YXIgaXNvVGltZVJlZ2V4ID0gUmVnRXhwKFwiXCIgKyBpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZSArIGlzb0V4dGVuZGVkWm9uZSk7XG52YXIgaXNvVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKFwiKD86VFwiICsgaXNvVGltZVJlZ2V4LnNvdXJjZSArIFwiKT9cIik7XG52YXIgaXNvWW1kUmVnZXggPSAvKFsrLV1cXGR7Nn18XFxkezR9KSg/Oi0/KFxcZFxcZCkoPzotPyhcXGRcXGQpKT8pPy87XG52YXIgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vO1xudmFyIGlzb09yZGluYWxSZWdleCA9IC8oXFxkezR9KS0/KFxcZHszfSkvO1xudmFyIGV4dHJhY3RJU09XZWVrRGF0YSA9IHNpbXBsZVBhcnNlKFwid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla0RheVwiKTtcbnZhciBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZShcInllYXJcIiwgXCJvcmRpbmFsXCIpO1xudmFyIHNxbFltZFJlZ2V4ID0gLyhcXGR7NH0pLShcXGRcXGQpLShcXGRcXGQpLzsgLy8gZHVtYmVkLWRvd24gdmVyc2lvbiBvZiB0aGUgSVNPIG9uZVxudmFyIHNxbFRpbWVSZWdleCA9IFJlZ0V4cChpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZSArIFwiID8oPzpcIiArIG9mZnNldFJlZ2V4LnNvdXJjZSArIFwifChcIiArIGlhbmFSZWdleC5zb3VyY2UgKyBcIikpP1wiKTtcbnZhciBzcWxUaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoXCIoPzogXCIgKyBzcWxUaW1lUmVnZXguc291cmNlICsgXCIpP1wiKTtcbmZ1bmN0aW9uIGludChtYXRjaCwgcG9zLCBmYWxsYmFjaykge1xuICB2YXIgbSA9IG1hdGNoW3Bvc107XG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xufVxuZnVuY3Rpb24gZXh0cmFjdElTT1ltZChtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciBpdGVtID0ge1xuICAgIHllYXI6IGludChtYXRjaCwgY3Vyc29yKSxcbiAgICBtb250aDogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAxKSxcbiAgICBkYXk6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMSlcbiAgfTtcbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyAzXTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RJU09UaW1lKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIGl0ZW0gPSB7XG4gICAgaG91cnM6IGludChtYXRjaCwgY3Vyc29yLCAwKSxcbiAgICBtaW51dGVzOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDApLFxuICAgIHNlY29uZHM6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMCksXG4gICAgbWlsbGlzZWNvbmRzOiBwYXJzZU1pbGxpcyhtYXRjaFtjdXJzb3IgKyAzXSlcbiAgfTtcbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyA0XTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RJU09PZmZzZXQobWF0Y2gsIGN1cnNvcikge1xuICB2YXIgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV0sXG4gICAgZnVsbE9mZnNldCA9IHNpZ25lZE9mZnNldChtYXRjaFtjdXJzb3IgKyAxXSwgbWF0Y2hbY3Vyc29yICsgMl0pLFxuICAgIHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdO1xufVxuZnVuY3Rpb24gZXh0cmFjdElBTkFab25lKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIHpvbmUgPSBtYXRjaFtjdXJzb3JdID8gSUFOQVpvbmUuY3JlYXRlKG1hdGNoW2N1cnNvcl0pIDogbnVsbDtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgMV07XG59XG5cbi8vIElTTyB0aW1lIHBhcnNpbmdcblxudmFyIGlzb1RpbWVPbmx5ID0gUmVnRXhwKFwiXlQ/XCIgKyBpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZSArIFwiJFwiKTtcblxuLy8gSVNPIGR1cmF0aW9uIHBhcnNpbmdcblxudmFyIGlzb0R1cmF0aW9uID0gL14tP1AoPzooPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylZKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylXKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylEKT8oPzpUKD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pSCk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pTSk/KD86KC0/XFxkezEsMjB9KSg/OlsuLF0oLT9cXGR7MSwyMH0pKT9TKT8pPykkLztcbmZ1bmN0aW9uIGV4dHJhY3RJU09EdXJhdGlvbihtYXRjaCkge1xuICB2YXIgcyA9IG1hdGNoWzBdLFxuICAgIHllYXJTdHIgPSBtYXRjaFsxXSxcbiAgICBtb250aFN0ciA9IG1hdGNoWzJdLFxuICAgIHdlZWtTdHIgPSBtYXRjaFszXSxcbiAgICBkYXlTdHIgPSBtYXRjaFs0XSxcbiAgICBob3VyU3RyID0gbWF0Y2hbNV0sXG4gICAgbWludXRlU3RyID0gbWF0Y2hbNl0sXG4gICAgc2Vjb25kU3RyID0gbWF0Y2hbN10sXG4gICAgbWlsbGlzZWNvbmRzU3RyID0gbWF0Y2hbOF07XG4gIHZhciBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09IFwiLVwiO1xuICB2YXIgbmVnYXRpdmVTZWNvbmRzID0gc2Vjb25kU3RyICYmIHNlY29uZFN0clswXSA9PT0gXCItXCI7XG4gIHZhciBtYXliZU5lZ2F0ZSA9IGZ1bmN0aW9uIG1heWJlTmVnYXRlKG51bSwgZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkge1xuICAgICAgZm9yY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bSAhPT0gdW5kZWZpbmVkICYmIChmb3JjZSB8fCBudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXgpID8gLW51bSA6IG51bTtcbiAgfTtcbiAgcmV0dXJuIFt7XG4gICAgeWVhcnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoeWVhclN0cikpLFxuICAgIG1vbnRoczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhtb250aFN0cikpLFxuICAgIHdlZWtzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHdlZWtTdHIpKSxcbiAgICBkYXlzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKGRheVN0cikpLFxuICAgIGhvdXJzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKGhvdXJTdHIpKSxcbiAgICBtaW51dGVzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1pbnV0ZVN0cikpLFxuICAgIHNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoc2Vjb25kU3RyKSwgc2Vjb25kU3RyID09PSBcIi0wXCIpLFxuICAgIG1pbGxpc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VNaWxsaXMobWlsbGlzZWNvbmRzU3RyKSwgbmVnYXRpdmVTZWNvbmRzKVxuICB9XTtcbn1cblxuLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxudmFyIG9ic09mZnNldHMgPSB7XG4gIEdNVDogMCxcbiAgRURUOiAtNCAqIDYwLFxuICBFU1Q6IC01ICogNjAsXG4gIENEVDogLTUgKiA2MCxcbiAgQ1NUOiAtNiAqIDYwLFxuICBNRFQ6IC02ICogNjAsXG4gIE1TVDogLTcgKiA2MCxcbiAgUERUOiAtNyAqIDYwLFxuICBQU1Q6IC04ICogNjBcbn07XG5mdW5jdGlvbiBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHllYXI6IHllYXJTdHIubGVuZ3RoID09PSAyID8gdW50cnVuY2F0ZVllYXIocGFyc2VJbnRlZ2VyKHllYXJTdHIpKSA6IHBhcnNlSW50ZWdlcih5ZWFyU3RyKSxcbiAgICBtb250aDogbW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0cikgKyAxLFxuICAgIGRheTogcGFyc2VJbnRlZ2VyKGRheVN0ciksXG4gICAgaG91cjogcGFyc2VJbnRlZ2VyKGhvdXJTdHIpLFxuICAgIG1pbnV0ZTogcGFyc2VJbnRlZ2VyKG1pbnV0ZVN0cilcbiAgfTtcbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpO1xuICBpZiAod2Vla2RheVN0cikge1xuICAgIHJlc3VsdC53ZWVrZGF5ID0gd2Vla2RheVN0ci5sZW5ndGggPiAzID8gd2Vla2RheXNMb25nLmluZGV4T2Yod2Vla2RheVN0cikgKyAxIDogd2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpICsgMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBSRkMgMjgyMi81MzIyXG52YXIgcmZjMjgyMiA9IC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcbmZ1bmN0aW9uIGV4dHJhY3RSRkMyODIyKG1hdGNoKSB7XG4gIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sXG4gICAgZGF5U3RyID0gbWF0Y2hbMl0sXG4gICAgbW9udGhTdHIgPSBtYXRjaFszXSxcbiAgICB5ZWFyU3RyID0gbWF0Y2hbNF0sXG4gICAgaG91clN0ciA9IG1hdGNoWzVdLFxuICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzZdLFxuICAgIHNlY29uZFN0ciA9IG1hdGNoWzddLFxuICAgIG9ic09mZnNldCA9IG1hdGNoWzhdLFxuICAgIG1pbE9mZnNldCA9IG1hdGNoWzldLFxuICAgIG9mZkhvdXJTdHIgPSBtYXRjaFsxMF0sXG4gICAgb2ZmTWludXRlU3RyID0gbWF0Y2hbMTFdLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgdmFyIG9mZnNldDtcbiAgaWYgKG9ic09mZnNldCkge1xuICAgIG9mZnNldCA9IG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgfSBlbHNlIGlmIChtaWxPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSAwO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldCA9IHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpO1xuICB9XG4gIHJldHVybiBbcmVzdWx0LCBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCldO1xufVxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICByZXR1cm4gcy5yZXBsYWNlKC9cXChbXigpXSpcXCl8W1xcblxcdF0vZywgXCIgXCIpLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCBcIiBcIikudHJpbSgpO1xufVxuXG4vLyBodHRwIGRhdGVcblxudmFyIHJmYzExMjMgPSAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLCAoXFxkXFxkKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpIChcXGR7NH0pIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICByZmM4NTAgPSAvXihNb25kYXl8VHVlc2RheXxXZWRuZXNkYXl8VGh1cnNkYXl8RnJpZGF5fFNhdHVyZGF5fFN1bmRheSksIChcXGRcXGQpLShKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYyktKFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gIGFzY2lpID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXFxkfFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgKFxcZHs0fSkkLztcbmZ1bmN0aW9uIGV4dHJhY3RSRkMxMTIzT3I4NTAobWF0Y2gpIHtcbiAgdmFyIHdlZWtkYXlTdHIgPSBtYXRjaFsxXSxcbiAgICBkYXlTdHIgPSBtYXRjaFsyXSxcbiAgICBtb250aFN0ciA9IG1hdGNoWzNdLFxuICAgIHllYXJTdHIgPSBtYXRjaFs0XSxcbiAgICBob3VyU3RyID0gbWF0Y2hbNV0sXG4gICAgbWludXRlU3RyID0gbWF0Y2hbNl0sXG4gICAgc2Vjb25kU3RyID0gbWF0Y2hbN10sXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RBU0NJSShtYXRjaCkge1xuICB2YXIgd2Vla2RheVN0ciA9IG1hdGNoWzFdLFxuICAgIG1vbnRoU3RyID0gbWF0Y2hbMl0sXG4gICAgZGF5U3RyID0gbWF0Y2hbM10sXG4gICAgaG91clN0ciA9IG1hdGNoWzRdLFxuICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzVdLFxuICAgIHNlY29uZFN0ciA9IG1hdGNoWzZdLFxuICAgIHllYXJTdHIgPSBtYXRjaFs3XSxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxudmFyIGlzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29ZbWRSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb09yZGluYWxSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBpc29UaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1RpbWVSZWdleCk7XG52YXIgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPWW1kLCBleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCwgZXh0cmFjdElBTkFab25lKTtcbnZhciBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPV2Vla0RhdGEsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpO1xudmFyIGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWUgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPT3JkaW5hbERhdGEsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpO1xudmFyIGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQsIGV4dHJhY3RJQU5BWm9uZSk7XG5cbi8qXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSVNPRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXRdLCBbaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldF0sIFtpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZV0sIFtpc29UaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXRdKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUkZDMjgyMkRhdGUocykge1xuICByZXR1cm4gcGFyc2UocHJlcHJvY2Vzc1JGQzI4MjIocyksIFtyZmMyODIyLCBleHRyYWN0UkZDMjgyMl0pO1xufVxuZnVuY3Rpb24gcGFyc2VIVFRQRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbcmZjMTEyMywgZXh0cmFjdFJGQzExMjNPcjg1MF0sIFtyZmM4NTAsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLCBbYXNjaWksIGV4dHJhY3RBU0NJSV0pO1xufVxuZnVuY3Rpb24gcGFyc2VJU09EdXJhdGlvbihzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvRHVyYXRpb24sIGV4dHJhY3RJU09EdXJhdGlvbl0pO1xufVxudmFyIGV4dHJhY3RJU09UaW1lT25seSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lKTtcbmZ1bmN0aW9uIHBhcnNlSVNPVGltZU9ubHkocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb1RpbWVPbmx5LCBleHRyYWN0SVNPVGltZU9ubHldKTtcbn1cbnZhciBzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsWW1kUmVnZXgsIHNxbFRpbWVFeHRlbnNpb25SZWdleCk7XG52YXIgc3FsVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxUaW1lUmVnZXgpO1xudmFyIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCwgZXh0cmFjdElBTkFab25lKTtcbmZ1bmN0aW9uIHBhcnNlU1FMKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sIFtzcWxUaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZV0pO1xufVxuXG52YXIgSU5WQUxJRCQyID0gXCJJbnZhbGlkIER1cmF0aW9uXCI7XG5cbi8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHNcbnZhciBsb3dPcmRlck1hdHJpeCA9IHtcbiAgICB3ZWVrczoge1xuICAgICAgZGF5czogNyxcbiAgICAgIGhvdXJzOiA3ICogMjQsXG4gICAgICBtaW51dGVzOiA3ICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfSxcbiAgICBkYXlzOiB7XG4gICAgICBob3VyczogMjQsXG4gICAgICBtaW51dGVzOiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfSxcbiAgICBob3Vyczoge1xuICAgICAgbWludXRlczogNjAsXG4gICAgICBzZWNvbmRzOiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMFxuICAgIH0sXG4gICAgbWludXRlczoge1xuICAgICAgc2Vjb25kczogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDYwICogMTAwMFxuICAgIH0sXG4gICAgc2Vjb25kczoge1xuICAgICAgbWlsbGlzZWNvbmRzOiAxMDAwXG4gICAgfVxuICB9LFxuICBjYXN1YWxNYXRyaXggPSBfZXh0ZW5kcyh7XG4gICAgeWVhcnM6IHtcbiAgICAgIHF1YXJ0ZXJzOiA0LFxuICAgICAgbW9udGhzOiAxMixcbiAgICAgIHdlZWtzOiA1MixcbiAgICAgIGRheXM6IDM2NSxcbiAgICAgIGhvdXJzOiAzNjUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDM2NSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9LFxuICAgIHF1YXJ0ZXJzOiB7XG4gICAgICBtb250aHM6IDMsXG4gICAgICB3ZWVrczogMTMsXG4gICAgICBkYXlzOiA5MSxcbiAgICAgIGhvdXJzOiA5MSAqIDI0LFxuICAgICAgbWludXRlczogOTEgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDkxICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICB3ZWVrczogNCxcbiAgICAgIGRheXM6IDMwLFxuICAgICAgaG91cnM6IDMwICogMjQsXG4gICAgICBtaW51dGVzOiAzMCAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfVxuICB9LCBsb3dPcmRlck1hdHJpeCksXG4gIGRheXNJblllYXJBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDAwLFxuICBkYXlzSW5Nb250aEFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0ODAwLFxuICBhY2N1cmF0ZU1hdHJpeCA9IF9leHRlbmRzKHtcbiAgICB5ZWFyczoge1xuICAgICAgcXVhcnRlcnM6IDQsXG4gICAgICBtb250aHM6IDEyLFxuICAgICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDcsXG4gICAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUsXG4gICAgICBob3VyczogZGF5c0luWWVhckFjY3VyYXRlICogMjQsXG4gICAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfSxcbiAgICBxdWFydGVyczoge1xuICAgICAgbW9udGhzOiAzLFxuICAgICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxuICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcbiAgICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAvIDQsXG4gICAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwIC8gNCxcbiAgICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAvIDQsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAgLyA0XG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiBkYXlzSW5Nb250aEFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LFxuICAgICAgbWludXRlczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIH1cbiAgfSwgbG93T3JkZXJNYXRyaXgpO1xuXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcbnZhciBvcmRlcmVkVW5pdHMkMSA9IFtcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCJdO1xudmFyIHJldmVyc2VVbml0cyA9IG9yZGVyZWRVbml0cyQxLnNsaWNlKDApLnJldmVyc2UoKTtcblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zIFwiY3JlYXRlIGFub3RoZXIgaW5zdGFuY2UganVzdCBsaWtlIHRoaXMgb25lLCBidXQgd2l0aCB0aGVzZSBjaGFuZ2VzXCJcbmZ1bmN0aW9uIGNsb25lJDEoZHVyLCBhbHRzLCBjbGVhcikge1xuICBpZiAoY2xlYXIgPT09IHZvaWQgMCkge1xuICAgIGNsZWFyID0gZmFsc2U7XG4gIH1cbiAgLy8gZGVlcCBtZXJnZSBmb3IgdmFsc1xuICB2YXIgY29uZiA9IHtcbiAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiBfZXh0ZW5kcyh7fSwgZHVyLnZhbHVlcywgYWx0cy52YWx1ZXMgfHwge30pLFxuICAgIGxvYzogZHVyLmxvYy5jbG9uZShhbHRzLmxvYyksXG4gICAgY29udmVyc2lvbkFjY3VyYWN5OiBhbHRzLmNvbnZlcnNpb25BY2N1cmFjeSB8fCBkdXIuY29udmVyc2lvbkFjY3VyYWN5LFxuICAgIG1hdHJpeDogYWx0cy5tYXRyaXggfHwgZHVyLm1hdHJpeFxuICB9O1xuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xufVxuZnVuY3Rpb24gYW50aVRydW5jKG4pIHtcbiAgcmV0dXJuIG4gPCAwID8gTWF0aC5mbG9vcihuKSA6IE1hdGguY2VpbChuKTtcbn1cblxuLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xuZnVuY3Rpb24gY29udmVydChtYXRyaXgsIGZyb21NYXAsIGZyb21Vbml0LCB0b01hcCwgdG9Vbml0KSB7XG4gIHZhciBjb252ID0gbWF0cml4W3RvVW5pdF1bZnJvbVVuaXRdLFxuICAgIHJhdyA9IGZyb21NYXBbZnJvbVVuaXRdIC8gY29udixcbiAgICBzYW1lU2lnbiA9IE1hdGguc2lnbihyYXcpID09PSBNYXRoLnNpZ24odG9NYXBbdG9Vbml0XSksXG4gICAgLy8gb2ssIHNvIHRoaXMgaXMgd2lsZCwgYnV0IHNlZSB0aGUgbWF0cml4IGluIHRoZSB0ZXN0c1xuICAgIGFkZGVkID0gIXNhbWVTaWduICYmIHRvTWFwW3RvVW5pdF0gIT09IDAgJiYgTWF0aC5hYnMocmF3KSA8PSAxID8gYW50aVRydW5jKHJhdykgOiBNYXRoLnRydW5jKHJhdyk7XG4gIHRvTWFwW3RvVW5pdF0gKz0gYWRkZWQ7XG4gIGZyb21NYXBbZnJvbVVuaXRdIC09IGFkZGVkICogY29udjtcbn1cblxuLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWVzKG1hdHJpeCwgdmFscykge1xuICByZXZlcnNlVW5pdHMucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91cywgY3VycmVudCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodmFsc1tjdXJyZW50XSkpIHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb252ZXJ0KG1hdHJpeCwgdmFscywgcHJldmlvdXMsIHZhbHMsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICB9XG4gIH0sIG51bGwpO1xufVxuXG4vLyBSZW1vdmUgYWxsIHByb3BlcnRpZXMgd2l0aCBhIHZhbHVlIG9mIDAgZnJvbSBhbiBvYmplY3RcbmZ1bmN0aW9uIHJlbW92ZVplcm9lcyh2YWxzKSB7XG4gIHZhciBuZXdWYWxzID0ge307XG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRlbnRyaWVzID0gT2JqZWN0LmVudHJpZXModmFscyk7IF9pIDwgX09iamVjdCRlbnRyaWVzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBfT2JqZWN0JGVudHJpZXMkX2kgPSBfT2JqZWN0JGVudHJpZXNbX2ldLFxuICAgICAga2V5ID0gX09iamVjdCRlbnRyaWVzJF9pWzBdLFxuICAgICAgdmFsdWUgPSBfT2JqZWN0JGVudHJpZXMkX2lbMV07XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICBuZXdWYWxzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld1ZhbHM7XG59XG5cbi8qKlxuICogQSBEdXJhdGlvbiBvYmplY3QgcmVwcmVzZW50cyBhIHBlcmlvZCBvZiB0aW1lLCBsaWtlIFwiMiBtb250aHNcIiBvciBcIjEgZGF5LCAxIGhvdXJcIi4gQ29uY2VwdHVhbGx5LCBpdCdzIGp1c3QgYSBtYXAgb2YgdW5pdHMgdG8gdGhlaXIgcXVhbnRpdGllcywgYWNjb21wYW5pZWQgYnkgc29tZSBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gYW5kIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uIFRoZXkgY2FuIGJlIHVzZWQgb24gdGhlaXIgb3duIG9yIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgTHV4b24gdHlwZXM7IGZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c30gdG8gYWRkIGEgRHVyYXRpb24gb2JqZWN0IHRvIGEgRGF0ZVRpbWUsIHByb2R1Y2luZyBhbm90aGVyIERhdGVUaW1lLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gRHVyYXRpb246XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGEgRHVyYXRpb24sIHVzZSB7QGxpbmsgRHVyYXRpb24uZnJvbU1pbGxpc30sIHtAbGluayBEdXJhdGlvbi5mcm9tT2JqZWN0fSwgb3Ige0BsaW5rIER1cmF0aW9uLmZyb21JU099LlxuICogKiAqKlVuaXQgdmFsdWVzKiogU2VlIHRoZSB7QGxpbmsgRHVyYXRpb24jeWVhcnN9LCB7QGxpbmsgRHVyYXRpb24jbW9udGhzfSwge0BsaW5rIER1cmF0aW9uI3dlZWtzfSwge0BsaW5rIER1cmF0aW9uI2RheXN9LCB7QGxpbmsgRHVyYXRpb24jaG91cnN9LCB7QGxpbmsgRHVyYXRpb24jbWludXRlc30sIHtAbGluayBEdXJhdGlvbiNzZWNvbmRzfSwge0BsaW5rIER1cmF0aW9uI21pbGxpc2Vjb25kc30gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgIHtAbGluayBEdXJhdGlvbiNsb2NhbGV9IGFuZCB7QGxpbmsgRHVyYXRpb24jbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgbmV3IER1cmF0aW9ucyBvdXQgb2Ygb2xkIG9uZXMgdXNlIHtAbGluayBEdXJhdGlvbiNwbHVzfSwge0BsaW5rIER1cmF0aW9uI21pbnVzfSwge0BsaW5rIER1cmF0aW9uI25vcm1hbGl6ZX0sIHtAbGluayBEdXJhdGlvbiNzZXR9LCB7QGxpbmsgRHVyYXRpb24jcmVjb25maWd1cmV9LCB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30sIGFuZCB7QGxpbmsgRHVyYXRpb24jbmVnYXRlfS5cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBEdXJhdGlvbiBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBEdXJhdGlvbiNhc30sIHtAbGluayBEdXJhdGlvbiN0b0lTT30sIHtAbGluayBEdXJhdGlvbiN0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgRHVyYXRpb24jdG9KU09OfVxuICpcbiAqIFRoZXJlJ3MgYXJlIG1vcmUgbWV0aG9kcyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiBhbmQgdmFsaWRpdHksIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xudmFyIER1cmF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBEdXJhdGlvbihjb25maWcpIHtcbiAgICB2YXIgYWNjdXJhdGUgPSBjb25maWcuY29udmVyc2lvbkFjY3VyYWN5ID09PSBcImxvbmd0ZXJtXCIgfHwgZmFsc2U7XG4gICAgdmFyIG1hdHJpeCA9IGFjY3VyYXRlID8gYWNjdXJhdGVNYXRyaXggOiBjYXN1YWxNYXRyaXg7XG4gICAgaWYgKGNvbmZpZy5tYXRyaXgpIHtcbiAgICAgIG1hdHJpeCA9IGNvbmZpZy5tYXRyaXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWx1ZXMgPSBjb25maWcudmFsdWVzO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb252ZXJzaW9uQWNjdXJhY3kgPSBhY2N1cmF0ZSA/IFwibG9uZ3Rlcm1cIiA6IFwiY2FzdWFsXCI7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25EdXJhdGlvbiA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgb2YgbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIER1cmF0aW9uLmZyb21NaWxsaXMgPSBmdW5jdGlvbiBmcm9tTWlsbGlzKGNvdW50LCBvcHRzKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3Qoe1xuICAgICAgbWlsbGlzZWNvbmRzOiBjb3VudFxuICAgIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxuICAgKiBJZiB0aGlzIG9iamVjdCBpcyBlbXB0eSB0aGVuIGEgemVybyBtaWxsaXNlY29uZHMgZHVyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucXVhcnRlcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3Vyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz1bXV0gLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubWF0cml4PU9iamVjdF0gLSB0aGUgY3VzdG9tIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBEdXJhdGlvbi5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmosIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIGlmIChvYmogPT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJEdXJhdGlvbi5mcm9tT2JqZWN0OiBhcmd1bWVudCBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QsIGdvdCBcIiArIChvYmogPT09IG51bGwgPyBcIm51bGxcIiA6IHR5cGVvZiBvYmopKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7XG4gICAgICB2YWx1ZXM6IG5vcm1hbGl6ZU9iamVjdChvYmosIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRzKSxcbiAgICAgIGNvbnZlcnNpb25BY2N1cmFjeTogb3B0cy5jb252ZXJzaW9uQWNjdXJhY3ksXG4gICAgICBtYXRyaXg6IG9wdHMubWF0cml4XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBEdXJhdGlvbkxpa2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0IHwgbnVtYmVyIHwgRHVyYXRpb259IGR1cmF0aW9uTGlrZVxuICAgKiBPbmUgb2Y6XG4gICAqIC0gb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXG4gICAqIC0gbnVtYmVyIHJlcHJlc2VudGluZyBtaWxsaXNlY29uZHNcbiAgICogLSBEdXJhdGlvbiBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlID0gZnVuY3Rpb24gZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbkxpa2UpIHtcbiAgICBpZiAoaXNOdW1iZXIoZHVyYXRpb25MaWtlKSkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMoZHVyYXRpb25MaWtlKTtcbiAgICB9IGVsc2UgaWYgKER1cmF0aW9uLmlzRHVyYXRpb24oZHVyYXRpb25MaWtlKSkge1xuICAgICAgcmV0dXJuIGR1cmF0aW9uTGlrZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbkxpa2UgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KGR1cmF0aW9uTGlrZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIlVua25vd24gZHVyYXRpb24gYXJndW1lbnQgXCIgKyBkdXJhdGlvbkxpa2UgKyBcIiBvZiB0eXBlIFwiICsgdHlwZW9mIGR1cmF0aW9uTGlrZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgZHVyYXRpb24gc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubWF0cml4PU9iamVjdF0gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQM1k2TTFXNERUMTJIMzBNNVMnKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMywgbW9udGhzOiA2LCB3ZWVrczogMSwgZGF5czogNCwgaG91cnM6IDEyLCBtaW51dGVzOiAzMCwgc2Vjb25kczogNSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1BUMjNIJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDIzIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDVZM00nKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogNSwgbW9udGhzOiAzIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgRHVyYXRpb24uZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIHZhciBfcGFyc2VJU09EdXJhdGlvbiA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCksXG4gICAgICBwYXJzZWQgPSBfcGFyc2VJU09EdXJhdGlvblswXTtcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgdGltZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MjI6MzMuNDQ0JykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAyMiwgc2Vjb25kczogMzMsIG1pbGxpc2Vjb25kczogNDQ0IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgRHVyYXRpb24uZnJvbUlTT1RpbWUgPSBmdW5jdGlvbiBmcm9tSVNPVGltZSh0ZXh0LCBvcHRzKSB7XG4gICAgdmFyIF9wYXJzZUlTT1RpbWVPbmx5ID0gcGFyc2VJU09UaW1lT25seSh0ZXh0KSxcbiAgICAgIHBhcnNlZCA9IF9wYXJzZUlTT1RpbWVPbmx5WzBdO1xuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMVwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIGRhdGV0aW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBEdXJhdGlvbi5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZER1cmF0aW9uRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovO1xuICBEdXJhdGlvbi5ub3JtYWxpemVVbml0ID0gZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiBcInllYXJzXCIsXG4gICAgICB5ZWFyczogXCJ5ZWFyc1wiLFxuICAgICAgcXVhcnRlcjogXCJxdWFydGVyc1wiLFxuICAgICAgcXVhcnRlcnM6IFwicXVhcnRlcnNcIixcbiAgICAgIG1vbnRoOiBcIm1vbnRoc1wiLFxuICAgICAgbW9udGhzOiBcIm1vbnRoc1wiLFxuICAgICAgd2VlazogXCJ3ZWVrc1wiLFxuICAgICAgd2Vla3M6IFwid2Vla3NcIixcbiAgICAgIGRheTogXCJkYXlzXCIsXG4gICAgICBkYXlzOiBcImRheXNcIixcbiAgICAgIGhvdXI6IFwiaG91cnNcIixcbiAgICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgICBtaW51dGU6IFwibWludXRlc1wiLFxuICAgICAgbWludXRlczogXCJtaW51dGVzXCIsXG4gICAgICBzZWNvbmQ6IFwic2Vjb25kc1wiLFxuICAgICAgc2Vjb25kczogXCJzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZHNcIlxuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xuICAgIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGEgRHVyYXRpb24uIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBEdXJhdGlvbi5pc0R1cmF0aW9uID0gZnVuY3Rpb24gaXNEdXJhdGlvbihvKSB7XG4gICAgcmV0dXJuIG8gJiYgby5pc0x1eG9uRHVyYXRpb24gfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0ICB0aGUgbG9jYWxlIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2VuLUdCJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi87XG4gIHZhciBfcHJvdG8gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuIFlvdSBtYXkgdXNlIHRoZXNlIHRva2VuczpcbiAgICogKiBgU2AgZm9yIG1pbGxpc2Vjb25kc1xuICAgKiAqIGBzYCBmb3Igc2Vjb25kc1xuICAgKiAqIGBtYCBmb3IgbWludXRlc1xuICAgKiAqIGBoYCBmb3IgaG91cnNcbiAgICogKiBgZGAgZm9yIGRheXNcbiAgICogKiBgd2AgZm9yIHdlZWtzXG4gICAqICogYE1gIGZvciBtb250aHNcbiAgICogKiBgeWAgZm9yIHllYXJzXG4gICAqIE5vdGVzOlxuICAgKiAqIEFkZCBwYWRkaW5nIGJ5IHJlcGVhdGluZyB0aGUgdG9rZW4sIGUuZy4gXCJ5eVwiIHBhZHMgdGhlIHllYXJzIHRvIHR3byBkaWdpdHMsIFwiaGhoaFwiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0c1xuICAgKiAqIFRva2VucyBjYW4gYmUgZXNjYXBlZCBieSB3cmFwcGluZyB3aXRoIHNpbmdsZSBxdW90ZXMuXG4gICAqICogVGhlIGR1cmF0aW9uIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBzZXQgb2YgdW5pdHMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgdXNpbmcge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99IGFuZCB0aGUgRHVyYXRpb25zJ3MgY29udmVyc2lvbiBhY2N1cmFjeSBzZXR0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxvb3I9dHJ1ZV0gLSBmbG9vciBudW1lcmljYWwgdmFsdWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInkgZCBzXCIpIC8vPT4gXCIxIDYgMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInl5IGRkIHNzc1wiKSAvLz0+IFwiMDEgMDYgMDAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwiTSBTXCIpIC8vPT4gXCIxMiA1MTg0MDIwMDBcIlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBfcHJvdG8udG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChmbXQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIC8vIHJldmVyc2UtY29tcGF0IHNpbmNlIDEuMjsgd2UgYWx3YXlzIHJvdW5kIGRvd24gbm93LCBuZXZlciB1cCwgYW5kIHdlIGRvIGl0IGJ5IGRlZmF1bHRcbiAgICB2YXIgZm10T3B0cyA9IF9leHRlbmRzKHt9LCBvcHRzLCB7XG4gICAgICBmbG9vcjogb3B0cy5yb3VuZCAhPT0gZmFsc2UgJiYgb3B0cy5mbG9vciAhPT0gZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYywgZm10T3B0cykuZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKHRoaXMsIGZtdCkgOiBJTlZBTElEJDI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIER1cmF0aW9uIHdpdGggYWxsIHVuaXRzIGluY2x1ZGVkLlxuICAgKiBUbyBtb2RpZnkgaXRzIGJlaGF2aW9yIHVzZSB0aGUgYGxpc3RTdHlsZWAgYW5kIGFueSBJbnRsLk51bWJlckZvcm1hdCBvcHRpb24sIHRob3VnaCBgdW5pdERpc3BsYXlgIGlzIGVzcGVjaWFsbHkgcmVsZXZhbnQuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9OdW1iZXJGb3JtYXRcbiAgICogQHBhcmFtIG9wdHMgLSBPbiBvcHRpb24gb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBmb3JtYXR0aW5nLiBBY2NlcHRzIHRoZSBzYW1lIGtleXMgYXMgdGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9mIHRoZSBuYXRpdmUgYEludC5OdW1iZXJGb3JtYXRgIGNvbnN0cnVjdG9yLCBhcyB3ZWxsIGFzIGBsaXN0U3R5bGVgLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiB2YXIgZHVyID0gRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDEsIGhvdXJzOiA1LCBtaW51dGVzOiA2IH0pXG4gICAqIGR1ci50b0h1bWFuKCkgLy89PiAnMSBkYXksIDUgaG91cnMsIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyBsaXN0U3R5bGU6IFwibG9uZ1wiIH0pIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCBhbmQgNiBtaW51dGVzJ1xuICAgKiBkdXIudG9IdW1hbih7IHVuaXREaXNwbGF5OiBcInNob3J0XCIgfSkgLy89PiAnMSBkYXksIDUgaHIsIDYgbWluJ1xuICAgKiBgYGBcbiAgICovO1xuICBfcHJvdG8udG9IdW1hbiA9IGZ1bmN0aW9uIHRvSHVtYW4ob3B0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgbCA9IG9yZGVyZWRVbml0cyQxLm1hcChmdW5jdGlvbiAodW5pdCkge1xuICAgICAgdmFyIHZhbCA9IF90aGlzLnZhbHVlc1t1bml0XTtcbiAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIoX2V4dGVuZHMoe1xuICAgICAgICBzdHlsZTogXCJ1bml0XCIsXG4gICAgICAgIHVuaXREaXNwbGF5OiBcImxvbmdcIlxuICAgICAgfSwgb3B0cywge1xuICAgICAgICB1bml0OiB1bml0LnNsaWNlKDAsIC0xKVxuICAgICAgfSkpLmZvcm1hdCh2YWwpO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG47XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMubG9jLmxpc3RGb3JtYXR0ZXIoX2V4dGVuZHMoe1xuICAgICAgdHlwZTogXCJjb25qdW5jdGlvblwiLFxuICAgICAgc3R5bGU6IG9wdHMubGlzdFN0eWxlIHx8IFwibmFycm93XCJcbiAgICB9LCBvcHRzKSkuZm9ybWF0KGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRHVyYXRpb24ncyB2YWx1ZXMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovO1xuICBfcHJvdG8udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDMsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDNZVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNCwgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQNE1UNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA1IH0pLnRvSVNPKCkgLy89PiAnUDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogNSB9KS50b0lTTygpIC8vPT4gJ1BUNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDYgfSkudG9JU08oKSAvLz0+ICdQVDAuMDA2UydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0lTTyA9IGZ1bmN0aW9uIHRvSVNPKCkge1xuICAgIC8vIHdlIGNvdWxkIHVzZSB0aGUgZm9ybWF0dGVyLCBidXQgdGhpcyBpcyBhbiBlYXNpZXIgd2F5IHRvIGdldCB0aGUgbWluaW11bSBzdHJpbmdcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHMgPSBcIlBcIjtcbiAgICBpZiAodGhpcy55ZWFycyAhPT0gMCkgcyArPSB0aGlzLnllYXJzICsgXCJZXCI7XG4gICAgaWYgKHRoaXMubW9udGhzICE9PSAwIHx8IHRoaXMucXVhcnRlcnMgIT09IDApIHMgKz0gdGhpcy5tb250aHMgKyB0aGlzLnF1YXJ0ZXJzICogMyArIFwiTVwiO1xuICAgIGlmICh0aGlzLndlZWtzICE9PSAwKSBzICs9IHRoaXMud2Vla3MgKyBcIldcIjtcbiAgICBpZiAodGhpcy5kYXlzICE9PSAwKSBzICs9IHRoaXMuZGF5cyArIFwiRFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwIHx8IHRoaXMubWludXRlcyAhPT0gMCB8fCB0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApIHMgKz0gXCJUXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDApIHMgKz0gdGhpcy5ob3VycyArIFwiSFwiO1xuICAgIGlmICh0aGlzLm1pbnV0ZXMgIT09IDApIHMgKz0gdGhpcy5taW51dGVzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMClcbiAgICAgIC8vIHRoaXMgd2lsbCBoYW5kbGUgXCJmbG9hdGluZyBwb2ludCBtYWRuZXNzXCIgYnkgcmVtb3ZpbmcgZXh0cmEgZGVjaW1hbCBwbGFjZXNcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4ODAwNC9pcy1mbG9hdGluZy1wb2ludC1tYXRoLWJyb2tlblxuICAgICAgcyArPSByb3VuZFRvKHRoaXMuc2Vjb25kcyArIHRoaXMubWlsbGlzZWNvbmRzIC8gMTAwMCwgMykgKyBcIlNcIjtcbiAgICBpZiAocyA9PT0gXCJQXCIpIHMgKz0gXCJUMFNcIjtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiwgZm9ybWF0dGVkIGFzIGEgdGltZSBvZiBkYXkuXG4gICAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlIGR1cmF0aW9uIGlzIGludmFsaWQsIG5lZ2F0aXZlLCBvciBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gMjQgaG91cnMuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoKSAvLz0+ICcxMTowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NNaWxsaXNlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDA6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzExOjAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTEwMDAwLjAwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0lTT1RpbWUgPSBmdW5jdGlvbiB0b0lTT1RpbWUob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIHZhciBtaWxsaXMgPSB0aGlzLnRvTWlsbGlzKCk7XG4gICAgaWYgKG1pbGxpcyA8IDAgfHwgbWlsbGlzID49IDg2NDAwMDAwKSByZXR1cm4gbnVsbDtcbiAgICBvcHRzID0gX2V4dGVuZHMoe1xuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHM6IGZhbHNlLFxuICAgICAgc3VwcHJlc3NTZWNvbmRzOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVQcmVmaXg6IGZhbHNlLFxuICAgICAgZm9ybWF0OiBcImV4dGVuZGVkXCJcbiAgICB9LCBvcHRzKTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnNoaWZ0VG8oXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCIpO1xuICAgIHZhciBmbXQgPSBvcHRzLmZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJoaG1tXCIgOiBcImhoOm1tXCI7XG4gICAgaWYgKCFvcHRzLnN1cHByZXNzU2Vjb25kcyB8fCB2YWx1ZS5zZWNvbmRzICE9PSAwIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgZm10ICs9IG9wdHMuZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcInNzXCIgOiBcIjpzc1wiO1xuICAgICAgaWYgKCFvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgICBmbXQgKz0gXCIuU1NTXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzdHIgPSB2YWx1ZS50b0Zvcm1hdChmbXQpO1xuICAgIGlmIChvcHRzLmluY2x1ZGVQcmVmaXgpIHtcbiAgICAgIHN0ciA9IFwiVFwiICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLnRvTWlsbGlzID0gZnVuY3Rpb24gdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXMoXCJtaWxsaXNlY29uZHNcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLnBsdXMgPSBmdW5jdGlvbiBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIF9pMiA9IDAsIF9vcmRlcmVkVW5pdHMgPSBvcmRlcmVkVW5pdHMkMTsgX2kyIDwgX29yZGVyZWRVbml0cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgayA9IF9vcmRlcmVkVW5pdHNbX2kyXTtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShkdXIudmFsdWVzLCBrKSB8fCBoYXNPd25Qcm9wZXJ0eSh0aGlzLnZhbHVlcywgaykpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gZHVyLmdldChrKSArIHRoaXMuZ2V0KGspO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IHJlc3VsdFxuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIF9wcm90by5taW51cyA9IGZ1bmN0aW9uIG1pbnVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cyh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cygoeCwgdSkgPT4gdSA9PT0gXCJob3Vyc1wiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLm1hcFVuaXRzID0gZnVuY3Rpb24gbWFwVW5pdHMoZm4pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIF9pMyA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKTsgX2kzIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgIHZhciBrID0gX09iamVjdCRrZXlzW19pM107XG4gICAgICByZXN1bHRba10gPSBhc051bWJlcihmbih0aGlzLnZhbHVlc1trXSwgaykpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IHJlc3VsdFxuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgneWVhcnMnKSAvLz0+IDJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ21vbnRocycpIC8vPT4gMFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnZGF5cycpIC8vPT4gM1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KV07XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgeWVhcnM6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IGhvdXJzOiA4LCBtaW51dGVzOiAzMCB9KVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbWl4ZWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXMsIG5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpKTtcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IG1peGVkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlIGFuZC9vciBudW1iZXJpbmdTeXN0ZW0uICBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBleGFtcGxlIGR1ci5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8ucmVjb25maWd1cmUgPSBmdW5jdGlvbiByZWNvbmZpZ3VyZShfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5ID0gX3JlZi5jb252ZXJzaW9uQWNjdXJhY3ksXG4gICAgICBtYXRyaXggPSBfcmVmLm1hdHJpeDtcbiAgICB2YXIgbG9jID0gdGhpcy5sb2MuY2xvbmUoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbVxuICAgIH0pO1xuICAgIHZhciBvcHRzID0ge1xuICAgICAgbG9jOiBsb2MsXG4gICAgICBtYXRyaXg6IG1hdHJpeCxcbiAgICAgIGNvbnZlcnNpb25BY2N1cmFjeTogY29udmVyc2lvbkFjY3VyYWN5XG4gICAgfTtcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgZHVyYXRpb24gaW4gdGhlIHNwZWNpZmllZCB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGVzJyBvciAnZGF5cydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnZGF5cycpIC8vPT4gMzY1XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ21vbnRocycpIC8vPT4gMTJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7aG91cnM6IDYwfSkuYXMoJ2RheXMnKSAvLz0+IDIuNVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLmFzID0gZnVuY3Rpb24gYXModW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnNoaWZ0VG8odW5pdCkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMTUsIGRheXM6IDI1NSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTIsIG1pbnV0ZXM6IC00NSB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDE1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCB2YWxzKTtcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IHZhbHNcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNjYWxlIHVuaXRzIHRvIGl0cyBsYXJnZXN0IHJlcHJlc2VudGF0aW9uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDkwMDAwIH0pLnJlc2NhbGUoKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiAxLCBzZWNvbmRzOiAzMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIF9wcm90by5yZXNjYWxlID0gZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHZhbHMgPSByZW1vdmVaZXJvZXModGhpcy5ub3JtYWxpemUoKS5zaGlmdFRvQWxsKCkudG9PYmplY3QoKSk7XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdmFsdWVzOiB2YWxzXG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGlzIER1cmF0aW9uIGludG8gaXRzIHJlcHJlc2VudGF0aW9uIGluIGEgZGlmZmVyZW50IHNldCBvZiB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5zaGlmdFRvKCdtaW51dGVzJywgJ21pbGxpc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDYwLCBtaWxsaXNlY29uZHM6IDMwMDAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLnNoaWZ0VG8gPSBmdW5jdGlvbiBzaGlmdFRvKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB1bml0cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHVuaXRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVuaXRzID0gdW5pdHMubWFwKGZ1bmN0aW9uICh1KSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KTtcbiAgICB9KTtcbiAgICB2YXIgYnVpbHQgPSB7fSxcbiAgICAgIGFjY3VtdWxhdGVkID0ge30sXG4gICAgICB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIHZhciBsYXN0VW5pdDtcbiAgICBmb3IgKHZhciBfaTQgPSAwLCBfb3JkZXJlZFVuaXRzMiA9IG9yZGVyZWRVbml0cyQxOyBfaTQgPCBfb3JkZXJlZFVuaXRzMi5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICB2YXIgayA9IF9vcmRlcmVkVW5pdHMyW19pNF07XG4gICAgICBpZiAodW5pdHMuaW5kZXhPZihrKSA+PSAwKSB7XG4gICAgICAgIGxhc3RVbml0ID0gaztcbiAgICAgICAgdmFyIG93biA9IDA7XG5cbiAgICAgICAgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XG4gICAgICAgIGZvciAodmFyIGFrIGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTtcbiAgICAgICAgICBhY2N1bXVsYXRlZFtha10gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgICAgb3duICs9IHZhbHNba107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBNYXRoLnRydW5jKG93bik7XG4gICAgICAgIGJ1aWx0W2tdID0gaTtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSAob3duICogMTAwMCAtIGkgKiAxMDAwKSAvIDEwMDA7XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXG4gICAgICAgIGZvciAodmFyIGRvd24gaW4gdmFscykge1xuICAgICAgICAgIGlmIChvcmRlcmVkVW5pdHMkMS5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzJDEuaW5kZXhPZihrKSkge1xuICAgICAgICAgICAgY29udmVydCh0aGlzLm1hdHJpeCwgdmFscywgZG93biwgYnVpbHQsIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UsIGtlZXAgaXQgaW4gdGhlIHdpbmdzIHRvIGJvaWwgaXQgbGF0ZXJcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSB2YWxzW2tdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFueXRoaW5nIGxlZnRvdmVyIGJlY29tZXMgdGhlIGRlY2ltYWwgZm9yIHRoZSBsYXN0IHVuaXRcbiAgICAvLyBsYXN0VW5pdCBtdXN0IGJlIGRlZmluZWQgc2luY2UgdW5pdHMgaXMgbm90IGVtcHR5XG4gICAgZm9yICh2YXIga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz0ga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIHZhbHVlczogYnVpbHRcbiAgICB9LCB0cnVlKS5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGlmdCB0aGlzIER1cmF0aW9uIHRvIGFsbCBhdmFpbGFibGUgdW5pdHMuXG4gICAqIFNhbWUgYXMgc2hpZnRUbyhcInllYXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8uc2hpZnRUb0FsbCA9IGZ1bmN0aW9uIHNoaWZ0VG9BbGwoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiB0aGlzLnNoaWZ0VG8oXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuZWdhdGl2ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLm5lZ2F0ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAtMSwgc2Vjb25kczogLTMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLm5lZ2F0ZSA9IGZ1bmN0aW9uIG5lZ2F0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5lZ2F0ZWQgPSB7fTtcbiAgICBmb3IgKHZhciBfaTUgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXModGhpcy52YWx1ZXMpOyBfaTUgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2k1KyspIHtcbiAgICAgIHZhciBrID0gX09iamVjdCRrZXlzMltfaTVdO1xuICAgICAgbmVnYXRlZFtrXSA9IHRoaXMudmFsdWVzW2tdID09PSAwID8gMCA6IC10aGlzLnZhbHVlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdmFsdWVzOiBuZWdhdGVkXG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovO1xuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlcSh2MSwgdjIpIHtcbiAgICAgIC8vIENvbnNpZGVyIDAgYW5kIHVuZGVmaW5lZCBhcyBlcXVhbFxuICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQgfHwgdjEgPT09IDApIHJldHVybiB2MiA9PT0gdW5kZWZpbmVkIHx8IHYyID09PSAwO1xuICAgICAgcmV0dXJuIHYxID09PSB2MjtcbiAgICB9XG4gICAgZm9yICh2YXIgX2k2ID0gMCwgX29yZGVyZWRVbml0czMgPSBvcmRlcmVkVW5pdHMkMTsgX2k2IDwgX29yZGVyZWRVbml0czMubGVuZ3RoOyBfaTYrKykge1xuICAgICAgdmFyIHUgPSBfb3JkZXJlZFVuaXRzM1tfaTZdO1xuICAgICAgaWYgKCFlcSh0aGlzLnZhbHVlc1t1XSwgb3RoZXIudmFsdWVzW3VdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBfY3JlYXRlQ2xhc3MoRHVyYXRpb24sIFt7XG4gICAga2V5OiBcImxvY2FsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRHVyYXRpb25cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyaW5nU3lzdGVtXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwieWVhcnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy55ZWFycyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcXVhcnRlcnMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJxdWFydGVyc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnF1YXJ0ZXJzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb250aHMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJtb250aHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5tb250aHMgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHdlZWtzXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLndlZWtzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXlzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmRheXMgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGhvdXJzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiaG91cnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5ob3VycyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWludXRlcy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm1pbnV0ZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taW51dGVzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzZWNvbmRzLlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJzZWNvbmRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuc2Vjb25kcyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWlsbGlzZWNvbmRzLlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJtaWxsaXNlY29uZHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taWxsaXNlY29uZHMgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIER1cmF0aW9uIGlzIGludmFsaWQuIEludmFsaWQgZHVyYXRpb25zIGFyZSByZXR1cm5lZCBieSBkaWZmIG9wZXJhdGlvbnNcbiAgICAgKiBvbiBpbnZhbGlkIERhdGVUaW1lcyBvciBJbnRlcnZhbHMuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkUmVhc29uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRFeHBsYW5hdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBEdXJhdGlvbjtcbn0oKTtcblxudmFyIElOVkFMSUQkMSA9IFwiSW52YWxpZCBJbnRlcnZhbFwiO1xuXG4vLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXG5mdW5jdGlvbiB2YWxpZGF0ZVN0YXJ0RW5kKHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCB8fCAhc3RhcnQuaXNWYWxpZCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwibWlzc2luZyBvciBpbnZhbGlkIHN0YXJ0XCIpO1xuICB9IGVsc2UgaWYgKCFlbmQgfHwgIWVuZC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgZW5kXCIpO1xuICB9IGVsc2UgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJlbmQgYmVmb3JlIHN0YXJ0XCIsIFwiVGhlIGVuZCBvZiBhbiBpbnRlcnZhbCBtdXN0IGJlIGFmdGVyIGl0cyBzdGFydCwgYnV0IHlvdSBoYWQgc3RhcnQ9XCIgKyBzdGFydC50b0lTTygpICsgXCIgYW5kIGVuZD1cIiArIGVuZC50b0lTTygpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIEludGVydmFsIG9iamVjdCByZXByZXNlbnRzIGEgaGFsZi1vcGVuIGludGVydmFsIG9mIHRpbWUsIHdoZXJlIGVhY2ggZW5kcG9pbnQgaXMgYSB7QGxpbmsgRGF0ZVRpbWV9LiBDb25jZXB0dWFsbHksIGl0J3MgYSBjb250YWluZXIgZm9yIHRob3NlIHR3byBlbmRwb2ludHMsIGFjY29tcGFuaWVkIGJ5IG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCBjb21wYXJpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIEludGVydmFsOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhbiBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzfSwge0BsaW5rIEludGVydmFsLmFmdGVyfSwge0BsaW5rIEludGVydmFsLmJlZm9yZX0sIG9yIHtAbGluayBJbnRlcnZhbC5mcm9tSVNPfS5cbiAqICogKipBY2Nlc3NvcnMqKiBVc2Uge0BsaW5rIEludGVydmFsI3N0YXJ0fSBhbmQge0BsaW5rIEludGVydmFsI2VuZH0gdG8gZ2V0IHRoZSBzdGFydCBhbmQgZW5kLlxuICogKiAqKkludGVycm9nYXRpb24qKiBUbyBhbmFseXplIHRoZSBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbCNjb3VudH0sIHtAbGluayBJbnRlcnZhbCNsZW5ndGh9LCB7QGxpbmsgSW50ZXJ2YWwjaGFzU2FtZX0sIHtAbGluayBJbnRlcnZhbCNjb250YWluc30sIHtAbGluayBJbnRlcnZhbCNpc0FmdGVyfSwgb3Ige0BsaW5rIEludGVydmFsI2lzQmVmb3JlfS5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBvdGhlciBJbnRlcnZhbHMgb3V0IG9mIHRoaXMgb25lLCB1c2Uge0BsaW5rIEludGVydmFsI3NldH0sIHtAbGluayBJbnRlcnZhbCNzcGxpdEF0fSwge0BsaW5rIEludGVydmFsI3NwbGl0Qnl9LCB7QGxpbmsgSW50ZXJ2YWwjZGl2aWRlRXF1YWxseX0sIHtAbGluayBJbnRlcnZhbC5tZXJnZX0sIHtAbGluayBJbnRlcnZhbC54b3J9LCB7QGxpbmsgSW50ZXJ2YWwjdW5pb259LCB7QGxpbmsgSW50ZXJ2YWwjaW50ZXJzZWN0aW9ufSwgb3Ige0BsaW5rIEludGVydmFsI2RpZmZlcmVuY2V9LlxuICogKiAqKkNvbXBhcmlzb24qKiBUbyBjb21wYXJlIHRoaXMgSW50ZXJ2YWwgdG8gYW5vdGhlciBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjZXF1YWxzfSwge0BsaW5rIEludGVydmFsI292ZXJsYXBzfSwge0BsaW5rIEludGVydmFsI2FidXRzU3RhcnR9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNFbmR9LCB7QGxpbmsgSW50ZXJ2YWwjZW5ndWxmc31cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBJbnRlcnZhbCN0b1N0cmluZ30sIHtAbGluayBJbnRlcnZhbCN0b0xvY2FsZVN0cmluZ30sIHtAbGluayBJbnRlcnZhbCN0b0lTT30sIHtAbGluayBJbnRlcnZhbCN0b0lTT0RhdGV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU09UaW1lfSwge0BsaW5rIEludGVydmFsI3RvRm9ybWF0fSwgYW5kIHtAbGluayBJbnRlcnZhbCN0b0R1cmF0aW9ufS5cbiAqL1xudmFyIEludGVydmFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBJbnRlcnZhbChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnMgPSBjb25maWcuc3RhcnQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lID0gY29uZmlnLmVuZDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkludGVydmFsID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgSW50ZXJ2YWwuaW52YWxpZCA9IGZ1bmN0aW9uIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIGlmIChleHBsYW5hdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBleHBsYW5hdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIEludGVydmFsIGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIHZhciBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnRlcnZhbEVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGFuIGVuZCBEYXRlVGltZS4gSW5jbHVzaXZlIG9mIHRoZSBzdGFydCBidXQgbm90IHRoZSBlbmQuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovO1xuICBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzID0gZnVuY3Rpb24gZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7XG4gICAgdmFyIGJ1aWx0U3RhcnQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KSxcbiAgICAgIGJ1aWx0RW5kID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuICAgIHZhciB2YWxpZGF0ZUVycm9yID0gdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCk7XG4gICAgaWYgKHZhbGlkYXRlRXJyb3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7XG4gICAgICAgIHN0YXJ0OiBidWlsdFN0YXJ0LFxuICAgICAgICBlbmQ6IGJ1aWx0RW5kXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlRXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi87XG4gIEludGVydmFsLmFmdGVyID0gZnVuY3Rpb24gYWZ0ZXIoc3RhcnQsIGR1cmF0aW9uKSB7XG4gICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLFxuICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdCwgZHQucGx1cyhkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBlbmQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIGJhY2t3YXJkcyB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqLztcbiAgSW50ZXJ2YWwuYmVmb3JlID0gZnVuY3Rpb24gYmVmb3JlKGVuZCwgZHVyYXRpb24pIHtcbiAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdC5taW51cyhkdXIpLCBkdCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nLlxuICAgKiBBY2NlcHRzIGA8c3RhcnQ+LzxlbmQ+YCwgYDxzdGFydD4vPGR1cmF0aW9uPmAsIGFuZCBgPGR1cmF0aW9uPi88ZW5kPmAgZm9ybWF0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gb3B0aW9ucyB0byBwYXNzIHtAbGluayBEYXRlVGltZSNmcm9tSVNPfSBhbmQgb3B0aW9uYWxseSB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT31cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovO1xuICBJbnRlcnZhbC5mcm9tSVNPID0gZnVuY3Rpb24gZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgdmFyIF9zcGxpdCA9ICh0ZXh0IHx8IFwiXCIpLnNwbGl0KFwiL1wiLCAyKSxcbiAgICAgIHMgPSBfc3BsaXRbMF0sXG4gICAgICBlID0gX3NwbGl0WzFdO1xuICAgIGlmIChzICYmIGUpIHtcbiAgICAgIHZhciBzdGFydCwgc3RhcnRJc1ZhbGlkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSBEYXRlVGltZS5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBzdGFydElzVmFsaWQgPSBzdGFydC5pc1ZhbGlkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdGFydElzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBlbmQsIGVuZElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBlbmQgPSBEYXRlVGltZS5mcm9tSVNPKGUsIG9wdHMpO1xuICAgICAgICBlbmRJc1ZhbGlkID0gZW5kLmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVuZElzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGFydElzVmFsaWQgJiYgZW5kSXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGFydElzVmFsaWQpIHtcbiAgICAgICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5hZnRlcihzdGFydCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmRJc1ZhbGlkKSB7XG4gICAgICAgIHZhciBfZHVyID0gRHVyYXRpb24uZnJvbUlTTyhzLCBvcHRzKTtcbiAgICAgICAgaWYgKF9kdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBfZHVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFcIik7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIEludGVydmFsLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgSW50ZXJ2YWwuaXNJbnRlcnZhbCA9IGZ1bmN0aW9uIGlzSW50ZXJ2YWwobykge1xuICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkludGVydmFsIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqLztcbiAgdmFyIF9wcm90byA9IEludGVydmFsLnByb3RvdHlwZTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwgaW4gdGhlIHNwZWNpZmllZCB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byByZXR1cm4gdGhlIGxlbmd0aCBpbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgX3Byb3RvLmxlbmd0aCA9IGZ1bmN0aW9uIGxlbmd0aCh1bml0KSB7XG4gICAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgICAgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvRHVyYXRpb24uYXBwbHkodGhpcywgW3VuaXRdKS5nZXQodW5pdCkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY291bnQgb2YgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgb3IgeWVhcnMgaW5jbHVkZWQgaW4gdGhlIEludGVydmFsLCBldmVuIGluIHBhcnQuXG4gICAqIFVubGlrZSB7QGxpbmsgSW50ZXJ2YWwjbGVuZ3RofSB0aGlzIGNvdW50cyBzZWN0aW9ucyBvZiB0aGUgY2FsZW5kYXIsIG5vdCBwZXJpb2RzIG9mIHRpbWUsIGUuZy4gc3BlY2lmeWluZyAnZGF5J1xuICAgKiBhc2tzICd3aGF0IGRhdGVzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGludGVydmFsPycsIG5vdCAnaG93IG1hbnkgZGF5cyBsb25nIGlzIHRoaXMgaW50ZXJ2YWw/J1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuaXQ9J21pbGxpc2Vjb25kcyddIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi87XG4gIF9wcm90by5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KHVuaXQpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydC5zdGFydE9mKHVuaXQpLFxuICAgICAgZW5kID0gdGhpcy5lbmQuc3RhcnRPZih1bml0KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihlbmQuZGlmZihzdGFydCwgdW5pdCkuZ2V0KHVuaXQpKSArIChlbmQudmFsdWVPZigpICE9PSB0aGlzLmVuZC52YWx1ZU9mKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgYW5kIGVuZCBhcmUgYm90aCBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLmhhc1NhbWUgPSBmdW5jdGlvbiBoYXNTYW1lKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5pc0VtcHR5KCkgfHwgdGhpcy5lLm1pbnVzKDEpLmhhc1NhbWUodGhpcy5zLCB1bml0KSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgRGF0ZVRpbWVzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zLnZhbHVlT2YoKSA9PT0gdGhpcy5lLnZhbHVlT2YoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWZ0ZXIgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBfcHJvdG8uaXNBZnRlciA9IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPiBkYXRlVGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGJlZm9yZSB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5pc0JlZm9yZSA9IGZ1bmN0aW9uIGlzQmVmb3JlKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBfcHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhkYXRlVGltZSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucyA8PSBkYXRlVGltZSAmJiB0aGlzLmUgPiBkYXRlVGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldHNcIiB0aGUgc3RhcnQgYW5kL29yIGVuZCBkYXRlcy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gdGhlIHZhbHVlcyB0byBzZXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLnN0YXJ0IC0gdGhlIHN0YXJ0aW5nIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5lbmQgLSB0aGUgZW5kaW5nIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi87XG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgc3RhcnQgPSBfcmVmLnN0YXJ0LFxuICAgICAgZW5kID0gX3JlZi5lbmQ7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0IHx8IHRoaXMucywgZW5kIHx8IHRoaXMuZSk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBhdCBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIF9wcm90by5zcGxpdEF0ID0gZnVuY3Rpb24gc3BsaXRBdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgdmFyIHNvcnRlZCA9IGRhdGVUaW1lcy5tYXAoZnJpZW5kbHlEYXRlVGltZSkuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jb250YWlucyhkKTtcbiAgICAgIH0pLnNvcnQoKSxcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcyA9IHRoaXMucyxcbiAgICAgIGkgPSAwO1xuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICB2YXIgYWRkZWQgPSBzb3J0ZWRbaV0gfHwgdGhpcy5lLFxuICAgICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgX3Byb3RvLnNwbGl0QnkgPSBmdW5jdGlvbiBzcGxpdEJ5KGR1cmF0aW9uKSB7XG4gICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFkdXIuaXNWYWxpZCB8fCBkdXIuYXMoXCJtaWxsaXNlY29uZHNcIikgPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIHMgPSB0aGlzLnMsXG4gICAgICBpZHggPSAxLFxuICAgICAgbmV4dDtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICB2YXIgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICogaWR4O1xuICAgICAgfSkpO1xuICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcbiAgICAgIHMgPSBuZXh0O1xuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzbWFsbGVyIGludGVydmFscy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mUGFydHMgLSBUaGUgbnVtYmVyIG9mIEludGVydmFscyB0byBkaXZpZGUgdGhlIEludGVydmFsIGludG8uXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIF9wcm90by5kaXZpZGVFcXVhbGx5ID0gZnVuY3Rpb24gZGl2aWRlRXF1YWxseShudW1iZXJPZlBhcnRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gdGhpcy5zcGxpdEJ5KHRoaXMubGVuZ3RoKCkgLyBudW1iZXJPZlBhcnRzKS5zbGljZSgwLCBudW1iZXJPZlBhcnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIG92ZXJsYXBzIHdpdGggdGhlIHNwZWNpZmllZCBJbnRlcnZhbFxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5vdmVybGFwcyA9IGZ1bmN0aW9uIG92ZXJsYXBzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBfcHJvdG8uYWJ1dHNTdGFydCA9IGZ1bmN0aW9uIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBfcHJvdG8uYWJ1dHNFbmQgPSBmdW5jdGlvbiBhYnV0c0VuZChvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICtvdGhlci5lID09PSArdGhpcy5zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgZW5ndWxmcyB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5lbmd1bGZzID0gZnVuY3Rpb24gZW5ndWxmcyhvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucyA8PSBvdGhlci5zICYmIHRoaXMuZSA+PSBvdGhlci5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgYXMgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucy5lcXVhbHMob3RoZXIucykgJiYgdGhpcy5lLmVxdWFscyhvdGhlci5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWF4aW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWluaW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBpbnRlcnNlY3Rpb24gaXMgZW1wdHksIG1lYW5pbmcsIHRoZSBpbnRlcnZhbHMgZG9uJ3QgaW50ZXJzZWN0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovO1xuICBfcHJvdG8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBzID0gdGhpcy5zID4gb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lIDwgb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgaWYgKHMgPj0gZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSB1bmlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtaW5pbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtYXhpbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovO1xuICBfcHJvdG8udW5pb24gPSBmdW5jdGlvbiB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgcyA9IHRoaXMucyA8IG90aGVyLnMgPyB0aGlzLnMgOiBvdGhlci5zLFxuICAgICAgZSA9IHRoaXMuZSA+IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIGFuIGFycmF5IG9mIEludGVydmFscyBpbnRvIGEgZXF1aXZhbGVudCBtaW5pbWFsIHNldCBvZiBJbnRlcnZhbHMuXG4gICAqIENvbWJpbmVzIG92ZXJsYXBwaW5nIGFuZCBhZGphY2VudCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBJbnRlcnZhbC5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKGludGVydmFscykge1xuICAgIHZhciBfaW50ZXJ2YWxzJHNvcnQkcmVkdWMgPSBpbnRlcnZhbHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zIC0gYi5zO1xuICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChfcmVmMiwgaXRlbSkge1xuICAgICAgICB2YXIgc29mYXIgPSBfcmVmMlswXSxcbiAgICAgICAgICBjdXJyZW50ID0gX3JlZjJbMV07XG4gICAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQub3ZlcmxhcHMoaXRlbSkgfHwgY3VycmVudC5hYnV0c1N0YXJ0KGl0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIFtzb2ZhciwgY3VycmVudC51bmlvbihpdGVtKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtzb2Zhci5jb25jYXQoW2N1cnJlbnRdKSwgaXRlbV07XG4gICAgICAgIH1cbiAgICAgIH0sIFtbXSwgbnVsbF0pLFxuICAgICAgZm91bmQgPSBfaW50ZXJ2YWxzJHNvcnQkcmVkdWNbMF0sXG4gICAgICBmaW5hbCA9IF9pbnRlcnZhbHMkc29ydCRyZWR1Y1sxXTtcbiAgICBpZiAoZmluYWwpIHtcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIEludGVydmFscyByZXByZXNlbnRpbmcgdGhlIHNwYW5zIG9mIHRpbWUgdGhhdCBvbmx5IGFwcGVhciBpbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBJbnRlcnZhbC54b3IgPSBmdW5jdGlvbiB4b3IoaW50ZXJ2YWxzKSB7XG4gICAgdmFyIF9BcnJheSRwcm90b3R5cGU7XG4gICAgdmFyIHN0YXJ0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnRDb3VudCA9IDA7XG4gICAgdmFyIHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIHRpbWU6IGkucyxcbiAgICAgICAgICB0eXBlOiBcInNcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgdGltZTogaS5lLFxuICAgICAgICAgIHR5cGU6IFwiZVwiXG4gICAgICAgIH1dO1xuICAgICAgfSksXG4gICAgICBmbGF0dGVuZWQgPSAoX0FycmF5JHByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZSkuY29uY2F0LmFwcGx5KF9BcnJheSRwcm90b3R5cGUsIGVuZHMpLFxuICAgICAgYXJyID0gZmxhdHRlbmVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEudGltZSAtIGIudGltZTtcbiAgICAgIH0pO1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoYXJyKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBpID0gX3N0ZXAudmFsdWU7XG4gICAgICBjdXJyZW50Q291bnQgKz0gaS50eXBlID09PSBcInNcIiA/IDEgOiAtMTtcbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEludGVydmFsLm1lcmdlKHJlc3VsdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHNwYW4gb2YgdGltZSBpbiB0aGlzIEludGVydmFsIHRoYXQgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0gey4uLkludGVydmFsfSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgX3Byb3RvLmRpZmZlcmVuY2UgPSBmdW5jdGlvbiBkaWZmZXJlbmNlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJ2YWxzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBpbnRlcnZhbHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG4gICAgcmV0dXJuIEludGVydmFsLnhvcihbdGhpc10uY29uY2F0KGludGVydmFscykpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5pbnRlcnNlY3Rpb24oaSk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaSAmJiAhaS5pc0VtcHR5KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJbXCIgKyB0aGlzLnMudG9JU08oKSArIFwiIFxcdTIwMTMgXCIgKyB0aGlzLmUudG9JU08oKSArIFwiKVwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2NhbGl6ZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGlzIEludGVydmFsLiBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgdGhlXG4gICAqIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3IgYW5kIGFueSBwcmVzZXRzIGRlZmluZWQgYnkgTHV4b24sIHN1Y2ggYXNcbiAgICoge0BsaW5rIERhdGVUaW1lLkRBVEVfRlVMTH0gb3Ige0BsaW5rIERhdGVUaW1lLlRJTUVfU0lNUExFfS4gVGhlIGV4YWN0IGJlaGF2aW9yIG9mIHRoaXMgbWV0aG9kXG4gICAqIGlzIGJyb3dzZXItc3BlY2lmaWMsIGJ1dCBpbiBnZW5lcmFsIGl0IHdpbGwgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoZVxuICAgKiBJbnRlcnZhbCBpbiB0aGUgYXNzaWduZWQgbG9jYWxlLiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlblxuICAgKiBzcGVjaWZpZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtmb3JtYXRPcHRzPURhdGVUaW1lLkRBVEVfU0hPUlRdIC0gRWl0aGVyIGEgRGF0ZVRpbWUgcHJlc2V0IG9yXG4gICAqIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBzdGFydCBEYXRlVGltZS5cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QwOTowMFovMjAyMi0xMS0wOFQwOTowMFonKS50b0xvY2FsZVN0cmluZygpOyAvLz0+IDExLzcvMjAyMiDigJMgMTEvOC8yMDIyXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21JU08oJzIwMjItMTEtMDdUMDk6MDBaLzIwMjItMTEtMDhUMDk6MDBaJykudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMKTsgLy89PiBOb3ZlbWJlciA3IOKAkyA4LCAyMDIyXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21JU08oJzIwMjItMTEtMDdUMDk6MDBaLzIwMjItMTEtMDhUMDk6MDBaJykudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMLCB7IGxvY2FsZTogJ2ZyLUZSJyB9KTsgLy89PiA34oCTOCBub3ZlbWJyZSAyMDIyXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21JU08oJzIwMjItMTEtMDdUMTc6MDBaLzIwMjItMTEtMDdUMTk6MDBaJykudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+IDY6MDAg4oCTIDg6MDAgUE1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QxNzowMFovMjAyMi0xMS0wN1QxOTowMFonKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTsgLy89PiBNb24sIE5vdiAwNywgNjowMCDigJMgODowMCBwXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZyhmb3JtYXRPcHRzLCBvcHRzKSB7XG4gICAgaWYgKGZvcm1hdE9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0T3B0cyA9IERBVEVfU0hPUlQ7XG4gICAgfVxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5zLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0SW50ZXJ2YWwodGhpcykgOiBJTlZBTElEJDE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0lTTyA9IGZ1bmN0aW9uIHRvSVNPKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gdGhpcy5zLnRvSVNPKG9wdHMpICsgXCIvXCIgKyB0aGlzLmUudG9JU08ob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGRhdGUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIHRpbWUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gdGhpcy5zLnRvSVNPRGF0ZSgpICsgXCIvXCIgKyB0aGlzLmUudG9JU09EYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIGRhdGUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPVGltZSA9IGZ1bmN0aW9uIHRvSVNPVGltZShvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XG4gICAgcmV0dXJuIHRoaXMucy50b0lTT1RpbWUob3B0cykgKyBcIi9cIiArIHRoaXMuZS50b0lTT1RpbWUob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXRcbiAgICogc3RyaW5nLiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIEludGVydmFsI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlXG4gICAqIGZvcm1hdHRpbmcgdG9vbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgLSBUaGUgZm9ybWF0IHN0cmluZy4gVGhpcyBzdHJpbmcgZm9ybWF0cyB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLlxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSBmb3IgZGV0YWlscy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gQSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZFxuICAgKiByZXByZXNlbnRhdGlvbnMuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChkYXRlRm9ybWF0LCBfdGVtcDIpIHtcbiAgICB2YXIgX3JlZjMgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLFxuICAgICAgX3JlZjMkc2VwYXJhdG9yID0gX3JlZjMuc2VwYXJhdG9yLFxuICAgICAgc2VwYXJhdG9yID0gX3JlZjMkc2VwYXJhdG9yID09PSB2b2lkIDAgPyBcIiDigJMgXCIgOiBfcmVmMyRzZXBhcmF0b3I7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XG4gICAgcmV0dXJuIFwiXCIgKyB0aGlzLnMudG9Gb3JtYXQoZGF0ZUZvcm1hdCkgKyBzZXBhcmF0b3IgKyB0aGlzLmUudG9Gb3JtYXQoZGF0ZUZvcm1hdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIF9wcm90by50b0R1cmF0aW9uID0gZnVuY3Rpb24gdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmUuZGlmZih0aGlzLnMsIHVuaXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKVxuICAgKi87XG4gIF9wcm90by5tYXBFbmRwb2ludHMgPSBmdW5jdGlvbiBtYXBFbmRwb2ludHMobWFwRm4pIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhtYXBGbih0aGlzLnMpLCBtYXBGbih0aGlzLmUpKTtcbiAgfTtcbiAgX2NyZWF0ZUNsYXNzKEludGVydmFsLCBbe1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMucyA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJlbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkUmVhc29uID09PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkUmVhc29uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRFeHBsYW5hdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJbnRlcnZhbDtcbn0oKTtcblxuLyoqXG4gKiBUaGUgSW5mbyBjbGFzcyBjb250YWlucyBzdGF0aWMgbWV0aG9kcyBmb3IgcmV0cmlldmluZyBnZW5lcmFsIHRpbWUgYW5kIGRhdGUgcmVsYXRlZCBkYXRhLiBGb3IgZXhhbXBsZSwgaXQgaGFzIG1ldGhvZHMgZm9yIGZpbmRpbmcgb3V0IGlmIGEgdGltZSB6b25lIGhhcyBhIERTVCwgZm9yIGxpc3RpbmcgdGhlIG1vbnRocyBpbiBhbnkgc3VwcG9ydGVkIGxvY2FsZSwgYW5kIGZvciBkaXNjb3ZlcmluZyB3aGljaCBvZiBMdXhvbiBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICovXG52YXIgSW5mbyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEluZm8oKSB7fVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGNvbnRhaW5zIGEgRFNULlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIFpvbmUgdG8gY2hlY2suIERlZmF1bHRzIHRvIHRoZSBlbnZpcm9ubWVudCdzIGxvY2FsIHpvbmUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBJbmZvLmhhc0RTVCA9IGZ1bmN0aW9uIGhhc0RTVCh6b25lKSB7XG4gICAgaWYgKHpvbmUgPT09IHZvaWQgMCkge1xuICAgICAgem9uZSA9IFNldHRpbmdzLmRlZmF1bHRab25lO1xuICAgIH1cbiAgICB2YXIgcHJvdG8gPSBEYXRlVGltZS5ub3coKS5zZXRab25lKHpvbmUpLnNldCh7XG4gICAgICBtb250aDogMTJcbiAgICB9KTtcbiAgICByZXR1cm4gIXpvbmUuaXNVbml2ZXJzYWwgJiYgcHJvdG8ub2Zmc2V0ICE9PSBwcm90by5zZXQoe1xuICAgICAgbW9udGg6IDZcbiAgICB9KS5vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGlzIGEgdmFsaWQgSUFOQSBzcGVjaWZpZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIEluZm8uaXNWYWxpZElBTkFab25lID0gZnVuY3Rpb24gaXNWYWxpZElBTkFab25lKHpvbmUpIHtcbiAgICByZXR1cm4gSUFOQVpvbmUuaXNWYWxpZFpvbmUoem9uZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIGlucHV0IGludG8gYSB7QGxpbmsgWm9uZX0gaW5zdGFuY2UuXG4gICAqXG4gICAqICogSWYgYGlucHV0YCBpcyBhbHJlYWR5IGEgWm9uZSBpbnN0YW5jZSwgaXQgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgY29udGFpbmluZyBhIHZhbGlkIHRpbWUgem9uZSBuYW1lLCBhIFpvbmUgaW5zdGFuY2VcbiAgICogICB3aXRoIHRoYXQgbmFtZSBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGEgc3RyaW5nIHRoYXQgZG9lc24ndCByZWZlciB0byBhIGtub3duIHRpbWUgem9uZSwgYSBab25lXG4gICAqICAgaW5zdGFuY2Ugd2l0aCB7QGxpbmsgWm9uZSNpc1ZhbGlkfSA9PSBmYWxzZSBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXQgaXMgYSBudW1iZXIsIGEgWm9uZSBpbnN0YW5jZSB3aXRoIHRoZSBzcGVjaWZpZWQgZml4ZWQgb2Zmc2V0XG4gICAqICAgaW4gbWludXRlcyBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgdGhlIGRlZmF1bHQgem9uZSBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZXxudW1iZXJ9IFtpbnB1dF0gLSB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkXG4gICAqIEByZXR1cm4ge1pvbmV9XG4gICAqLztcbiAgSW5mby5ub3JtYWxpemVab25lID0gZnVuY3Rpb24gbm9ybWFsaXplWm9uZSQxKGlucHV0KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKClbMF0gLy89PiAnSmFudWFyeSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JylbMF0gLy89PiAnSmFuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycpWzBdIC8vPT4gJzEnXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0gKVswXSAvLz0+ICdqYW52LidcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfZoSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ2xvbmcnLCB7IG91dHB1dENhbGVuZGFyOiAnaXNsYW1pYycgfSlbMF0gLy89PiAnUmFiacq7IEknXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIEluZm8ubW9udGhzID0gZnVuY3Rpb24gbW9udGhzKGxlbmd0aCwgX3RlbXApIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgIGxvY2FsZSA9IF9yZWYkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRsb2NhbGUsXG4gICAgICBfcmVmJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZiRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIF9yZWYkbG9jT2JqID0gX3JlZi5sb2NPYmosXG4gICAgICBsb2NPYmogPSBfcmVmJGxvY09iaiA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkbG9jT2JqLFxuICAgICAgX3JlZiRvdXRwdXRDYWxlbmRhciA9IF9yZWYub3V0cHV0Q2FsZW5kYXIsXG4gICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYkb3V0cHV0Q2FsZW5kYXIgPT09IHZvaWQgMCA/IFwiZ3JlZ29yeVwiIDogX3JlZiRvdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgbW9udGggbmFtZXMuXG4gICAqIEZvcm1hdCBtb250aHMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSBtb250aHMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyNtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgSW5mby5tb250aHNGb3JtYXQgPSBmdW5jdGlvbiBtb250aHNGb3JtYXQobGVuZ3RoLCBfdGVtcDIpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cbiAgICB2YXIgX3JlZjIgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLFxuICAgICAgX3JlZjIkbG9jYWxlID0gX3JlZjIubG9jYWxlLFxuICAgICAgbG9jYWxlID0gX3JlZjIkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjIkbG9jYWxlLFxuICAgICAgX3JlZjIkbnVtYmVyaW5nU3lzdGVtID0gX3JlZjIubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjIkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjIkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgX3JlZjIkbG9jT2JqID0gX3JlZjIubG9jT2JqLFxuICAgICAgbG9jT2JqID0gX3JlZjIkbG9jT2JqID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjIkbG9jT2JqLFxuICAgICAgX3JlZjIkb3V0cHV0Q2FsZW5kYXIgPSBfcmVmMi5vdXRwdXRDYWxlbmRhcixcbiAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZjIkb3V0cHV0Q2FsZW5kYXIgPT09IHZvaWQgMCA/IFwiZ3JlZ29yeVwiIDogX3JlZjIkb3V0cHV0Q2FsZW5kYXI7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSB3ZWVrIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWVrZGF5IHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoKVswXSAvLz0+ICdNb25kYXknXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JylbMF0gLy89PiAnTW9uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0pWzBdIC8vPT4gJ2x1bi4nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2KfZhNin2KvZhtmK2YYnXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIEluZm8ud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgsIF90ZW1wMykge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuICAgIHZhciBfcmVmMyA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICBfcmVmMyRsb2NhbGUgPSBfcmVmMy5sb2NhbGUsXG4gICAgICBsb2NhbGUgPSBfcmVmMyRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyRsb2NhbGUsXG4gICAgICBfcmVmMyRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMyRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyRudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBfcmVmMyRsb2NPYmogPSBfcmVmMy5sb2NPYmosXG4gICAgICBsb2NPYmogPSBfcmVmMyRsb2NPYmogPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyRsb2NPYmo7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCB3ZWVrIG5hbWVzLlxuICAgKiBGb3JtYXQgd2Vla2RheXMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSB3ZWVrZGF5cyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gbW9yZSBkYXRlIGluZm9ybWF0aW9uLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyN3ZWVrZGF5c31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPW51bGxdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgSW5mby53ZWVrZGF5c0Zvcm1hdCA9IGZ1bmN0aW9uIHdlZWtkYXlzRm9ybWF0KGxlbmd0aCwgX3RlbXA0KSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBsZW5ndGggPSBcImxvbmdcIjtcbiAgICB9XG4gICAgdmFyIF9yZWY0ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNCxcbiAgICAgIF9yZWY0JGxvY2FsZSA9IF9yZWY0LmxvY2FsZSxcbiAgICAgIGxvY2FsZSA9IF9yZWY0JGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY0JGxvY2FsZSxcbiAgICAgIF9yZWY0JG51bWJlcmluZ1N5c3RlbSA9IF9yZWY0Lm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWY0JG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY0JG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIF9yZWY0JGxvY09iaiA9IF9yZWY0LmxvY09iaixcbiAgICAgIGxvY09iaiA9IF9yZWY0JGxvY09iaiA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY0JGxvY09iajtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgbWVyaWRpZW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoKSAvLz0+IFsgJ0FNJywgJ1BNJyBdXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKHsgbG9jYWxlOiAnbXknIH0pIC8vPT4gWyAn4YCU4YC24YCU4YCA4YC6JywgJ+GAiuGAlOGAsScgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBJbmZvLm1lcmlkaWVtcyA9IGZ1bmN0aW9uIG1lcmlkaWVtcyhfdGVtcDUpIHtcbiAgICB2YXIgX3JlZjUgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LFxuICAgICAgX3JlZjUkbG9jYWxlID0gX3JlZjUubG9jYWxlLFxuICAgICAgbG9jYWxlID0gX3JlZjUkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjUkbG9jYWxlO1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGVyYXMsIHN1Y2ggYXMgWydCQycsICdBRCddLiBUaGUgbG9jYWxlIGNhbiBiZSBzcGVjaWZpZWQsIGJ1dCB0aGUgY2FsZW5kYXIgc3lzdGVtIGlzIGFsd2F5cyBHcmVnb3JpYW4uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdzaG9ydCddIC0gdGhlIGxlbmd0aCBvZiB0aGUgZXJhIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwic2hvcnRcIiBvciBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygpIC8vPT4gWyAnQkMnLCAnQUQnIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJykgLy89PiBbICdCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycsIHsgbG9jYWxlOiAnZnInIH0pIC8vPT4gWyAnYXZhbnQgSsOpc3VzLUNocmlzdCcsICdhcHLDqHMgSsOpc3VzLUNocmlzdCcgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBJbmZvLmVyYXMgPSBmdW5jdGlvbiBlcmFzKGxlbmd0aCwgX3RlbXA2KSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBsZW5ndGggPSBcInNob3J0XCI7XG4gICAgfVxuICAgIHZhciBfcmVmNiA9IF90ZW1wNiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDYsXG4gICAgICBfcmVmNiRsb2NhbGUgPSBfcmVmNi5sb2NhbGUsXG4gICAgICBsb2NhbGUgPSBfcmVmNiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNiRsb2NhbGU7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudWxsLCBcImdyZWdvcnlcIikuZXJhcyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc2V0IG9mIGF2YWlsYWJsZSBmZWF0dXJlcyBpbiB0aGlzIGVudmlyb25tZW50LlxuICAgKiBTb21lIGZlYXR1cmVzIG9mIEx1eG9uIGFyZSBub3QgYXZhaWxhYmxlIGluIGFsbCBlbnZpcm9ubWVudHMuIEZvciBleGFtcGxlLCBvbiBvbGRlciBicm93c2VycywgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nIHN1cHBvcnQgaXMgbm90IGF2YWlsYWJsZS4gVXNlIHRoaXMgZnVuY3Rpb24gdG8gZmlndXJlIG91dCBpZiB0aGF0J3MgdGhlIGNhc2UuXG4gICAqIEtleXM6XG4gICAqICogYHJlbGF0aXZlYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZ1xuICAgKiBAZXhhbXBsZSBJbmZvLmZlYXR1cmVzKCkgLy89PiB7IHJlbGF0aXZlOiBmYWxzZSB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovO1xuICBJbmZvLmZlYXR1cmVzID0gZnVuY3Rpb24gZmVhdHVyZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbGF0aXZlOiBoYXNSZWxhdGl2ZSgpXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIEluZm87XG59KCk7XG5cbmZ1bmN0aW9uIGRheURpZmYoZWFybGllciwgbGF0ZXIpIHtcbiAgdmFyIHV0Y0RheVN0YXJ0ID0gZnVuY3Rpb24gdXRjRGF5U3RhcnQoZHQpIHtcbiAgICAgIHJldHVybiBkdC50b1VUQygwLCB7XG4gICAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWVcbiAgICAgIH0pLnN0YXJ0T2YoXCJkYXlcIikudmFsdWVPZigpO1xuICAgIH0sXG4gICAgbXMgPSB1dGNEYXlTdGFydChsYXRlcikgLSB1dGNEYXlTdGFydChlYXJsaWVyKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoRHVyYXRpb24uZnJvbU1pbGxpcyhtcykuYXMoXCJkYXlzXCIpKTtcbn1cbmZ1bmN0aW9uIGhpZ2hPcmRlckRpZmZzKGN1cnNvciwgbGF0ZXIsIHVuaXRzKSB7XG4gIHZhciBkaWZmZXJzID0gW1tcInllYXJzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIueWVhciAtIGEueWVhcjtcbiAgfV0sIFtcInF1YXJ0ZXJzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIucXVhcnRlciAtIGEucXVhcnRlciArIChiLnllYXIgLSBhLnllYXIpICogNDtcbiAgfV0sIFtcIm1vbnRoc1wiLCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLm1vbnRoIC0gYS5tb250aCArIChiLnllYXIgLSBhLnllYXIpICogMTI7XG4gIH1dLCBbXCJ3ZWVrc1wiLCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBkYXlzID0gZGF5RGlmZihhLCBiKTtcbiAgICByZXR1cm4gKGRheXMgLSBkYXlzICUgNykgLyA3O1xuICB9XSwgW1wiZGF5c1wiLCBkYXlEaWZmXV07XG4gIHZhciByZXN1bHRzID0ge307XG4gIHZhciBlYXJsaWVyID0gY3Vyc29yO1xuICB2YXIgbG93ZXN0T3JkZXIsIGhpZ2hXYXRlcjtcbiAgZm9yICh2YXIgX2kgPSAwLCBfZGlmZmVycyA9IGRpZmZlcnM7IF9pIDwgX2RpZmZlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIF9kaWZmZXJzJF9pID0gX2RpZmZlcnNbX2ldLFxuICAgICAgdW5pdCA9IF9kaWZmZXJzJF9pWzBdLFxuICAgICAgZGlmZmVyID0gX2RpZmZlcnMkX2lbMV07XG4gICAgaWYgKHVuaXRzLmluZGV4T2YodW5pdCkgPj0gMCkge1xuICAgICAgbG93ZXN0T3JkZXIgPSB1bml0O1xuICAgICAgcmVzdWx0c1t1bml0XSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTtcbiAgICAgIGhpZ2hXYXRlciA9IGVhcmxpZXIucGx1cyhyZXN1bHRzKTtcbiAgICAgIGlmIChoaWdoV2F0ZXIgPiBsYXRlcikge1xuICAgICAgICByZXN1bHRzW3VuaXRdLS07XG4gICAgICAgIGN1cnNvciA9IGVhcmxpZXIucGx1cyhyZXN1bHRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvciA9IGhpZ2hXYXRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdO1xufVxuZnVuY3Rpb24gX2RpZmYgKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgb3B0cykge1xuICB2YXIgX2hpZ2hPcmRlckRpZmZzID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKSxcbiAgICBjdXJzb3IgPSBfaGlnaE9yZGVyRGlmZnNbMF0sXG4gICAgcmVzdWx0cyA9IF9oaWdoT3JkZXJEaWZmc1sxXSxcbiAgICBoaWdoV2F0ZXIgPSBfaGlnaE9yZGVyRGlmZnNbMl0sXG4gICAgbG93ZXN0T3JkZXIgPSBfaGlnaE9yZGVyRGlmZnNbM107XG4gIHZhciByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjtcbiAgdmFyIGxvd2VyT3JkZXJVbml0cyA9IHVuaXRzLmZpbHRlcihmdW5jdGlvbiAodSkge1xuICAgIHJldHVybiBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCJdLmluZGV4T2YodSkgPj0gMDtcbiAgfSk7XG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGhpZ2hXYXRlciA8IGxhdGVyKSB7XG4gICAgICB2YXIgX2N1cnNvciRwbHVzO1xuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoKF9jdXJzb3IkcGx1cyA9IHt9LCBfY3Vyc29yJHBsdXNbbG93ZXN0T3JkZXJdID0gMSwgX2N1cnNvciRwbHVzKSk7XG4gICAgfVxuICAgIGlmIChoaWdoV2F0ZXIgIT09IGN1cnNvcikge1xuICAgICAgcmVzdWx0c1tsb3dlc3RPcmRlcl0gPSAocmVzdWx0c1tsb3dlc3RPcmRlcl0gfHwgMCkgKyByZW1haW5pbmdNaWxsaXMgLyAoaGlnaFdhdGVyIC0gY3Vyc29yKTtcbiAgICB9XG4gIH1cbiAgdmFyIGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbU9iamVjdChyZXN1bHRzLCBvcHRzKTtcbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIF9EdXJhdGlvbiRmcm9tTWlsbGlzO1xuICAgIHJldHVybiAoX0R1cmF0aW9uJGZyb21NaWxsaXMgPSBEdXJhdGlvbi5mcm9tTWlsbGlzKHJlbWFpbmluZ01pbGxpcywgb3B0cykpLnNoaWZ0VG8uYXBwbHkoX0R1cmF0aW9uJGZyb21NaWxsaXMsIGxvd2VyT3JkZXJVbml0cykucGx1cyhkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG59XG5cbnZhciBudW1iZXJpbmdTeXN0ZW1zID0ge1xuICBhcmFiOiBcIltcXHUwNjYwLVxcdTA2NjldXCIsXG4gIGFyYWJleHQ6IFwiW1xcdTA2RjAtXFx1MDZGOV1cIixcbiAgYmFsaTogXCJbXFx1MUI1MC1cXHUxQjU5XVwiLFxuICBiZW5nOiBcIltcXHUwOUU2LVxcdTA5RUZdXCIsXG4gIGRldmE6IFwiW1xcdTA5NjYtXFx1MDk2Rl1cIixcbiAgZnVsbHdpZGU6IFwiW1xcdUZGMTAtXFx1RkYxOV1cIixcbiAgZ3VqcjogXCJbXFx1MEFFNi1cXHUwQUVGXVwiLFxuICBoYW5pZGVjOiBcIlvjgId85LiAfOS6jHzkuIl85ZubfOS6lHzlha185LiDfOWFq3zkuZ1dXCIsXG4gIGtobXI6IFwiW1xcdTE3RTAtXFx1MTdFOV1cIixcbiAga25kYTogXCJbXFx1MENFNi1cXHUwQ0VGXVwiLFxuICBsYW9vOiBcIltcXHUwRUQwLVxcdTBFRDldXCIsXG4gIGxpbWI6IFwiW1xcdTE5NDYtXFx1MTk0Rl1cIixcbiAgbWx5bTogXCJbXFx1MEQ2Ni1cXHUwRDZGXVwiLFxuICBtb25nOiBcIltcXHUxODEwLVxcdTE4MTldXCIsXG4gIG15bXI6IFwiW1xcdTEwNDAtXFx1MTA0OV1cIixcbiAgb3J5YTogXCJbXFx1MEI2Ni1cXHUwQjZGXVwiLFxuICB0YW1sZGVjOiBcIltcXHUwQkU2LVxcdTBCRUZdXCIsXG4gIHRlbHU6IFwiW1xcdTBDNjYtXFx1MEM2Rl1cIixcbiAgdGhhaTogXCJbXFx1MEU1MC1cXHUwRTU5XVwiLFxuICB0aWJ0OiBcIltcXHUwRjIwLVxcdTBGMjldXCIsXG4gIGxhdG46IFwiXFxcXGRcIlxufTtcbnZhciBudW1iZXJpbmdTeXN0ZW1zVVRGMTYgPSB7XG4gIGFyYWI6IFsxNjMyLCAxNjQxXSxcbiAgYXJhYmV4dDogWzE3NzYsIDE3ODVdLFxuICBiYWxpOiBbNjk5MiwgNzAwMV0sXG4gIGJlbmc6IFsyNTM0LCAyNTQzXSxcbiAgZGV2YTogWzI0MDYsIDI0MTVdLFxuICBmdWxsd2lkZTogWzY1Mjk2LCA2NTMwM10sXG4gIGd1anI6IFsyNzkwLCAyNzk5XSxcbiAga2htcjogWzYxMTIsIDYxMjFdLFxuICBrbmRhOiBbMzMwMiwgMzMxMV0sXG4gIGxhb286IFszNzkyLCAzODAxXSxcbiAgbGltYjogWzY0NzAsIDY0NzldLFxuICBtbHltOiBbMzQzMCwgMzQzOV0sXG4gIG1vbmc6IFs2MTYwLCA2MTY5XSxcbiAgbXltcjogWzQxNjAsIDQxNjldLFxuICBvcnlhOiBbMjkxOCwgMjkyN10sXG4gIHRhbWxkZWM6IFszMDQ2LCAzMDU1XSxcbiAgdGVsdTogWzMxNzQsIDMxODNdLFxuICB0aGFpOiBbMzY2NCwgMzY3M10sXG4gIHRpYnQ6IFszODcyLCAzODgxXVxufTtcbnZhciBoYW5pZGVjQ2hhcnMgPSBudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMucmVwbGFjZSgvW1xcW3xcXF1dL2csIFwiXCIpLnNwbGl0KFwiXCIpO1xuZnVuY3Rpb24gcGFyc2VEaWdpdHMoc3RyKSB7XG4gIHZhciB2YWx1ZSA9IHBhcnNlSW50KHN0ciwgMTApO1xuICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgdmFsdWUgPSBcIlwiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgaWYgKHN0cltpXS5zZWFyY2gobnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgKz0gaGFuaWRlY0NoYXJzLmluZGV4T2Yoc3RyW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBudW1iZXJpbmdTeXN0ZW1zVVRGMTYpIHtcbiAgICAgICAgICB2YXIgX251bWJlcmluZ1N5c3RlbXNVVEYgPSBudW1iZXJpbmdTeXN0ZW1zVVRGMTZba2V5XSxcbiAgICAgICAgICAgIG1pbiA9IF9udW1iZXJpbmdTeXN0ZW1zVVRGWzBdLFxuICAgICAgICAgICAgbWF4ID0gX251bWJlcmluZ1N5c3RlbXNVVEZbMV07XG4gICAgICAgICAgaWYgKGNvZGUgPj0gbWluICYmIGNvZGUgPD0gbWF4KSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBjb2RlIC0gbWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGRpZ2l0UmVnZXgoX3JlZiwgYXBwZW5kKSB7XG4gIHZhciBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbTtcbiAgaWYgKGFwcGVuZCA9PT0gdm9pZCAwKSB7XG4gICAgYXBwZW5kID0gXCJcIjtcbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cChcIlwiICsgbnVtYmVyaW5nU3lzdGVtc1tudW1iZXJpbmdTeXN0ZW0gfHwgXCJsYXRuXCJdICsgYXBwZW5kKTtcbn1cblxudmFyIE1JU1NJTkdfRlRQID0gXCJtaXNzaW5nIEludGwuRGF0ZVRpbWVGb3JtYXQuZm9ybWF0VG9QYXJ0cyBzdXBwb3J0XCI7XG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0KSB7XG4gIGlmIChwb3N0ID09PSB2b2lkIDApIHtcbiAgICBwb3N0ID0gZnVuY3Rpb24gcG9zdChpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVnZXg6IHJlZ2V4LFxuICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmKSB7XG4gICAgICB2YXIgcyA9IF9yZWZbMF07XG4gICAgICByZXR1cm4gcG9zdChwYXJzZURpZ2l0cyhzKSk7XG4gICAgfVxuICB9O1xufVxudmFyIE5CU1AgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCk7XG52YXIgc3BhY2VPck5CU1AgPSBcIlsgXCIgKyBOQlNQICsgXCJdXCI7XG52YXIgc3BhY2VPck5CU1BSZWdFeHAgPSBuZXcgUmVnRXhwKHNwYWNlT3JOQlNQLCBcImdcIik7XG5mdW5jdGlvbiBmaXhMaXN0UmVnZXgocykge1xuICAvLyBtYWtlIGRvdHMgb3B0aW9uYWwgYW5kIGFsc28gbWFrZSB0aGVtIGxpdGVyYWxcbiAgLy8gbWFrZSBzcGFjZSBhbmQgbm9uIGJyZWFrYWJsZSBzcGFjZSBjaGFyYWN0ZXJzIGludGVyY2hhbmdlYWJsZVxuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vZywgXCJcXFxcLj9cIikucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgc3BhY2VPck5CU1ApO1xufVxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vZywgXCJcIikgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWxcbiAgLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIFwiIFwiKSAvLyBpbnRlcmNoYW5nZSBzcGFjZSBhbmQgbmJzcFxuICAudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oXCJ8XCIpKSxcbiAgICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmMikge1xuICAgICAgICB2YXIgcyA9IF9yZWYyWzBdO1xuICAgICAgICByZXR1cm4gc3RyaW5ncy5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpO1xuICAgICAgICB9KSArIHN0YXJ0SW5kZXg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gb2Zmc2V0KHJlZ2V4LCBncm91cHMpIHtcbiAgcmV0dXJuIHtcbiAgICByZWdleDogcmVnZXgsXG4gICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYzKSB7XG4gICAgICB2YXIgaCA9IF9yZWYzWzFdLFxuICAgICAgICBtID0gX3JlZjNbMl07XG4gICAgICByZXR1cm4gc2lnbmVkT2Zmc2V0KGgsIG0pO1xuICAgIH0sXG4gICAgZ3JvdXBzOiBncm91cHNcbiAgfTtcbn1cbmZ1bmN0aW9uIHNpbXBsZShyZWdleCkge1xuICByZXR1cm4ge1xuICAgIHJlZ2V4OiByZWdleCxcbiAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjQpIHtcbiAgICAgIHZhciBzID0gX3JlZjRbMF07XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuZnVuY3Rpb24gdW5pdEZvclRva2VuKHRva2VuLCBsb2MpIHtcbiAgdmFyIG9uZSA9IGRpZ2l0UmVnZXgobG9jKSxcbiAgICB0d28gPSBkaWdpdFJlZ2V4KGxvYywgXCJ7Mn1cIiksXG4gICAgdGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7M31cIiksXG4gICAgZm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcIns0fVwiKSxcbiAgICBzaXggPSBkaWdpdFJlZ2V4KGxvYywgXCJ7Nn1cIiksXG4gICAgb25lT3JUd28gPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwyfVwiKSxcbiAgICBvbmVUb1RocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezEsM31cIiksXG4gICAgb25lVG9TaXggPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSw2fVwiKSxcbiAgICBvbmVUb05pbmUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSw5fVwiKSxcbiAgICB0d29Ub0ZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7Miw0fVwiKSxcbiAgICBmb3VyVG9TaXggPSBkaWdpdFJlZ2V4KGxvYywgXCJ7NCw2fVwiKSxcbiAgICBsaXRlcmFsID0gZnVuY3Rpb24gbGl0ZXJhbCh0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksXG4gICAgICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmNSkge1xuICAgICAgICAgIHZhciBzID0gX3JlZjVbMF07XG4gICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH0sXG4gICAgICAgIGxpdGVyYWw6IHRydWVcbiAgICAgIH07XG4gICAgfSxcbiAgICB1bml0YXRlID0gZnVuY3Rpb24gdW5pdGF0ZSh0KSB7XG4gICAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodC52YWwpIHtcbiAgICAgICAgLy8gZXJhXG4gICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKFwic2hvcnRcIiwgZmFsc2UpLCAwKTtcbiAgICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKFwibG9uZ1wiLCBmYWxzZSksIDApO1xuICAgICAgICAvLyB5ZWFyc1xuICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvU2l4KTtcbiAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG4gICAgICAgIGNhc2UgXCJ5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91cik7XG4gICAgICAgIGNhc2UgXCJ5eXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXJUb1NpeCk7XG4gICAgICAgIGNhc2UgXCJ5eXl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChzaXgpO1xuICAgICAgICAvLyBtb250aHNcbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcInNob3J0XCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJsb25nXCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIC8vIGRhdGVzXG4gICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICAvLyBvcmRpbmFsc1xuICAgICAgICBjYXNlIFwib1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xuICAgICAgICBjYXNlIFwib29vXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuICAgICAgICAvLyB0aW1lXG4gICAgICAgIGNhc2UgXCJISFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiaGhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInNzXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcbiAgICAgICAgY2FzZSBcIlNTU1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgICAgY2FzZSBcInVcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKG9uZVRvTmluZSk7XG4gICAgICAgIGNhc2UgXCJ1dVwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwidXV1XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcbiAgICAgICAgLy8gbWVyaWRpZW1cbiAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1lcmlkaWVtcygpLCAwKTtcbiAgICAgICAgLy8gd2Vla1llYXIgKGspXG4gICAgICAgIGNhc2UgXCJra2trXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91cik7XG4gICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuICAgICAgICAvLyB3ZWVrTnVtYmVyIChXKVxuICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIldXXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgLy8gd2Vla2RheXNcbiAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcInNob3J0XCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgLy8gb2Zmc2V0L3pvbmVcbiAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKFwiKFsrLV1cIiArIG9uZU9yVHdvLnNvdXJjZSArIFwiKSg/OjooXCIgKyB0d28uc291cmNlICsgXCIpKT9cIiksIDIpO1xuICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKFwiKFsrLV1cIiArIG9uZU9yVHdvLnNvdXJjZSArIFwiKShcIiArIHR3by5zb3VyY2UgKyBcIik/XCIpLCAyKTtcbiAgICAgICAgLy8gd2UgZG9uJ3Qgc3VwcG9ydCBaWlpaIChQU1QpIG9yIFpaWlpaIChQYWNpZmljIFN0YW5kYXJkIFRpbWUpIGluIHBhcnNpbmdcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFueSB3YXkgdG8gZmlndXJlIG91dCB3aGF0IHRoZXkgYXJlXG4gICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZSgvW2Etel8rLS9dezEsMjU2fT8vaSk7XG4gICAgICAgIC8vIHRoaXMgc3BlY2lhbC1jYXNlIFwidG9rZW5cIiByZXByZXNlbnRzIGEgcGxhY2Ugd2hlcmUgYSBtYWNyby10b2tlbiBleHBhbmRlZCBpbnRvIGEgd2hpdGUtc3BhY2UgbGl0ZXJhbFxuICAgICAgICAvLyBpbiB0aGlzIGNhc2Ugd2UgYWNjZXB0IGFueSBub24tbmV3bGluZSB3aGl0ZS1zcGFjZVxuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUoL1teXFxTXFxuXFxyXS8pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgICAgfVxuICAgIH07XG4gIHZhciB1bml0ID0gdW5pdGF0ZSh0b2tlbikgfHwge1xuICAgIGludmFsaWRSZWFzb246IE1JU1NJTkdfRlRQXG4gIH07XG4gIHVuaXQudG9rZW4gPSB0b2tlbjtcbiAgcmV0dXJuIHVuaXQ7XG59XG52YXIgcGFydFR5cGVTdHlsZVRvVG9rZW5WYWwgPSB7XG4gIHllYXI6IHtcbiAgICBcIjItZGlnaXRcIjogXCJ5eVwiLFxuICAgIG51bWVyaWM6IFwieXl5eXlcIlxuICB9LFxuICBtb250aDoge1xuICAgIG51bWVyaWM6IFwiTVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIk1NXCIsXG4gICAgc2hvcnQ6IFwiTU1NXCIsXG4gICAgbG9uZzogXCJNTU1NXCJcbiAgfSxcbiAgZGF5OiB7XG4gICAgbnVtZXJpYzogXCJkXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiZGRcIlxuICB9LFxuICB3ZWVrZGF5OiB7XG4gICAgc2hvcnQ6IFwiRUVFXCIsXG4gICAgbG9uZzogXCJFRUVFXCJcbiAgfSxcbiAgZGF5cGVyaW9kOiBcImFcIixcbiAgZGF5UGVyaW9kOiBcImFcIixcbiAgaG91cjoge1xuICAgIG51bWVyaWM6IFwiaFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImhoXCJcbiAgfSxcbiAgbWludXRlOiB7XG4gICAgbnVtZXJpYzogXCJtXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwibW1cIlxuICB9LFxuICBzZWNvbmQ6IHtcbiAgICBudW1lcmljOiBcInNcIixcbiAgICBcIjItZGlnaXRcIjogXCJzc1wiXG4gIH0sXG4gIHRpbWVab25lTmFtZToge1xuICAgIGxvbmc6IFwiWlpaWlpcIixcbiAgICBzaG9ydDogXCJaWlpcIlxuICB9XG59O1xuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGZvcm1hdE9wdHMpIHtcbiAgdmFyIHR5cGUgPSBwYXJ0LnR5cGUsXG4gICAgdmFsdWUgPSBwYXJ0LnZhbHVlO1xuICBpZiAodHlwZSA9PT0gXCJsaXRlcmFsXCIpIHtcbiAgICB2YXIgaXNTcGFjZSA9IC9eXFxzKyQvLnRlc3QodmFsdWUpO1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiAhaXNTcGFjZSxcbiAgICAgIHZhbDogaXNTcGFjZSA/IFwiIFwiIDogdmFsdWVcbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZSA9IGZvcm1hdE9wdHNbdHlwZV07XG4gIHZhciB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFt0eXBlXTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xuICB9XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogZmFsc2UsXG4gICAgICB2YWw6IHZhbFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGJ1aWxkUmVnZXgodW5pdHMpIHtcbiAgdmFyIHJlID0gdW5pdHMubWFwKGZ1bmN0aW9uICh1KSB7XG4gICAgcmV0dXJuIHUucmVnZXg7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoZiwgcikge1xuICAgIHJldHVybiBmICsgXCIoXCIgKyByLnNvdXJjZSArIFwiKVwiO1xuICB9LCBcIlwiKTtcbiAgcmV0dXJuIFtcIl5cIiArIHJlICsgXCIkXCIsIHVuaXRzXTtcbn1cbmZ1bmN0aW9uIG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpIHtcbiAgdmFyIG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XG4gIGlmIChtYXRjaGVzKSB7XG4gICAgdmFyIGFsbCA9IHt9O1xuICAgIHZhciBtYXRjaEluZGV4ID0gMTtcbiAgICBmb3IgKHZhciBpIGluIGhhbmRsZXJzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoaGFuZGxlcnMsIGkpKSB7XG4gICAgICAgIHZhciBoID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuZnVuY3Rpb24gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHZhciB0b0ZpZWxkID0gZnVuY3Rpb24gdG9GaWVsZCh0b2tlbikge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiBcImhvdXJcIjtcbiAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIFwib3JkaW5hbFwiO1xuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG4gICAgICBjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla2RheVwiO1xuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla051bWJlclwiO1xuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla1llYXJcIjtcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBcInF1YXJ0ZXJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcbiAgdmFyIHpvbmUgPSBudWxsO1xuICB2YXIgc3BlY2lmaWNPZmZzZXQ7XG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy56KSkge1xuICAgIHpvbmUgPSBJQU5BWm9uZS5jcmVhdGUobWF0Y2hlcy56KTtcbiAgfVxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuWikpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHpvbmUgPSBuZXcgRml4ZWRPZmZzZXRab25lKG1hdGNoZXMuWik7XG4gICAgfVxuICAgIHNwZWNpZmljT2Zmc2V0ID0gbWF0Y2hlcy5aO1xuICB9XG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xuICB9XG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5oKSkge1xuICAgIGlmIChtYXRjaGVzLmggPCAxMiAmJiBtYXRjaGVzLmEgPT09IDEpIHtcbiAgICAgIG1hdGNoZXMuaCArPSAxMjtcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMuaCA9PT0gMTIgJiYgbWF0Y2hlcy5hID09PSAwKSB7XG4gICAgICBtYXRjaGVzLmggPSAwO1xuICAgIH1cbiAgfVxuICBpZiAobWF0Y2hlcy5HID09PSAwICYmIG1hdGNoZXMueSkge1xuICAgIG1hdGNoZXMueSA9IC1tYXRjaGVzLnk7XG4gIH1cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcbiAgfVxuICB2YXIgdmFscyA9IE9iamVjdC5rZXlzKG1hdGNoZXMpLnJlZHVjZShmdW5jdGlvbiAociwgaykge1xuICAgIHZhciBmID0gdG9GaWVsZChrKTtcbiAgICBpZiAoZikge1xuICAgICAgcltmXSA9IG1hdGNoZXNba107XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9LCB7fSk7XG4gIHJldHVybiBbdmFscywgem9uZSwgc3BlY2lmaWNPZmZzZXRdO1xufVxudmFyIGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7XG5mdW5jdGlvbiBnZXREdW1teURhdGVUaW1lKCkge1xuICBpZiAoIWR1bW15RGF0ZVRpbWVDYWNoZSkge1xuICAgIGR1bW15RGF0ZVRpbWVDYWNoZSA9IERhdGVUaW1lLmZyb21NaWxsaXMoMTU1NTU1NTU1NTU1NSk7XG4gIH1cbiAgcmV0dXJuIGR1bW15RGF0ZVRpbWVDYWNoZTtcbn1cbmZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7XG4gIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG4gIHZhciBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4udmFsKTtcbiAgdmFyIHRva2VucyA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBsb2NhbGUpO1xuICBpZiAodG9rZW5zID09IG51bGwgfHwgdG9rZW5zLmluY2x1ZGVzKHVuZGVmaW5lZCkpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbiAgcmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIGV4cGFuZE1hY3JvVG9rZW5zKHRva2VucywgbG9jYWxlKSB7XG4gIHZhciBfQXJyYXkkcHJvdG90eXBlO1xuICByZXR1cm4gKF9BcnJheSRwcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGUpLmNvbmNhdC5hcHBseShfQXJyYXkkcHJvdG90eXBlLCB0b2tlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0LCBsb2NhbGUpO1xuICB9KSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgdmFyIHRva2VucyA9IGV4cGFuZE1hY3JvVG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmb3JtYXQpLCBsb2NhbGUpLFxuICAgIHVuaXRzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpO1xuICAgIH0pLFxuICAgIGRpc3F1YWxpZnlpbmdVbml0ID0gdW5pdHMuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuaW52YWxpZFJlYXNvbjtcbiAgICB9KTtcbiAgaWYgKGRpc3F1YWxpZnlpbmdVbml0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIHRva2VuczogdG9rZW5zLFxuICAgICAgaW52YWxpZFJlYXNvbjogZGlzcXVhbGlmeWluZ1VuaXQuaW52YWxpZFJlYXNvblxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9idWlsZFJlZ2V4ID0gYnVpbGRSZWdleCh1bml0cyksXG4gICAgICByZWdleFN0cmluZyA9IF9idWlsZFJlZ2V4WzBdLFxuICAgICAgaGFuZGxlcnMgPSBfYnVpbGRSZWdleFsxXSxcbiAgICAgIHJlZ2V4ID0gUmVnRXhwKHJlZ2V4U3RyaW5nLCBcImlcIiksXG4gICAgICBfbWF0Y2ggPSBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKSxcbiAgICAgIHJhd01hdGNoZXMgPSBfbWF0Y2hbMF0sXG4gICAgICBtYXRjaGVzID0gX21hdGNoWzFdLFxuICAgICAgX3JlZjYgPSBtYXRjaGVzID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKSA6IFtudWxsLCBudWxsLCB1bmRlZmluZWRdLFxuICAgICAgcmVzdWx0ID0gX3JlZjZbMF0sXG4gICAgICB6b25lID0gX3JlZjZbMV0sXG4gICAgICBzcGVjaWZpY09mZnNldCA9IF9yZWY2WzJdO1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcImFcIikgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJIXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBpbmNsdWRlIG1lcmlkaWVtIHdoZW4gc3BlY2lmeWluZyAyNC1ob3VyIGZvcm1hdFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIHRva2VuczogdG9rZW5zLFxuICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgcmF3TWF0Y2hlczogcmF3TWF0Y2hlcyxcbiAgICAgIG1hdGNoZXM6IG1hdGNoZXMsXG4gICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgIHpvbmU6IHpvbmUsXG4gICAgICBzcGVjaWZpY09mZnNldDogc3BlY2lmaWNPZmZzZXRcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZUZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XG4gIHZhciBfZXhwbGFpbkZyb21Ub2tlbnMgPSBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpLFxuICAgIHJlc3VsdCA9IF9leHBsYWluRnJvbVRva2Vucy5yZXN1bHQsXG4gICAgem9uZSA9IF9leHBsYWluRnJvbVRva2Vucy56b25lLFxuICAgIHNwZWNpZmljT2Zmc2V0ID0gX2V4cGxhaW5Gcm9tVG9rZW5zLnNwZWNpZmljT2Zmc2V0LFxuICAgIGludmFsaWRSZWFzb24gPSBfZXhwbGFpbkZyb21Ub2tlbnMuaW52YWxpZFJlYXNvbjtcbiAgcmV0dXJuIFtyZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uXTtcbn1cbmZ1bmN0aW9uIGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBsb2NhbGUpIHtcbiAgaWYgKCFmb3JtYXRPcHRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIGZvcm1hdHRlciA9IEZvcm1hdHRlci5jcmVhdGUobG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgdmFyIHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdERhdGVUaW1lUGFydHMoZ2V0RHVtbXlEYXRlVGltZSgpKTtcbiAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiB0b2tlbkZvclBhcnQocCwgZm9ybWF0T3B0cyk7XG4gIH0pO1xufVxuXG52YXIgbm9uTGVhcExhZGRlciA9IFswLCAzMSwgNTksIDkwLCAxMjAsIDE1MSwgMTgxLCAyMTIsIDI0MywgMjczLCAzMDQsIDMzNF0sXG4gIGxlYXBMYWRkZXIgPSBbMCwgMzEsIDYwLCA5MSwgMTIxLCAxNTIsIDE4MiwgMjEzLCAyNDQsIDI3NCwgMzA1LCAzMzVdO1xuZnVuY3Rpb24gdW5pdE91dE9mUmFuZ2UodW5pdCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFwidW5pdCBvdXQgb2YgcmFuZ2VcIiwgXCJ5b3Ugc3BlY2lmaWVkIFwiICsgdmFsdWUgKyBcIiAob2YgdHlwZSBcIiArIHR5cGVvZiB2YWx1ZSArIFwiKSBhcyBhIFwiICsgdW5pdCArIFwiLCB3aGljaCBpcyBpbnZhbGlkXCIpO1xufVxuZnVuY3Rpb24gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpO1xuICBpZiAoeWVhciA8IDEwMCAmJiB5ZWFyID49IDApIHtcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xuICB9XG4gIHZhciBqcyA9IGQuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiBqcyA9PT0gMCA/IDcgOiBqcztcbn1cbmZ1bmN0aW9uIGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgcmV0dXJuIGRheSArIChpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIpW21vbnRoIC0gMV07XG59XG5mdW5jdGlvbiB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpIHtcbiAgdmFyIHRhYmxlID0gaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyLFxuICAgIG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkgPCBvcmRpbmFsO1xuICAgIH0pLFxuICAgIGRheSA9IG9yZGluYWwgLSB0YWJsZVttb250aDBdO1xuICByZXR1cm4ge1xuICAgIG1vbnRoOiBtb250aDAgKyAxLFxuICAgIGRheTogZGF5XG4gIH07XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBncmVnb3JpYW5Ub1dlZWsoZ3JlZ09iaikge1xuICB2YXIgeWVhciA9IGdyZWdPYmoueWVhcixcbiAgICBtb250aCA9IGdyZWdPYmoubW9udGgsXG4gICAgZGF5ID0gZ3JlZ09iai5kYXksXG4gICAgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpLFxuICAgIHdlZWtkYXkgPSBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSk7XG4gIHZhciB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSxcbiAgICB3ZWVrWWVhcjtcbiAgaWYgKHdlZWtOdW1iZXIgPCAxKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyIC0gMTtcbiAgICB3ZWVrTnVtYmVyID0gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICh3ZWVrTnVtYmVyID4gd2Vla3NJbldlZWtZZWFyKHllYXIpKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyICsgMTtcbiAgICB3ZWVrTnVtYmVyID0gMTtcbiAgfSBlbHNlIHtcbiAgICB3ZWVrWWVhciA9IHllYXI7XG4gIH1cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICB3ZWVrWWVhcjogd2Vla1llYXIsXG4gICAgd2Vla051bWJlcjogd2Vla051bWJlcixcbiAgICB3ZWVrZGF5OiB3ZWVrZGF5XG4gIH0sIHRpbWVPYmplY3QoZ3JlZ09iaikpO1xufVxuZnVuY3Rpb24gd2Vla1RvR3JlZ29yaWFuKHdlZWtEYXRhKSB7XG4gIHZhciB3ZWVrWWVhciA9IHdlZWtEYXRhLndlZWtZZWFyLFxuICAgIHdlZWtOdW1iZXIgPSB3ZWVrRGF0YS53ZWVrTnVtYmVyLFxuICAgIHdlZWtkYXkgPSB3ZWVrRGF0YS53ZWVrZGF5LFxuICAgIHdlZWtkYXlPZkphbjQgPSBkYXlPZldlZWsod2Vla1llYXIsIDEsIDQpLFxuICAgIHllYXJJbkRheXMgPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgdmFyIG9yZGluYWwgPSB3ZWVrTnVtYmVyICogNyArIHdlZWtkYXkgLSB3ZWVrZGF5T2ZKYW40IC0gMyxcbiAgICB5ZWFyO1xuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cbiAgdmFyIF91bmNvbXB1dGVPcmRpbmFsID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSxcbiAgICBtb250aCA9IF91bmNvbXB1dGVPcmRpbmFsLm1vbnRoLFxuICAgIGRheSA9IF91bmNvbXB1dGVPcmRpbmFsLmRheTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICB5ZWFyOiB5ZWFyLFxuICAgIG1vbnRoOiBtb250aCxcbiAgICBkYXk6IGRheVxuICB9LCB0aW1lT2JqZWN0KHdlZWtEYXRhKSk7XG59XG5mdW5jdGlvbiBncmVnb3JpYW5Ub09yZGluYWwoZ3JlZ0RhdGEpIHtcbiAgdmFyIHllYXIgPSBncmVnRGF0YS55ZWFyLFxuICAgIG1vbnRoID0gZ3JlZ0RhdGEubW9udGgsXG4gICAgZGF5ID0gZ3JlZ0RhdGEuZGF5O1xuICB2YXIgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHllYXI6IHllYXIsXG4gICAgb3JkaW5hbDogb3JkaW5hbFxuICB9LCB0aW1lT2JqZWN0KGdyZWdEYXRhKSk7XG59XG5mdW5jdGlvbiBvcmRpbmFsVG9HcmVnb3JpYW4ob3JkaW5hbERhdGEpIHtcbiAgdmFyIHllYXIgPSBvcmRpbmFsRGF0YS55ZWFyLFxuICAgIG9yZGluYWwgPSBvcmRpbmFsRGF0YS5vcmRpbmFsO1xuICB2YXIgX3VuY29tcHV0ZU9yZGluYWwyID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSxcbiAgICBtb250aCA9IF91bmNvbXB1dGVPcmRpbmFsMi5tb250aCxcbiAgICBkYXkgPSBfdW5jb21wdXRlT3JkaW5hbDIuZGF5O1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHllYXI6IHllYXIsXG4gICAgbW9udGg6IG1vbnRoLFxuICAgIGRheTogZGF5XG4gIH0sIHRpbWVPYmplY3Qob3JkaW5hbERhdGEpKTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRXZWVrRGF0YShvYmopIHtcbiAgdmFyIHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoud2Vla1llYXIpLFxuICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSksXG4gICAgdmFsaWRXZWVrZGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtkYXksIDEsIDcpO1xuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtZZWFyXCIsIG9iai53ZWVrWWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vlaykge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtcIiwgb2JqLndlZWspO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWtkYXkpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrZGF5XCIsIG9iai53ZWVrZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRPcmRpbmFsRGF0YShvYmopIHtcbiAgdmFyIHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksXG4gICAgdmFsaWRPcmRpbmFsID0gaW50ZWdlckJldHdlZW4ob2JqLm9yZGluYWwsIDEsIGRheXNJblllYXIob2JqLnllYXIpKTtcbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRPcmRpbmFsKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwib3JkaW5hbFwiLCBvYmoub3JkaW5hbCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcbiAgdmFyIHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksXG4gICAgdmFsaWRNb250aCA9IGludGVnZXJCZXR3ZWVuKG9iai5tb250aCwgMSwgMTIpLFxuICAgIHZhbGlkRGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLmRheSwgMSwgZGF5c0luTW9udGgob2JqLnllYXIsIG9iai5tb250aCkpO1xuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1vbnRoKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibW9udGhcIiwgb2JqLm1vbnRoKTtcbiAgfSBlbHNlIGlmICghdmFsaWREYXkpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJkYXlcIiwgb2JqLmRheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkVGltZURhdGEob2JqKSB7XG4gIHZhciBob3VyID0gb2JqLmhvdXIsXG4gICAgbWludXRlID0gb2JqLm1pbnV0ZSxcbiAgICBzZWNvbmQgPSBvYmouc2Vjb25kLFxuICAgIG1pbGxpc2Vjb25kID0gb2JqLm1pbGxpc2Vjb25kO1xuICB2YXIgdmFsaWRIb3VyID0gaW50ZWdlckJldHdlZW4oaG91ciwgMCwgMjMpIHx8IGhvdXIgPT09IDI0ICYmIG1pbnV0ZSA9PT0gMCAmJiBzZWNvbmQgPT09IDAgJiYgbWlsbGlzZWNvbmQgPT09IDAsXG4gICAgdmFsaWRNaW51dGUgPSBpbnRlZ2VyQmV0d2VlbihtaW51dGUsIDAsIDU5KSxcbiAgICB2YWxpZFNlY29uZCA9IGludGVnZXJCZXR3ZWVuKHNlY29uZCwgMCwgNTkpLFxuICAgIHZhbGlkTWlsbGlzZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihtaWxsaXNlY29uZCwgMCwgOTk5KTtcbiAgaWYgKCF2YWxpZEhvdXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJob3VyXCIsIGhvdXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1pbnV0ZSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbnV0ZVwiLCBtaW51dGUpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInNlY29uZFwiLCBzZWNvbmQpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1pbGxpc2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgSU5WQUxJRCA9IFwiSW52YWxpZCBEYXRlVGltZVwiO1xudmFyIE1BWF9EQVRFID0gOC42NGUxNTtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkWm9uZSh6b25lKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcInVuc3VwcG9ydGVkIHpvbmVcIiwgXCJ0aGUgem9uZSBcXFwiXCIgKyB6b25lLm5hbWUgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZFwiKTtcbn1cblxuLy8gd2UgY2FjaGUgd2VlayBkYXRhIG9uIHRoZSBEVCBvYmplY3QgYW5kIHRoaXMgaW50ZXJtZWRpYXRlcyB0aGUgY2FjaGVcbmZ1bmN0aW9uIHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEoZHQpIHtcbiAgaWYgKGR0LndlZWtEYXRhID09PSBudWxsKSB7XG4gICAgZHQud2Vla0RhdGEgPSBncmVnb3JpYW5Ub1dlZWsoZHQuYyk7XG4gIH1cbiAgcmV0dXJuIGR0LndlZWtEYXRhO1xufVxuXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMsIFwibWFrZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGVzZSBtb2RpZmljYXRpb25zXCIuIGFsbCBcInNldHRlcnNcIiByZWFsbHkgdXNlIHRoaXNcbi8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2hpbGUgb25seSBjaGFuZ2luZyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBjbG9uZShpbnN0LCBhbHRzKSB7XG4gIHZhciBjdXJyZW50ID0ge1xuICAgIHRzOiBpbnN0LnRzLFxuICAgIHpvbmU6IGluc3Quem9uZSxcbiAgICBjOiBpbnN0LmMsXG4gICAgbzogaW5zdC5vLFxuICAgIGxvYzogaW5zdC5sb2MsXG4gICAgaW52YWxpZDogaW5zdC5pbnZhbGlkXG4gIH07XG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoX2V4dGVuZHMoe30sIGN1cnJlbnQsIGFsdHMsIHtcbiAgICBvbGQ6IGN1cnJlbnRcbiAgfSkpO1xufVxuXG4vLyBmaW5kIHRoZSByaWdodCBvZmZzZXQgYSBnaXZlbiBsb2NhbCB0aW1lLiBUaGUgbyBpbnB1dCBpcyBvdXIgZ3Vlc3MsIHdoaWNoIGRldGVybWluZXMgd2hpY2hcbi8vIG9mZnNldCB3ZSdsbCBwaWNrIGluIGFtYmlndW91cyBjYXNlcyAoZS5nLiB0aGVyZSBhcmUgdHdvIDMgQU1zIGIvYyBGYWxsYmFjayBEU1QpXG5mdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHtcbiAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzXG4gIHZhciB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwO1xuXG4gIC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcbiAgdmFyIG8yID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcblxuICAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcbiAgaWYgKG8gPT09IG8yKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgb107XG4gIH1cblxuICAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxuICB1dGNHdWVzcyAtPSAobzIgLSBvKSAqIDYwICogMTAwMDtcblxuICAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcbiAgdmFyIG8zID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcbiAgaWYgKG8yID09PSBvMykge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG8yXTtcbiAgfVxuXG4gIC8vIElmIGl0J3MgZGlmZmVyZW50LCB3ZSdyZSBpbiBhIGhvbGUgdGltZS4gVGhlIG9mZnNldCBoYXMgY2hhbmdlZCwgYnV0IHRoZSB3ZSBkb24ndCBhZGp1c3QgdGhlIHRpbWVcbiAgcmV0dXJuIFtsb2NhbFRTIC0gTWF0aC5taW4obzIsIG8zKSAqIDYwICogMTAwMCwgTWF0aC5tYXgobzIsIG8zKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gZXBvY2ggdGltZXN0YW1wIGludG8gYSBjYWxlbmRhciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gb2Zmc2V0XG5mdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHtcbiAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuICB2YXIgZCA9IG5ldyBEYXRlKHRzKTtcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBkLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgbW9udGg6IGQuZ2V0VVRDTW9udGgoKSArIDEsXG4gICAgZGF5OiBkLmdldFVUQ0RhdGUoKSxcbiAgICBob3VyOiBkLmdldFVUQ0hvdXJzKCksXG4gICAgbWludXRlOiBkLmdldFVUQ01pbnV0ZXMoKSxcbiAgICBzZWNvbmQ6IGQuZ2V0VVRDU2Vjb25kcygpLFxuICAgIG1pbGxpc2Vjb25kOiBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gIH07XG59XG5cbi8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXBcbmZ1bmN0aW9uIG9ialRvVFMob2JqLCBvZmZzZXQsIHpvbmUpIHtcbiAgcmV0dXJuIGZpeE9mZnNldChvYmpUb0xvY2FsVFMob2JqKSwgb2Zmc2V0LCB6b25lKTtcbn1cblxuLy8gY3JlYXRlIGEgbmV3IERUIGluc3RhbmNlIGJ5IGFkZGluZyBhIGR1cmF0aW9uLCBhZGp1c3RpbmcgZm9yIERTVHNcbmZ1bmN0aW9uIGFkanVzdFRpbWUoaW5zdCwgZHVyKSB7XG4gIHZhciBvUHJlID0gaW5zdC5vLFxuICAgIHllYXIgPSBpbnN0LmMueWVhciArIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcbiAgICBtb250aCA9IGluc3QuYy5tb250aCArIE1hdGgudHJ1bmMoZHVyLm1vbnRocykgKyBNYXRoLnRydW5jKGR1ci5xdWFydGVycykgKiAzLFxuICAgIGMgPSBfZXh0ZW5kcyh7fSwgaW5zdC5jLCB7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBNYXRoLm1pbihpbnN0LmMuZGF5LCBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpICsgTWF0aC50cnVuYyhkdXIuZGF5cykgKyBNYXRoLnRydW5jKGR1ci53ZWVrcykgKiA3XG4gICAgfSksXG4gICAgbWlsbGlzVG9BZGQgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtcbiAgICAgIHllYXJzOiBkdXIueWVhcnMgLSBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgICBxdWFydGVyczogZHVyLnF1YXJ0ZXJzIC0gTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpLFxuICAgICAgbW9udGhzOiBkdXIubW9udGhzIC0gTWF0aC50cnVuYyhkdXIubW9udGhzKSxcbiAgICAgIHdlZWtzOiBkdXIud2Vla3MgLSBNYXRoLnRydW5jKGR1ci53ZWVrcyksXG4gICAgICBkYXlzOiBkdXIuZGF5cyAtIE1hdGgudHJ1bmMoZHVyLmRheXMpLFxuICAgICAgaG91cnM6IGR1ci5ob3VycyxcbiAgICAgIG1pbnV0ZXM6IGR1ci5taW51dGVzLFxuICAgICAgc2Vjb25kczogZHVyLnNlY29uZHMsXG4gICAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHNcbiAgICB9KS5hcyhcIm1pbGxpc2Vjb25kc1wiKSxcbiAgICBsb2NhbFRTID0gb2JqVG9Mb2NhbFRTKGMpO1xuICB2YXIgX2ZpeE9mZnNldCA9IGZpeE9mZnNldChsb2NhbFRTLCBvUHJlLCBpbnN0LnpvbmUpLFxuICAgIHRzID0gX2ZpeE9mZnNldFswXSxcbiAgICBvID0gX2ZpeE9mZnNldFsxXTtcbiAgaWYgKG1pbGxpc1RvQWRkICE9PSAwKSB7XG4gICAgdHMgKz0gbWlsbGlzVG9BZGQ7XG4gICAgLy8gdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWQgdGhlIG9mZnNldCBieSBnb2luZyBvdmVyIGEgRFNULCBidXQgd2Ugd2FudCB0byBrZWVwIHRoZSB0cyB0aGUgc2FtZVxuICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRzOiB0cyxcbiAgICBvOiBvXG4gIH07XG59XG5cbi8vIGhlbHBlciB1c2VmdWwgaW4gdHVybmluZyB0aGUgcmVzdWx0cyBvZiBwYXJzaW5nIGludG8gcmVhbCBkYXRlc1xuLy8gYnkgaGFuZGxpbmcgdGhlIHpvbmUgb3B0aW9uc1xuZnVuY3Rpb24gcGFyc2VEYXRhVG9EYXRlVGltZShwYXJzZWQsIHBhcnNlZFpvbmUsIG9wdHMsIGZvcm1hdCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpIHtcbiAgdmFyIHNldFpvbmUgPSBvcHRzLnNldFpvbmUsXG4gICAgem9uZSA9IG9wdHMuem9uZTtcbiAgaWYgKHBhcnNlZCAmJiBPYmplY3Qua2V5cyhwYXJzZWQpLmxlbmd0aCAhPT0gMCB8fCBwYXJzZWRab25lKSB7XG4gICAgdmFyIGludGVycHJldGF0aW9uWm9uZSA9IHBhcnNlZFpvbmUgfHwgem9uZSxcbiAgICAgIGluc3QgPSBEYXRlVGltZS5mcm9tT2JqZWN0KHBhcnNlZCwgX2V4dGVuZHMoe30sIG9wdHMsIHtcbiAgICAgICAgem9uZTogaW50ZXJwcmV0YXRpb25ab25lLFxuICAgICAgICBzcGVjaWZpY09mZnNldDogc3BlY2lmaWNPZmZzZXRcbiAgICAgIH0pKTtcbiAgICByZXR1cm4gc2V0Wm9uZSA/IGluc3QgOiBpbnN0LnNldFpvbmUoem9uZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQobmV3IEludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIFwidGhlIGlucHV0IFxcXCJcIiArIHRleHQgKyBcIlxcXCIgY2FuJ3QgYmUgcGFyc2VkIGFzIFwiICsgZm9ybWF0KSk7XG4gIH1cbn1cblxuLy8gaWYgeW91IHdhbnQgdG8gb3V0cHV0IGEgdGVjaG5pY2FsIGZvcm1hdCAoZS5nLiBSRkMgMjgyMiksIHRoaXMgaGVscGVyXG4vLyBoZWxwcyBoYW5kbGUgdGhlIGRldGFpbHNcbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1opIHtcbiAgaWYgKGFsbG93WiA9PT0gdm9pZCAwKSB7XG4gICAgYWxsb3daID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZHQuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUoTG9jYWxlLmNyZWF0ZShcImVuLVVTXCIpLCB7XG4gICAgYWxsb3daOiBhbGxvd1osXG4gICAgZm9yY2VTaW1wbGU6IHRydWVcbiAgfSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmb3JtYXQpIDogbnVsbDtcbn1cbmZ1bmN0aW9uIF90b0lTT0RhdGUobywgZXh0ZW5kZWQpIHtcbiAgdmFyIGxvbmdGb3JtYXQgPSBvLmMueWVhciA+IDk5OTkgfHwgby5jLnllYXIgPCAwO1xuICB2YXIgYyA9IFwiXCI7XG4gIGlmIChsb25nRm9ybWF0ICYmIG8uYy55ZWFyID49IDApIGMgKz0gXCIrXCI7XG4gIGMgKz0gcGFkU3RhcnQoby5jLnllYXIsIGxvbmdGb3JtYXQgPyA2IDogNCk7XG4gIGlmIChleHRlbmRlZCkge1xuICAgIGMgKz0gXCItXCI7XG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xuICAgIGMgKz0gXCItXCI7XG4gICAgYyArPSBwYWRTdGFydChvLmMuZGF5KTtcbiAgfSBlbHNlIHtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5tb250aCk7XG4gICAgYyArPSBwYWRTdGFydChvLmMuZGF5KTtcbiAgfVxuICByZXR1cm4gYztcbn1cbmZ1bmN0aW9uIF90b0lTT1RpbWUobywgZXh0ZW5kZWQsIHN1cHByZXNzU2Vjb25kcywgc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQsIGV4dGVuZGVkWm9uZSkge1xuICB2YXIgYyA9IHBhZFN0YXJ0KG8uYy5ob3VyKTtcbiAgaWYgKGV4dGVuZGVkKSB7XG4gICAgYyArPSBcIjpcIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xuICAgIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gIH1cbiAgaWYgKG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLnNlY29uZCk7XG4gICAgaWYgKG8uYy5taWxsaXNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NNaWxsaXNlY29uZHMpIHtcbiAgICAgIGMgKz0gXCIuXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KG8uYy5taWxsaXNlY29uZCwgMyk7XG4gICAgfVxuICB9XG4gIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgaWYgKG8uaXNPZmZzZXRGaXhlZCAmJiBvLm9mZnNldCA9PT0gMCAmJiAhZXh0ZW5kZWRab25lKSB7XG4gICAgICBjICs9IFwiWlwiO1xuICAgIH0gZWxzZSBpZiAoby5vIDwgMCkge1xuICAgICAgYyArPSBcIi1cIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vIC8gNjApKTtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAlIDYwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGMgKz0gXCIrXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vIC8gNjApKTtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vICUgNjApKTtcbiAgICB9XG4gIH1cbiAgaWYgKGV4dGVuZGVkWm9uZSkge1xuICAgIGMgKz0gXCJbXCIgKyBvLnpvbmUuaWFuYU5hbWUgKyBcIl1cIjtcbiAgfVxuICByZXR1cm4gYztcbn1cblxuLy8gZGVmYXVsdHMgZm9yIHVuc3BlY2lmaWVkIHVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzXG52YXIgZGVmYXVsdFVuaXRWYWx1ZXMgPSB7XG4gICAgbW9udGg6IDEsXG4gICAgZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMFxuICB9LFxuICBkZWZhdWx0V2Vla1VuaXRWYWx1ZXMgPSB7XG4gICAgd2Vla051bWJlcjogMSxcbiAgICB3ZWVrZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMFxuICB9LFxuICBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMgPSB7XG4gICAgb3JkaW5hbDogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDBcbiAgfTtcblxuLy8gVW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnMsIHNvcnRlZCBieSBiaWduZXNzXG52YXIgb3JkZXJlZFVuaXRzID0gW1wieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdLFxuICBvcmRlcmVkV2Vla1VuaXRzID0gW1wid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla2RheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSxcbiAgb3JkZXJlZE9yZGluYWxVbml0cyA9IFtcInllYXJcIiwgXCJvcmRpbmFsXCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdO1xuXG4vLyBzdGFuZGFyZGl6ZSBjYXNlIGFuZCBwbHVyYWxpdHkgaW4gdW5pdHNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICB2YXIgbm9ybWFsaXplZCA9IHtcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBkYXk6IFwiZGF5XCIsXG4gICAgZGF5czogXCJkYXlcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgd2Vla2RheTogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla2RheXM6IFwid2Vla2RheVwiLFxuICAgIHdlZWtudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtzbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrbnVtYmVyczogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3llYXI6IFwid2Vla1llYXJcIixcbiAgICB3ZWVreWVhcnM6IFwid2Vla1llYXJcIixcbiAgICBvcmRpbmFsOiBcIm9yZGluYWxcIlxuICB9W3VuaXQudG9Mb3dlckNhc2UoKV07XG4gIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXG5mdW5jdGlvbiBxdWlja0RUKG9iaiwgb3B0cykge1xuICB2YXIgem9uZSA9IG5vcm1hbGl6ZVpvbmUob3B0cy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob3B0cyksXG4gICAgdHNOb3cgPSBTZXR0aW5ncy5ub3coKTtcbiAgdmFyIHRzLCBvO1xuXG4gIC8vIGFzc3VtZSB3ZSBoYXZlIHRoZSBoaWdoZXItb3JkZXIgdW5pdHNcbiAgaWYgKCFpc1VuZGVmaW5lZChvYmoueWVhcikpIHtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9vcmRlcmVkVW5pdHMgPSBvcmRlcmVkVW5pdHM7IF9pIDwgX29yZGVyZWRVbml0cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciB1ID0gX29yZGVyZWRVbml0c1tfaV07XG4gICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGludmFsaWQgPSBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHx8IGhhc0ludmFsaWRUaW1lRGF0YShvYmopO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9XG4gICAgdmFyIG9mZnNldFByb3ZpcyA9IHpvbmUub2Zmc2V0KHRzTm93KTtcbiAgICB2YXIgX29ialRvVFMgPSBvYmpUb1RTKG9iaiwgb2Zmc2V0UHJvdmlzLCB6b25lKTtcbiAgICB0cyA9IF9vYmpUb1RTWzBdO1xuICAgIG8gPSBfb2JqVG9UU1sxXTtcbiAgfSBlbHNlIHtcbiAgICB0cyA9IHRzTm93O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgIHRzOiB0cyxcbiAgICB6b25lOiB6b25lLFxuICAgIGxvYzogbG9jLFxuICAgIG86IG9cbiAgfSk7XG59XG5mdW5jdGlvbiBkaWZmUmVsYXRpdmUoc3RhcnQsIGVuZCwgb3B0cykge1xuICB2YXIgcm91bmQgPSBpc1VuZGVmaW5lZChvcHRzLnJvdW5kKSA/IHRydWUgOiBvcHRzLnJvdW5kLFxuICAgIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChjLCB1bml0KSB7XG4gICAgICBjID0gcm91bmRUbyhjLCByb3VuZCB8fCBvcHRzLmNhbGVuZGFyeSA/IDAgOiAyLCB0cnVlKTtcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBlbmQubG9jLmNsb25lKG9wdHMpLnJlbEZvcm1hdHRlcihvcHRzKTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGMsIHVuaXQpO1xuICAgIH0sXG4gICAgZGlmZmVyID0gZnVuY3Rpb24gZGlmZmVyKHVuaXQpIHtcbiAgICAgIGlmIChvcHRzLmNhbGVuZGFyeSkge1xuICAgICAgICBpZiAoIWVuZC5oYXNTYW1lKHN0YXJ0LCB1bml0KSkge1xuICAgICAgICAgIHJldHVybiBlbmQuc3RhcnRPZih1bml0KS5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpLmdldCh1bml0KTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCk7XG4gICAgICB9XG4gICAgfTtcbiAgaWYgKG9wdHMudW5pdCkge1xuICAgIHJldHVybiBmb3JtYXQoZGlmZmVyKG9wdHMudW5pdCksIG9wdHMudW5pdCk7XG4gIH1cbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcHRzLnVuaXRzKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICB2YXIgdW5pdCA9IF9zdGVwLnZhbHVlO1xuICAgIHZhciBjb3VudCA9IGRpZmZlcih1bml0KTtcbiAgICBpZiAoTWF0aC5hYnMoY291bnQpID49IDEpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoY291bnQsIHVuaXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHN0YXJ0ID4gZW5kID8gLTAgOiAwLCBvcHRzLnVuaXRzW29wdHMudW5pdHMubGVuZ3RoIC0gMV0pO1xufVxuZnVuY3Rpb24gbGFzdE9wdHMoYXJnTGlzdCkge1xuICB2YXIgb3B0cyA9IHt9LFxuICAgIGFyZ3M7XG4gIGlmIChhcmdMaXN0Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgIG9wdHMgPSBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV07XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCkuc2xpY2UoMCwgYXJnTGlzdC5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KTtcbiAgfVxuICByZXR1cm4gW29wdHMsIGFyZ3NdO1xufVxuXG4vKipcbiAqIEEgRGF0ZVRpbWUgaXMgYW4gaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgYW5kIGFjY29tcGFueWluZyBtZXRob2RzLiBJdCBjb250YWlucyBjbGFzcyBhbmQgaW5zdGFuY2UgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBBIERhdGVUaW1lIGNvbXByaXNlcyBvZjpcbiAqICogQSB0aW1lc3RhbXAuIEVhY2ggRGF0ZVRpbWUgaW5zdGFuY2UgcmVmZXJzIHRvIGEgc3BlY2lmaWMgbWlsbGlzZWNvbmQgb2YgdGhlIFVuaXggZXBvY2guXG4gKiAqIEEgdGltZSB6b25lLiBFYWNoIGluc3RhbmNlIGlzIGNvbnNpZGVyZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBzcGVjaWZpYyB6b25lIChieSBkZWZhdWx0IHRoZSBsb2NhbCBzeXN0ZW0ncyB6b25lKS5cbiAqICogQ29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgZWZmZWN0IGhvdyBvdXRwdXQgc3RyaW5ncyBhcmUgZm9ybWF0dGVkLCBzdWNoIGFzIGBsb2NhbGVgLCBgbnVtYmVyaW5nU3lzdGVtYCwgYW5kIGBvdXRwdXRDYWxlbmRhcmAuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgZnVuY3Rpb25hbGl0eSBpdCBwcm92aWRlczpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKjogVG8gY3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBpdHMgY29tcG9uZW50cywgdXNlIG9uZSBvZiBpdHMgZmFjdG9yeSBjbGFzcyBtZXRob2RzOiB7QGxpbmsgRGF0ZVRpbWUubG9jYWx9LCB7QGxpbmsgRGF0ZVRpbWUudXRjfSwgYW5kIChtb3N0IGZsZXhpYmx5KSB7QGxpbmsgRGF0ZVRpbWUuZnJvbU9iamVjdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIHN0YW5kYXJkIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUlTT30sIHtAbGluayBEYXRlVGltZS5mcm9tSFRUUH0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUuZnJvbVJGQzI4MjJ9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBjdXN0b20gc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZS5mcm9tRm9ybWF0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgbmF0aXZlIEpTIGRhdGUsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUpTRGF0ZX0uXG4gKiAqICoqR3JlZ29yaWFuIGNhbGVuZGFyIGFuZCB0aW1lKio6IFRvIGV4YW1pbmUgdGhlIEdyZWdvcmlhbiBwcm9wZXJ0aWVzIG9mIGEgRGF0ZVRpbWUgaW5kaXZpZHVhbGx5IChpLmUgYXMgb3Bwb3NlZCB0byBjb2xsZWN0aXZlbHkgdGhyb3VnaCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9KSwgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjeWVhcn0sIHtAbGluayBEYXRlVGltZSNtb250aH0sXG4gKiB7QGxpbmsgRGF0ZVRpbWUjZGF5fSwge0BsaW5rIERhdGVUaW1lI2hvdXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXRlfSwge0BsaW5rIERhdGVUaW1lI3NlY29uZH0sIHtAbGluayBEYXRlVGltZSNtaWxsaXNlY29uZH0gYWNjZXNzb3JzLlxuICogKiAqKldlZWsgY2FsZW5kYXIqKjogRm9yIElTTyB3ZWVrIGNhbGVuZGFyIGF0dHJpYnV0ZXMsIHNlZSB0aGUge0BsaW5rIERhdGVUaW1lI3dlZWtZZWFyfSwge0BsaW5rIERhdGVUaW1lI3dlZWtOdW1iZXJ9LCBhbmQge0BsaW5rIERhdGVUaW1lI3dlZWtkYXl9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjbG9jYWxlfSBhbmQge0BsaW5rIERhdGVUaW1lI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKio6IFRvIHRyYW5zZm9ybSB0aGUgRGF0ZVRpbWUgaW50byBvdGhlciBEYXRlVGltZXMsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0fSwge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSwge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0TG9jYWxlfSwge0BsaW5rIERhdGVUaW1lLnBsdXN9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXN9LCB7QGxpbmsgRGF0ZVRpbWUjZW5kT2Z9LCB7QGxpbmsgRGF0ZVRpbWUjc3RhcnRPZn0sIHtAbGluayBEYXRlVGltZSN0b1VUQ30sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0uXG4gKiAqICoqT3V0cHV0Kio6IFRvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZX0sIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlQ2FsZW5kYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9KU09OfSwge0BsaW5rIERhdGVUaW1lI3RvSVNPfSwge0BsaW5rIERhdGVUaW1lI3RvSFRUUH0sIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0sIHtAbGluayBEYXRlVGltZSN0b1JGQzI4MjJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9TdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9LCB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9KU0RhdGV9LlxuICpcbiAqIFRoZXJlJ3MgcGxlbnR5IG90aGVycyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGltZSB6b25lcywgYWx0ZXJuYXRpdmUgY2FsZW5kYXJzLCB2YWxpZGl0eSwgYW5kIHNvIG9uLCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cbnZhciBEYXRlVGltZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIERhdGVUaW1lKGNvbmZpZykge1xuICAgIHZhciB6b25lID0gY29uZmlnLnpvbmUgfHwgU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG4gICAgdmFyIGludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCAoTnVtYmVyLmlzTmFOKGNvbmZpZy50cykgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsKSB8fCAoIXpvbmUuaXNWYWxpZCA/IHVuc3VwcG9ydGVkWm9uZSh6b25lKSA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudHMgPSBpc1VuZGVmaW5lZChjb25maWcudHMpID8gU2V0dGluZ3Mubm93KCkgOiBjb25maWcudHM7XG4gICAgdmFyIGMgPSBudWxsLFxuICAgICAgbyA9IG51bGw7XG4gICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICB2YXIgdW5jaGFuZ2VkID0gY29uZmlnLm9sZCAmJiBjb25maWcub2xkLnRzID09PSB0aGlzLnRzICYmIGNvbmZpZy5vbGQuem9uZS5lcXVhbHMoem9uZSk7XG4gICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgIHZhciBfcmVmID0gW2NvbmZpZy5vbGQuYywgY29uZmlnLm9sZC5vXTtcbiAgICAgICAgYyA9IF9yZWZbMF07XG4gICAgICAgIG8gPSBfcmVmWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG90ID0gem9uZS5vZmZzZXQodGhpcy50cyk7XG4gICAgICAgIGMgPSB0c1RvT2JqKHRoaXMudHMsIG90KTtcbiAgICAgICAgaW52YWxpZCA9IE51bWJlci5pc05hTihjLnllYXIpID8gbmV3IEludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpIDogbnVsbDtcbiAgICAgICAgYyA9IGludmFsaWQgPyBudWxsIDogYztcbiAgICAgICAgbyA9IGludmFsaWQgPyBudWxsIDogb3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fem9uZSA9IHpvbmU7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBpbnZhbGlkO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMud2Vla0RhdGEgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuYyA9IGM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5vID0gbztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25EYXRlVGltZSA9IHRydWU7XG4gIH1cblxuICAvLyBDT05TVFJVQ1RcblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZm9yIHRoZSBjdXJyZW50IGluc3RhbnQsIGluIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUuXG4gICAqXG4gICAqIFVzZSBTZXR0aW5ncyB0byBvdmVycmlkZSB0aGVzZSBkZWZhdWx0IHZhbHVlcyBpZiBuZWVkZWQuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKCkgLy9+PiBub3cgaW4gdGhlIElTTyBmb3JtYXRcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBEYXRlVGltZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7fSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgbG9jYWwoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKHsgem9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCIgfSkgICAgICAvL34+IG5vdywgaW4gVVMgZWFzdCBjb2FzdCB0aW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDAsIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCB7IHpvbmU6IFwidXRjXCIgfSkgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDAsIGluIFVUQ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUubG9jYWwgPSBmdW5jdGlvbiBsb2NhbCgpIHtcbiAgICB2YXIgX2xhc3RPcHRzID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgIG9wdHMgPSBfbGFzdE9wdHNbMF0sXG4gICAgICBhcmdzID0gX2xhc3RPcHRzWzFdLFxuICAgICAgeWVhciA9IGFyZ3NbMF0sXG4gICAgICBtb250aCA9IGFyZ3NbMV0sXG4gICAgICBkYXkgPSBhcmdzWzJdLFxuICAgICAgaG91ciA9IGFyZ3NbM10sXG4gICAgICBtaW51dGUgPSBhcmdzWzRdLFxuICAgICAgc2Vjb25kID0gYXJnc1s1XSxcbiAgICAgIG1pbGxpc2Vjb25kID0gYXJnc1s2XTtcbiAgICByZXR1cm4gcXVpY2tEVCh7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBkYXksXG4gICAgICBob3VyOiBob3VyLFxuICAgICAgbWludXRlOiBtaW51dGUsXG4gICAgICBzZWNvbmQ6IHNlY29uZCxcbiAgICAgIG1pbGxpc2Vjb25kOiBtaWxsaXNlY29uZFxuICAgIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVogd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUudXRjID0gZnVuY3Rpb24gdXRjKCkge1xuICAgIHZhciBfbGFzdE9wdHMyID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgIG9wdHMgPSBfbGFzdE9wdHMyWzBdLFxuICAgICAgYXJncyA9IF9sYXN0T3B0czJbMV0sXG4gICAgICB5ZWFyID0gYXJnc1swXSxcbiAgICAgIG1vbnRoID0gYXJnc1sxXSxcbiAgICAgIGRheSA9IGFyZ3NbMl0sXG4gICAgICBob3VyID0gYXJnc1szXSxcbiAgICAgIG1pbnV0ZSA9IGFyZ3NbNF0sXG4gICAgICBzZWNvbmQgPSBhcmdzWzVdLFxuICAgICAgbWlsbGlzZWNvbmQgPSBhcmdzWzZdO1xuICAgIG9wdHMuem9uZSA9IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtcbiAgICByZXR1cm4gcXVpY2tEVCh7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBkYXksXG4gICAgICBob3VyOiBob3VyLFxuICAgICAgbWludXRlOiBtaW51dGUsXG4gICAgICBzZWNvbmQ6IHNlY29uZCxcbiAgICAgIG1pbGxpc2Vjb25kOiBtaWxsaXNlY29uZFxuICAgIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tSlNEYXRlID0gZnVuY3Rpb24gZnJvbUpTRGF0ZShkYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB2YXIgdHMgPSBpc0RhdGUoZGF0ZSkgPyBkYXRlLnZhbHVlT2YoKSA6IE5hTjtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHRzKSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpO1xuICAgIH1cbiAgICB2YXIgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IHRzLFxuICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgLSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbU1pbGxpcyA9IGZ1bmN0aW9uIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWlzTnVtYmVyKG1pbGxpc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21NaWxsaXMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQsIGJ1dCByZWNlaXZlZCBhIFwiICsgdHlwZW9mIG1pbGxpc2Vjb25kcyArIFwiIHdpdGggdmFsdWUgXCIgKyBtaWxsaXNlY29uZHMpO1xuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgLU1BWF9EQVRFIHx8IG1pbGxpc2Vjb25kcyA+IE1BWF9EQVRFKSB7XG4gICAgICAvLyB0aGlzIGlzbid0IHBlcmZlY3QgYmVjYXVzZSBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydFxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJUaW1lc3RhbXAgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyAtIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbVNlY29uZHMgPSBmdW5jdGlvbiBmcm9tU2Vjb25kcyhzZWNvbmRzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWlzTnVtYmVyKHNlY29uZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJmcm9tU2Vjb25kcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBzZWNvbmRzICogMTAwMCxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcicgYW5kICdob3VyJyB3aXRoIHJlYXNvbmFibGUgZGVmYXVsdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXIgLSBhIHllYXIsIHN1Y2ggYXMgMTk4N1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoIC0gYSBtb250aCwgMS0xMlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheSAtIGEgZGF5IG9mIHRoZSBtb250aCwgMS0zMSwgZGVwZW5kaW5nIG9uIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm9yZGluYWwgLSBkYXkgb2YgdGhlIHllYXIsIDEtMzY1IG9yIDM2NlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtZZWFyIC0gYW4gSVNPIHdlZWsgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtOdW1iZXIgLSBhbiBJU08gd2VlayBudW1iZXIsIGJldHdlZW4gMSBhbmQgNTIgb3IgNTMsIGRlcGVuZGluZyBvbiB0aGUgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtkYXkgLSBhbiBJU08gd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3VyIC0gaG91ciBvZiB0aGUgZGF5LCAwLTIzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlIC0gbWludXRlIG9mIHRoZSBob3VyLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kIC0gc2Vjb25kIG9mIHRoZSBtaW51dGUsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZCAtIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIDAtOTk5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gaW50ZXJwcmV0IHRoZSBudW1iZXJzIGluIHRoZSBjb250ZXh0IG9mIGEgcGFydGljdWxhciB6b25lLiBDYW4gdGFrZSBhbnkgdmFsdWUgdGFrZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHNldFpvbmUoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiwgbW9udGg6IDUsIGRheTogMjV9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiB9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9KSAvL34+IHRvZGF5IGF0IDEwOjI2OjA2XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ3V0YycgfSksXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ2xvY2FsJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgd2Vla1llYXI6IDIwMTYsIHdlZWtOdW1iZXI6IDIsIHdlZWtkYXk6IDMgfSkudG9JU09EYXRlKCkgLy89PiAnMjAxNi0wMS0xMydcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvYmogPSBvYmogfHwge307XG4gICAgdmFyIHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0cy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xuICAgIH1cbiAgICB2YXIgdHNOb3cgPSBTZXR0aW5ncy5ub3coKSxcbiAgICAgIG9mZnNldFByb3ZpcyA9ICFpc1VuZGVmaW5lZChvcHRzLnNwZWNpZmljT2Zmc2V0KSA/IG9wdHMuc3BlY2lmaWNPZmZzZXQgOiB6b25lVG9Vc2Uub2Zmc2V0KHRzTm93KSxcbiAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVVbml0KSxcbiAgICAgIGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpLFxuICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1ELFxuICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXIsXG4gICAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKTtcblxuICAgIC8vIGNhc2VzOlxuICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllc1xuICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvclxuICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3JcbiAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZFxuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiKTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcbiAgICB9XG4gICAgdmFyIHVzZVdlZWtEYXRhID0gZGVmaW5pdGVXZWVrRGVmIHx8IG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3I7XG5cbiAgICAvLyBjb25maWd1cmUgb3Vyc2VsdmVzIHRvIGRlYWwgd2l0aCBncmVnb3JpYW4gZGF0ZXMgb3Igd2VlayBzdHVmZlxuICAgIHZhciB1bml0cyxcbiAgICAgIGRlZmF1bHRWYWx1ZXMsXG4gICAgICBvYmpOb3cgPSB0c1RvT2JqKHRzTm93LCBvZmZzZXRQcm92aXMpO1xuICAgIGlmICh1c2VXZWVrRGF0YSkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkV2Vla1VuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRXZWVrVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvV2VlayhvYmpOb3cpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRPcmRpbmFsVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9PcmRpbmFsKG9iak5vdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFVuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRVbml0VmFsdWVzO1xuICAgIH1cblxuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBmb3IgbWlzc2luZyBzdHVmZlxuICAgIHZhciBmb3VuZEZpcnN0ID0gZmFsc2U7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodW5pdHMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgICAgdmFyIHUgPSBfc3RlcDIudmFsdWU7XG4gICAgICB2YXIgdiA9IG5vcm1hbGl6ZWRbdV07XG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGZvdW5kRmlyc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0KSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBkZWZhdWx0VmFsdWVzW3VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IG9iak5vd1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHZhbHVlcyB3ZSBoYXZlIGFyZSBpbiByYW5nZVxuICAgIHZhciBoaWdoZXJPcmRlckludmFsaWQgPSB1c2VXZWVrRGF0YSA/IGhhc0ludmFsaWRXZWVrRGF0YShub3JtYWxpemVkKSA6IGNvbnRhaW5zT3JkaW5hbCA/IGhhc0ludmFsaWRPcmRpbmFsRGF0YShub3JtYWxpemVkKSA6IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG5vcm1hbGl6ZWQpLFxuICAgICAgaW52YWxpZCA9IGhpZ2hlck9yZGVySW52YWxpZCB8fCBoYXNJbnZhbGlkVGltZURhdGEobm9ybWFsaXplZCk7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH1cblxuICAgIC8vIGNvbXB1dGUgdGhlIGFjdHVhbCB0aW1lXG4gICAgdmFyIGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogbm9ybWFsaXplZCxcbiAgICAgIF9vYmpUb1RTMiA9IG9ialRvVFMoZ3JlZ29yaWFuLCBvZmZzZXRQcm92aXMsIHpvbmVUb1VzZSksXG4gICAgICB0c0ZpbmFsID0gX29ialRvVFMyWzBdLFxuICAgICAgb2Zmc2V0RmluYWwgPSBfb2JqVG9UUzJbMV0sXG4gICAgICBpbnN0ID0gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHRzRmluYWwsXG4gICAgICAgIHpvbmU6IHpvbmVUb1VzZSxcbiAgICAgICAgbzogb2Zmc2V0RmluYWwsXG4gICAgICAgIGxvYzogbG9jXG4gICAgICB9KTtcblxuICAgIC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxuICAgIGlmIChub3JtYWxpemVkLndlZWtkYXkgJiYgY29udGFpbnNHcmVnb3IgJiYgb2JqLndlZWtkYXkgIT09IGluc3Qud2Vla2RheSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJtaXNtYXRjaGVkIHdlZWtkYXlcIiwgXCJ5b3UgY2FuJ3Qgc3BlY2lmeSBib3RoIGEgd2Vla2RheSBvZiBcIiArIG5vcm1hbGl6ZWQud2Vla2RheSArIFwiIGFuZCBhIGRhdGUgb2YgXCIgKyBpbnN0LnRvSVNPKCkpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIElTTyA4NjAxIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJywge3NldFpvbmU6IHRydWV9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycsIHt6b25lOiAndXRjJ30pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtVzA1LTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tSVNPID0gZnVuY3Rpb24gZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgX3BhcnNlSVNPRGF0ZSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KSxcbiAgICAgIHZhbHMgPSBfcGFyc2VJU09EYXRlWzBdLFxuICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZUlTT0RhdGVbMV07XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJJU08gODYwMVwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSB0aGUgb2Zmc2V0IGlzIGFsd2F5cyBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMzoxMiBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignRnJpLCAyNSBOb3YgMjAxNiAxMzoyMzoxMiArMDYwMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMyBaJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbVJGQzI4MjIgPSBmdW5jdGlvbiBmcm9tUkZDMjgyMih0ZXh0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgX3BhcnNlUkZDMjgyMkRhdGUgPSBwYXJzZVJGQzI4MjJEYXRlKHRleHQpLFxuICAgICAgdmFscyA9IF9wYXJzZVJGQzI4MjJEYXRlWzBdLFxuICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZVJGQzI4MjJEYXRlWzFdO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiUkZDIDI4MjJcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSBIVFRQIGRhdGVzIGFyZSBhbHdheXMgaW4gVVRDLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCB0aGUgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcuIEZvciBIVFRQIGRhdGVzLCB0aGlzIGlzIGFsd2F5cyBVVEMsIHNvIHRoaXMgb3B0aW9uIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYHpvbmVgIG9wdGlvbiB0byAndXRjJywgYnV0IHRoaXMgb3B0aW9uIGlzIGluY2x1ZGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHNpbWlsYXIgbWV0aG9kcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tSFRUUCA9IGZ1bmN0aW9uIGZyb21IVFRQKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciBfcGFyc2VIVFRQRGF0ZSA9IHBhcnNlSFRUUERhdGUodGV4dCksXG4gICAgICB2YWxzID0gX3BhcnNlSFRUUERhdGVbMF0sXG4gICAgICBwYXJzZWRab25lID0gX3BhcnNlSFRUUERhdGVbMV07XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJIVFRQXCIsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gaW5wdXQgc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL3BhcnNpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSB0aGUgbGluayBiZWxvdyBmb3IgdGhlIGZvcm1hdHMpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIERhdGVUaW1lLmZyb21Gb3JtYXQgPSBmdW5jdGlvbiBmcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdFwiKTtcbiAgICB9XG4gICAgdmFyIF9vcHRzID0gb3B0cyxcbiAgICAgIF9vcHRzJGxvY2FsZSA9IF9vcHRzLmxvY2FsZSxcbiAgICAgIGxvY2FsZSA9IF9vcHRzJGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRzJGxvY2FsZSxcbiAgICAgIF9vcHRzJG51bWJlcmluZ1N5c3RlbSA9IF9vcHRzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRzJG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRzJG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgICAgfSksXG4gICAgICBfcGFyc2VGcm9tVG9rZW5zID0gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpLFxuICAgICAgdmFscyA9IF9wYXJzZUZyb21Ub2tlbnNbMF0sXG4gICAgICBwYXJzZWRab25lID0gX3BhcnNlRnJvbVRva2Vuc1sxXSxcbiAgICAgIHNwZWNpZmljT2Zmc2V0ID0gX3BhcnNlRnJvbVRva2Vuc1syXSxcbiAgICAgIGludmFsaWQgPSBfcGFyc2VGcm9tVG9rZW5zWzNdO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJmb3JtYXQgXCIgKyBmbXQsIHRleHQsIHNwZWNpZmljT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXQgaW5zdGVhZFxuICAgKi87XG4gIERhdGVUaW1lLmZyb21TdHJpbmcgPSBmdW5jdGlvbiBmcm9tU3RyaW5nKHRleHQsIGZtdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgU1FMIGRhdGUsIHRpbWUsIG9yIGRhdGV0aW1lXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNScpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnLCB7IHNldFpvbmU6IHRydWUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInLCB7IHpvbmU6ICdBbWVyaWNhL0xvc19BbmdlbGVzJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcwOToxMjozNC4zNDInKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tU1FMID0gZnVuY3Rpb24gZnJvbVNRTCh0ZXh0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgX3BhcnNlU1FMID0gcGFyc2VTUUwodGV4dCksXG4gICAgICB2YWxzID0gX3BhcnNlU1FMWzBdLFxuICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZVNRTFsxXTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIlNRTFwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUuaW52YWxpZCA9IGZ1bmN0aW9uIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIGlmIChleHBsYW5hdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBleHBsYW5hdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIERhdGVUaW1lIGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIHZhciBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlVGltZS4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIERhdGVUaW1lLmlzRGF0ZVRpbWUgPSBmdW5jdGlvbiBpc0RhdGVUaW1lKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLmlzTHV4b25EYXRlVGltZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlIHRoZSBmb3JtYXQgc3RyaW5nIGZvciBhIHNldCBvZiBvcHRpb25zXG4gICAqIEBwYXJhbSBmb3JtYXRPcHRzXG4gICAqIEBwYXJhbSBsb2NhbGVPcHRzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqLztcbiAgRGF0ZVRpbWUucGFyc2VGb3JtYXRGb3JPcHRzID0gZnVuY3Rpb24gcGFyc2VGb3JtYXRGb3JPcHRzKGZvcm1hdE9wdHMsIGxvY2FsZU9wdHMpIHtcbiAgICBpZiAobG9jYWxlT3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBsb2NhbGVPcHRzID0ge307XG4gICAgfVxuICAgIHZhciB0b2tlbkxpc3QgPSBmb3JtYXRPcHRzVG9Ub2tlbnMoZm9ybWF0T3B0cywgTG9jYWxlLmZyb21PYmplY3QobG9jYWxlT3B0cykpO1xuICAgIHJldHVybiAhdG9rZW5MaXN0ID8gbnVsbCA6IHRva2VuTGlzdC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ID8gdC52YWwgOiBudWxsO1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH1cblxuICAvKipcbiAgICogUHJvZHVjZSB0aGUgdGhlIGZ1bGx5IGV4cGFuZGVkIGZvcm1hdCB0b2tlbiBmb3IgdGhlIGxvY2FsZVxuICAgKiBEb2VzIE5PVCBxdW90ZSBjaGFyYWN0ZXJzLCBzbyBxdW90ZWQgdG9rZW5zIHdpbGwgbm90IHJvdW5kIHRyaXAgY29ycmVjdGx5XG4gICAqIEBwYXJhbSBmbXRcbiAgICogQHBhcmFtIGxvY2FsZU9wdHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovO1xuICBEYXRlVGltZS5leHBhbmRGb3JtYXQgPSBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm10LCBsb2NhbGVPcHRzKSB7XG4gICAgaWYgKGxvY2FsZU9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgbG9jYWxlT3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgZXhwYW5kZWQgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgTG9jYWxlLmZyb21PYmplY3QobG9jYWxlT3B0cykpO1xuICAgIHJldHVybiBleHBhbmRlZC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LnZhbDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9XG5cbiAgLy8gSU5GT1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdtb250aCcpOyAvLz0+IDdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdkYXknKTsgLy89PiA0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovO1xuICB2YXIgX3Byb3RvID0gRGF0ZVRpbWUucHJvdG90eXBlO1xuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1t1bml0XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIHZhbGlkLiBJbnZhbGlkIERhdGVUaW1lcyBvY2N1ciB3aGVuOlxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBmcm9tIGludmFsaWQgY2FsZW5kYXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgdGhlIDEzdGggbW9udGggb3IgRmVicnVhcnkgMzBcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgYnkgYW4gb3BlcmF0aW9uIG9uIGFub3RoZXIgaW52YWxpZCBkYXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi87XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXNvbHZlZCBJbnRsIG9wdGlvbnMgZm9yIHRoaXMgRGF0ZVRpbWUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIHVuZGVyc3RhbmRpbmcgdGhlIGJlaGF2aW9yIG9mIGZvcm1hdHRpbmcgbWV0aG9kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIHRoZSBzYW1lIG9wdGlvbnMgYXMgdG9Mb2NhbGVTdHJpbmdcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgX3Byb3RvLnJlc29sdmVkTG9jYWxlT3B0aW9ucyA9IGZ1bmN0aW9uIHJlc29sdmVkTG9jYWxlT3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgX0Zvcm1hdHRlciRjcmVhdGUkcmVzID0gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgb3B0cykucmVzb2x2ZWRPcHRpb25zKHRoaXMpLFxuICAgICAgbG9jYWxlID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLmxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBjYWxlbmRhciA9IF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcy5jYWxlbmRhcjtcbiAgICByZXR1cm4ge1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG91dHB1dENhbGVuZGFyOiBjYWxlbmRhclxuICAgIH07XG4gIH1cblxuICAvLyBUUkFOU0ZPUk1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIFVUQy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBFcXVpdmFsZW50IHRvIHtAbGluayBEYXRlVGltZSNzZXRab25lfSgndXRjJylcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBvcHRpb25hbGx5LCBhbiBvZmZzZXQgZnJvbSBVVEMgaW4gbWludXRlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dIC0gb3B0aW9ucyB0byBwYXNzIHRvIGBzZXRab25lKClgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIF9wcm90by50b1VUQyA9IGZ1bmN0aW9uIHRvVVRDKG9mZnNldCwgb3B0cykge1xuICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXRab25lKEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIF9wcm90by50b0xvY2FsID0gZnVuY3Rpb24gdG9Mb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gc3BlY2lmaWVkIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIHNldHRlciBrZWVwcyB0aGUgdW5kZXJseWluZyB0aW1lIHRoZSBzYW1lIChhcyBpbiwgdGhlIHNhbWUgdGltZXN0YW1wKSwgYnV0IHRoZSBuZXcgaW5zdGFuY2Ugd2lsbCByZXBvcnQgZGlmZmVyZW50IGxvY2FsIHRpbWVzIGFuZCBjb25zaWRlciBEU1RzIHdoZW4gbWFraW5nIGNvbXB1dGF0aW9ucywgYXMgd2l0aCB7QGxpbmsgRGF0ZVRpbWUjcGx1c30uIFlvdSBtYXkgd2lzaCB0byB1c2Uge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9IHdoaWNoIHByb3ZpZGUgc2ltcGxlIGNvbnZlbmllbmNlIHdyYXBwZXJzIGZvciBjb21tb25seSB1c2VkIHpvbmVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIGEgem9uZSBpZGVudGlmaWVyLiBBcyBhIHN0cmluZywgdGhhdCBjYW4gYmUgYW55IElBTkEgem9uZSBzdXBwb3J0ZWQgYnkgdGhlIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZml4ZWQtb2Zmc2V0IG5hbWUgb2YgdGhlIGZvcm0gJ1VUQyszJywgb3IgdGhlIHN0cmluZ3MgJ2xvY2FsJyBvciAndXRjJy4gWW91IG1heSBhbHNvIHN1cHBseSBhbiBpbnN0YW5jZSBvZiBhIHtAbGluayBEYXRlVGltZSNab25lfSBjbGFzcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMua2VlcExvY2FsVGltZT1mYWxzZV0gLSBJZiB0cnVlLCBhZGp1c3QgdGhlIHVuZGVybHlpbmcgdGltZSBzbyB0aGF0IHRoZSBsb2NhbCB0aW1lIHN0YXlzIHRoZSBzYW1lLCBidXQgaW4gdGhlIHRhcmdldCB6b25lLiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRoaXMuXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIF9wcm90by5zZXRab25lID0gZnVuY3Rpb24gc2V0Wm9uZSh6b25lLCBfdGVtcCkge1xuICAgIHZhciBfcmVmMiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZjIka2VlcExvY2FsVGltZSA9IF9yZWYyLmtlZXBMb2NhbFRpbWUsXG4gICAgICBrZWVwTG9jYWxUaW1lID0gX3JlZjIka2VlcExvY2FsVGltZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRrZWVwTG9jYWxUaW1lLFxuICAgICAgX3JlZjIka2VlcENhbGVuZGFyVGltID0gX3JlZjIua2VlcENhbGVuZGFyVGltZSxcbiAgICAgIGtlZXBDYWxlbmRhclRpbWUgPSBfcmVmMiRrZWVwQ2FsZW5kYXJUaW0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIka2VlcENhbGVuZGFyVGltO1xuICAgIHpvbmUgPSBub3JtYWxpemVab25lKHpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoem9uZS5lcXVhbHModGhpcy56b25lKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIGlmICghem9uZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV3VFMgPSB0aGlzLnRzO1xuICAgICAgaWYgKGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSkge1xuICAgICAgICB2YXIgb2Zmc2V0R3Vlc3MgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgdmFyIGFzT2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICB2YXIgX29ialRvVFMzID0gb2JqVG9UUyhhc09iaiwgb2Zmc2V0R3Vlc3MsIHpvbmUpO1xuICAgICAgICBuZXdUUyA9IF9vYmpUb1RTM1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICAgIHRzOiBuZXdUUyxcbiAgICAgICAgem9uZTogem9uZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvciBvdXRwdXRDYWxlbmRhci4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgX3Byb3RvLnJlY29uZmlndXJlID0gZnVuY3Rpb24gcmVjb25maWd1cmUoX3RlbXAyKSB7XG4gICAgdmFyIF9yZWYzID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgIGxvY2FsZSA9IF9yZWYzLmxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZjMub3V0cHV0Q2FsZW5kYXI7XG4gICAgdmFyIGxvYyA9IHRoaXMubG9jLmNsb25lKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBvdXRwdXRDYWxlbmRhcjogb3V0cHV0Q2FsZW5kYXJcbiAgICB9KTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywge1xuICAgICAgbG9jOiBsb2NcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogSnVzdCBhIGNvbnZlbmllbnQgYWxpYXMgZm9yIHJlY29uZmlndXJlKHsgbG9jYWxlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5zZXRMb2NhbGUoJ2VuLUdCJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgX3Byb3RvLnNldExvY2FsZSA9IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvbmZpZ3VyZSh7XG4gICAgICBsb2NhbGU6IGxvY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogWW91IGNhbiBvbmx5IHNldCB1bml0cyB3aXRoIHRoaXMgbWV0aG9kOyBmb3IgXCJzZXR0aW5nXCIgbWV0YWRhdGEsIHNlZSB7QGxpbmsgRGF0ZVRpbWUjcmVjb25maWd1cmV9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDE3IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IGhvdXI6IDgsIG1pbnV0ZTogMzAgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgd2Vla2RheTogNSB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDA1LCBvcmRpbmFsOiAyMzQgfSlcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3QodmFsdWVzLCBub3JtYWxpemVVbml0KSxcbiAgICAgIHNldHRpbmdXZWVrU3R1ZmYgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrWWVhcikgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla051bWJlcikgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla2RheSksXG4gICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyO1xuICAgIGlmICgoY29udGFpbnNHcmVnb3IgfHwgY29udGFpbnNPcmRpbmFsKSAmJiBkZWZpbml0ZVdlZWtEZWYpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIik7XG4gICAgfVxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuICAgIHZhciBtaXhlZDtcbiAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikge1xuICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oX2V4dGVuZHMoe30sIGdyZWdvcmlhblRvV2Vlayh0aGlzLmMpLCBub3JtYWxpemVkKSk7XG4gICAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSkge1xuICAgICAgbWl4ZWQgPSBvcmRpbmFsVG9HcmVnb3JpYW4oX2V4dGVuZHMoe30sIGdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLCBub3JtYWxpemVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1peGVkID0gX2V4dGVuZHMoe30sIHRoaXMudG9PYmplY3QoKSwgbm9ybWFsaXplZCk7XG5cbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSxcbiAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF9vYmpUb1RTNCA9IG9ialRvVFMobWl4ZWQsIHRoaXMubywgdGhpcy56b25lKSxcbiAgICAgIHRzID0gX29ialRvVFM0WzBdLFxuICAgICAgbyA9IF9vYmpUb1RTNFsxXTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywge1xuICAgICAgdHM6IHRzLFxuICAgICAgbzogb1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqXG4gICAqIEFkZGluZyBob3VycywgbWludXRlcywgc2Vjb25kcywgb3IgbWlsbGlzZWNvbmRzIGluY3JlYXNlcyB0aGUgdGltZXN0YW1wIGJ5IHRoZSByaWdodCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLiBBZGRpbmcgZGF5cywgbW9udGhzLCBvciB5ZWFycyBzaGlmdHMgdGhlIGNhbGVuZGFyLCBhY2NvdW50aW5nIGZvciBEU1RzIGFuZCBsZWFwIHllYXJzIGFsb25nIHRoZSB3YXkuIFRodXMsIGBkdC5wbHVzKHsgaG91cnM6IDI0IH0pYCBtYXkgcmVzdWx0IGluIGEgZGlmZmVyZW50IHRpbWUgdGhhbiBgZHQucGx1cyh7IGRheXM6IDEgfSlgIGlmIHRoZXJlJ3MgYSBEU1Qgc2hpZnQgaW4gYmV0d2Vlbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKDEyMykgLy9+PiBpbiAxMjMgbWlsbGlzZWNvbmRzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkgLy9+PiB0aGlzIHRpbWUgdG9tb3Jyb3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IC0xIH0pIC8vfj4gdGhpcyB0aW1lIHllc3RlcmRheVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgX3Byb3RvLnBsdXMgPSBmdW5jdGlvbiBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJ0cmFjdCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c31cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBfcHJvdG8ubWludXMgPSBmdW5jdGlvbiBtaW51cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbikubmVnYXRlKCk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSB1bml0IG9mIHRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGJlZ2lubmluZyBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd3ZWVrJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDMnLCB3ZWVrcyBhbHdheXMgc3RhcnQgb24gTW9uZGF5c1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBfcHJvdG8uc3RhcnRPZiA9IGZ1bmN0aW9uIHN0YXJ0T2YodW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbyA9IHt9LFxuICAgICAgbm9ybWFsaXplZFVuaXQgPSBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpO1xuICAgIHN3aXRjaCAobm9ybWFsaXplZFVuaXQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyc1wiOlxuICAgICAgICBvLm1vbnRoID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJxdWFydGVyc1wiOlxuICAgICAgY2FzZSBcIm1vbnRoc1wiOlxuICAgICAgICBvLmRheSA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwid2Vla3NcIjpcbiAgICAgIGNhc2UgXCJkYXlzXCI6XG4gICAgICAgIG8uaG91ciA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwiaG91cnNcIjpcbiAgICAgICAgby5taW51dGUgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcIm1pbnV0ZXNcIjpcbiAgICAgICAgby5zZWNvbmQgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcInNlY29uZHNcIjpcbiAgICAgICAgby5taWxsaXNlY29uZCA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gbm8gZGVmYXVsdCwgaW52YWxpZCB1bml0cyB0aHJvdyBpbiBub3JtYWxpemVVbml0KClcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwid2Vla3NcIikge1xuICAgICAgby53ZWVrZGF5ID0gMTtcbiAgICB9XG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSBcInF1YXJ0ZXJzXCIpIHtcbiAgICAgIHZhciBxID0gTWF0aC5jZWlsKHRoaXMubW9udGggLyAzKTtcbiAgICAgIG8ubW9udGggPSAocSAtIDEpICogMyArIDE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldChvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3dlZWsnKS50b0lTTygpOyAvLyA9PiAnMjAxNC0wMy0wOVQyMzo1OTo1OS45OTktMDU6MDAnLCB3ZWVrcyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBfcHJvdG8uZW5kT2YgPSBmdW5jdGlvbiBlbmRPZih1bml0KSB7XG4gICAgdmFyIF90aGlzJHBsdXM7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMucGx1cygoX3RoaXMkcGx1cyA9IHt9LCBfdGhpcyRwbHVzW3VuaXRdID0gMSwgX3RoaXMkcGx1cykpLnN0YXJ0T2YodW5pdCkubWludXMoMSkgOiB0aGlzO1xuICB9XG5cbiAgLy8gT1VUUFVUXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZSBmb3JtYXR0aW5nIHRvb2wuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL2Zvcm1hdHRpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IEFwciAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdmcicpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJywgeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KFwiSEggJ2hvdXJzIGFuZCcgbW0gJ21pbnV0ZXMnXCIpIC8vPT4gJzIwIGhvdXJzIGFuZCA1NSBtaW51dGVzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvRm9ybWF0ID0gZnVuY3Rpb24gdG9Gb3JtYXQoZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5yZWRlZmF1bHRUb0VOKG9wdHMpKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcywgZm10KSA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXG4gICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIGZvcm1hdE9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+ICdBcHJpbCAyMCwgMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMLCB7IGxvY2FsZTogJ2ZyJyB9KTsgLy89PiAnMjggYW/Du3QgMjAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+ICcxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodXJzZGF5LCBBcHJpbCAyMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNyBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyQ3ljbGU6ICdoMjMnIH0pOyAvLz0+ICcxMTozMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKGZvcm1hdE9wdHMsIG9wdHMpIHtcbiAgICBpZiAoZm9ybWF0T3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBmb3JtYXRPcHRzID0gREFURV9TSE9SVDtcbiAgICB9XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcykgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0IFwicGFydHNcIiwgbWVhbmluZyBpbmRpdmlkdWFsIHRva2VucyBhbG9uZyB3aXRoIG1ldGFkYXRhLiBUaGlzIGlzIGFsbG93cyBjYWxsZXJzIHRvIHBvc3QtcHJvY2VzcyBpbmRpdmlkdWFsIHNlY3Rpb25zIG9mIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzXG4gICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLCBzYW1lIGFzIGB0b0xvY2FsZVN0cmluZ2AuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlUGFydHMoKTsgLy89PiBbXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnZGF5JywgdmFsdWU6ICcyNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ21vbnRoJywgdmFsdWU6ICcwNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ3llYXInLCB2YWx1ZTogJzE5ODInIH1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gXVxuICAgKi87XG4gIF9wcm90by50b0xvY2FsZVBhcnRzID0gZnVuY3Rpb24gdG9Mb2NhbGVQYXJ0cyhvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgb3B0cykuZm9ybWF0RGF0ZVRpbWVQYXJ0cyh0aGlzKSA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT1mYWxzZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MywgNSwgMjUpLnRvSVNPKCkgLy89PiAnMTk4Mi0wNS0yNVQwMDowMDowMC4wMDBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1LTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcyMDE3MDQyMlQyMDQ3MDUuMzM1LTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9JU08gPSBmdW5jdGlvbiB0b0lTTyhfdGVtcDMpIHtcbiAgICB2YXIgX3JlZjQgPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzLFxuICAgICAgX3JlZjQkZm9ybWF0ID0gX3JlZjQuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZjQkZm9ybWF0ID09PSB2b2lkIDAgPyBcImV4dGVuZGVkXCIgOiBfcmVmNCRmb3JtYXQsXG4gICAgICBfcmVmNCRzdXBwcmVzc1NlY29uZHMgPSBfcmVmNC5zdXBwcmVzc1NlY29uZHMsXG4gICAgICBzdXBwcmVzc1NlY29uZHMgPSBfcmVmNCRzdXBwcmVzc1NlY29uZHMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjQkc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgX3JlZjQkc3VwcHJlc3NNaWxsaXNlID0gX3JlZjQuc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IF9yZWY0JHN1cHByZXNzTWlsbGlzZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNCRzdXBwcmVzc01pbGxpc2UsXG4gICAgICBfcmVmNCRpbmNsdWRlT2Zmc2V0ID0gX3JlZjQuaW5jbHVkZU9mZnNldCxcbiAgICAgIGluY2x1ZGVPZmZzZXQgPSBfcmVmNCRpbmNsdWRlT2Zmc2V0ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjQkaW5jbHVkZU9mZnNldCxcbiAgICAgIF9yZWY0JGV4dGVuZGVkWm9uZSA9IF9yZWY0LmV4dGVuZGVkWm9uZSxcbiAgICAgIGV4dGVuZGVkWm9uZSA9IF9yZWY0JGV4dGVuZGVkWm9uZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNCRleHRlbmRlZFpvbmU7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZXh0ID0gZm9ybWF0ID09PSBcImV4dGVuZGVkXCI7XG4gICAgdmFyIGMgPSBfdG9JU09EYXRlKHRoaXMsIGV4dCk7XG4gICAgYyArPSBcIlRcIjtcbiAgICBjICs9IF90b0lTT1RpbWUodGhpcywgZXh0LCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0LCBleHRlbmRlZFpvbmUpO1xuICAgIHJldHVybiBjO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgZGF0ZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzE5ODIwNTI1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPRGF0ZShfdGVtcDQpIHtcbiAgICB2YXIgX3JlZjUgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgX3JlZjUkZm9ybWF0ID0gX3JlZjUuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZjUkZm9ybWF0ID09PSB2b2lkIDAgPyBcImV4dGVuZGVkXCIgOiBfcmVmNSRmb3JtYXQ7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gX3RvSVNPRGF0ZSh0aGlzLCBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB3ZWVrIGRhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT1dlZWtEYXRlKCkgLy89PiAnMTk4Mi1XMjEtMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0lTT1dlZWtEYXRlID0gZnVuY3Rpb24gdG9JU09XZWVrRGF0ZSgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwia2tray0nVydXVy1jXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgdGltZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZXh0ZW5kZWRab25lPXRydWVdIC0gYWRkIHRoZSB0aW1lIHpvbmUgZm9ybWF0IGV4dGVuc2lvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoKSAvLz0+ICcwNzozNDoxOS4zNjFaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0LCBzZWNvbmRzOiAwLCBtaWxsaXNlY29uZHM6IDAgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzA3OjM0WidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMDczNDE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMDc6MzQ6MTkuMzYxWidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0lTT1RpbWUgPSBmdW5jdGlvbiB0b0lTT1RpbWUoX3RlbXA1KSB7XG4gICAgdmFyIF9yZWY2ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgIF9yZWY2JHN1cHByZXNzTWlsbGlzZSA9IF9yZWY2LnN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBfcmVmNiRzdXBwcmVzc01pbGxpc2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjYkc3VwcHJlc3NNaWxsaXNlLFxuICAgICAgX3JlZjYkc3VwcHJlc3NTZWNvbmRzID0gX3JlZjYuc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgc3VwcHJlc3NTZWNvbmRzID0gX3JlZjYkc3VwcHJlc3NTZWNvbmRzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JHN1cHByZXNzU2Vjb25kcyxcbiAgICAgIF9yZWY2JGluY2x1ZGVPZmZzZXQgPSBfcmVmNi5pbmNsdWRlT2Zmc2V0LFxuICAgICAgaW5jbHVkZU9mZnNldCA9IF9yZWY2JGluY2x1ZGVPZmZzZXQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNiRpbmNsdWRlT2Zmc2V0LFxuICAgICAgX3JlZjYkaW5jbHVkZVByZWZpeCA9IF9yZWY2LmluY2x1ZGVQcmVmaXgsXG4gICAgICBpbmNsdWRlUHJlZml4ID0gX3JlZjYkaW5jbHVkZVByZWZpeCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNiRpbmNsdWRlUHJlZml4LFxuICAgICAgX3JlZjYkZXh0ZW5kZWRab25lID0gX3JlZjYuZXh0ZW5kZWRab25lLFxuICAgICAgZXh0ZW5kZWRab25lID0gX3JlZjYkZXh0ZW5kZWRab25lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JGV4dGVuZGVkWm9uZSxcbiAgICAgIF9yZWY2JGZvcm1hdCA9IF9yZWY2LmZvcm1hdCxcbiAgICAgIGZvcm1hdCA9IF9yZWY2JGZvcm1hdCA9PT0gdm9pZCAwID8gXCJleHRlbmRlZFwiIDogX3JlZjYkZm9ybWF0O1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGMgPSBpbmNsdWRlUHJlZml4ID8gXCJUXCIgOiBcIlwiO1xuICAgIHJldHVybiBjICsgX3RvSVNPVGltZSh0aGlzLCBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIiwgc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kcywgaW5jbHVkZU9mZnNldCwgZXh0ZW5kZWRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIFJGQyAyODIyLWNvbXBhdGlibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwICswMDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCAtMDQwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b1JGQzI4MjIgPSBmdW5jdGlvbiB0b1JGQzI4MjIoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgWlpaXCIsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBIVFRQIGhlYWRlcnMuIFRoZSBvdXRwdXQgaXMgYWx3YXlzIGV4cHJlc3NlZCBpbiBHTVQuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHN0cmluZyBjb25mb3JtcyB0byBSRkMgMTEyMy5cbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIEdNVCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzLCAxOSkudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAxOTowMDowMCBHTVQnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9IVFRQID0gZnVuY3Rpb24gdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvU1FMRGF0ZSA9IGZ1bmN0aW9uIHRvU1FMRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBfdG9JU09EYXRlKHRoaXMsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXRTcGFjZT10cnVlXSAtIGluY2x1ZGUgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHRpbWUgYW5kIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b1NRTFRpbWUgPSBmdW5jdGlvbiB0b1NRTFRpbWUoX3RlbXA2KSB7XG4gICAgdmFyIF9yZWY3ID0gX3RlbXA2ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNixcbiAgICAgIF9yZWY3JGluY2x1ZGVPZmZzZXQgPSBfcmVmNy5pbmNsdWRlT2Zmc2V0LFxuICAgICAgaW5jbHVkZU9mZnNldCA9IF9yZWY3JGluY2x1ZGVPZmZzZXQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNyRpbmNsdWRlT2Zmc2V0LFxuICAgICAgX3JlZjckaW5jbHVkZVpvbmUgPSBfcmVmNy5pbmNsdWRlWm9uZSxcbiAgICAgIGluY2x1ZGVab25lID0gX3JlZjckaW5jbHVkZVpvbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjckaW5jbHVkZVpvbmUsXG4gICAgICBfcmVmNyRpbmNsdWRlT2Zmc2V0U3AgPSBfcmVmNy5pbmNsdWRlT2Zmc2V0U3BhY2UsXG4gICAgICBpbmNsdWRlT2Zmc2V0U3BhY2UgPSBfcmVmNyRpbmNsdWRlT2Zmc2V0U3AgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNyRpbmNsdWRlT2Zmc2V0U3A7XG4gICAgdmFyIGZtdCA9IFwiSEg6bW06c3MuU1NTXCI7XG4gICAgaWYgKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpIHtcbiAgICAgIGlmIChpbmNsdWRlT2Zmc2V0U3BhY2UpIHtcbiAgICAgICAgZm10ICs9IFwiIFwiO1xuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVab25lKSB7XG4gICAgICAgIGZtdCArPSBcInpcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgICAgICBmbXQgKz0gXCJaWlwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIGZtdCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXRTcGFjZT10cnVlXSAtIGluY2x1ZGUgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHRpbWUgYW5kIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlWm9uZTogdHJ1ZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBBbWVyaWNhL05ld19Zb3JrJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvU1FMID0gZnVuY3Rpb24gdG9TUUwob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b1NRTERhdGUoKSArIFwiIFwiICsgdGhpcy50b1NRTFRpbWUob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvSVNPKCkgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLiBBbGlhcyBvZiB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovO1xuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi87XG4gIF9wcm90by50b01pbGxpcyA9IGZ1bmN0aW9uIHRvTWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi87XG4gIF9wcm90by50b1NlY29uZHMgPSBmdW5jdGlvbiB0b1NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgLyAxMDAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgKGFzIGEgd2hvbGUgbnVtYmVyKSBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLnRvVW5peEludGVnZXIgPSBmdW5jdGlvbiB0b1VuaXhJbnRlZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBNYXRoLmZsb29yKHRoaXMudHMgLyAxMDAwKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBCU09OIHNlcmlhbGl6YWJsZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge0RhdGV9XG4gICAqLztcbiAgX3Byb3RvLnRvQlNPTiA9IGZ1bmN0aW9uIHRvQlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0pTRGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRGF0ZVRpbWUncyB5ZWFyLCBtb250aCwgZGF5LCBhbmQgc28gb24uXG4gICAqIEBwYXJhbSBvcHRzIC0gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUNvbmZpZz1mYWxzZV0gLSBpbmNsdWRlIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlcyBpbiB0aGUgb3V0cHV0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvT2JqZWN0KCkgLy89PiB7IHllYXI6IDIwMTcsIG1vbnRoOiA0LCBkYXk6IDIyLCBob3VyOiAyMCwgbWludXRlOiA0OSwgc2Vjb25kOiA0MiwgbWlsbGlzZWNvbmQ6IDI2OCB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovO1xuICBfcHJvdG8udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuICAgIHZhciBiYXNlID0gX2V4dGVuZHMoe30sIHRoaXMuYyk7XG4gICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykge1xuICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7XG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBEYXRlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovO1xuICBfcHJvdG8udG9KU0RhdGUgPSBmdW5jdGlvbiB0b0pTRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTik7XG4gIH1cblxuICAvLyBDT01QQVJFXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBEYXRlVGltZXMgYXMgYSBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBEYXRlVGltZSB0byBjb21wYXJlIHRoaXMgb25lIHRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIGFycmF5IG9mIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBpMSA9IERhdGVUaW1lLmZyb21JU08oJzE5ODItMDUtMjVUMDk6NDUnKSxcbiAgICogICAgIGkyID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4My0xMC0xNFQxMDozMCcpO1xuICAgKiBpMi5kaWZmKGkxKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDQzODA3NTAwMDAwIH1cbiAgICogaTIuZGlmZihpMSwgJ2hvdXJzJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDEyMTY4Ljc1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOS4wMzEyNSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnLCAnaG91cnMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTksIGhvdXJzOiAwLjc1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLmRpZmYgPSBmdW5jdGlvbiBkaWZmKG90aGVyRGF0ZVRpbWUsIHVuaXQsIG9wdHMpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXJEYXRlVGltZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcImNyZWF0ZWQgYnkgZGlmZmluZyBhbiBpbnZhbGlkIERhdGVUaW1lXCIpO1xuICAgIH1cbiAgICB2YXIgZHVyT3B0cyA9IF9leHRlbmRzKHtcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtXG4gICAgfSwgb3B0cyk7XG4gICAgdmFyIHVuaXRzID0gbWF5YmVBcnJheSh1bml0KS5tYXAoRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXG4gICAgICBvdGhlcklzTGF0ZXIgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKSA+IHRoaXMudmFsdWVPZigpLFxuICAgICAgZWFybGllciA9IG90aGVySXNMYXRlciA/IHRoaXMgOiBvdGhlckRhdGVUaW1lLFxuICAgICAgbGF0ZXIgPSBvdGhlcklzTGF0ZXIgPyBvdGhlckRhdGVUaW1lIDogdGhpcyxcbiAgICAgIGRpZmZlZCA9IF9kaWZmKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgZHVyT3B0cyk7XG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCByaWdodCBub3cuXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjZGlmZn1cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8uZGlmZk5vdyA9IGZ1bmN0aW9uIGRpZmZOb3codW5pdCwgb3B0cykge1xuICAgIGlmICh1bml0ID09PSB2b2lkIDApIHtcbiAgICAgIHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiO1xuICAgIH1cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRpZmYoRGF0ZVRpbWUubm93KCksIHVuaXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi87XG4gIF9wcm90by51bnRpbCA9IGZ1bmN0aW9uIHVudGlsKG90aGVyRGF0ZVRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyh0aGlzLCBvdGhlckRhdGVUaW1lKSA6IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBEYXRlVGltZSBpcyBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWUgYXMgYW5vdGhlciBEYXRlVGltZS5cbiAgICogSGlnaGVyLW9yZGVyIHVuaXRzIG11c3QgYWxzbyBiZSBpZGVudGljYWwgZm9yIHRoaXMgZnVuY3Rpb24gdG8gcmV0dXJuIGB0cnVlYC5cbiAgICogTm90ZSB0aGF0IHRpbWUgem9uZXMgYXJlICoqaWdub3JlZCoqIGluIHRoaXMgY29tcGFyaXNvbiwgd2hpY2ggY29tcGFyZXMgdGhlICoqbG9jYWwqKiBjYWxlbmRhciB0aW1lLiBVc2Uge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9IHRvIGNvbnZlcnQgb25lIG9mIHRoZSBkYXRlcyBpZiBuZWVkZWQuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLmhhc1NhbWUob3RoZXJEVCwgJ2RheScpOyAvL34+IHRydWUgaWYgb3RoZXJEVCBpcyBpbiB0aGUgc2FtZSBjdXJyZW50IGNhbGVuZGFyIGRheVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5oYXNTYW1lID0gZnVuY3Rpb24gaGFzU2FtZShvdGhlckRhdGVUaW1lLCB1bml0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgaW5wdXRNcyA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xuICAgIHZhciBhZGp1c3RlZFRvWm9uZSA9IHRoaXMuc2V0Wm9uZShvdGhlckRhdGVUaW1lLnpvbmUsIHtcbiAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gYWRqdXN0ZWRUb1pvbmUuc3RhcnRPZih1bml0KSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gYWRqdXN0ZWRUb1pvbmUuZW5kT2YodW5pdCk7XG4gIH1cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIERhdGVUaW1lcyBhcmUgZXF1YWwgaWYgYW5kIG9ubHkgaWYgdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbWlsbGlzZWNvbmQsIGhhdmUgdGhlIHNhbWUgem9uZSBhbmQgbG9jYXRpb24sIGFuZCBhcmUgYm90aCB2YWxpZC5cbiAgICogVG8gY29tcGFyZSBqdXN0IHRoZSBtaWxsaXNlY29uZCB2YWx1ZXMsIHVzZSBgK2R0MSA9PT0gK2R0MmAuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgJiYgb3RoZXIuaXNWYWxpZCAmJiB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXIudmFsdWVPZigpICYmIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiYgdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRoaXMgdGltZSByZWxhdGl2ZSB0byBub3csIHN1Y2ggYXMgXCJpbiB0d28gZGF5c1wiLiBDYW4gb25seSBpbnRlcm5hdGlvbmFsaXplIGlmIHlvdXJcbiAgICogcGxhdGZvcm0gc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuIFJvdW5kcyBkb3duIGJ5IGRlZmF1bHQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zdHlsZT1cImxvbmdcIl0gLSB0aGUgc3R5bGUgb2YgdW5pdHMsIG11c3QgYmUgXCJsb25nXCIsIFwic2hvcnRcIiwgb3IgXCJuYXJyb3dcIlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdCBvciBhcnJheSBvZiB1bml0czsgaWYgb21pdHRlZCwgb3IgYW4gYXJyYXksIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSBiZXN0IHVuaXQuIFVzZSBhbiBhcnJheSBvciBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIG9yIFwic2Vjb25kc1wiXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucm91bmQ9dHJ1ZV0gLSB3aGV0aGVyIHRvIHJvdW5kIHRoZSBudW1iZXJzIGluIHRoZSBvdXRwdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5wYWRkaW5nPTBdIC0gcGFkZGluZyBpbiBtaWxsaXNlY29uZHMuIFRoaXMgYWxsb3dzIHlvdSB0byByb3VuZCB1cCB0aGUgcmVzdWx0IGlmIGl0IGZpdHMgaW5zaWRlIHRoZSB0aHJlc2hvbGQuIERvbid0IHVzZSBpbiBjb21iaW5hdGlvbiB3aXRoIHtyb3VuZDogZmFsc2V9IGJlY2F1c2UgdGhlIGRlY2ltYWwgb3V0cHV0IHdpbGwgaW5jbHVkZSB0aGUgcGFkZGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJpbiAxIGRheVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZShcImVzXCIpLnRvUmVsYXRpdmUoeyBkYXlzOiAxIH0pIC8vPT4gXCJkZW50cm8gZGUgMSBkw61hXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSh7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkYW5zIDIzIGhldXJlc1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSh7IHVuaXQ6IFwiaG91cnNcIiB9KSAvLz0+IFwiNDggaG91cnMgYWdvXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBob3VyczogMzYgfSkudG9SZWxhdGl2ZSh7IHJvdW5kOiBmYWxzZSB9KSAvLz0+IFwiMS41IGRheXMgYWdvXCJcbiAgICovO1xuICBfcHJvdG8udG9SZWxhdGl2ZSA9IGZ1bmN0aW9uIHRvUmVsYXRpdmUob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIHZhciBiYXNlID0gb3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHtcbiAgICAgICAgem9uZTogdGhpcy56b25lXG4gICAgICB9KSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgPyB0aGlzIDwgYmFzZSA/IC1vcHRpb25zLnBhZGRpbmcgOiBvcHRpb25zLnBhZGRpbmcgOiAwO1xuICAgIHZhciB1bml0cyA9IFtcInllYXJzXCIsIFwibW9udGhzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIl07XG4gICAgdmFyIHVuaXQgPSBvcHRpb25zLnVuaXQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy51bml0KSkge1xuICAgICAgdW5pdHMgPSBvcHRpb25zLnVuaXQ7XG4gICAgICB1bml0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKGJhc2UsIHRoaXMucGx1cyhwYWRkaW5nKSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIG51bWVyaWM6IFwiYWx3YXlzXCIsXG4gICAgICB1bml0czogdW5pdHMsXG4gICAgICB1bml0OiB1bml0XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBkYXRlIHJlbGF0aXZlIHRvIHRvZGF5LCBzdWNoIGFzIFwieWVzdGVyZGF5XCIgb3IgXCJuZXh0IG1vbnRoXCIuXG4gICAqIE9ubHkgaW50ZXJuYXRpb25hbGl6ZXMgb24gcGxhdGZvcm1zIHRoYXQgc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgb3IgXCJkYXlzXCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwidG9tb3Jyb3dcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcIlwibWHDsWFuYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcih7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkZW1haW5cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKi87XG4gIF9wcm90by50b1JlbGF0aXZlQ2FsZW5kYXIgPSBmdW5jdGlvbiB0b1JlbGF0aXZlQ2FsZW5kYXIob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBkaWZmUmVsYXRpdmUob3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHtcbiAgICAgIHpvbmU6IHRoaXMuem9uZVxuICAgIH0pLCB0aGlzLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgbnVtZXJpYzogXCJhdXRvXCIsXG4gICAgICB1bml0czogW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCJdLFxuICAgICAgY2FsZW5kYXJ5OiB0cnVlXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovO1xuICBEYXRlVGltZS5taW4gPSBmdW5jdGlvbiBtaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm1pbiByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaS52YWx1ZU9mKCk7XG4gICAgfSwgTWF0aC5taW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWF4IG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtYXhpbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWF4IERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovO1xuICBEYXRlVGltZS5tYXggPSBmdW5jdGlvbiBtYXgoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBkYXRlVGltZXMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWF4IHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnZhbHVlT2YoKTtcbiAgICB9LCBNYXRoLm1heCk7XG4gIH1cblxuICAvLyBNSVNDXG5cbiAgLyoqXG4gICAqIEV4cGxhaW4gaG93IGEgc3RyaW5nIHdvdWxkIGJlIHBhcnNlZCBieSBmcm9tRm9ybWF0KClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSBkZXNjcmlwdGlvbilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRha2VuIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4gPSBmdW5jdGlvbiBmcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRsb2NhbGUgPSBfb3B0aW9ucy5sb2NhbGUsXG4gICAgICBsb2NhbGUgPSBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0aW9ucyRsb2NhbGUsXG4gICAgICBfb3B0aW9ucyRudW1iZXJpbmdTeXMgPSBfb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfb3B0aW9ucyRudW1iZXJpbmdTeXMgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0aW9ucyRudW1iZXJpbmdTeXMsXG4gICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgZGVmYXVsdFRvRU46IHRydWVcbiAgICAgIH0pO1xuICAgIHJldHVybiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdEV4cGxhaW4gaW5zdGVhZFxuICAgKi87XG4gIERhdGVUaW1lLmZyb21TdHJpbmdFeHBsYWluID0gZnVuY3Rpb24gZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIEZPUk1BVCBQUkVTRVRTXG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi87XG4gIF9jcmVhdGVDbGFzcyhEYXRlVGltZSwgW3tcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZFJlYXNvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkRXhwbGFuYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbG9jYWxlIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2VuLUdCJy4gVGhlIGxvY2FsZSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibG9jYWxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEYXRlVGltZSwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJpbmdTeXN0ZW1cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3V0cHV0IGNhbGVuZGFyIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2lzbGFtaWMnLiBUaGUgb3V0cHV0IGNhbGVuZGFyIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvdXRwdXRDYWxlbmRhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm91dHB1dENhbGVuZGFyIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHRpbWUgem9uZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBEYXRlVGltZS5cbiAgICAgKiBAdHlwZSB7Wm9uZX1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ6b25lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIHRpbWUgem9uZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInpvbmVOYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLm5hbWUgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgeWVhclxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS55ZWFyIC8vPT4gMjAxN1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwieWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy55ZWFyIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcXVhcnRlclxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5xdWFydGVyIC8vPT4gMlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicXVhcnRlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguY2VpbCh0aGlzLmMubW9udGggLyAzKSA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJtb250aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5kYXkgLy89PiAyNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmRheSA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGhvdXIgb2YgdGhlIGRheSAoMC0yMykuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJob3VyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm1pbnV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1Mikuc2Vjb25kIC8vPT4gNTJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInNlY29uZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5zZWNvbmQgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kICgwLTk5OSkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibWlsbGlzZWNvbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWVrIHllYXJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMiwgMzEpLndlZWtZZWFyIC8vPT4gMjAxNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla1llYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2VlayBudW1iZXIgb2YgdGhlIHdlZWsgeWVhciAoMS01MmlzaCkuXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla051bWJlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay5cbiAgICAgKiAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrZGF5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3JkaW5hbCAobWVhbmluZyB0aGUgZGF5IG9mIHRoZSB5ZWFyKVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5vcmRpbmFsIC8vPT4gMTQ1XG4gICAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvcmRpbmFsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYykub3JkaW5hbCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdCcuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJtb250aFNob3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJzaG9ydFwiLCB7XG4gICAgICAgIGxvY09iajogdGhpcy5sb2NcbiAgICAgIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdG9iZXInLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhMb25nIC8vPT4gT2N0b2JlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibW9udGhMb25nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJsb25nXCIsIHtcbiAgICAgICAgbG9jT2JqOiB0aGlzLmxvY1xuICAgICAgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IHdlZWtkYXksIHN1Y2ggYXMgJ01vbicuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5U2hvcnQgLy89PiBNb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIndlZWtkYXlTaG9ydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJzaG9ydFwiLCB7XG4gICAgICAgIGxvY09iajogdGhpcy5sb2NcbiAgICAgIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgd2Vla2RheSwgc3VjaCBhcyAnTW9uZGF5Jy5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrZGF5TG9uZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJsb25nXCIsIHtcbiAgICAgICAgbG9jT2JqOiB0aGlzLmxvY1xuICAgICAgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgVVRDIG9mZnNldCBvZiB0aGlzIERhdGVUaW1lIGluIG1pbnV0ZXNcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5vZmZzZXQgLy89PiAtMjQwXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkub2Zmc2V0IC8vPT4gMFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gK3RoaXMubyA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNob3J0IGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRVNUXCIgb3IgXCJFRFRcIi5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm9mZnNldE5hbWVTaG9ydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICAgIGZvcm1hdDogXCJzaG9ydFwiLFxuICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvbmcgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcIiBvciBcIkVhc3Rlcm4gRGF5bGlnaHQgVGltZVwiLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0TmFtZUxvbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgICBmb3JtYXQ6IFwibG9uZ1wiLFxuICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciB0aGlzIHpvbmUncyBvZmZzZXQgZXZlciBjaGFuZ2VzLCBhcyBpbiBhIERTVC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpc09mZnNldEZpeGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLmlzVW5pdmVyc2FsIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgaW4gYSBEU1QuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNJbkRTVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuaXNPZmZzZXRGaXhlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7XG4gICAgICAgICAgbW9udGg6IDEsXG4gICAgICAgICAgZGF5OiAxXG4gICAgICAgIH0pLm9mZnNldCB8fCB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHtcbiAgICAgICAgICBtb250aDogNVxuICAgICAgICB9KS5vZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW4gYSBsZWFwIHllYXIsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImlzSW5MZWFwWWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAyKS5kYXlzSW5Nb250aCAvLz0+IDI5XG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5c0luTW9udGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmRheXNJblllYXIgLy89PiAzNjVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImRheXNJblllYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBkYXlzSW5ZZWFyKHRoaXMueWVhcikgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdlZWtzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS53ZWVrc0luV2Vla1llYXIgLy89PiA1MlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla3NJbldlZWtZZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gd2Vla3NJbldlZWtZZWFyKHRoaXMud2Vla1llYXIpIDogTmFOO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcIkRBVEVfU0hPUlRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX1NIT1JUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVfTUVEXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURV9NRUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCBPY3QgMTQsIDE5ODMnXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJEQVRFX01FRF9XSVRIX1dFRUtEQVlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX01FRF9XSVRIX1dFRUtEQVk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVfRlVMTFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfRlVMTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURV9IVUdFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURV9IVUdFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJUSU1FX1NJTVBMRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfU0lNUExFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJUSU1FX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfV0lUSF9TRUNPTkRTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV9XSVRIX1NIT1JUX09GRlNFVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJUSU1FX1dJVEhfTE9OR19PRkZTRVRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FX1dJVEhfTE9OR19PRkZTRVQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfMjRfU0lNUExFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9TSU1QTEU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfMjRfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfMjRfV0lUSF9MT05HX09GRlNFVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9TSE9SVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX1NIT1JUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX01FRFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgMTQgT2N0IDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9GVUxMXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfRlVMTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9IVUdFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfSFVHRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRGF0ZVRpbWU7XG59KCk7XG5mdW5jdGlvbiBmcmllbmRseURhdGVUaW1lKGRhdGVUaW1laXNoKSB7XG4gIGlmIChEYXRlVGltZS5pc0RhdGVUaW1lKGRhdGVUaW1laXNoKSkge1xuICAgIHJldHVybiBkYXRlVGltZWlzaDtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiBkYXRlVGltZWlzaC52YWx1ZU9mICYmIGlzTnVtYmVyKGRhdGVUaW1laXNoLnZhbHVlT2YoKSkpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUpTRGF0ZShkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgdHlwZW9mIGRhdGVUaW1laXNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21PYmplY3QoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIlVua25vd24gZGF0ZXRpbWUgYXJndW1lbnQ6IFwiICsgZGF0ZVRpbWVpc2ggKyBcIiwgb2YgdHlwZSBcIiArIHR5cGVvZiBkYXRlVGltZWlzaCk7XG4gIH1cbn1cblxudmFyIFZFUlNJT04gPSBcIjMuMy4wXCI7XG5cbmV4cG9ydHMuRGF0ZVRpbWUgPSBEYXRlVGltZTtcbmV4cG9ydHMuRHVyYXRpb24gPSBEdXJhdGlvbjtcbmV4cG9ydHMuRml4ZWRPZmZzZXRab25lID0gRml4ZWRPZmZzZXRab25lO1xuZXhwb3J0cy5JQU5BWm9uZSA9IElBTkFab25lO1xuZXhwb3J0cy5JbmZvID0gSW5mbztcbmV4cG9ydHMuSW50ZXJ2YWwgPSBJbnRlcnZhbDtcbmV4cG9ydHMuSW52YWxpZFpvbmUgPSBJbnZhbGlkWm9uZTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBTZXR0aW5ncztcbmV4cG9ydHMuU3lzdGVtWm9uZSA9IFN5c3RlbVpvbmU7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xuZXhwb3J0cy5ab25lID0gWm9uZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWx1eG9uLmpzLm1hcFxuIiwiaW1wb3J0IHsgQ29vcmRzLCBSZWN0YW5nbGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5zaWRlUmVjdGFuZ2xlKHJlY3Q6IFJlY3RhbmdsZSwgcG9pbnQ6IENvb3Jkcykge1xuICByZXR1cm4gKFxuICAgIHJlY3QucG9pbnRfMS54IDw9IHBvaW50LnggJiZcbiAgICByZWN0LnBvaW50XzIueCA+PSBwb2ludC54ICYmXG4gICAgcmVjdC5wb2ludF8xLnkgPD0gcG9pbnQueSAmJlxuICAgIHJlY3QucG9pbnRfMi55ID49IHBvaW50LnkgJiZcbiAgICByZWN0LnBvaW50XzEueiA8PSBwb2ludC56ICYmXG4gICAgcmVjdC5wb2ludF8yLnogPj0gcG9pbnQuelxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0ZXJzX3RvX3B4KFxuICBtZXRlcnM6IG51bWJlcixcbiAgdmVudWVfbGVuZ3RoOiBudW1iZXIsXG4gIGxlbmd0aDogbnVtYmVyXG4pIHtcbiAgcmV0dXJuIChtZXRlcnMgLyB2ZW51ZV9sZW5ndGgpICogbGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzdChhOiBDb29yZHMsIGI6IENvb3Jkcykge1xuICByZXR1cm4gTWF0aC5hYnMoTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwgMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksIDIpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbl9yYW5nZShhOiBudW1iZXIsIHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdKSB7XG4gIHJldHVybiBhID49IHJhbmdlWzBdICYmIGEgPD0gcmFuZ2VbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kX2luX3JhbmdlKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGIgLSBhKSArIGE7XG59IiwiaW1wb3J0IHsgUGl0Y2hEaW1lbnNpb25zLCBWZW51ZSB9IGZyb20gXCIuLi93b3JrZXIvcGxhY2VcIjtcblxuZXhwb3J0IHR5cGUgQ29vcmRzID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUmVjdGFuZ2xlID0ge1xuICBwb2ludF8xOiBDb29yZHM7XG4gIHBvaW50XzI6IENvb3Jkcztcbn07XG5cbmV4cG9ydCB0eXBlIExpbmUgPSB7XG4gIHBvaW50XzE6IENvb3JkcztcbiAgcG9pbnRfMjogQ29vcmRzO1xufTtcblxuZnVuY3Rpb24gb25MaW5lKGwxOiBMaW5lLCBwOiBDb29yZHMpIHtcbiAgaWYgKFxuICAgIHAueCA8PSBNYXRoLm1heChsMS5wb2ludF8xLngsIGwxLnBvaW50XzIueCkgJiZcbiAgICBwLnggPD0gTWF0aC5taW4obDEucG9pbnRfMS54LCBsMS5wb2ludF8yLngpICYmXG4gICAgcC55IDw9IE1hdGgubWF4KGwxLnBvaW50XzEueSwgbDEucG9pbnRfMi55KSAmJlxuICAgIHAueSA8PSBNYXRoLm1pbihsMS5wb2ludF8xLnksIGwxLnBvaW50XzIueSlcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXJlY3Rpb24oYSwgYiwgYykge1xuICBsZXQgdmFsID0gKGIueSAtIGEueSkgKiAoYy54IC0gYi54KSAtIChiLnggLSBhLngpICogKGMueSAtIGIueSk7XG5cbiAgaWYgKHZhbCA9PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdmFsID4gMCA/IDEgOiAyO1xufVxuXG5mdW5jdGlvbiBpc0ludGVyc2VjdChsMSwgbDIpIHtcbiAgbGV0IGRpcjEgPSBkaXJlY3Rpb24obDEucG9pbnRfMSwgbDEucG9pbnRfMiwgbDIucG9pbnRfMSk7XG4gIGxldCBkaXIyID0gZGlyZWN0aW9uKGwxLnBvaW50XzEsIGwxLnBvaW50XzIsIGwyLnBvaW50XzIpO1xuICBsZXQgZGlyMyA9IGRpcmVjdGlvbihsMi5wb2ludF8xLCBsMi5wb2ludF8yLCBsMS5wb2ludF8xKTtcbiAgbGV0IGRpcjQgPSBkaXJlY3Rpb24obDIucG9pbnRfMSwgbDIucG9pbnRfMiwgbDEucG9pbnRfMik7XG5cbiAgaWYgKGRpcjEgIT0gZGlyMiAmJiBkaXIzICE9IGRpcjQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChkaXIxID09IDAgJiYgb25MaW5lKGwxLCBsMi5wb2ludF8xKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRpcjIgPT0gMCAmJiBvbkxpbmUobDEsIGwyLnBvaW50XzIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZGlyMyA9PSAwICYmIG9uTGluZShsMiwgbDEucG9pbnRfMSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChkaXI0ID09IDAgJiYgb25MaW5lKGwyLCBsMS5wb2ludF8yKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgY2xhc3MgU2hhcGUge1xuICBfcG9pbnRzOiBDb29yZHNbXTtcblxuICBjb25zdHJ1Y3Rvcihwb2ludHMpIHtcbiAgICB0aGlzLl9wb2ludHMgPSBwb2ludHM7XG4gIH1cblxuICBhZGRQb2ludChwb2ludDogQ29vcmRzKSB7XG4gICAgdGhpcy5fcG9pbnRzLnB1c2gocG9pbnQpO1xuICB9XG5cbiAgc2V0IHBvaW50cyhwb2ludHMpIHtcbiAgICB0aGlzLl9wb2ludHMgPSBwb2ludHM7XG4gIH1cblxuICBnZXQgcG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2ludHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKHBvaW50czogQ29vcmRzW10pIHtcbiAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvbHlnb24gbXVzdCBoYXZlIGF0IGxlYXN0IDMgcG9pbnRzXCIpO1xuICAgIH1cbiAgICBzdXBlcihwb2ludHMpO1xuICB9XG4gIGlzSW5zaWRlKHBvaW50OiBDb29yZHMpIHtcbiAgICBsZXQgZXh0cmVtZTogQ29vcmRzID0geyB4OiAxMDAwMDAsIHk6IHBvaW50LnksIHo6IDAgfTtcbiAgICBsZXQgZXhsaW5lOiBMaW5lID0geyBwb2ludF8xOiBwb2ludCwgcG9pbnRfMjogZXh0cmVtZSB9O1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGxldCBzaWRlOiBMaW5lID0ge1xuICAgICAgICBwb2ludF8xOiB0aGlzLnBvaW50c1tpXSxcbiAgICAgICAgcG9pbnRfMjogdGhpcy5wb2ludHNbKGkgKyAxKSAlIHRoaXMucG9pbnRzLmxlbmd0aF0sXG4gICAgICB9O1xuICAgICAgaWYgKGlzSW50ZXJzZWN0KHNpZGUsIGV4bGluZSkpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbihzaWRlLnBvaW50XzEsIHBvaW50LCBzaWRlLnBvaW50XzIpID09IDApIHtcbiAgICAgICAgICByZXR1cm4gb25MaW5lKHNpZGUsIHBvaW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgICAgaSA9IChpICsgMSkgJSB0aGlzLnBvaW50cy5sZW5ndGg7XG4gICAgfSB3aGlsZSAoaSAhPSAwKTtcblxuICAgIHJldHVybiBjb3VudCAlIDIgPT0gMTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGl0Y2hBcmVhIHtcbiAgX3ZlbnVlOiBWZW51ZTtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IodmVudWU6IFZlbnVlKSB7XG4gICAgdGhpcy5sZW5ndGggPSB2ZW51ZS5sZW5ndGg7XG4gICAgdGhpcy53aWR0aCA9IHZlbnVlLndpZHRoO1xuICB9XG5cbiAgc2V0IHZlbnVlKHZlbnVlOiBWZW51ZSkge1xuICAgIHRoaXMuX3ZlbnVlID0gdmVudWU7XG4gIH1cblxuICBnZXQgdmVudWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlbnVlO1xuICB9XG5cbiAgZ2tfYXJlYShzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIikge1xuICAgIGxldCBwb2ludHM6IENvb3Jkc1tdO1xuICAgIGlmIChzaWRlID09IFwibGVmdFwiKSB7XG4gICAgICBwb2ludHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IHRoaXMud2lkdGggLyAyICsgUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF93aWR0aCAvIDIgKyA0LFxuICAgICAgICAgIHo6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X2xlbmd0aCArIDQsXG4gICAgICAgICAgeTogdGhpcy53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gMiAtIDQsXG4gICAgICAgICAgejogMCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICB9XG5cbiAgLy8gZ29hbGtlZXBlciBhcmVhIDogZnJvbSB0aGUgZ29hbCBsaW5lIHRvIHRlbiBtZXRlcnMgb3V0XG4gIC8qR09BTEtFRVBFUl9BUkVBID0gbmV3IFBpdGNoQXJlYShcbiAgICB7eDogMCwgdGhpcy52ZW51ZS53aWR0aCAvIDIgKyBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gMiArIDQsIFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfbGVuZ3RoICsgNCwgdGhpcy52ZW51ZS53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gMiAtIDQpO1xuICAvLyBsZWZ0IGJhY2sgYXJlYSA6IGZyb20gdGhlIGNvcm5lciBmbGFnIHRvIHRoZSBzaXggeWFyZCBib3ggdXAgdG8gMy80IG9mIHRoZSBoYWxmXG4gIExCX0FSRUEgPSBuZXcgUGl0Y2hBcmVhKDAsIDAsIFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGgsICh0aGlzLnZlbnVlLmxlbmd0aCAvIDIpICogMy80KTtcbiAgLy8gcmlnaHQgYmFjayBhcmVhIDogZnJvbSB0aGUgY29ybmVyIGZsYWcgdG8gdGhlIHNpeCB5YXJkIGJveCB1cCB0byAzLzQgb2YgdGhlIGhhbGZcbiAgUkJfQVJFQSA9IG5ldyBQaXRjaEFyZWEoMCwgdGhpcy52ZW51ZS53aWR0aCwgUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF93aWR0aCwgKHRoaXMudmVudWUubGVuZ3RoIC8gMikgKiAzLzQpO1xuICAvLyBjZW50ZXIgYmFjayBhcmVhOiBmcm9tIHRoZSBzaXggeWFyZCBib3ggdG8gaGFsZndheSB1cCB0aGUgaGFsZiBhbmQgZnJvbSBhIGxpdHRsZSBvdXRzaWRlIHRoZSBwZW5hbHR5IGJveCB0byB0aGUgcGVuYWx0eSBzcG90XG4gIENCX0FSRUEgPSBuZXcgUGl0Y2hBcmVhKFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfbGVuZ3RoLCB0aGlzLnZlbnVlLndpZHRoIC8gMiwgdGhpcy52ZW51ZS5sZW5ndGgvNCwgKHRoaXMudmVudWUud2lkdGggLyAyKSArIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyAyICsgMyk7XG4gIC8vIGRlZmVuc2l2ZSBtaWQgYXJlYTogZnJvbSB0aGUgYm94IHRvIDMvNCBvZiB0aGUgaGFsZiBhbmQgMTVtIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBjZW50ZXIgbGluZVxuICBETV9BUkVBID0gbmV3IFBpdGNoQXJlYShQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX2xlbmd0aCwgdGhpcy52ZW51ZS53aWR0aCAvIDIgKyAxNSwgKHRoaXMudmVudWUubGVuZ3RoLzIpICogMy80LCAodGhpcy52ZW51ZS53aWR0aCAvIDIpIC0gMTUpO1xuICAvLyBsZWZ0IGNlbnRlciBtaWQgYXJlYTogZnJvbSA1bSBpbnNpZGUgdGhlIHRvdWNobGluZSB0byB0aGUgY2VudGVyIGxpbmUgYW5kIGZyb20gYSBsaXR0bGUgb3V0c2lkZSB0aGUgYm94IHRvIHRoZSBjZW50ZXIgY2lyY2xlXG4gIExDTV9BUkVBID0gbmV3IFBpdGNoQXJlYShQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX2xlbmd0aCs1LCA1LCB0aGlzLnZlbnVlLmxlbmd0aCAvIDIsIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyAyICsgMyk7Ki9cbn1cblxuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZV9uYW1lcyA9IFtcbiAgXCJwYWNlXCIsXG4gIFwiYWNjZWxlcmF0aW9uXCIsXG4gIFwiYWdpbGl0eVwiLFxuICBcImFnZ3Jlc3Npb25cIixcbiAgXCJiYWxhbmNlXCIsXG4gIFwiZHJpYmJsaW5nXCIsXG4gIFwidGVjaG5pcXVlXCIsXG4gIFwiZmluaXNoaW5nXCIsXG4gIFwicGFzc2luZ1wiLFxuICBcInZpc2lvblwiLFxuICBcInRhY2tsaW5nXCIsXG4gIFwiaGVhZGluZ1wiLFxuICBcInN0cmVuZ3RoXCIsXG4gIFwic3RhbWluYVwiLFxuICBcInBvc2l0aW9uaW5nXCIsXG4gIFwibW92ZW1lbnRcIixcbiAgXCJkZWNpc2lvbnNcIixcbiAgXCJmbGFpclwiLFxuICBcIm5hdHVyYWxfZml0bmVzc1wiLFxuICBcIndvcmtfcmF0ZVwiLFxuICBcImRldGVybWluYXRpb25cIixcbiAgXCJsZWFkZXJzaGlwXCIsXG4gIFwidGVhbXdvcmtcIixcbiAgXCJqdW1waW5nXCIsXG4gIFwicmVhY3Rpb25zXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgZ2tfYXR0cmlidXRlX25hbWVzID0gW1xuICBcImhhbmRsaW5nXCIsXG4gIFwicmVhY3Rpb25zXCIsXG4gIFwib25lX29uX29uZXNcIixcbiAgXCJydXNoaW5nX291dFwiLFxuICBcImNvbW11bmljYXRpb25cIixcbiAgXCJlY2NlbnRyaWNpdHlcIixcbiAgXCJ0aHJvd2luZ1wiLFxuICBcImtpY2tpbmdcIixcbiAgXCJ2aXNpb25cIixcbiAgXCJwb3NpdGlvbmluZ1wiLFxuICBcInBhY2VcIixcbiAgXCJhY2NlbGVyYXRpb25cIixcbiAgXCJzdHJlbmd0aFwiLFxuICBcImp1bXBpbmdcIixcbiAgXCJzdGFtaW5hXCIsXG4gIFwibmF0dXJhbF9maXRuZXNzXCIsXG4gIFwiZGV0ZXJtaW5hdGlvblwiLFxuICBcIndvcmtfcmF0ZVwiLFxuICBcImxlYWRlcnNoaXBcIixcbiAgXCJ0ZWFtd29ya1wiLFxuXTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BlcnNvblwiO1xuaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuL3BsYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBDbHViIHtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9wbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgcHJpdmF0ZSBfbG9jYXRpb246IENpdHk7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IHBsYXllcnMocGxheWVyczogUGxheWVyW10pIHtcbiAgICB0aGlzLl9wbGF5ZXJzID0gcGxheWVycztcbiAgfVxuXG4gIGdldCBwbGF5ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICB9XG5cbiAgc2V0IGxvY2F0aW9uKGxvYzogQ2l0eSkge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jO1xuICB9XG5cbiAgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCIuL2NsdWJcIjtcbmltcG9ydCB7XG4gIFBsYXllcixcbiAgUG9zaXRpb24sXG4gIFJvbGUsXG4gIEluc3RydWN0aW9uLFxuICBUZWFtSW5zdHJ1Y3Rpb24sXG4gIFBsYXllckluc3RydWN0aW9uLFxufSBmcm9tIFwiLi9wZXJzb25cIjtcbmltcG9ydCB7IFBpdGNoRGltZW5zaW9ucywgVmVudWUgfSBmcm9tIFwiLi9wbGFjZVwiO1xuaW1wb3J0IHsgQ29vcmRzLCBQaXRjaEFyZWEsIFBvbHlnb24gfSBmcm9tIFwiLi4vY29tbW9uL3R5cGVzXCI7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xuaW1wb3J0IHsgZHJhd19waXRjaCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBkaXN0LCBpbl9yYW5nZSwgbWV0ZXJzX3RvX3B4LCByYW5kX2luX3JhbmdlIH0gZnJvbSBcIi4uL2NvbW1vbi9oZWxwZXJzXCI7XG5cbnR5cGUgUGxheWVyU3RhdHMgPSB7XG4gIGdvYWxzOiBudW1iZXI7XG4gIGFzc2lzdHM6IG51bWJlcjtcbiAgcGFzc2VzX2F0dGVtcHRlZDogbnVtYmVyO1xuICBwYXNzZXNfY29tcGxldGVkOiBudW1iZXI7XG4gIHNob3RzOiBudW1iZXI7XG4gIHNob3RzX29uX3RhcmdldDogbnVtYmVyO1xuICB0YWNrbGVzX2F0dGVtcHRlZDogbnVtYmVyO1xuICB0YWNrbGVzX2NvbXBsZXRlZDogbnVtYmVyO1xuICBpbnRlcmNlcHRpb25zOiBudW1iZXI7XG4gIGZvdWxzOiBudW1iZXI7XG4gIGZvdWxzX3N1ZmZlcmVkOiBudW1iZXI7XG4gIHllbGxvd19jYXJkczogbnVtYmVyO1xuICByZWRfY2FyZHM6IG51bWJlcjtcbiAgc2F2ZXM6IG51bWJlcjtcbiAgZ29hbHNfY29uY2VkZWQ6IG51bWJlcjtcbiAgY2xlYW5fc2hlZXRzOiBudW1iZXI7XG4gIHBlbmFsdGllc19zY29yZWQ6IG51bWJlcjtcbiAgcGVuYWx0aWVzX21pc3NlZDogbnVtYmVyO1xuICBwZW5hbHRpZXNfc2F2ZWQ6IG51bWJlcjtcbiAgb3duX2dvYWxzOiBudW1iZXI7XG4gIG1pbnV0ZXNfcGxheWVkOiBudW1iZXI7XG4gIHhHOiBudW1iZXI7XG4gIHhBOiBudW1iZXI7XG59O1xuXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJPblBpdGNoIGV4dGVuZHMgUGxheWVyIHtcbiAgX3JvbGU6IFJvbGU7XG4gIF9wb3NpdGlvbjogUG9zaXRpb247XG4gIF9pbnN0cnVjdGlvbnM6IFBsYXllckluc3RydWN0aW9uW107XG4gIF9sb2M6IENvb3JkcztcbiAgX2R4OiBudW1iZXI7XG4gIF9keTogbnVtYmVyO1xuICBfZHo6IG51bWJlcjtcbiAgdmVudWU6IFZlbnVlO1xuICB0ZWFtOlRlYW07XG4gIHJlY2VpdmVfcGFzczogYm9vbGVhbjtcblxuICB0YXJnZXRfc3BlZWQ6IG51bWJlcjtcbiAgdGFyZ2V0X2xvYzogQ29vcmRzO1xuXG4gIGRlZmVuc2l2ZV9hcmVhOiBQaXRjaEFyZWE7XG5cbiAgbTpNYXRjaDtcblxuICBzZXQgcm9sZShyb2xlOiBSb2xlKSB7XG4gICAgdGhpcy5fcm9sZSA9IHJvbGU7XG4gIH1cblxuICBzZXQgcG9zaXRpb24ocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBzZXQgaW5zdHJ1Y3Rpb25zKGluc3RydWN0aW9uczogUGxheWVySW5zdHJ1Y3Rpb25bXSkge1xuICAgIHRoaXMuX2luc3RydWN0aW9ucyA9IGluc3RydWN0aW9ucztcbiAgfVxuXG4gIGdldCBpbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RydWN0aW9ucztcbiAgfVxuXG4gIHNldCBsb2MobG9jOiBDb29yZHMpIHtcbiAgICB0aGlzLl9sb2MgPSBsb2M7XG4gIH1cblxuICBnZXQgbG9jKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2M7XG4gIH1cblxuICBzZXQgZHgoZHg6IG51bWJlcikge1xuICAgIHRoaXMuX2R4ID0gZHg7XG4gIH1cblxuICBnZXQgZHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R4O1xuICB9XG5cbiAgc2V0IGR5KGR5OiBudW1iZXIpIHtcbiAgICB0aGlzLl9keSA9IGR5O1xuICB9XG5cbiAgZ2V0IGR5KCkge1xuICAgIHJldHVybiB0aGlzLl9keTtcbiAgfVxuXG4gIHNldCBkeihkejogbnVtYmVyKSB7XG4gICAgdGhpcy5fZHogPSBkejtcbiAgfVxuXG4gIGdldCBkeigpIHtcbiAgICByZXR1cm4gdGhpcy5fZHo7XG4gIH1cblxuICBjYWxjdWxhdGVfb3B0aW1hbF9wb3NpdGlvbih0ZWFtSW5Qb3NzZXNzaW9uOiBUZWFtfG51bGwpIHtcbiAgICAvLyBtb3ZlIHRvd2FyZHMgbW9yZSB0aHJlYXRlbmluZyBwb3NpdGlvbnNcbiAgICAvLyBvciBwcm92aWRlIHBhc3Npbmcgb3B0aW9uc1xuICAgIFxuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBwb3NpdGlvbnMgaW4gcmFkaXVzXG4gICAgLy8gcGljayBvbmUgYmFzZWQgb24gbW92ZW1lbnQgYXR0cmlidXRlXG4gICAgLy8gYW5kIHRlYW0gdGFjdGljc1xuICAgIGxldCByYWRpdXMgPSAxMDtcbiAgICAvLyAxMCBtXG4gICAgbGV0IHBvc2l0aW9uczpDb29yZHNbXSA9IFtdO1xuICAgIGZvciAobGV0IHggPSB0aGlzLmxvYy54IC0gcmFkaXVzOyB4IDwgdGhpcy5sb2MueCArIHJhZGl1czsgeCs9Mikge1xuICAgICAgZm9yIChsZXQgeSA9IHRoaXMubG9jLnkgLSByYWRpdXM7IHkgPCB0aGlzLmxvYy55ICsgcmFkaXVzOyB5Kz0yKSB7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKHt4OngseTp5LHo6MH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc2NvcmVzID0gQXJyYXkocG9zaXRpb25zLmxlbmd0aCkuZmlsbCgwKTtcbiAgICBmb3IgKGxldCBwIG9mIHBvc2l0aW9ucykge1xuICAgICAgbGV0IHRocmVhdCA9IHRoaXMudGhyZWF0X2F0X3Bvc2l0aW9uKHRoaXMudGVhbSwgcCk7XG4gICAgICBzY29yZXNbcG9zaXRpb25zLmluZGV4T2YocCldICs9IHRocmVhdDtcbiAgICB9XG5cbiAgICAvLyBzb3J0IHBvc2l0aW9ucyBieSBzY29yZVxuICAgIHNjb3Jlcy5zb3J0KChhLGIpID0+IHtcbiAgICAgIHJldHVybiBiLWE7XG4gICAgfSk7XG5cbiAgICBwb3NpdGlvbnMuc29ydCgoYSxiKSA9PiB7XG4gICAgICByZXR1cm4gc2NvcmVzW3Bvc2l0aW9ucy5pbmRleE9mKGIpXSAtIHNjb3Jlc1twb3NpdGlvbnMuaW5kZXhPZihhKV07XG4gICAgfSk7ICAgICAgXG5cbiAgICBsZXQgbW92ZW1lbnQgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0X2F0dHIoXCJtb3ZlbWVudFwiKTtcbiAgICBpZiAobW92ZW1lbnQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtb3ZlbWVudCA9IDI1O1xuICAgIH1cbiAgICBcbiAgICAvLyBsb3dlciBtb3ZlbWVudCBtZWFucyBtb3JlIGRldmlhdGlvblxuICAgIC8vIG1heGltdW0gcmFuZG9tbmVzcyA9IDAuNVxuICAgIC8vIG1pbmltdW0gcmFuZG9tbmVzcyA9IDAuMVxuXG4gICAgbGV0IHJhbmRvbW5lc3MgPSAwLjUgLSAobW92ZW1lbnQgLyAxMDApICogMC40O1xuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbW5lc3MgKiAxMCk7XG4gICAgbGV0IHRhcmdldCA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgY29uc29sZS5sb2coXCJtb3ZpbmcgdG8gdGFyZ2V0XCIgKyB0YXJnZXQueCArIFwiIFwiICsgdGFyZ2V0LnkpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBraWNrb2ZmX3Bvc2l0aW9uKCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZHJpYmJsZSgpIHtcbiAgICBsZXQgZHJpYmJsaW5nID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwiZHJpYmJsaW5nXCIpO1xuICAgIGlmIChkcmliYmxpbmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkcmliYmxpbmcgPSAyNTtcbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5jYWxjdWxhdGVfb3B0aW1hbF9wb3NpdGlvbih0aGlzLnRlYW0pO1xuICAgIHRoaXMuZHggPSAwO1xuICAgIHRoaXMuZHkgPSAwO1xuICB9XG5cbiAgZGVjZWxlcmF0ZSgpIHtcbiAgICAvLyBkZWNlbGVyYXRpb24gPSAwLjUgKiBhY2NlbGVyYXRpb25cbiAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwiYWNjZWxlcmF0aW9uXCIpO1xuICAgIGlmIChhY2NlbGVyYXRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY2NlbGVyYXRpb24gPSAyNTtcbiAgICB9XG5cbiAgICBsZXQgbWF4X2RlY2VsZXJhdGlvbiA9IDYgKyAoYWNjZWxlcmF0aW9uIC8gMTAwKSAqIDI7XG5cbiAgICBsZXQgZGVjZWxlcmF0aW9uID0gbWF4X2RlY2VsZXJhdGlvbiAvIDI7XG5cbiAgICBpZiAodGhpcy5keCA+IDAgKSB7XG4gICAgICB0aGlzLmR4IC09IGRlY2VsZXJhdGlvbiAvIDYwO1xuICAgICAgaWYgKHRoaXMuZHggPCAwKSB7XG4gICAgICAgIHRoaXMuZHggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5keCA8IDApIHtcbiAgICAgIHRoaXMuZHggKz0gZGVjZWxlcmF0aW9uIC8gNjA7XG4gICAgICBpZiAodGhpcy5keCA+IDApIHtcbiAgICAgICAgdGhpcy5keCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmR5ID4gMCkge1xuICAgICAgdGhpcy5keSAtPSBkZWNlbGVyYXRpb24gLyA2MDtcbiAgICAgIGlmICh0aGlzLmR5IDwgMCkge1xuICAgICAgICB0aGlzLmR5ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZHkgPCAwKSB7XG4gICAgICB0aGlzLmR5ICs9IGRlY2VsZXJhdGlvbiAvIDYwO1xuICAgICAgaWYgKHRoaXMuZHkgPiAwKSB7XG4gICAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgfVxuXG4gIHNob290KCkge1xuICAgIGxldCBzaG9vdGluZyA9IHRoaXMuYXR0cmlidXRlcy5nZXRfYXR0cihcImZpbmlzaGluZ1wiKTtcbiAgICBpZiAoc2hvb3RpbmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzaG9vdGluZyA9IDI1O1xuICAgIH1cbiAgICAvLyBhY2N1cmFjeVxuICAgIC8vIG1heCBhY2N1cmFjeV9yYWRpdXMgPSAxLjI1bVxuICAgIC8vIG1pbiBhY2N1cmFjeV9yYWRpdXMgPSAwLjI1bVxuICAgIGxldCBhY2N1cmFjeV9yYWRpdXMgPSAxLjI1IC0gKHNob290aW5nIC8gMTAwKSAqIDE7XG4gICAgLy8gcG93ZXJcbiAgICBsZXQgdGVjaG5pcXVlID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwidGVjaG5pcXVlXCIpO1xuICAgIGlmICh0ZWNobmlxdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ZWNobmlxdWUgPSAyNTtcbiAgICB9XG4gICAgLy8gbWF4IHBvd2VyID0gMjUgbS9zXG4gICAgLy8gbWluIHBvd2VyID0gMTUgbS9zXG4gICAgbGV0IG1heF9wb3dlciA9IDE1ICsgKHRlY2huaXF1ZSAvIDEwMCkgKiAxMDtcbiAgICBsZXQgcG93ZXIgPSBtYXhfcG93ZXI7XG4gICAgLy8gZGlzdGFuY2UgdG8gZ29hbFxuICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnRlYW0uYXR0YWNraW5nX2RpcmVjdGlvbjtcbiAgICBsZXQgbGVmdDogQ29vcmRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IHRoaXMudmVudWUud2lkdGggLyAyLFxuICAgICAgejogMCxcbiAgICB9O1xuICAgIGxldCByaWdodDogQ29vcmRzID0geyBcbiAgICAgIHg6IHRoaXMudmVudWUubGVuZ3RoLFxuICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIsXG4gICAgICB6OiAwLFxuICAgIH07XG5cbiAgICAvLyBjaG9vc2Ugc2lkZSBvZiBnb2FsXG4gICAgbGV0IHRhcmdldDogQ29vcmRzO1xuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJsZWZ0XCIpIHtcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgIHRhcmdldCA9IHtcbiAgICAgICAgICB4OiAtMixcbiAgICAgICAgICB5OiB0aGlzLnZlbnVlLndpZHRoIC8gMiAtIDEsXG4gICAgICAgICAgejogMS4yNSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgIHg6IC0yLFxuICAgICAgICAgIHk6IHRoaXMudmVudWUud2lkdGggLyAyICsgMSxcbiAgICAgICAgICB6OiAxLjI1LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgIHRhcmdldCA9IHtcbiAgICAgICAgICB4OiB0aGlzLnZlbnVlLmxlbmd0aCArIDIsXG4gICAgICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIgLSAxLFxuICAgICAgICAgIHo6IDEuMjUsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldCA9IHtcbiAgICAgICAgICB4OiB0aGlzLnZlbnVlLmxlbmd0aCArIDIsXG4gICAgICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIgKyAxLFxuICAgICAgICAgIHo6IDEuMjUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhcHBseSBlcnJvciB0byB0YXJnZXRfY29vcmRzIGJhc2VkIG9uIHNob290aW5nIGFjY3VyYWN5IGFuZCBkaXN0YW5jZVxuICAgIHRhcmdldC54ICs9IHJhbmRfaW5fcmFuZ2UoLWFjY3VyYWN5X3JhZGl1cywgYWNjdXJhY3lfcmFkaXVzKTtcbiAgICB0YXJnZXQueSArPSByYW5kX2luX3JhbmdlKC1hY2N1cmFjeV9yYWRpdXMsIGFjY3VyYWN5X3JhZGl1cyk7XG4gICAgdGFyZ2V0LnogKz0gcmFuZF9pbl9yYW5nZSgtYWNjdXJhY3lfcmFkaXVzLCBhY2N1cmFjeV9yYWRpdXMpO1xuXG4gICAgLy8gY2FsdWNsYXRlIHNwZWVkIHRvIGFwcGx5IHRvIGJhbGxcbiAgICBsZXQgc3BlZWQgPSBtYXhfcG93ZXI7XG4gICAgbGV0IGRpc3RhbmNlID0gZGlzdCh0aGlzLmxvYywgdGFyZ2V0KTtcbiAgICBsZXQgZXJyb3JfcGx1c19taW51c19wZXJjZW50YWdlID0gMC4xNSAtICh0ZWNobmlxdWUgLyAxMDApICogMC4xO1xuICAgIGxldCBkeCA9ICgodGFyZ2V0LnggLSB0aGlzLmxvYy54KSAvIGRpc3RhbmNlKSAqIHNwZWVkO1xuICAgIGxldCBkeSA9ICgodGFyZ2V0LnkgLSB0aGlzLmxvYy55KSAvIGRpc3RhbmNlKSAqIHNwZWVkO1xuICAgIGxldCBkeiA9ICgodGFyZ2V0LnogLSB0aGlzLmxvYy56KSAvIGRpc3RhbmNlKSAqIHNwZWVkO1xuICAgIGR4IC89IDYwO1xuICAgIGR5IC89IDYwO1xuICAgIGR6IC89IDYwO1xuXG4gICAgdGhpcy5hdHRlbXB0X3Nob3QoZHgsIGR5LCBkeik7XG5cbiAgfVxuXG4gIGF0dGVtcHRfc2hvdChkeCwgZHksIGR6KSB7XG4gICAgdGhpcy5tLmJhbGxfZHggPSBkeDtcbiAgICB0aGlzLm0uYmFsbF9keSA9IGR5O1xuICAgIHRoaXMubS5iYWxsX2R6ID0gZHo7XG4gICAgdGhpcy5tLnJlY29yZChcInNob3RzXCIsIHRoaXMpO1xuICB9XG4gIGRlY2lkZV9hY3Rpb24obTpNYXRjaCkge1xuICAgIC8vIGlmIGJhbGwgaXMgbm90IHBvc3Nlc3NlZCBieSBhbnlvbmUsIGFuZCBwbGF5ZXIgaXMgY2xvc2VzdCBcbiAgICAvLyB0ZWFtbWF0ZSwgdHJ5IHRvIGdldCBpdFxuICAgIGlmIChtLnBvc3Nlc3Npb24gPT0gbnVsbCkge1xuICAgICAgbGV0IGNsb3Nlc3QgPSBtLmNsb3Nlc3RfdG9fYmFsbCgpO1xuICAgICAgaWYgKGNsb3Nlc3QuaW5jbHVkZXModGhpcykpIHtcbiAgICAgICAgdGhpcy5nZXRfYmFsbChtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnJlY2VpdmVfcGFzcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2aW5nIHBhc3NcIik7XG4gICAgICAgICAgdGhpcy5tb3ZlX3RvKG0uYmFsbF9wb3MsICdtYXgnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZV9vcHRpbWFsX3Bvc2l0aW9uKG0ub3V0T2ZQb3NzZXNzaW9uKTtcblxuICAgICAgICAgIHRoaXMubW92ZV90byh0aGlzLnRhcmdldF9sb2MsJ21lZGl1bScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjZWl2ZV9wYXNzID0gZmFsc2U7XG4gICAgICAvLyBpZiBiYWxsIGlzIHBvc3Nlc3NlZCBieSBzZWxmXG4gICAgICBpZiAobS5wbGF5ZXJfcG9zc2Vzc2lvbiA9PSB0aGlzKSB7XG4gICAgICAgIC8vIGRyaWJibGUsIHBhc3MsIG9yIHNob290XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0ZWFtbWF0ZSB0aHJlYXRcbiAgICAgICAgbGV0IHRlYW1tYXRlX3RocmVhdCA9IG5ldyBBcnJheSh0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2gubGVuZ3RoLTEpLmZpbGwoMCk7XG4gICAgICAgIGxldCB0ZWFtbWF0ZV9wcmVzc3VyZSA9IG5ldyBBcnJheSh0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2gubGVuZ3RoLTEpLmZpbGwoMCk7XG4gICAgICAgIGxldCBkaWZmID0gbmV3IEFycmF5KHRoaXMudGVhbS5wbGF5ZXJzT25QaXRjaC5sZW5ndGgtMSkuZmlsbCgwKTtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2guZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcGxheWVyICE9IHRoaXM7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgbGV0IHRocmVhdCA9IHAuY2FsY3VsYXRlX3RocmVhdCh0aGlzLnRlYW0pO1xuICAgICAgICAgIGxldCBwcmVzc3VyZSA9IHAuY2FsY3VsYXRlX3ByZXNzdXJlKG0ub3V0T2ZQb3NzZXNzaW9uIGFzIFRlYW0pO1xuICAgICAgICAgIHRlYW1tYXRlX3RocmVhdFt0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2guaW5kZXhPZihwKV0gPSB0aHJlYXQ7XG4gICAgICAgICAgdGVhbW1hdGVfcHJlc3N1cmVbdGhpcy50ZWFtLnBsYXllcnNPblBpdGNoLmluZGV4T2YocCldID0gcHJlc3N1cmU7XG4gICAgICAgICAgZGlmZlt0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2guaW5kZXhPZihwKV0gPSAodGhyZWF0IC0gcHJlc3N1cmUpKi43NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxmX3RocmVhdCA9IHRoaXMuY2FsY3VsYXRlX3RocmVhdCh0aGlzLnRlYW0pO1xuICAgICAgICBsZXQgc2VsZl9wcmVzc3VyZSA9IHRoaXMuY2FsY3VsYXRlX3ByZXNzdXJlKG0ub3V0T2ZQb3NzZXNzaW9uIGFzIFRlYW0pO1xuICAgICAgICBsZXQgc2VsZl9kaWZmID0gc2VsZl90aHJlYXQgLSBzZWxmX3ByZXNzdXJlO1xuICAgICAgICBsZXQgbWF4X2RpZmYgPSBNYXRoLm1heCguLi5kaWZmKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZl9kaWZmLCBtYXhfZGlmZik7XG4gICAgICAgIGlmIChtYXhfZGlmZiA+IHNlbGZfZGlmZikge1xuICAgICAgICAgIC8vIHBhc3NcbiAgICAgICAgICB0aGlzLnBhc3ModGhpcy50ZWFtLCBtLm91dE9mUG9zc2Vzc2lvbiBhcyBUZWFtKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmX2RpZmYgPiBtYXhfZGlmZil7XG4gICAgICAgICAgLy8gaWYgc2VsZiBkaWZmIGlzIGxvd2VyIHRoYW4gc2hvdCB0aHJlc2hvbGQsXG4gICAgICAgICAgLy8gZHJpYmJsZSB0byBhIG1vcmUgdGhyZWF0ZW5pbmcgcG9zaXRpb25cbiAgICAgICAgICBpZiAoc2VsZl9kaWZmIDwgMC4wMDAxKSB7XG4gICAgICAgICAgICB0aGlzLmRyaWJibGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG9vdFxuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSA7XG5cbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGlmIGJhbGwgaXMgcG9zc2Vzc2VkIGJ5IHRlYW1tYXRlXG4gICAgICAgIC8vIG1vdmUgdG8gb3B0aW1hbCBwb3NpdGlvblxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5jYWxjdWxhdGVfb3B0aW1hbF9wb3NpdGlvbihtLm91dE9mUG9zc2Vzc2lvbik7XG4gICAgICAgIGlmICh0YXJnZXQ9PXVuZGVmaW5lZCkge1xuICAgICAgICAgIHRhcmdldCA9IHt4OjAseTowLHo6MH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlX3RvKHRhcmdldCwnbWVkaXVtJyk7XG5cbiAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuXG5cblxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZV9jbG9zZXN0X3RlYW1tYXRlKG06IE1hdGNoKSB7XG5cbiAgfVxuXG4gIGdldF9iYWxsKG06TWF0Y2gpIHtcbiAgICBsZXQgdGFyZ2V0ID0gbS5iYWxsX3BvcztcbiAgICB0aGlzLm1vdmVfdG8odGFyZ2V0LCdtYXgnKTtcbiAgfVxuXG4gIG1vdmVfdG8odGFyZ2V0OiBDb29yZHMsIHNwZWVkOiBcIm1heFwiIHwgXCJoaWdoXCIgfCBcIm1lZGl1bVwiIHwgXCJzbG93XCIpIHtcblxuICAgIC8vIGNhbGN1bGF0ZSBkeCwgZHksIGR6XG4gICAgbGV0IHBhY2UgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0X2F0dHIoXCJwYWNlXCIpO1xuICAgIGlmIChwYWNlID09IHVuZGVmaW5lZCkge1xuICAgICAgcGFjZSA9IDI1O1xuICAgIH1cbiAgICAvLyBtYXggc3BlZWQgb2YgMTAwIHBhY2UgcGxheWVyID0gMTAgbS9zXG4gICAgLy8gbWF4IHNwZWVkIG9mIDAgcGFjZSBwbGF5ZXIgPSA3IG0vc1xuICAgIGxldCBtYXhfc3BlZWQgPSA3ICsgKHBhY2UgLyAxMDApICogMztcbiAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwiYWNjZWxlcmF0aW9uXCIpO1xuICAgIGlmIChhY2NlbGVyYXRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY2NlbGVyYXRpb24gPSAyNTtcbiAgICB9XG4gICAgaWYgKHNwZWVkID09IFwiaGlnaFwiKSB7XG4gICAgICBtYXhfc3BlZWQgKj0gMC44NTtcbiAgICB9XG4gICAgaWYgKHNwZWVkID09IFwibWVkaXVtXCIpIHtcbiAgICAgIG1heF9zcGVlZCAqPSAwLjc7XG4gICAgfVxuICAgIGlmIChzcGVlZCA9PSBcInNsb3dcIikge1xuICAgICAgbWF4X3NwZWVkICo9IDAuNTtcbiAgICB9XG4gICAgLy8gbWF4IGFjY2VsZXJhdGlvbiBvZiAxMDAgYWNjZWxlcmF0aW9uIHBsYXllciA9IDggbS9zL3NcbiAgICAvLyBtYXggYWNjZWxlcmF0aW9uIG9mIDAgYWNjZWxlcmF0aW9uIHBsYXllciA9IDYgbS9zL3NcbiAgICBsZXQgbWF4X2FjY2VsZXJhdGlvbiA9IDYgKyAoYWNjZWxlcmF0aW9uIC8gMTAwKSAqIDI7XG4gICAgaWYgKHNwZWVkID09IFwiaGlnaFwiKSB7XG4gICAgICBtYXhfYWNjZWxlcmF0aW9uICo9IDAuODU7XG4gICAgfVxuICAgIGlmIChzcGVlZCA9PSBcIm1lZGl1bVwiKSB7XG4gICAgICBtYXhfYWNjZWxlcmF0aW9uICo9IDAuNztcbiAgICB9XG4gICAgaWYgKHNwZWVkID09IFwic2xvd1wiKSB7XG4gICAgICBtYXhfYWNjZWxlcmF0aW9uICo9IDAuNTtcbiAgICB9XG5cbiAgICAvL2NhbGN1bGF0ZSB0YXJnZXQgZHggYW5kIGR5XG4gICAgLy8gaS5lLiB2ZWN0b3JpemUgbWF4X3NwZWVkXG4gICAgbGV0IGR4ID0gKCh0YXJnZXQueCAtIHRoaXMubG9jLngpIC8gZGlzdCh0aGlzLmxvYywgdGFyZ2V0KSkgKiBtYXhfc3BlZWQ7XG4gICAgbGV0IGR5ID0gKCh0YXJnZXQueSAtIHRoaXMubG9jLnkpIC8gZGlzdCh0aGlzLmxvYywgdGFyZ2V0KSkgKiBtYXhfc3BlZWQ7XG5cbiAgICBkeCAvPSA2MDtcbiAgICBkeSAvPSA2MDtcblxuICAgIGlmIChkeCA+IHRoaXMuZHgpIHtcbiAgICAgIHRoaXMuZHggKz0gbWF4X2FjY2VsZXJhdGlvbiAvIDM2MDtcbiAgICB9IGVsc2UgaWYgKGR4IDwgdGhpcy5keCkge1xuICAgICAgdGhpcy5keCAtPSBtYXhfYWNjZWxlcmF0aW9uIC8gMzYwO1xuICAgIH1cbiAgICBpZiAoZHkgPiB0aGlzLmR5KSB7XG4gICAgICB0aGlzLmR5ICs9IG1heF9hY2NlbGVyYXRpb24gLyAzNjA7XG4gICAgfSBlbHNlIGlmIChkeSA8IHRoaXMuZHkpIHtcbiAgICAgIHRoaXMuZHkgLT0gbWF4X2FjY2VsZXJhdGlvbiAvIDM2MDtcbiAgICB9XG5cbiAgICBcblxuXG4gIH1cblxuICBhdHRlbXB0X3Bhc3MoZHgsIGR5LCBkeikge1xuICAgIHRoaXMubS5iYWxsX2R4ID0gZHg7XG4gICAgdGhpcy5tLmJhbGxfZHkgPSBkeTtcbiAgICB0aGlzLm0uYmFsbF9keiA9IGR6O1xuICAgIHRoaXMubS5yZWNvcmQoXCJwYXNzZXNfYXR0ZW1wdGVkXCIsIHRoaXMpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLmxvYy54ICs9IHRoaXMuZHg7XG4gICAgdGhpcy5sb2MueSArPSB0aGlzLmR5O1xuICAgIHRoaXMubG9jLnogKz0gdGhpcy5kejtcblxuICAgIGlmICh0aGlzLmR4ID09IDAgJiYgdGhpcy5keSA9PSAwICYmIHRoaXMuZHogPT0gMCkge1xuICAgICAgdGhpcy5wYXNzaXZlX21vdmVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcGFzcyh0ZWFtOiBUZWFtLCBvcHA6IFRlYW0pIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5jaG9vc2VfcGFzc190YXJnZXQodGVhbSwgb3BwKTtcbiAgICB0YXJnZXQucmVjZWl2ZV9wYXNzID0gdHJ1ZTtcbiAgICAvLyBwYXNzaW5nIGFjY3VyYWN5XG4gICAgbGV0IHBhc3NfYWNjdXJhY3kgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0X2F0dHIoXCJwYXNzaW5nXCIpO1xuICAgIGlmIChwYXNzX2FjY3VyYWN5ID09IHVuZGVmaW5lZCkge1xuICAgICAgcGFzc19hY2N1cmFjeSA9IDI1O1xuICAgIH1cbiAgICAvLyBkaXN0YW5jZSB0byB0YXJnZXRcbiAgICBsZXQgZCA9IGRpc3QodGhpcy5sb2MsIHRhcmdldC5sb2MpO1xuICAgIGxldCB0YXJnZXRfY29vcmRzOiBDb29yZHMgPSB7XG4gICAgICB4OiB0YXJnZXQubG9jLngsXG4gICAgICB5OiB0YXJnZXQubG9jLnksXG4gICAgICB6OiB0YXJnZXQubG9jLnosXG4gICAgfTtcbiAgICB0aGlzLm0uYmFsbF90YXJnZXQgPSB0YXJnZXRfY29vcmRzO1xuICAgIC8vIGNob29zZSB3aGV0aGVyIHRvIGxvYiBvciBwYXNzIG9uIGdyb3VuZFxuICAgIGxldCBsb2IgPSBmYWxzZTtcbiAgICBpZiAoZCA+IDIwKSB7XG4gICAgICAvLyBsb2JcbiAgICAgIGxvYiA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IGNyb3NzID0gZmFsc2U7XG4gICAgLy8gaWYgcGFzc2VyIGluIGNyb3NzaW5nIHpvbmUgYW5kIHRhcmdldCBpbiBib3gsIGNyb3NzXG4gICAgbGV0IGRpcmVjdGlvbiA9IHRlYW0uYXR0YWNraW5nX2RpcmVjdGlvbjtcbiAgICBpZiAoZGlyZWN0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLmxvYy54IDwgMjAgJiZcbiAgICAgICAgICB0aGlzLmxvYy55IDxcbiAgICAgICAgICAgIHRoaXMudmVudWUud2lkdGggLyAyICsgUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDIpIHx8XG4gICAgICAgIHRoaXMubG9jLnkgPlxuICAgICAgICAgIHRoaXMudmVudWUud2lkdGggLyAyIC0gUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDJcbiAgICAgICkge1xuICAgICAgICAvLyBpZiB0YXJnZXQgaW4gYm94XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXQubG9jLnggPCAxMSAmJlxuICAgICAgICAgIHRhcmdldC5sb2MueSA+XG4gICAgICAgICAgICB0aGlzLnZlbnVlLndpZHRoIC8gMiAtIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyAzICYmXG4gICAgICAgICAgdGFyZ2V0LmxvYy55IDxcbiAgICAgICAgICAgIHRoaXMudmVudWUud2lkdGggLyAyICsgUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDNcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3Jvc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLmxvYy54ID4gdGhpcy52ZW51ZS5sZW5ndGggLSAyMCAmJlxuICAgICAgICAgIHRoaXMubG9jLnkgPFxuICAgICAgICAgICAgdGhpcy52ZW51ZS53aWR0aCAvIDIgKyBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX3dpZHRoIC8gMikgfHxcbiAgICAgICAgdGhpcy5sb2MueSA+XG4gICAgICAgICAgdGhpcy52ZW51ZS53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX3dpZHRoIC8gMlxuICAgICAgKSB7XG4gICAgICAgIC8vIGlmIHRhcmdldCBpbiBib3hcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldC5sb2MueCA+IHRoaXMudmVudWUubGVuZ3RoIC0gMTEgJiZcbiAgICAgICAgICB0YXJnZXQubG9jLnkgPlxuICAgICAgICAgICAgdGhpcy52ZW51ZS53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX3dpZHRoIC8gMyAmJlxuICAgICAgICAgIHRhcmdldC5sb2MueSA8XG4gICAgICAgICAgICB0aGlzLnZlbnVlLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyAzXG4gICAgICAgICkge1xuICAgICAgICAgIGNyb3NzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vY2FsY3VsYXRlIGFjY3VyYWN5XG4gICAgLy9hcHBseSBlcnJvciB0byB0YXJnZXRfY29vcmRzIGJhc2VkIG9uIHBhc3NpbmcgYWNjdXJhY3kgYW5kIGRpc3RhbmNlXG4gICAgLy8gd29yc2UgcGFzc2luZyBhY2N1cmFjeSBtZWFucyBhIGxhcmdlciBlcnJvciByYWRpdXNcbiAgICAvLyBtYXggcmFkaXVzOiAybVxuICAgIC8vIG1pbiByYWRpdXM6IC4zNW1cbiAgICBsZXQgZXJyb3JfcmFkaXVzID0gMC4zNSArIChwYXNzX2FjY3VyYWN5IC8gMTAwKSAqIDEuNjU7XG4gICAgLy8gcGljayByYW5kb20gcG9pbnQgaW4gdGhlIGNpcmNsZVxuICAgIGxldCByID0gTWF0aC5yYW5kb20oKSAqIGVycm9yX3JhZGl1cztcbiAgICBsZXQgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgdGFyZ2V0X2Nvb3Jkcy54ICs9IHIgKiBNYXRoLmNvcyh0aGV0YSk7XG4gICAgdGFyZ2V0X2Nvb3Jkcy55ICs9IHIgKiBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICAvLyBjYWx1Y2xhdGUgc3BlZWQgdG8gYXBwbHkgdG8gYmFsbFxuICAgIC8vIGJldHRlciBwYXNzaW5nIGFuZCB0ZWNobmlxdWUgbWVhbnMgZmFzdGVyIHBhc3NcbiAgICAvLyBtYXggc3BlZWQgPSAyNSBtL3NcbiAgICAvLyBtaW4gc3BlZWQgPSAxNSBtL3NcbiAgICAvLyBvcHRpbWFsIHNwZWVkIGlzIG9uZSB0aGF0IHRha2VzIDEgc2Vjb25kIHRvIHJlYWNoIHRhcmdldFxuXG4gICAgbGV0IG1heF9zcGVlZCA9IDE1ICsgKHBhc3NfYWNjdXJhY3kgLyAxMDApICogMTA7XG4gICAgbGV0IHNwZWVkID0gbWF4X3NwZWVkO1xuXG4gICAgbGV0IGRpc3RhbmNlID0gZGlzdCh0aGlzLmxvYywgdGFyZ2V0X2Nvb3Jkcyk7XG4gICAgbGV0IHRlY2huaXF1ZSA9IHRoaXMuYXR0cmlidXRlcy5nZXRfYXR0cihcInRlY2huaXF1ZVwiKTtcbiAgICBpZiAodGVjaG5pcXVlID09IHVuZGVmaW5lZCkge1xuICAgICAgdGVjaG5pcXVlID0gMjU7XG4gICAgfVxuICAgIGxldCBlcnJvcl9wbHVzX21pbnVzX3BlcmNlbnRhZ2UgPSAwLjE1IC0gKHRlY2huaXF1ZSAvIDEwMCkgKiAwLjE7XG4gICAgbGV0IG9wdGltYWxfc3BlZWQgPSBkaXN0YW5jZS8yO1xuICAgIHNwZWVkID0gb3B0aW1hbF9zcGVlZCAqICgxICsgZXJyb3JfcGx1c19taW51c19wZXJjZW50YWdlICogcmFuZF9pbl9yYW5nZSgtMSwxKSk7XG4gICAgXG4gICAgaWYgKHNwZWVkID4gbWF4X3NwZWVkKSB7XG4gICAgICBzcGVlZCA9IG1heF9zcGVlZDtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGR4LCBkeSwgZHpcbiAgICBsZXQgZHggPSAoKHRhcmdldF9jb29yZHMueCAtIHRoaXMubG9jLngpIC8gZCkgKiBzcGVlZDtcbiAgICBsZXQgZHkgPSAoKHRhcmdldF9jb29yZHMueSAtIHRoaXMubG9jLnkpIC8gZCkgKiBzcGVlZDtcbiAgICBsZXQgZHogPSAwO1xuICAgIGlmIChsb2IgfHwgY3Jvc3MpIHtcbiAgICAgIGR6ID0gKCh0YXJnZXRfY29vcmRzLnogLSB0aGlzLmxvYy56KSAvIGQpICogc3BlZWQ7XG4gICAgfVxuICAgIGR4IC89IDYwO1xuICAgIGR5IC89IDYwO1xuICAgIGlmIChsb2IgfHwgY3Jvc3MpIHtcbiAgICAgIGR6IC89IDYwO1xuICAgIH1cblxuICAgIHRoaXMuYXR0ZW1wdF9wYXNzKGR4LCBkeSwgZHopO1xuXG4gIH1cblxuICBjaG9vc2VfcGFzc190YXJnZXQodGVhbTogVGVhbSwgb3BwOiBUZWFtKSB7XG4gICAgbGV0IHBsYXllcnMgPSB0ZWFtLnBsYXllcnNPblBpdGNoLmZpbHRlcigocGxheWVyKSA9PiB7XG4gICAgICByZXR1cm4gcGxheWVyICE9IHRoaXM7XG4gICAgfSk7XG4gICAgLy8gdGFyZ2V0IHNjb3JlcyBmb3IgZWFjaCBvdGhlciBwbGF5ZXJcbiAgICAvLyBpbml0aWFsbHkgYXJyYXkgb2YgMTAgMCdzXG4gICAgbGV0IHNjb3JlcyA9IEFycmF5KDEwKS5maWxsKDApO1xuICAgIGZvciAobGV0IHAgb2YgcGxheWVycykge1xuICAgICAgbGV0IGQgPSBkaXN0KHRoaXMubG9jLCBwLmxvYyk7XG4gICAgICAvLyBub3JtYWwgZGlzdHJpYnV0aW9uIGJ5IGRpc3RhbmNlXG4gICAgICAvLyBpZiB0ZWFtIGluc3RydWN0aW9uIGlzIHNob3J0ZXIgcGFzc2luZywgcmVkdWNlIHRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgIC8vIGlmIHRlYW0gaW5zdHJ1Y3Rpb24gaXMgbG9uZ2VyIHBhc3NpbmcsIGluY3JlYXNlIHRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgIC8vIGlmIHBsYXllciBpbnN0cnVjdGlvbiBpcyBzaG9ydGVyIHBhc3NpbmcsIHJlZHVjZSB0aGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gICAgICAvLyBpZiBwbGF5ZXIgaW5zdHJ1Y3Rpb24gaXMgbG9uZ2VyIHBhc3NpbmcsIGluY3JlYXNlIHRoZSBzdGFuZGFyZCBkZXZpYXRpb25cblxuICAgICAgbGV0IHN0ZF9kZXYgPSAxO1xuICAgICAgaWYgKHRlYW0udGFjdGljcy5pbmNsdWRlcyhcInNob3J0ZXJfcGFzc2luZ1wiIGFzIFRlYW1JbnN0cnVjdGlvbikpIHtcbiAgICAgICAgLy8gcmVkdWNlIHN0YW5kYXJkIGRldmlhdGlvblxuICAgICAgICBzdGRfZGV2ID0gMC44O1xuICAgICAgfVxuXG4gICAgICBpZiAodGVhbS50YWN0aWNzLmluY2x1ZGVzKFwibG9uZ2VyX3Bhc3NpbmdcIiBhcyBUZWFtSW5zdHJ1Y3Rpb24pKSB7XG4gICAgICAgIC8vIGluY3JlYXNlIHN0YW5kYXJkIGRldmlhdGlvblxuICAgICAgICBzdGRfZGV2ID0gMS4yO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbnN0cnVjdGlvbnMuaW5jbHVkZXMoXCJzaG9ydGVyX3Bhc3NpbmdcIiBhcyBQbGF5ZXJJbnN0cnVjdGlvbikpIHtcbiAgICAgICAgc3RkX2RldiA9IHN0ZF9kZXYgLSAwLjE1O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbnN0cnVjdGlvbnMuaW5jbHVkZXMoXCJsb25nZXJfcGFzc2luZ1wiIGFzIFBsYXllckluc3RydWN0aW9uKSkge1xuICAgICAgICBzdGRfZGV2ID0gc3RkX2RldiArIDAuMTU7XG4gICAgICB9XG4gICAgICBzY29yZXNbcGxheWVycy5pbmRleE9mKHApXSArPSBNYXRoLmV4cChcbiAgICAgICAgKC0wLjUgKiAoZCAqIGQpKSAvIChzdGRfZGV2ICogc3RkX2RldilcbiAgICAgICk7XG5cbiAgICAgIC8vIHBsYXllcnMgdGhhdCB0aGUgcGFzc2VyIGlzIGN1cnJlbnRseSBmYWNpbmcgaGF2ZSBhIGhpZ2hlciBjaGFuY2Ugb2YgYmVpbmcgcGFzc2VkIHRvXG4gICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHAubG9jLnkgLSB0aGlzLmxvYy55LCBwLmxvYy54IC0gdGhpcy5sb2MueCk7XG4gICAgICBsZXQgZmFjaW5nID0gTWF0aC5hdGFuMih0aGlzLmR5LCB0aGlzLmR4KTtcbiAgICAgIGxldCBkaWZmID0gTWF0aC5hYnMoYW5nbGUgLSBmYWNpbmcpO1xuICAgICAgaWYgKGRpZmYgPCBNYXRoLlBJIC8gNCkge1xuICAgICAgICBzY29yZXNbcGxheWVycy5pbmRleE9mKHApXSArPSAxO1xuICAgICAgfVxuICAgICAgLy8gcGxheWVycyB1bmRlciBwcmVzc3VyZSBoYXZlIGEgbG93ZXIgY2hhbmNlIG9mIGJlaW5nIHBhc3NlZCB0b1xuICAgICAgbGV0IHByZXNzdXJlID0gcC5jYWxjdWxhdGVfcHJlc3N1cmUob3BwKTtcbiAgICAgIHNjb3Jlc1twbGF5ZXJzLmluZGV4T2YocCldIC09IHByZXNzdXJlO1xuICAgICAgLy8gcGxheWVycyBpbiBhIHRocmVhdGVuaW5nIHBvc2l0aW9uIGhhdmUgYSBoaWdoZXIgY2hhbmNlIG9mIGJlaW5nIHBhc3NlZCB0b1xuICAgICAgbGV0IHRocmVhdCA9IHAuY2FsY3VsYXRlX3RocmVhdCh0ZWFtKTtcbiAgICAgIHNjb3Jlc1twbGF5ZXJzLmluZGV4T2YocCldICs9IHRocmVhdDtcblxuICAgICAgLy8gc29ydCBzY29yZXNcbiAgICAgIHNjb3Jlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBiIC0gYTtcbiAgICAgIH0pO1xuXG4gICAgfVxuXG5cblxuICAgIC8vIHJhbmRvbWx5IGNob29zZSBwbGF5ZXJcbiAgICAvLyB1c2UgZGVjaXNpb24gbWFraW5nIGF0dHJpYnV0ZVxuICAgIC8vIHVzZSB0ZWFtIHRhY3RpY3NcbiAgICAvLyB1c2UgcGxheWVyIGluc3RydWN0aW9uc1xuXG4gICAgbGV0IGRlY2lzaW9ucyA9IHRoaXMuYXR0cmlidXRlcy5nZXRfYXR0cihcImRlY2lzaW9uc1wiKTtcbiAgICBpZiAoZGVjaXNpb25zID09IHVuZGVmaW5lZCkge1xuICAgICAgZGVjaXNpb25zID0gMjU7XG4gICAgfVxuXG4gICAgLy8gbG93ZXIgZGVjaXNpb25zIG1lYW5zIG1vcmUgZGV2aWF0aW9uZVxuICAgIC8vIG1heGltdW0gcmFuZG9tbmVzcyA9IDAuNVxuICAgIC8vIG1pbmltdW0gcmFuZG9tbmVzcyA9IDAuMVxuICAgIGxldCByYW5kb21uZXNzID0gMC41IC0gKGRlY2lzaW9ucyAvIDEwMCkgKiAwLjQ7XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tbmVzcyAqIDEwKTtcbiAgICBsZXQgdGFyZ2V0ID0gcGxheWVyc1tpbmRleF07XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGNhbGN1bGF0ZV9wcmVzc3VyZShvcHA6IFRlYW0pIHtcbiAgICBsZXQgb3Bwb25lbnRzID0gb3BwLnBsYXllcnNPblBpdGNoO1xuICAgIGxldCBwcmVzc3VyZSA9IDA7XG4gICAgb3Bwb25lbnRzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgbGV0IGQgPSBkaXN0KHRoaXMubG9jLCBwbGF5ZXIubG9jKTtcbiAgICAgIGlmIChkIDwgMTApIHtcbiAgICAgICAgaWYgKGQgPT0gMCApIHtcbiAgICAgICAgICBkICs9IDAuMTtcbiAgICAgICAgfVxuICAgICAgICBwcmVzc3VyZSArPSAxIC8gKGQgKiBkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJlc3N1cmU7XG4gIH1cblxuICBwYXNzaXZlX21vdmVtZW50KCkge1xuICAgIC8vIFwiYnJvd25pYW4gbW90aW9uXCIgZm9yIHBsYXllcnNcbiAgICAvLyByYW5kb21seSBtb3ZlIGFyb3VuZCBpbiBzbWFsbCByYWRpdXMgYXJvdW5kIGN1cnJlbnQgbG9jYXRpb25cblxuXG4gICAgbGV0IHJhZGl1cyA9IDAuMDU7XG4gICAgbGV0IHggPSB0aGlzLmxvYy54ICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogcmFkaXVzO1xuICAgIGxldCB5ID0gdGhpcy5sb2MueSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHJhZGl1cztcblxuICAgIC8vIGNoZWNrIGlmIG5ldyBsb2NhdGlvbiBpcyB3aXRoaW4gcGl0Y2hcbiAgICBpZiAoeCA8IDApIHtcbiAgICAgIHggPSAwO1xuICAgIH1cbiAgICBpZiAoeCA+IHRoaXMudmVudWUubGVuZ3RoKSB7XG4gICAgICB4ID0gdGhpcy52ZW51ZS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICh5IDwgMCkge1xuICAgICAgeSA9IDA7XG4gICAgfVxuICAgIGlmICh5ID4gdGhpcy52ZW51ZS53aWR0aCkge1xuICAgICAgeSA9IHRoaXMudmVudWUud2lkdGg7XG4gICAgfVxuXG4gICAgdGhpcy5sb2MgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHo6IHRoaXMubG9jLnosXG4gICAgfTtcbiAgfVxuXG4gIGNhbGN1bGF0ZV90aHJlYXQodGVhbTogVGVhbSkge1xuICAgIC8vIGRpc3RhbmNlIHRvIGdvYWxcbiAgICBsZXQgZGlyZWN0aW9uID0gdGVhbS5hdHRhY2tpbmdfZGlyZWN0aW9uO1xuICAgIGxldCBsZWZ0OiBDb29yZHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIsXG4gICAgICB6OiAwLFxuICAgIH07XG4gICAgbGV0IHJpZ2h0OiBDb29yZHMgPSB7XG4gICAgICB4OiB0aGlzLnZlbnVlLmxlbmd0aCxcbiAgICAgIHk6IHRoaXMudmVudWUud2lkdGggLyAyLFxuICAgICAgejogMCxcbiAgICB9O1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgLy9sZWZ0IHNpZGUgZ29hbFxuICAgICAgbGV0IGQgPSBkaXN0KHRoaXMubG9jLCBsZWZ0KTtcbiAgICAgIHJldHVybiAxIC8gKGQgKiBkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9yaWdodCBzaWRlIGdvYWxcbiAgICAgIGxldCBkID0gZGlzdCh0aGlzLmxvYywgcmlnaHQpO1xuICAgICAgcmV0dXJuIDEgLyAoZCAqIGQpO1xuICAgIH1cbiAgfVxuXG4gIHRocmVhdF9hdF9wb3NpdGlvbih0ZWFtOlRlYW0sIGxvYzpDb29yZHMpIHtcbiAgICAvLyBkaXN0YW5jZSB0byBnb2FsXG4gICAgbGV0IGRpcmVjdGlvbiA9IHRlYW0uYXR0YWNraW5nX2RpcmVjdGlvbjtcbiAgICBsZXQgbGVmdDogQ29vcmRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IHRoaXMudmVudWUud2lkdGggLyAyLFxuICAgICAgejogMCxcbiAgICB9O1xuICAgIGxldCByaWdodDogQ29vcmRzID0ge1xuICAgICAgeDogdGhpcy52ZW51ZS5sZW5ndGgsXG4gICAgICB5OiB0aGlzLnZlbnVlLndpZHRoIC8gMixcbiAgICAgIHo6IDAsXG4gICAgfTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJsZWZ0XCIpIHtcbiAgICAgIC8vbGVmdCBzaWRlIGdvYWxcbiAgICAgIGxldCBkID0gZGlzdChsb2MsIGxlZnQpO1xuICAgICAgcmV0dXJuIDEgLyAoZCAqIGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3JpZ2h0IHNpZGUgZ29hbFxuICAgICAgbGV0IGQgPSBkaXN0KGxvYywgcmlnaHQpO1xuICAgICAgcmV0dXJuIDEgLyAoZCAqIGQpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy50YXJnZXRfc3BlZWQgPSAwO1xuICAgIHRoaXMudGFyZ2V0X2xvYyA9ICAoXG4gICAgICB7IHg6IDEwNS8yLCB5OiA2OC8yLCB6OiAwIH1cbiAgICApO1xuICAgIHRoaXMubG9jID0geyB4OiA0MCwgeTogNTIsIHo6IDAgfTtcblxuICAgIHRoaXMuZHggPSAwO1xuICAgIHRoaXMuZHkgPSAwO1xuICAgIHRoaXMuZHogPSAwO1xuXG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVhbSBleHRlbmRzIENsdWIge1xuICBfcGxheWVyc09uUGl0Y2g6IFBsYXllck9uUGl0Y2hbXTtcbiAgX3N1YnN0aXR1dGVzOiBQbGF5ZXJbXTtcbiAgX2F0dGFja2luZ19kaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG4gIHRhY3RpY3M6IFRlYW1JbnN0cnVjdGlvbltdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMudGFjdGljcyA9IFtdO1xuICB9XG5cbiAgc2V0IHBsYXllcnNPblBpdGNoKHBsYXllcnM6IFBsYXllck9uUGl0Y2hbXSkge1xuICAgIHRoaXMuX3BsYXllcnNPblBpdGNoID0gcGxheWVycztcbiAgfVxuXG4gIGdldCBwbGF5ZXJzT25QaXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyc09uUGl0Y2g7XG4gIH1cblxuICBzZXQgc3Vic3RpdHV0ZXMoc3Vic3RpdHV0ZXM6IFBsYXllcltdKSB7XG4gICAgdGhpcy5fc3Vic3RpdHV0ZXMgPSBzdWJzdGl0dXRlcztcbiAgfVxuXG4gIHNldCBhdHRhY2tpbmdfZGlyZWN0aW9uKGRpcmVjdGlvbjogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpIHtcbiAgICB0aGlzLl9hdHRhY2tpbmdfZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0IGF0dGFja2luZ19kaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFja2luZ19kaXJlY3Rpb247XG4gIH1cblxuICBhZGRfaW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb246IFRlYW1JbnN0cnVjdGlvbikge1xuICAgIHRoaXMudGFjdGljcy5wdXNoKGluc3RydWN0aW9uKTtcbiAgfVxuXG4gIHJlbW92ZV9pbnN0cnVjdGlvbihpbnN0cnVjdGlvbjogVGVhbUluc3RydWN0aW9uKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy50YWN0aWNzLmluZGV4T2YoaW5zdHJ1Y3Rpb24pO1xuICAgIHRoaXMudGFjdGljcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZ2V0IGluc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YWN0aWNzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaCB7XG4gIHRpbWU6IG51bWJlcjtcbiAgaG9tZV9nb2FsczogbnVtYmVyO1xuICBhd2F5X2dvYWxzOiBudW1iZXI7XG4gIHN0YXJ0ZWQ6IGJvb2xlYW47XG4gIG1heF90aW1lOiBudW1iZXI7XG4gIG1heF8xc3RfaGFsZl90aW1lOiBudW1iZXI7XG4gIG1heF8ybmRfaGFsZl90aW1lOiBudW1iZXI7XG4gIGhhbGY6IDEgfCAyO1xuICBwb3NzaWJsZV9leHRyYV90aW1lOiBib29sZWFuO1xuICBpc19leHRyYV90aW1lOiBib29sZWFuO1xuICBleHRyYV90aW1lX2hhbGY6IDEgfCAyO1xuICBtYXhfMXN0X2hhbGZfZXh0cmFfdGltZTogbnVtYmVyO1xuICBtYXhfMm5kX2hhbGZfZXh0cmFfdGltZTogbnVtYmVyO1xuICBwb3NzaWJsZV9wZW5hbHRpZXM6IGJvb2xlYW47XG4gIGlzX3BlbmFsdGllczogYm9vbGVhbjtcbiAgcG9zc2Vzc2lvbjogVGVhbXxudWxsO1xuICBvdXRPZlBvc3Nlc3Npb246IFRlYW18bnVsbDtcbiAgcGxheWVyX3Bvc3Nlc3Npb246IFBsYXllck9uUGl0Y2ggfCBudWxsO1xuICB0aWNrczogbnVtYmVyO1xuICBjbG9ja190aWNrczogbnVtYmVyO1xuICB0ZWFtX2tpY2tlZF9vZmZfZmlyc3Q6IFRlYW07XG4gIGJhbGxfcG9zOiBDb29yZHM7XG4gIGJhbGxfZHg6IG51bWJlcjtcbiAgYmFsbF9keTogbnVtYmVyO1xuICBiYWxsX2R6OiBudW1iZXI7XG4gIGJhbGxfdGFyZ2V0OiBDb29yZHM7XG4gIF92ZW51ZTogVmVudWU7XG4gIFRPUF9MRUZUOiBDb29yZHM7XG4gIFRPUF9SSUdIVDogQ29vcmRzO1xuICBCT1RUT01fTEVGVDogQ29vcmRzO1xuICBCT1RUT01fUklHSFQ6IENvb3JkcztcbiAgX2hvbWU6IFRlYW07XG4gIF9hd2F5OiBUZWFtO1xuICBfZGF0ZV90aW1lOiBEYXRlO1xuICBiYWNrZ3JvdW5kOiBPZmZzY3JlZW5DYW52YXM7XG4gIGJhY2tncm91bmRDdHg6IEltYWdlQml0bWFwUmVuZGVyaW5nQ29udGV4dDtcbiAgYml0bWFwOiBJbWFnZUJpdG1hcDtcbiAgZm9yZWdyb3VuZDogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuICBwbGF5ZXJzT25QaXRjaDogUGxheWVyT25QaXRjaFtdO1xuICBzdGF0OlN0YXQ7XG5cbiAgc2V0IGhvbWUoaG9tZTogVGVhbSkge1xuICAgIHRoaXMuX2hvbWUgPSBob21lO1xuICB9XG4gIGdldCBob21lKCkge1xuICAgIHJldHVybiB0aGlzLl9ob21lO1xuICB9XG5cbiAgc2V0IGF3YXkoYXdheTogVGVhbSkge1xuICAgIHRoaXMuX2F3YXkgPSBhd2F5O1xuICB9XG4gIGdldCBhd2F5KCkge1xuICAgIHJldHVybiB0aGlzLl9hd2F5O1xuICB9XG5cbiAgc2V0IGRhdGVfdGltZShkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5fZGF0ZV90aW1lID0gZGF0ZTtcbiAgfVxuICBnZXQgZGF0ZV90aW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlX3RpbWU7XG4gIH1cblxuICBzZXQgdmVudWUodmVudWU6IFZlbnVlKSB7XG4gICAgdGhpcy5fdmVudWUgPSB2ZW51ZTtcbiAgfVxuICBnZXQgdmVudWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlbnVlO1xuICB9XG5cbiAgcmVjb3JkKHN0YXQ6c3RyaW5nLCBwbGF5ZXI6UGxheWVyT25QaXRjaCkge1xuICAgIHRoaXMuc3RhdC5yZWNvcmQoc3RhdCxwbGF5ZXIpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShydWxlczogTWFwPHN0cmluZywgYm9vbGVhbj4pIHtcbiAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgdGhpcy5ob21lX2dvYWxzID0gMDtcbiAgICB0aGlzLmF3YXlfZ29hbHMgPSAwO1xuICAgIHRoaXMubWF4X3RpbWUgPSA5MC4wICogNjAuMDtcbiAgICB0aGlzLnRpY2tzID0gMDtcbiAgICB0aGlzLlRPUF9MRUZUID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB6OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLlRPUF9SSUdIVCA9IHtcbiAgICAgIHg6IHRoaXMuX3ZlbnVlLmxlbmd0aCxcbiAgICAgIHk6IDAsXG4gICAgICB6OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLkJPVFRPTV9MRUZUID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IHRoaXMuX3ZlbnVlLndpZHRoLFxuICAgICAgejogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5CT1RUT01fUklHSFQgPSB7XG4gICAgICB4OiB0aGlzLl92ZW51ZS5sZW5ndGgsXG4gICAgICB5OiB0aGlzLl92ZW51ZS53aWR0aCxcbiAgICAgIHo6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuYmFsbF9wb3MgPSB7XG4gICAgICB4OiB0aGlzLnZlbnVlLmRpbWVuc2lvbnMua2lja29mZl9zcG90LngsXG4gICAgICB5OiB0aGlzLnZlbnVlLndpZHRoIC8gMixcbiAgICAgIHo6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuYmFsbF9keCA9IDAgLyA2MDtcbiAgICB0aGlzLmJhbGxfZHkgPSAwIC8gNjA7XG4gICAgdGhpcy5iYWxsX2R6ID0gMDtcblxuICAgIHRoaXMuYmFsbF90YXJnZXQgPSB7XG4gICAgICB4OiB0aGlzLnZlbnVlLmRpbWVuc2lvbnMua2lja29mZl9zcG90LngsXG4gICAgICB5OiB0aGlzLnZlbnVlLmRpbWVuc2lvbnMua2lja29mZl9zcG90LnksXG4gICAgICB6OiAwLFxuICAgIH1cblxuICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAocmFuZCA8IDAuNSkge1xuICAgICAgdGhpcy5ob21lLmF0dGFja2luZ19kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICB0aGlzLmF3YXkuYXR0YWNraW5nX2RpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhvbWUuYXR0YWNraW5nX2RpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgdGhpcy5hd2F5LmF0dGFja2luZ19kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgfVxuXG4gICAgdGhpcy5oYWxmID0gMTtcblxuICAgIHRoaXMubWF4XzFzdF9oYWxmX3RpbWUgPSA0NS4wICogNjAuMDtcbiAgICB0aGlzLm1heF8ybmRfaGFsZl90aW1lID0gNDUuMCAqIDYwLjA7XG5cbiAgICBpZiAocnVsZXMuZ2V0KFwiZXh0cmFfdGltZVwiKSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnBvc3NpYmxlX2V4dHJhX3RpbWUgPSB0cnVlO1xuICAgICAgdGhpcy5pc19leHRyYV90aW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmV4dHJhX3RpbWVfaGFsZiA9IDE7XG4gICAgICB0aGlzLm1heF8xc3RfaGFsZl9leHRyYV90aW1lID0gMTUuMCAqIDYwLjA7XG4gICAgICB0aGlzLm1heF8ybmRfaGFsZl9leHRyYV90aW1lID0gMTUuMCAqIDYwLjA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zc2libGVfZXh0cmFfdGltZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pc19leHRyYV90aW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmV4dHJhX3RpbWVfaGFsZiA9IDE7XG4gICAgICB0aGlzLm1heF8xc3RfaGFsZl9leHRyYV90aW1lID0gMDtcbiAgICAgIHRoaXMubWF4XzJuZF9oYWxmX2V4dHJhX3RpbWUgPSAwO1xuICAgIH1cbiAgICBpZiAocnVsZXMuZ2V0KFwicGVuYWx0aWVzXCIpID09IHRydWUpIHtcbiAgICAgIHRoaXMucG9zc2libGVfcGVuYWx0aWVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNfcGVuYWx0aWVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zc2libGVfcGVuYWx0aWVzID0gZmFsc2U7XG4gICAgICB0aGlzLmlzX3BlbmFsdGllcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuaG9tZS5wbGF5ZXJzT25QaXRjaC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci52ZW51ZSA9IHRoaXMudmVudWU7XG4gICAgICBwbGF5ZXIudGVhbSA9IHRoaXMuaG9tZTtcbiAgICAgIHBsYXllci5tID0gdGhpcztcbiAgICB9KTtcblxuICAgIHRoaXMuYXdheS5wbGF5ZXJzT25QaXRjaC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci52ZW51ZSA9IHRoaXMudmVudWU7XG4gICAgICBwbGF5ZXIudGVhbSA9IHRoaXMuYXdheTtcbiAgICAgIHBsYXllci5tID0gdGhpcztcbiAgICB9KTtcblxuICAgIHRoaXMucGxheWVyc09uUGl0Y2ggPSBbXG4gICAgICAuLi50aGlzLmhvbWUucGxheWVyc09uUGl0Y2gsXG4gICAgICAuLi50aGlzLmF3YXkucGxheWVyc09uUGl0Y2gsXG4gICAgXTtcblxuICAgIHRoaXMuc3RhdCA9IG5ldyBTdGF0KHRoaXMpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IE9mZnNjcmVlbkNhbnZhcyg5MDAsIDkwMCk7XG4gICAgZHJhd19waXRjaCh0aGlzLmJhY2tncm91bmQpO1xuICAgIHRoaXMuYml0bWFwID0gdGhpcy5iYWNrZ3JvdW5kLnRyYW5zZmVyVG9JbWFnZUJpdG1hcCgpO1xuICAgIGxldCBwaXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGl0Y2hcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcGl0Y2guaGVpZ2h0ID0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcbiAgICBwaXRjaC53aWR0aCA9IHRoaXMuYmFja2dyb3VuZC53aWR0aDtcbiAgICB0aGlzLmJhY2tncm91bmRDdHggPSBwaXRjaC5nZXRDb250ZXh0KFxuICAgICAgXCJiaXRtYXByZW5kZXJlclwiXG4gICAgKSBhcyBJbWFnZUJpdG1hcFJlbmRlcmluZ0NvbnRleHQ7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4LnRyYW5zZmVyRnJvbUltYWdlQml0bWFwKHRoaXMuYml0bWFwKTtcblxuICAgIHRoaXMuZm9yZWdyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5mb3JlZ3JvdW5kLmlkID0gXCJmb3JlZ3JvdW5kXCI7XG4gICAgdGhpcy5mb3JlZ3JvdW5kLndpZHRoID0gOTAwO1xuICAgIHRoaXMuZm9yZWdyb3VuZC5oZWlnaHQgPSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xuICAgIHBpdGNoLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHRoaXMuZm9yZWdyb3VuZCk7XG5cbiAgICB0aGlzLnVwZGF0ZV9jbG9jaygpO1xuICB9XG5cbiAgdXBkYXRlX2Nsb2NrKCkge1xuICAgIFxuICAgIGNvbnN0IGNsb2NrOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpO1xuICAgIGlmIChjbG9jaykge1xuICAgICAgY2xvY2suaW5uZXJIVE1MID0gdGhpcy5mbXRfc2Vjb25kcyh0aGlzLnRpbWUpO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjbG9jay5pbm5lckhUTUwgPSB0aGlzLmZtdF9zZWNvbmRzKHRoaXMudGltZSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBmbXRfc2Vjb25kcyhzZWNvbmRzOiBudW1iZXIpIHtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGNvbnN0IHNlY3MgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XG4gICAgLy8gcGFkIHNlY29uZHMgd2l0aCAwIGlmIGxlc3MgdGhhbiAxMFxuICAgIGlmIChzZWNzIDwgMTApIHtcbiAgICAgIHJldHVybiBgJHttaW51dGVzfTowJHtzZWNzfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHttaW51dGVzfToke3NlY3N9YDtcbiAgfVxuXG4gIHBsYXllcnNfZGVjaWRlKCkge1xuICAgIHRoaXMuYXdheS5wbGF5ZXJzT25QaXRjaC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5kZWNpZGVfYWN0aW9uKHRoaXMpO1xuICAgIH0pO1xuICAgIHRoaXMuaG9tZS5wbGF5ZXJzT25QaXRjaC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5kZWNpZGVfYWN0aW9uKHRoaXMpO1xuICAgIH0pO1xuICAgIFxuICB9XG5cbiAgLy8gdXBkYXRlIGJhbGwgcG9zc2Vzc2lvblxuICB1cGRhdGVfcG9zc2Vzc2lvbigpIHtcbiAgICBsZXQgY2xvc2VzdCA9IHRoaXMuY2xvc2VzdF90b19iYWxsKCk7XG4gICAgICAgIFxuICAgIC8vIGlmIHRoZSBiYWxsIGlzIG1vcmUgdGhhbiAybSBhd2F5IGZyb20gYW55IHBsYXllcnMsXG4gICAgLy8gcG9zc2Vzc2lvbiBpcyBudWxsXG4gICAgaWYgKGRpc3QoY2xvc2VzdFswXS5sb2MsIHRoaXMuYmFsbF9wb3MpID4gMiAmJiBkaXN0KGNsb3Nlc3RbMV0ubG9jLCB0aGlzLmJhbGxfcG9zKSA+IDIpIHtcbiAgICAgIHRoaXMucGxheWVyX3Bvc3Nlc3Npb24gPSBudWxsO1xuICAgICAgdGhpcy5zZXRfcG9zc2Vzc2lvbihudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbG9zZXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3QoYS5sb2MsIHRoaXMuYmFsbF9wb3MpIC0gZGlzdChiLmxvYywgdGhpcy5iYWxsX3Bvcyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheWVyX3Bvc3Nlc3Npb24gPSBjbG9zZXN0WzBdO1xuICAgICAgdGhpcy5zZXRfcG9zc2Vzc2lvbihjbG9zZXN0WzBdLnRlYW0pO1xuXG4gICAgfVxuICB9XG5cbiAgY2xvc2VzdF90b19iYWxsKCkge1xuICAgIGxldCBjbG9zZXN0OlBsYXllck9uUGl0Y2hbXSA9IFtdO1xuXG4gICAgbGV0IHRlbXA6IFBsYXllck9uUGl0Y2ggPSB0aGlzLmhvbWUucGxheWVyc09uUGl0Y2hbMF07XG4gICAgbGV0IG1pbl9kaXN0ID0gMTAwMDtcbiAgICBmb3IgKGxldCBwIG9mIHRoaXMuaG9tZS5wbGF5ZXJzT25QaXRjaCkge1xuICAgICAgbGV0IGQgPSBkaXN0KHAubG9jLCB0aGlzLmJhbGxfcG9zKTtcbiAgICAgIGlmIChkIDwgbWluX2Rpc3QpIHtcbiAgICAgICAgdGVtcCA9IHA7XG4gICAgICAgIG1pbl9kaXN0ID0gZDtcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvc2VzdC5wdXNoKHRlbXApO1xuICAgIG1pbl9kaXN0ID0gMTAwMDtcbiAgICBmb3IgKGxldCBwIG9mIHRoaXMuYXdheS5wbGF5ZXJzT25QaXRjaCkge1xuICAgICAgbGV0IGQgPSBkaXN0KHAubG9jLCB0aGlzLmJhbGxfcG9zKTtcbiAgICAgIGlmIChkIDwgbWluX2Rpc3QpIHtcbiAgICAgICAgdGVtcCA9IHA7XG4gICAgICAgIG1pbl9kaXN0ID0gZDtcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvc2VzdC5wdXNoKHRlbXApO1xuXG4gICAgcmV0dXJuIGNsb3Nlc3Q7XG5cbiAgfVxuXG4gIGNvbGxpc2lvbl9kZXRlY3Rpb24oKSB7XG4gICAgLy8gdHdvIHBsYXllcnMgY2FuJ3Qgb2NjdXB5IHRoZSBzYW1lIHNwYWNlXG5cbiAgICBsZXQgcmFkaXVzID0gMC44O1xuXG4gICAgZm9yIChsZXQgcCBvZiB0aGlzLnBsYXllcnNPblBpdGNoKSB7XG4gICAgICBmb3IgKGxldCBxIG9mIHRoaXMucGxheWVyc09uUGl0Y2hcbiAgICAgICAgLmZpbHRlcigocGxheWVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBsYXllciAhPSBwO1xuICAgICAgICB9KSkge1xuICAgICAgICBsZXQgZCA9IGRpc3QocC5sb2MsIHEubG9jKTtcbiAgICAgICAgaWYgKGQgPCByYWRpdXMpIHtcbiAgICAgICAgICAvLyBjb2xsaXNpb25cbiAgICAgICAgICAvLyBtb3ZlIHAgYW5kIHEgYXBhcnRcbiAgICAgICAgICBwLmxvYy54ICs9IChwLmxvYy54IC0gcS5sb2MueCkgLzg7XG4gICAgICAgICAgcC5sb2MueSArPSAocC5sb2MueSAtIHEubG9jLnkpIC84O1xuICAgICAgICAgIHEubG9jLnggKz0gKHEubG9jLnggLSBwLmxvYy54KSAvODtcbiAgICAgICAgICBxLmxvYy55ICs9IChxLmxvYy55IC0gcC5sb2MueSkgLzg7XG5cbiAgICAgICAgfVxuICAgICB9XG4gICB9XG5cbiAgIC8vIHBsYXllciBjYW4ndCBnbyBvZmYgdGhlIHNjcmVlblxuICAgIGZvciAobGV0IHAgb2YgdGhpcy5wbGF5ZXJzT25QaXRjaCkge1xuICAgICAgaWYgKHAubG9jLnggPCAwKSB7XG4gICAgICAgIHAubG9jLnggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHAubG9jLnggPiB0aGlzLnZlbnVlLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgICAgICBwLmxvYy54ID0gdGhpcy52ZW51ZS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAocC5sb2MueSA8IDApIHtcbiAgICAgICAgcC5sb2MueSA9IDA7XG4gICAgICB9XG4gICAgICBpZiAocC5sb2MueSA+IHRoaXMudmVudWUud2lkdGgpIHtcbiAgICAgICAgcC5sb2MueSA9IHRoaXMudmVudWUud2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgLy8gYmFsbCBjYW4ndCBiZSBpbnNpZGUgYSBwbGF5ZXJcbiAgbGV0IGJhbGxfcmFkaXVzID0gMC4yMjtcbiAgZm9yIChsZXQgcCBvZiB0aGlzLnBsYXllcnNPblBpdGNoKSB7XG4gICAgbGV0IGQgPSBkaXN0KHAubG9jLCB0aGlzLmJhbGxfcG9zKTtcbiAgICBpZiAoZCA8IGJhbGxfcmFkaXVzKSB7XG4gICAgICAvLyBjb2xsaXNpb25cbiAgICAgICAvL21vdmUgYmFsbCBhd2F5IGZyb20gcGxheWVyXG4gICAgICB0aGlzLmJhbGxfcG9zLnggKz0gKHRoaXMuYmFsbF9wb3MueCAtIHAubG9jLngpIC8gMjtcbiAgICAgIHRoaXMuYmFsbF9wb3MueSArPSAodGhpcy5iYWxsX3Bvcy55IC0gcC5sb2MueSkgLyAyO1xuICAgIH1cbiAgfVxuXG4gIH1cblxuICBtb3ZlX2JhbGwoKSB7XG4gICAgdGhpcy5iYWxsX3Bvcy54ICs9IHRoaXMuYmFsbF9keDtcbiAgICB0aGlzLmJhbGxfcG9zLnkgKz0gdGhpcy5iYWxsX2R5O1xuICAgIHRoaXMuYmFsbF9wb3MueiArPSB0aGlzLmJhbGxfZHo7XG5cbiAgICAvLyBjYWxjdWxhdGUgZGVjZWxyYXRpb25cbiAgICAvLyBtYXNzID0gMC40MyBrZ1xuICAgIC8vIGZyaWN0aW9uIGNvZWZmaWNpZW50ID0gMC4wM1xuICAgIC8vIGZfZnJpY3Rpb24gPSAwLjAzICogMC40MyBrZyAqIDkuODEgbS9zL3MgPSAwLjAxMjY1IGtnIG0vcy9zXG4gICAgLy8gZl9kcmFnID0gMC41ICogMC4wMyAqIHBpKigwLjExbSleMiAqIDEuMiBrZy9tXjMgKiB2ZWxvY2l0eV4yXG4gICAgLy8gdmVsb2NpdHkgPSBkeCAqIDYwICsgZHkgKiA2MCArIGR6ICogNjAgKG0vcylcbiAgICAvLyBmX3RvdGFsID0gZl9mcmljdGlvbiArIGZfZHJhZ1xuICAgIC8vIGEgPSBmX3RvdGFsIC8gbWFzc1xuXG4gICAgbGV0IGZfZnJpY3Rpb24gPSAwLjAxMjY1O1xuXG4gICAgbGV0IGZfZHJhZ194ID0gMC41ICogMC4wMyAqIE1hdGguUEkgKiAwLjExICogMC4xMSAqIDEuMiAqIHRoaXMuYmFsbF9keCp0aGlzLmJhbGxfZHg7XG4gICAgbGV0IGZfZHJhZ195ID0gMC41ICogMC4wMyAqIE1hdGguUEkgKiAwLjExICogMC4xMSAqIDEuMiAqIHRoaXMuYmFsbF9keSp0aGlzLmJhbGxfZHk7XG4gICAgbGV0IGZfZHJhZ196ID0gMC41ICogMC4wMyAqIE1hdGguUEkgKiAwLjExICogMC4xMSAqIDEuMiAqIHRoaXMuYmFsbF9keip0aGlzLmJhbGxfZHo7XG4gICAgbGV0IGZfdG90YWxfeCA9IGZfZnJpY3Rpb24gKyBmX2RyYWdfeDtcbiAgICBsZXQgZl90b3RhbF95ID0gZl9mcmljdGlvbiArIGZfZHJhZ195O1xuICAgIGxldCBmX3RvdGFsX3ogPSBmX2RyYWdfejtcbiAgICBsZXQgYV94ID0gZl90b3RhbF94IC8gMC40MztcbiAgICBsZXQgYV95ID0gZl90b3RhbF95IC8gMC40MztcbiAgICBsZXQgYV96ID0gZl90b3RhbF96IC8gMC40MztcblxuICAgIC8vIGNhbGN1bGF0ZSBuZXcgdmVsb2NpdHlcbiAgICAvLyB2ID0gdSArIGF0XG4gICAgLy8gdSA9IHYgLSBhdFxuICAgIC8vIHYgPSAwXG4gICAgLy8gdCA9IDEvNjBcblxuICAgIC8vYXBwbHkgYSB0byBkeCwgZHksIGR6XG4gICAgaWYgKHRoaXMuYmFsbF9keCA+IDApIHtcbiAgICAgIHRoaXMuYmFsbF9keCAtPSBhX3ggLyA2MDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFsbF9keCA8IDApIHtcbiAgICAgIHRoaXMuYmFsbF9keCArPSBhX3ggLyA2MDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmFsbF9keSA+IDApIHtcbiAgICAgIHRoaXMuYmFsbF9keSAtPSBhX3kgLyA2MDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFsbF9keSA8IDApIHtcbiAgICAgIHRoaXMuYmFsbF9keSArPSBhX3kgLyA2MDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmFsbF9keiA+IDApIHtcbiAgICAgIHRoaXMuYmFsbF9keiAtPSBhX3ogLyA2MDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFsbF9keiA8IDApIHtcbiAgICAgIHRoaXMuYmFsbF9keiArPSBhX3ogLyA2MDtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgLy8gaWYgdmVsb2NpdHkgaXMgdG9vIHNtYWxsLCBzZXQgdG8gMFxuXG4gICAgaWYgKHRoaXMuYmFsbF9keCA8IDAuMDIgJiYgdGhpcy5iYWxsX2R4ID4gLTAuMDIpIHtcbiAgICAgIHRoaXMuYmFsbF9keCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmJhbGxfZHkgPCAwLjAyICYmIHRoaXMuYmFsbF9keSA+IC0wLjAyKSB7XG4gICAgICB0aGlzLmJhbGxfZHkgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5iYWxsX2R6IDwgMC4wMiAmJiB0aGlzLmJhbGxfZHogPiAtMC4wMikge1xuICAgICAgdGhpcy5iYWxsX2R6ID0gMDtcbiAgICB9XG4gIH1cblxuICBtb3ZlX3BsYXllcnMoKSB7XG4gICAgdGhpcy5ob21lLnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLm1vdmUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmF3YXkucGxheWVyc09uUGl0Y2guZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBwbGF5ZXIubW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd19hZ2VudHMoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuZm9yZWdyb3VuZD8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICh0aGlzLmZvcmVncm91bmQpIHtcbiAgICAgIGN0eD8uY2xlYXJSZWN0KDAsIDAsIHRoaXMuZm9yZWdyb3VuZC53aWR0aCwgdGhpcy5mb3JlZ3JvdW5kLmhlaWdodCk7XG4gICAgICB0aGlzLmRyYXdfYmFsbCgpO1xuICAgICAgdGhpcy5kcmF3X3BsYXllcnMoKTtcbiAgICB9XG4gIH1cblxuICBkcmF3X2JhbGwoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGxldCBjdHggPSB0aGlzLmZvcmVncm91bmQ/LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGlmICh0aGlzLmZvcmVncm91bmQpIHtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmJhY2tncm91bmQud2lkdGg7XG4gICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcbiAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBsZXQgeCA9ICh0aGlzLmJhbGxfcG9zLnggLyB0aGlzLnZlbnVlLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgICAgICAgICBsZXQgeSA9ICh0aGlzLmJhbGxfcG9zLnkgLyB0aGlzLnZlbnVlLndpZHRoKSAqIHdpZHRoO1xuXG4gICAgICAgICAgICAvLyBpZiB6IGlzIGxhcmdlciB0aGFuIHRoZSByYWRpdXMgc2hvdWxkIGJlIGxhcmdlclxuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IDMuNDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGxfcG9zLnogPiAwKSB7XG4gICAgICAgICAgICAgIHJhZGl1cyArPSB0aGlzLmJhbGxfcG9zLnoqMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMtMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgbGV0IHRhcmdldF94ID0gKHRoaXMuYmFsbF90YXJnZXQueC90aGlzLnZlbnVlLmxlbmd0aCkqbGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHRhcmdldF95ID0gKHRoaXMuYmFsbF90YXJnZXQueS90aGlzLnZlbnVlLndpZHRoKSp3aWR0aDtcblxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGFyZ2V0X3gsIHRhcmdldF95LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdfcGxheWVycygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgbGV0IGN0eCA9IHRoaXMuZm9yZWdyb3VuZD8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgaWYgKHRoaXMuZm9yZWdyb3VuZCkge1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5iYWNrZ3JvdW5kLndpZHRoO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmhvbWUucGxheWVyc09uUGl0Y2guZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgbGV0IHggPSAocGxheWVyLmxvYy54IC8gdGhpcy52ZW51ZS5sZW5ndGgpICogbGVuZ3RoO1xuICAgICAgICAgIGxldCB5ID0gKHBsYXllci5sb2MueSAvIHRoaXMudmVudWUud2lkdGgpICogd2lkdGg7XG4gICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCwgeSwgNC40LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCAzLjQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hd2F5LnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICAgIGxldCB4ID0gKHBsYXllci5sb2MueCAvIHRoaXMudmVudWUubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICAgICAgICBsZXQgeSA9IChwbGF5ZXIubG9jLnkgLyB0aGlzLnZlbnVlLndpZHRoKSAqIHdpZHRoO1xuICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIDUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIDQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgXG4gICAgdGhpcy50aW1lICs9IDEgLyA2MDtcbiAgICB0aGlzLnRpY2tzICs9IDE7XG4gICAgaWYgKHRoaXMudGlja3MgPT0gMTApIHtcbiAgICAgIHRoaXMudXBkYXRlX3Bvc3Nlc3Npb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zc2Vzc2lvbj8ubmFtZSk7XG4gICAgICAvLyBodW1hbiByZWFjdGlvbiB0aW1lIGlzIHJvdWdobHlcbiAgICAgIC8vIGEgc2l4dGggb2YgYSBzZWNvbmQgc28gb25seVxuICAgICAgLy8gdXBkYXRlIGV2ZXJ5IDEwIHRpY2tzXG4gICAgICB0aGlzLnRpY2tzID0gMDtcbiAgICAgIHRoaXMucGxheWVyc19kZWNpZGUoKTtcbiAgICB9XG4gICAgdGhpcy5kcmF3X2FnZW50cygpO1xuICAgIHRoaXMuY29sbGlzaW9uX2RldGVjdGlvbigpO1xuICAgIHRoaXMubW92ZV9wbGF5ZXJzKCk7XG4gICAgdGhpcy5tb3ZlX2JhbGwoKTtcbiAgXG4gIH1cblxuICBnZXRLaWNrb2ZmUGxheWVyKHRlYW06IFRlYW0pIHtcbiAgICBsZXQgcGxheWVycyA9IHRlYW0ucGxheWVyc09uUGl0Y2g7XG5cbiAgICAvLyBpZiB0ZWFtIGhhcyBzdHJpa2VyXG4gICAgcGxheWVycyA9IHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgIHJldHVybiBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiU1RcIjtcbiAgICB9KTtcbiAgICBpZiAocGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAocGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGNob29zZSB0aGUgb25lIHdpdGggYmV0dGVyIHBhc3NpbmdcbiAgICAgICAgcGxheWVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIikgLSBiLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBsYXllcnNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNob29zZSBtb3N0IGF0dGFja2luZyBwbGF5ZXJcbiAgICAgIHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiTFdcIiB8fFxuICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJSV1wiXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIC8vIGNob29zZSB0aGUgb25lIHdpdGggYmV0dGVyIHBhc3NpbmdcbiAgICAgICAgICBwbGF5ZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpIC0gYi5nZXRfYXR0cmlidXRlKFwicGFzc2luZ1wiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIkNBTVwiIHx8XG4gICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiTEFNXCIgfHxcbiAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJSQU1cIlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gY2hvb3NlIHRoZSBvbmUgd2l0aCBiZXR0ZXIgcGFzc2luZ1xuICAgICAgICAgICAgcGxheWVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpIC0gYi5nZXRfYXR0cmlidXRlKFwicGFzc2luZ1wiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiQ01cIiB8fFxuICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiTE1cIiB8fFxuICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiUk1cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIC8vIGNob29zZSB0aGUgb25lIHdpdGggYmV0dGVyIHBhc3NpbmdcbiAgICAgICAgICAgICAgcGxheWVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIikgLSBiLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJzWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIkNETVwiIHx8XG4gICAgICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIkxDTVwiIHx8XG4gICAgICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIkNNXCIgfHxcbiAgICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiUkNNXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hvb3NlIHRoZSBvbmUgd2l0aCBiZXR0ZXIgcGFzc2luZ1xuICAgICAgICAgICAgICAgIHBsYXllcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRfYXR0cmlidXRlKFwicGFzc2luZ1wiKSAtIGIuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIilcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcnNbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJDRE1cIiB8fFxuICAgICAgICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIkxETVwiIHx8XG4gICAgICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiUkRNXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNob29zZSB0aGUgb25lIHdpdGggYmV0dGVyIHBhc3NpbmdcbiAgICAgICAgICAgICAgICAgIHBsYXllcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIikgLSBiLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcnNbMF07XG4gICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gcGxheWVyc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRfcG9zc2Vzc2lvbih0ZWFtOiBUZWFtfG51bGwpIHtcbiAgICBcbiAgICBpZiAodGVhbSBpbnN0YW5jZW9mIFRlYW0pIHtcbiAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IHRlYW07XG4gICAgICB0aGlzLm91dE9mUG9zc2Vzc2lvbiA9IHRlYW0gPT0gdGhpcy5ob21lID8gdGhpcy5hd2F5IDogdGhpcy5ob21lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsO1xuICAgICAgdGhpcy5vdXRPZlBvc3Nlc3Npb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGRvX2tpY2tvZmYoaGFsZjogYm9vbGVhbikge1xuICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGxldCB0ZWFtID0gMDtcbiAgICBpZiAoIWhhbGYpIHtcbiAgICAgIGlmIChyYW5kIDwgMC41KSB7XG4gICAgICAgIHRoaXMuc2V0X3Bvc3Nlc3Npb24odGhpcy5ob21lKTtcbiAgICAgICAgdGhpcy50ZWFtX2tpY2tlZF9vZmZfZmlyc3QgPSB0aGlzLmhvbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldF9wb3NzZXNzaW9uKHRoaXMuYXdheSk7XG4gICAgICAgIHRlYW0gPSAxO1xuICAgICAgICB0aGlzLnRlYW1fa2lja2VkX29mZl9maXJzdCA9IHRoaXMuYXdheTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudGVhbV9raWNrZWRfb2ZmX2ZpcnN0ID09IHRoaXMuaG9tZSkge1xuICAgICAgICB0aGlzLnNldF9wb3NzZXNzaW9uKHRoaXMuYXdheSk7XG4gICAgICAgIHRlYW0gPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRfcG9zc2Vzc2lvbih0aGlzLmhvbWUpO1xuICAgICAgICB0ZWFtID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHQgPSB0ZWFtID09IDAgPyB0aGlzLmhvbWUgOiB0aGlzLmF3YXk7XG4gICAgbGV0IG8gPSB0ZWFtID09IDAgPyB0aGlzLmF3YXkgOiB0aGlzLmhvbWU7XG4gICAgY29uc3QgcDEgPSB0aGlzLmdldEtpY2tvZmZQbGF5ZXIodCk7XG4gICAgcDEubG9jLnggPSB0aGlzLnZlbnVlLmRpbWVuc2lvbnMua2lja29mZl9zcG90Lng7XG4gICAgaWYgKHAxLnRlYW0uYXR0YWNraW5nX2RpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgcDEubG9jLnggLT0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDEubG9jLnggKz0gMTtcbiAgICB9XG4gICAgcDEubG9jLnkgPSB0aGlzLnZlbnVlLmRpbWVuc2lvbnMua2lja29mZl9zcG90Lnk7XG4gICAgdGhpcy5wbGF5ZXJfcG9zc2Vzc2lvbiA9IHAxO1xuICAgIHRoaXMucGxheWVyX3Bvc3Nlc3Npb24ucGFzcyh0LCBvKTtcbiAgfVxuXG4gIGFzeW5jIHBsYXkoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKFxuICAgICAgbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KFtcbiAgICAgICAgW1wiZXh0cmFfdGltZVwiLCBmYWxzZV0sXG4gICAgICAgIFtcInBlbmFsdGllc1wiLCBmYWxzZV0sXG4gICAgICBdKVxuICAgICk7XG4gICAgd2hpbGUgKHRoaXMuaGFsZiA9PSAxICYmIHRoaXMudGltZSA8IHRoaXMubWF4XzFzdF9oYWxmX3RpbWUpIHtcbiAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgIHRoaXMuZG9fa2lja29mZihmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBsZXQgbm93ID0gRGF0ZVRpbWUubm93KCk7XG4gICAgICB0aGlzLnRpY2soKTtcbiAgICAgIGlmIChEYXRlVGltZS5ub3coKS5kaWZmKG5vdykubWlsbGlzZWNvbmRzIDwgMTAwMCAvIDYwKSB7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PlxuICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCAvIDYwIC0gRGF0ZVRpbWUubm93KCkuZGlmZihub3cpLm1pbGxpc2Vjb25kcylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5oYWxmID0gMjtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAodGhpcy5oYWxmID09IDIgJiYgdGhpcy50aW1lIDwgdGhpcy5tYXhfMm5kX2hhbGZfdGltZSkge1xuICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgdGhpcy5kb19raWNrb2ZmKHRydWUpO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbGV0IG5vdyA9IERhdGVUaW1lLm5vdygpO1xuICAgICAgdGhpcy50aWNrKCk7XG4gICAgICBpZiAoRGF0ZVRpbWUubm93KCkuZGlmZihub3cpLm1pbGxpc2Vjb25kcyA8IDEwMDAgLyA2MCkge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAgLyA2MCAtIERhdGVUaW1lLm5vdygpLmRpZmYobm93KS5taWxsaXNlY29uZHMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc3NpYmxlX2V4dHJhX3RpbWUpIHtcbiAgICAgIGlmICh0aGlzLmhvbWVfZ29hbHMgPT0gdGhpcy5hd2F5X2dvYWxzKSB7XG4gICAgICAgIHRoaXMuZXh0cmFfdGltZV9oYWxmID0gMTtcbiAgICAgICAgdGhpcy5pc19leHRyYV90aW1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICB0aGlzLmV4dHJhX3RpbWVfaGFsZiA9PSAxICYmXG4gICAgICAgICAgdGhpcy50aW1lIDwgdGhpcy5tYXhfMXN0X2hhbGZfZXh0cmFfdGltZVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5kb19raWNrb2ZmKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBub3cgPSBEYXRlVGltZS5ub3coKTtcbiAgICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgICBpZiAoRGF0ZVRpbWUubm93KCkuZGlmZihub3cpLm1pbGxpc2Vjb25kcyA8IDEwMDAgLyA2MCkge1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAxMDAwIC8gNjAgLSBEYXRlVGltZS5ub3coKS5kaWZmKG5vdykubWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXh0cmFfdGltZV9oYWxmID0gMjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICB0aGlzLmV4dHJhX3RpbWVfaGFsZiA9PSAyICYmXG4gICAgICAgICAgdGhpcy50aW1lIDwgdGhpcy5tYXhfMm5kX2hhbGZfZXh0cmFfdGltZVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5kb19raWNrb2ZmKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG5vdyA9IERhdGVUaW1lLm5vdygpO1xuICAgICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICAgIGlmIChEYXRlVGltZS5ub3coKS5kaWZmKG5vdykubWlsbGlzZWNvbmRzIDwgMTAwMCAvIDYwKSB7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIDEwMDAgLyA2MCAtIERhdGVUaW1lLm5vdygpLmRpZmYobm93KS5taWxsaXNlY29uZHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXQge1xuICBwbGF5ZXJfc3RhdHM6UGxheWVyTWF0Y2hTdGF0cztcblxuICBjb25zdHJ1Y3RvciAobWF0Y2g6TWF0Y2gpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgdGhpcy5wbGF5ZXJfc3RhdHMgPSBuZXcgUGxheWVyTWF0Y2hTdGF0cygpO1xuICAgIGZvciAobGV0IF8gb2YgbWF0Y2gucGxheWVyc09uUGl0Y2gpIHtcbiAgICAgIHRoaXMucGxheWVyX3N0YXRzLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJlY29yZChzdGF0OnN0cmluZywgdHlwZTpQbGF5ZXJ8VGVhbSkge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICAvLyByZWNvcmQgcGxheWVyIHN0YXRcbiAgICAgIHRoaXMucGxheWVyX3N0YXRzLnJlY29yZChzdGF0KTtcblxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBQbGF5ZXJNYXRjaFN0YXRzIHtcbiAgX2lkOiBudW1iZXI7XG4gIF9zdGF0czogTWFwPG51bWJlciwgUGxheWVyU3RhdHM+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2lkID0gMDtcbiAgICB0aGlzLl9zdGF0cyA9IG5ldyBNYXAoKTtcbiAgfVxuICBwdXNoKGlkOm51bWJlcikge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5fc3RhdHMuc2V0KGlkLHtcbiAgICAgIGdvYWxzOiAwLFxuICAgICAgYXNzaXN0czogMCxcbiAgICAgIHBhc3Nlc19hdHRlbXB0ZWQ6IDAsXG4gICAgICBwYXNzZXNfY29tcGxldGVkOiAwLFxuICAgICAgc2hvdHM6IDAsXG4gICAgICBzaG90c19vbl90YXJnZXQ6IDAsXG4gICAgICB0YWNrbGVzX2F0dGVtcHRlZDogMCxcbiAgICAgIHRhY2tsZXNfY29tcGxldGVkOiAwLFxuICAgICAgaW50ZXJjZXB0aW9uczogMCxcbiAgICAgIGZvdWxzOiAwLFxuICAgICAgZm91bHNfc3VmZmVyZWQ6IDAsXG4gICAgICB5ZWxsb3dfY2FyZHM6IDAsXG4gICAgICByZWRfY2FyZHM6IDAsXG4gICAgICBzYXZlczogMCxcbiAgICAgIGdvYWxzX2NvbmNlZGVkOiAwLFxuICAgICAgY2xlYW5fc2hlZXRzOiAwLFxuICAgICAgcGVuYWx0aWVzX3Njb3JlZDogMCxcbiAgICAgIHBlbmFsdGllc19taXNzZWQ6IDAsXG4gICAgICBwZW5hbHRpZXNfc2F2ZWQ6IDAsXG4gICAgICBvd25fZ29hbHM6IDAsXG4gICAgICBtaW51dGVzX3BsYXllZDogMCxcbiAgICAgIHhHOiAwLFxuICAgICAgeEE6IDAsXG4gICAgfSk7XG4gIH1cblxuICByZWNvcmQoc3RhdDpzdHJpbmcpIHtcbiAgICBsZXQgcyA9IHRoaXMuX3N0YXRzLmdldCh0aGlzLl9pZCk7XG4gICAgaWYgKHMpIHtcbiAgICAgIGlmIChzdGF0ID09IFwicGFzc2VzX2F0dGVtcHRlZFwiKSB7XG4gICAgICAgIHMucGFzc2VzX2F0dGVtcHRlZCArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXQgPT0gXCJwYXNzZXNfY29tcGxldGVkXCIpIHtcbiAgICAgICAgcy5wYXNzZXNfY29tcGxldGVkICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdCA9PSBcInNob3RzXCIpIHtcbiAgICAgICAgcy5zaG90cyArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXQgPT0gXCJzaG90c19vbl90YXJnZXRcIikge1xuICAgICAgICBzLnNob3RzX29uX3RhcmdldCArPSAxO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTWF0Y2gsIFRlYW0sIFBsYXllck9uUGl0Y2ggfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXIsIFBvc2l0aW9uLCBSb2xlIH0gZnJvbSBcIi4vcGVyc29uXCI7XG5pbXBvcnQgeyBDaXR5LCBDb3VudHJ5LCBQaXRjaERpbWVuc2lvbnMsIFZlbnVlIH0gZnJvbSBcIi4vcGxhY2VcIjtcbmltcG9ydCB7IEF0dHJpYnV0ZSwgT3V0ZmllbGRBdHRyaWJ1dGUsIEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9wZXJzb25cIjtcbmltcG9ydCB7IG1ldGVyc190b19weCB9IGZyb20gXCIuLi9jb21tb24vaGVscGVyc1wiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCB7IFBvbHlnb24sIGF0dHJpYnV0ZV9uYW1lcywgZ2tfYXR0cmlidXRlX25hbWVzIH0gZnJvbSBcIi4uL2NvbW1vbi90eXBlc1wiO1xuXG5jb25zdCB0ZWFtMSA9IG5ldyBUZWFtKFwiQmFyY2Vsb25hXCIpO1xuY29uc3QgdGVhbTIgPSBuZXcgVGVhbShcIlJlYWwgTWFkcmlkXCIpO1xuY29uc3QgbWF0Y2ggPSBuZXcgTWF0Y2goKTtcbmNvbnN0IHZlbnVlID0gbmV3IFZlbnVlKCk7XG52ZW51ZS5waXRjaF9kaW1lbnNpb25zID0gWzEwNSwgNjhdO1xubWF0Y2gudmVudWUgPSB2ZW51ZTtcbnZlbnVlLm5hbWUgPSBcIkNhbXAgTm91XCI7XG52ZW51ZS5jYXBhY2l0eSA9IDk5MzU0O1xuY29uc3QgY2l0eSA9IG5ldyBDaXR5KCk7XG5jaXR5Lm5hbWUgPSBcIkJhcmNlbG9uYVwiO1xuY29uc3QgY291bnRyeSA9IG5ldyBDb3VudHJ5KCk7XG5jb3VudHJ5Lm5hbWUgPSBcIlNwYWluXCI7XG5jaXR5LmNvdW50cnkgPSBjb3VudHJ5O1xudmVudWUuY2l0eSA9IGNpdHk7XG5cbmNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgeyBuYW1lOiBcIkdvYWxrZWVwZXJcIiwgYWJicmV2aWF0aW9uOiBcIkdLXCIgfSxcbiAgeyBuYW1lOiBcIkxlZnQgQmFja1wiLCBhYmJyZXZpYXRpb246IFwiTEJcIiB9LFxuICB7IG5hbWU6IFwiUmlnaHQgQmFja1wiLCBhYmJyZXZpYXRpb246IFwiUkJcIiB9LFxuICB7IG5hbWU6IFwiUmlnaHQgQ2VudGVyIEJhY2tcIiwgYWJicmV2aWF0aW9uOiBcIlJDQlwiIH0sXG4gIHsgbmFtZTogXCJMZWZ0IENlbnRlciBCYWNrXCIsIGFiYnJldmlhdGlvbjogXCJMQ0JcIiB9LFxuICB7IG5hbWU6IFwiRGVmZW5zaXZlIE1pZGZpZWxkZXJcIiwgYWJicmV2aWF0aW9uOiBcIkRNXCIgfSxcbiAgeyBuYW1lOiBcIlJpZ2h0IENlbnRyYWwgTWlkZmllbGRlclwiLCBhYmJyZXZpYXRpb246IFwiUkNNXCIgfSxcbiAgeyBuYW1lOiBcIkxlZnQgQ2VudHJhbCBNaWRmaWVsZGVyXCIsIGFiYnJldmlhdGlvbjogXCJMQ01cIiB9LFxuICB7IG5hbWU6IFwiTGVmdCBXaW5nZXJcIiwgYWJicmV2aWF0aW9uOiBcIkxXXCIgfSxcbiAgeyBuYW1lOiBcIlJpZ2h0IFdpbmdlclwiLCBhYmJyZXZpYXRpb246IFwiUldcIiB9LFxuICB7IG5hbWU6IFwiU3RyaWtlclwiLCBhYmJyZXZpYXRpb246IFwiU1RcIiB9LFxuXTtcblxubGV0IHBsYXllcnMxOiBQbGF5ZXJPblBpdGNoW10gPSBbXTtcbmxldCBwbGF5ZXJzMjogUGxheWVyT25QaXRjaFtdID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjI7IGkrKykge1xuICBjb25zdCBwID0gbmV3IFBsYXllck9uUGl0Y2goKTtcbiAgcC5uYW1lID0gXCJQbGF5ZXIgXCIgKyBpO1xuICBwLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCk7XG4gIHAucG9zaXRpb24ubmFtZSA9IHBvc2l0aW9uc1tpICUgMTFdLm5hbWU7XG4gIHAucG9zaXRpb24uYWJicmV2aWF0aW9uID0gcG9zaXRpb25zW2kgJSAxMV0uYWJicmV2aWF0aW9uO1xuICBwLmluaXRpYWxpemUoKTtcbiAgaWYgKGkgPCAxMSkge1xuICAgIHBsYXllcnMxLnB1c2gocCk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyczIucHVzaChwKTtcbiAgfVxufVxuXG50ZWFtMS5wbGF5ZXJzT25QaXRjaCA9IHBsYXllcnMxO1xudGVhbTIucGxheWVyc09uUGl0Y2ggPSBwbGF5ZXJzMjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyMjsgaSsrKSB7XG4gIGxldCBwMTogUGxheWVyT25QaXRjaDtcbiAgaWYgKGkgPCAxMSkge1xuICAgIHAxID0gdGVhbTEucGxheWVyc09uUGl0Y2hbaV07XG4gIH0gZWxzZSB7XG4gICAgcDEgPSB0ZWFtMi5wbGF5ZXJzT25QaXRjaFtpIC0gMTFdO1xuICB9XG5cbiAgcDEuYXR0cmlidXRlcyA9IG5ldyBBdHRyaWJ1dGVzKCk7XG5cbiAgbGV0IGlzX2drID0gZmFsc2U7XG4gIGlmIChwMS5wb3NpdGlvbi5uYW1lID09PSBcIkdvYWxrZWVwZXJcIikge1xuICAgIGlzX2drID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXNfZ2spIHtcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGdrX2F0dHJpYnV0ZV9uYW1lcy5sZW5ndGg7IGErKykge1xuICAgICAgcDEuYXR0cmlidXRlcy5zZXRfYXR0cihcbiAgICAgICAgZ2tfYXR0cmlidXRlX25hbWVzW2FdLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMVxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRyaWJ1dGVfbmFtZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgIHAxLmF0dHJpYnV0ZXMuc2V0X2F0dHIoXG4gICAgICAgIGF0dHJpYnV0ZV9uYW1lc1thXSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDFcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZlbnVlLmluaXRfcGl0Y2hfZGltZW5zaW9ucygpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd19waXRjaChjYW52YXM6IE9mZnNjcmVlbkNhbnZhcykge1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoY3R4KSB7XG4gICAgY29uc3QgbGVuZ3RoID0gODAwO1xuICAgIGNvbnN0IHdpZHRoID0gdmVudWUuZGltZW5zaW9ucy53aWR0aCAqIChsZW5ndGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCk7XG4gICAgY2FudmFzLndpZHRoID0gbGVuZ3RoICsgMTAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aWR0aCArIDEwMDtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBhZTAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwYWUwMFwiO1xuICAgIGN0eC5maWxsUmVjdCg1MCwgNTAsIGxlbmd0aCwgd2lkdGgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMS41O1xuICAgIGN0eC5yZWN0KDUwLCA1MCwgbGVuZ3RoLCB3aWR0aCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gZHJhdyB3aGl0ZSBjZW50ZXIgbGluZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGxlbmd0aCAvIDIgKyA1MCwgNTApO1xuICAgIGN0eC5saW5lVG8obGVuZ3RoIC8gMiArIDUwLCB3aWR0aCArIDUwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBjZW50ZXIgY2lyY2xlXG4gICAgY29uc3QgcmFkaXVzID1cbiAgICAgIChQaXRjaERpbWVuc2lvbnMuY2VudGVyX2NpcmNsZV9yYWRpdXMgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMobGVuZ3RoIC8gMiArIDUwLCB3aWR0aCAvIDIgKyA1MCwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIGRyYXcga2lja29mZiBzcG90XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggLyAyICsgNTAsIHdpZHRoIC8gMiArIDUwLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBwZW5hbHR5IGFyZWFcbiAgICBsZXQgeDEgPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIGxldCB5MSA9XG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIHZlbnVlLmRpbWVuc2lvbnMud2lkdGgpICogd2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KDUwLCB3aWR0aCAvIDIgLSB5MSAvIDIgKyA1MCwgeDEsIHkxKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBwZW5hbHR5IHNwb3RcbiAgICB4MSA9XG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfc3BvdF9kaXN0YW5jZSAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqXG4gICAgICAgIGxlbmd0aCArXG4gICAgICA1MDtcbiAgICB5MSA9IHdpZHRoIC8gMiArIDUwO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgxLCB5MSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIGRyYXcgd2hpdGUgc2l4IHlhcmQgYm94XG4gICAgeDEgPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIHkxID0gKFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCg1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIGRyYXcgd2hpdGUgZ29hbCBhcmVhXG4gICAgeDEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfZGVwdGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgeTEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxSZWN0KDUwIC0geDEsIHdpZHRoIC8gMiAtIHkxIC8gMiArIDUwLCB4MSwgeTEpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCg1MCAtIHgxLCB3aWR0aCAvIDIgLSB5MSAvIDIgKyA1MCwgeDEsIHkxKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvL2RyYXcgY29ybmVyIGFyY1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBvbmVfbWV0ZXIgPSAoMSAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICBjdHguYXJjKDUwLCA1MCwgb25lX21ldGVyLCAwLCAoMSAvIDIpICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vb3RoZXIgY29ybmVyIGFyY1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKDUwLCB3aWR0aCArIDUwLCBvbmVfbWV0ZXIsIDAsICgzIC8gMikgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBvdGhlciBzaWRlXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMobGVuZ3RoICsgNTAsIDUwLCBvbmVfbWV0ZXIsICgxIC8gMikgKiBNYXRoLlBJLCBNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggKyA1MCwgd2lkdGggKyA1MCwgb25lX21ldGVyLCBNYXRoLlBJLCAoMyAvIDIpICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgeDEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfZGVwdGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgeTEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChsZW5ndGggKyA1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIHgxID1cbiAgICAgIChQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X2xlbmd0aCAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICB5MSA9IChQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gdmVudWUuZGltZW5zaW9ucy53aWR0aCkgKiB3aWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QobGVuZ3RoIC0geDEgKyA1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgeDEgPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X3Nwb3RfZGlzdGFuY2UgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKlxuICAgICAgbGVuZ3RoO1xuICAgIHkxID0gd2lkdGggLyAyICsgNTA7XG5cbiAgICBjb25zdCBwZW5fc3BvdDIgPSBbXG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfc3BvdF9kaXN0YW5jZSAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqXG4gICAgICAgIGxlbmd0aCxcbiAgICAgIHdpZHRoIC8gMiArIDUwLFxuICAgIF07XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMobGVuZ3RoIC0geDEgKyA1MCwgeTEsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIHgxID1cbiAgICAgIChQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX2xlbmd0aCAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICB5MSA9IChQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX3dpZHRoIC8gdmVudWUuZGltZW5zaW9ucy53aWR0aCkgKiB3aWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QobGVuZ3RoIC0geDEgKyA1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gcGVuYWx0eSBhcmNzXG4gICAgY29uc3QgcGVuX3JhZGl1cyA9XG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJjX3JhZGl1cyAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICBsZXQgeCA9XG4gICAgICBsZW5ndGggLVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoICtcbiAgICAgIDUwO1xuXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2lyY3VsYXJfc2VnbWVudCNSYWRpdXNfYW5kX2NlbnRyYWxfYW5nbGVcbiAgICBjb25zdCBjaG9yZF9sZW5ndGggPSAoNS40MTkgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG5cbiAgICB5MSA9IHdpZHRoIC8gMiArIGNob3JkX2xlbmd0aCArIDUwO1xuICAgIGNvbnN0IHkyID0gd2lkdGggLyAyIC0gY2hvcmRfbGVuZ3RoICsgNTA7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5tb3ZlVG8oeCwgeTEpO1xuICAgIGN0eC5hcmNUbyhcbiAgICAgIHggLSBtZXRlcnNfdG9fcHgoMy42NSwgdmVudWUuZGltZW5zaW9ucy5sZW5ndGgsIGxlbmd0aCksXG4gICAgICB3aWR0aCAvIDIgKyA1MCxcbiAgICAgIHgsXG4gICAgICB5MixcbiAgICAgIHBlbl9yYWRpdXNcbiAgICApO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIHggPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoICtcbiAgICAgIDUwO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkxKTtcbiAgICBjdHguYXJjVG8oXG4gICAgICB4ICsgbWV0ZXJzX3RvX3B4KDMuNjUsIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoLCBsZW5ndGgpLFxuICAgICAgd2lkdGggLyAyICsgNTAsXG4gICAgICB4LFxuICAgICAgeTIsXG4gICAgICBwZW5fcmFkaXVzXG4gICAgKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn1cblxubWF0Y2guaG9tZSA9IHRlYW0xO1xubWF0Y2guYXdheSA9IHRlYW0yO1xubWF0Y2gucGxheSgpO1xuXG5pbXBvcnQgeyBQaXRjaEFyZWEgfSBmcm9tIFwiLi4vY29tbW9uL3R5cGVzXCI7XG4vL2xldCBhcmVhcyA9IG5ldyBQaXRjaEFyZWEoKTtcbi8vbGV0IGdrX2FyZWEgPSBQaXRjaEFyZWEuXG4iLCJpbXBvcnQgeyBDb3VudHJ5LCBDaXR5IH0gZnJvbSBcIi4vcGxhY2VcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5cbmNsYXNzIFBlcnNvbiB7XG4gIF9uYW1lOiBzdHJpbmc7XG4gIF9kb2I6IERhdGVUaW1lO1xuICBfbmF0aW9uYWxpdGllczogQ291bnRyeVtdO1xuICBfcGxhY2Vfb2ZfYmlydGg6IENpdHk7XG4gIF9oZWlnaHQ6IG51bWJlcjtcbiAgX3dlaWdodDogbnVtYmVyO1xuXG4gIHNldCBuYW1lKG5hbWUpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IGRvYihkb2I6IERhdGVUaW1lKSB7XG4gICAgdGhpcy5fZG9iID0gZG9iO1xuICB9XG5cbiAgZ2V0IGRvYigpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9iO1xuICB9XG5cbiAgY2FsY3VsYXRlX2FnZShub3c6IERhdGVUaW1lKSB7XG4gICAgLy8gY2FsY3VsYXRlIGFnZSAoeWVhcnMgYW5kIGRheXMpXG4gICAgY29uc29sZS5sb2cobm93KTtcbiAgICBjb25zdCBkaWZmID0gbm93LmRpZmYodGhpcy5fZG9iLCBbXCJ5ZWFyc1wiLCBcImRheXNcIl0pO1xuICAgIHJldHVybiBkaWZmLnllYXJzICsgXCIgeWVhcnMsIFwiICsgZGlmZi5kYXlzICsgXCIgZGF5c1wiO1xuICB9XG5cbiAgc2V0IG5hdGlvbmFsaXRpZXMobmF0aW9uYWxpdGllczogQ291bnRyeVtdKSB7XG4gICAgdGhpcy5fbmF0aW9uYWxpdGllcyA9IG5hdGlvbmFsaXRpZXM7XG4gIH1cblxuICBnZXQgbmF0aW9uYWxpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF0aW9uYWxpdGllcztcbiAgfVxuXG4gIHNldCBwbGFjZV9vZl9iaXJ0aChwbGFjZV9vZl9iaXJ0aDogQ2l0eSkge1xuICAgIHRoaXMuX3BsYWNlX29mX2JpcnRoID0gcGxhY2Vfb2ZfYmlydGg7XG4gIH1cblxuICBnZXQgcGxhY2Vfb2ZfYmlydGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlX29mX2JpcnRoO1xuICB9XG5cbiAgc2V0IGhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHNldCB3ZWlnaHQod2VpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLl93ZWlnaHQgPSB3ZWlnaHQ7XG4gIH1cblxuICBnZXQgd2VpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl93ZWlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgT3V0ZmllbGRBdHRyaWJ1dGUgPVxuICB8IFwicGFjZVwiXG4gIHwgXCJhY2NlbGVyYXRpb25cIlxuICB8IFwiYWdpbGl0eVwiXG4gIHwgXCJhZ2dyZXNzaW9uXCJcbiAgfCBcImJhbGFuY2VcIlxuICB8IFwiZHJpYmJsaW5nXCJcbiAgfCBcInRlY2huaXF1ZVwiXG4gIHwgXCJmaW5pc2hpbmdcIlxuICB8IFwicGFzc2luZ1wiXG4gIHwgXCJ2aXNpb25cIlxuICB8IFwidGFja2xpbmdcIlxuICB8IFwiaGVhZGluZ1wiXG4gIHwgXCJzdHJlbmd0aFwiXG4gIHwgXCJzdGFtaW5hXCJcbiAgfCBcInBvc2l0aW9uaW5nXCJcbiAgfCBcIm1vdmVtZW50XCJcbiAgfCBcImRlY2lzaW9uc1wiXG4gIHwgXCJmbGFpclwiXG4gIHwgXCJuYXR1cmFsX2ZpdG5lc3NcIlxuICB8IFwid29ya19yYXRlXCJcbiAgfCBcImRldGVybWluYXRpb25cIlxuICB8IFwibGVhZGVyc2hpcFwiXG4gIHwgXCJ0ZWFtd29ya1wiXG4gIHwgXCJqdW1waW5nXCJcbiAgfCBcInJlYWN0aW9uc1wiO1xuXG5leHBvcnQgdHlwZSBHb2Fsa2VlcGVyQXR0cmlidXRlcyA9XG4gIHwgXCJoYW5kbGluZ1wiXG4gIHwgXCJyZWFjdGlvbnNcIlxuICB8IFwib25lX29uX29uZXNcIlxuICB8IFwicnVzaGluZ19vdXRcIlxuICB8IFwiY29tbXVuaWNhdGlvblwiXG4gIHwgXCJlY2NlbnRyaWNpdHlcIlxuICB8IFwidGhyb3dpbmdcIlxuICB8IFwia2lja2luZ1wiXG4gIHwgXCJ2aXNpb25cIlxuICB8IFwicG9zaXRpb25pbmdcIlxuICB8IFwicGFjZVwiXG4gIHwgXCJhY2NlbGVyYXRpb25cIlxuICB8IFwic3RyZW5ndGhcIlxuICB8IFwianVtcGluZ1wiXG4gIHwgXCJzdGFtaW5hXCJcbiAgfCBcIm5hdHVyYWxfZml0bmVzc1wiXG4gIHwgXCJkZXRlcm1pbmF0aW9uXCJcbiAgfCBcIndvcmtfcmF0ZVwiXG4gIHwgXCJsZWFkZXJzaGlwXCJcbiAgfCBcInRlYW13b3JrXCI7XG5cbmV4cG9ydCB0eXBlIEF0dHJpYnV0ZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZXMge1xuICBfYXR0cmlidXRlczogTWFwPHN0cmluZywgbnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgfVxuXG4gIHNldCBhdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIG51bWJlcj4pIHtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgfVxuXG4gIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzO1xuICB9XG5cbiAgZ2V0X2F0dHIobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXMuZ2V0KG5hbWUpO1xuICB9XG5cbiAgc2V0X2F0dHIobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcy5zZXQobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQZXJzb24ge1xuICBfYXR0cmlidXRlczogQXR0cmlidXRlcztcbiAgX3Bvc2l0aW9uczogUG9zaXRpb25bXTtcblxuICBzZXQgYXR0cmlidXRlcyhhdHRyOiBBdHRyaWJ1dGVzKSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHI7XG4gIH1cblxuICBnZXQgYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlcztcbiAgfVxuXG4gIGdldF9hdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgYXR0ciA9IHRoaXMuX2F0dHJpYnV0ZXMuZ2V0X2F0dHIobmFtZSk7XG5cbiAgICBpZiAodHlwZW9mIGF0dHIgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zOiBQb3NpdGlvbltdKSB7XG4gICAgdGhpcy5fcG9zaXRpb25zID0gcG9zaXRpb25zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIF9uYW1lOiBzdHJpbmc7XG4gIF9hYmJyZXZpYXRpb246IHN0cmluZztcbiAgX3JvbGVzOiBSb2xlW107XG5cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBhYmJyZXZpYXRpb24oYWJicmV2aWF0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hYmJyZXZpYXRpb24gPSBhYmJyZXZpYXRpb247XG4gIH1cblxuICBnZXQgYWJicmV2aWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hYmJyZXZpYXRpb247XG4gIH1cblxuICBzZXQgcm9sZXMocm9sZXM6IFJvbGVbXSkge1xuICAgIHRoaXMuX3JvbGVzID0gcm9sZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvbGUge1xuICBfbmFtZTogc3RyaW5nO1xuICBfYWJicmV2aWF0aW9uOiBzdHJpbmc7XG4gIF9wb3NpdGlvbnM6IFBvc2l0aW9uW107XG4gIF9wcmltYXJ5X2F0dHJpYnV0ZXM6IHN0cmluZ1tdO1xuICBfc2Vjb25kYXJ5X2F0dHJpYnV0ZXM6IHN0cmluZ1tdO1xuICBfZGVzY3JpcHRpb246IHN0cmluZztcbiAgX2lzX2dvYWxrZWVwZXI6IGJvb2xlYW47XG4gIF90YWN0aWNhbF9pbnN0cnVjdGlvbnM6IEluc3RydWN0aW9uW107XG5cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBhYmJyZXZpYXRpb24oYWJicmV2aWF0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hYmJyZXZpYXRpb24gPSBhYmJyZXZpYXRpb247XG4gIH1cblxuICBnZXQgYWJicmV2aWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hYmJyZXZpYXRpb247XG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9uczogUG9zaXRpb25bXSkge1xuICAgIHRoaXMuX3Bvc2l0aW9ucyA9IHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9ucztcbiAgfVxuXG4gIHNldCBwcmltYXJ5X2F0dHJpYnV0ZXMocHJpbWFyeV9hdHRyaWJ1dGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ByaW1hcnlfYXR0cmlidXRlcyA9IHByaW1hcnlfYXR0cmlidXRlcztcbiAgfVxuXG4gIGdldCBwcmltYXJ5X2F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlfYXR0cmlidXRlcztcbiAgfVxuXG4gIHNldCBzZWNvbmRhcnlfYXR0cmlidXRlcyhzZWNvbmRhcnlfYXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlfYXR0cmlidXRlcyA9IHNlY29uZGFyeV9hdHRyaWJ1dGVzO1xuICB9XG5cbiAgZ2V0IHNlY29uZGFyeV9hdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlfYXR0cmlidXRlcztcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgaXNfZ29hbGtlZXBlcihpc19nb2Fsa2VlcGVyOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNfZ29hbGtlZXBlciA9IGlzX2dvYWxrZWVwZXI7XG4gIH1cblxuICBnZXQgaXNfZ29hbGtlZXBlcigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNfZ29hbGtlZXBlcjtcbiAgfVxuXG4gIHNldCB0YWN0aWNhbF9pbnN0cnVjdGlvbnModGFjdGljYWxfaW5zdHJ1Y3Rpb25zOiBJbnN0cnVjdGlvbltdKSB7XG4gICAgdGhpcy5fdGFjdGljYWxfaW5zdHJ1Y3Rpb25zID0gdGFjdGljYWxfaW5zdHJ1Y3Rpb25zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnN0cnVjdGlvbiB7XG4gIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBfaW5zdHJ1Y3Rpb246IFBsYXllckluc3RydWN0aW9uIHwgVGVhbUluc3RydWN0aW9uIHwgR29hbGtlZXBlckluc3RydWN0aW9uO1xuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGluc3RydWN0aW9uKFxuICAgIGluc3RydWN0aW9uOiBQbGF5ZXJJbnN0cnVjdGlvbiB8IFRlYW1JbnN0cnVjdGlvbiB8IEdvYWxrZWVwZXJJbnN0cnVjdGlvblxuICApIHtcbiAgICB0aGlzLl9pbnN0cnVjdGlvbiA9IGluc3RydWN0aW9uO1xuICB9XG5cbiAgZ2V0IGluc3RydWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0cnVjdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUZWFtSW5zdHJ1Y3Rpb24gPVxuICB8IFwicGxheV9vdXRfZnJvbV9iYWNrXCJcbiAgfCBcInBsYXlfdGhyb3VnaF90aGVfbWlkZGxlXCJcbiAgfCBcInBsYXlfZG93bl90aGVfd2luZ3NcIlxuICB8IFwicGxheV9sb25nX2JhbGxzXCJcbiAgfCBcInBsYXlfY291bnRlcl9hdHRhY2tzXCJcbiAgfCBcImRlZmVuZF9kZWVwXCJcbiAgfCBcImRlZmVuZF9tZWRpdW1cIlxuICB8IFwiZGVmZW5kX2hpZ2hcIlxuICB8IFwib2Zmc2lkZV90cmFwXCJcbiAgfCBcImNyb3NzX29mdGVuXCJcbiAgfCBcIndvcmtfYmFsbF9pbnRvX2JveFwiXG4gIHwgXCJzaG9vdF9mcm9tX2Rpc3RhbmNlXCJcbiAgfCBcIndhaXRfZm9yX2dvb2Rfc2hvdFwiXG4gIHwgXCJwYXNzX3Zlcnlfc2hvcnRcIlxuICB8IFwicGFzc19zaG9ydFwiXG4gIHwgXCJwYXNzX21lZGl1bVwiXG4gIHwgXCJwYXNzX2xvbmdcIlxuICB8IFwicGxheV90aHJvdWdoX2JhbGxzXCJcbiAgfCBcInBsYXlfbG9ic1wiXG4gIHwgXCJwbGF5X29uZV90d29zXCI7XG5cbmV4cG9ydCB0eXBlIFBsYXllckluc3RydWN0aW9uID1cbiAgfCBcInRhY2tsZV9oYXJkZXJcIlxuICB8IFwibWFya190aWdodGx5XCJcbiAgfCBcInN0YXlfb25fZmVldFwiXG4gIHwgXCJzaG9ydGVyX3Bhc3Nlc1wiXG4gIHwgXCJnZXRfaW5fYmVoaW5kXCJcbiAgfCBcImRyaWJibGVfbGVzc1wiXG4gIHwgXCJkcmliYmxlX21vcmVcIlxuICB8IFwiY3Jvc3NfbGVzc1wiXG4gIHwgXCJjcm9zc19tb3JlXCJcbiAgfCBcInNob290X2xlc3NcIlxuICB8IFwic2hvb3RfbW9yZVwiXG4gIHwgXCJwYXNzX3RvX3NwYWNlXCJcbiAgfCBcInBhc3NfdG9fZmVldFwiXG4gIHwgXCJ0cnlfcmlza3lfcGFzc2VzXCJcbiAgfCBcInBsYXlfc2FmZV9wYXNzZXNcIlxuICB8IFwiaG9sZF91cF9iYWxsXCJcbiAgfCBcIm1vdmVfaW50b19jaGFubmVsc1wiXG4gIHwgXCJnZXRfZnVydGhlcl9mb3J3YXJkXCJcbiAgfCBcInJ1bl93aWRlX3dpdGhfYmFsbFwiXG4gIHwgXCJjcm9zc19mcm9tX2J5bGluZVwiO1xuXG5leHBvcnQgdHlwZSBHb2Fsa2VlcGVySW5zdHJ1Y3Rpb24gPVxuICB8IFwiZHJpYmJsZV9tb3JlXCJcbiAgfCBcInRha2VfbW9yZV9yaXNrc1wiXG4gIHwgXCJydXNoX291dFwiXG4gIHwgXCJ1c2VfY3JlYXRpdmVfZnJlZWRvbVwiO1xuIiwiZXhwb3J0IHsgQ291bnRyeSwgQ2l0eSwgVmVudWUsIFBpdGNoRGltZW5zaW9ucyB9O1xuaW1wb3J0IHsgQ29vcmRzLCBSZWN0YW5nbGUgfSBmcm9tIFwiLi4vY29tbW9uL3R5cGVzXCI7XG5cbmNsYXNzIFBsYWNlIHtcbiAgX25hbWU6IHN0cmluZztcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxufVxuXG5jbGFzcyBDb3VudHJ5IGV4dGVuZHMgUGxhY2Uge1xuICBfZmxhZzogc3RyaW5nO1xuICBfcG9wdWxhdGlvbjogbnVtYmVyO1xuICBfY2FwaXRhbDogQ2l0eTtcbiAgX2N1cnJlbmN5OiBzdHJpbmc7XG4gIF9sYW5ndWFnZXM6IHN0cmluZ1tdO1xuXG4gIHNldCBmbGFnKGZsYWc6IHN0cmluZykge1xuICAgIHRoaXMuX2ZsYWcgPSBmbGFnO1xuICB9XG5cbiAgZ2V0IGZsYWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZsYWc7XG4gIH1cblxuICBzZXQgcG9wdWxhdGlvbihwb3B1bGF0aW9uOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb3B1bGF0aW9uID0gcG9wdWxhdGlvbjtcbiAgfVxuXG4gIGdldCBwb3B1bGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3B1bGF0aW9uO1xuICB9XG5cbiAgc2V0IGNhcGl0YWwoY2FwaXRhbDogQ2l0eSkge1xuICAgIHRoaXMuX2NhcGl0YWwgPSBjYXBpdGFsO1xuICB9XG5cbiAgZ2V0IGNhcGl0YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGl0YWw7XG4gIH1cblxuICBzZXQgY3VycmVuY3koY3VycmVuY3k6IHN0cmluZykge1xuICAgIHRoaXMuX2N1cnJlbmN5ID0gY3VycmVuY3k7XG4gIH1cblxuICBnZXQgY3VycmVuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbmN5O1xuICB9XG5cbiAgc2V0IGxhbmd1YWdlcyhsYW5ndWFnZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xuICB9XG5cbiAgZ2V0IGxhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VzO1xuICB9XG59XG5cbmNsYXNzIENpdHkgZXh0ZW5kcyBQbGFjZSB7XG4gIF9wb3B1bGF0aW9uOiBudW1iZXI7XG4gIF9jb3VudHJ5OiBDb3VudHJ5O1xuXG4gIHNldCBwb3B1bGF0aW9uKHBvcHVsYXRpb246IG51bWJlcikge1xuICAgIHRoaXMuX3BvcHVsYXRpb24gPSBwb3B1bGF0aW9uO1xuICB9XG5cbiAgZ2V0IHBvcHVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHVsYXRpb247XG4gIH1cblxuICBzZXQgY291bnRyeShjb3VudHJ5OiBDb3VudHJ5KSB7XG4gICAgdGhpcy5fY291bnRyeSA9IGNvdW50cnk7XG4gIH1cblxuICBnZXQgY291bnRyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRyeTtcbiAgfVxufVxuXG5jbGFzcyBWZW51ZSBleHRlbmRzIFBsYWNlIHtcbiAgX2NhcGFjaXR5OiBudW1iZXI7XG4gIF9jaXR5OiBDaXR5O1xuICBsZW5ndGg6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgX2RpbWVuc2lvbnM6IFBpdGNoRGltZW5zaW9ucztcblxuICBzZXQgY2FwYWNpdHkoY2FwYWNpdHk6IG51bWJlcikge1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gIH1cblxuICBnZXQgY2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5O1xuICB9XG5cbiAgc2V0IGNpdHkoY2l0eTogQ2l0eSkge1xuICAgIHRoaXMuX2NpdHkgPSBjaXR5O1xuICB9XG5cbiAgZ2V0IGNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NpdHk7XG4gIH1cblxuICBzZXQgcGl0Y2hfZGltZW5zaW9ucyhwaXRjaF9kaW1lbnNpb25zOiBbbnVtYmVyLCBudW1iZXJdKSB7XG4gICAgdGhpcy5sZW5ndGggPSBwaXRjaF9kaW1lbnNpb25zWzBdO1xuICAgIHRoaXMud2lkdGggPSBwaXRjaF9kaW1lbnNpb25zWzFdO1xuICAgIHRoaXMuaW5pdF9waXRjaF9kaW1lbnNpb25zKCk7XG4gIH1cblxuICBpbml0X3BpdGNoX2RpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IG5ldyBQaXRjaERpbWVuc2lvbnMoKTtcbiAgICB0aGlzLl9kaW1lbnNpb25zLmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHRoaXMuX2RpbWVuc2lvbnMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIHRoaXMuX2RpbWVuc2lvbnMuaW5pdCgpO1xuICB9XG5cbiAgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnM7XG4gIH1cbn1cblxuY2xhc3MgUGl0Y2hEaW1lbnNpb25zIHtcbiAgX2xlbmd0aDogbnVtYmVyO1xuICBfd2lkdGg6IG51bWJlcjtcblxuICBzZXQgbGVuZ3RoKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoOiBudW1iZXIpIHtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIHN0YXRpYyBjZW50ZXJfY2lyY2xlX3JhZGl1cyA9IDkuMTU7XG4gIHN0YXRpYyBwZW5hbHR5X2FyZWFfbGVuZ3RoID0gMTYuNTtcbiAgc3RhdGljIHBlbmFsdHlfYXJlYV93aWR0aCA9IDQwLjMyO1xuICBzdGF0aWMgcGVuYWx0eV9zcG90X2Rpc3RhbmNlID0gMTE7XG4gIHN0YXRpYyBzaXhfeWFyZF9ib3hfbGVuZ3RoID0gNS41O1xuICBzdGF0aWMgc2l4X3lhcmRfYm94X3dpZHRoID0gMTguMzI7XG4gIHN0YXRpYyBnb2FsX3dpZHRoID0gNy4zMjtcbiAgc3RhdGljIGdvYWxfaGVpZ2h0ID0gMi40NDtcbiAgc3RhdGljIGdvYWxfZGVwdGggPSAyLjQ0O1xuICBzdGF0aWMgcGVuYWx0eV9hcmNfcmFkaXVzID0gOS4xNTtcblxuICBwZW5hbHR5X3Nwb3RfMV9jb29yZHM6IENvb3JkcztcbiAgcGVuYWx0eV9zcG90XzJfY29vcmRzOiBDb29yZHM7XG4gIGtpY2tvZmZfc3BvdDogQ29vcmRzO1xuICBnb2FsXzE6IFJlY3RhbmdsZTtcbiAgZ29hbF8yOiBSZWN0YW5nbGU7XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnBlbmFsdHlfc3BvdF8xX2Nvb3JkcyA9IHtcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyLFxuICAgICAgeTogUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfc3BvdF9kaXN0YW5jZSxcbiAgICAgIHo6IDAsXG4gICAgfTtcbiAgICB0aGlzLnBlbmFsdHlfc3BvdF8yX2Nvb3JkcyA9IHtcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyLFxuICAgICAgeTogdGhpcy5sZW5ndGggLSBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9zcG90X2Rpc3RhbmNlLFxuICAgICAgejogMCxcbiAgICB9O1xuICAgIHRoaXMua2lja29mZl9zcG90ID0ge1xuICAgICAgeDogdGhpcy5sZW5ndGggLyAyLFxuICAgICAgeTogdGhpcy53aWR0aCAvIDIsXG4gICAgICB6OiAwLFxuICAgIH07XG4gICAgdGhpcy5nb2FsXzEgPSB7XG4gICAgICBwb2ludF8xOiB7XG4gICAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gUGl0Y2hEaW1lbnNpb25zLmdvYWxfd2lkdGggLyAyLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAwLFxuICAgICAgfSxcbiAgICAgIHBvaW50XzI6IHtcbiAgICAgICAgeDogdGhpcy53aWR0aCAvIDIgKyBQaXRjaERpbWVuc2lvbnMuZ29hbF93aWR0aCAvIDIsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IFBpdGNoRGltZW5zaW9ucy5nb2FsX2hlaWdodCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmdvYWxfMiA9IHtcbiAgICAgIHBvaW50XzE6IHtcbiAgICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMuZ29hbF93aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMubGVuZ3RoLFxuICAgICAgICB6OiAwLFxuICAgICAgfSxcbiAgICAgIHBvaW50XzI6IHtcbiAgICAgICAgeDogdGhpcy53aWR0aCAvIDIgKyBQaXRjaERpbWVuc2lvbnMuZ29hbF93aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMubGVuZ3RoLFxuICAgICAgICB6OiBQaXRjaERpbWVuc2lvbnMuZ29hbF9oZWlnaHQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
