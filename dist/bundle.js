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
    return Math.abs(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)));
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
    get pitchZoneScores() {
        return this._zones;
    }
    set pitchZoneScores(scores) {
        this._zones = scores;
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
    calculate_pitch_zone_scores() {
        let side;
        if (this.team.attacking_direction === "left") {
            side = "right";
        }
        else {
            side = "left";
        }
        this.pitchZoneScores = place_1.PitchZone.get_score(this.position, side);
    }
    get_zone_midpoint() {
        let midpoint = { x: 0, y: 0, z: 0 };
        let total = 0;
        for (let i = 0; i < this.pitchZoneScores.length; i++) {
            let coords = place_1.PitchZone.get_coords(i);
            if (this.pitchZoneScores[i] > 0) {
                midpoint.x += coords.x * this.pitchZoneScores[i];
                midpoint.y += coords.y * this.pitchZoneScores[i];
                total += this.pitchZoneScores[i];
            }
        }
        midpoint.x /= total;
        midpoint.y /= total;
        return midpoint;
    }
    calculate_optimal_position(teamInPossession) {
        // move towards more threatening positions
        // or provide passing options
        var _a;
        // iterate through positions in radius
        // pick one based on movement attribute
        // and team tactics
        // bias towards positions with higher zone scores
        /*let radius = 10;
        // 10 m
        let positions: {pos:Coords,score:number}[] = [];
        for (let x = this.loc.x - radius; x < this.loc.x + radius; x+=2) {
          for (let y = this.loc.y - radius; y < this.loc.y + radius; y+=2) {
            let position = {x:x,y:y,z:0};
            let threat = this.threat_at_position(this.team, position);
            positions.push({pos: position, score: threat});
          }
        }
    
        let zone_bias = 0.5;
        for (let i = 0; i < this.pitchZoneScores.length; i++) {
          if (this.pitchZoneScores[i] > 0) {
            let zone_coords = PitchZone.get_coords(i);
            for (let pos of positions) {
              if (in_range(pos.pos.x, [zone_coords.x-5.25, zone_coords.x+5.25])) {
                if (in_range(pos.pos.y, [zone_coords.y-9.714/2, zone_coords.y+9.714/2])) {
    
                }
              }
            }
          }
        }
        
        positions.sort((a,b) => {
          return b.score - a.score;
        });
    
        let movement = this.attributes.get_attr("movement") ?? 25;
        
        // lower movement means more deviation
        // maximum randomness = 0.5
        // minimum randomness = 0.1
    
        let randomness = 0.5 - (movement / 100) * 0.4;
        let index = Math.floor(Math.random() * randomness * 10);
    
        let target = positions[index].pos;
        return target;*/
        //calculate midpoint of zone scores
        let midpoint = this.get_zone_midpoint();
        let zone_bias = 0;
        if (this.m.possession == this.team) {
            zone_bias = 0.25;
        }
        else {
            zone_bias = 0.5;
        }
        let radius = 10;
        // 10 m
        let positions = [];
        for (let x = this.loc.x - radius; x < this.loc.x + radius; x += 2) {
            for (let y = this.loc.y - radius; y < this.loc.y + radius; y += 2) {
                let position = { x: x, y: y, z: 0 };
                let threat = this.threat_at_position(this.team, position);
                positions.push({ pos: position, score: threat });
            }
        }
        positions.sort((a, b) => {
            return b.score - a.score;
        });
        let movement = (_a = this.attributes.get_attr("movement")) !== null && _a !== void 0 ? _a : 25;
        // lower movement means more deviation
        // maximum randomness = 0.5
        // minimum randomness = 0.1
        let randomness = 0.5 - (movement / 100) * 0.4;
        let index = Math.floor(Math.random() * randomness * 10);
        let target = positions[index].pos;
        // average of midpoint and target with zone bias
        target.x = (target.x + midpoint.x * zone_bias) / (1 + zone_bias);
        target.y = (target.y + midpoint.y * zone_bias) / (1 + zone_bias);
        return target;
    }
    kickoff_position() {
        let pos = this.get_zone_midpoint();
        return pos;
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
                    this.move_to(m.ball_target, 'max');
                }
                else {
                    this.target_loc = this.calculate_optimal_position(m.outOfPossession);
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
                    //let pressure = p.calculate_pressure(m.outOfPossession as Team);
                    teammate_threat[this.team.playersOnPitch.indexOf(p)] = threat;
                    //teammate_pressure[this.team.playersOnPitch.indexOf(p)] = pressure;
                    //diff[this.team.playersOnPitch.indexOf(p)] = (threat - pressure)*.75;
                }
                let self_threat = this.calculate_threat(this.team);
                //let self_pressure = this.calculate_pressure(m.outOfPossession as Team);
                //let self_diff = self_threat - self_pressure;
                //let max_diff = Math.max(...diff);
                let max_threat = Math.max(...teammate_threat);
                if (max_threat > self_threat) {
                    // pass
                    this.pass(this.team, m.outOfPossession);
                }
                else if (self_threat > max_threat) {
                    // if self diff is lower than shot threshold,
                    // dribble to a more threatening position
                    if (self_threat < 0.01) {
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
        // if at target, decelerate and stop
        if ((0, helpers_1.dist)(this.loc, target) < 0.5) {
            this.dx = 0;
            this.dy = 0;
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
        // player w/ better technique will apply speed closer to optimal speed
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
            dz = ((10 - this.loc.z) / d) * speed;
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
            //scores[players.indexOf(p)] += Math.exp(
            // (-0.5 * (d * d)) / (std_dev * std_dev)
            //);
            // players that the passer is currently facing have a higher chance of being passed to
            //let angle = Math.atan2(p.loc.y - this.loc.y, p.loc.x - this.loc.x);
            //let facing = Math.atan2(this.dy, this.dx);
            //let diff = Math.abs(angle - facing);
            //if (diff < Math.PI / 4) {
            //  scores[players.indexOf(p)] += 1;
            //}
            // players under pressure have a lower chance of being passed to
            //let pressure = p.calculate_pressure(opp);
            //scores[players.indexOf(p)] -= pressure;
            // players in a threatening position have a higher chance of being passed to
            let threat = p.calculate_threat(team);
            scores[players.indexOf(p)] += threat;
            // sort scores
        }
        /*scores.sort((a, b) => {
          return b - a;
        });*/
        //sort descending
        // randomly choose player
        // use decision making attribute
        // use team tactics
        // use player instructions
        let decisions = this.attributes.get_attr("decisions");
        if (decisions == undefined) {
            decisions = 25;
        }
        // lower decisions means more deviation
        // maximum randomness = 0.5
        // minimum randomness = 0.1
        //let randomness = 0.5 - (decisions / 100) * 0.4;
        //let index = Math.floor(Math.random() * randomness * 10);
        // get player with highest score
        let index = scores.indexOf(Math.max(...scores));
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
        let radius = 0.025;
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
            return 1 / (d);
        }
        else {
            //right side goal
            let d = (0, helpers_1.dist)(this.loc, right);
            return 1 / (d);
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
        this.ball_bounce = false;
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
        console.log("White team attacking direction: " + this.home.attacking_direction);
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
        this.playersOnPitch.forEach((player) => {
            player.calculate_pitch_zone_scores();
            player.loc = player.kickoff_position();
        });
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
        if ((0, helpers_1.dist)(closest[0].loc, this.ball_pos) > 2 && (0, helpers_1.dist)(closest[1].loc, this.ball_pos) > 2 || this.ball_pos.z > 2) {
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
        // check if the ball crosses the touch line
        if (this.ball_pos.x < 0) {
            // check if it crosses the goal line
            if (this.ball_pos.y > this.venue.width / 2 - 7.32 / 2 && this.ball_pos.y < this.venue.width / 2 + 7.32 / 2) {
                // goal
                let team_scored;
                if (this.home.attacking_direction == "left") {
                    team_scored = this.home;
                }
                else {
                    team_scored = this.away;
                }
                this.goal(team_scored);
            }
            else {
                if (this.home.attacking_direction == "left") {
                    if (this.ball_last_touch == this.away) {
                        // corner
                        // side of the pitch
                        if (this.ball_pos.y > this.venue.width / 2) {
                            this.corner(this.home, "right");
                        }
                        else {
                            this.corner(this.home, "left");
                        }
                    }
                    else {
                        // goal kick
                        this.goal_kick(this.away);
                    }
                }
                else {
                    if (this.ball_last_touch == this.home) {
                        // corner
                        // side of the pitch
                        if (this.ball_pos.y > this.venue.width / 2) {
                            this.corner(this.away, "right");
                        }
                        else {
                            this.corner(this.away, "left");
                        }
                    }
                    else {
                        // goal kick
                        this.goal_kick(this.home);
                    }
                }
            }
        }
    }
    goal(team) {
        this.ball_pos = {
            x: this.venue.length / 2,
            y: this.venue.width / 2,
            z: 0
        };
        if (team == this.home) {
            this.home_goals++;
        }
        else {
            this.away_goals++;
        }
        this.ball_last_touch = null;
        this.do_kickoff();
    }
    move_ball() {
        this.ball_pos.x += this.ball_dx / 60;
        this.ball_pos.y += this.ball_dy / 60;
        this.ball_pos.z += this.ball_dz / 60;
        const restitution = 0.8;
        let a_z = -9.81;
        let air_density = 1.2;
        let drag_coefficient = 0.47;
        let area = Math.PI * 0.11 * 0.11;
        let velocity = Math.sqrt(this.ball_dx * this.ball_dx + this.ball_dy * this.ball_dy);
        let a_x = -0.5 * air_density * drag_coefficient * area * velocity * this.ball_dx;
        let a_y = -0.5 * air_density * drag_coefficient * area * velocity * this.ball_dy;
        if (this.ball_pos.z > 0) {
            if (this.ball_pos.z > 0.25) {
                this.ball_bounce = true;
            }
            a_z += -0.5 * air_density * drag_coefficient * area * velocity * this.ball_dz;
            this.ball_dz += a_z / 60;
            this.ball_dx = Math.sign(this.ball_dx) * Math.sqrt(this.ball_dx * this.ball_dx + a_x / 60);
            this.ball_dy = Math.sign(this.ball_dy) * Math.sqrt(this.ball_dy * this.ball_dy + a_y / 60);
        }
        else {
            let friction = 0.007;
            this.ball_dx -= friction * this.ball_dx;
            this.ball_dy -= friction * this.ball_dy;
            this.ball_dx += a_x / 60;
            this.ball_dy += a_y / 60;
            if (this.ball_bounce) {
                this.ball_dz = -this.ball_dz * 0.8;
                this.ball_bounce = false;
            }
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
                const pitchOffset = 50;
                if (ctx) {
                    let length = this.background.width - 2 * pitchOffset;
                    let width = this.background.height - 2 * pitchOffset;
                    if (ctx) {
                        let x = (this.ball_pos.x / this.venue.length) * length + pitchOffset;
                        let y = (this.ball_pos.y / this.venue.width) * width + pitchOffset;
                        // if z is larger than the radius should be larger
                        let radius = 3.4;
                        if (this.ball_pos.z > 0) {
                            radius += this.ball_pos.z;
                        }
                        ctx.fillStyle = "black";
                        ctx.beginPath();
                        ctx.arc(x, y, radius, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.fillStyle = "white";
                        ctx.beginPath();
                        ctx.arc(x, y, radius - 1, 0, 2 * Math.PI);
                        ctx.fill();
                        let target_x = (this.ball_target.x / this.venue.length) * length + pitchOffset;
                        let target_y = (this.ball_target.y / this.venue.width) * width + pitchOffset;
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
                const pitchOffset = 50;
                let length = this.background.width - 2 * pitchOffset;
                let width = this.background.height - 2 * pitchOffset;
                this.home.playersOnPitch.forEach((player) => {
                    let x = (player.loc.x / this.venue.length) * length + pitchOffset;
                    let y = (player.loc.y / this.venue.width) * width + pitchOffset;
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
                    let x = (player.loc.x / this.venue.length) * length + pitchOffset;
                    let y = (player.loc.y / this.venue.width) * width + pitchOffset;
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
        this.time += 1 / 60;
        this.ticks += 1;
        if (this.ticks == 10) {
            this.update_possession();
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
            this.ball_last_touch = team;
        }
        else {
            this.possession = null;
            this.outOfPossession = null;
        }
    }
    do_kickoff(team, half) {
        const rand = Math.random();
        if (team == null) {
            let team = 0;
        }
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
        //this.player_possession.pass(t, o);
        this.ball_dx = 1;
        this.ball_dy = 1;
        this.ball_dz = 0;
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
const luxon_1 = require("luxon");
const types_1 = require("../common/types");
const start_date = luxon_1.DateTime.local(2022, 7, 1);
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
let date_text = document.querySelector("#date-text");
if (date_text) {
    date_text.innerHTML = start_date.toLocaleString(luxon_1.DateTime.DATE_FULL);
}
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
console.log(place_1.PitchZone.get_coords(21));
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
        // draw outlines around pitch zones
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        for (let i = 0; i < venue.dimensions.zones.length; i++) {
            const zone = venue.dimensions.zones[i];
            let x = (0, helpers_1.meters_to_px)(zone.rect.point_1.x, venue.dimensions.length, length);
            let y = (0, helpers_1.meters_to_px)(zone.rect.point_1.y, venue.dimensions.width, width);
            let w = (0, helpers_1.meters_to_px)(zone.rect.point_2.x - zone.rect.point_1.x, venue.dimensions.length, length);
            let h = (0, helpers_1.meters_to_px)(zone.rect.point_2.y - zone.rect.point_1.y, venue.dimensions.width, width);
            ctx.beginPath();
            ctx.rect(x + 50, y + 50, w, h);
            ctx.stroke();
            // draw the number of the zone in the middle
            ctx.fillStyle = "black";
            ctx.font = "12px Arial";
            ctx.fillText(i.toString(), x + w / 2 + 50, y + h / 2 + 50);
        }
    }
}
exports.draw_pitch = draw_pitch;
match.home = team1;
match.away = team2;
match.play();
//let areas = new PitchArea();
//let gk_area = PitchArea.

},{"../common/helpers":2,"../common/types":3,"./game":5,"./person":7,"./place":8,"luxon":1}],7:[function(require,module,exports){
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
        let ret = this._attributes.get(name);
        if (ret != undefined) {
            return ret;
        }
        return 25;
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
exports.PitchZone = exports.PitchDimensions = exports.Venue = exports.City = exports.Country = void 0;
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
        this._dimensions.divide_into_zones(7, 10);
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
    divide_into_zones(rows, cols) {
        let zoneWidth = this.length / cols;
        let zoneLength = this.width / rows;
        console.log(zoneWidth, zoneLength);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let rect = {
                    point_1: {
                        x: j * zoneWidth,
                        y: i * zoneLength,
                        z: 0,
                    },
                    point_2: {
                        x: (j + 1) * zoneWidth,
                        y: (i + 1) * zoneLength,
                        z: 0,
                    },
                };
                let zone = new PitchZone(rect);
                this.zones.push(zone);
            }
        }
    }
    init() {
        this.zones = [];
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
class PitchZone {
    constructor(rect) {
        this._rect = rect;
    }
    get rect() {
        return this._rect;
    }
    static get_score(position, side) {
        // fill array length 70 with 0s
        const zones = new Array(70).fill(0);
        switch (position.name) {
            case 'Goalkeeper':
                if (side == 'left') {
                    zones[30] = 1;
                    zones[31] = 0.4;
                    zones[20] = 0.2;
                    zones[40] = 0.2;
                    zones[21] = 0.05;
                    zones[41] = 0.05;
                }
                else {
                    zones[39] = 1;
                    zones[38] = 0.4;
                    zones[49] = 0.2;
                    zones[29] = 0.2;
                    zones[48] = 0.05;
                    zones[28] = 0.05;
                }
                return zones;
            case 'Left Back':
                if (side == 'left') {
                    zones[11] = 1;
                    zones[12] = 0.75;
                    zones[10] = 0.5;
                    zones[0] = 0.4;
                    zones[1] = 0.4;
                    zones[2] = 0.4;
                    zones[21] = 0.1;
                    zones[20] = 0.1;
                }
                else {
                    zones[58] = 1;
                    zones[57] = 0.75;
                    zones[59] = 0.5;
                    zones[67] = 0.4;
                    zones[68] = 0.4;
                    zones[69] = 0.4;
                    zones[48] = 0.1;
                    zones[49] = 0.1;
                }
                return zones;
            case 'Right Back':
                if (side == 'left') {
                    zones[51] = 1;
                    zones[52] = 0.75;
                    zones[50] = 0.5;
                    zones[60] = 0.4;
                    zones[61] = 0.4;
                    zones[62] = 0.4;
                    zones[41] = 0.1;
                    zones[40] = 0.1;
                }
                else {
                    zones[18] = 1;
                    zones[17] = 0.75;
                    zones[19] = 0.5;
                    zones[9] = 0.4;
                    zones[8] = 0.4;
                    zones[7] = 0.4;
                    zones[28] = 0.1;
                    zones[29] = 0.1;
                }
                return zones;
            case 'Left Center Back':
                if (side == 'left') {
                    zones[21] = 1;
                    zones[22] = 0.75;
                    zones[31] = 0.5;
                    zones[20] = 0.5;
                    zones[30] = 0.25;
                    zones[10] = 0.25;
                }
                else {
                    zones[48] = 1;
                    zones[47] = 0.75;
                    zones[38] = 0.5;
                    zones[49] = 0.5;
                    zones[39] = 0.25;
                    zones[59] = 0.25;
                }
                return zones;
            case 'Right Center Back':
                if (side == 'left') {
                    zones[41] = 1;
                    zones[42] = 0.75;
                    zones[51] = 0.5;
                    zones[40] = 0.5;
                    zones[50] = 0.25;
                    zones[30] = 0.25;
                }
                else {
                    zones[28] = 1;
                    zones[27] = 0.75;
                    zones[18] = 0.5;
                    zones[29] = 0.5;
                    zones[19] = 0.25;
                    zones[39] = 0.25;
                }
                return zones;
            case 'Defensive Midfielder':
                if (side == 'left') {
                    zones[32] = 1;
                    zones[33] = 0.75;
                    zones[22] = 0.5;
                    zones[42] = 0.5;
                    zones[23] = 0.25;
                    zones[43] = 0.25;
                    zones[21] = 0.1;
                    zones[41] = 0.1;
                    zones[31] = 0.5;
                }
                else {
                    zones[37] = 1;
                    zones[36] = 0.75;
                    zones[47] = 0.5;
                    zones[27] = 0.5;
                    zones[26] = 0.25;
                    zones[46] = 0.25;
                    zones[28] = 0.1;
                    zones[48] = 0.1;
                    zones[38] = 0.5;
                }
                return zones;
            case 'Right Central Midfielder':
                if (side == 'left') {
                    zones[43] = 1;
                    zones[44] = 0.75;
                    zones[34] = 0.5;
                    zones[54] = 0.5;
                    zones[33] = 0.25;
                    zones[53] = 0.25;
                    zones[32] = 0.1;
                    zones[42] = 0.1;
                    zones[52] = 0.1;
                }
                else {
                    zones[26] = 1;
                    zones[25] = 0.75;
                    zones[35] = 0.5;
                    zones[15] = 0.5;
                    zones[36] = 0.25;
                    zones[16] = 0.25;
                    zones[37] = 0.1;
                    zones[27] = 0.1;
                    zones[17] = 0.1;
                }
                return zones;
            case 'Left Central Midfielder':
                if (side == 'left') {
                    zones[23] = 1;
                    zones[24] = 0.75;
                    zones[34] = 0.5;
                    zones[14] = 0.5;
                    zones[33] = 0.25;
                    zones[13] = 0.25;
                    zones[32] = 0.1;
                    zones[22] = 0.1;
                    zones[12] = 0.1;
                }
                else {
                    zones[46] = 1;
                    zones[45] = 0.75;
                    zones[35] = 0.5;
                    zones[55] = 0.5;
                    zones[36] = 0.25;
                    zones[56] = 0.25;
                    zones[37] = 0.1;
                    zones[47] = 0.1;
                    zones[57] = 0.1;
                }
                return zones;
            case 'Left Winger':
                if (side == 'left') {
                    zones[14] = 1;
                    zones[13] = 0.75;
                    zones[24] = 0.5;
                    zones[4] = 0.5;
                    zones[23] = 0.25;
                    zones[3] = 0.25;
                }
                else {
                    zones[55] = 1;
                    zones[56] = 0.75;
                    zones[45] = 0.5;
                    zones[65] = 0.5;
                    zones[46] = 0.25;
                    zones[66] = 0.25;
                }
                return zones;
            case 'Right Winger':
                if (side == 'left') {
                    zones[54] = 1;
                    zones[53] = 0.75;
                    zones[44] = 0.5;
                    zones[64] = 0.5;
                    zones[43] = 0.25;
                    zones[63] = 0.25;
                }
                else {
                    zones[15] = 1;
                    zones[16] = 0.75;
                    zones[25] = 0.5;
                    zones[5] = 0.5;
                    zones[26] = 0.25;
                    zones[6] = 0.25;
                }
                return zones;
            case 'Striker':
                if (side == 'left') {
                    zones[34] = 1;
                    zones[24] = 0.5;
                    zones[44] = 0.5;
                    zones[33] = 0.1;
                }
                else {
                    zones[35] = 1;
                    zones[25] = 0.5;
                    zones[45] = 0.5;
                    zones[36] = 0.1;
                }
                return zones;
        }
        return zones;
    }
    static get_coords(zone) {
        let rowIndex = Math.floor(zone / 10);
        let colIndex = zone % 10;
        let x = colIndex * 10.5 + 5.25;
        let y = rowIndex * 9.7143 + 9.7143 / 2;
        return { x: x, y: y, z: 0 };
    }
}
exports.PitchZone = PitchZone;

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbHV4b24vYnVpbGQvY2pzLWJyb3dzZXIvbHV4b24uanMiLCJzcmMvY29tbW9uL2hlbHBlcnMudHMiLCJzcmMvY29tbW9uL3R5cGVzLnRzIiwic3JjL3dvcmtlci9jbHViLnRzIiwic3JjL3dvcmtlci9nYW1lLnRzIiwic3JjL3dvcmtlci9pbmRleC50cyIsInNyYy93b3JrZXIvcGVyc29uLnRzIiwic3JjL3dvcmtlci9wbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlvUEEsU0FBZ0IsZUFBZSxDQUFDLElBQWUsRUFBRSxLQUFhO0lBQzVELE9BQU8sQ0FDTCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUMxQixDQUFDO0FBQ0osQ0FBQztBQVRELDBDQVNDO0FBRUQsU0FBZ0IsWUFBWSxDQUMxQixNQUFjLEVBQ2QsWUFBb0IsRUFDcEIsTUFBYztJQUVkLE9BQU8sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzFDLENBQUM7QUFORCxvQ0FNQztBQUVELFNBQWdCLElBQUksQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUN2QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUZELG9CQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLENBQVMsRUFBRSxLQUF1QjtJQUN6RCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFGRCxzQ0FFQzs7Ozs7O0FDL0JELDJDQUF5RDtBQWtCekQsU0FBUyxNQUFNLENBQUMsRUFBUSxFQUFFLENBQVM7SUFDakMsSUFDRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDM0M7UUFDQSxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEUsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ1osT0FBTyxDQUFDLENBQUM7S0FDVjtJQUVELE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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LENBQUM7b0JBQ2hCLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ2pCO2dCQUNELE9BQU8sS0FBSyxDQUFDO1NBR2xCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQzVCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksUUFBUSxHQUFHLElBQUksR0FBQyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQXRRRCw4QkFzUUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkge1xuICB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKGl0KSByZXR1cm4gKGl0ID0gaXQuY2FsbChvKSkubmV4dC5iaW5kKGl0KTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmIChpdCkgbyA9IGl0O1xuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgIGRvbmU6IHRydWVcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgfTtcbiAgICB9O1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5cbi8vIHRoZXNlIGFyZW4ndCByZWFsbHkgcHJpdmF0ZSwgYnV0IG5vciBhcmUgdGhleSByZWFsbHkgdXNlZnVsIHRvIGRvY3VtZW50XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBMdXhvbkVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoTHV4b25FcnJvciwgX0Vycm9yKTtcbiAgZnVuY3Rpb24gTHV4b25FcnJvcigpIHtcbiAgICByZXR1cm4gX0Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gTHV4b25FcnJvcjtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBJbnZhbGlkRGF0ZVRpbWVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZERhdGVUaW1lRXJyb3IsIF9MdXhvbkVycm9yKTtcbiAgZnVuY3Rpb24gSW52YWxpZERhdGVUaW1lRXJyb3IocmVhc29uKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yLmNhbGwodGhpcywgXCJJbnZhbGlkIERhdGVUaW1lOiBcIiArIHJlYXNvbi50b01lc3NhZ2UoKSkgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gSW52YWxpZERhdGVUaW1lRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBJbnZhbGlkSW50ZXJ2YWxFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3IyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRJbnRlcnZhbEVycm9yLCBfTHV4b25FcnJvcjIpO1xuICBmdW5jdGlvbiBJbnZhbGlkSW50ZXJ2YWxFcnJvcihyZWFzb24pIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3IyLmNhbGwodGhpcywgXCJJbnZhbGlkIEludGVydmFsOiBcIiArIHJlYXNvbi50b01lc3NhZ2UoKSkgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gSW52YWxpZEludGVydmFsRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBJbnZhbGlkRHVyYXRpb25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3IzKSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWREdXJhdGlvbkVycm9yLCBfTHV4b25FcnJvcjMpO1xuICBmdW5jdGlvbiBJbnZhbGlkRHVyYXRpb25FcnJvcihyZWFzb24pIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3IzLmNhbGwodGhpcywgXCJJbnZhbGlkIER1cmF0aW9uOiBcIiArIHJlYXNvbi50b01lc3NhZ2UoKSkgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gSW52YWxpZER1cmF0aW9uRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I0KSB7XG4gIF9pbmhlcml0c0xvb3NlKENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yLCBfTHV4b25FcnJvcjQpO1xuICBmdW5jdGlvbiBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3I0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBJbnZhbGlkVW5pdEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjUpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZFVuaXRFcnJvciwgX0x1eG9uRXJyb3I1KTtcbiAgZnVuY3Rpb24gSW52YWxpZFVuaXRFcnJvcih1bml0KSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yNS5jYWxsKHRoaXMsIFwiSW52YWxpZCB1bml0IFwiICsgdW5pdCkgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gSW52YWxpZFVuaXRFcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIEludmFsaWRBcmd1bWVudEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjYpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZEFyZ3VtZW50RXJyb3IsIF9MdXhvbkVycm9yNik7XG4gIGZ1bmN0aW9uIEludmFsaWRBcmd1bWVudEVycm9yKCkge1xuICAgIHJldHVybiBfTHV4b25FcnJvcjYuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIHJldHVybiBJbnZhbGlkQXJndW1lbnRFcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIFpvbmVJc0Fic3RyYWN0RXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yNykge1xuICBfaW5oZXJpdHNMb29zZShab25lSXNBYnN0cmFjdEVycm9yLCBfTHV4b25FcnJvcjcpO1xuICBmdW5jdGlvbiBab25lSXNBYnN0cmFjdEVycm9yKCkge1xuICAgIHJldHVybiBfTHV4b25FcnJvcjcuY2FsbCh0aGlzLCBcIlpvbmUgaXMgYW4gYWJzdHJhY3QgY2xhc3NcIikgfHwgdGhpcztcbiAgfVxuICByZXR1cm4gWm9uZUlzQWJzdHJhY3RFcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgbiA9IFwibnVtZXJpY1wiLFxuICBzID0gXCJzaG9ydFwiLFxuICBsID0gXCJsb25nXCI7XG52YXIgREFURV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogblxufTtcbnZhciBEQVRFX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogblxufTtcbnZhciBEQVRFX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHNcbn07XG52YXIgREFURV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuXG59O1xudmFyIERBVEVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbFxufTtcbnZhciBUSU1FX1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xudmFyIFRJTUVfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogblxufTtcbnZhciBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xudmFyIFRJTUVfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbFxufTtcbnZhciBUSU1FXzI0X1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCJcbn07XG52YXIgVElNRV8yNF9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCJcbn07XG52YXIgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xudmFyIFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xudmFyIERBVEVUSU1FX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG52YXIgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogblxufTtcbnZhciBEQVRFVElNRV9NRUQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogblxufTtcbnZhciBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogblxufTtcbnZhciBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBzLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG52YXIgREFURVRJTUVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICB0aW1lWm9uZU5hbWU6IHNcbn07XG52YXIgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHNcbn07XG52YXIgREFURVRJTUVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG52YXIgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG52YXIgWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFpvbmUoKSB7fVxuICB2YXIgX3Byb3RvID0gWm9uZS5wcm90b3R5cGU7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyBjb21tb24gbmFtZSAoc3VjaCBhcyBFU1QpIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgbmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMgdG8gYWZmZWN0IHRoZSBmb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMuZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLiBBY2NlcHRzICdsb25nJyBvciAnc2hvcnQnLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5sb2NhbGUgLSBXaGF0IGxvY2FsZSB0byByZXR1cm4gdGhlIG9mZnNldCBuYW1lIGluLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUodHMsIG9wdHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHRzICduYXJyb3cnLCAnc2hvcnQnLCBvciAndGVjaGllJy4gUmV0dXJuaW5nICcrNicsICcrMDY6MDAnLCBvciAnKzA2MDAnIHJlc3BlY3RpdmVseVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIGVxdWFsIHRvIGFub3RoZXIgem9uZVxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtab25lfSBvdGhlclpvbmUgLSB0aGUgem9uZSB0byBjb21wYXJlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi87XG4gIF9jcmVhdGVDbGFzcyhab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OlxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHpvbmVcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaWFuYU5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvZmZzZXQgaXMga25vd24gdG8gYmUgZml4ZWQgZm9yIHRoZSB3aG9sZSB5ZWFyLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImlzVW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gWm9uZTtcbn0oKTtcblxudmFyIHNpbmdsZXRvbiQxID0gbnVsbDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBsb2NhbCB6b25lIGZvciB0aGlzIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xudmFyIFN5c3RlbVpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9ab25lKSB7XG4gIF9pbmhlcml0c0xvb3NlKFN5c3RlbVpvbmUsIF9ab25lKTtcbiAgZnVuY3Rpb24gU3lzdGVtWm9uZSgpIHtcbiAgICByZXR1cm4gX1pvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG4gIHZhciBfcHJvdG8gPSBTeXN0ZW1ab25lLnByb3RvdHlwZTtcbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgX3Byb3RvLm9mZnNldE5hbWUgPSBmdW5jdGlvbiBvZmZzZXROYW1lKHRzLCBfcmVmKSB7XG4gICAgdmFyIGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0JDEodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHtcbiAgICByZXR1cm4gLW5ldyBEYXRlKHRzKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9jcmVhdGVDbGFzcyhTeXN0ZW1ab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiAvKiogQG92ZXJyaWRlICoqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcInN5c3RlbVwiO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqKi9cbiAgfSwge1xuICAgIGtleTogXCJpc1VuaXZlcnNhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJpbnN0YW5jZVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmVcbiAgICAgKiBAcmV0dXJuIHtTeXN0ZW1ab25lfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChzaW5nbGV0b24kMSA9PT0gbnVsbCkge1xuICAgICAgICBzaW5nbGV0b24kMSA9IG5ldyBTeXN0ZW1ab25lKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2luZ2xldG9uJDE7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTeXN0ZW1ab25lO1xufShab25lKTtcblxudmFyIGR0ZkNhY2hlID0ge307XG5mdW5jdGlvbiBtYWtlRFRGKHpvbmUpIHtcbiAgaWYgKCFkdGZDYWNoZVt6b25lXSkge1xuICAgIGR0ZkNhY2hlW3pvbmVdID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICBob3VyMTI6IGZhbHNlLFxuICAgICAgdGltZVpvbmU6IHpvbmUsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgZXJhOiBcInNob3J0XCJcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZHRmQ2FjaGVbem9uZV07XG59XG52YXIgdHlwZVRvUG9zID0ge1xuICB5ZWFyOiAwLFxuICBtb250aDogMSxcbiAgZGF5OiAyLFxuICBlcmE6IDMsXG4gIGhvdXI6IDQsXG4gIG1pbnV0ZTogNSxcbiAgc2Vjb25kOiA2XG59O1xuZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1xcdTIwMEUvZywgXCJcIiksXG4gICAgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSAoQUR8QkMpLD8gKFxcZCspOihcXGQrKTooXFxkKykvLmV4ZWMoZm9ybWF0dGVkKSxcbiAgICBmTW9udGggPSBwYXJzZWRbMV0sXG4gICAgZkRheSA9IHBhcnNlZFsyXSxcbiAgICBmWWVhciA9IHBhcnNlZFszXSxcbiAgICBmYWRPckJjID0gcGFyc2VkWzRdLFxuICAgIGZIb3VyID0gcGFyc2VkWzVdLFxuICAgIGZNaW51dGUgPSBwYXJzZWRbNl0sXG4gICAgZlNlY29uZCA9IHBhcnNlZFs3XTtcbiAgcmV0dXJuIFtmWWVhciwgZk1vbnRoLCBmRGF5LCBmYWRPckJjLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF07XG59XG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcbiAgdmFyIGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpO1xuICB2YXIgZmlsbGVkID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9mb3JtYXR0ZWQkaSA9IGZvcm1hdHRlZFtpXSxcbiAgICAgIHR5cGUgPSBfZm9ybWF0dGVkJGkudHlwZSxcbiAgICAgIHZhbHVlID0gX2Zvcm1hdHRlZCRpLnZhbHVlO1xuICAgIHZhciBwb3MgPSB0eXBlVG9Qb3NbdHlwZV07XG4gICAgaWYgKHR5cGUgPT09IFwiZXJhXCIpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQocG9zKSkge1xuICAgICAgZmlsbGVkW3Bvc10gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmlsbGVkO1xufVxudmFyIGlhbmFab25lQ2FjaGUgPSB7fTtcbi8qKlxuICogQSB6b25lIGlkZW50aWZpZWQgYnkgYW4gSUFOQSBpZGVudGlmaWVyLCBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG52YXIgSUFOQVpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9ab25lKSB7XG4gIF9pbmhlcml0c0xvb3NlKElBTkFab25lLCBfWm9uZSk7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFpvbmUgbmFtZVxuICAgKiBAcmV0dXJuIHtJQU5BWm9uZX1cbiAgICovXG4gIElBTkFab25lLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShuYW1lKSB7XG4gICAgaWYgKCFpYW5hWm9uZUNhY2hlW25hbWVdKSB7XG4gICAgICBpYW5hWm9uZUNhY2hlW25hbWVdID0gbmV3IElBTkFab25lKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gaWFuYVpvbmVDYWNoZVtuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBsb2NhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovO1xuICBJQU5BWm9uZS5yZXNldENhY2hlID0gZnVuY3Rpb24gcmVzZXRDYWNoZSgpIHtcbiAgICBpYW5hWm9uZUNhY2hlID0ge307XG4gICAgZHRmQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpcyBhIHZhbGlkIHNwZWNpZmllci4gVGhpcyBvbmx5IGNoZWNrcyB0aGUgc3RyaW5nJ3MgZm9ybWF0LCBub3QgdGhhdCB0aGUgc3BlY2lmaWVyIGlkZW50aWZpZXMgYSBrbm93biB6b25lOyBzZWUgaXNWYWxpZFpvbmUgZm9yIHRoYXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIHN0cmluZyB0byBjaGVjayB2YWxpZGl0eSBvblxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIHJldHVybnMgZmFsc2UgZm9yIHNvbWUgdmFsaWQgSUFOQSBuYW1lcy4gVXNlIGlzVmFsaWRab25lIGluc3RlYWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllciA9IGZ1bmN0aW9uIGlzVmFsaWRTcGVjaWZpZXIocykge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRab25lKHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlkZW50aWZpZXMgYSByZWFsIHpvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBUaGUgc3RyaW5nIHRvIGNoZWNrXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiBmYWxzZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgSUFOQVpvbmUuaXNWYWxpZFpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkWm9uZSh6b25lKSB7XG4gICAgaWYgKCF6b25lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgICAgdGltZVpvbmU6IHpvbmVcbiAgICAgIH0pLmZvcm1hdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gSUFOQVpvbmUobmFtZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfdGhpcyA9IF9ab25lLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgX3RoaXMuem9uZU5hbWUgPSBuYW1lO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cbiAgICBfdGhpcy52YWxpZCA9IElBTkFab25lLmlzVmFsaWRab25lKG5hbWUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIHZhciBfcHJvdG8gPSBJQU5BWm9uZS5wcm90b3R5cGU7XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikge1xuICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlO1xuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSwgdGhpcy5uYW1lKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0JDEodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRzKTtcbiAgICBpZiAoaXNOYU4oZGF0ZSkpIHJldHVybiBOYU47XG4gICAgdmFyIGR0ZiA9IG1ha2VEVEYodGhpcy5uYW1lKTtcbiAgICB2YXIgX3JlZjIgPSBkdGYuZm9ybWF0VG9QYXJ0cyA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpLFxuICAgICAgeWVhciA9IF9yZWYyWzBdLFxuICAgICAgbW9udGggPSBfcmVmMlsxXSxcbiAgICAgIGRheSA9IF9yZWYyWzJdLFxuICAgICAgYWRPckJjID0gX3JlZjJbM10sXG4gICAgICBob3VyID0gX3JlZjJbNF0sXG4gICAgICBtaW51dGUgPSBfcmVmMls1XSxcbiAgICAgIHNlY29uZCA9IF9yZWYyWzZdO1xuICAgIGlmIChhZE9yQmMgPT09IFwiQkNcIikge1xuICAgICAgeWVhciA9IC1NYXRoLmFicyh5ZWFyKSArIDE7XG4gICAgfVxuXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyBob3VyMTIgYW5kIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwMjU1NjQmY2FuPTImcT0lMjIyNCUzQTAwJTIyJTIwZGF0ZXRpbWVmb3JtYXRcbiAgICB2YXIgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjtcbiAgICB2YXIgYXNVVEMgPSBvYmpUb0xvY2FsVFMoe1xuICAgICAgeWVhcjogeWVhcixcbiAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgIGRheTogZGF5LFxuICAgICAgaG91cjogYWRqdXN0ZWRIb3VyLFxuICAgICAgbWludXRlOiBtaW51dGUsXG4gICAgICBzZWNvbmQ6IHNlY29uZCxcbiAgICAgIG1pbGxpc2Vjb25kOiAwXG4gICAgfSk7XG4gICAgdmFyIGFzVFMgPSArZGF0ZTtcbiAgICB2YXIgb3ZlciA9IGFzVFMgJSAxMDAwO1xuICAgIGFzVFMgLT0gb3ZlciA+PSAwID8gb3ZlciA6IDEwMDAgKyBvdmVyO1xuICAgIHJldHVybiAoYXNVVEMgLSBhc1RTKSAvICg2MCAqIDEwMDApO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9jcmVhdGVDbGFzcyhJQU5BWm9uZSwgW3tcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiaWFuYVwiO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqKi9cbiAgfSwge1xuICAgIGtleTogXCJpc1VuaXZlcnNhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIElBTkFab25lO1xufShab25lKTtcblxudmFyIF9leGNsdWRlZCA9IFtcImJhc2VcIl0sXG4gIF9leGNsdWRlZDIgPSBbXCJwYWRUb1wiLCBcImZsb29yXCJdO1xuXG4vLyB0b2RvIC0gcmVtYXAgY2FjaGluZ1xuXG52YXIgaW50bExGQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZExGKGxvY1N0cmluZywgb3B0cykge1xuICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIHZhciBkdGYgPSBpbnRsTEZDYWNoZVtrZXldO1xuICBpZiAoIWR0Zikge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkxpc3RGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTEZDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG52YXIgaW50bERUQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZERURihsb2NTdHJpbmcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICB2YXIgZHRmID0gaW50bERUQ2FjaGVba2V5XTtcbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxEVENhY2hlW2tleV0gPSBkdGY7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cbnZhciBpbnRsTnVtQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZElORihsb2NTdHJpbmcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICB2YXIgaW5mID0gaW50bE51bUNhY2hlW2tleV07XG4gIGlmICghaW5mKSB7XG4gICAgaW5mID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bE51bUNhY2hlW2tleV0gPSBpbmY7XG4gIH1cbiAgcmV0dXJuIGluZjtcbn1cbnZhciBpbnRsUmVsQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZFJURihsb2NTdHJpbmcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICB2YXIgX29wdHMgPSBvcHRzO1xuICAgIF9vcHRzLmJhc2U7XG4gICAgdmFyIGNhY2hlS2V5T3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vcHRzLCBfZXhjbHVkZWQpOyAvLyBleGNsdWRlIGBiYXNlYCBmcm9tIHRoZSBvcHRpb25zXG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcbiAgdmFyIGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxSZWxDYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG52YXIgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuZnVuY3Rpb24gc3lzdGVtTG9jYWxlKCkge1xuICBpZiAoc3lzTG9jYWxlQ2FjaGUpIHtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZVN0cikge1xuICAvLyBJIHJlYWxseSB3YW50IHRvIGF2b2lkIHdyaXRpbmcgYSBCQ1AgNDcgcGFyc2VyXG4gIC8vIHNlZSwgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2JjcC00N1xuICAvLyBJbnN0ZWFkLCB3ZSdsbCBkbyB0aGlzOlxuXG4gIC8vIGEpIGlmIHRoZSBzdHJpbmcgaGFzIG5vIC11IGV4dGVuc2lvbnMsIGp1c3QgbGVhdmUgaXQgYWxvbmVcbiAgLy8gYikgaWYgaXQgZG9lcywgdXNlIEludGwgdG8gcmVzb2x2ZSBldmVyeXRoaW5nXG4gIC8vIGMpIGlmIEludGwgZmFpbHMsIHRyeSBhZ2FpbiB3aXRob3V0IHRoZSAtdVxuXG4gIC8vIHByaXZhdGUgc3VidGFncyBhbmQgdW5pY29kZSBzdWJ0YWdzIGhhdmUgb3JkZXJpbmcgcmVxdWlyZW1lbnRzLFxuICAvLyBhbmQgd2UncmUgbm90IHByb3Blcmx5IHBhcnNpbmcgdGhpcywgc28ganVzdCBzdHJpcCBvdXQgdGhlXG4gIC8vIHByaXZhdGUgb25lcyBpZiB0aGV5IGV4aXN0LlxuICB2YXIgeEluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCIteC1cIik7XG4gIGlmICh4SW5kZXggIT09IC0xKSB7XG4gICAgbG9jYWxlU3RyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB4SW5kZXgpO1xuICB9XG4gIHZhciB1SW5kZXggPSBsb2NhbGVTdHIuaW5kZXhPZihcIi11LVwiKTtcbiAgaWYgKHVJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gW2xvY2FsZVN0cl07XG4gIH0gZWxzZSB7XG4gICAgdmFyIG9wdGlvbnM7XG4gICAgdmFyIHNlbGVjdGVkU3RyO1xuICAgIHRyeSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKGxvY2FsZVN0cikucmVzb2x2ZWRPcHRpb25zKCk7XG4gICAgICBzZWxlY3RlZFN0ciA9IGxvY2FsZVN0cjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2YXIgc21hbGxlciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgdUluZGV4KTtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYoc21hbGxlcikucmVzb2x2ZWRPcHRpb25zKCk7XG4gICAgICBzZWxlY3RlZFN0ciA9IHNtYWxsZXI7XG4gICAgfVxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBjYWxlbmRhciA9IF9vcHRpb25zLmNhbGVuZGFyO1xuICAgIHJldHVybiBbc2VsZWN0ZWRTdHIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5mdW5jdGlvbiBpbnRsQ29uZmlnU3RyaW5nKGxvY2FsZVN0ciwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikge1xuICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgaWYgKCFsb2NhbGVTdHIuaW5jbHVkZXMoXCItdS1cIikpIHtcbiAgICAgIGxvY2FsZVN0ciArPSBcIi11XCI7XG4gICAgfVxuICAgIGlmIChvdXRwdXRDYWxlbmRhcikge1xuICAgICAgbG9jYWxlU3RyICs9IFwiLWNhLVwiICsgb3V0cHV0Q2FsZW5kYXI7XG4gICAgfVxuICAgIGlmIChudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICAgIGxvY2FsZVN0ciArPSBcIi1udS1cIiArIG51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jYWxlU3RyO1xuICB9XG59XG5mdW5jdGlvbiBtYXBNb250aHMoZikge1xuICB2YXIgbXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgIHZhciBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5mdW5jdGlvbiBtYXBXZWVrZGF5cyhmKSB7XG4gIHZhciBtcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICB2YXIgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuZnVuY3Rpb24gbGlzdFN0dWZmKGxvYywgbGVuZ3RoLCBkZWZhdWx0T0ssIGVuZ2xpc2hGbiwgaW50bEZuKSB7XG4gIHZhciBtb2RlID0gbG9jLmxpc3RpbmdNb2RlKGRlZmF1bHRPSyk7XG4gIGlmIChtb2RlID09PSBcImVycm9yXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5mdW5jdGlvbiBzdXBwb3J0c0Zhc3ROdW1iZXJzKGxvYykge1xuICBpZiAobG9jLm51bWJlcmluZ1N5c3RlbSAmJiBsb2MubnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIgfHwgIWxvYy5sb2NhbGUgfHwgbG9jLmxvY2FsZS5zdGFydHNXaXRoKFwiZW5cIikgfHwgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jLmludGwpLnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCI7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgUG9seU51bWJlckZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvbHlOdW1iZXJGb3JtYXR0ZXIoaW50bCwgZm9yY2VTaW1wbGUsIG9wdHMpIHtcbiAgICB0aGlzLnBhZFRvID0gb3B0cy5wYWRUbyB8fCAwO1xuICAgIHRoaXMuZmxvb3IgPSBvcHRzLmZsb29yIHx8IGZhbHNlO1xuICAgIG9wdHMucGFkVG87XG4gICAgICBvcHRzLmZsb29yO1xuICAgICAgdmFyIG90aGVyT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG9wdHMsIF9leGNsdWRlZDIpO1xuICAgIGlmICghZm9yY2VTaW1wbGUgfHwgT2JqZWN0LmtleXMob3RoZXJPcHRzKS5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgaW50bE9wdHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgICAgfSwgb3B0cyk7XG4gICAgICBpZiAob3B0cy5wYWRUbyA+IDApIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcbiAgICAgIHRoaXMuaW5mID0gZ2V0Q2FjaGVkSU5GKGludGwsIGludGxPcHRzKTtcbiAgICB9XG4gIH1cbiAgdmFyIF9wcm90byA9IFBvbHlOdW1iZXJGb3JtYXR0ZXIucHJvdG90eXBlO1xuICBfcHJvdG8uZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGkpIHtcbiAgICBpZiAodGhpcy5pbmYpIHtcbiAgICAgIHZhciBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogaTtcbiAgICAgIHJldHVybiB0aGlzLmluZi5mb3JtYXQoZml4ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0byBtYXRjaCB0aGUgYnJvd3NlcidzIG51bWJlcmZvcm1hdHRlciBkZWZhdWx0c1xuICAgICAgdmFyIF9maXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogcm91bmRUbyhpLCAzKTtcbiAgICAgIHJldHVybiBwYWRTdGFydChfZml4ZWQsIHRoaXMucGFkVG8pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFBvbHlOdW1iZXJGb3JtYXR0ZXI7XG59KCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBQb2x5RGF0ZUZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvbHlEYXRlRm9ybWF0dGVyKGR0LCBpbnRsLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLm9yaWdpbmFsWm9uZSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgeiA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5vcHRzLnRpbWVab25lKSB7XG4gICAgICAvLyBEb24ndCBhcHBseSBhbnkgd29ya2Fyb3VuZHMgaWYgYSB0aW1lWm9uZSBpcyBleHBsaWNpdGx5IHByb3ZpZGVkIGluIG9wdHNcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAvLyBVVEMtOCBvciBFdGMvVVRDLTggYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YSwgb25seSBFdGMvR01UKzggYW5kIHRoZSBsaWtlLlxuICAgICAgLy8gVGhhdCBpcyB3aHkgZml4ZWQtb2Zmc2V0IFRaIGlzIHNldCB0byB0aGF0IHVubGVzcyBpdCBpczpcbiAgICAgIC8vIDEuIFJlcHJlc2VudGluZyBvZmZzZXQgMCB3aGVuIFVUQyBpcyB1c2VkIHRvIG1haW50YWluIHByZXZpb3VzIGJlaGF2aW9yIGFuZCBkb2VzIG5vdCBiZWNvbWUgR01ULlxuICAgICAgLy8gMi4gVW5zdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXI6XG4gICAgICAvLyAgICAtIHNvbWUgZG8gbm90IHN1cHBvcnQgRXRjL1xuICAgICAgLy8gICAgLSA8IEV0Yy9HTVQtMTQsID4gRXRjL0dNVCsxMiwgYW5kIDMwLW1pbnV0ZSBvciA0NS1taW51dGUgb2Zmc2V0cyBhcmUgbm90IHBhcnQgb2YgdHpkYXRhXG4gICAgICB2YXIgZ210T2Zmc2V0ID0gLTEgKiAoZHQub2Zmc2V0IC8gNjApO1xuICAgICAgdmFyIG9mZnNldFogPSBnbXRPZmZzZXQgPj0gMCA/IFwiRXRjL0dNVCtcIiArIGdtdE9mZnNldCA6IFwiRXRjL0dNVFwiICsgZ210T2Zmc2V0O1xuICAgICAgaWYgKGR0Lm9mZnNldCAhPT0gMCAmJiBJQU5BWm9uZS5jcmVhdGUob2Zmc2V0WikudmFsaWQpIHtcbiAgICAgICAgeiA9IG9mZnNldFo7XG4gICAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdCBhbGwgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjLys0OjMwIGFyZSBwcmVzZW50IGluIHR6ZGF0YSBzb1xuICAgICAgICAvLyB3ZSBtYW51YWxseSBhcHBseSB0aGUgb2Zmc2V0IGFuZCBzdWJzdGl0dXRlIHRoZSB6b25lIGFzIG5lZWRlZC5cbiAgICAgICAgeiA9IFwiVVRDXCI7XG4gICAgICAgIHRoaXMuZHQgPSBkdC5vZmZzZXQgPT09IDAgPyBkdCA6IGR0LnNldFpvbmUoXCJVVENcIikucGx1cyh7XG4gICAgICAgICAgbWludXRlczogZHQub2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9yaWdpbmFsWm9uZSA9IGR0LnpvbmU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwic3lzdGVtXCIpIHtcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gXCJpYW5hXCIpIHtcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIHogPSBkdC56b25lLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEN1c3RvbSB6b25lcyBjYW4gaGF2ZSBhbnkgb2Zmc2V0IC8gb2Zmc2V0TmFtZSBzbyB3ZSBqdXN0IG1hbnVhbGx5XG4gICAgICAvLyBhcHBseSB0aGUgb2Zmc2V0IGFuZCBzdWJzdGl0dXRlIHRoZSB6b25lIGFzIG5lZWRlZC5cbiAgICAgIHogPSBcIlVUQ1wiO1xuICAgICAgdGhpcy5kdCA9IGR0LnNldFpvbmUoXCJVVENcIikucGx1cyh7XG4gICAgICAgIG1pbnV0ZXM6IGR0Lm9mZnNldFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9yaWdpbmFsWm9uZSA9IGR0LnpvbmU7XG4gICAgfVxuICAgIHZhciBpbnRsT3B0cyA9IF9leHRlbmRzKHt9LCB0aGlzLm9wdHMpO1xuICAgIGludGxPcHRzLnRpbWVab25lID0gaW50bE9wdHMudGltZVpvbmUgfHwgejtcbiAgICB0aGlzLmR0ZiA9IGdldENhY2hlZERURihpbnRsLCBpbnRsT3B0cyk7XG4gIH1cbiAgdmFyIF9wcm90bzIgPSBQb2x5RGF0ZUZvcm1hdHRlci5wcm90b3R5cGU7XG4gIF9wcm90bzIuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmICh0aGlzLm9yaWdpbmFsWm9uZSkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSB0byBzdWJzdGl0dXRlIGluIHRoZSBhY3R1YWwgem9uZSBuYW1lLCB3ZSBoYXZlIHRvIHVzZVxuICAgICAgLy8gZm9ybWF0VG9QYXJ0cyBzbyB0aGF0IHRoZSB0aW1lem9uZSBjYW4gYmUgcmVwbGFjZWQuXG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRUb1BhcnRzKCkubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXQodGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgfTtcbiAgX3Byb3RvMi5mb3JtYXRUb1BhcnRzID0gZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJ0cyA9IHRoaXMuZHRmLmZvcm1hdFRvUGFydHModGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgICBpZiAodGhpcy5vcmlnaW5hbFpvbmUpIHtcbiAgICAgIHJldHVybiBwYXJ0cy5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gXCJ0aW1lWm9uZU5hbWVcIikge1xuICAgICAgICAgIHZhciBvZmZzZXROYW1lID0gX3RoaXMub3JpZ2luYWxab25lLm9mZnNldE5hbWUoX3RoaXMuZHQudHMsIHtcbiAgICAgICAgICAgIGxvY2FsZTogX3RoaXMuZHQubG9jYWxlLFxuICAgICAgICAgICAgZm9ybWF0OiBfdGhpcy5vcHRzLnRpbWVab25lTmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcGFydCwge1xuICAgICAgICAgICAgdmFsdWU6IG9mZnNldE5hbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbiAgfTtcbiAgX3Byb3RvMi5yZXNvbHZlZE9wdGlvbnMgPSBmdW5jdGlvbiByZXNvbHZlZE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9O1xuICByZXR1cm4gUG9seURhdGVGb3JtYXR0ZXI7XG59KCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBQb2x5UmVsRm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUG9seVJlbEZvcm1hdHRlcihpbnRsLCBpc0VuZ2xpc2gsIG9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBfZXh0ZW5kcyh7XG4gICAgICBzdHlsZTogXCJsb25nXCJcbiAgICB9LCBvcHRzKTtcbiAgICBpZiAoIWlzRW5nbGlzaCAmJiBoYXNSZWxhdGl2ZSgpKSB7XG4gICAgICB0aGlzLnJ0ZiA9IGdldENhY2hlZFJURihpbnRsLCBvcHRzKTtcbiAgICB9XG4gIH1cbiAgdmFyIF9wcm90bzMgPSBQb2x5UmVsRm9ybWF0dGVyLnByb3RvdHlwZTtcbiAgX3Byb3RvMy5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoY291bnQsIHVuaXQpIHtcbiAgICBpZiAodGhpcy5ydGYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXQoY291bnQsIHVuaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCB0aGlzLm9wdHMubnVtZXJpYywgdGhpcy5vcHRzLnN0eWxlICE9PSBcImxvbmdcIik7XG4gICAgfVxuICB9O1xuICBfcHJvdG8zLmZvcm1hdFRvUGFydHMgPSBmdW5jdGlvbiBmb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBQb2x5UmVsRm9ybWF0dGVyO1xufSgpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgTG9jYWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgTG9jYWxlLmZyb21PcHRzID0gZnVuY3Rpb24gZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XG4gIH07XG4gIExvY2FsZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyLCBkZWZhdWx0VG9FTikge1xuICAgIGlmIChkZWZhdWx0VG9FTiA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0VG9FTiA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgc3BlY2lmaWVkTG9jYWxlID0gbG9jYWxlIHx8IFNldHRpbmdzLmRlZmF1bHRMb2NhbGU7XG4gICAgLy8gdGhlIHN5c3RlbSBsb2NhbGUgaXMgdXNlZnVsIGZvciBodW1hbiByZWFkYWJsZSBzdHJpbmdzIGJ1dCBhbm5veWluZyBmb3IgcGFyc2luZy9mb3JtYXR0aW5nIGtub3duIGZvcm1hdHNcbiAgICB2YXIgbG9jYWxlUiA9IHNwZWNpZmllZExvY2FsZSB8fCAoZGVmYXVsdFRvRU4gPyBcImVuLVVTXCIgOiBzeXN0ZW1Mb2NhbGUoKSk7XG4gICAgdmFyIG51bWJlcmluZ1N5c3RlbVIgPSBudW1iZXJpbmdTeXN0ZW0gfHwgU2V0dGluZ3MuZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICB2YXIgb3V0cHV0Q2FsZW5kYXJSID0gb3V0cHV0Q2FsZW5kYXIgfHwgU2V0dGluZ3MuZGVmYXVsdE91dHB1dENhbGVuZGFyO1xuICAgIHJldHVybiBuZXcgTG9jYWxlKGxvY2FsZVIsIG51bWJlcmluZ1N5c3RlbVIsIG91dHB1dENhbGVuZGFyUiwgc3BlY2lmaWVkTG9jYWxlKTtcbiAgfTtcbiAgTG9jYWxlLnJlc2V0Q2FjaGUgPSBmdW5jdGlvbiByZXNldENhY2hlKCkge1xuICAgIHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcbiAgICBpbnRsRFRDYWNoZSA9IHt9O1xuICAgIGludGxOdW1DYWNoZSA9IHt9O1xuICAgIGludGxSZWxDYWNoZSA9IHt9O1xuICB9O1xuICBMb2NhbGUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3QoX3RlbXApIHtcbiAgICB2YXIgX3JlZjIgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIGxvY2FsZSA9IF9yZWYyLmxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYyLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZjIub3V0cHV0Q2FsZW5kYXI7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKTtcbiAgfTtcbiAgZnVuY3Rpb24gTG9jYWxlKGxvY2FsZSwgbnVtYmVyaW5nLCBvdXRwdXRDYWxlbmRhciwgc3BlY2lmaWVkTG9jYWxlKSB7XG4gICAgdmFyIF9wYXJzZUxvY2FsZVN0cmluZyA9IHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZSksXG4gICAgICBwYXJzZWRMb2NhbGUgPSBfcGFyc2VMb2NhbGVTdHJpbmdbMF0sXG4gICAgICBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gPSBfcGFyc2VMb2NhbGVTdHJpbmdbMV0sXG4gICAgICBwYXJzZWRPdXRwdXRDYWxlbmRhciA9IF9wYXJzZUxvY2FsZVN0cmluZ1syXTtcbiAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDtcbiAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDtcbiAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7XG4gICAgdGhpcy53ZWVrZGF5c0NhY2hlID0ge1xuICAgICAgZm9ybWF0OiB7fSxcbiAgICAgIHN0YW5kYWxvbmU6IHt9XG4gICAgfTtcbiAgICB0aGlzLm1vbnRoc0NhY2hlID0ge1xuICAgICAgZm9ybWF0OiB7fSxcbiAgICAgIHN0YW5kYWxvbmU6IHt9XG4gICAgfTtcbiAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNwZWNpZmllZExvY2FsZSA9IHNwZWNpZmllZExvY2FsZTtcbiAgICB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID0gbnVsbDtcbiAgfVxuICB2YXIgX3Byb3RvNCA9IExvY2FsZS5wcm90b3R5cGU7XG4gIF9wcm90bzQubGlzdGluZ01vZGUgPSBmdW5jdGlvbiBsaXN0aW5nTW9kZSgpIHtcbiAgICB2YXIgaXNBY3R1YWxseUVuID0gdGhpcy5pc0VuZ2xpc2goKTtcbiAgICB2YXIgaGFzTm9XZWlyZG5lc3MgPSAodGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG51bGwgfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiKSAmJiAodGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gbnVsbCB8fCB0aGlzLm91dHB1dENhbGVuZGFyID09PSBcImdyZWdvcnlcIik7XG4gICAgcmV0dXJuIGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcyA/IFwiZW5cIiA6IFwiaW50bFwiO1xuICB9O1xuICBfcHJvdG80LmNsb25lID0gZnVuY3Rpb24gY2xvbmUoYWx0cykge1xuICAgIGlmICghYWx0cyB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhbHRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShhbHRzLmxvY2FsZSB8fCB0aGlzLnNwZWNpZmllZExvY2FsZSwgYWx0cy5udW1iZXJpbmdTeXN0ZW0gfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIGFsdHMub3V0cHV0Q2FsZW5kYXIgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciwgYWx0cy5kZWZhdWx0VG9FTiB8fCBmYWxzZSk7XG4gICAgfVxuICB9O1xuICBfcHJvdG80LnJlZGVmYXVsdFRvRU4gPSBmdW5jdGlvbiByZWRlZmF1bHRUb0VOKGFsdHMpIHtcbiAgICBpZiAoYWx0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBhbHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsb25lKF9leHRlbmRzKHt9LCBhbHRzLCB7XG4gICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcbiAgX3Byb3RvNC5yZWRlZmF1bHRUb1N5c3RlbSA9IGZ1bmN0aW9uIHJlZGVmYXVsdFRvU3lzdGVtKGFsdHMpIHtcbiAgICBpZiAoYWx0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBhbHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsb25lKF9leHRlbmRzKHt9LCBhbHRzLCB7XG4gICAgICBkZWZhdWx0VG9FTjogZmFsc2VcbiAgICB9KSk7XG4gIH07XG4gIF9wcm90bzQubW9udGhzID0gZnVuY3Rpb24gbW9udGhzJDEobGVuZ3RoLCBmb3JtYXQsIGRlZmF1bHRPSykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgbW9udGhzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IGZvcm1hdCA/IHtcbiAgICAgICAgICBtb250aDogbGVuZ3RoLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBtb250aDogbGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/IFwiZm9ybWF0XCIgOiBcInN0YW5kYWxvbmVcIjtcbiAgICAgIGlmICghX3RoaXMyLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczIubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwTW9udGhzKGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuZXh0cmFjdChkdCwgaW50bCwgXCJtb250aFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXMyLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvNC53ZWVrZGF5cyA9IGZ1bmN0aW9uIHdlZWtkYXlzJDEobGVuZ3RoLCBmb3JtYXQsIGRlZmF1bHRPSykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgd2Vla2RheXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnRsID0gZm9ybWF0ID8ge1xuICAgICAgICAgIHdlZWtkYXk6IGxlbmd0aCxcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgICB9IDoge1xuICAgICAgICAgIHdlZWtkYXk6IGxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXRTdHIgPSBmb3JtYXQgPyBcImZvcm1hdFwiIDogXCJzdGFuZGFsb25lXCI7XG4gICAgICBpZiAoIV90aGlzMy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cyhmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLmV4dHJhY3QoZHQsIGludGwsIFwid2Vla2RheVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXMzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9O1xuICBfcHJvdG80Lm1lcmlkaWVtcyA9IGZ1bmN0aW9uIG1lcmlkaWVtcyQxKGRlZmF1bHRPSykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCB1bmRlZmluZWQsIGRlZmF1bHRPSywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lcmlkaWVtcztcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJbiB0aGVvcnkgdGhlcmUgY291bGQgYmUgYXJpYml0cmFyeSBkYXkgcGVyaW9kcy4gV2UncmUgZ29ubmEgYXNzdW1lIHRoZXJlIGFyZSBleGFjdGx5IHR3b1xuICAgICAgLy8gZm9yIEFNIGFuZCBQTS4gVGhpcyBpcyBwcm9iYWJseSB3cm9uZywgYnV0IGl0J3MgbWFrZXMgcGFyc2luZyB3YXkgZWFzaWVyLlxuICAgICAgaWYgKCFfdGhpczQubWVyaWRpZW1DYWNoZSkge1xuICAgICAgICB2YXIgaW50bCA9IHtcbiAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBob3VyQ3ljbGU6IFwiaDEyXCJcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXM0Lm1lcmlkaWVtQ2FjaGUgPSBbRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgOSksIERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDE5KV0ubWFwKGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQuZXh0cmFjdChkdCwgaW50bCwgXCJkYXlwZXJpb2RcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzNC5tZXJpZGllbUNhY2hlO1xuICAgIH0pO1xuICB9O1xuICBfcHJvdG80LmVyYXMgPSBmdW5jdGlvbiBlcmFzJDEobGVuZ3RoLCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcbiAgICBpZiAoZGVmYXVsdE9LID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRPSyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIGVyYXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnRsID0ge1xuICAgICAgICBlcmE6IGxlbmd0aFxuICAgICAgfTtcblxuICAgICAgLy8gVGhpcyBpcyBwcm9ibGVtYXRpYy4gRGlmZmVyZW50IGNhbGVuZGFycyBhcmUgZ29pbmcgdG8gZGVmaW5lIGVyYXMgdG90YWxseSBkaWZmZXJlbnRseS4gV2hhdCBJIG5lZWQgaXMgdGhlIG1pbmltdW0gc2V0IG9mIGRhdGVzXG4gICAgICAvLyB0byBkZWZpbml0ZWx5IGVudW1lcmF0ZSB0aGVtLlxuICAgICAgaWYgKCFfdGhpczUuZXJhQ2FjaGVbbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczUuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNS5leHRyYWN0KGR0LCBpbnRsLCBcImVyYVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXM1LmVyYUNhY2hlW2xlbmd0aF07XG4gICAgfSk7XG4gIH07XG4gIF9wcm90bzQuZXh0cmFjdCA9IGZ1bmN0aW9uIGV4dHJhY3QoZHQsIGludGxPcHRzLCBmaWVsZCkge1xuICAgIHZhciBkZiA9IHRoaXMuZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSxcbiAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICBtYXRjaGluZyA9IHJlc3VsdHMuZmluZChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoaW5nID8gbWF0Y2hpbmcudmFsdWUgOiBudWxsO1xuICB9O1xuICBfcHJvdG80Lm51bWJlckZvcm1hdHRlciA9IGZ1bmN0aW9uIG51bWJlckZvcm1hdHRlcihvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICAvLyB0aGlzIGZvcmNlc2ltcGxlIG9wdGlvbiBpcyBuZXZlciB1c2VkICh0aGUgb25seSBjYWxsZXIgc2hvcnQtY2lyY3VpdHMgb24gaXQsIGJ1dCBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSlcbiAgICAvLyAoaW4gY29udHJhc3QsIHRoZSByZXN0IG9mIHRoZSBjb25kaXRpb24gaXMgdXNlZCBoZWF2aWx5KVxuICAgIHJldHVybiBuZXcgUG9seU51bWJlckZvcm1hdHRlcih0aGlzLmludGwsIG9wdHMuZm9yY2VTaW1wbGUgfHwgdGhpcy5mYXN0TnVtYmVycywgb3B0cyk7XG4gIH07XG4gIF9wcm90bzQuZHRGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkdEZvcm1hdHRlcihkdCwgaW50bE9wdHMpIHtcbiAgICBpZiAoaW50bE9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgaW50bE9wdHMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7XG4gIH07XG4gIF9wcm90bzQucmVsRm9ybWF0dGVyID0gZnVuY3Rpb24gcmVsRm9ybWF0dGVyKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9seVJlbEZvcm1hdHRlcih0aGlzLmludGwsIHRoaXMuaXNFbmdsaXNoKCksIG9wdHMpO1xuICB9O1xuICBfcHJvdG80Lmxpc3RGb3JtYXR0ZXIgPSBmdW5jdGlvbiBsaXN0Rm9ybWF0dGVyKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiBnZXRDYWNoZWRMRih0aGlzLmludGwsIG9wdHMpO1xuICB9O1xuICBfcHJvdG80LmlzRW5nbGlzaCA9IGZ1bmN0aW9uIGlzRW5nbGlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUgPT09IFwiZW5cIiB8fCB0aGlzLmxvY2FsZS50b0xvd2VyQ2FzZSgpID09PSBcImVuLXVzXCIgfHwgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGUuc3RhcnRzV2l0aChcImVuLXVzXCIpO1xuICB9O1xuICBfcHJvdG80LmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiYgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gb3RoZXIub3V0cHV0Q2FsZW5kYXI7XG4gIH07XG4gIF9jcmVhdGVDbGFzcyhMb2NhbGUsIFt7XG4gICAga2V5OiBcImZhc3ROdW1iZXJzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBzdXBwb3J0c0Zhc3ROdW1iZXJzKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2NhbGU7XG59KCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG52YXIgRml4ZWRPZmZzZXRab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShGaXhlZE9mZnNldFpvbmUsIF9ab25lKTtcbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSB3aXRoIGEgc3BlY2lmaWVkIG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCBpbiBtaW51dGVzXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZSA9IGZ1bmN0aW9uIGluc3RhbmNlKG9mZnNldCkge1xuICAgIHJldHVybiBvZmZzZXQgPT09IDAgPyBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2UgOiBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGluc3RhbmNlIG9mIEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIGEgVVRDIG9mZnNldCBzdHJpbmcsIGxpa2UgXCJVVEMrNlwiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIG9mZnNldCBzdHJpbmcgdG8gcGFyc2VcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzA2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQy02OjAwXCIpXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovO1xuICBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIgPSBmdW5jdGlvbiBwYXJzZVNwZWNpZmllcihzKSB7XG4gICAgaWYgKHMpIHtcbiAgICAgIHZhciByID0gcy5tYXRjaCgvXnV0Yyg/OihbKy1dXFxkezEsMn0pKD86OihcXGR7Mn0pKT8pPyQvaSk7XG4gICAgICBpZiAocikge1xuICAgICAgICByZXR1cm4gbmV3IEZpeGVkT2Zmc2V0Wm9uZShzaWduZWRPZmZzZXQoclsxXSwgclsyXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgZnVuY3Rpb24gRml4ZWRPZmZzZXRab25lKG9mZnNldCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfdGhpcyA9IF9ab25lLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgX3RoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgdmFyIF9wcm90byA9IEZpeGVkT2Zmc2V0Wm9uZS5wcm90b3R5cGU7XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9wcm90by5mb3JtYXRPZmZzZXQgPSBmdW5jdGlvbiBmb3JtYXRPZmZzZXQkMSh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCBmb3JtYXQpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqLztcbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09IFwiZml4ZWRcIiAmJiBvdGhlclpvbmUuZml4ZWQgPT09IHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqLztcbiAgX2NyZWF0ZUNsYXNzKEZpeGVkT2Zmc2V0Wm9uZSwgW3tcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiZml4ZWRcIjtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpeGVkID09PSAwID8gXCJVVENcIiA6IFwiVVRDXCIgKyBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgXCJuYXJyb3dcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlhbmFOYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5maXhlZCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gXCJFdGMvVVRDXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJFdGMvR01UXCIgKyBmb3JtYXRPZmZzZXQoLXRoaXMuZml4ZWQsIFwibmFycm93XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1VuaXZlcnNhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcInV0Y0luc3RhbmNlXCIsXG4gICAgZ2V0OlxuICAgIC8qKlxuICAgICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBVVENcbiAgICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHNpbmdsZXRvbiA9PT0gbnVsbCkge1xuICAgICAgICBzaW5nbGV0b24gPSBuZXcgRml4ZWRPZmZzZXRab25lKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZTtcbn0oWm9uZSk7XG5cbi8qKlxuICogQSB6b25lIHRoYXQgZmFpbGVkIHRvIHBhcnNlLiBZb3Ugc2hvdWxkIG5ldmVyIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhpcy5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG52YXIgSW52YWxpZFpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9ab25lKSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRab25lLCBfWm9uZSk7XG4gIGZ1bmN0aW9uIEludmFsaWRab25lKHpvbmVOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF90aGlzID0gX1pvbmUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIC8qKiAgQHByaXZhdGUgKi9cbiAgICBfdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIHZhciBfcHJvdG8gPSBJbnZhbGlkWm9uZS5wcm90b3R5cGU7XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi87XG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovO1xuICBfY3JlYXRlQ2xhc3MoSW52YWxpZFpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSW52YWxpZFpvbmU7XG59KFpvbmUpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIGRlZmF1bHRab25lKSB7XG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkgfHwgaW5wdXQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XG4gIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBab25lKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIHZhciBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gXCJkZWZhdWx0XCIpIHJldHVybiBkZWZhdWx0Wm9uZTtlbHNlIGlmIChsb3dlcmVkID09PSBcImxvY2FsXCIgfHwgbG93ZXJlZCA9PT0gXCJzeXN0ZW1cIikgcmV0dXJuIFN5c3RlbVpvbmUuaW5zdGFuY2U7ZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO2Vsc2UgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBJQU5BWm9uZS5jcmVhdGUoaW5wdXQpO1xuICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoaW5wdXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJvYmplY3RcIiAmJiBpbnB1dC5vZmZzZXQgJiYgdHlwZW9mIGlucHV0Lm9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgIC8vIFRoaXMgaXMgZHVtYiwgYnV0IHRoZSBpbnN0YW5jZW9mIGNoZWNrIGFib3ZlIGRvZXNuJ3Qgc2VlbSB0byByZWFsbHkgd29ya1xuICAgIC8vIHNvIHdlJ3JlIGR1Y2sgY2hlY2tpbmcgaXRcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH1cbn1cblxudmFyIG5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgfSxcbiAgZGVmYXVsdFpvbmUgPSBcInN5c3RlbVwiLFxuICBkZWZhdWx0TG9jYWxlID0gbnVsbCxcbiAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bGwsXG4gIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG51bGwsXG4gIHR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDYwLFxuICB0aHJvd09uSW52YWxpZDtcblxuLyoqXG4gKiBTZXR0aW5ncyBjb250YWlucyBzdGF0aWMgZ2V0dGVycyBhbmQgc2V0dGVycyB0aGF0IGNvbnRyb2wgTHV4b24ncyBvdmVyYWxsIGJlaGF2aW9yLiBMdXhvbiBpcyBhIHNpbXBsZSBsaWJyYXJ5IHdpdGggZmV3IG9wdGlvbnMsIGJ1dCB0aGUgb25lcyBpdCBkb2VzIGhhdmUgbGl2ZSBoZXJlLlxuICovXG52YXIgU2V0dGluZ3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXR0aW5ncygpIHt9XG4gIC8qKlxuICAgKiBSZXNldCBMdXhvbidzIGdsb2JhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIFNldHRpbmdzLnJlc2V0Q2FjaGVzID0gZnVuY3Rpb24gcmVzZXRDYWNoZXMoKSB7XG4gICAgTG9jYWxlLnJlc2V0Q2FjaGUoKTtcbiAgICBJQU5BWm9uZS5yZXNldENhY2hlKCk7XG4gIH07XG4gIF9jcmVhdGVDbGFzcyhTZXR0aW5ncywgbnVsbCwgW3tcbiAgICBrZXk6IFwibm93XCIsXG4gICAgZ2V0OlxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBub3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIG51bWJlciwgd2hpY2ggd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBhbiBFcG9jaCBtaWxsaXNlY29uZCBjb3VudFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXG4gICAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gMCAvLyBhbHdheXMgcHJldGVuZCBpdCdzIEphbiAxLCAxOTcwIGF0IG1pZG5pZ2h0IGluIFVUQyB0aW1lXG4gICAgICovLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG4pIHtcbiAgICAgIG5vdyA9IG47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIFVzZSB0aGUgdmFsdWUgXCJzeXN0ZW1cIiB0byByZXNldCB0aGlzIHZhbHVlIHRvIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0Wm9uZVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIG9iamVjdCBjdXJyZW50bHkgdXNlZCB0byBjcmVhdGUgRGF0ZVRpbWVzLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxuICAgICAqIEB0eXBlIHtab25lfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVab25lKGRlZmF1bHRab25lLCBTeXN0ZW1ab25lLmluc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqLyxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh6b25lKSB7XG4gICAgICBkZWZhdWx0Wm9uZSA9IHpvbmU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRMb2NhbGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGxvY2FsZSkge1xuICAgICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0TnVtYmVyaW5nU3lzdGVtXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi8sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdE91dHB1dENhbGVuZGFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE91dHB1dENhbGVuZGFyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG91dHB1dENhbGVuZGFyKSB7XG4gICAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1dG9mZiB5ZWFyIGFmdGVyIHdoaWNoIGEgc3RyaW5nIGVuY29kaW5nIGEgeWVhciBhcyB0d28gZGlnaXRzIGlzIGludGVycHJldGVkIHRvIG9jY3VyIGluIHRoZSBjdXJyZW50IGNlbnR1cnkuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0d29EaWdpdEN1dG9mZlllYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0d29EaWdpdEN1dG9mZlllYXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjdXRvZmYgeWVhciBhZnRlciB3aGljaCBhIHN0cmluZyBlbmNvZGluZyBhIHllYXIgYXMgdHdvIGRpZ2l0cyBpcyBpbnRlcnByZXRlZCB0byBvY2N1ciBpbiB0aGUgY3VycmVudCBjZW50dXJ5LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGV4YW1wbGUgU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID0gMCAvLyBjdXQtb2ZmIHllYXIgaXMgMCwgc28gYWxsICd5eScgYXJlIGludGVycHJldHRlZCBhcyBjdXJyZW50IGNlbnR1cnlcbiAgICAgKiBAZXhhbXBsZSBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPSA1MCAvLyAnNDknIC0+IDE5NDk7ICc1MCcgLT4gMjA1MFxuICAgICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDE5NTAgLy8gaW50ZXJwcmV0dGVkIGFzIDUwXG4gICAgICogQGV4YW1wbGUgU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID0gMjA1MCAvLyBBTFNPIGludGVycHJldHRlZCBhcyA1MFxuICAgICAqLyxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChjdXRvZmZZZWFyKSB7XG4gICAgICB0d29EaWdpdEN1dG9mZlllYXIgPSBjdXRvZmZZZWFyICUgMTAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInRocm93T25JbnZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhyb3dPbkludmFsaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHQpIHtcbiAgICAgIHRocm93T25JbnZhbGlkID0gdDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNldHRpbmdzO1xufSgpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuLy8gVFlQRVNcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwidW5kZWZpbmVkXCI7XG59XG5mdW5jdGlvbiBpc051bWJlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzSW50ZWdlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIiAmJiBvICUgMSA9PT0gMDtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNEYXRlKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gXCJbb2JqZWN0IERhdGVdXCI7XG59XG5cbi8vIENBUEFCSUxJVElFU1xuXG5mdW5jdGlvbiBoYXNSZWxhdGl2ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIEludGwgIT09IFwidW5kZWZpbmVkXCIgJiYgISFJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBPQkpFQ1RTIEFORCBBUlJBWVNcblxuZnVuY3Rpb24gbWF5YmVBcnJheSh0aGluZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGluZykgPyB0aGluZyA6IFt0aGluZ107XG59XG5mdW5jdGlvbiBiZXN0QnkoYXJyLCBieSwgY29tcGFyZSkge1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGJlc3QsIG5leHQpIHtcbiAgICB2YXIgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XG4gICAgaWYgKCFiZXN0KSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChhLCBrKSB7XG4gICAgYVtrXSA9IG9ialtrXTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufVxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuLy8gTlVNQkVSUyBBTkQgU1RSSU5HU1xuXG5mdW5jdGlvbiBpbnRlZ2VyQmV0d2Vlbih0aGluZywgYm90dG9tLCB0b3ApIHtcbiAgcmV0dXJuIGlzSW50ZWdlcih0aGluZykgJiYgdGhpbmcgPj0gYm90dG9tICYmIHRoaW5nIDw9IHRvcDtcbn1cblxuLy8geCAlIG4gYnV0IHRha2VzIHRoZSBzaWduIG9mIG4gaW5zdGVhZCBvZiB4XG5mdW5jdGlvbiBmbG9vck1vZCh4LCBuKSB7XG4gIHJldHVybiB4IC0gbiAqIE1hdGguZmxvb3IoeCAvIG4pO1xufVxuZnVuY3Rpb24gcGFkU3RhcnQoaW5wdXQsIG4pIHtcbiAgaWYgKG4gPT09IHZvaWQgMCkge1xuICAgIG4gPSAyO1xuICB9XG4gIHZhciBpc05lZyA9IGlucHV0IDwgMDtcbiAgdmFyIHBhZGRlZDtcbiAgaWYgKGlzTmVnKSB7XG4gICAgcGFkZGVkID0gXCItXCIgKyAoXCJcIiArIC1pbnB1dCkucGFkU3RhcnQobiwgXCIwXCIpO1xuICB9IGVsc2Uge1xuICAgIHBhZGRlZCA9IChcIlwiICsgaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfVxuICByZXR1cm4gcGFkZGVkO1xufVxuZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nLCAxMCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRmxvYXRpbmcoc3RyaW5nKSB7XG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlTWlsbGlzKGZyYWN0aW9uKSB7XG4gIC8vIFJldHVybiB1bmRlZmluZWQgKGluc3RlYWQgb2YgMCkgaW4gdGhlc2UgY2FzZXMsIHdoZXJlIGZyYWN0aW9uIGlzIG5vdCBzZXRcbiAgaWYgKGlzVW5kZWZpbmVkKGZyYWN0aW9uKSB8fCBmcmFjdGlvbiA9PT0gbnVsbCB8fCBmcmFjdGlvbiA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGYgPSBwYXJzZUZsb2F0KFwiMC5cIiArIGZyYWN0aW9uKSAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZik7XG4gIH1cbn1cbmZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBkaWdpdHMsIHRvd2FyZFplcm8pIHtcbiAgaWYgKHRvd2FyZFplcm8gPT09IHZvaWQgMCkge1xuICAgIHRvd2FyZFplcm8gPSBmYWxzZTtcbiAgfVxuICB2YXIgZmFjdG9yID0gTWF0aC5wb3coMTAsIGRpZ2l0cyksXG4gICAgcm91bmRlciA9IHRvd2FyZFplcm8gPyBNYXRoLnRydW5jIDogTWF0aC5yb3VuZDtcbiAgcmV0dXJuIHJvdW5kZXIobnVtYmVyICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cblxuLy8gREFURSBCQVNJQ1NcblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn1cbmZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbn1cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gIHZhciBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSxcbiAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuICBpZiAobW9kTW9udGggPT09IDIpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcihtb2RZZWFyKSA/IDI5IDogMjg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vZE1vbnRoIC0gMV07XG4gIH1cbn1cblxuLy8gY292ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgbG9jYWwgdGltZXN0YW1wIChlcG9jaCwgYnV0IHdpdGggdGhlIG9mZnNldCBiYWtlZCBpbilcbmZ1bmN0aW9uIG9ialRvTG9jYWxUUyhvYmopIHtcbiAgdmFyIGQgPSBEYXRlLlVUQyhvYmoueWVhciwgb2JqLm1vbnRoIC0gMSwgb2JqLmRheSwgb2JqLmhvdXIsIG9iai5taW51dGUsIG9iai5zZWNvbmQsIG9iai5taWxsaXNlY29uZCk7XG5cbiAgLy8gZm9yIGxlZ2FjeSByZWFzb25zLCB5ZWFycyBiZXR3ZWVuIDAgYW5kIDk5IGFyZSBpbnRlcnByZXRlZCBhcyAxOVhYOyByZXZlcnQgdGhhdFxuICBpZiAob2JqLnllYXIgPCAxMDAgJiYgb2JqLnllYXIgPj0gMCkge1xuICAgIGQgPSBuZXcgRGF0ZShkKTtcbiAgICAvLyBzZXQgdGhlIG1vbnRoIGFuZCBkYXkgYWdhaW4sIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgeWVhciAyMDAwIGlzIGEgbGVhcCB5ZWFyLCBidXQgeWVhciAxMDAgaXMgbm90XG4gICAgLy8gc28gaWYgb2JqLnllYXIgaXMgaW4gOTksIGJ1dCBvYmouZGF5IG1ha2VzIGl0IHJvbGwgb3ZlciBpbnRvIHllYXIgMTAwLFxuICAgIC8vIHRoZSBjYWxjdWxhdGlvbnMgZG9uZSBieSBEYXRlLlVUQyBhcmUgdXNpbmcgeWVhciAyMDAwIC0gd2hpY2ggaXMgaW5jb3JyZWN0XG4gICAgZC5zZXRVVENGdWxsWWVhcihvYmoueWVhciwgb2JqLm1vbnRoIC0gMSwgb2JqLmRheSk7XG4gIH1cbiAgcmV0dXJuICtkO1xufVxuZnVuY3Rpb24gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKSB7XG4gIHZhciBwMSA9ICh3ZWVrWWVhciArIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0KSAtIE1hdGguZmxvb3Iod2Vla1llYXIgLyAxMDApICsgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQwMCkpICUgNyxcbiAgICBsYXN0ID0gd2Vla1llYXIgLSAxLFxuICAgIHAyID0gKGxhc3QgKyBNYXRoLmZsb29yKGxhc3QgLyA0KSAtIE1hdGguZmxvb3IobGFzdCAvIDEwMCkgKyBNYXRoLmZsb29yKGxhc3QgLyA0MDApKSAlIDc7XG4gIHJldHVybiBwMSA9PT0gNCB8fCBwMiA9PT0gMyA/IDUzIDogNTI7XG59XG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7XG4gIGlmICh5ZWFyID4gOTkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHJldHVybiB5ZWFyID4gU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID8gMTkwMCArIHllYXIgOiAyMDAwICsgeWVhcjtcbn1cblxuLy8gUEFSU0lOR1xuXG5mdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUpIHtcbiAgaWYgKHRpbWVab25lID09PSB2b2lkIDApIHtcbiAgICB0aW1lWm9uZSA9IG51bGw7XG4gIH1cbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgaW50bE9wdHMgPSB7XG4gICAgICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCJcbiAgICB9O1xuICBpZiAodGltZVpvbmUpIHtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xuICB9XG4gIHZhciBtb2RpZmllZCA9IF9leHRlbmRzKHtcbiAgICB0aW1lWm9uZU5hbWU6IG9mZnNldEZvcm1hdFxuICB9LCBpbnRsT3B0cyk7XG4gIHZhciBwYXJzZWQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG1vZGlmaWVkKS5mb3JtYXRUb1BhcnRzKGRhdGUpLmZpbmQoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCI7XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDtcbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmZ1bmN0aW9uIHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpIHtcbiAgdmFyIG9mZkhvdXIgPSBwYXJzZUludChvZmZIb3VyU3RyLCAxMCk7XG5cbiAgLy8gZG9uJ3QgfHwgdGhpcyBiZWNhdXNlIHdlIHdhbnQgdG8gcHJlc2VydmUgLTBcbiAgaWYgKE51bWJlci5pc05hTihvZmZIb3VyKSkge1xuICAgIG9mZkhvdXIgPSAwO1xuICB9XG4gIHZhciBvZmZNaW4gPSBwYXJzZUludChvZmZNaW51dGVTdHIsIDEwKSB8fCAwLFxuICAgIG9mZk1pblNpZ25lZCA9IG9mZkhvdXIgPCAwIHx8IE9iamVjdC5pcyhvZmZIb3VyLCAtMCkgPyAtb2ZmTWluIDogb2ZmTWluO1xuICByZXR1cm4gb2ZmSG91ciAqIDYwICsgb2ZmTWluU2lnbmVkO1xufVxuXG4vLyBDT0VSQ0lPTlxuXG5mdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xuICB2YXIgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgfHwgdmFsdWUgPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKG51bWVyaWNWYWx1ZSkpIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIkludmFsaWQgdW5pdCB2YWx1ZSBcIiArIHZhbHVlKTtcbiAgcmV0dXJuIG51bWVyaWNWYWx1ZTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZXIpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSB7fTtcbiAgZm9yICh2YXIgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgdmFyIHYgPSBvYmpbdV07XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgbm9ybWFsaXplZFtub3JtYWxpemVyKHUpXSA9IGFzTnVtYmVyKHYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cbmZ1bmN0aW9uIGZvcm1hdE9mZnNldChvZmZzZXQsIGZvcm1hdCkge1xuICB2YXIgaG91cnMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAvIDYwKSksXG4gICAgbWludXRlcyA9IE1hdGgudHJ1bmMoTWF0aC5hYnMob2Zmc2V0ICUgNjApKSxcbiAgICBzaWduID0gb2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFwiXCIgKyBzaWduICsgcGFkU3RhcnQoaG91cnMsIDIpICsgXCI6XCIgKyBwYWRTdGFydChtaW51dGVzLCAyKTtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gXCJcIiArIHNpZ24gKyBob3VycyArIChtaW51dGVzID4gMCA/IFwiOlwiICsgbWludXRlcyA6IFwiXCIpO1xuICAgIGNhc2UgXCJ0ZWNoaWVcIjpcbiAgICAgIHJldHVybiBcIlwiICsgc2lnbiArIHBhZFN0YXJ0KGhvdXJzLCAyKSArIHBhZFN0YXJ0KG1pbnV0ZXMsIDIpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlZhbHVlIGZvcm1hdCBcIiArIGZvcm1hdCArIFwiIGlzIG91dCBvZiByYW5nZSBmb3IgcHJvcGVydHkgZm9ybWF0XCIpO1xuICB9XG59XG5mdW5jdGlvbiB0aW1lT2JqZWN0KG9iaikge1xuICByZXR1cm4gcGljayhvYmosIFtcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgbW9udGhzTG9uZyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xudmFyIG1vbnRoc1Nob3J0ID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xudmFyIG1vbnRoc05hcnJvdyA9IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcbmZ1bmN0aW9uIG1vbnRocyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gW10uY29uY2F0KG1vbnRoc05hcnJvdyk7XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gW10uY29uY2F0KG1vbnRoc1Nob3J0KTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChtb250aHNMb25nKTtcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBjYXNlIFwiMi1kaWdpdFwiOlxuICAgICAgcmV0dXJuIFtcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIiwgXCIwOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbnZhciB3ZWVrZGF5c0xvbmcgPSBbXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiLCBcIlN1bmRheVwiXTtcbnZhciB3ZWVrZGF5c1Nob3J0ID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xudmFyIHdlZWtkYXlzTmFycm93ID0gW1wiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCIsIFwiU1wiXTtcbmZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBbXS5jb25jYXQod2Vla2RheXNOYXJyb3cpO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdCh3ZWVrZGF5c1Nob3J0KTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdCh3ZWVrZGF5c0xvbmcpO1xuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbnZhciBtZXJpZGllbXMgPSBbXCJBTVwiLCBcIlBNXCJdO1xudmFyIGVyYXNMb25nID0gW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdO1xudmFyIGVyYXNTaG9ydCA9IFtcIkJDXCIsIFwiQURcIl07XG52YXIgZXJhc05hcnJvdyA9IFtcIkJcIiwgXCJBXCJdO1xuZnVuY3Rpb24gZXJhcyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gW10uY29uY2F0KGVyYXNOYXJyb3cpO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChlcmFzU2hvcnQpO1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gW10uY29uY2F0KGVyYXNMb25nKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIHtcbiAgcmV0dXJuIG1lcmlkaWVtc1tkdC5ob3VyIDwgMTIgPyAwIDogMV07XG59XG5mdW5jdGlvbiB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gd2Vla2RheXMobGVuZ3RoKVtkdC53ZWVrZGF5IC0gMV07XG59XG5mdW5jdGlvbiBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG1vbnRocyhsZW5ndGgpW2R0Lm1vbnRoIC0gMV07XG59XG5mdW5jdGlvbiBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBlcmFzKGxlbmd0aClbZHQueWVhciA8IDAgPyAwIDogMV07XG59XG5mdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIG51bWVyaWMsIG5hcnJvdykge1xuICBpZiAobnVtZXJpYyA9PT0gdm9pZCAwKSB7XG4gICAgbnVtZXJpYyA9IFwiYWx3YXlzXCI7XG4gIH1cbiAgaWYgKG5hcnJvdyA9PT0gdm9pZCAwKSB7XG4gICAgbmFycm93ID0gZmFsc2U7XG4gIH1cbiAgdmFyIHVuaXRzID0ge1xuICAgIHllYXJzOiBbXCJ5ZWFyXCIsIFwieXIuXCJdLFxuICAgIHF1YXJ0ZXJzOiBbXCJxdWFydGVyXCIsIFwicXRyLlwiXSxcbiAgICBtb250aHM6IFtcIm1vbnRoXCIsIFwibW8uXCJdLFxuICAgIHdlZWtzOiBbXCJ3ZWVrXCIsIFwid2suXCJdLFxuICAgIGRheXM6IFtcImRheVwiLCBcImRheVwiLCBcImRheXNcIl0sXG4gICAgaG91cnM6IFtcImhvdXJcIiwgXCJoci5cIl0sXG4gICAgbWludXRlczogW1wibWludXRlXCIsIFwibWluLlwiXSxcbiAgICBzZWNvbmRzOiBbXCJzZWNvbmRcIiwgXCJzZWMuXCJdXG4gIH07XG4gIHZhciBsYXN0YWJsZSA9IFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIl0uaW5kZXhPZih1bml0KSA9PT0gLTE7XG4gIGlmIChudW1lcmljID09PSBcImF1dG9cIiAmJiBsYXN0YWJsZSkge1xuICAgIHZhciBpc0RheSA9IHVuaXQgPT09IFwiZGF5c1wiO1xuICAgIHN3aXRjaCAoY291bnQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b21vcnJvd1wiIDogXCJuZXh0IFwiICsgdW5pdHNbdW5pdF1bMF07XG4gICAgICBjYXNlIC0xOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInllc3RlcmRheVwiIDogXCJsYXN0IFwiICsgdW5pdHNbdW5pdF1bMF07XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9kYXlcIiA6IFwidGhpcyBcIiArIHVuaXRzW3VuaXRdWzBdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0luUGFzdCA9IE9iamVjdC5pcyhjb3VudCwgLTApIHx8IGNvdW50IDwgMCxcbiAgICBmbXRWYWx1ZSA9IE1hdGguYWJzKGNvdW50KSxcbiAgICBzaW5ndWxhciA9IGZtdFZhbHVlID09PSAxLFxuICAgIGxpbFVuaXRzID0gdW5pdHNbdW5pdF0sXG4gICAgZm10VW5pdCA9IG5hcnJvdyA/IHNpbmd1bGFyID8gbGlsVW5pdHNbMV0gOiBsaWxVbml0c1syXSB8fCBsaWxVbml0c1sxXSA6IHNpbmd1bGFyID8gdW5pdHNbdW5pdF1bMF0gOiB1bml0O1xuICByZXR1cm4gaXNJblBhc3QgPyBmbXRWYWx1ZSArIFwiIFwiICsgZm10VW5pdCArIFwiIGFnb1wiIDogXCJpbiBcIiArIGZtdFZhbHVlICsgXCIgXCIgKyBmbXRVbml0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUb2tlbnMoc3BsaXRzLCB0b2tlblRvU3RyaW5nKSB7XG4gIHZhciBzID0gXCJcIjtcbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShzcGxpdHMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgIHZhciB0b2tlbiA9IF9zdGVwLnZhbHVlO1xuICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICBzICs9IHRva2VuLnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcyArPSB0b2tlblRvU3RyaW5nKHRva2VuLnZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzO1xufVxudmFyIF9tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0ge1xuICBEOiBEQVRFX1NIT1JULFxuICBERDogREFURV9NRUQsXG4gIERERDogREFURV9GVUxMLFxuICBEREREOiBEQVRFX0hVR0UsXG4gIHQ6IFRJTUVfU0lNUExFLFxuICB0dDogVElNRV9XSVRIX1NFQ09ORFMsXG4gIHR0dDogVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcbiAgdHR0dDogVElNRV9XSVRIX0xPTkdfT0ZGU0VULFxuICBUOiBUSU1FXzI0X1NJTVBMRSxcbiAgVFQ6IFRJTUVfMjRfV0lUSF9TRUNPTkRTLFxuICBUVFQ6IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIFRUVFQ6IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCxcbiAgZjogREFURVRJTUVfU0hPUlQsXG4gIGZmOiBEQVRFVElNRV9NRUQsXG4gIGZmZjogREFURVRJTUVfRlVMTCxcbiAgZmZmZjogREFURVRJTUVfSFVHRSxcbiAgRjogREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTLFxuICBGRjogREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyxcbiAgRkZGOiBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcbiAgRkZGRjogREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFNcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIEZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIEZvcm1hdHRlci5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobG9jYWxlLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZvcm1hdHRlcihsb2NhbGUsIG9wdHMpO1xuICB9O1xuICBGb3JtYXR0ZXIucGFyc2VGb3JtYXQgPSBmdW5jdGlvbiBwYXJzZUZvcm1hdChmbXQpIHtcbiAgICAvLyB3aGl0ZS1zcGFjZSBpcyBhbHdheXMgY29uc2lkZXJlZCBhIGxpdGVyYWwgaW4gdXNlci1wcm92aWRlZCBmb3JtYXRzXG4gICAgLy8gdGhlIFwiIFwiIHRva2VuIGhhcyBhIHNwZWNpYWwgbWVhbmluZyAoc2VlIHVuaXRGb3JUb2tlbilcblxuICAgIHZhciBjdXJyZW50ID0gbnVsbCxcbiAgICAgIGN1cnJlbnRGdWxsID0gXCJcIixcbiAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIHZhciBzcGxpdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZtdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBmbXQuY2hhckF0KGkpO1xuICAgICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goe1xuICAgICAgICAgICAgbGl0ZXJhbDogYnJhY2tldGVkIHx8IC9eXFxzKyQvLnRlc3QoY3VycmVudEZ1bGwpLFxuICAgICAgICAgICAgdmFsOiBjdXJyZW50RnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBudWxsO1xuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCI7XG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGxpdGVyYWw6IC9eXFxzKyQvLnRlc3QoY3VycmVudEZ1bGwpLFxuICAgICAgICAgICAgdmFsOiBjdXJyZW50RnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRGdWxsID0gYztcbiAgICAgICAgY3VycmVudCA9IGM7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICBzcGxpdHMucHVzaCh7XG4gICAgICAgIGxpdGVyYWw6IGJyYWNrZXRlZCB8fCAvXlxccyskLy50ZXN0KGN1cnJlbnRGdWxsKSxcbiAgICAgICAgdmFsOiBjdXJyZW50RnVsbFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzcGxpdHM7XG4gIH07XG4gIEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0gZnVuY3Rpb24gbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbikge1xuICAgIHJldHVybiBfbWFjcm9Ub2tlblRvRm9ybWF0T3B0c1t0b2tlbl07XG4gIH07XG4gIGZ1bmN0aW9uIEZvcm1hdHRlcihsb2NhbGUsIGZvcm1hdE9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBmb3JtYXRPcHRzO1xuICAgIHRoaXMubG9jID0gbG9jYWxlO1xuICAgIHRoaXMuc3lzdGVtTG9jID0gbnVsbDtcbiAgfVxuICB2YXIgX3Byb3RvID0gRm9ybWF0dGVyLnByb3RvdHlwZTtcbiAgX3Byb3RvLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0ID0gZnVuY3Rpb24gZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIG9wdHMpIHtcbiAgICBpZiAodGhpcy5zeXN0ZW1Mb2MgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3lzdGVtTG9jID0gdGhpcy5sb2MucmVkZWZhdWx0VG9TeXN0ZW0oKTtcbiAgICB9XG4gICAgdmFyIGRmID0gdGhpcy5zeXN0ZW1Mb2MuZHRGb3JtYXR0ZXIoZHQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH07XG4gIF9wcm90by5mb3JtYXREYXRlVGltZSA9IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lKGR0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgX2V4dGVuZHMoe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfTtcbiAgX3Byb3RvLmZvcm1hdERhdGVUaW1lUGFydHMgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZVBhcnRzKGR0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgX2V4dGVuZHMoe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXRUb1BhcnRzKCk7XG4gIH07XG4gIF9wcm90by5mb3JtYXRJbnRlcnZhbCA9IGZ1bmN0aW9uIGZvcm1hdEludGVydmFsKGludGVydmFsLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihpbnRlcnZhbC5zdGFydCwgX2V4dGVuZHMoe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5kdGYuZm9ybWF0UmFuZ2UoaW50ZXJ2YWwuc3RhcnQudG9KU0RhdGUoKSwgaW50ZXJ2YWwuZW5kLnRvSlNEYXRlKCkpO1xuICB9O1xuICBfcHJvdG8ucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRPcHRpb25zKGR0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgX2V4dGVuZHMoe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfTtcbiAgX3Byb3RvLm51bSA9IGZ1bmN0aW9uIG51bShuLCBwKSB7XG4gICAgaWYgKHAgPT09IHZvaWQgMCkge1xuICAgICAgcCA9IDA7XG4gICAgfVxuICAgIC8vIHdlIGdldCBzb21lIHBlcmYgb3V0IG9mIGRvaW5nIHRoaXMgaGVyZSwgYW5ub3lpbmdseVxuICAgIGlmICh0aGlzLm9wdHMuZm9yY2VTaW1wbGUpIHtcbiAgICAgIHJldHVybiBwYWRTdGFydChuLCBwKTtcbiAgICB9XG4gICAgdmFyIG9wdHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRzKTtcbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2MubnVtYmVyRm9ybWF0dGVyKG9wdHMpLmZvcm1hdChuKTtcbiAgfTtcbiAgX3Byb3RvLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm10KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPSB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAmJiB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAhPT0gXCJncmVnb3J5XCIsXG4gICAgICBzdHJpbmcgPSBmdW5jdGlvbiBzdHJpbmcob3B0cywgZXh0cmFjdCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpO1xuICAgICAgfSxcbiAgICAgIGZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldChvcHRzKSB7XG4gICAgICAgIGlmIChkdC5pc09mZnNldEZpeGVkICYmIGR0Lm9mZnNldCA9PT0gMCAmJiBvcHRzLmFsbG93Wikge1xuICAgICAgICAgIHJldHVybiBcIlpcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IGR0LnpvbmUuZm9ybWF0T2Zmc2V0KGR0LnRzLCBvcHRzLmZvcm1hdCkgOiBcIlwiO1xuICAgICAgfSxcbiAgICAgIG1lcmlkaWVtID0gZnVuY3Rpb24gbWVyaWRpZW0oKSB7XG4gICAgICAgIHJldHVybiBrbm93bkVuZ2xpc2ggPyBtZXJpZGllbUZvckRhdGVUaW1lKGR0KSA6IHN0cmluZyh7XG4gICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgaG91ckN5Y2xlOiBcImgxMlwiXG4gICAgICAgIH0sIFwiZGF5cGVyaW9kXCIpO1xuICAgICAgfSxcbiAgICAgIG1vbnRoID0gZnVuY3Rpb24gbW9udGgobGVuZ3RoLCBzdGFuZGFsb25lKSB7XG4gICAgICAgIHJldHVybiBrbm93bkVuZ2xpc2ggPyBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIDogc3RyaW5nKHN0YW5kYWxvbmUgPyB7XG4gICAgICAgICAgbW9udGg6IGxlbmd0aFxuICAgICAgICB9IDoge1xuICAgICAgICAgIG1vbnRoOiBsZW5ndGgsXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgICB9LCBcIm1vbnRoXCIpO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXkgPSBmdW5jdGlvbiB3ZWVrZGF5KGxlbmd0aCwgc3RhbmRhbG9uZSkge1xuICAgICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIDogc3RyaW5nKHN0YW5kYWxvbmUgPyB7XG4gICAgICAgICAgd2Vla2RheTogbGVuZ3RoXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgd2Vla2RheTogbGVuZ3RoLFxuICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICAgIH0sIFwid2Vla2RheVwiKTtcbiAgICAgIH0sXG4gICAgICBtYXliZU1hY3JvID0gZnVuY3Rpb24gbWF5YmVNYWNybyh0b2tlbikge1xuICAgICAgICB2YXIgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKTtcbiAgICAgICAgaWYgKGZvcm1hdE9wdHMpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIGZvcm1hdE9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVyYSA9IGZ1bmN0aW9uIGVyYShsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGtub3duRW5nbGlzaCA/IGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIDogc3RyaW5nKHtcbiAgICAgICAgICBlcmE6IGxlbmd0aFxuICAgICAgICB9LCBcImVyYVwiKTtcbiAgICAgIH0sXG4gICAgICB0b2tlblRvU3RyaW5nID0gZnVuY3Rpb24gdG9rZW5Ub1N0cmluZyh0b2tlbikge1xuICAgICAgICAvLyBXaGVyZSBwb3NzaWJsZTogaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lLTEvZGF0ZS10aW1lI1RPQy1TdGFuZGFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAvLyBtc1xuICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbGxpc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbGxpc2Vjb25kLCAzKTtcbiAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcbiAgICAgICAgICAvLyBmcmFjdGlvbmFsIHNlY29uZHNcbiAgICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwKSwgMik7XG4gICAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTAwKSk7XG4gICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbnV0ZSk7XG4gICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbnV0ZSwgMik7XG4gICAgICAgICAgLy8gaG91cnNcbiAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMik7XG4gICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyLCAyKTtcbiAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyKTtcbiAgICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciwgMik7XG4gICAgICAgICAgLy8gb2Zmc2V0XG4gICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzZcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoe1xuICAgICAgICAgICAgICBmb3JtYXQ6IFwibmFycm93XCIsXG4gICAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSArMDY6MDBcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoe1xuICAgICAgICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgYWxsb3daOiBfdGhpcy5vcHRzLmFsbG93WlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSArMDYwMFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7XG4gICAgICAgICAgICAgIGZvcm1hdDogXCJ0ZWNoaWVcIixcbiAgICAgICAgICAgICAgYWxsb3daOiBfdGhpcy5vcHRzLmFsbG93WlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7XG4gICAgICAgICAgICAgIGZvcm1hdDogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICBsb2NhbGU6IF90aGlzLmxvYy5sb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSBFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcbiAgICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHtcbiAgICAgICAgICAgICAgZm9ybWF0OiBcImxvbmdcIixcbiAgICAgICAgICAgICAgbG9jYWxlOiBfdGhpcy5sb2MubG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyB6b25lXG4gICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lO1xuICAgICAgICAgIC8vIG1lcmlkaWVtc1xuICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICByZXR1cm4gbWVyaWRpZW0oKTtcbiAgICAgICAgICAvLyBkYXRlc1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICB9LCBcImRheVwiKSA6IF90aGlzLm51bShkdC5kYXkpO1xuICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgICAgZGF5OiBcIjItZGlnaXRcIlxuICAgICAgICAgICAgfSwgXCJkYXlcIikgOiBfdGhpcy5udW0oZHQuZGF5LCAyKTtcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIHN0YW5kYWxvbmVcbiAgICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gZm9ybWF0XG4gICAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcImxvbmdcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyBtb250aHMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDEsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgICAgIH0sIFwibW9udGhcIikgOiBfdGhpcy5udW0oZHQubW9udGgsIDIpO1xuICAgICAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJuYXJyb3dcIiwgdHJ1ZSk7XG4gICAgICAgICAgLy8gbW9udGhzIC0gZm9ybWF0XG4gICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICAgIG1vbnRoOiBcIjItZGlnaXRcIlxuICAgICAgICAgICAgfSwgXCJtb250aFwiKSA6IF90aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyB5ZWFyc1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDIwMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhcik7XG4gICAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDE0XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgICB5ZWFyOiBcIjItZGlnaXRcIlxuICAgICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhciwgNik7XG4gICAgICAgICAgLy8gZXJhc1xuICAgICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEFEXG4gICAgICAgICAgICByZXR1cm4gZXJhKFwic2hvcnRcIik7XG4gICAgICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEFubm8gRG9taW5pXG4gICAgICAgICAgICByZXR1cm4gZXJhKFwibG9uZ1wiKTtcbiAgICAgICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJuYXJyb3dcIik7XG4gICAgICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtZZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrWWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla051bWJlcik7XG4gICAgICAgICAgY2FzZSBcIldXXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtOdW1iZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm9yZGluYWwpO1xuICAgICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQub3JkaW5hbCwgMyk7XG4gICAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5xdWFydGVyKTtcbiAgICAgICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQucXVhcnRlciwgMik7XG4gICAgICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oTWF0aC5mbG9vcihkdC50cyAvIDEwMDApKTtcbiAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC50cyk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBtYXliZU1hY3JvKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcbiAgfTtcbiAgX3Byb3RvLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyhkdXIsIGZtdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIHZhciB0b2tlblRvRmllbGQgPSBmdW5jdGlvbiB0b2tlblRvRmllbGQodG9rZW4pIHtcbiAgICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaWxsaXNlY29uZFwiO1xuICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcbiAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiBcImhvdXJcIjtcbiAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZGF5XCI7XG4gICAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICAgIHJldHVybiBcIndlZWtcIjtcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRva2VuVG9TdHJpbmcgPSBmdW5jdGlvbiB0b2tlblRvU3RyaW5nKGxpbGR1cikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgdmFyIG1hcHBlZCA9IHRva2VuVG9GaWVsZCh0b2tlbik7XG4gICAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5udW0obGlsZHVyLmdldChtYXBwZWQpLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHRva2VucyA9IEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLFxuICAgICAgcmVhbFRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24gKGZvdW5kLCBfcmVmKSB7XG4gICAgICAgIHZhciBsaXRlcmFsID0gX3JlZi5saXRlcmFsLFxuICAgICAgICAgIHZhbCA9IF9yZWYudmFsO1xuICAgICAgICByZXR1cm4gbGl0ZXJhbCA/IGZvdW5kIDogZm91bmQuY29uY2F0KHZhbCk7XG4gICAgICB9LCBbXSksXG4gICAgICBjb2xsYXBzZWQgPSBkdXIuc2hpZnRUby5hcHBseShkdXIsIHJlYWxUb2tlbnMubWFwKHRva2VuVG9GaWVsZCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSkpO1xuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnModG9rZW5zLCB0b2tlblRvU3RyaW5nKGNvbGxhcHNlZCkpO1xuICB9O1xuICByZXR1cm4gRm9ybWF0dGVyO1xufSgpO1xuXG52YXIgSW52YWxpZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMuZXhwbGFuYXRpb24gPSBleHBsYW5hdGlvbjtcbiAgfVxuICB2YXIgX3Byb3RvID0gSW52YWxpZC5wcm90b3R5cGU7XG4gIF9wcm90by50b01lc3NhZ2UgPSBmdW5jdGlvbiB0b01lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGFuYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYXNvbiArIFwiOiBcIiArIHRoaXMuZXhwbGFuYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYXNvbjtcbiAgICB9XG4gIH07XG4gIHJldHVybiBJbnZhbGlkO1xufSgpO1xuXG4vKlxuICogVGhpcyBmaWxlIGhhbmRsZXMgcGFyc2luZyBmb3Igd2VsbC1zcGVjaWZpZWQgZm9ybWF0cy4gSGVyZSdzIGhvdyBpdCB3b3JrczpcbiAqIFR3byB0aGluZ3MgZ28gaW50byBwYXJzaW5nOiBhIHJlZ2V4IHRvIG1hdGNoIHdpdGggYW5kIGFuIGV4dHJhY3RvciB0byB0YWtlIGFwYXJ0IHRoZSBncm91cHMgaW4gdGhlIG1hdGNoLlxuICogQW4gZXh0cmFjdG9yIGlzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcmVnZXggbWF0Y2ggYXJyYXkgYW5kIHJldHVybnMgYSB7IHllYXI6IC4uLiwgbW9udGg6IC4uLiB9IG9iamVjdFxuICogcGFyc2UoKSBkb2VzIHRoZSB3b3JrIG9mIGV4ZWN1dGluZyB0aGUgcmVnZXggYW5kIGFwcGx5aW5nIHRoZSBleHRyYWN0b3IuIEl0IHRha2VzIG11bHRpcGxlIHJlZ2V4L2V4dHJhY3RvciBwYWlycyB0byB0cnkgaW4gc2VxdWVuY2UuXG4gKiBFeHRyYWN0b3JzIGNhbiB0YWtlIGEgXCJjdXJzb3JcIiByZXByZXNlbnRpbmcgdGhlIG9mZnNldCBpbiB0aGUgbWF0Y2ggdG8gbG9vayBhdC4gVGhpcyBtYWtlcyBpdCBlYXN5IHRvIGNvbWJpbmUgZXh0cmFjdG9ycy5cbiAqIGNvbWJpbmVFeHRyYWN0b3JzKCkgZG9lcyB0aGUgd29yayBvZiBjb21iaW5pbmcgdGhlbSwga2VlcGluZyB0cmFjayBvZiB0aGUgY3Vyc29yIHRocm91Z2ggbXVsdGlwbGUgZXh0cmFjdGlvbnMuXG4gKiBTb21lIGV4dHJhY3Rpb25zIGFyZSBzdXBlciBkdW1iIGFuZCBzaW1wbGVQYXJzZSBhbmQgZnJvbVN0cmluZ3MgaGVscCBEUlkgdGhlbS5cbiAqL1xuXG52YXIgaWFuYVJlZ2V4ID0gL1tBLVphLXpfKy1dezEsMjU2fSg/Ojo/XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KD86XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KT8pPy87XG5mdW5jdGlvbiBjb21iaW5lUmVnZXhlcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlZ2V4ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVnZXhlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICB2YXIgZnVsbCA9IHJlZ2V4ZXMucmVkdWNlKGZ1bmN0aW9uIChmLCByKSB7XG4gICAgcmV0dXJuIGYgKyByLnNvdXJjZTtcbiAgfSwgXCJcIik7XG4gIHJldHVybiBSZWdFeHAoXCJeXCIgKyBmdWxsICsgXCIkXCIpO1xufVxuZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZXh0cmFjdG9ycyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGV4dHJhY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gZXh0cmFjdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKF9yZWYsIGV4KSB7XG4gICAgICB2YXIgbWVyZ2VkVmFscyA9IF9yZWZbMF0sXG4gICAgICAgIG1lcmdlZFpvbmUgPSBfcmVmWzFdLFxuICAgICAgICBjdXJzb3IgPSBfcmVmWzJdO1xuICAgICAgdmFyIF9leCA9IGV4KG0sIGN1cnNvciksXG4gICAgICAgIHZhbCA9IF9leFswXSxcbiAgICAgICAgem9uZSA9IF9leFsxXSxcbiAgICAgICAgbmV4dCA9IF9leFsyXTtcbiAgICAgIHJldHVybiBbX2V4dGVuZHMoe30sIG1lcmdlZFZhbHMsIHZhbCksIHpvbmUgfHwgbWVyZ2VkWm9uZSwgbmV4dF07XG4gICAgfSwgW3t9LCBudWxsLCAxXSkuc2xpY2UoMCwgMik7XG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZShzKSB7XG4gIGlmIChzID09IG51bGwpIHtcbiAgICByZXR1cm4gW251bGwsIG51bGxdO1xuICB9XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGF0dGVybnMgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHBhdHRlcm5zW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG4gIGZvciAodmFyIF9pID0gMCwgX3BhdHRlcm5zID0gcGF0dGVybnM7IF9pIDwgX3BhdHRlcm5zLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBfcGF0dGVybnMkX2kgPSBfcGF0dGVybnNbX2ldLFxuICAgICAgcmVnZXggPSBfcGF0dGVybnMkX2lbMF0sXG4gICAgICBleHRyYWN0b3IgPSBfcGF0dGVybnMkX2lbMV07XG4gICAgdmFyIG0gPSByZWdleC5leGVjKHMpO1xuICAgIGlmIChtKSB7XG4gICAgICByZXR1cm4gZXh0cmFjdG9yKG0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW251bGwsIG51bGxdO1xufVxuZnVuY3Rpb24gc2ltcGxlUGFyc2UoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwga2V5cyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGtleXNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKG1hdGNoLCBjdXJzb3IpIHtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJldFtrZXlzW2ldXSA9IHBhcnNlSW50ZWdlcihtYXRjaFtjdXJzb3IgKyBpXSk7XG4gICAgfVxuICAgIHJldHVybiBbcmV0LCBudWxsLCBjdXJzb3IgKyBpXTtcbiAgfTtcbn1cblxuLy8gSVNPIGFuZCBTUUwgcGFyc2luZ1xudmFyIG9mZnNldFJlZ2V4ID0gLyg/OihaKXwoWystXVxcZFxcZCkoPzo6PyhcXGRcXGQpKT8pLztcbnZhciBpc29FeHRlbmRlZFpvbmUgPSBcIig/OlwiICsgb2Zmc2V0UmVnZXguc291cmNlICsgXCI/KD86XFxcXFsoXCIgKyBpYW5hUmVnZXguc291cmNlICsgXCIpXFxcXF0pPyk/XCI7XG52YXIgaXNvVGltZUJhc2VSZWdleCA9IC8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Wy4sXShcXGR7MSwzMH0pKT8pPyk/LztcbnZhciBpc29UaW1lUmVnZXggPSBSZWdFeHAoXCJcIiArIGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgaXNvRXh0ZW5kZWRab25lKTtcbnZhciBpc29UaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoXCIoPzpUXCIgKyBpc29UaW1lUmVnZXguc291cmNlICsgXCIpP1wiKTtcbnZhciBpc29ZbWRSZWdleCA9IC8oWystXVxcZHs2fXxcXGR7NH0pKD86LT8oXFxkXFxkKSg/Oi0/KFxcZFxcZCkpPyk/LztcbnZhciBpc29XZWVrUmVnZXggPSAvKFxcZHs0fSktP1coXFxkXFxkKSg/Oi0/KFxcZCkpPy87XG52YXIgaXNvT3JkaW5hbFJlZ2V4ID0gLyhcXGR7NH0pLT8oXFxkezN9KS87XG52YXIgZXh0cmFjdElTT1dlZWtEYXRhID0gc2ltcGxlUGFyc2UoXCJ3ZWVrWWVhclwiLCBcIndlZWtOdW1iZXJcIiwgXCJ3ZWVrRGF5XCIpO1xudmFyIGV4dHJhY3RJU09PcmRpbmFsRGF0YSA9IHNpbXBsZVBhcnNlKFwieWVhclwiLCBcIm9yZGluYWxcIik7XG52YXIgc3FsWW1kUmVnZXggPSAvKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZCkvOyAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXG52YXIgc3FsVGltZVJlZ2V4ID0gUmVnRXhwKGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgXCIgPyg/OlwiICsgb2Zmc2V0UmVnZXguc291cmNlICsgXCJ8KFwiICsgaWFuYVJlZ2V4LnNvdXJjZSArIFwiKSk/XCIpO1xudmFyIHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChcIig/OiBcIiArIHNxbFRpbWVSZWdleC5zb3VyY2UgKyBcIik/XCIpO1xuZnVuY3Rpb24gaW50KG1hdGNoLCBwb3MsIGZhbGxiYWNrKSB7XG4gIHZhciBtID0gbWF0Y2hbcG9zXTtcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKG0pID8gZmFsbGJhY2sgOiBwYXJzZUludGVnZXIobSk7XG59XG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIGl0ZW0gPSB7XG4gICAgeWVhcjogaW50KG1hdGNoLCBjdXJzb3IpLFxuICAgIG1vbnRoOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDEpLFxuICAgIGRheTogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAxKVxuICB9O1xuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDNdO1xufVxuZnVuY3Rpb24gZXh0cmFjdElTT1RpbWUobWF0Y2gsIGN1cnNvcikge1xuICB2YXIgaXRlbSA9IHtcbiAgICBob3VyczogaW50KG1hdGNoLCBjdXJzb3IsIDApLFxuICAgIG1pbnV0ZXM6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMCksXG4gICAgc2Vjb25kczogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAwKSxcbiAgICBtaWxsaXNlY29uZHM6IHBhcnNlTWlsbGlzKG1hdGNoW2N1cnNvciArIDNdKVxuICB9O1xuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDRdO1xufVxuZnVuY3Rpb24gZXh0cmFjdElTT09mZnNldChtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciBsb2NhbCA9ICFtYXRjaFtjdXJzb3JdICYmICFtYXRjaFtjdXJzb3IgKyAxXSxcbiAgICBmdWxsT2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG1hdGNoW2N1cnNvciArIDFdLCBtYXRjaFtjdXJzb3IgKyAyXSksXG4gICAgem9uZSA9IGxvY2FsID8gbnVsbCA6IEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShmdWxsT2Zmc2V0KTtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgM107XG59XG5mdW5jdGlvbiBleHRyYWN0SUFOQVpvbmUobWF0Y2gsIGN1cnNvcikge1xuICB2YXIgem9uZSA9IG1hdGNoW2N1cnNvcl0gPyBJQU5BWm9uZS5jcmVhdGUobWF0Y2hbY3Vyc29yXSkgOiBudWxsO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAxXTtcbn1cblxuLy8gSVNPIHRpbWUgcGFyc2luZ1xuXG52YXIgaXNvVGltZU9ubHkgPSBSZWdFeHAoXCJeVD9cIiArIGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgXCIkXCIpO1xuXG4vLyBJU08gZHVyYXRpb24gcGFyc2luZ1xuXG52YXIgaXNvRHVyYXRpb24gPSAvXi0/UCg/Oig/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVkpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KU0pPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVcpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KUQpPyg/OlQoPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylIKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0pKD86Wy4sXSgtP1xcZHsxLDIwfSkpP1MpPyk/KSQvO1xuZnVuY3Rpb24gZXh0cmFjdElTT0R1cmF0aW9uKG1hdGNoKSB7XG4gIHZhciBzID0gbWF0Y2hbMF0sXG4gICAgeWVhclN0ciA9IG1hdGNoWzFdLFxuICAgIG1vbnRoU3RyID0gbWF0Y2hbMl0sXG4gICAgd2Vla1N0ciA9IG1hdGNoWzNdLFxuICAgIGRheVN0ciA9IG1hdGNoWzRdLFxuICAgIGhvdXJTdHIgPSBtYXRjaFs1XSxcbiAgICBtaW51dGVTdHIgPSBtYXRjaFs2XSxcbiAgICBzZWNvbmRTdHIgPSBtYXRjaFs3XSxcbiAgICBtaWxsaXNlY29uZHNTdHIgPSBtYXRjaFs4XTtcbiAgdmFyIGhhc05lZ2F0aXZlUHJlZml4ID0gc1swXSA9PT0gXCItXCI7XG4gIHZhciBuZWdhdGl2ZVNlY29uZHMgPSBzZWNvbmRTdHIgJiYgc2Vjb25kU3RyWzBdID09PSBcIi1cIjtcbiAgdmFyIG1heWJlTmVnYXRlID0gZnVuY3Rpb24gbWF5YmVOZWdhdGUobnVtLCBmb3JjZSkge1xuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7XG4gICAgICBmb3JjZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IG51bSAmJiBoYXNOZWdhdGl2ZVByZWZpeCkgPyAtbnVtIDogbnVtO1xuICB9O1xuICByZXR1cm4gW3tcbiAgICB5ZWFyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh5ZWFyU3RyKSksXG4gICAgbW9udGhzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1vbnRoU3RyKSksXG4gICAgd2Vla3M6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcod2Vla1N0cikpLFxuICAgIGRheXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoZGF5U3RyKSksXG4gICAgaG91cnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoaG91clN0cikpLFxuICAgIG1pbnV0ZXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobWludXRlU3RyKSksXG4gICAgc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhzZWNvbmRTdHIpLCBzZWNvbmRTdHIgPT09IFwiLTBcIiksXG4gICAgbWlsbGlzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZU1pbGxpcyhtaWxsaXNlY29uZHNTdHIpLCBuZWdhdGl2ZVNlY29uZHMpXG4gIH1dO1xufVxuXG4vLyBUaGVzZSBhcmUgYSBsaXR0bGUgYnJhaW5kZWFkLiBFRFQgKnNob3VsZCogdGVsbCB1cyB0aGF0IHdlJ3JlIGluLCBzYXksIEFtZXJpY2EvTmV3X1lvcmtcbi8vIGFuZCBub3QganVzdCB0aGF0IHdlJ3JlIGluIC0yNDAgKnJpZ2h0IG5vdyouIEJ1dCBzaW5jZSBJIGRvbid0IHRoaW5rIHRoZXNlIGFyZSB1c2VkIHRoYXQgb2Z0ZW5cbi8vIEknbSBqdXN0IGdvaW5nIHRvIGlnbm9yZSB0aGF0XG52YXIgb2JzT2Zmc2V0cyA9IHtcbiAgR01UOiAwLFxuICBFRFQ6IC00ICogNjAsXG4gIEVTVDogLTUgKiA2MCxcbiAgQ0RUOiAtNSAqIDYwLFxuICBDU1Q6IC02ICogNjAsXG4gIE1EVDogLTYgKiA2MCxcbiAgTVNUOiAtNyAqIDYwLFxuICBQRFQ6IC03ICogNjAsXG4gIFBTVDogLTggKiA2MFxufTtcbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgeWVhcjogeWVhclN0ci5sZW5ndGggPT09IDIgPyB1bnRydW5jYXRlWWVhcihwYXJzZUludGVnZXIoeWVhclN0cikpIDogcGFyc2VJbnRlZ2VyKHllYXJTdHIpLFxuICAgIG1vbnRoOiBtb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSArIDEsXG4gICAgZGF5OiBwYXJzZUludGVnZXIoZGF5U3RyKSxcbiAgICBob3VyOiBwYXJzZUludGVnZXIoaG91clN0ciksXG4gICAgbWludXRlOiBwYXJzZUludGVnZXIobWludXRlU3RyKVxuICB9O1xuICBpZiAoc2Vjb25kU3RyKSByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnRlZ2VyKHNlY29uZFN0cik7XG4gIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgcmVzdWx0LndlZWtkYXkgPSB3ZWVrZGF5U3RyLmxlbmd0aCA+IDMgPyB3ZWVrZGF5c0xvbmcuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDEgOiB3ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFJGQyAyODIyLzUzMjJcbnZhciByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSxcXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KD86KFsrLV1cXGRcXGQpKFxcZFxcZCkpKSQvO1xuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcbiAgdmFyIHdlZWtkYXlTdHIgPSBtYXRjaFsxXSxcbiAgICBkYXlTdHIgPSBtYXRjaFsyXSxcbiAgICBtb250aFN0ciA9IG1hdGNoWzNdLFxuICAgIHllYXJTdHIgPSBtYXRjaFs0XSxcbiAgICBob3VyU3RyID0gbWF0Y2hbNV0sXG4gICAgbWludXRlU3RyID0gbWF0Y2hbNl0sXG4gICAgc2Vjb25kU3RyID0gbWF0Y2hbN10sXG4gICAgb2JzT2Zmc2V0ID0gbWF0Y2hbOF0sXG4gICAgbWlsT2Zmc2V0ID0gbWF0Y2hbOV0sXG4gICAgb2ZmSG91clN0ciA9IG1hdGNoWzEwXSxcbiAgICBvZmZNaW51dGVTdHIgPSBtYXRjaFsxMV0sXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICB9IGVsc2UgaWYgKG1pbE9mZnNldCkge1xuICAgIG9mZnNldCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cik7XG4gIH1cbiAgcmV0dXJuIFtyZXN1bHQsIG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KV07XG59XG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gIHJldHVybiBzLnJlcGxhY2UoL1xcKFteKCldKlxcKXxbXFxuXFx0XS9nLCBcIiBcIikucmVwbGFjZSgvKFxcc1xccyspL2csIFwiIFwiKS50cmltKCk7XG59XG5cbi8vIGh0dHAgZGF0ZVxuXG52YXIgcmZjMTEyMyA9IC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksIChcXGRcXGQpIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKFxcZHs0fSkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gIHJmYzg1MCA9IC9eKE1vbmRheXxUdWVzZGF5fFdlZG5lc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxcZFxcZCktKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKS0oXFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgYXNjaWkgPSAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKCBcXGR8XFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSAoXFxkezR9KSQvO1xuZnVuY3Rpb24gZXh0cmFjdFJGQzExMjNPcjg1MChtYXRjaCkge1xuICB2YXIgd2Vla2RheVN0ciA9IG1hdGNoWzFdLFxuICAgIGRheVN0ciA9IG1hdGNoWzJdLFxuICAgIG1vbnRoU3RyID0gbWF0Y2hbM10sXG4gICAgeWVhclN0ciA9IG1hdGNoWzRdLFxuICAgIGhvdXJTdHIgPSBtYXRjaFs1XSxcbiAgICBtaW51dGVTdHIgPSBtYXRjaFs2XSxcbiAgICBzZWNvbmRTdHIgPSBtYXRjaFs3XSxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuZnVuY3Rpb24gZXh0cmFjdEFTQ0lJKG1hdGNoKSB7XG4gIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sXG4gICAgbW9udGhTdHIgPSBtYXRjaFsyXSxcbiAgICBkYXlTdHIgPSBtYXRjaFszXSxcbiAgICBob3VyU3RyID0gbWF0Y2hbNF0sXG4gICAgbWludXRlU3RyID0gbWF0Y2hbNV0sXG4gICAgc2Vjb25kU3RyID0gbWF0Y2hbNl0sXG4gICAgeWVhclN0ciA9IG1hdGNoWzddLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG52YXIgaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1ltZFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIGlzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvV2Vla1JlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIGlzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvT3JkaW5hbFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIGlzb1RpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvVGltZVJlZ2V4KTtcbnZhciBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09ZbWQsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpO1xudmFyIGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09XZWVrRGF0YSwgZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQsIGV4dHJhY3RJQU5BWm9uZSk7XG52YXIgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09PcmRpbmFsRGF0YSwgZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQsIGV4dHJhY3RJQU5BWm9uZSk7XG52YXIgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCwgZXh0cmFjdElBTkFab25lKTtcblxuLypcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VJU09EYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sIFtpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0XSwgW2lzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPT3JkaW5hbERhdGVBbmRUaW1lXSwgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF0pO1xufVxuZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7XG59XG5mdW5jdGlvbiBwYXJzZUhUVFBEYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtyZmMxMTIzLCBleHRyYWN0UkZDMTEyM09yODUwXSwgW3JmYzg1MCwgZXh0cmFjdFJGQzExMjNPcjg1MF0sIFthc2NpaSwgZXh0cmFjdEFTQ0lJXSk7XG59XG5mdW5jdGlvbiBwYXJzZUlTT0R1cmF0aW9uKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29EdXJhdGlvbiwgZXh0cmFjdElTT0R1cmF0aW9uXSk7XG59XG52YXIgZXh0cmFjdElTT1RpbWVPbmx5ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUpO1xuZnVuY3Rpb24gcGFyc2VJU09UaW1lT25seShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvVGltZU9ubHksIGV4dHJhY3RJU09UaW1lT25seV0pO1xufVxudmFyIHNxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxZbWRSZWdleCwgc3FsVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7XG52YXIgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpO1xuZnVuY3Rpb24gcGFyc2VTUUwocykge1xuICByZXR1cm4gcGFyc2UocywgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSwgW3NxbFRpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lXSk7XG59XG5cbnZhciBJTlZBTElEJDIgPSBcIkludmFsaWQgRHVyYXRpb25cIjtcblxuLy8gdW5pdCBjb252ZXJzaW9uIGNvbnN0YW50c1xudmFyIGxvd09yZGVyTWF0cml4ID0ge1xuICAgIHdlZWtzOiB7XG4gICAgICBkYXlzOiA3LFxuICAgICAgaG91cnM6IDcgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDcgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9LFxuICAgIGRheXM6IHtcbiAgICAgIGhvdXJzOiAyNCxcbiAgICAgIG1pbnV0ZXM6IDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9LFxuICAgIGhvdXJzOiB7XG4gICAgICBtaW51dGVzOiA2MCxcbiAgICAgIHNlY29uZHM6IDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDYwICogNjAgKiAxMDAwXG4gICAgfSxcbiAgICBtaW51dGVzOiB7XG4gICAgICBzZWNvbmRzOiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwXG4gICAgfSxcbiAgICBzZWNvbmRzOiB7XG4gICAgICBtaWxsaXNlY29uZHM6IDEwMDBcbiAgICB9XG4gIH0sXG4gIGNhc3VhbE1hdHJpeCA9IF9leHRlbmRzKHtcbiAgICB5ZWFyczoge1xuICAgICAgcXVhcnRlcnM6IDQsXG4gICAgICBtb250aHM6IDEyLFxuICAgICAgd2Vla3M6IDUyLFxuICAgICAgZGF5czogMzY1LFxuICAgICAgaG91cnM6IDM2NSAqIDI0LFxuICAgICAgbWludXRlczogMzY1ICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIH0sXG4gICAgcXVhcnRlcnM6IHtcbiAgICAgIG1vbnRoczogMyxcbiAgICAgIHdlZWtzOiAxMyxcbiAgICAgIGRheXM6IDkxLFxuICAgICAgaG91cnM6IDkxICogMjQsXG4gICAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiA0LFxuICAgICAgZGF5czogMzAsXG4gICAgICBob3VyczogMzAgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDMwICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9XG4gIH0sIGxvd09yZGVyTWF0cml4KSxcbiAgZGF5c0luWWVhckFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0MDAsXG4gIGRheXNJbk1vbnRoQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQ4MDAsXG4gIGFjY3VyYXRlTWF0cml4ID0gX2V4dGVuZHMoe1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9LFxuICAgIHF1YXJ0ZXJzOiB7XG4gICAgICBtb250aHM6IDMsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gMjgsXG4gICAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA0LFxuICAgICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0IC8gNCxcbiAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgLyA0LFxuICAgICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwIC8gNCxcbiAgICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCAvIDRcbiAgICB9LFxuICAgIG1vbnRoczoge1xuICAgICAgd2Vla3M6IGRheXNJbk1vbnRoQWNjdXJhdGUgLyA3LFxuICAgICAgZGF5czogZGF5c0luTW9udGhBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQsXG4gICAgICBtaW51dGVzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgfVxuICB9LCBsb3dPcmRlck1hdHJpeCk7XG5cbi8vIHVuaXRzIG9yZGVyZWQgYnkgc2l6ZVxudmFyIG9yZGVyZWRVbml0cyQxID0gW1wieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl07XG52YXIgcmV2ZXJzZVVuaXRzID0gb3JkZXJlZFVuaXRzJDEuc2xpY2UoMCkucmV2ZXJzZSgpO1xuXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMgXCJjcmVhdGUgYW5vdGhlciBpbnN0YW5jZSBqdXN0IGxpa2UgdGhpcyBvbmUsIGJ1dCB3aXRoIHRoZXNlIGNoYW5nZXNcIlxuZnVuY3Rpb24gY2xvbmUkMShkdXIsIGFsdHMsIGNsZWFyKSB7XG4gIGlmIChjbGVhciA9PT0gdm9pZCAwKSB7XG4gICAgY2xlYXIgPSBmYWxzZTtcbiAgfVxuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXG4gIHZhciBjb25mID0ge1xuICAgIHZhbHVlczogY2xlYXIgPyBhbHRzLnZhbHVlcyA6IF9leHRlbmRzKHt9LCBkdXIudmFsdWVzLCBhbHRzLnZhbHVlcyB8fCB7fSksXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3ksXG4gICAgbWF0cml4OiBhbHRzLm1hdHJpeCB8fCBkdXIubWF0cml4XG4gIH07XG4gIHJldHVybiBuZXcgRHVyYXRpb24oY29uZik7XG59XG5mdW5jdGlvbiBhbnRpVHJ1bmMobikge1xuICByZXR1cm4gbiA8IDAgPyBNYXRoLmZsb29yKG4pIDogTWF0aC5jZWlsKG4pO1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBjb252ZXJ0KG1hdHJpeCwgZnJvbU1hcCwgZnJvbVVuaXQsIHRvTWFwLCB0b1VuaXQpIHtcbiAgdmFyIGNvbnYgPSBtYXRyaXhbdG9Vbml0XVtmcm9tVW5pdF0sXG4gICAgcmF3ID0gZnJvbU1hcFtmcm9tVW5pdF0gLyBjb252LFxuICAgIHNhbWVTaWduID0gTWF0aC5zaWduKHJhdykgPT09IE1hdGguc2lnbih0b01hcFt0b1VuaXRdKSxcbiAgICAvLyBvaywgc28gdGhpcyBpcyB3aWxkLCBidXQgc2VlIHRoZSBtYXRyaXggaW4gdGhlIHRlc3RzXG4gICAgYWRkZWQgPSAhc2FtZVNpZ24gJiYgdG9NYXBbdG9Vbml0XSAhPT0gMCAmJiBNYXRoLmFicyhyYXcpIDw9IDEgPyBhbnRpVHJ1bmMocmF3KSA6IE1hdGgudHJ1bmMocmF3KTtcbiAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDtcbiAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252O1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XG4gIHJldmVyc2VVbml0cy5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnZlcnQobWF0cml4LCB2YWxzLCBwcmV2aW91cywgdmFscywgY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cbiAgfSwgbnVsbCk7XG59XG5cbi8vIFJlbW92ZSBhbGwgcHJvcGVydGllcyB3aXRoIGEgdmFsdWUgb2YgMCBmcm9tIGFuIG9iamVjdFxuZnVuY3Rpb24gcmVtb3ZlWmVyb2VzKHZhbHMpIHtcbiAgdmFyIG5ld1ZhbHMgPSB7fTtcbiAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGVudHJpZXMgPSBPYmplY3QuZW50cmllcyh2YWxzKTsgX2kgPCBfT2JqZWN0JGVudHJpZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIF9PYmplY3QkZW50cmllcyRfaSA9IF9PYmplY3QkZW50cmllc1tfaV0sXG4gICAgICBrZXkgPSBfT2JqZWN0JGVudHJpZXMkX2lbMF0sXG4gICAgICB2YWx1ZSA9IF9PYmplY3QkZW50cmllcyRfaVsxXTtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIG5ld1ZhbHNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3VmFscztcbn1cblxuLyoqXG4gKiBBIER1cmF0aW9uIG9iamVjdCByZXByZXNlbnRzIGEgcGVyaW9kIG9mIHRpbWUsIGxpa2UgXCIyIG1vbnRoc1wiIG9yIFwiMSBkYXksIDEgaG91clwiLiBDb25jZXB0dWFsbHksIGl0J3MganVzdCBhIG1hcCBvZiB1bml0cyB0byB0aGVpciBxdWFudGl0aWVzLCBhY2NvbXBhbmllZCBieSBzb21lIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBhbmQgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS4gVGhleSBjYW4gYmUgdXNlZCBvbiB0aGVpciBvd24gb3IgaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBMdXhvbiB0eXBlczsgZm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHtAbGluayBEYXRlVGltZSNwbHVzfSB0byBhZGQgYSBEdXJhdGlvbiBvYmplY3QgdG8gYSBEYXRlVGltZSwgcHJvZHVjaW5nIGFub3RoZXIgRGF0ZVRpbWUuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBEdXJhdGlvbjpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYSBEdXJhdGlvbiwgdXNlIHtAbGluayBEdXJhdGlvbi5mcm9tTWlsbGlzfSwge0BsaW5rIER1cmF0aW9uLmZyb21PYmplY3R9LCBvciB7QGxpbmsgRHVyYXRpb24uZnJvbUlTT30uXG4gKiAqICoqVW5pdCB2YWx1ZXMqKiBTZWUgdGhlIHtAbGluayBEdXJhdGlvbiN5ZWFyc30sIHtAbGluayBEdXJhdGlvbiNtb250aHN9LCB7QGxpbmsgRHVyYXRpb24jd2Vla3N9LCB7QGxpbmsgRHVyYXRpb24jZGF5c30sIHtAbGluayBEdXJhdGlvbiNob3Vyc30sIHtAbGluayBEdXJhdGlvbiNtaW51dGVzfSwge0BsaW5rIER1cmF0aW9uI3NlY29uZHN9LCB7QGxpbmsgRHVyYXRpb24jbWlsbGlzZWNvbmRzfSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSAge0BsaW5rIER1cmF0aW9uI2xvY2FsZX0gYW5kIHtAbGluayBEdXJhdGlvbiNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBuZXcgRHVyYXRpb25zIG91dCBvZiBvbGQgb25lcyB1c2Uge0BsaW5rIER1cmF0aW9uI3BsdXN9LCB7QGxpbmsgRHVyYXRpb24jbWludXN9LCB7QGxpbmsgRHVyYXRpb24jbm9ybWFsaXplfSwge0BsaW5rIER1cmF0aW9uI3NldH0sIHtAbGluayBEdXJhdGlvbiNyZWNvbmZpZ3VyZX0sIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSwgYW5kIHtAbGluayBEdXJhdGlvbiNuZWdhdGV9LlxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIER1cmF0aW9uIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIER1cmF0aW9uI2FzfSwge0BsaW5rIER1cmF0aW9uI3RvSVNPfSwge0BsaW5rIER1cmF0aW9uI3RvRm9ybWF0fSwgYW5kIHtAbGluayBEdXJhdGlvbiN0b0pTT059XG4gKlxuICogVGhlcmUncyBhcmUgbW9yZSBtZXRob2RzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uIGFuZCB2YWxpZGl0eSwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG52YXIgRHVyYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIER1cmF0aW9uKGNvbmZpZykge1xuICAgIHZhciBhY2N1cmF0ZSA9IGNvbmZpZy5jb252ZXJzaW9uQWNjdXJhY3kgPT09IFwibG9uZ3Rlcm1cIiB8fCBmYWxzZTtcbiAgICB2YXIgbWF0cml4ID0gYWNjdXJhdGUgPyBhY2N1cmF0ZU1hdHJpeCA6IGNhc3VhbE1hdHJpeDtcbiAgICBpZiAoY29uZmlnLm1hdHJpeCkge1xuICAgICAgbWF0cml4ID0gY29uZmlnLm1hdHJpeDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlcyA9IGNvbmZpZy52YWx1ZXM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGFjY3VyYXRlID8gXCJsb25ndGVybVwiIDogXCJjYXN1YWxcIjtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkR1cmF0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgRHVyYXRpb24gZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBvZiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgRHVyYXRpb24uZnJvbU1pbGxpcyA9IGZ1bmN0aW9uIGZyb21NaWxsaXMoY291bnQsIG9wdHMpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdCh7XG4gICAgICBtaWxsaXNlY29uZHM6IGNvdW50XG4gICAgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXG4gICAqIElmIHRoaXMgb2JqZWN0IGlzIGVtcHR5IHRoZW4gYSB6ZXJvIG1pbGxpc2Vjb25kcyBkdXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5xdWFydGVyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5c1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPVtdXSAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBjdXN0b20gY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIER1cmF0aW9uLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iaiwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIkR1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290IFwiICsgKG9iaiA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIG9iaikpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKHtcbiAgICAgIHZhbHVlczogbm9ybWFsaXplT2JqZWN0KG9iaiwgRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5OiBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSxcbiAgICAgIG1hdHJpeDogb3B0cy5tYXRyaXhcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIER1cmF0aW9uTGlrZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3QgfCBudW1iZXIgfCBEdXJhdGlvbn0gZHVyYXRpb25MaWtlXG4gICAqIE9uZSBvZjpcbiAgICogLSBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogLSBudW1iZXIgcmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kc1xuICAgKiAtIER1cmF0aW9uIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UgPSBmdW5jdGlvbiBmcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uTGlrZSkge1xuICAgIGlmIChpc051bWJlcihkdXJhdGlvbkxpa2UpKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhkdXJhdGlvbkxpa2UpO1xuICAgIH0gZWxzZSBpZiAoRHVyYXRpb24uaXNEdXJhdGlvbihkdXJhdGlvbkxpa2UpKSB7XG4gICAgICByZXR1cm4gZHVyYXRpb25MaWtlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uTGlrZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoZHVyYXRpb25MaWtlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiVW5rbm93biBkdXJhdGlvbiBhcmd1bWVudCBcIiArIGR1cmF0aW9uTGlrZSArIFwiIG9mIHR5cGUgXCIgKyB0eXBlb2YgZHVyYXRpb25MaWtlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1AzWTZNMVc0RFQxMkgzME01UycpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAzLCBtb250aHM6IDYsIHdlZWtzOiAxLCBkYXlzOiA0LCBob3VyczogMTIsIG1pbnV0ZXM6IDMwLCBzZWNvbmRzOiA1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUFQyM0gnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjMgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQNVkzTScpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiA1LCBtb250aHM6IDMgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBEdXJhdGlvbi5mcm9tSVNPID0gZnVuY3Rpb24gZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgdmFyIF9wYXJzZUlTT0R1cmF0aW9uID0gcGFyc2VJU09EdXJhdGlvbih0ZXh0KSxcbiAgICAgIHBhcnNlZCA9IF9wYXJzZUlTT0R1cmF0aW9uWzBdO1xuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMVwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSB0aW1lIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm1hdHJpeD1PYmplY3RdIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMToyMjozMy40NDQnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDIyLCBzZWNvbmRzOiAzMywgbWlsbGlzZWNvbmRzOiA0NDQgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBEdXJhdGlvbi5mcm9tSVNPVGltZSA9IGZ1bmN0aW9uIGZyb21JU09UaW1lKHRleHQsIG9wdHMpIHtcbiAgICB2YXIgX3BhcnNlSVNPVGltZU9ubHkgPSBwYXJzZUlTT1RpbWVPbmx5KHRleHQpLFxuICAgICAgcGFyc2VkID0gX3BhcnNlSVNPVGltZU9ubHlbMF07XG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIFwidGhlIGlucHV0IFxcXCJcIiArIHRleHQgKyBcIlxcXCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgZGF0ZXRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIER1cmF0aW9uLmludmFsaWQgPSBmdW5jdGlvbiBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICBpZiAoZXhwbGFuYXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgZXhwbGFuYXRpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgICB2YXIgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRHVyYXRpb25FcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7XG4gICAgICAgIGludmFsaWQ6IGludmFsaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi87XG4gIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQgPSBmdW5jdGlvbiBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgICB2YXIgbm9ybWFsaXplZCA9IHtcbiAgICAgIHllYXI6IFwieWVhcnNcIixcbiAgICAgIHllYXJzOiBcInllYXJzXCIsXG4gICAgICBxdWFydGVyOiBcInF1YXJ0ZXJzXCIsXG4gICAgICBxdWFydGVyczogXCJxdWFydGVyc1wiLFxuICAgICAgbW9udGg6IFwibW9udGhzXCIsXG4gICAgICBtb250aHM6IFwibW9udGhzXCIsXG4gICAgICB3ZWVrOiBcIndlZWtzXCIsXG4gICAgICB3ZWVrczogXCJ3ZWVrc1wiLFxuICAgICAgZGF5OiBcImRheXNcIixcbiAgICAgIGRheXM6IFwiZGF5c1wiLFxuICAgICAgaG91cjogXCJob3Vyc1wiLFxuICAgICAgaG91cnM6IFwiaG91cnNcIixcbiAgICAgIG1pbnV0ZTogXCJtaW51dGVzXCIsXG4gICAgICBtaW51dGVzOiBcIm1pbnV0ZXNcIixcbiAgICAgIHNlY29uZDogXCJzZWNvbmRzXCIsXG4gICAgICBzZWNvbmRzOiBcInNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kc1wiXG4gICAgfVt1bml0ID8gdW5pdC50b0xvd2VyQ2FzZSgpIDogdW5pdF07XG4gICAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEdXJhdGlvbi4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIER1cmF0aW9uLmlzRHVyYXRpb24gPSBmdW5jdGlvbiBpc0R1cmF0aW9uKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLmlzTHV4b25EdXJhdGlvbiB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqLztcbiAgdmFyIF9wcm90byA9IER1cmF0aW9uLnByb3RvdHlwZTtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy4gWW91IG1heSB1c2UgdGhlc2UgdG9rZW5zOlxuICAgKiAqIGBTYCBmb3IgbWlsbGlzZWNvbmRzXG4gICAqICogYHNgIGZvciBzZWNvbmRzXG4gICAqICogYG1gIGZvciBtaW51dGVzXG4gICAqICogYGhgIGZvciBob3Vyc1xuICAgKiAqIGBkYCBmb3IgZGF5c1xuICAgKiAqIGB3YCBmb3Igd2Vla3NcbiAgICogKiBgTWAgZm9yIG1vbnRoc1xuICAgKiAqIGB5YCBmb3IgeWVhcnNcbiAgICogTm90ZXM6XG4gICAqICogQWRkIHBhZGRpbmcgYnkgcmVwZWF0aW5nIHRoZSB0b2tlbiwgZS5nLiBcInl5XCIgcGFkcyB0aGUgeWVhcnMgdG8gdHdvIGRpZ2l0cywgXCJoaGhoXCIgcGFkcyB0aGUgaG91cnMgb3V0IHRvIGZvdXIgZGlnaXRzXG4gICAqICogVG9rZW5zIGNhbiBiZSBlc2NhcGVkIGJ5IHdyYXBwaW5nIHdpdGggc2luZ2xlIHF1b3Rlcy5cbiAgICogKiBUaGUgZHVyYXRpb24gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHNldCBvZiB1bml0cyBpbiB0aGUgZm9ybWF0IHN0cmluZyB1c2luZyB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30gYW5kIHRoZSBEdXJhdGlvbnMncyBjb252ZXJzaW9uIGFjY3VyYWN5IHNldHRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5mbG9vcj10cnVlXSAtIGZsb29yIG51bWVyaWNhbCB2YWx1ZXNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieSBkIHNcIikgLy89PiBcIjEgNiAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieXkgZGQgc3NzXCIpIC8vPT4gXCIwMSAwNiAwMDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJNIFNcIikgLy89PiBcIjEyIDUxODQwMjAwMFwiXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIF9wcm90by50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGZtdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgLy8gcmV2ZXJzZS1jb21wYXQgc2luY2UgMS4yOyB3ZSBhbHdheXMgcm91bmQgZG93biBub3csIG5ldmVyIHVwLCBhbmQgd2UgZG8gaXQgYnkgZGVmYXVsdFxuICAgIHZhciBmbXRPcHRzID0gX2V4dGVuZHMoe30sIG9wdHMsIHtcbiAgICAgIGZsb29yOiBvcHRzLnJvdW5kICE9PSBmYWxzZSAmJiBvcHRzLmZsb29yICE9PSBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLCBmbXRPcHRzKS5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcodGhpcywgZm10KSA6IElOVkFMSUQkMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgRHVyYXRpb24gd2l0aCBhbGwgdW5pdHMgaW5jbHVkZWQuXG4gICAqIFRvIG1vZGlmeSBpdHMgYmVoYXZpb3IgdXNlIHRoZSBgbGlzdFN0eWxlYCBhbmQgYW55IEludGwuTnVtYmVyRm9ybWF0IG9wdGlvbiwgdGhvdWdoIGB1bml0RGlzcGxheWAgaXMgZXNwZWNpYWxseSByZWxldmFudC5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL051bWJlckZvcm1hdFxuICAgKiBAcGFyYW0gb3B0cyAtIE9uIG9wdGlvbiBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIGZvcm1hdHRpbmcuIEFjY2VwdHMgdGhlIHNhbWUga2V5cyBhcyB0aGUgb3B0aW9ucyBwYXJhbWV0ZXIgb2YgdGhlIG5hdGl2ZSBgSW50Lk51bWJlckZvcm1hdGAgY29uc3RydWN0b3IsIGFzIHdlbGwgYXMgYGxpc3RTdHlsZWAuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgZGF5czogMSwgaG91cnM6IDUsIG1pbnV0ZXM6IDYgfSlcbiAgICogZHVyLnRvSHVtYW4oKSAvLz0+ICcxIGRheSwgNSBob3VycywgNiBtaW51dGVzJ1xuICAgKiBkdXIudG9IdW1hbih7IGxpc3RTdHlsZTogXCJsb25nXCIgfSkgLy89PiAnMSBkYXksIDUgaG91cnMsIGFuZCA2IG1pbnV0ZXMnXG4gICAqIGR1ci50b0h1bWFuKHsgdW5pdERpc3BsYXk6IFwic2hvcnRcIiB9KSAvLz0+ICcxIGRheSwgNSBociwgNiBtaW4nXG4gICAqIGBgYFxuICAgKi87XG4gIF9wcm90by50b0h1bWFuID0gZnVuY3Rpb24gdG9IdW1hbihvcHRzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciBsID0gb3JkZXJlZFVuaXRzJDEubWFwKGZ1bmN0aW9uICh1bml0KSB7XG4gICAgICB2YXIgdmFsID0gX3RoaXMudmFsdWVzW3VuaXRdO1xuICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXMubG9jLm51bWJlckZvcm1hdHRlcihfZXh0ZW5kcyh7XG4gICAgICAgIHN0eWxlOiBcInVuaXRcIixcbiAgICAgICAgdW5pdERpc3BsYXk6IFwibG9uZ1wiXG4gICAgICB9LCBvcHRzLCB7XG4gICAgICAgIHVuaXQ6IHVuaXQuc2xpY2UoMCwgLTEpXG4gICAgICB9KSkuZm9ybWF0KHZhbCk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gbjtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5sb2MubGlzdEZvcm1hdHRlcihfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiBcImNvbmp1bmN0aW9uXCIsXG4gICAgICBzdHlsZTogb3B0cy5saXN0U3R5bGUgfHwgXCJuYXJyb3dcIlxuICAgIH0sIG9wdHMpKS5mb3JtYXQobCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi87XG4gIF9wcm90by50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMywgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQM1lUNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA0LCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1A0TVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDUgfSkudG9JU08oKSAvLz0+ICdQNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiA1IH0pLnRvSVNPKCkgLy89PiAnUFQ1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogNiB9KS50b0lTTygpIC8vPT4gJ1BUMC4wMDZTJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08oKSB7XG4gICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZ1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcyA9IFwiUFwiO1xuICAgIGlmICh0aGlzLnllYXJzICE9PSAwKSBzICs9IHRoaXMueWVhcnMgKyBcIllcIjtcbiAgICBpZiAodGhpcy5tb250aHMgIT09IDAgfHwgdGhpcy5xdWFydGVycyAhPT0gMCkgcyArPSB0aGlzLm1vbnRocyArIHRoaXMucXVhcnRlcnMgKiAzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMud2Vla3MgIT09IDApIHMgKz0gdGhpcy53ZWVrcyArIFwiV1wiO1xuICAgIGlmICh0aGlzLmRheXMgIT09IDApIHMgKz0gdGhpcy5kYXlzICsgXCJEXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDAgfHwgdGhpcy5taW51dGVzICE9PSAwIHx8IHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMCkgcyArPSBcIlRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSB0aGlzLmhvdXJzICsgXCJIXCI7XG4gICAgaWYgKHRoaXMubWludXRlcyAhPT0gMCkgcyArPSB0aGlzLm1pbnV0ZXMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxuICAgICAgLy8gdGhpcyB3aWxsIGhhbmRsZSBcImZsb2F0aW5nIHBvaW50IG1hZG5lc3NcIiBieSByZW1vdmluZyBleHRyYSBkZWNpbWFsIHBsYWNlc1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTg4MDA0L2lzLWZsb2F0aW5nLXBvaW50LW1hdGgtYnJva2VuXG4gICAgICBzICs9IHJvdW5kVG8odGhpcy5zZWNvbmRzICsgdGhpcy5taWxsaXNlY29uZHMgLyAxMDAwLCAzKSArIFwiU1wiO1xuICAgIGlmIChzID09PSBcIlBcIikgcyArPSBcIlQwU1wiO1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLCBmb3JtYXR0ZWQgYXMgYSB0aW1lIG9mIGRheS5cbiAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGUgZHVyYXRpb24gaXMgaW52YWxpZCwgbmVnYXRpdmUsIG9yIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiAyNCBob3Vycy5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSgpIC8vPT4gJzExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc01pbGxpc2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMDowMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMTE6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxMTAwMDAuMDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPVGltZSA9IGZ1bmN0aW9uIHRvSVNPVGltZShvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1pbGxpcyA9IHRoaXMudG9NaWxsaXMoKTtcbiAgICBpZiAobWlsbGlzIDwgMCB8fCBtaWxsaXMgPj0gODY0MDAwMDApIHJldHVybiBudWxsO1xuICAgIG9wdHMgPSBfZXh0ZW5kcyh7XG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kczogZmFsc2UsXG4gICAgICBzdXBwcmVzc1NlY29uZHM6IGZhbHNlLFxuICAgICAgaW5jbHVkZVByZWZpeDogZmFsc2UsXG4gICAgICBmb3JtYXQ6IFwiZXh0ZW5kZWRcIlxuICAgIH0sIG9wdHMpO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc2hpZnRUbyhcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIik7XG4gICAgdmFyIGZtdCA9IG9wdHMuZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcImhobW1cIiA6IFwiaGg6bW1cIjtcbiAgICBpZiAoIW9wdHMuc3VwcHJlc3NTZWNvbmRzIHx8IHZhbHVlLnNlY29uZHMgIT09IDAgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7XG4gICAgICBmbXQgKz0gb3B0cy5mb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwic3NcIiA6IFwiOnNzXCI7XG4gICAgICBpZiAoIW9wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHMgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7XG4gICAgICAgIGZtdCArPSBcIi5TU1NcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHN0ciA9IHZhbHVlLnRvRm9ybWF0KGZtdCk7XG4gICAgaWYgKG9wdHMuaW5jbHVkZVByZWZpeCkge1xuICAgICAgc3RyID0gXCJUXCIgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovO1xuICBfcHJvdG8udG9NaWxsaXMgPSBmdW5jdGlvbiB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5hcyhcIm1pbGxpc2Vjb25kc1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLiBBbGlhcyBvZiB7QGxpbmsgdG9NaWxsaXN9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovO1xuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gbG9uZ2VyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8ucGx1cyA9IGZ1bmN0aW9uIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLFxuICAgICAgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgX2kyID0gMCwgX29yZGVyZWRVbml0cyA9IG9yZGVyZWRVbml0cyQxOyBfaTIgPCBfb3JkZXJlZFVuaXRzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBrID0gX29yZGVyZWRVbml0c1tfaTJdO1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGR1ci52YWx1ZXMsIGspIHx8IGhhc093blByb3BlcnR5KHRoaXMudmFsdWVzLCBrKSkge1xuICAgICAgICByZXN1bHRba10gPSBkdXIuZ2V0KGspICsgdGhpcy5nZXQoayk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIHZhbHVlczogcmVzdWx0XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIHNob3J0ZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLm1pbnVzID0gZnVuY3Rpb24gbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzLnBsdXMoZHVyLm5lZ2F0ZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FsZSB0aGlzIER1cmF0aW9uIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB1bml0LiBBcml0eSBpcyAxIG9yIDI6IHRoZSB2YWx1ZSBvZiB0aGUgdW5pdCBhbmQsIG9wdGlvbmFsbHksIHRoZSB1bml0IG5hbWUuIE11c3QgcmV0dXJuIGEgbnVtYmVyLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKHggPT4geCAqIDIpIC8vPT4geyBob3VyczogMiwgbWludXRlczogNjAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKCh4LCB1KSA9PiB1ID09PSBcImhvdXJzXCIgPyB4ICogMiA6IHgpIC8vPT4geyBob3VyczogMiwgbWludXRlczogMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8ubWFwVW5pdHMgPSBmdW5jdGlvbiBtYXBVbml0cyhmbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgX2kzID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXModGhpcy52YWx1ZXMpOyBfaTMgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXNbX2kzXTtcbiAgICAgIHJlc3VsdFtrXSA9IGFzTnVtYmVyKGZuKHRoaXMudmFsdWVzW2tdLCBrKSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIHZhbHVlczogcmVzdWx0XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCd5ZWFycycpIC8vPT4gMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnbW9udGhzJykgLy89PiAwXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdkYXlzJykgLy89PiAzXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovO1xuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQodmFsdWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBtaXhlZCA9IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlcywgbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCkpO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIHZhbHVlczogbWl4ZWRcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUgYW5kL29yIG51bWJlcmluZ1N5c3RlbS4gIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgZHVyLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIF9wcm90by5yZWNvbmZpZ3VyZSA9IGZ1bmN0aW9uIHJlY29uZmlndXJlKF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZi5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3kgPSBfcmVmLmNvbnZlcnNpb25BY2N1cmFjeSxcbiAgICAgIG1hdHJpeCA9IF9yZWYubWF0cml4O1xuICAgIHZhciBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtXG4gICAgfSk7XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICBsb2M6IGxvYyxcbiAgICAgIG1hdHJpeDogbWF0cml4LFxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5OiBjb252ZXJzaW9uQWNjdXJhY3lcbiAgICB9O1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBkdXJhdGlvbiBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZXMnIG9yICdkYXlzJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdkYXlzJykgLy89PiAzNjVcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnbW9udGhzJykgLy89PiAxMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtob3VyczogNjB9KS5hcygnZGF5cycpIC8vPT4gMi41XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovO1xuICBfcHJvdG8uYXMgPSBmdW5jdGlvbiBhcyh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuc2hpZnRUbyh1bml0KS5nZXQodW5pdCkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmVkdWNlIHRoaXMgRHVyYXRpb24gdG8gaXRzIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBpbiBpdHMgY3VycmVudCB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMiwgbWludXRlczogLTQ1IH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMTUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8ubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIHZhbHMpO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIHZhbHVlczogdmFsc1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2NhbGUgdW5pdHMgdG8gaXRzIGxhcmdlc3QgcmVwcmVzZW50YXRpb25cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogOTAwMDAgfSkucmVzY2FsZSgpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDEsIHNlY29uZHM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLnJlc2NhbGUgPSBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgdmFscyA9IHJlbW92ZVplcm9lcyh0aGlzLm5vcm1hbGl6ZSgpLnNoaWZ0VG9BbGwoKS50b09iamVjdCgpKTtcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IHZhbHNcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8uc2hpZnRUbyA9IGZ1bmN0aW9uIHNoaWZ0VG8oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHVuaXRzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgdW5pdHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdW5pdHMgPSB1bml0cy5tYXAoZnVuY3Rpb24gKHUpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHUpO1xuICAgIH0pO1xuICAgIHZhciBidWlsdCA9IHt9LFxuICAgICAgYWNjdW11bGF0ZWQgPSB7fSxcbiAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgdmFyIGxhc3RVbml0O1xuICAgIGZvciAodmFyIF9pNCA9IDAsIF9vcmRlcmVkVW5pdHMyID0gb3JkZXJlZFVuaXRzJDE7IF9pNCA8IF9vcmRlcmVkVW5pdHMyLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgIHZhciBrID0gX29yZGVyZWRVbml0czJbX2k0XTtcbiAgICAgIGlmICh1bml0cy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgbGFzdFVuaXQgPSBrO1xuICAgICAgICB2YXIgb3duID0gMDtcblxuICAgICAgICAvLyBhbnl0aGluZyB3ZSBoYXZlbid0IGJvaWxlZCBkb3duIHlldCBzaG91bGQgZ2V0IGJvaWxlZCB0byB0aGlzIHVuaXRcbiAgICAgICAgZm9yICh2YXIgYWsgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgICAgICBvd24gKz0gdGhpcy5tYXRyaXhbYWtdW2tdICogYWNjdW11bGF0ZWRbYWtdO1xuICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIHRoYXQncyBhbHJlYWR5IGluIHRoaXMgdW5pdFxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgICBvd24gKz0gdmFsc1trXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IE1hdGgudHJ1bmMob3duKTtcbiAgICAgICAgYnVpbHRba10gPSBpO1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IChvd24gKiAxMDAwIC0gaSAqIDEwMDApIC8gMTAwMDtcblxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIGZ1cnRoZXIgZG93biB0aGUgY2hhaW4gdGhhdCBzaG91bGQgYmUgcm9sbGVkIHVwIGluIHRvIHRoaXNcbiAgICAgICAgZm9yICh2YXIgZG93biBpbiB2YWxzKSB7XG4gICAgICAgICAgaWYgKG9yZGVyZWRVbml0cyQxLmluZGV4T2YoZG93bikgPiBvcmRlcmVkVW5pdHMkMS5pbmRleE9mKGspKSB7XG4gICAgICAgICAgICBjb252ZXJ0KHRoaXMubWF0cml4LCB2YWxzLCBkb3duLCBidWlsdCwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSwga2VlcCBpdCBpbiB0aGUgd2luZ3MgdG8gYm9pbCBpdCBsYXRlclxuICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IHZhbHNba107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxuICAgIC8vIGxhc3RVbml0IG11c3QgYmUgZGVmaW5lZCBzaW5jZSB1bml0cyBpcyBub3QgZW1wdHlcbiAgICBmb3IgKHZhciBrZXkgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgIGlmIChhY2N1bXVsYXRlZFtrZXldICE9PSAwKSB7XG4gICAgICAgIGJ1aWx0W2xhc3RVbml0XSArPSBrZXkgPT09IGxhc3RVbml0ID8gYWNjdW11bGF0ZWRba2V5XSA6IGFjY3VtdWxhdGVkW2tleV0gLyB0aGlzLm1hdHJpeFtsYXN0VW5pdF1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdmFsdWVzOiBidWlsdFxuICAgIH0sIHRydWUpLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoaWZ0IHRoaXMgRHVyYXRpb24gdG8gYWxsIGF2YWlsYWJsZSB1bml0cy5cbiAgICogU2FtZSBhcyBzaGlmdFRvKFwieWVhcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCIpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIF9wcm90by5zaGlmdFRvQWxsID0gZnVuY3Rpb24gc2hpZnRUb0FsbCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRUbyhcInllYXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5lZ2F0aXZlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkubmVnYXRlKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IC0xLCBzZWNvbmRzOiAtMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8ubmVnYXRlID0gZnVuY3Rpb24gbmVnYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbmVnYXRlZCA9IHt9O1xuICAgIGZvciAodmFyIF9pNSA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcyk7IF9pNSA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTUrKykge1xuICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pNV07XG4gICAgICBuZWdhdGVkW2tdID0gdGhpcy52YWx1ZXNba10gPT09IDAgPyAwIDogLXRoaXMudmFsdWVzW2tdO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IG5lZ2F0ZWRcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHllYXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi87XG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRHVyYXRpb25zIGFyZSBlcXVhbCBpZmYgdGhleSBoYXZlIHRoZSBzYW1lIHVuaXRzIGFuZCB0aGUgc2FtZSB2YWx1ZXMgZm9yIGVhY2ggdW5pdC5cbiAgICogQHBhcmFtIHtEdXJhdGlvbn0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVxKHYxLCB2Mikge1xuICAgICAgLy8gQ29uc2lkZXIgMCBhbmQgdW5kZWZpbmVkIGFzIGVxdWFsXG4gICAgICBpZiAodjEgPT09IHVuZGVmaW5lZCB8fCB2MSA9PT0gMCkgcmV0dXJuIHYyID09PSB1bmRlZmluZWQgfHwgdjIgPT09IDA7XG4gICAgICByZXR1cm4gdjEgPT09IHYyO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaTYgPSAwLCBfb3JkZXJlZFVuaXRzMyA9IG9yZGVyZWRVbml0cyQxOyBfaTYgPCBfb3JkZXJlZFVuaXRzMy5sZW5ndGg7IF9pNisrKSB7XG4gICAgICB2YXIgdSA9IF9vcmRlcmVkVW5pdHMzW19pNl07XG4gICAgICBpZiAoIWVxKHRoaXMudmFsdWVzW3VdLCBvdGhlci52YWx1ZXNbdV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIF9jcmVhdGVDbGFzcyhEdXJhdGlvbiwgW3tcbiAgICBrZXk6IFwibG9jYWxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEdXJhdGlvbiwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEdXJhdGlvblxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJpbmdTeXN0ZW1cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ5ZWFyc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnllYXJzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInF1YXJ0ZXJzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMucXVhcnRlcnMgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm1vbnRoc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1vbnRocyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2Vla3NcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIndlZWtzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMud2Vla3MgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheXMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJkYXlzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuZGF5cyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaG91cnMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJob3Vyc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmhvdXJzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibWludXRlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbnV0ZXMgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInNlY29uZHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5zZWNvbmRzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbGxpc2Vjb25kcyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgICAqIG9uIGludmFsaWQgRGF0ZVRpbWVzIG9yIEludGVydmFscy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRSZWFzb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZEV4cGxhbmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIER1cmF0aW9uO1xufSgpO1xuXG52YXIgSU5WQUxJRCQxID0gXCJJbnZhbGlkIEludGVydmFsXCI7XG5cbi8vIGNoZWNrcyBpZiB0aGUgc3RhcnQgaXMgZXF1YWwgdG8gb3IgYmVmb3JlIHRoZSBlbmRcbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgc3RhcnRcIik7XG4gIH0gZWxzZSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBlbmRcIik7XG4gIH0gZWxzZSBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcImVuZCBiZWZvcmUgc3RhcnRcIiwgXCJUaGUgZW5kIG9mIGFuIGludGVydmFsIG11c3QgYmUgYWZ0ZXIgaXRzIHN0YXJ0LCBidXQgeW91IGhhZCBzdGFydD1cIiArIHN0YXJ0LnRvSVNPKCkgKyBcIiBhbmQgZW5kPVwiICsgZW5kLnRvSVNPKCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsLmZyb21EYXRlVGltZXN9LCB7QGxpbmsgSW50ZXJ2YWwuYWZ0ZXJ9LCB7QGxpbmsgSW50ZXJ2YWwuYmVmb3JlfSwgb3Ige0BsaW5rIEludGVydmFsLmZyb21JU099LlxuICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgSW50ZXJ2YWwjc3RhcnR9IGFuZCB7QGxpbmsgSW50ZXJ2YWwjZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2NvdW50fSwge0BsaW5rIEludGVydmFsI2xlbmd0aH0sIHtAbGluayBJbnRlcnZhbCNoYXNTYW1lfSwge0BsaW5rIEludGVydmFsI2NvbnRhaW5zfSwge0BsaW5rIEludGVydmFsI2lzQWZ0ZXJ9LCBvciB7QGxpbmsgSW50ZXJ2YWwjaXNCZWZvcmV9LlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjc2V0fSwge0BsaW5rIEludGVydmFsI3NwbGl0QXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRCeX0sIHtAbGluayBJbnRlcnZhbCNkaXZpZGVFcXVhbGx5fSwge0BsaW5rIEludGVydmFsLm1lcmdlfSwge0BsaW5rIEludGVydmFsLnhvcn0sIHtAbGluayBJbnRlcnZhbCN1bmlvbn0sIHtAbGluayBJbnRlcnZhbCNpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgSW50ZXJ2YWwjZGlmZmVyZW5jZX0uXG4gKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNlcXVhbHN9LCB7QGxpbmsgSW50ZXJ2YWwjb3ZlcmxhcHN9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNTdGFydH0sIHtAbGluayBJbnRlcnZhbCNhYnV0c0VuZH0sIHtAbGluayBJbnRlcnZhbCNlbmd1bGZzfVxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIEludGVydmFsIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIEludGVydmFsI3RvU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvSVNPfSwge0BsaW5rIEludGVydmFsI3RvSVNPRGF0ZX0sIHtAbGluayBJbnRlcnZhbCN0b0lTT1RpbWV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9Gb3JtYXR9LCBhbmQge0BsaW5rIEludGVydmFsI3RvRHVyYXRpb259LlxuICovXG52YXIgSW50ZXJ2YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIEludGVydmFsKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmUgPSBjb25maWcuZW5kO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uSW50ZXJ2YWwgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBJbnRlcnZhbCBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBJbnRlcnZhbC5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEludGVydmFsRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoe1xuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYW4gZW5kIERhdGVUaW1lLiBJbmNsdXNpdmUgb2YgdGhlIHN0YXJ0IGJ1dCBub3QgdGhlIGVuZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi87XG4gIEludGVydmFsLmZyb21EYXRlVGltZXMgPSBmdW5jdGlvbiBmcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpLFxuICAgICAgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG4gICAgdmFyIHZhbGlkYXRlRXJyb3IgPSB2YWxpZGF0ZVN0YXJ0RW5kKGJ1aWx0U3RhcnQsIGJ1aWx0RW5kKTtcbiAgICBpZiAodmFsaWRhdGVFcnJvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXG4gICAgICAgIGVuZDogYnVpbHRFbmRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVFcnJvcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqLztcbiAgSW50ZXJ2YWwuYWZ0ZXIgPSBmdW5jdGlvbiBhZnRlcihzdGFydCwgZHVyYXRpb24pIHtcbiAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0LCBkdC5wbHVzKGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIGVuZCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgYmFja3dhcmRzIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovO1xuICBJbnRlcnZhbC5iZWZvcmUgPSBmdW5jdGlvbiBiZWZvcmUoZW5kLCBkdXJhdGlvbikge1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0Lm1pbnVzKGR1ciksIGR0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuXG4gICAqIEFjY2VwdHMgYDxzdGFydD4vPGVuZD5gLCBgPHN0YXJ0Pi88ZHVyYXRpb24+YCwgYW5kIGA8ZHVyYXRpb24+LzxlbmQ+YCBmb3JtYXRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBvcHRpb25zIHRvIHBhc3Mge0BsaW5rIERhdGVUaW1lI2Zyb21JU099IGFuZCBvcHRpb25hbGx5IHtAbGluayBEdXJhdGlvbiNmcm9tSVNPfVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi87XG4gIEludGVydmFsLmZyb21JU08gPSBmdW5jdGlvbiBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICB2YXIgX3NwbGl0ID0gKHRleHQgfHwgXCJcIikuc3BsaXQoXCIvXCIsIDIpLFxuICAgICAgcyA9IF9zcGxpdFswXSxcbiAgICAgIGUgPSBfc3BsaXRbMV07XG4gICAgaWYgKHMgJiYgZSkge1xuICAgICAgdmFyIHN0YXJ0LCBzdGFydElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBzdGFydCA9IERhdGVUaW1lLmZyb21JU08ocywgb3B0cyk7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IHN0YXJ0LmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIGVuZCwgZW5kSXNWYWxpZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGVuZCA9IERhdGVUaW1lLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGVuZElzVmFsaWQgPSBlbmQuaXNWYWxpZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZW5kSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCAmJiBlbmRJc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCkge1xuICAgICAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUlTTyhlLCBvcHRzKTtcbiAgICAgICAgaWYgKGR1ci5pc1ZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIEludGVydmFsLmFmdGVyKHN0YXJ0LCBkdXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZElzVmFsaWQpIHtcbiAgICAgICAgdmFyIF9kdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBpZiAoX2R1ci5pc1ZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIEludGVydmFsLmJlZm9yZShlbmQsIF9kdXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gSW50ZXJ2YWwuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBJbnRlcnZhbC5pc0ludGVydmFsID0gZnVuY3Rpb24gaXNJbnRlcnZhbChvKSB7XG4gICAgcmV0dXJuIG8gJiYgby5pc0x1eG9uSW50ZXJ2YWwgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhcnQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovO1xuICB2YXIgX3Byb3RvID0gSW50ZXJ2YWwucHJvdG90eXBlO1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbCBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIHJldHVybiB0aGUgbGVuZ3RoIGluLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBfcHJvdG8ubGVuZ3RoID0gZnVuY3Rpb24gbGVuZ3RoKHVuaXQpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9EdXJhdGlvbi5hcHBseSh0aGlzLCBbdW5pdF0pLmdldCh1bml0KSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb3VudCBvZiBtaW51dGVzLCBob3VycywgZGF5cywgbW9udGhzLCBvciB5ZWFycyBpbmNsdWRlZCBpbiB0aGUgSW50ZXJ2YWwsIGV2ZW4gaW4gcGFydC5cbiAgICogVW5saWtlIHtAbGluayBJbnRlcnZhbCNsZW5ndGh9IHRoaXMgY291bnRzIHNlY3Rpb25zIG9mIHRoZSBjYWxlbmRhciwgbm90IHBlcmlvZHMgb2YgdGltZSwgZS5nLiBzcGVjaWZ5aW5nICdkYXknXG4gICAqIGFza3MgJ3doYXQgZGF0ZXMgYXJlIGluY2x1ZGVkIGluIHRoaXMgaW50ZXJ2YWw/Jywgbm90ICdob3cgbWFueSBkYXlzIGxvbmcgaXMgdGhpcyBpbnRlcnZhbD8nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdD0nbWlsbGlzZWNvbmRzJ10gLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLmNvdW50ID0gZnVuY3Rpb24gY291bnQodW5pdCkge1xuICAgIGlmICh1bml0ID09PSB2b2lkIDApIHtcbiAgICAgIHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksXG4gICAgICBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgKGVuZC52YWx1ZU9mKCkgIT09IHRoaXMuZW5kLnZhbHVlT2YoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBhbmQgZW5kIGFyZSBib3RoIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBfcHJvdG8uaGFzU2FtZSA9IGZ1bmN0aW9uIGhhc1NhbWUodW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmlzRW1wdHkoKSB8fCB0aGlzLmUubWludXMoMSkuaGFzU2FtZSh0aGlzLnMsIHVuaXQpIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBEYXRlVGltZXMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLmlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLnMudmFsdWVPZigpID09PSB0aGlzLmUudmFsdWVPZigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBpcyBhZnRlciB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5pc0FmdGVyID0gZnVuY3Rpb24gaXNBZnRlcihkYXRlVGltZSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucyA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYmVmb3JlIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLmlzQmVmb3JlID0gZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLmUgPD0gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBjb250YWlucyB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqLztcbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldChfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBzdGFydCA9IF9yZWYuc3RhcnQsXG4gICAgICBlbmQgPSBfcmVmLmVuZDtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQgfHwgdGhpcy5zLCBlbmQgfHwgdGhpcy5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGF0IGVhY2ggb2YgdGhlIHNwZWNpZmllZCBEYXRlVGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgX3Byb3RvLnNwbGl0QXQgPSBmdW5jdGlvbiBzcGxpdEF0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGF0ZVRpbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICB2YXIgc29ydGVkID0gZGF0ZVRpbWVzLm1hcChmcmllbmRseURhdGVUaW1lKS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRhaW5zKGQpO1xuICAgICAgfSkuc29ydCgpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBzID0gdGhpcy5zLFxuICAgICAgaSA9IDA7XG4gICAgd2hpbGUgKHMgPCB0aGlzLmUpIHtcbiAgICAgIHZhciBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBpbnRvIHNtYWxsZXIgSW50ZXJ2YWxzLCBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgbGVuZ3RoLlxuICAgKiBMZWZ0IG92ZXIgdGltZSBpcyBncm91cGVkIGludG8gYSBzbWFsbGVyIGludGVydmFsXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgbGVuZ3RoIG9mIGVhY2ggcmVzdWx0aW5nIGludGVydmFsLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBfcHJvdG8uc3BsaXRCeSA9IGZ1bmN0aW9uIHNwbGl0QnkoZHVyYXRpb24pIHtcbiAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgcyA9IHRoaXMucyxcbiAgICAgIGlkeCA9IDEsXG4gICAgICBuZXh0O1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgd2hpbGUgKHMgPCB0aGlzLmUpIHtcbiAgICAgIHZhciBhZGRlZCA9IHRoaXMuc3RhcnQucGx1cyhkdXIubWFwVW5pdHMoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggKiBpZHg7XG4gICAgICB9KSk7XG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBpbnRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNtYWxsZXIgaW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZQYXJ0cyAtIFRoZSBudW1iZXIgb2YgSW50ZXJ2YWxzIHRvIGRpdmlkZSB0aGUgSW50ZXJ2YWwgaW50by5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgX3Byb3RvLmRpdmlkZUVxdWFsbHkgPSBmdW5jdGlvbiBkaXZpZGVFcXVhbGx5KG51bWJlck9mUGFydHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiB0aGlzLnNwbGl0QnkodGhpcy5sZW5ndGgoKSAvIG51bWJlck9mUGFydHMpLnNsaWNlKDAsIG51bWJlck9mUGFydHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgb3ZlcmxhcHMgd2l0aCB0aGUgc3BlY2lmaWVkIEludGVydmFsXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLm92ZXJsYXBzID0gZnVuY3Rpb24gb3ZlcmxhcHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5lID4gb3RoZXIucyAmJiB0aGlzLnMgPCBvdGhlci5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIHN0YXJ0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5hYnV0c1N0YXJ0ID0gZnVuY3Rpb24gYWJ1dHNTdGFydChvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICt0aGlzLmUgPT09ICtvdGhlci5zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBpcyBhZGphY2VudCB0byB0aGUgc3BlY2lmaWVkIEludGVydmFsJ3MgZW5kLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5hYnV0c0VuZCA9IGZ1bmN0aW9uIGFidXRzRW5kKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLmVuZ3VsZnMgPSBmdW5jdGlvbiBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi87XG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi87XG4gIF9wcm90by5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcbiAgICBpZiAocyA+PSBlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHVuaW9uIG9mIHRoaXMgSW50ZXJ2YWwgYW5kIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHJlc3VsdGluZyBJbnRlcnZhbCBoYXMgdGhlIG1pbmltdW0gc3RhcnQgdGltZSBhbmQgdGhlIG1heGltdW0gZW5kIHRpbWUgb2YgdGhlIHR3byBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi87XG4gIF9wcm90by51bmlvbiA9IGZ1bmN0aW9uIHVuaW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIEludGVydmFsLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoaW50ZXJ2YWxzKSB7XG4gICAgdmFyIF9pbnRlcnZhbHMkc29ydCRyZWR1YyA9IGludGVydmFscy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnMgLSBiLnM7XG4gICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKF9yZWYyLCBpdGVtKSB7XG4gICAgICAgIHZhciBzb2ZhciA9IF9yZWYyWzBdLFxuICAgICAgICAgIGN1cnJlbnQgPSBfcmVmMlsxXTtcbiAgICAgICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFtzb2ZhciwgaXRlbV07XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcbiAgICAgICAgICByZXR1cm4gW3NvZmFyLCBjdXJyZW50LnVuaW9uKGl0ZW0pXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcbiAgICAgICAgfVxuICAgICAgfSwgW1tdLCBudWxsXSksXG4gICAgICBmb3VuZCA9IF9pbnRlcnZhbHMkc29ydCRyZWR1Y1swXSxcbiAgICAgIGZpbmFsID0gX2ludGVydmFscyRzb3J0JHJlZHVjWzFdO1xuICAgIGlmIChmaW5hbCkge1xuICAgICAgZm91bmQucHVzaChmaW5hbCk7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIHJlcHJlc2VudGluZyB0aGUgc3BhbnMgb2YgdGltZSB0aGF0IG9ubHkgYXBwZWFyIGluIG9uZSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIEludGVydmFsLnhvciA9IGZ1bmN0aW9uIHhvcihpbnRlcnZhbHMpIHtcbiAgICB2YXIgX0FycmF5JHByb3RvdHlwZTtcbiAgICB2YXIgc3RhcnQgPSBudWxsLFxuICAgICAgY3VycmVudENvdW50ID0gMDtcbiAgICB2YXIgcmVzdWx0cyA9IFtdLFxuICAgICAgZW5kcyA9IGludGVydmFscy5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgdGltZTogaS5zLFxuICAgICAgICAgIHR5cGU6IFwic1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0aW1lOiBpLmUsXG4gICAgICAgICAgdHlwZTogXCJlXCJcbiAgICAgICAgfV07XG4gICAgICB9KSxcbiAgICAgIGZsYXR0ZW5lZCA9IChfQXJyYXkkcHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlKS5jb25jYXQuYXBwbHkoX0FycmF5JHByb3RvdHlwZSwgZW5kcyksXG4gICAgICBhcnIgPSBmbGF0dGVuZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS50aW1lIC0gYi50aW1lO1xuICAgICAgfSk7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShhcnIpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIGkgPSBfc3RlcC52YWx1ZTtcbiAgICAgIGN1cnJlbnRDb3VudCArPSBpLnR5cGUgPT09IFwic1wiID8gMSA6IC0xO1xuICAgICAgaWYgKGN1cnJlbnRDb3VudCA9PT0gMSkge1xuICAgICAgICBzdGFydCA9IGkudGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGFydCAmJiArc3RhcnQgIT09ICtpLnRpbWUpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgaS50aW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwubWVyZ2UocmVzdWx0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgc3BhbiBvZiB0aW1lIGluIHRoaXMgSW50ZXJ2YWwgdGhhdCBkb2Vzbid0IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7Li4uSW50ZXJ2YWx9IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBfcHJvdG8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uIGRpZmZlcmVuY2UoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnZhbHMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGludGVydmFsc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmludGVyc2VjdGlvbihpKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpICYmICFpLmlzRW1wdHkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiBcIltcIiArIHRoaXMucy50b0lTTygpICsgXCIgXFx1MjAxMyBcIiArIHRoaXMuZS50b0lTTygpICsgXCIpXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgSW50ZXJ2YWwuIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB0aGVcbiAgICogSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBhbmQgYW55IHByZXNldHMgZGVmaW5lZCBieSBMdXhvbiwgc3VjaCBhc1xuICAgKiB7QGxpbmsgRGF0ZVRpbWUuREFURV9GVUxMfSBvciB7QGxpbmsgRGF0ZVRpbWUuVElNRV9TSU1QTEV9LiBUaGUgZXhhY3QgYmVoYXZpb3Igb2YgdGhpcyBtZXRob2RcbiAgICogaXMgYnJvd3Nlci1zcGVjaWZpYywgYnV0IGluIGdlbmVyYWwgaXQgd2lsbCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4gICAqIEludGVydmFsIGluIHRoZSBhc3NpZ25lZCBsb2NhbGUuIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuXG4gICAqIHNwZWNpZmllZC5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2Zvcm1hdE9wdHM9RGF0ZVRpbWUuREFURV9TSE9SVF0gLSBFaXRoZXIgYSBEYXRlVGltZSBwcmVzZXQgb3JcbiAgICogSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHN0YXJ0IERhdGVUaW1lLlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDA5OjAwWi8yMDIyLTExLTA4VDA5OjAwWicpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gMTEvNy8yMDIyIOKAkyAxMS84LzIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QwOTowMFovMjAyMi0xMS0wOFQwOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+IE5vdmVtYmVyIDcg4oCTIDgsIDIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QwOTowMFovMjAyMi0xMS0wOFQwOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwsIHsgbG9jYWxlOiAnZnItRlInIH0pOyAvLz0+IDfigJM4IG5vdmVtYnJlIDIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QxNzowMFovMjAyMi0xMS0wN1QxOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSk7IC8vPT4gNjowMCDigJMgODowMCBQTVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDE3OjAwWi8yMDIyLTExLTA3VDE5OjAwWicpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+IE1vbiwgTm92IDA3LCA2OjAwIOKAkyA4OjAwIHBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKGZvcm1hdE9wdHMsIG9wdHMpIHtcbiAgICBpZiAoZm9ybWF0T3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBmb3JtYXRPcHRzID0gREFURV9TSE9SVDtcbiAgICB9XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLnMubG9jLmNsb25lKG9wdHMpLCBmb3JtYXRPcHRzKS5mb3JtYXRJbnRlcnZhbCh0aGlzKSA6IElOVkFMSUQkMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU08ob3B0cykgKyBcIi9cIiArIHRoaXMuZS50b0lTTyhvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgZGF0ZSBvZiB0aGlzIEludGVydmFsLlxuICAgKiBUaGUgdGltZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9JU09EYXRlID0gZnVuY3Rpb24gdG9JU09EYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU09EYXRlKCkgKyBcIi9cIiArIHRoaXMuZS50b0lTT0RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSBvZiB0aGlzIEludGVydmFsLlxuICAgKiBUaGUgZGF0ZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgRGF0ZVRpbWUjdG9JU099XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9JU09UaW1lID0gZnVuY3Rpb24gdG9JU09UaW1lKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gdGhpcy5zLnRvSVNPVGltZShvcHRzKSArIFwiL1wiICsgdGhpcy5lLnRvSVNPVGltZShvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdFxuICAgKiBzdHJpbmcuICoqWW91IG1heSBub3Qgd2FudCB0aGlzLioqIFNlZSB7QGxpbmsgSW50ZXJ2YWwjdG9Mb2NhbGVTdHJpbmd9IGZvciBhIG1vcmUgZmxleGlibGVcbiAgICogZm9ybWF0dGluZyB0b29sLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZUZvcm1hdCAtIFRoZSBmb3JtYXQgc3RyaW5nLiBUaGlzIHN0cmluZyBmb3JtYXRzIHRoZSBzdGFydCBhbmQgZW5kIHRpbWUuXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9IGZvciBkZXRhaWxzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5zZXBhcmF0b3IgPSAgJyDigJMgJ10gLSBBIHNlcGFyYXRvciB0byBwbGFjZSBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kXG4gICAqIHJlcHJlc2VudGF0aW9ucy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGRhdGVGb3JtYXQsIF90ZW1wMikge1xuICAgIHZhciBfcmVmMyA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICBfcmVmMyRzZXBhcmF0b3IgPSBfcmVmMy5zZXBhcmF0b3IsXG4gICAgICBzZXBhcmF0b3IgPSBfcmVmMyRzZXBhcmF0b3IgPT09IHZvaWQgMCA/IFwiIOKAkyBcIiA6IF9yZWYzJHNlcGFyYXRvcjtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJcIiArIHRoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KSArIHNlcGFyYXRvciArIHRoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBEdXJhdGlvbiByZXByZXNlbnRpbmcgdGhlIHRpbWUgc3Bhbm5lZCBieSB0aGlzIGludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA4ODQ4OTI1NyB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ2RheXMnKS50b09iamVjdCgpIC8vPT4geyBkYXlzOiAxLjAyNDE4MTIxNTI3Nzc3NzggfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LjgyMDk1IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LCBzZWNvbmRzOiA0OS4yNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgc2Vjb25kczogODg0ODkuMjU3IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqLztcbiAgX3Byb3RvLnRvRHVyYXRpb24gPSBmdW5jdGlvbiB0b0R1cmF0aW9uKHVuaXQsIG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQodGhpcy5pbnZhbGlkUmVhc29uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIG1hcEZuIG9uIHRoZSBpbnRlcnZhbCBzdGFydCBhbmQgZW5kLCByZXR1cm5pbmcgYSBuZXcgSW50ZXJ2YWwgZnJvbSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBGblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnRvVVRDKCkpXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC5wbHVzKHsgaG91cnM6IDIgfSkpXG4gICAqLztcbiAgX3Byb3RvLm1hcEVuZHBvaW50cyA9IGZ1bmN0aW9uIG1hcEVuZHBvaW50cyhtYXBGbikge1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKG1hcEZuKHRoaXMucyksIG1hcEZuKHRoaXMuZSkpO1xuICB9O1xuICBfY3JlYXRlQ2xhc3MoSW50ZXJ2YWwsIFt7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbmQgb2YgdGhlIEludGVydmFsXG4gICAgICogQHR5cGUge0RhdGVUaW1lfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYXQgbGVhc3QgaXRzIHN0YXJ0LCBtZWFuaW5nIHRoYXQgdGhlIEludGVydmFsIGlzbid0ICdiYWNrd2FyZHMnLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRSZWFzb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIEludGVydmFsIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZEV4cGxhbmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEludGVydmFsO1xufSgpO1xuXG4vKipcbiAqIFRoZSBJbmZvIGNsYXNzIGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIGZvciByZXRyaWV2aW5nIGdlbmVyYWwgdGltZSBhbmQgZGF0ZSByZWxhdGVkIGRhdGEuIEZvciBleGFtcGxlLCBpdCBoYXMgbWV0aG9kcyBmb3IgZmluZGluZyBvdXQgaWYgYSB0aW1lIHpvbmUgaGFzIGEgRFNULCBmb3IgbGlzdGluZyB0aGUgbW9udGhzIGluIGFueSBzdXBwb3J0ZWQgbG9jYWxlLCBhbmQgZm9yIGRpc2NvdmVyaW5nIHdoaWNoIG9mIEx1eG9uIGZlYXR1cmVzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gKi9cbnZhciBJbmZvID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW5mbygpIHt9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEluZm8uaGFzRFNUID0gZnVuY3Rpb24gaGFzRFNUKHpvbmUpIHtcbiAgICBpZiAoem9uZSA9PT0gdm9pZCAwKSB7XG4gICAgICB6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG4gICAgfVxuICAgIHZhciBwcm90byA9IERhdGVUaW1lLm5vdygpLnNldFpvbmUoem9uZSkuc2V0KHtcbiAgICAgIG1vbnRoOiAxMlxuICAgIH0pO1xuICAgIHJldHVybiAhem9uZS5pc1VuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7XG4gICAgICBtb250aDogNlxuICAgIH0pLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgSW5mby5pc1ZhbGlkSUFOQVpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkWm9uZSh6b25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lI2lzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovO1xuICBJbmZvLm5vcm1hbGl6ZVpvbmUgPSBmdW5jdGlvbiBub3JtYWxpemVab25lJDEoaW5wdXQpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShpbnB1dCwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIG1vbnRoIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgSW5mby5tb250aHMgPSBmdW5jdGlvbiBtb250aHMobGVuZ3RoLCBfdGVtcCkge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgbG9jYWxlID0gX3JlZiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGxvY2FsZSxcbiAgICAgIF9yZWYkbnVtYmVyaW5nU3lzdGVtID0gX3JlZi5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmJG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgX3JlZiRsb2NPYmogPSBfcmVmLmxvY09iaixcbiAgICAgIGxvY09iaiA9IF9yZWYkbG9jT2JqID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRsb2NPYmosXG4gICAgICBfcmVmJG91dHB1dENhbGVuZGFyID0gX3JlZi5vdXRwdXRDYWxlbmRhcixcbiAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZiRvdXRwdXRDYWxlbmRhciA9PT0gdm9pZCAwID8gXCJncmVnb3J5XCIgOiBfcmVmJG91dHB1dENhbGVuZGFyO1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCBtb250aCBuYW1lcy5cbiAgICogRm9ybWF0IG1vbnRocyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIG1vbnRocyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gdGhlIGRheSBvZiB0aGUgbW9udGguIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBJbmZvI21vbnRoc31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBJbmZvLm1vbnRoc0Zvcm1hdCA9IGZ1bmN0aW9uIG1vbnRoc0Zvcm1hdChsZW5ndGgsIF90ZW1wMikge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuICAgIHZhciBfcmVmMiA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICBfcmVmMiRsb2NhbGUgPSBfcmVmMi5sb2NhbGUsXG4gICAgICBsb2NhbGUgPSBfcmVmMiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRsb2NhbGUsXG4gICAgICBfcmVmMiRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMi5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMiRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBfcmVmMiRsb2NPYmogPSBfcmVmMi5sb2NPYmosXG4gICAgICBsb2NPYmogPSBfcmVmMiRsb2NPYmogPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRsb2NPYmosXG4gICAgICBfcmVmMiRvdXRwdXRDYWxlbmRhciA9IF9yZWYyLm91dHB1dENhbGVuZGFyLFxuICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmMiRvdXRwdXRDYWxlbmRhciA9PT0gdm9pZCAwID8gXCJncmVnb3J5XCIgOiBfcmVmMiRvdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIHdlZWsgbmFtZXMuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHdlZWtkYXkgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygpWzBdIC8vPT4gJ01vbmRheSdcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnKVswXSAvLz0+ICdNb24nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSlbMF0gLy89PiAnbHVuLidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfYp9mE2KfYq9mG2YrZhidcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqLztcbiAgSW5mby53ZWVrZGF5cyA9IGZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCwgX3RlbXAzKSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBsZW5ndGggPSBcImxvbmdcIjtcbiAgICB9XG4gICAgdmFyIF9yZWYzID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgIF9yZWYzJGxvY2FsZSA9IF9yZWYzLmxvY2FsZSxcbiAgICAgIGxvY2FsZSA9IF9yZWYzJGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJGxvY2FsZSxcbiAgICAgIF9yZWYzJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzJG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIF9yZWYzJGxvY09iaiA9IF9yZWYzLmxvY09iaixcbiAgICAgIGxvY09iaiA9IF9yZWYzJGxvY09iaiA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJGxvY09iajtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IHdlZWsgbmFtZXMuXG4gICAqIEZvcm1hdCB3ZWVrZGF5cyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIHdlZWtkYXlzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byBtb3JlIGRhdGUgaW5mb3JtYXRpb24uIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBJbmZvI3dlZWtkYXlzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovO1xuICBJbmZvLndlZWtkYXlzRm9ybWF0ID0gZnVuY3Rpb24gd2Vla2RheXNGb3JtYXQobGVuZ3RoLCBfdGVtcDQpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cbiAgICB2YXIgX3JlZjQgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgX3JlZjQkbG9jYWxlID0gX3JlZjQubG9jYWxlLFxuICAgICAgbG9jYWxlID0gX3JlZjQkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjQkbG9jYWxlLFxuICAgICAgX3JlZjQkbnVtYmVyaW5nU3lzdGVtID0gX3JlZjQubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjQkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjQkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgX3JlZjQkbG9jT2JqID0gX3JlZjQubG9jT2JqLFxuICAgICAgbG9jT2JqID0gX3JlZjQkbG9jT2JqID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjQkbG9jT2JqO1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBtZXJpZGllbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcygpIC8vPT4gWyAnQU0nLCAnUE0nIF1cbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoeyBsb2NhbGU6ICdteScgfSkgLy89PiBbICfhgJThgLbhgJThgIDhgLonLCAn4YCK4YCU4YCxJyBdXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIEluZm8ubWVyaWRpZW1zID0gZnVuY3Rpb24gbWVyaWRpZW1zKF90ZW1wNSkge1xuICAgIHZhciBfcmVmNSA9IF90ZW1wNSA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDUsXG4gICAgICBfcmVmNSRsb2NhbGUgPSBfcmVmNS5sb2NhbGUsXG4gICAgICBsb2NhbGUgPSBfcmVmNSRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNSRsb2NhbGU7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlKS5tZXJpZGllbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZXJhcywgc3VjaCBhcyBbJ0JDJywgJ0FEJ10uIFRoZSBsb2NhbGUgY2FuIGJlIHNwZWNpZmllZCwgYnV0IHRoZSBjYWxlbmRhciBzeXN0ZW0gaXMgYWx3YXlzIEdyZWdvcmlhbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J3Nob3J0J10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBlcmEgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJzaG9ydFwiIG9yIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCkgLy89PiBbICdCQycsICdBRCcgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnKSAvLz0+IFsgJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJywgeyBsb2NhbGU6ICdmcicgfSkgLy89PiBbICdhdmFudCBKw6lzdXMtQ2hyaXN0JywgJ2FwcsOocyBKw6lzdXMtQ2hyaXN0JyBdXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi87XG4gIEluZm8uZXJhcyA9IGZ1bmN0aW9uIGVyYXMobGVuZ3RoLCBfdGVtcDYpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwic2hvcnRcIjtcbiAgICB9XG4gICAgdmFyIF9yZWY2ID0gX3RlbXA2ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNixcbiAgICAgIF9yZWY2JGxvY2FsZSA9IF9yZWY2LmxvY2FsZSxcbiAgICAgIGxvY2FsZSA9IF9yZWY2JGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY2JGxvY2FsZTtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bGwsIFwiZ3JlZ29yeVwiKS5lcmFzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuXG4gICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmcgc3VwcG9ydCBpcyBub3QgYXZhaWxhYmxlLiBVc2UgdGhpcyBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IGlmIHRoYXQncyB0aGUgY2FzZS5cbiAgICogS2V5czpcbiAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nXG4gICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgcmVsYXRpdmU6IGZhbHNlIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi87XG4gIEluZm8uZmVhdHVyZXMgPSBmdW5jdGlvbiBmZWF0dXJlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVsYXRpdmU6IGhhc1JlbGF0aXZlKClcbiAgICB9O1xuICB9O1xuICByZXR1cm4gSW5mbztcbn0oKTtcblxuZnVuY3Rpb24gZGF5RGlmZihlYXJsaWVyLCBsYXRlcikge1xuICB2YXIgdXRjRGF5U3RhcnQgPSBmdW5jdGlvbiB1dGNEYXlTdGFydChkdCkge1xuICAgICAgcmV0dXJuIGR0LnRvVVRDKDAsIHtcbiAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZVxuICAgICAgfSkuc3RhcnRPZihcImRheVwiKS52YWx1ZU9mKCk7XG4gICAgfSxcbiAgICBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcyhcImRheXNcIikpO1xufVxuZnVuY3Rpb24gaGlnaE9yZGVyRGlmZnMoY3Vyc29yLCBsYXRlciwgdW5pdHMpIHtcbiAgdmFyIGRpZmZlcnMgPSBbW1wieWVhcnNcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi55ZWFyIC0gYS55ZWFyO1xuICB9XSwgW1wicXVhcnRlcnNcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5xdWFydGVyIC0gYS5xdWFydGVyICsgKGIueWVhciAtIGEueWVhcikgKiA0O1xuICB9XSwgW1wibW9udGhzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIubW9udGggLSBhLm1vbnRoICsgKGIueWVhciAtIGEueWVhcikgKiAxMjtcbiAgfV0sIFtcIndlZWtzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGRheXMgPSBkYXlEaWZmKGEsIGIpO1xuICAgIHJldHVybiAoZGF5cyAtIGRheXMgJSA3KSAvIDc7XG4gIH1dLCBbXCJkYXlzXCIsIGRheURpZmZdXTtcbiAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgdmFyIGVhcmxpZXIgPSBjdXJzb3I7XG4gIHZhciBsb3dlc3RPcmRlciwgaGlnaFdhdGVyO1xuICBmb3IgKHZhciBfaSA9IDAsIF9kaWZmZXJzID0gZGlmZmVyczsgX2kgPCBfZGlmZmVycy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgX2RpZmZlcnMkX2kgPSBfZGlmZmVyc1tfaV0sXG4gICAgICB1bml0ID0gX2RpZmZlcnMkX2lbMF0sXG4gICAgICBkaWZmZXIgPSBfZGlmZmVycyRfaVsxXTtcbiAgICBpZiAodW5pdHMuaW5kZXhPZih1bml0KSA+PSAwKSB7XG4gICAgICBsb3dlc3RPcmRlciA9IHVuaXQ7XG4gICAgICByZXN1bHRzW3VuaXRdID0gZGlmZmVyKGN1cnNvciwgbGF0ZXIpO1xuICAgICAgaGlnaFdhdGVyID0gZWFybGllci5wbHVzKHJlc3VsdHMpO1xuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XG4gICAgICAgIHJlc3VsdHNbdW5pdF0tLTtcbiAgICAgICAgY3Vyc29yID0gZWFybGllci5wbHVzKHJlc3VsdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyc29yID0gaGlnaFdhdGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07XG59XG5mdW5jdGlvbiBfZGlmZiAoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBvcHRzKSB7XG4gIHZhciBfaGlnaE9yZGVyRGlmZnMgPSBoaWdoT3JkZXJEaWZmcyhlYXJsaWVyLCBsYXRlciwgdW5pdHMpLFxuICAgIGN1cnNvciA9IF9oaWdoT3JkZXJEaWZmc1swXSxcbiAgICByZXN1bHRzID0gX2hpZ2hPcmRlckRpZmZzWzFdLFxuICAgIGhpZ2hXYXRlciA9IF9oaWdoT3JkZXJEaWZmc1syXSxcbiAgICBsb3dlc3RPcmRlciA9IF9oaWdoT3JkZXJEaWZmc1szXTtcbiAgdmFyIHJlbWFpbmluZ01pbGxpcyA9IGxhdGVyIC0gY3Vyc29yO1xuICB2YXIgbG93ZXJPcmRlclVuaXRzID0gdW5pdHMuZmlsdGVyKGZ1bmN0aW9uICh1KSB7XG4gICAgcmV0dXJuIFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl0uaW5kZXhPZih1KSA+PSAwO1xuICB9KTtcbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaGlnaFdhdGVyIDwgbGF0ZXIpIHtcbiAgICAgIHZhciBfY3Vyc29yJHBsdXM7XG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cygoX2N1cnNvciRwbHVzID0ge30sIF9jdXJzb3IkcGx1c1tsb3dlc3RPcmRlcl0gPSAxLCBfY3Vyc29yJHBsdXMpKTtcbiAgICB9XG4gICAgaWYgKGhpZ2hXYXRlciAhPT0gY3Vyc29yKSB7XG4gICAgICByZXN1bHRzW2xvd2VzdE9yZGVyXSA9IChyZXN1bHRzW2xvd2VzdE9yZGVyXSB8fCAwKSArIHJlbWFpbmluZ01pbGxpcyAvIChoaWdoV2F0ZXIgLSBjdXJzb3IpO1xuICAgIH1cbiAgfVxuICB2YXIgZHVyYXRpb24gPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHJlc3VsdHMsIG9wdHMpO1xuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgX0R1cmF0aW9uJGZyb21NaWxsaXM7XG4gICAgcmV0dXJuIChfRHVyYXRpb24kZnJvbU1pbGxpcyA9IER1cmF0aW9uLmZyb21NaWxsaXMocmVtYWluaW5nTWlsbGlzLCBvcHRzKSkuc2hpZnRUby5hcHBseShfRHVyYXRpb24kZnJvbU1pbGxpcywgbG93ZXJPcmRlclVuaXRzKS5wbHVzKGR1cmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cbn1cblxudmFyIG51bWJlcmluZ1N5c3RlbXMgPSB7XG4gIGFyYWI6IFwiW1xcdTA2NjAtXFx1MDY2OV1cIixcbiAgYXJhYmV4dDogXCJbXFx1MDZGMC1cXHUwNkY5XVwiLFxuICBiYWxpOiBcIltcXHUxQjUwLVxcdTFCNTldXCIsXG4gIGJlbmc6IFwiW1xcdTA5RTYtXFx1MDlFRl1cIixcbiAgZGV2YTogXCJbXFx1MDk2Ni1cXHUwOTZGXVwiLFxuICBmdWxsd2lkZTogXCJbXFx1RkYxMC1cXHVGRjE5XVwiLFxuICBndWpyOiBcIltcXHUwQUU2LVxcdTBBRUZdXCIsXG4gIGhhbmlkZWM6IFwiW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV1cIixcbiAga2htcjogXCJbXFx1MTdFMC1cXHUxN0U5XVwiLFxuICBrbmRhOiBcIltcXHUwQ0U2LVxcdTBDRUZdXCIsXG4gIGxhb286IFwiW1xcdTBFRDAtXFx1MEVEOV1cIixcbiAgbGltYjogXCJbXFx1MTk0Ni1cXHUxOTRGXVwiLFxuICBtbHltOiBcIltcXHUwRDY2LVxcdTBENkZdXCIsXG4gIG1vbmc6IFwiW1xcdTE4MTAtXFx1MTgxOV1cIixcbiAgbXltcjogXCJbXFx1MTA0MC1cXHUxMDQ5XVwiLFxuICBvcnlhOiBcIltcXHUwQjY2LVxcdTBCNkZdXCIsXG4gIHRhbWxkZWM6IFwiW1xcdTBCRTYtXFx1MEJFRl1cIixcbiAgdGVsdTogXCJbXFx1MEM2Ni1cXHUwQzZGXVwiLFxuICB0aGFpOiBcIltcXHUwRTUwLVxcdTBFNTldXCIsXG4gIHRpYnQ6IFwiW1xcdTBGMjAtXFx1MEYyOV1cIixcbiAgbGF0bjogXCJcXFxcZFwiXG59O1xudmFyIG51bWJlcmluZ1N5c3RlbXNVVEYxNiA9IHtcbiAgYXJhYjogWzE2MzIsIDE2NDFdLFxuICBhcmFiZXh0OiBbMTc3NiwgMTc4NV0sXG4gIGJhbGk6IFs2OTkyLCA3MDAxXSxcbiAgYmVuZzogWzI1MzQsIDI1NDNdLFxuICBkZXZhOiBbMjQwNiwgMjQxNV0sXG4gIGZ1bGx3aWRlOiBbNjUyOTYsIDY1MzAzXSxcbiAgZ3VqcjogWzI3OTAsIDI3OTldLFxuICBraG1yOiBbNjExMiwgNjEyMV0sXG4gIGtuZGE6IFszMzAyLCAzMzExXSxcbiAgbGFvbzogWzM3OTIsIDM4MDFdLFxuICBsaW1iOiBbNjQ3MCwgNjQ3OV0sXG4gIG1seW06IFszNDMwLCAzNDM5XSxcbiAgbW9uZzogWzYxNjAsIDYxNjldLFxuICBteW1yOiBbNDE2MCwgNDE2OV0sXG4gIG9yeWE6IFsyOTE4LCAyOTI3XSxcbiAgdGFtbGRlYzogWzMwNDYsIDMwNTVdLFxuICB0ZWx1OiBbMzE3NCwgMzE4M10sXG4gIHRoYWk6IFszNjY0LCAzNjczXSxcbiAgdGlidDogWzM4NzIsIDM4ODFdXG59O1xudmFyIGhhbmlkZWNDaGFycyA9IG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYy5yZXBsYWNlKC9bXFxbfFxcXV0vZywgXCJcIikuc3BsaXQoXCJcIik7XG5mdW5jdGlvbiBwYXJzZURpZ2l0cyhzdHIpIHtcbiAgdmFyIHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IFwiXCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICBpZiAoc3RyW2ldLnNlYXJjaChudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMpICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSArPSBoYW5pZGVjQ2hhcnMuaW5kZXhPZihzdHJbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG51bWJlcmluZ1N5c3RlbXNVVEYxNikge1xuICAgICAgICAgIHZhciBfbnVtYmVyaW5nU3lzdGVtc1VURiA9IG51bWJlcmluZ1N5c3RlbXNVVEYxNltrZXldLFxuICAgICAgICAgICAgbWluID0gX251bWJlcmluZ1N5c3RlbXNVVEZbMF0sXG4gICAgICAgICAgICBtYXggPSBfbnVtYmVyaW5nU3lzdGVtc1VURlsxXTtcbiAgICAgICAgICBpZiAoY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXgpIHtcbiAgICAgICAgICAgIHZhbHVlICs9IGNvZGUgLSBtaW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gZGlnaXRSZWdleChfcmVmLCBhcHBlbmQpIHtcbiAgdmFyIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtO1xuICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHtcbiAgICBhcHBlbmQgPSBcIlwiO1xuICB9XG4gIHJldHVybiBuZXcgUmVnRXhwKFwiXCIgKyBudW1iZXJpbmdTeXN0ZW1zW251bWJlcmluZ1N5c3RlbSB8fCBcImxhdG5cIl0gKyBhcHBlbmQpO1xufVxuXG52YXIgTUlTU0lOR19GVFAgPSBcIm1pc3NpbmcgSW50bC5EYXRlVGltZUZvcm1hdC5mb3JtYXRUb1BhcnRzIHN1cHBvcnRcIjtcbmZ1bmN0aW9uIGludFVuaXQocmVnZXgsIHBvc3QpIHtcbiAgaWYgKHBvc3QgPT09IHZvaWQgMCkge1xuICAgIHBvc3QgPSBmdW5jdGlvbiBwb3N0KGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWdleDogcmVnZXgsXG4gICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYpIHtcbiAgICAgIHZhciBzID0gX3JlZlswXTtcbiAgICAgIHJldHVybiBwb3N0KHBhcnNlRGlnaXRzKHMpKTtcbiAgICB9XG4gIH07XG59XG52YXIgTkJTUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbnZhciBzcGFjZU9yTkJTUCA9IFwiWyBcIiArIE5CU1AgKyBcIl1cIjtcbnZhciBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsIFwiZ1wiKTtcbmZ1bmN0aW9uIGZpeExpc3RSZWdleChzKSB7XG4gIC8vIG1ha2UgZG90cyBvcHRpb25hbCBhbmQgYWxzbyBtYWtlIHRoZW0gbGl0ZXJhbFxuICAvLyBtYWtlIHNwYWNlIGFuZCBub24gYnJlYWthYmxlIHNwYWNlIGNoYXJhY3RlcnMgaW50ZXJjaGFuZ2VhYmxlXG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuP1wiKS5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCBzcGFjZU9yTkJTUCk7XG59XG5mdW5jdGlvbiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSAvLyBpZ25vcmUgZG90cyB0aGF0IHdlcmUgbWFkZSBvcHRpb25hbFxuICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgXCIgXCIpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXG4gIC50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gb25lT2Yoc3RyaW5ncywgc3RhcnRJbmRleCkge1xuICBpZiAoc3RyaW5ncyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZWdleDogUmVnRXhwKHN0cmluZ3MubWFwKGZpeExpc3RSZWdleCkuam9pbihcInxcIikpLFxuICAgICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYyKSB7XG4gICAgICAgIHZhciBzID0gX3JlZjJbMF07XG4gICAgICAgIHJldHVybiBzdHJpbmdzLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSA9PT0gc3RyaXBJbnNlbnNpdGl2aXRpZXMoaSk7XG4gICAgICAgIH0pICsgc3RhcnRJbmRleDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xuICByZXR1cm4ge1xuICAgIHJlZ2V4OiByZWdleCxcbiAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjMpIHtcbiAgICAgIHZhciBoID0gX3JlZjNbMV0sXG4gICAgICAgIG0gPSBfcmVmM1syXTtcbiAgICAgIHJldHVybiBzaWduZWRPZmZzZXQoaCwgbSk7XG4gICAgfSxcbiAgICBncm91cHM6IGdyb3Vwc1xuICB9O1xufVxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XG4gIHJldHVybiB7XG4gICAgcmVnZXg6IHJlZ2V4LFxuICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmNCkge1xuICAgICAgdmFyIHMgPSBfcmVmNFswXTtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGVzY2FwZVRva2VuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgXCJcXFxcJCZcIik7XG59XG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICB2YXIgb25lID0gZGlnaXRSZWdleChsb2MpLFxuICAgIHR3byA9IGRpZ2l0UmVnZXgobG9jLCBcInsyfVwiKSxcbiAgICB0aHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInszfVwiKSxcbiAgICBmb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezR9XCIpLFxuICAgIHNpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns2fVwiKSxcbiAgICBvbmVPclR3byA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDJ9XCIpLFxuICAgIG9uZVRvVGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwzfVwiKSxcbiAgICBvbmVUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDZ9XCIpLFxuICAgIG9uZVRvTmluZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDl9XCIpLFxuICAgIHR3b1RvRm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcInsyLDR9XCIpLFxuICAgIGZvdXJUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns0LDZ9XCIpLFxuICAgIGxpdGVyYWwgPSBmdW5jdGlvbiBsaXRlcmFsKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZ2V4OiBSZWdFeHAoZXNjYXBlVG9rZW4odC52YWwpKSxcbiAgICAgICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWY1KSB7XG4gICAgICAgICAgdmFyIHMgPSBfcmVmNVswXTtcbiAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfSxcbiAgICAgICAgbGl0ZXJhbDogdHJ1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIHVuaXRhdGUgPSBmdW5jdGlvbiB1bml0YXRlKHQpIHtcbiAgICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0LnZhbCkge1xuICAgICAgICAvLyBlcmFcbiAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJzaG9ydFwiLCBmYWxzZSksIDApO1xuICAgICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJsb25nXCIsIGZhbHNlKSwgMCk7XG4gICAgICAgIC8vIHllYXJzXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcInl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHNpeCk7XG4gICAgICAgIC8vIG1vbnRoc1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgLy8gZGF0ZXNcbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIG9yZGluYWxzXG4gICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIC8vIHRpbWVcbiAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xuICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUob25lVG9OaW5lKTtcbiAgICAgICAgY2FzZSBcInV1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJ1dXVcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuICAgICAgICAvLyBtZXJpZGllbVxuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubWVyaWRpZW1zKCksIDApO1xuICAgICAgICAvLyB3ZWVrWWVhciAoaylcbiAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG4gICAgICAgIC8vIHdlZWtOdW1iZXIgKFcpXG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICAvLyB3ZWVrZGF5c1xuICAgICAgICBjYXNlIFwiRVwiOlxuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwibG9uZ1wiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBvZmZzZXQvem9uZVxuICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoXCIoWystXVwiICsgb25lT3JUd28uc291cmNlICsgXCIpKD86OihcIiArIHR3by5zb3VyY2UgKyBcIikpP1wiKSwgMik7XG4gICAgICAgIGNhc2UgXCJaWlpcIjpcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoXCIoWystXVwiICsgb25lT3JUd28uc291cmNlICsgXCIpKFwiICsgdHdvLnNvdXJjZSArIFwiKT9cIiksIDIpO1xuICAgICAgICAvLyB3ZSBkb24ndCBzdXBwb3J0IFpaWlogKFBTVCkgb3IgWlpaWlogKFBhY2lmaWMgU3RhbmRhcmQgVGltZSkgaW4gcGFyc2luZ1xuICAgICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYW55IHdheSB0byBmaWd1cmUgb3V0IHdoYXQgdGhleSBhcmVcbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTtcbiAgICAgICAgLy8gdGhpcyBzcGVjaWFsLWNhc2UgXCJ0b2tlblwiIHJlcHJlc2VudHMgYSBwbGFjZSB3aGVyZSBhIG1hY3JvLXRva2VuIGV4cGFuZGVkIGludG8gYSB3aGl0ZS1zcGFjZSBsaXRlcmFsXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSBhY2NlcHQgYW55IG5vbi1uZXdsaW5lIHdoaXRlLXNwYWNlXG4gICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZSgvW15cXFNcXG5cXHJdLyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgICB9XG4gICAgfTtcbiAgdmFyIHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFBcbiAgfTtcbiAgdW5pdC50b2tlbiA9IHRva2VuO1xuICByZXR1cm4gdW5pdDtcbn1cbnZhciBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiXG4gIH0sXG4gIG1vbnRoOiB7XG4gICAgbnVtZXJpYzogXCJNXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiTU1cIixcbiAgICBzaG9ydDogXCJNTU1cIixcbiAgICBsb25nOiBcIk1NTU1cIlxuICB9LFxuICBkYXk6IHtcbiAgICBudW1lcmljOiBcImRcIixcbiAgICBcIjItZGlnaXRcIjogXCJkZFwiXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIlxuICB9LFxuICBkYXlwZXJpb2Q6IFwiYVwiLFxuICBkYXlQZXJpb2Q6IFwiYVwiLFxuICBob3VyOiB7XG4gICAgbnVtZXJpYzogXCJoXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiaGhcIlxuICB9LFxuICBtaW51dGU6IHtcbiAgICBudW1lcmljOiBcIm1cIixcbiAgICBcIjItZGlnaXRcIjogXCJtbVwiXG4gIH0sXG4gIHNlY29uZDoge1xuICAgIG51bWVyaWM6IFwic1wiLFxuICAgIFwiMi1kaWdpdFwiOiBcInNzXCJcbiAgfSxcbiAgdGltZVpvbmVOYW1lOiB7XG4gICAgbG9uZzogXCJaWlpaWlwiLFxuICAgIHNob3J0OiBcIlpaWlwiXG4gIH1cbn07XG5mdW5jdGlvbiB0b2tlbkZvclBhcnQocGFydCwgZm9ybWF0T3B0cykge1xuICB2YXIgdHlwZSA9IHBhcnQudHlwZSxcbiAgICB2YWx1ZSA9IHBhcnQudmFsdWU7XG4gIGlmICh0eXBlID09PSBcImxpdGVyYWxcIikge1xuICAgIHZhciBpc1NwYWNlID0gL15cXHMrJC8udGVzdCh2YWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpdGVyYWw6ICFpc1NwYWNlLFxuICAgICAgdmFsOiBpc1NwYWNlID8gXCIgXCIgOiB2YWx1ZVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlID0gZm9ybWF0T3B0c1t0eXBlXTtcbiAgdmFyIHZhbCA9IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsW3R5cGVdO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIikge1xuICAgIHZhbCA9IHZhbFtzdHlsZV07XG4gIH1cbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgIHZhbDogdmFsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykge1xuICB2YXIgcmUgPSB1bml0cy5tYXAoZnVuY3Rpb24gKHUpIHtcbiAgICByZXR1cm4gdS5yZWdleDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChmLCByKSB7XG4gICAgcmV0dXJuIGYgKyBcIihcIiArIHIuc291cmNlICsgXCIpXCI7XG4gIH0sIFwiXCIpO1xuICByZXR1cm4gW1wiXlwiICsgcmUgKyBcIiRcIiwgdW5pdHNdO1xufVxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xuICB2YXIgbWF0Y2hlcyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcbiAgaWYgKG1hdGNoZXMpIHtcbiAgICB2YXIgYWxsID0ge307XG4gICAgdmFyIG1hdGNoSW5kZXggPSAxO1xuICAgIGZvciAodmFyIGkgaW4gaGFuZGxlcnMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShoYW5kbGVycywgaSkpIHtcbiAgICAgICAgdmFyIGggPSBoYW5kbGVyc1tpXSxcbiAgICAgICAgICBncm91cHMgPSBoLmdyb3VwcyA/IGguZ3JvdXBzICsgMSA6IDE7XG4gICAgICAgIGlmICghaC5saXRlcmFsICYmIGgudG9rZW4pIHtcbiAgICAgICAgICBhbGxbaC50b2tlbi52YWxbMF1dID0gaC5kZXNlcihtYXRjaGVzLnNsaWNlKG1hdGNoSW5kZXgsIG1hdGNoSW5kZXggKyBncm91cHMpKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaEluZGV4ICs9IGdyb3VwcztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFttYXRjaGVzLCBhbGxdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbWF0Y2hlcywge31dO1xuICB9XG59XG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgdmFyIHRvRmllbGQgPSBmdW5jdGlvbiB0b0ZpZWxkKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG4gICAgICBjYXNlIFwiaFwiOlxuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgcmV0dXJuIFwiZGF5XCI7XG4gICAgICBjYXNlIFwib1wiOlxuICAgICAgICByZXR1cm4gXCJvcmRpbmFsXCI7XG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcbiAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgIHJldHVybiBcInllYXJcIjtcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrZGF5XCI7XG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrTnVtYmVyXCI7XG4gICAgICBjYXNlIFwia1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrWWVhclwiO1xuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFwicXVhcnRlclwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuICB2YXIgem9uZSA9IG51bGw7XG4gIHZhciBzcGVjaWZpY09mZnNldDtcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnopKSB7XG4gICAgem9uZSA9IElBTkFab25lLmNyZWF0ZShtYXRjaGVzLnopO1xuICB9XG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5aKSkge1xuICAgIGlmICghem9uZSkge1xuICAgICAgem9uZSA9IG5ldyBGaXhlZE9mZnNldFpvbmUobWF0Y2hlcy5aKTtcbiAgICB9XG4gICAgc3BlY2lmaWNPZmZzZXQgPSBtYXRjaGVzLlo7XG4gIH1cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnEpKSB7XG4gICAgbWF0Y2hlcy5NID0gKG1hdGNoZXMucSAtIDEpICogMyArIDE7XG4gIH1cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcbiAgICAgIG1hdGNoZXMuaCA9IDA7XG4gICAgfVxuICB9XG4gIGlmIChtYXRjaGVzLkcgPT09IDAgJiYgbWF0Y2hlcy55KSB7XG4gICAgbWF0Y2hlcy55ID0gLW1hdGNoZXMueTtcbiAgfVxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMudSkpIHtcbiAgICBtYXRjaGVzLlMgPSBwYXJzZU1pbGxpcyhtYXRjaGVzLnUpO1xuICB9XG4gIHZhciB2YWxzID0gT2JqZWN0LmtleXMobWF0Y2hlcykucmVkdWNlKGZ1bmN0aW9uIChyLCBrKSB7XG4gICAgdmFyIGYgPSB0b0ZpZWxkKGspO1xuICAgIGlmIChmKSB7XG4gICAgICByW2ZdID0gbWF0Y2hlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIFt2YWxzLCB6b25lLCBzcGVjaWZpY09mZnNldF07XG59XG52YXIgZHVtbXlEYXRlVGltZUNhY2hlID0gbnVsbDtcbmZ1bmN0aW9uIGdldER1bW15RGF0ZVRpbWUoKSB7XG4gIGlmICghZHVtbXlEYXRlVGltZUNhY2hlKSB7XG4gICAgZHVtbXlEYXRlVGltZUNhY2hlID0gRGF0ZVRpbWUuZnJvbU1pbGxpcygxNTU1NTU1NTU1NTU1KTtcbiAgfVxuICByZXR1cm4gZHVtbXlEYXRlVGltZUNhY2hlO1xufVxuZnVuY3Rpb24gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHRva2VuLCBsb2NhbGUpIHtcbiAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbiAgdmFyIGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbi52YWwpO1xuICB2YXIgdG9rZW5zID0gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSk7XG4gIGlmICh0b2tlbnMgPT0gbnVsbCB8fCB0b2tlbnMuaW5jbHVkZXModW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuICByZXR1cm4gdG9rZW5zO1xufVxuZnVuY3Rpb24gZXhwYW5kTWFjcm9Ub2tlbnModG9rZW5zLCBsb2NhbGUpIHtcbiAgdmFyIF9BcnJheSRwcm90b3R5cGU7XG4gIHJldHVybiAoX0FycmF5JHByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZSkuY29uY2F0LmFwcGx5KF9BcnJheSRwcm90b3R5cGUsIHRva2Vucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHQsIGxvY2FsZSk7XG4gIH0pKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICB2YXIgdG9rZW5zID0gZXhwYW5kTWFjcm9Ub2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZvcm1hdCksIGxvY2FsZSksXG4gICAgdW5pdHMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdW5pdEZvclRva2VuKHQsIGxvY2FsZSk7XG4gICAgfSksXG4gICAgZGlzcXVhbGlmeWluZ1VuaXQgPSB1bml0cy5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5pbnZhbGlkUmVhc29uO1xuICAgIH0pO1xuICBpZiAoZGlzcXVhbGlmeWluZ1VuaXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICBpbnZhbGlkUmVhc29uOiBkaXNxdWFsaWZ5aW5nVW5pdC5pbnZhbGlkUmVhc29uXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2J1aWxkUmVnZXggPSBidWlsZFJlZ2V4KHVuaXRzKSxcbiAgICAgIHJlZ2V4U3RyaW5nID0gX2J1aWxkUmVnZXhbMF0sXG4gICAgICBoYW5kbGVycyA9IF9idWlsZFJlZ2V4WzFdLFxuICAgICAgcmVnZXggPSBSZWdFeHAocmVnZXhTdHJpbmcsIFwiaVwiKSxcbiAgICAgIF9tYXRjaCA9IG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpLFxuICAgICAgcmF3TWF0Y2hlcyA9IF9tYXRjaFswXSxcbiAgICAgIG1hdGNoZXMgPSBfbWF0Y2hbMV0sXG4gICAgICBfcmVmNiA9IG1hdGNoZXMgPyBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIDogW251bGwsIG51bGwsIHVuZGVmaW5lZF0sXG4gICAgICByZXN1bHQgPSBfcmVmNlswXSxcbiAgICAgIHpvbmUgPSBfcmVmNlsxXSxcbiAgICAgIHNwZWNpZmljT2Zmc2V0ID0gX3JlZjZbMl07XG4gICAgaWYgKGhhc093blByb3BlcnR5KG1hdGNoZXMsIFwiYVwiKSAmJiBoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcIkhcIikpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IGluY2x1ZGUgbWVyaWRpZW0gd2hlbiBzcGVjaWZ5aW5nIDI0LWhvdXIgZm9ybWF0XCIpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICByZWdleDogcmVnZXgsXG4gICAgICByYXdNYXRjaGVzOiByYXdNYXRjaGVzLFxuICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgem9uZTogem9uZSxcbiAgICAgIHNwZWNpZmljT2Zmc2V0OiBzcGVjaWZpY09mZnNldFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgdmFyIF9leHBsYWluRnJvbVRva2VucyA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCksXG4gICAgcmVzdWx0ID0gX2V4cGxhaW5Gcm9tVG9rZW5zLnJlc3VsdCxcbiAgICB6b25lID0gX2V4cGxhaW5Gcm9tVG9rZW5zLnpvbmUsXG4gICAgc3BlY2lmaWNPZmZzZXQgPSBfZXhwbGFpbkZyb21Ub2tlbnMuc3BlY2lmaWNPZmZzZXQsXG4gICAgaW52YWxpZFJlYXNvbiA9IF9leHBsYWluRnJvbVRva2Vucy5pbnZhbGlkUmVhc29uO1xuICByZXR1cm4gW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb25dO1xufVxuZnVuY3Rpb24gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSkge1xuICBpZiAoIWZvcm1hdE9wdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgZm9ybWF0dGVyID0gRm9ybWF0dGVyLmNyZWF0ZShsb2NhbGUsIGZvcm1hdE9wdHMpO1xuICB2YXIgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0RGF0ZVRpbWVQYXJ0cyhnZXREdW1teURhdGVUaW1lKCkpO1xuICByZXR1cm4gcGFydHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHRva2VuRm9yUGFydChwLCBmb3JtYXRPcHRzKTtcbiAgfSk7XG59XG5cbnZhciBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSxcbiAgbGVhcExhZGRlciA9IFswLCAzMSwgNjAsIDkxLCAxMjEsIDE1MiwgMTgyLCAyMTMsIDI0NCwgMjc0LCAzMDUsIDMzNV07XG5mdW5jdGlvbiB1bml0T3V0T2ZSYW5nZSh1bml0LCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXCJ1bml0IG91dCBvZiByYW5nZVwiLCBcInlvdSBzcGVjaWZpZWQgXCIgKyB2YWx1ZSArIFwiIChvZiB0eXBlIFwiICsgdHlwZW9mIHZhbHVlICsgXCIpIGFzIGEgXCIgKyB1bml0ICsgXCIsIHdoaWNoIGlzIGludmFsaWRcIik7XG59XG5mdW5jdGlvbiBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSkge1xuICB2YXIgZCA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgZGF5KSk7XG4gIGlmICh5ZWFyIDwgMTAwICYmIHllYXIgPj0gMCkge1xuICAgIGQuc2V0VVRDRnVsbFllYXIoZC5nZXRVVENGdWxsWWVhcigpIC0gMTkwMCk7XG4gIH1cbiAgdmFyIGpzID0gZC5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGpzID09PSAwID8gNyA6IGpzO1xufVxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcbn1cbmZ1bmN0aW9uIHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCkge1xuICB2YXIgdGFibGUgPSBpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIsXG4gICAgbW9udGgwID0gdGFibGUuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaSA8IG9yZGluYWw7XG4gICAgfSksXG4gICAgZGF5ID0gb3JkaW5hbCAtIHRhYmxlW21vbnRoMF07XG4gIHJldHVybiB7XG4gICAgbW9udGg6IG1vbnRoMCArIDEsXG4gICAgZGF5OiBkYXlcbiAgfTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdyZWdvcmlhblRvV2VlayhncmVnT2JqKSB7XG4gIHZhciB5ZWFyID0gZ3JlZ09iai55ZWFyLFxuICAgIG1vbnRoID0gZ3JlZ09iai5tb250aCxcbiAgICBkYXkgPSBncmVnT2JqLmRheSxcbiAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSksXG4gICAgd2Vla2RheSA9IGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KTtcbiAgdmFyIHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKChvcmRpbmFsIC0gd2Vla2RheSArIDEwKSAvIDcpLFxuICAgIHdlZWtZZWFyO1xuICBpZiAod2Vla051bWJlciA8IDEpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgLSAxO1xuICAgIHdlZWtOdW1iZXIgPSB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKHdlZWtOdW1iZXIgPiB3ZWVrc0luV2Vla1llYXIoeWVhcikpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xuICAgIHdlZWtOdW1iZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIHdlZWtZZWFyID0geWVhcjtcbiAgfVxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHdlZWtZZWFyOiB3ZWVrWWVhcixcbiAgICB3ZWVrTnVtYmVyOiB3ZWVrTnVtYmVyLFxuICAgIHdlZWtkYXk6IHdlZWtkYXlcbiAgfSwgdGltZU9iamVjdChncmVnT2JqKSk7XG59XG5mdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcbiAgdmFyIHdlZWtZZWFyID0gd2Vla0RhdGEud2Vla1llYXIsXG4gICAgd2Vla051bWJlciA9IHdlZWtEYXRhLndlZWtOdW1iZXIsXG4gICAgd2Vla2RheSA9IHdlZWtEYXRhLndlZWtkYXksXG4gICAgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCksXG4gICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuICB2YXIgb3JkaW5hbCA9IHdlZWtOdW1iZXIgKiA3ICsgd2Vla2RheSAtIHdlZWtkYXlPZkphbjQgLSAzLFxuICAgIHllYXI7XG4gIGlmIChvcmRpbmFsIDwgMSkge1xuICAgIHllYXIgPSB3ZWVrWWVhciAtIDE7XG4gICAgb3JkaW5hbCArPSBkYXlzSW5ZZWFyKHllYXIpO1xuICB9IGVsc2UgaWYgKG9yZGluYWwgPiB5ZWFySW5EYXlzKSB7XG4gICAgeWVhciA9IHdlZWtZZWFyICsgMTtcbiAgICBvcmRpbmFsIC09IGRheXNJblllYXIod2Vla1llYXIpO1xuICB9IGVsc2Uge1xuICAgIHllYXIgPSB3ZWVrWWVhcjtcbiAgfVxuICB2YXIgX3VuY29tcHV0ZU9yZGluYWwgPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpLFxuICAgIG1vbnRoID0gX3VuY29tcHV0ZU9yZGluYWwubW9udGgsXG4gICAgZGF5ID0gX3VuY29tcHV0ZU9yZGluYWwuZGF5O1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHllYXI6IHllYXIsXG4gICAgbW9udGg6IG1vbnRoLFxuICAgIGRheTogZGF5XG4gIH0sIHRpbWVPYmplY3Qod2Vla0RhdGEpKTtcbn1cbmZ1bmN0aW9uIGdyZWdvcmlhblRvT3JkaW5hbChncmVnRGF0YSkge1xuICB2YXIgeWVhciA9IGdyZWdEYXRhLnllYXIsXG4gICAgbW9udGggPSBncmVnRGF0YS5tb250aCxcbiAgICBkYXkgPSBncmVnRGF0YS5kYXk7XG4gIHZhciBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgeWVhcjogeWVhcixcbiAgICBvcmRpbmFsOiBvcmRpbmFsXG4gIH0sIHRpbWVPYmplY3QoZ3JlZ0RhdGEpKTtcbn1cbmZ1bmN0aW9uIG9yZGluYWxUb0dyZWdvcmlhbihvcmRpbmFsRGF0YSkge1xuICB2YXIgeWVhciA9IG9yZGluYWxEYXRhLnllYXIsXG4gICAgb3JkaW5hbCA9IG9yZGluYWxEYXRhLm9yZGluYWw7XG4gIHZhciBfdW5jb21wdXRlT3JkaW5hbDIgPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpLFxuICAgIG1vbnRoID0gX3VuY29tcHV0ZU9yZGluYWwyLm1vbnRoLFxuICAgIGRheSA9IF91bmNvbXB1dGVPcmRpbmFsMi5kYXk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgeWVhcjogeWVhcixcbiAgICBtb250aDogbW9udGgsXG4gICAgZGF5OiBkYXlcbiAgfSwgdGltZU9iamVjdChvcmRpbmFsRGF0YSkpO1xufVxuZnVuY3Rpb24gaGFzSW52YWxpZFdlZWtEYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai53ZWVrWWVhciksXG4gICAgdmFsaWRXZWVrID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtOdW1iZXIsIDEsIHdlZWtzSW5XZWVrWWVhcihvYmoud2Vla1llYXIpKSxcbiAgICB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1llYXJcIiwgb2JqLndlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1wiLCBvYmoud2Vlayk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vla2RheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtkYXlcIiwgb2JqLndlZWtkYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaGFzSW52YWxpZE9yZGluYWxEYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE9yZGluYWwgPSBpbnRlZ2VyQmV0d2VlbihvYmoub3JkaW5hbCwgMSwgZGF5c0luWWVhcihvYmoueWVhcikpO1xuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE9yZGluYWwpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJvcmRpbmFsXCIsIG9iai5vcmRpbmFsKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE1vbnRoID0gaW50ZWdlckJldHdlZW4ob2JqLm1vbnRoLCAxLCAxMiksXG4gICAgdmFsaWREYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmouZGF5LCAxLCBkYXlzSW5Nb250aChvYmoueWVhciwgb2JqLm1vbnRoKSk7XG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTW9udGgpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtb250aFwiLCBvYmoubW9udGgpO1xuICB9IGVsc2UgaWYgKCF2YWxpZERheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImRheVwiLCBvYmouZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRUaW1lRGF0YShvYmopIHtcbiAgdmFyIGhvdXIgPSBvYmouaG91cixcbiAgICBtaW51dGUgPSBvYmoubWludXRlLFxuICAgIHNlY29uZCA9IG9iai5zZWNvbmQsXG4gICAgbWlsbGlzZWNvbmQgPSBvYmoubWlsbGlzZWNvbmQ7XG4gIHZhciB2YWxpZEhvdXIgPSBpbnRlZ2VyQmV0d2Vlbihob3VyLCAwLCAyMykgfHwgaG91ciA9PT0gMjQgJiYgbWludXRlID09PSAwICYmIHNlY29uZCA9PT0gMCAmJiBtaWxsaXNlY29uZCA9PT0gMCxcbiAgICB2YWxpZE1pbnV0ZSA9IGludGVnZXJCZXR3ZWVuKG1pbnV0ZSwgMCwgNTkpLFxuICAgIHZhbGlkU2Vjb25kID0gaW50ZWdlckJldHdlZW4oc2Vjb25kLCAwLCA1OSksXG4gICAgdmFsaWRNaWxsaXNlY29uZCA9IGludGVnZXJCZXR3ZWVuKG1pbGxpc2Vjb25kLCAwLCA5OTkpO1xuICBpZiAoIXZhbGlkSG91cikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImhvdXJcIiwgaG91cik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWludXRlKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkU2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWlsbGlzZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBJTlZBTElEID0gXCJJbnZhbGlkIERhdGVUaW1lXCI7XG52YXIgTUFYX0RBVEUgPSA4LjY0ZTE1O1xuZnVuY3Rpb24gdW5zdXBwb3J0ZWRab25lKHpvbmUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFwidW5zdXBwb3J0ZWQgem9uZVwiLCBcInRoZSB6b25lIFxcXCJcIiArIHpvbmUubmFtZSArIFwiXFxcIiBpcyBub3Qgc3VwcG9ydGVkXCIpO1xufVxuXG4vLyB3ZSBjYWNoZSB3ZWVrIGRhdGEgb24gdGhlIERUIG9iamVjdCBhbmQgdGhpcyBpbnRlcm1lZGlhdGVzIHRoZSBjYWNoZVxuZnVuY3Rpb24gcG9zc2libHlDYWNoZWRXZWVrRGF0YShkdCkge1xuICBpZiAoZHQud2Vla0RhdGEgPT09IG51bGwpIHtcbiAgICBkdC53ZWVrRGF0YSA9IGdyZWdvcmlhblRvV2VlayhkdC5jKTtcbiAgfVxuICByZXR1cm4gZHQud2Vla0RhdGE7XG59XG5cbi8vIGNsb25lIHJlYWxseSBtZWFucywgXCJtYWtlIGEgbmV3IG9iamVjdCB3aXRoIHRoZXNlIG1vZGlmaWNhdGlvbnNcIi4gYWxsIFwic2V0dGVyc1wiIHJlYWxseSB1c2UgdGhpc1xuLy8gdG8gY3JlYXRlIGEgbmV3IG9iamVjdCB3aGlsZSBvbmx5IGNoYW5naW5nIHNvbWUgb2YgdGhlIHByb3BlcnRpZXNcbmZ1bmN0aW9uIGNsb25lKGluc3QsIGFsdHMpIHtcbiAgdmFyIGN1cnJlbnQgPSB7XG4gICAgdHM6IGluc3QudHMsXG4gICAgem9uZTogaW5zdC56b25lLFxuICAgIGM6IGluc3QuYyxcbiAgICBvOiBpbnN0Lm8sXG4gICAgbG9jOiBpbnN0LmxvYyxcbiAgICBpbnZhbGlkOiBpbnN0LmludmFsaWRcbiAgfTtcbiAgcmV0dXJuIG5ldyBEYXRlVGltZShfZXh0ZW5kcyh7fSwgY3VycmVudCwgYWx0cywge1xuICAgIG9sZDogY3VycmVudFxuICB9KSk7XG59XG5cbi8vIGZpbmQgdGhlIHJpZ2h0IG9mZnNldCBhIGdpdmVuIGxvY2FsIHRpbWUuIFRoZSBvIGlucHV0IGlzIG91ciBndWVzcywgd2hpY2ggZGV0ZXJtaW5lcyB3aGljaFxuLy8gb2Zmc2V0IHdlJ2xsIHBpY2sgaW4gYW1iaWd1b3VzIGNhc2VzIChlLmcuIHRoZXJlIGFyZSB0d28gMyBBTXMgYi9jIEZhbGxiYWNrIERTVClcbmZ1bmN0aW9uIGZpeE9mZnNldChsb2NhbFRTLCBvLCB0eikge1xuICAvLyBPdXIgVVRDIHRpbWUgaXMganVzdCBhIGd1ZXNzIGJlY2F1c2Ugb3VyIG9mZnNldCBpcyBqdXN0IGEgZ3Vlc3NcbiAgdmFyIHV0Y0d1ZXNzID0gbG9jYWxUUyAtIG8gKiA2MCAqIDEwMDA7XG5cbiAgLy8gVGVzdCB3aGV0aGVyIHRoZSB6b25lIG1hdGNoZXMgdGhlIG9mZnNldCBmb3IgdGhpcyB0c1xuICB2YXIgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuXG4gIC8vIElmIHNvLCBvZmZzZXQgZGlkbid0IGNoYW5nZSBhbmQgd2UncmUgZG9uZVxuICBpZiAobyA9PT0gbzIpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvXTtcbiAgfVxuXG4gIC8vIElmIG5vdCwgY2hhbmdlIHRoZSB0cyBieSB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgb2Zmc2V0XG4gIHV0Y0d1ZXNzIC09IChvMiAtIG8pICogNjAgKiAxMDAwO1xuXG4gIC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZVxuICB2YXIgbzMgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuICBpZiAobzIgPT09IG8zKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgbzJdO1xuICB9XG5cbiAgLy8gSWYgaXQncyBkaWZmZXJlbnQsIHdlJ3JlIGluIGEgaG9sZSB0aW1lLiBUaGUgb2Zmc2V0IGhhcyBjaGFuZ2VkLCBidXQgdGhlIHdlIGRvbid0IGFkanVzdCB0aGUgdGltZVxuICByZXR1cm4gW2xvY2FsVFMgLSBNYXRoLm1pbihvMiwgbzMpICogNjAgKiAxMDAwLCBNYXRoLm1heChvMiwgbzMpXTtcbn1cblxuLy8gY29udmVydCBhbiBlcG9jaCB0aW1lc3RhbXAgaW50byBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBvZmZzZXRcbmZ1bmN0aW9uIHRzVG9PYmoodHMsIG9mZnNldCkge1xuICB0cyArPSBvZmZzZXQgKiA2MCAqIDEwMDA7XG4gIHZhciBkID0gbmV3IERhdGUodHMpO1xuICByZXR1cm4ge1xuICAgIHllYXI6IGQuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICBtb250aDogZC5nZXRVVENNb250aCgpICsgMSxcbiAgICBkYXk6IGQuZ2V0VVRDRGF0ZSgpLFxuICAgIGhvdXI6IGQuZ2V0VVRDSG91cnMoKSxcbiAgICBtaW51dGU6IGQuZ2V0VVRDTWludXRlcygpLFxuICAgIHNlY29uZDogZC5nZXRVVENTZWNvbmRzKCksXG4gICAgbWlsbGlzZWNvbmQ6IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKClcbiAgfTtcbn1cblxuLy8gY29udmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGVwb2NoIHRpbWVzdGFtcFxuZnVuY3Rpb24gb2JqVG9UUyhvYmosIG9mZnNldCwgem9uZSkge1xuICByZXR1cm4gZml4T2Zmc2V0KG9ialRvTG9jYWxUUyhvYmopLCBvZmZzZXQsIHpvbmUpO1xufVxuXG4vLyBjcmVhdGUgYSBuZXcgRFQgaW5zdGFuY2UgYnkgYWRkaW5nIGEgZHVyYXRpb24sIGFkanVzdGluZyBmb3IgRFNUc1xuZnVuY3Rpb24gYWRqdXN0VGltZShpbnN0LCBkdXIpIHtcbiAgdmFyIG9QcmUgPSBpbnN0Lm8sXG4gICAgeWVhciA9IGluc3QuYy55ZWFyICsgTWF0aC50cnVuYyhkdXIueWVhcnMpLFxuICAgIG1vbnRoID0gaW5zdC5jLm1vbnRoICsgTWF0aC50cnVuYyhkdXIubW9udGhzKSArIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSAqIDMsXG4gICAgYyA9IF9leHRlbmRzKHt9LCBpbnN0LmMsIHtcbiAgICAgIHllYXI6IHllYXIsXG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXk6IE1hdGgubWluKGluc3QuYy5kYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgKyBNYXRoLnRydW5jKGR1ci5kYXlzKSArIE1hdGgudHJ1bmMoZHVyLndlZWtzKSAqIDdcbiAgICB9KSxcbiAgICBtaWxsaXNUb0FkZCA9IER1cmF0aW9uLmZyb21PYmplY3Qoe1xuICAgICAgeWVhcnM6IGR1ci55ZWFycyAtIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcbiAgICAgIHF1YXJ0ZXJzOiBkdXIucXVhcnRlcnMgLSBNYXRoLnRydW5jKGR1ci5xdWFydGVycyksXG4gICAgICBtb250aHM6IGR1ci5tb250aHMgLSBNYXRoLnRydW5jKGR1ci5tb250aHMpLFxuICAgICAgd2Vla3M6IGR1ci53ZWVrcyAtIE1hdGgudHJ1bmMoZHVyLndlZWtzKSxcbiAgICAgIGRheXM6IGR1ci5kYXlzIC0gTWF0aC50cnVuYyhkdXIuZGF5cyksXG4gICAgICBob3VyczogZHVyLmhvdXJzLFxuICAgICAgbWludXRlczogZHVyLm1pbnV0ZXMsXG4gICAgICBzZWNvbmRzOiBkdXIuc2Vjb25kcyxcbiAgICAgIG1pbGxpc2Vjb25kczogZHVyLm1pbGxpc2Vjb25kc1xuICAgIH0pLmFzKFwibWlsbGlzZWNvbmRzXCIpLFxuICAgIGxvY2FsVFMgPSBvYmpUb0xvY2FsVFMoYyk7XG4gIHZhciBfZml4T2Zmc2V0ID0gZml4T2Zmc2V0KGxvY2FsVFMsIG9QcmUsIGluc3Quem9uZSksXG4gICAgdHMgPSBfZml4T2Zmc2V0WzBdLFxuICAgIG8gPSBfZml4T2Zmc2V0WzFdO1xuICBpZiAobWlsbGlzVG9BZGQgIT09IDApIHtcbiAgICB0cyArPSBtaWxsaXNUb0FkZDtcbiAgICAvLyB0aGF0IGNvdWxkIGhhdmUgY2hhbmdlZCB0aGUgb2Zmc2V0IGJ5IGdvaW5nIG92ZXIgYSBEU1QsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgdGhlIHRzIHRoZSBzYW1lXG4gICAgbyA9IGluc3Quem9uZS5vZmZzZXQodHMpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHM6IHRzLFxuICAgIG86IG9cbiAgfTtcbn1cblxuLy8gaGVscGVyIHVzZWZ1bCBpbiB0dXJuaW5nIHRoZSByZXN1bHRzIG9mIHBhcnNpbmcgaW50byByZWFsIGRhdGVzXG4vLyBieSBoYW5kbGluZyB0aGUgem9uZSBvcHRpb25zXG5mdW5jdGlvbiBwYXJzZURhdGFUb0RhdGVUaW1lKHBhcnNlZCwgcGFyc2VkWm9uZSwgb3B0cywgZm9ybWF0LCB0ZXh0LCBzcGVjaWZpY09mZnNldCkge1xuICB2YXIgc2V0Wm9uZSA9IG9wdHMuc2V0Wm9uZSxcbiAgICB6b25lID0gb3B0cy56b25lO1xuICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwIHx8IHBhcnNlZFpvbmUpIHtcbiAgICB2YXIgaW50ZXJwcmV0YXRpb25ab25lID0gcGFyc2VkWm9uZSB8fCB6b25lLFxuICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QocGFyc2VkLCBfZXh0ZW5kcyh7fSwgb3B0cywge1xuICAgICAgICB6b25lOiBpbnRlcnByZXRhdGlvblpvbmUsXG4gICAgICAgIHNwZWNpZmljT2Zmc2V0OiBzcGVjaWZpY09mZnNldFxuICAgICAgfSkpO1xuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChuZXcgSW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgXCIgKyBmb3JtYXQpKTtcbiAgfVxufVxuXG4vLyBpZiB5b3Ugd2FudCB0byBvdXRwdXQgYSB0ZWNobmljYWwgZm9ybWF0IChlLmcuIFJGQyAyODIyKSwgdGhpcyBoZWxwZXJcbi8vIGhlbHBzIGhhbmRsZSB0aGUgZGV0YWlsc1xuZnVuY3Rpb24gdG9UZWNoRm9ybWF0KGR0LCBmb3JtYXQsIGFsbG93Wikge1xuICBpZiAoYWxsb3daID09PSB2b2lkIDApIHtcbiAgICBhbGxvd1ogPSB0cnVlO1xuICB9XG4gIHJldHVybiBkdC5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZShMb2NhbGUuY3JlYXRlKFwiZW4tVVNcIiksIHtcbiAgICBhbGxvd1o6IGFsbG93WixcbiAgICBmb3JjZVNpbXBsZTogdHJ1ZVxuICB9KS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZvcm1hdCkgOiBudWxsO1xufVxuZnVuY3Rpb24gX3RvSVNPRGF0ZShvLCBleHRlbmRlZCkge1xuICB2YXIgbG9uZ0Zvcm1hdCA9IG8uYy55ZWFyID4gOTk5OSB8fCBvLmMueWVhciA8IDA7XG4gIHZhciBjID0gXCJcIjtcbiAgaWYgKGxvbmdGb3JtYXQgJiYgby5jLnllYXIgPj0gMCkgYyArPSBcIitcIjtcbiAgYyArPSBwYWRTdGFydChvLmMueWVhciwgbG9uZ0Zvcm1hdCA/IDYgOiA0KTtcbiAgaWYgKGV4dGVuZGVkKSB7XG4gICAgYyArPSBcIi1cIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5tb250aCk7XG4gICAgYyArPSBcIi1cIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xuICB9XG4gIHJldHVybiBjO1xufVxuZnVuY3Rpb24gX3RvSVNPVGltZShvLCBleHRlbmRlZCwgc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kcywgaW5jbHVkZU9mZnNldCwgZXh0ZW5kZWRab25lKSB7XG4gIHZhciBjID0gcGFkU3RhcnQoby5jLmhvdXIpO1xuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiOlwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gICAgaWYgKG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xuICAgICAgYyArPSBcIjpcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubWludXRlKTtcbiAgfVxuICBpZiAoby5jLnNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NTZWNvbmRzKSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMuc2Vjb25kKTtcbiAgICBpZiAoby5jLm1pbGxpc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc01pbGxpc2Vjb25kcykge1xuICAgICAgYyArPSBcIi5cIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbGxpc2Vjb25kLCAzKTtcbiAgICB9XG4gIH1cbiAgaWYgKGluY2x1ZGVPZmZzZXQpIHtcbiAgICBpZiAoby5pc09mZnNldEZpeGVkICYmIG8ub2Zmc2V0ID09PSAwICYmICFleHRlbmRlZFpvbmUpIHtcbiAgICAgIGMgKz0gXCJaXCI7XG4gICAgfSBlbHNlIGlmIChvLm8gPCAwKSB7XG4gICAgICBjICs9IFwiLVwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vICUgNjApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYyArPSBcIitcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gJSA2MCkpO1xuICAgIH1cbiAgfVxuICBpZiAoZXh0ZW5kZWRab25lKSB7XG4gICAgYyArPSBcIltcIiArIG8uem9uZS5pYW5hTmFtZSArIFwiXVwiO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG4vLyBkZWZhdWx0cyBmb3IgdW5zcGVjaWZpZWQgdW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnNcbnZhciBkZWZhdWx0VW5pdFZhbHVlcyA9IHtcbiAgICBtb250aDogMSxcbiAgICBkYXk6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwXG4gIH0sXG4gIGRlZmF1bHRXZWVrVW5pdFZhbHVlcyA9IHtcbiAgICB3ZWVrTnVtYmVyOiAxLFxuICAgIHdlZWtkYXk6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwXG4gIH0sXG4gIGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcyA9IHtcbiAgICBvcmRpbmFsOiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMFxuICB9O1xuXG4vLyBVbml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFycywgc29ydGVkIGJ5IGJpZ25lc3NcbnZhciBvcmRlcmVkVW5pdHMgPSBbXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0sXG4gIG9yZGVyZWRXZWVrVW5pdHMgPSBbXCJ3ZWVrWWVhclwiLCBcIndlZWtOdW1iZXJcIiwgXCJ3ZWVrZGF5XCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdLFxuICBvcmRlcmVkT3JkaW5hbFVuaXRzID0gW1wieWVhclwiLCBcIm9yZGluYWxcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl07XG5cbi8vIHN0YW5kYXJkaXplIGNhc2UgYW5kIHBsdXJhbGl0eSBpbiB1bml0c1xuZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gIHZhciBub3JtYWxpemVkID0ge1xuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIGRheTogXCJkYXlcIixcbiAgICBkYXlzOiBcImRheVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmQ6IFwibWlsbGlzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZHM6IFwibWlsbGlzZWNvbmRcIixcbiAgICB3ZWVrZGF5OiBcIndlZWtkYXlcIixcbiAgICB3ZWVrZGF5czogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3NudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtudW1iZXJzOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVreWVhcjogXCJ3ZWVrWWVhclwiLFxuICAgIHdlZWt5ZWFyczogXCJ3ZWVrWWVhclwiLFxuICAgIG9yZGluYWw6IFwib3JkaW5hbFwiXG4gIH1bdW5pdC50b0xvd2VyQ2FzZSgpXTtcbiAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5cbi8vIHRoaXMgaXMgYSBkdW1iZWQgZG93biB2ZXJzaW9uIG9mIGZyb21PYmplY3QoKSB0aGF0IHJ1bnMgYWJvdXQgNjAlIGZhc3RlclxuLy8gYnV0IGRvZXNuJ3QgZG8gYW55IHZhbGlkYXRpb24sIG1ha2VzIGEgYnVuY2ggb2YgYXNzdW1wdGlvbnMgYWJvdXQgd2hhdCB1bml0c1xuLy8gYXJlIHByZXNlbnQsIGFuZCBzbyBvbi5cbmZ1bmN0aW9uIHF1aWNrRFQob2JqLCBvcHRzKSB7XG4gIHZhciB6b25lID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKSxcbiAgICB0c05vdyA9IFNldHRpbmdzLm5vdygpO1xuICB2YXIgdHMsIG87XG5cbiAgLy8gYXNzdW1lIHdlIGhhdmUgdGhlIGhpZ2hlci1vcmRlciB1bml0c1xuICBpZiAoIWlzVW5kZWZpbmVkKG9iai55ZWFyKSkge1xuICAgIGZvciAodmFyIF9pID0gMCwgX29yZGVyZWRVbml0cyA9IG9yZGVyZWRVbml0czsgX2kgPCBfb3JkZXJlZFVuaXRzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIHUgPSBfb3JkZXJlZFVuaXRzW19pXTtcbiAgICAgIGlmIChpc1VuZGVmaW5lZChvYmpbdV0pKSB7XG4gICAgICAgIG9ialt1XSA9IGRlZmF1bHRVbml0VmFsdWVzW3VdO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0UHJvdmlzID0gem9uZS5vZmZzZXQodHNOb3cpO1xuICAgIHZhciBfb2JqVG9UUyA9IG9ialRvVFMob2JqLCBvZmZzZXRQcm92aXMsIHpvbmUpO1xuICAgIHRzID0gX29ialRvVFNbMF07XG4gICAgbyA9IF9vYmpUb1RTWzFdO1xuICB9IGVsc2Uge1xuICAgIHRzID0gdHNOb3c7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgdHM6IHRzLFxuICAgIHpvbmU6IHpvbmUsXG4gICAgbG9jOiBsb2MsXG4gICAgbzogb1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRpZmZSZWxhdGl2ZShzdGFydCwgZW5kLCBvcHRzKSB7XG4gIHZhciByb3VuZCA9IGlzVW5kZWZpbmVkKG9wdHMucm91bmQpID8gdHJ1ZSA6IG9wdHMucm91bmQsXG4gICAgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGMsIHVuaXQpIHtcbiAgICAgIGMgPSByb3VuZFRvKGMsIHJvdW5kIHx8IG9wdHMuY2FsZW5kYXJ5ID8gMCA6IDIsIHRydWUpO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGVuZC5sb2MuY2xvbmUob3B0cykucmVsRm9ybWF0dGVyKG9wdHMpO1xuICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYywgdW5pdCk7XG4gICAgfSxcbiAgICBkaWZmZXIgPSBmdW5jdGlvbiBkaWZmZXIodW5pdCkge1xuICAgICAgaWYgKG9wdHMuY2FsZW5kYXJ5KSB7XG4gICAgICAgIGlmICghZW5kLmhhc1NhbWUoc3RhcnQsIHVuaXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGVuZC5zdGFydE9mKHVuaXQpLmRpZmYoc3RhcnQuc3RhcnRPZih1bml0KSwgdW5pdCkuZ2V0KHVuaXQpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KTtcbiAgICAgIH1cbiAgICB9O1xuICBpZiAob3B0cy51bml0KSB7XG4gICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTtcbiAgfVxuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9wdHMudW5pdHMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgIHZhciB1bml0ID0gX3N0ZXAudmFsdWU7XG4gICAgdmFyIGNvdW50ID0gZGlmZmVyKHVuaXQpO1xuICAgIGlmIChNYXRoLmFicyhjb3VudCkgPj0gMSkge1xuICAgICAgcmV0dXJuIGZvcm1hdChjb3VudCwgdW5pdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXQoc3RhcnQgPiBlbmQgPyAtMCA6IDAsIG9wdHMudW5pdHNbb3B0cy51bml0cy5sZW5ndGggLSAxXSk7XG59XG5mdW5jdGlvbiBsYXN0T3B0cyhhcmdMaXN0KSB7XG4gIHZhciBvcHRzID0ge30sXG4gICAgYXJncztcbiAgaWYgKGFyZ0xpc3QubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnTGlzdFthcmdMaXN0Lmxlbmd0aCAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgb3B0cyA9IGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXTtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KS5zbGljZSgwLCBhcmdMaXN0Lmxlbmd0aCAtIDEpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ0xpc3QpO1xuICB9XG4gIHJldHVybiBbb3B0cywgYXJnc107XG59XG5cbi8qKlxuICogQSBEYXRlVGltZSBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBhbmQgYWNjb21wYW55aW5nIG1ldGhvZHMuIEl0IGNvbnRhaW5zIGNsYXNzIGFuZCBpbnN0YW5jZSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEEgRGF0ZVRpbWUgY29tcHJpc2VzIG9mOlxuICogKiBBIHRpbWVzdGFtcC4gRWFjaCBEYXRlVGltZSBpbnN0YW5jZSByZWZlcnMgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvZiB0aGUgVW5peCBlcG9jaC5cbiAqICogQSB0aW1lIHpvbmUuIEVhY2ggaW5zdGFuY2UgaXMgY29uc2lkZXJlZCBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljIHpvbmUgKGJ5IGRlZmF1bHQgdGhlIGxvY2FsIHN5c3RlbSdzIHpvbmUpLlxuICogKiBDb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBlZmZlY3QgaG93IG91dHB1dCBzdHJpbmdzIGFyZSBmb3JtYXR0ZWQsIHN1Y2ggYXMgYGxvY2FsZWAsIGBudW1iZXJpbmdTeXN0ZW1gLCBhbmQgYG91dHB1dENhbGVuZGFyYC5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBmdW5jdGlvbmFsaXR5IGl0IHByb3ZpZGVzOlxuICpcbiAqICogKipDcmVhdGlvbioqOiBUbyBjcmVhdGUgYSBEYXRlVGltZSBmcm9tIGl0cyBjb21wb25lbnRzLCB1c2Ugb25lIG9mIGl0cyBmYWN0b3J5IGNsYXNzIG1ldGhvZHM6IHtAbGluayBEYXRlVGltZS5sb2NhbH0sIHtAbGluayBEYXRlVGltZS51dGN9LCBhbmQgKG1vc3QgZmxleGlibHkpIHtAbGluayBEYXRlVGltZS5mcm9tT2JqZWN0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgc3RhbmRhcmQgc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZS5mcm9tSVNPfSwge0BsaW5rIERhdGVUaW1lLmZyb21IVFRQfSwgYW5kIHtAbGluayBEYXRlVGltZS5mcm9tUkZDMjgyMn0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIGN1c3RvbSBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lLmZyb21Gb3JtYXR9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBuYXRpdmUgSlMgZGF0ZSwgdXNlIHtAbGluayBEYXRlVGltZS5mcm9tSlNEYXRlfS5cbiAqICogKipHcmVnb3JpYW4gY2FsZW5kYXIgYW5kIHRpbWUqKjogVG8gZXhhbWluZSB0aGUgR3JlZ29yaWFuIHByb3BlcnRpZXMgb2YgYSBEYXRlVGltZSBpbmRpdmlkdWFsbHkgKGkuZSBhcyBvcHBvc2VkIHRvIGNvbGxlY3RpdmVseSB0aHJvdWdoIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0pLCB1c2UgdGhlIHtAbGluayBEYXRlVGltZSN5ZWFyfSwge0BsaW5rIERhdGVUaW1lI21vbnRofSxcbiAqIHtAbGluayBEYXRlVGltZSNkYXl9LCB7QGxpbmsgRGF0ZVRpbWUjaG91cn0sIHtAbGluayBEYXRlVGltZSNtaW51dGV9LCB7QGxpbmsgRGF0ZVRpbWUjc2Vjb25kfSwge0BsaW5rIERhdGVUaW1lI21pbGxpc2Vjb25kfSBhY2Nlc3NvcnMuXG4gKiAqICoqV2VlayBjYWxlbmRhcioqOiBGb3IgSVNPIHdlZWsgY2FsZW5kYXIgYXR0cmlidXRlcywgc2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjd2Vla1llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjd2Vla051bWJlcn0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjd2Vla2RheX0gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgdGhlIHtAbGluayBEYXRlVGltZSNsb2NhbGV9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKjogVG8gdHJhbnNmb3JtIHRoZSBEYXRlVGltZSBpbnRvIG90aGVyIERhdGVUaW1lcywgdXNlIHtAbGluayBEYXRlVGltZSNzZXR9LCB7QGxpbmsgRGF0ZVRpbWUjcmVjb25maWd1cmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0sIHtAbGluayBEYXRlVGltZSNzZXRMb2NhbGV9LCB7QGxpbmsgRGF0ZVRpbWUucGx1c30sIHtAbGluayBEYXRlVGltZSNtaW51c30sIHtAbGluayBEYXRlVGltZSNlbmRPZn0sIHtAbGluayBEYXRlVGltZSNzdGFydE9mfSwge0BsaW5rIERhdGVUaW1lI3RvVVRDfSwgYW5kIHtAbGluayBEYXRlVGltZSN0b0xvY2FsfS5cbiAqICogKipPdXRwdXQqKjogVG8gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCB1c2UgdGhlIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlfSwge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmVDYWxlbmRhcn0sIHtAbGluayBEYXRlVGltZSN0b0pTT059LCB7QGxpbmsgRGF0ZVRpbWUjdG9JU099LCB7QGxpbmsgRGF0ZVRpbWUjdG9IVFRQfSwge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSwge0BsaW5rIERhdGVUaW1lI3RvUkZDMjgyMn0sIHtAbGluayBEYXRlVGltZSN0b1N0cmluZ30sIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30sIHtAbGluayBEYXRlVGltZSN0b0Zvcm1hdH0sIHtAbGluayBEYXRlVGltZSN0b01pbGxpc30gYW5kIHtAbGluayBEYXRlVGltZSN0b0pTRGF0ZX0uXG4gKlxuICogVGhlcmUncyBwbGVudHkgb3RoZXJzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uLCB0aW1lIHpvbmVzLCBhbHRlcm5hdGl2ZSBjYWxlbmRhcnMsIHZhbGlkaXR5LCBhbmQgc28gb24sIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xudmFyIERhdGVUaW1lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gRGF0ZVRpbWUoY29uZmlnKSB7XG4gICAgdmFyIHpvbmUgPSBjb25maWcuem9uZSB8fCBTZXR0aW5ncy5kZWZhdWx0Wm9uZTtcbiAgICB2YXIgaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IChOdW1iZXIuaXNOYU4oY29uZmlnLnRzKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGwpIHx8ICghem9uZS5pc1ZhbGlkID8gdW5zdXBwb3J0ZWRab25lKHpvbmUpIDogbnVsbCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50cyA9IGlzVW5kZWZpbmVkKGNvbmZpZy50cykgPyBTZXR0aW5ncy5ub3coKSA6IGNvbmZpZy50cztcbiAgICB2YXIgYyA9IG51bGwsXG4gICAgICBvID0gbnVsbDtcbiAgICBpZiAoIWludmFsaWQpIHtcbiAgICAgIHZhciB1bmNoYW5nZWQgPSBjb25maWcub2xkICYmIGNvbmZpZy5vbGQudHMgPT09IHRoaXMudHMgJiYgY29uZmlnLm9sZC56b25lLmVxdWFscyh6b25lKTtcbiAgICAgIGlmICh1bmNoYW5nZWQpIHtcbiAgICAgICAgdmFyIF9yZWYgPSBbY29uZmlnLm9sZC5jLCBjb25maWcub2xkLm9dO1xuICAgICAgICBjID0gX3JlZlswXTtcbiAgICAgICAgbyA9IF9yZWZbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3QgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgYyA9IHRzVG9PYmoodGhpcy50cywgb3QpO1xuICAgICAgICBpbnZhbGlkID0gTnVtYmVyLmlzTmFOKGMueWVhcikgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsO1xuICAgICAgICBjID0gaW52YWxpZCA/IG51bGwgOiBjO1xuICAgICAgICBvID0gaW52YWxpZCA/IG51bGwgOiBvdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl96b25lID0gem9uZTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGludmFsaWQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy53ZWVrRGF0YSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jID0gYztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm8gPSBvO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkRhdGVUaW1lID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIENPTlNUUlVDVFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmb3IgdGhlIGN1cnJlbnQgaW5zdGFudCwgaW4gdGhlIHN5c3RlbSdzIHRpbWUgem9uZS5cbiAgICpcbiAgICogVXNlIFNldHRpbmdzIHRvIG92ZXJyaWRlIHRoZXNlIGRlZmF1bHQgdmFsdWVzIGlmIG5lZWRlZC5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvL34+IG5vdyBpbiB0aGUgSVNPIGZvcm1hdFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIERhdGVUaW1lLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoeyB6b25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIiB9KSAgICAgIC8vfj4gbm93LCBpbiBVUyBlYXN0IGNvYXN0IHRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMCwgd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIHsgem9uZTogXCJ1dGNcIiB9KSAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMCwgaW4gVVRDXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5sb2NhbCA9IGZ1bmN0aW9uIGxvY2FsKCkge1xuICAgIHZhciBfbGFzdE9wdHMgPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgb3B0cyA9IF9sYXN0T3B0c1swXSxcbiAgICAgIGFyZ3MgPSBfbGFzdE9wdHNbMV0sXG4gICAgICB5ZWFyID0gYXJnc1swXSxcbiAgICAgIG1vbnRoID0gYXJnc1sxXSxcbiAgICAgIGRheSA9IGFyZ3NbMl0sXG4gICAgICBob3VyID0gYXJnc1szXSxcbiAgICAgIG1pbnV0ZSA9IGFyZ3NbNF0sXG4gICAgICBzZWNvbmQgPSBhcmdzWzVdLFxuICAgICAgbWlsbGlzZWNvbmQgPSBhcmdzWzZdO1xuICAgIHJldHVybiBxdWlja0RUKHtcbiAgICAgIHllYXI6IHllYXIsXG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXk6IGRheSxcbiAgICAgIGhvdXI6IGhvdXIsXG4gICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgaW4gVVRDXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeWVhcl0gLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYHV0YygpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1WiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS51dGMgPSBmdW5jdGlvbiB1dGMoKSB7XG4gICAgdmFyIF9sYXN0T3B0czIgPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgb3B0cyA9IF9sYXN0T3B0czJbMF0sXG4gICAgICBhcmdzID0gX2xhc3RPcHRzMlsxXSxcbiAgICAgIHllYXIgPSBhcmdzWzBdLFxuICAgICAgbW9udGggPSBhcmdzWzFdLFxuICAgICAgZGF5ID0gYXJnc1syXSxcbiAgICAgIGhvdXIgPSBhcmdzWzNdLFxuICAgICAgbWludXRlID0gYXJnc1s0XSxcbiAgICAgIHNlY29uZCA9IGFyZ3NbNV0sXG4gICAgICBtaWxsaXNlY29uZCA9IGFyZ3NbNl07XG4gICAgb3B0cy56b25lID0gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIHJldHVybiBxdWlja0RUKHtcbiAgICAgIHllYXI6IHllYXIsXG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXk6IGRheSxcbiAgICAgIGhvdXI6IGhvdXIsXG4gICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIERhdGVUaW1lLmZyb21KU0RhdGUgPSBmdW5jdGlvbiBmcm9tSlNEYXRlKGRhdGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHZhciB0cyA9IGlzRGF0ZShkYXRlKSA/IGRhdGUudmFsdWVPZigpIDogTmFOO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odHMpKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcImludmFsaWQgaW5wdXRcIik7XG4gICAgfVxuICAgIHZhciB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICB0czogdHMsXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tTWlsbGlzID0gZnVuY3Rpb24gZnJvbU1pbGxpcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICghaXNOdW1iZXIobWlsbGlzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbU1pbGxpcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dCwgYnV0IHJlY2VpdmVkIGEgXCIgKyB0eXBlb2YgbWlsbGlzZWNvbmRzICsgXCIgd2l0aCB2YWx1ZSBcIiArIG1pbGxpc2Vjb25kcyk7XG4gICAgfSBlbHNlIGlmIChtaWxsaXNlY29uZHMgPCAtTUFYX0RBVEUgfHwgbWlsbGlzZWNvbmRzID4gTUFYX0RBVEUpIHtcbiAgICAgIC8vIHRoaXMgaXNuJ3QgcGVyZmVjdCBiZWNhdXNlIGJlY2F1c2Ugd2UgY2FuIHN0aWxsIGVuZCB1cCBvdXQgb2YgcmFuZ2UgYmVjYXVzZSBvZiBhZGRpdGlvbmFsIHNoaWZ0aW5nLCBidXQgaXQncyBhIHN0YXJ0XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcIlRpbWVzdGFtcCBvdXQgb2YgcmFuZ2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogbWlsbGlzZWNvbmRzLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tU2Vjb25kcyA9IGZ1bmN0aW9uIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21TZWNvbmRzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHNlY29uZHMgKiAxMDAwLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFyJyBhbmQgJ2hvdXInIHdpdGggcmVhc29uYWJsZSBkZWZhdWx0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhciAtIGEgeWVhciwgc3VjaCBhcyAxOTg3XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGggLSBhIG1vbnRoLCAxLTEyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5IC0gYSBkYXkgb2YgdGhlIG1vbnRoLCAxLTMxLCBkZXBlbmRpbmcgb24gdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoub3JkaW5hbCAtIGRheSBvZiB0aGUgeWVhciwgMS0zNjUgb3IgMzY2XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla1llYXIgLSBhbiBJU08gd2VlayB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla051bWJlciAtIGFuIElTTyB3ZWVrIG51bWJlciwgYmV0d2VlbiAxIGFuZCA1MiBvciA1MywgZGVwZW5kaW5nIG9uIHRoZSB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla2RheSAtIGFuIElTTyB3ZWVrZGF5LCAxLTcsIHdoZXJlIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXIgLSBob3VyIG9mIHRoZSBkYXksIDAtMjNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGUgLSBtaW51dGUgb2YgdGhlIGhvdXIsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmQgLSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kIC0gbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgMC05OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBpbnRlcnByZXQgdGhlIG51bWJlcnMgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIHpvbmUuIENhbiB0YWtlIGFueSB2YWx1ZSB0YWtlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gc2V0Wm9uZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyLCBtb250aDogNSwgZGF5OiAyNX0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0pIC8vfj4gdG9kYXkgYXQgMTA6MjY6MDZcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAndXRjJyB9KSxcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAnbG9jYWwnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ0FtZXJpY2EvTmV3X1lvcmsnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB3ZWVrWWVhcjogMjAxNiwgd2Vla051bWJlcjogMiwgd2Vla2RheTogMyB9KS50b0lTT0RhdGUoKSAvLz0+ICcyMDE2LTAxLTEzJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmosIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICB2YXIgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuICAgIHZhciB0c05vdyA9IFNldHRpbmdzLm5vdygpLFxuICAgICAgb2Zmc2V0UHJvdmlzID0gIWlzVW5kZWZpbmVkKG9wdHMuc3BlY2lmaWNPZmZzZXQpID8gb3B0cy5zcGVjaWZpY09mZnNldCA6IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpLFxuICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZVVuaXQpLFxuICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcixcbiAgICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpO1xuXG4gICAgLy8gY2FzZXM6XG4gICAgLy8ganVzdCBhIHdlZWtkYXkgLT4gdGhpcyB3ZWVrJ3MgaW5zdGFuY2Ugb2YgdGhhdCB3ZWVrZGF5LCBubyB3b3JyaWVzXG4gICAgLy8gKGdyZWdvcmlhbiBkYXRhIG9yIG9yZGluYWwpICsgKHdlZWtZZWFyIG9yIHdlZWtOdW1iZXIpIC0+IGVycm9yXG4gICAgLy8gKGdyZWdvcmlhbiBtb250aCBvciBkYXkpICsgb3JkaW5hbCAtPiBlcnJvclxuICAgIC8vIG90aGVyd2lzZSBqdXN0IHVzZSB3ZWVrcyBvciBvcmRpbmFscyBvciBncmVnb3JpYW4sIGRlcGVuZGluZyBvbiB3aGF0J3Mgc3BlY2lmaWVkXG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCIpO1xuICAgIH1cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cbiAgICB2YXIgdXNlV2Vla0RhdGEgPSBkZWZpbml0ZVdlZWtEZWYgfHwgbm9ybWFsaXplZC53ZWVrZGF5ICYmICFjb250YWluc0dyZWdvcjtcblxuICAgIC8vIGNvbmZpZ3VyZSBvdXJzZWx2ZXMgdG8gZGVhbCB3aXRoIGdyZWdvcmlhbiBkYXRlcyBvciB3ZWVrIHN0dWZmXG4gICAgdmFyIHVuaXRzLFxuICAgICAgZGVmYXVsdFZhbHVlcyxcbiAgICAgIG9iak5vdyA9IHRzVG9PYmoodHNOb3csIG9mZnNldFByb3Zpcyk7XG4gICAgaWYgKHVzZVdlZWtEYXRhKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFVuaXRWYWx1ZXM7XG4gICAgfVxuXG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGZvciBtaXNzaW5nIHN0dWZmXG4gICAgdmFyIGZvdW5kRmlyc3QgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSh1bml0cyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgdSA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIHZhciB2ID0gbm9ybWFsaXplZFt1XTtcbiAgICAgIGlmICghaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgZm91bmRGaXJzdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kRmlyc3QpIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IGRlZmF1bHRWYWx1ZXNbdV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gb2JqTm93W3VdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIHdlIGhhdmUgYXJlIGluIHJhbmdlXG4gICAgdmFyIGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICBpbnZhbGlkID0gaGlnaGVyT3JkZXJJbnZhbGlkIHx8IGhhc0ludmFsaWRUaW1lRGF0YShub3JtYWxpemVkKTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZSB0aGUgYWN0dWFsIHRpbWVcbiAgICB2YXIgZ3JlZ29yaWFuID0gdXNlV2Vla0RhdGEgPyB3ZWVrVG9HcmVnb3JpYW4obm9ybWFsaXplZCkgOiBjb250YWluc09yZGluYWwgPyBvcmRpbmFsVG9HcmVnb3JpYW4obm9ybWFsaXplZCkgOiBub3JtYWxpemVkLFxuICAgICAgX29ialRvVFMyID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKSxcbiAgICAgIHRzRmluYWwgPSBfb2JqVG9UUzJbMF0sXG4gICAgICBvZmZzZXRGaW5hbCA9IF9vYmpUb1RTMlsxXSxcbiAgICAgIGluc3QgPSBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogdHNGaW5hbCxcbiAgICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgICBvOiBvZmZzZXRGaW5hbCxcbiAgICAgICAgbG9jOiBsb2NcbiAgICAgIH0pO1xuXG4gICAgLy8gZ3JlZ29yaWFuIGRhdGEgKyB3ZWVrZGF5IHNlcnZlcyBvbmx5IHRvIHZhbGlkYXRlXG4gICAgaWYgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiBjb250YWluc0dyZWdvciAmJiBvYmoud2Vla2RheSAhPT0gaW5zdC53ZWVrZGF5KSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcIm1pc21hdGNoZWQgd2Vla2RheVwiLCBcInlvdSBjYW4ndCBzcGVjaWZ5IGJvdGggYSB3ZWVrZGF5IG9mIFwiICsgbm9ybWFsaXplZC53ZWVrZGF5ICsgXCIgYW5kIGEgZGF0ZSBvZiBcIiArIGluc3QudG9JU08oKSk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnLCB7c2V0Wm9uZTogdHJ1ZX0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJywge3pvbmU6ICd1dGMnfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi1XMDUtNCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIERhdGVUaW1lLmZyb21JU08gPSBmdW5jdGlvbiBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciBfcGFyc2VJU09EYXRlID0gcGFyc2VJU09EYXRlKHRleHQpLFxuICAgICAgdmFscyA9IF9wYXJzZUlTT0RhdGVbMF0sXG4gICAgICBwYXJzZWRab25lID0gX3BhcnNlSVNPRGF0ZVsxXTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIklTTyA4NjAxXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIHRoZSBvZmZzZXQgaXMgYWx3YXlzIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzOjEyIEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCdGcmksIDI1IE5vdiAyMDE2IDEzOjIzOjEyICswNjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzIFonKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tUkZDMjgyMiA9IGZ1bmN0aW9uIGZyb21SRkMyODIyKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciBfcGFyc2VSRkMyODIyRGF0ZSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCksXG4gICAgICB2YWxzID0gX3BhcnNlUkZDMjgyMkRhdGVbMF0sXG4gICAgICBwYXJzZWRab25lID0gX3BhcnNlUkZDMjgyMkRhdGVbMV07XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJSRkMgMjgyMlwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIEhUVFAgZGF0ZXMgYXJlIGFsd2F5cyBpbiBVVEMsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIHRoZSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZy4gRm9yIEhUVFAgZGF0ZXMsIHRoaXMgaXMgYWx3YXlzIFVUQywgc28gdGhpcyBvcHRpb24gaXMgZXF1aXZhbGVudCB0byBzZXR0aW5nIHRoZSBgem9uZWAgb3B0aW9uIHRvICd1dGMnLCBidXQgdGhpcyBvcHRpb24gaXMgaW5jbHVkZWQgZm9yIGNvbnNpc3RlbmN5IHdpdGggc2ltaWxhciBtZXRob2RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuLCAwNiBOb3YgMTk5NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuZGF5LCAwNi1Ob3YtOTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biBOb3YgIDYgMDg6NDk6MzcgMTk5NCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIERhdGVUaW1lLmZyb21IVFRQID0gZnVuY3Rpb24gZnJvbUhUVFAodGV4dCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIF9wYXJzZUhUVFBEYXRlID0gcGFyc2VIVFRQRGF0ZSh0ZXh0KSxcbiAgICAgIHZhbHMgPSBfcGFyc2VIVFRQRGF0ZVswXSxcbiAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VIVFRQRGF0ZVsxXTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIkhUVFBcIiwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBpbnB1dCBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmcuXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZS4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvcGFyc2luZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIHRoZSBsaW5rIGJlbG93IGZvciB0aGUgZm9ybWF0cylcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbUZvcm1hdCA9IGZ1bmN0aW9uIGZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBpZiAoaXNVbmRlZmluZWQodGV4dCkgfHwgaXNVbmRlZmluZWQoZm10KSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbUZvcm1hdCByZXF1aXJlcyBhbiBpbnB1dCBzdHJpbmcgYW5kIGEgZm9ybWF0XCIpO1xuICAgIH1cbiAgICB2YXIgX29wdHMgPSBvcHRzLFxuICAgICAgX29wdHMkbG9jYWxlID0gX29wdHMubG9jYWxlLFxuICAgICAgbG9jYWxlID0gX29wdHMkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX29wdHMkbG9jYWxlLFxuICAgICAgX29wdHMkbnVtYmVyaW5nU3lzdGVtID0gX29wdHMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX29wdHMkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX29wdHMkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlXG4gICAgICB9KSxcbiAgICAgIF9wYXJzZUZyb21Ub2tlbnMgPSBwYXJzZUZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCksXG4gICAgICB2YWxzID0gX3BhcnNlRnJvbVRva2Vuc1swXSxcbiAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VGcm9tVG9rZW5zWzFdLFxuICAgICAgc3BlY2lmaWNPZmZzZXQgPSBfcGFyc2VGcm9tVG9rZW5zWzJdLFxuICAgICAgaW52YWxpZCA9IF9wYXJzZUZyb21Ub2tlbnNbM107XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcImZvcm1hdCBcIiArIGZtdCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZyb21TdHJpbmcodGV4dCwgZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBTUUwgZGF0ZSwgdGltZSwgb3IgZGF0ZXRpbWVcbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycsIHsgc2V0Wm9uZTogdHJ1ZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicsIHsgem9uZTogJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzA5OjEyOjM0LjM0MicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIERhdGVUaW1lLmZyb21TUUwgPSBmdW5jdGlvbiBmcm9tU1FMKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciBfcGFyc2VTUUwgPSBwYXJzZVNRTCh0ZXh0KSxcbiAgICAgIHZhbHMgPSBfcGFyc2VTUUxbMF0sXG4gICAgICBwYXJzZWRab25lID0gX3BhcnNlU1FMWzFdO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiU1FMXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBEYXRlVGltZS5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZERhdGVUaW1lRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgRGF0ZVRpbWUuaXNEYXRlVGltZSA9IGZ1bmN0aW9uIGlzRGF0ZVRpbWUobykge1xuICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkRhdGVUaW1lIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgdGhlIGZvcm1hdCBzdHJpbmcgZm9yIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIGZvcm1hdE9wdHNcbiAgICogQHBhcmFtIGxvY2FsZU9wdHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovO1xuICBEYXRlVGltZS5wYXJzZUZvcm1hdEZvck9wdHMgPSBmdW5jdGlvbiBwYXJzZUZvcm1hdEZvck9wdHMoZm9ybWF0T3B0cywgbG9jYWxlT3B0cykge1xuICAgIGlmIChsb2NhbGVPcHRzID09PSB2b2lkIDApIHtcbiAgICAgIGxvY2FsZU9wdHMgPSB7fTtcbiAgICB9XG4gICAgdmFyIHRva2VuTGlzdCA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XG4gICAgcmV0dXJuICF0b2tlbkxpc3QgPyBudWxsIDogdG9rZW5MaXN0Lm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgPyB0LnZhbCA6IG51bGw7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlIHRoZSB0aGUgZnVsbHkgZXhwYW5kZWQgZm9ybWF0IHRva2VuIGZvciB0aGUgbG9jYWxlXG4gICAqIERvZXMgTk9UIHF1b3RlIGNoYXJhY3RlcnMsIHNvIHF1b3RlZCB0b2tlbnMgd2lsbCBub3Qgcm91bmQgdHJpcCBjb3JyZWN0bHlcbiAgICogQHBhcmFtIGZtdFxuICAgKiBAcGFyYW0gbG9jYWxlT3B0c1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi87XG4gIERhdGVUaW1lLmV4cGFuZEZvcm1hdCA9IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmbXQsIGxvY2FsZU9wdHMpIHtcbiAgICBpZiAobG9jYWxlT3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBsb2NhbGVPcHRzID0ge307XG4gICAgfVxuICAgIHZhciBleHBhbmRlZCA9IGV4cGFuZE1hY3JvVG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XG4gICAgcmV0dXJuIGV4cGFuZGVkLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQudmFsO1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH1cblxuICAvLyBJTkZPXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ21vbnRoJyk7IC8vPT4gN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ2RheScpOyAvLz0+IDRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi87XG4gIHZhciBfcHJvdG8gPSBEYXRlVGltZS5wcm90b3R5cGU7XG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQodW5pdCkge1xuICAgIHJldHVybiB0aGlzW3VuaXRdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgdmFsaWQuIEludmFsaWQgRGF0ZVRpbWVzIG9jY3VyIHdoZW46XG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGZyb20gaW52YWxpZCBjYWxlbmRhciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgMTN0aCBtb250aCBvciBGZWJydWFyeSAzMFxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBieSBhbiBvcGVyYXRpb24gb24gYW5vdGhlciBpbnZhbGlkIGRhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqLztcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc29sdmVkIEludGwgb3B0aW9ucyBmb3IgdGhpcyBEYXRlVGltZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gdW5kZXJzdGFuZGluZyB0aGUgYmVoYXZpb3Igb2YgZm9ybWF0dGluZyBtZXRob2RzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gdGhlIHNhbWUgb3B0aW9ucyBhcyB0b0xvY2FsZVN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBfcHJvdG8ucmVzb2x2ZWRMb2NhbGVPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRMb2NhbGVPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHZhciBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMgPSBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5yZXNvbHZlZE9wdGlvbnModGhpcyksXG4gICAgICBsb2NhbGUgPSBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMubG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGNhbGVuZGFyID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLmNhbGVuZGFyO1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgb3V0cHV0Q2FsZW5kYXI6IGNhbGVuZGFyXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRSQU5TRk9STVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gVVRDLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8ge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9KCd1dGMnKVxuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldD0wXSAtIG9wdGlvbmFsbHksIGFuIG9mZnNldCBmcm9tIFVUQyBpbiBtaW51dGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV0gLSBvcHRpb25zIHRvIHBhc3MgdG8gYHNldFpvbmUoKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgX3Byb3RvLnRvVVRDID0gZnVuY3Rpb24gdG9VVEMob2Zmc2V0LCBvcHRzKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldFpvbmUoRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKG9mZnNldCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byB0aGUgaG9zdCdzIGxvY2FsIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byBgc2V0Wm9uZSgnbG9jYWwnKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgX3Byb3RvLnRvTG9jYWwgPSBmdW5jdGlvbiB0b0xvY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBzcGVjaWZpZWQgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgc2V0dGVyIGtlZXBzIHRoZSB1bmRlcmx5aW5nIHRpbWUgdGhlIHNhbWUgKGFzIGluLCB0aGUgc2FtZSB0aW1lc3RhbXApLCBidXQgdGhlIG5ldyBpbnN0YW5jZSB3aWxsIHJlcG9ydCBkaWZmZXJlbnQgbG9jYWwgdGltZXMgYW5kIGNvbnNpZGVyIERTVHMgd2hlbiBtYWtpbmcgY29tcHV0YXRpb25zLCBhcyB3aXRoIHtAbGluayBEYXRlVGltZSNwbHVzfS4gWW91IG1heSB3aXNoIHRvIHVzZSB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0gYW5kIHtAbGluayBEYXRlVGltZSN0b1VUQ30gd2hpY2ggcHJvdmlkZSBzaW1wbGUgY29udmVuaWVuY2Ugd3JhcHBlcnMgZm9yIGNvbW1vbmx5IHVzZWQgem9uZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gYSB6b25lIGlkZW50aWZpZXIuIEFzIGEgc3RyaW5nLCB0aGF0IGNhbiBiZSBhbnkgSUFOQSB6b25lIHN1cHBvcnRlZCBieSB0aGUgaG9zdCBlbnZpcm9ubWVudCwgb3IgYSBmaXhlZC1vZmZzZXQgbmFtZSBvZiB0aGUgZm9ybSAnVVRDKzMnLCBvciB0aGUgc3RyaW5ncyAnbG9jYWwnIG9yICd1dGMnLiBZb3UgbWF5IGFsc28gc3VwcGx5IGFuIGluc3RhbmNlIG9mIGEge0BsaW5rIERhdGVUaW1lI1pvbmV9IGNsYXNzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5rZWVwTG9jYWxUaW1lPWZhbHNlXSAtIElmIHRydWUsIGFkanVzdCB0aGUgdW5kZXJseWluZyB0aW1lIHNvIHRoYXQgdGhlIGxvY2FsIHRpbWUgc3RheXMgdGhlIHNhbWUsIGJ1dCBpbiB0aGUgdGFyZ2V0IHpvbmUuIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdGhpcy5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqLztcbiAgX3Byb3RvLnNldFpvbmUgPSBmdW5jdGlvbiBzZXRab25lKHpvbmUsIF90ZW1wKSB7XG4gICAgdmFyIF9yZWYyID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmMiRrZWVwTG9jYWxUaW1lID0gX3JlZjIua2VlcExvY2FsVGltZSxcbiAgICAgIGtlZXBMb2NhbFRpbWUgPSBfcmVmMiRrZWVwTG9jYWxUaW1lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGtlZXBMb2NhbFRpbWUsXG4gICAgICBfcmVmMiRrZWVwQ2FsZW5kYXJUaW0gPSBfcmVmMi5rZWVwQ2FsZW5kYXJUaW1lLFxuICAgICAga2VlcENhbGVuZGFyVGltZSA9IF9yZWYyJGtlZXBDYWxlbmRhclRpbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRrZWVwQ2FsZW5kYXJUaW07XG4gICAgem9uZSA9IG5vcm1hbGl6ZVpvbmUoem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICh6b25lLmVxdWFscyh0aGlzLnpvbmUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2UgaWYgKCF6b25lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXdUUyA9IHRoaXMudHM7XG4gICAgICBpZiAoa2VlcExvY2FsVGltZSB8fCBrZWVwQ2FsZW5kYXJUaW1lKSB7XG4gICAgICAgIHZhciBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICB2YXIgYXNPYmogPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIHZhciBfb2JqVG9UUzMgPSBvYmpUb1RTKGFzT2JqLCBvZmZzZXRHdWVzcywgem9uZSk7XG4gICAgICAgIG5ld1RTID0gX29ialRvVFMzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lKHRoaXMsIHtcbiAgICAgICAgdHM6IG5ld1RTLFxuICAgICAgICB6b25lOiB6b25lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG9yIG91dHB1dENhbGVuZGFyLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBfcHJvdG8ucmVjb25maWd1cmUgPSBmdW5jdGlvbiByZWNvbmZpZ3VyZShfdGVtcDIpIHtcbiAgICB2YXIgX3JlZjMgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLFxuICAgICAgbG9jYWxlID0gX3JlZjMubG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmMy5vdXRwdXRDYWxlbmRhcjtcbiAgICB2YXIgbG9jID0gdGhpcy5sb2MuY2xvbmUoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG91dHB1dENhbGVuZGFyOiBvdXRwdXRDYWxlbmRhclxuICAgIH0pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICBsb2M6IGxvY1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBKdXN0IGEgY29udmVuaWVudCBhbGlhcyBmb3IgcmVjb25maWd1cmUoeyBsb2NhbGUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnNldExvY2FsZSgnZW4tR0InKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBfcHJvdG8uc2V0TG9jYWxlID0gZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgIHJldHVybiB0aGlzLnJlY29uZmlndXJlKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBEYXRlVGltZSNzZXRab25lfS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIG5vcm1hbGl6ZVVuaXQpLFxuICAgICAgc2V0dGluZ1dlZWtTdHVmZiA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtZZWFyKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrTnVtYmVyKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrZGF5KSxcbiAgICAgIGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpLFxuICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1ELFxuICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXI7XG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiKTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcbiAgICB9XG4gICAgdmFyIG1peGVkO1xuICAgIGlmIChzZXR0aW5nV2Vla1N0dWZmKSB7XG4gICAgICBtaXhlZCA9IHdlZWtUb0dyZWdvcmlhbihfZXh0ZW5kcyh7fSwgZ3JlZ29yaWFuVG9XZWVrKHRoaXMuYyksIG5vcm1hbGl6ZWQpKTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpKSB7XG4gICAgICBtaXhlZCA9IG9yZGluYWxUb0dyZWdvcmlhbihfZXh0ZW5kcyh7fSwgZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYyksIG5vcm1hbGl6ZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWl4ZWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy50b09iamVjdCgpLCBub3JtYWxpemVkKTtcblxuICAgICAgLy8gaWYgd2UgZGlkbid0IHNldCB0aGUgZGF5IGJ1dCB3ZSBlbmRlZCB1cCBvbiBhbiBvdmVyZmxvdyBkYXRlLFxuICAgICAgLy8gdXNlIHRoZSBsYXN0IGRheSBvZiB0aGUgcmlnaHQgbW9udGhcbiAgICAgIGlmIChpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSkpIHtcbiAgICAgICAgbWl4ZWQuZGF5ID0gTWF0aC5taW4oZGF5c0luTW9udGgobWl4ZWQueWVhciwgbWl4ZWQubW9udGgpLCBtaXhlZC5kYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgX29ialRvVFM0ID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpLFxuICAgICAgdHMgPSBfb2JqVG9UUzRbMF0sXG4gICAgICBvID0gX29ialRvVFM0WzFdO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICB0czogdHMsXG4gICAgICBvOiBvXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICpcbiAgICogQWRkaW5nIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBvciBtaWxsaXNlY29uZHMgaW5jcmVhc2VzIHRoZSB0aW1lc3RhbXAgYnkgdGhlIHJpZ2h0IG51bWJlciBvZiBtaWxsaXNlY29uZHMuIEFkZGluZyBkYXlzLCBtb250aHMsIG9yIHllYXJzIHNoaWZ0cyB0aGUgY2FsZW5kYXIsIGFjY291bnRpbmcgZm9yIERTVHMgYW5kIGxlYXAgeWVhcnMgYWxvbmcgdGhlIHdheS4gVGh1cywgYGR0LnBsdXMoeyBob3VyczogMjQgfSlgIG1heSByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdGltZSB0aGFuIGBkdC5wbHVzKHsgZGF5czogMSB9KWAgaWYgdGhlcmUncyBhIERTVCBzaGlmdCBpbiBiZXR3ZWVuLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoMTIzKSAvL34+IGluIDEyMyBtaWxsaXNlY29uZHNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IG1pbnV0ZXM6IDE1IH0pIC8vfj4gaW4gMTUgbWludXRlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KSAvL34+IHRoaXMgdGltZSB0b21vcnJvd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogLTEgfSkgLy9+PiB0aGlzIHRpbWUgeWVzdGVyZGF5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBob3VyczogMywgbWludXRlczogMTMgfSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyhEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pKSAvL34+IGluIDMgaHIsIDEzIG1pblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovO1xuICBfcHJvdG8ucGx1cyA9IGZ1bmN0aW9uIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNwbHVzfVxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIF9wcm90by5taW51cyA9IGZ1bmN0aW9uIG1pbnVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKS5uZWdhdGUoKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHVuaXQgb2YgdGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgYmVnaW5uaW5nIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCdtb250aCcpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd5ZWFyJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3dlZWsnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMycsIHdlZWtzIGFsd2F5cyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdkYXknKS50b0lTT1RpbWUoKTsgLy89PiAnMDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignaG91cicpLnRvSVNPVGltZSgpOyAvLz0+ICcwNTowMDowMC4wMDAtMDU6MDAnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIF9wcm90by5zdGFydE9mID0gZnVuY3Rpb24gc3RhcnRPZih1bml0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBvID0ge30sXG4gICAgICBub3JtYWxpemVkVW5pdCA9IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCk7XG4gICAgc3dpdGNoIChub3JtYWxpemVkVW5pdCkge1xuICAgICAgY2FzZSBcInllYXJzXCI6XG4gICAgICAgIG8ubW9udGggPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcInF1YXJ0ZXJzXCI6XG4gICAgICBjYXNlIFwibW9udGhzXCI6XG4gICAgICAgIG8uZGF5ID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJ3ZWVrc1wiOlxuICAgICAgY2FzZSBcImRheXNcIjpcbiAgICAgICAgby5ob3VyID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJob3Vyc1wiOlxuICAgICAgICBvLm1pbnV0ZSA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwibWludXRlc1wiOlxuICAgICAgICBvLnNlY29uZCA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwic2Vjb25kc1wiOlxuICAgICAgICBvLm1pbGxpc2Vjb25kID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBubyBkZWZhdWx0LCBpbnZhbGlkIHVuaXRzIHRocm93IGluIG5vcm1hbGl6ZVVuaXQoKVxuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJ3ZWVrc1wiKSB7XG4gICAgICBvLndlZWtkYXkgPSAxO1xuICAgIH1cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwicXVhcnRlcnNcIikge1xuICAgICAgdmFyIHEgPSBNYXRoLmNlaWwodGhpcy5tb250aCAvIDMpO1xuICAgICAgby5tb250aCA9IChxIC0gMSkgKiAzICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2V0KG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgZW5kIChtZWFuaW5nIHRoZSBsYXN0IG1pbGxpc2Vjb25kKSBvZiBhIHVuaXQgb2YgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBlbmQgb2YuIENhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCdtb250aCcpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMzFUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZigneWVhcicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMTItMzFUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignd2VlaycpLnRvSVNPKCk7IC8vID0+ICcyMDE0LTAzLTA5VDIzOjU5OjU5Ljk5OS0wNTowMCcsIHdlZWtzIHN0YXJ0IG9uIE1vbmRheXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdkYXknKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdob3VyJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QwNTo1OTo1OS45OTktMDU6MDAnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi87XG4gIF9wcm90by5lbmRPZiA9IGZ1bmN0aW9uIGVuZE9mKHVuaXQpIHtcbiAgICB2YXIgX3RoaXMkcGx1cztcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5wbHVzKChfdGhpcyRwbHVzID0ge30sIF90aGlzJHBsdXNbdW5pdF0gPSAxLCBfdGhpcyRwbHVzKSkuc3RhcnRPZih1bml0KS5taW51cygxKSA6IHRoaXM7XG4gIH1cblxuICAvLyBPVVRQVVRcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvZm9ybWF0dGluZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2ZyJykudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBhdnIuIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChmbXQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLnJlZGVmYXVsdFRvRU4ob3B0cykpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBkYXRlLiBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgdGhlIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3IgYW5kIGFueSBwcmVzZXRzIGRlZmluZWQgYnkgTHV4b24sIHN1Y2ggYXMgYERhdGVUaW1lLkRBVEVfRlVMTGAgb3IgYERhdGVUaW1lLlRJTUVfU0lNUExFYC5cbiAgICogVGhlIGV4YWN0IGJlaGF2aW9yIG9mIHRoaXMgbWV0aG9kIGlzIGJyb3dzZXItc3BlY2lmaWMsIGJ1dCBpbiBnZW5lcmFsIGl0IHdpbGwgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uXG4gICAqIG9mIHRoZSBEYXRlVGltZSBpbiB0aGUgYXNzaWduZWQgbG9jYWxlLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0gZm9ybWF0T3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucyBhbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0cyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9uIHRoaXMgRGF0ZVRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiA0LzIwLzIwMTdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdlbi1nYicpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gJzIwLzA0LzIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7IC8vPT4gJ0FwcmlsIDIwLCAyMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwsIHsgbG9jYWxlOiAnZnInIH0pOyAvLz0+ICcyOCBhb8O7dCAyMDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSk7IC8vPT4gJzExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFVElNRV9TSE9SVCk7IC8vPT4gJzQvMjAvMjAxNywgMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCBkYXk6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1cnNkYXksIEFwcmlsIDIwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1LCBBcHIgMjAsIDExOjI3IEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcsIGhvdXJDeWNsZTogJ2gyMycgfSk7IC8vPT4gJzExOjMyJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cywgb3B0cykge1xuICAgIGlmIChmb3JtYXRPcHRzID09PSB2b2lkIDApIHtcbiAgICAgIGZvcm1hdE9wdHMgPSBEQVRFX1NIT1JUO1xuICAgIH1cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBmb3JtYXRPcHRzKS5mb3JtYXREYXRlVGltZSh0aGlzKSA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBmb3JtYXQgXCJwYXJ0c1wiLCBtZWFuaW5nIGluZGl2aWR1YWwgdG9rZW5zIGFsb25nIHdpdGggbWV0YWRhdGEuIFRoaXMgaXMgYWxsb3dzIGNhbGxlcnMgdG8gcG9zdC1wcm9jZXNzIGluZGl2aWR1YWwgc2VjdGlvbnMgb2YgdGhlIGZvcm1hdHRlZCBvdXRwdXQuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0L2Zvcm1hdFRvUGFydHNcbiAgICogQHBhcmFtIG9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMsIHNhbWUgYXMgYHRvTG9jYWxlU3RyaW5nYC5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVQYXJ0cygpOyAvLz0+IFtcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdkYXknLCB2YWx1ZTogJzI1JyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogJy8nIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbW9udGgnLCB2YWx1ZTogJzA1JyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogJy8nIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAneWVhcicsIHZhbHVlOiAnMTk4MicgfVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiBdXG4gICAqLztcbiAgX3Byb3RvLnRvTG9jYWxlUGFydHMgPSBmdW5jdGlvbiB0b0xvY2FsZVBhcnRzKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpIDogW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZXh0ZW5kZWRab25lPWZhbHNlXSAtIGFkZCB0aGUgdGltZSB6b25lIGZvcm1hdCBleHRlbnNpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgzLCA1LCAyNSkudG9JU08oKSAvLz0+ICcxOTgyLTA1LTI1VDAwOjAwOjAwLjAwMFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKCkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzIwMTcwNDIyVDIwNDcwNS4zMzUtMDQwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0lTTyA9IGZ1bmN0aW9uIHRvSVNPKF90ZW1wMykge1xuICAgIHZhciBfcmVmNCA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICBfcmVmNCRmb3JtYXQgPSBfcmVmNC5mb3JtYXQsXG4gICAgICBmb3JtYXQgPSBfcmVmNCRmb3JtYXQgPT09IHZvaWQgMCA/IFwiZXh0ZW5kZWRcIiA6IF9yZWY0JGZvcm1hdCxcbiAgICAgIF9yZWY0JHN1cHByZXNzU2Vjb25kcyA9IF9yZWY0LnN1cHByZXNzU2Vjb25kcyxcbiAgICAgIHN1cHByZXNzU2Vjb25kcyA9IF9yZWY0JHN1cHByZXNzU2Vjb25kcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNCRzdXBwcmVzc1NlY29uZHMsXG4gICAgICBfcmVmNCRzdXBwcmVzc01pbGxpc2UgPSBfcmVmNC5zdXBwcmVzc01pbGxpc2Vjb25kcyxcbiAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gX3JlZjQkc3VwcHJlc3NNaWxsaXNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY0JHN1cHByZXNzTWlsbGlzZSxcbiAgICAgIF9yZWY0JGluY2x1ZGVPZmZzZXQgPSBfcmVmNC5pbmNsdWRlT2Zmc2V0LFxuICAgICAgaW5jbHVkZU9mZnNldCA9IF9yZWY0JGluY2x1ZGVPZmZzZXQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNCRpbmNsdWRlT2Zmc2V0LFxuICAgICAgX3JlZjQkZXh0ZW5kZWRab25lID0gX3JlZjQuZXh0ZW5kZWRab25lLFxuICAgICAgZXh0ZW5kZWRab25lID0gX3JlZjQkZXh0ZW5kZWRab25lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY0JGV4dGVuZGVkWm9uZTtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBleHQgPSBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIjtcbiAgICB2YXIgYyA9IF90b0lTT0RhdGUodGhpcywgZXh0KTtcbiAgICBjICs9IFwiVFwiO1xuICAgIGMgKz0gX3RvSVNPVGltZSh0aGlzLCBleHQsIHN1cHByZXNzU2Vjb25kcywgc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQsIGV4dGVuZGVkWm9uZSk7XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyBkYXRlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTk4MjA1MjUnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9JU09EYXRlID0gZnVuY3Rpb24gdG9JU09EYXRlKF90ZW1wNCkge1xuICAgIHZhciBfcmVmNSA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQsXG4gICAgICBfcmVmNSRmb3JtYXQgPSBfcmVmNS5mb3JtYXQsXG4gICAgICBmb3JtYXQgPSBfcmVmNSRmb3JtYXQgPT09IHZvaWQgMCA/IFwiZXh0ZW5kZWRcIiA6IF9yZWY1JGZvcm1hdDtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBfdG9JU09EYXRlKHRoaXMsIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHdlZWsgZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPV2Vla0RhdGUoKSAvLz0+ICcxOTgyLVcyMS0yJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPV2Vla0RhdGUgPSBmdW5jdGlvbiB0b0lTT1dlZWtEYXRlKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJra2trLSdXJ1dXLWNcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB0aW1lIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5leHRlbmRlZFpvbmU9dHJ1ZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QwNzozNDoxOS4zNjFaJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvSVNPVGltZSA9IGZ1bmN0aW9uIHRvSVNPVGltZShfdGVtcDUpIHtcbiAgICB2YXIgX3JlZjYgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LFxuICAgICAgX3JlZjYkc3VwcHJlc3NNaWxsaXNlID0gX3JlZjYuc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IF9yZWY2JHN1cHByZXNzTWlsbGlzZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNiRzdXBwcmVzc01pbGxpc2UsXG4gICAgICBfcmVmNiRzdXBwcmVzc1NlY29uZHMgPSBfcmVmNi5zdXBwcmVzc1NlY29uZHMsXG4gICAgICBzdXBwcmVzc1NlY29uZHMgPSBfcmVmNiRzdXBwcmVzc1NlY29uZHMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjYkc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgX3JlZjYkaW5jbHVkZU9mZnNldCA9IF9yZWY2LmluY2x1ZGVPZmZzZXQsXG4gICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZjYkaW5jbHVkZU9mZnNldCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY2JGluY2x1ZGVPZmZzZXQsXG4gICAgICBfcmVmNiRpbmNsdWRlUHJlZml4ID0gX3JlZjYuaW5jbHVkZVByZWZpeCxcbiAgICAgIGluY2x1ZGVQcmVmaXggPSBfcmVmNiRpbmNsdWRlUHJlZml4ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JGluY2x1ZGVQcmVmaXgsXG4gICAgICBfcmVmNiRleHRlbmRlZFpvbmUgPSBfcmVmNi5leHRlbmRlZFpvbmUsXG4gICAgICBleHRlbmRlZFpvbmUgPSBfcmVmNiRleHRlbmRlZFpvbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjYkZXh0ZW5kZWRab25lLFxuICAgICAgX3JlZjYkZm9ybWF0ID0gX3JlZjYuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZjYkZm9ybWF0ID09PSB2b2lkIDAgPyBcImV4dGVuZGVkXCIgOiBfcmVmNiRmb3JtYXQ7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgYyA9IGluY2x1ZGVQcmVmaXggPyBcIlRcIiA6IFwiXCI7XG4gICAgcmV0dXJuIGMgKyBfdG9JU09UaW1lKHRoaXMsIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiLCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0LCBleHRlbmRlZFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gUkZDIDI4MjItY29tcGF0aWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgKzAwMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIC0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvUkZDMjgyMiA9IGZ1bmN0aW9uIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlpcIiwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy4gVGhlIG91dHB1dCBpcyBhbHdheXMgZXhwcmVzc2VkIGluIEdNVC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi87XG4gIF9wcm90by50b0hUVFAgPSBmdW5jdGlvbiB0b0hUVFAoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLnRvVVRDKCksIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyAnR01UJ1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMRGF0ZSgpIC8vPT4gJzIwMTQtMDctMTMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9TUUxEYXRlID0gZnVuY3Rpb24gdG9TUUxEYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIF90b0lTT0RhdGUodGhpcywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldFNwYWNlPXRydWVdIC0gaW5jbHVkZSB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdGltZSBhbmQgdGhlIG9mZnNldCwgc3VjaCBhcyAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkudG9TUUwoKSAvLz0+ICcwNToxNToxNi4zNDUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSBBbWVyaWNhL05ld19Zb3JrJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvU1FMVGltZSA9IGZ1bmN0aW9uIHRvU1FMVGltZShfdGVtcDYpIHtcbiAgICB2YXIgX3JlZjcgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LFxuICAgICAgX3JlZjckaW5jbHVkZU9mZnNldCA9IF9yZWY3LmluY2x1ZGVPZmZzZXQsXG4gICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZjckaW5jbHVkZU9mZnNldCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY3JGluY2x1ZGVPZmZzZXQsXG4gICAgICBfcmVmNyRpbmNsdWRlWm9uZSA9IF9yZWY3LmluY2x1ZGVab25lLFxuICAgICAgaW5jbHVkZVpvbmUgPSBfcmVmNyRpbmNsdWRlWm9uZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNyRpbmNsdWRlWm9uZSxcbiAgICAgIF9yZWY3JGluY2x1ZGVPZmZzZXRTcCA9IF9yZWY3LmluY2x1ZGVPZmZzZXRTcGFjZSxcbiAgICAgIGluY2x1ZGVPZmZzZXRTcGFjZSA9IF9yZWY3JGluY2x1ZGVPZmZzZXRTcCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY3JGluY2x1ZGVPZmZzZXRTcDtcbiAgICB2YXIgZm10ID0gXCJISDptbTpzcy5TU1NcIjtcbiAgICBpZiAoaW5jbHVkZVpvbmUgfHwgaW5jbHVkZU9mZnNldCkge1xuICAgICAgaWYgKGluY2x1ZGVPZmZzZXRTcGFjZSkge1xuICAgICAgICBmbXQgKz0gXCIgXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZVpvbmUpIHtcbiAgICAgICAgZm10ICs9IFwielwiO1xuICAgICAgfSBlbHNlIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgICAgIGZtdCArPSBcIlpaXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgZm10LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldFNwYWNlPXRydWVdIC0gaW5jbHVkZSB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdGltZSBhbmQgdGhlIG9mZnNldCwgc3VjaCBhcyAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVab25lOiB0cnVlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9TUUwgPSBmdW5jdGlvbiB0b1NRTChvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRvU1FMRGF0ZSgpICsgXCIgXCIgKyB0aGlzLnRvU1FMVGltZShvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqLztcbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9JU08oKSA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuIEFsaWFzIG9mIHtAbGluayBEYXRlVGltZSN0b01pbGxpc31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi87XG4gIF9wcm90by52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLnRvTWlsbGlzID0gZnVuY3Rpb24gdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqLztcbiAgX3Byb3RvLnRvU2Vjb25kcyA9IGZ1bmN0aW9uIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyAoYXMgYSB3aG9sZSBudW1iZXIpIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovO1xuICBfcHJvdG8udG9Vbml4SW50ZWdlciA9IGZ1bmN0aW9uIHRvVW5peEludGVnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguZmxvb3IodGhpcy50cyAvIDEwMDApIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovO1xuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEJTT04gc2VyaWFsaXphYmxlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovO1xuICBfcHJvdG8udG9CU09OID0gZnVuY3Rpb24gdG9CU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSlNEYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcjogMjAxNywgbW9udGg6IDQsIGRheTogMjIsIGhvdXI6IDIwLCBtaW51dGU6IDQ5LCBzZWNvbmQ6IDQyLCBtaWxsaXNlY29uZDogMjY4IH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi87XG4gIF9wcm90by50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XG4gICAgdmFyIGJhc2UgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jKTtcbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLm91dHB1dENhbGVuZGFyID0gdGhpcy5vdXRwdXRDYWxlbmRhcjtcbiAgICAgIGJhc2UubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtO1xuICAgICAgYmFzZS5sb2NhbGUgPSB0aGlzLmxvYy5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBiYXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi87XG4gIF9wcm90by50b0pTRGF0ZSA9IGZ1bmN0aW9uIHRvSlNEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcbiAgfVxuXG4gIC8vIENPTVBBUkVcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIERhdGVUaW1lcyBhcyBhIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIERhdGVUaW1lIHRvIGNvbXBhcmUgdGhpcyBvbmUgdG9cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGkxID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4Mi0wNS0yNVQwOTo0NScpLFxuICAgKiAgICAgaTIgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgzLTEwLTE0VDEwOjMwJyk7XG4gICAqIGkyLmRpZmYoaTEpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogNDM4MDc1MDAwMDAgfVxuICAgKiBpMi5kaWZmKGkxLCAnaG91cnMnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTIxNjguNzUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LjAzMTI1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cycsICdob3VycyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOSwgaG91cnM6IDAuNzUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovO1xuICBfcHJvdG8uZGlmZiA9IGZ1bmN0aW9uIGRpZmYob3RoZXJEYXRlVGltZSwgdW5pdCwgb3B0cykge1xuICAgIGlmICh1bml0ID09PSB2b2lkIDApIHtcbiAgICAgIHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiO1xuICAgIH1cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlckRhdGVUaW1lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwiY3JlYXRlZCBieSBkaWZmaW5nIGFuIGludmFsaWQgRGF0ZVRpbWVcIik7XG4gICAgfVxuICAgIHZhciBkdXJPcHRzID0gX2V4dGVuZHMoe1xuICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW1cbiAgICB9LCBvcHRzKTtcbiAgICB2YXIgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIG90aGVySXNMYXRlciA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpID4gdGhpcy52YWx1ZU9mKCksXG4gICAgICBlYXJsaWVyID0gb3RoZXJJc0xhdGVyID8gdGhpcyA6IG90aGVyRGF0ZVRpbWUsXG4gICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgZGlmZmVkID0gX2RpZmYoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBkdXJPcHRzKTtcbiAgICByZXR1cm4gb3RoZXJJc0xhdGVyID8gZGlmZmVkLm5lZ2F0ZSgpIDogZGlmZmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIHJpZ2h0IG5vdy5cbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNkaWZmfVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi87XG4gIF9wcm90by5kaWZmTm93ID0gZnVuY3Rpb24gZGlmZk5vdyh1bml0LCBvcHRzKSB7XG4gICAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgICAgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCI7XG4gICAgfVxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5ub3coKSwgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHNwYW5uaW5nIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgYW5vdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIGVuZCBwb2ludCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqLztcbiAgX3Byb3RvLnVudGlsID0gZnVuY3Rpb24gdW50aWwob3RoZXJEYXRlVGltZSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHRoaXMsIG90aGVyRGF0ZVRpbWUpIDogdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIERhdGVUaW1lIGlzIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZSBhcyBhbm90aGVyIERhdGVUaW1lLlxuICAgKiBIaWdoZXItb3JkZXIgdW5pdHMgbXVzdCBhbHNvIGJlIGlkZW50aWNhbCBmb3IgdGhpcyBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgLlxuICAgKiBOb3RlIHRoYXQgdGltZSB6b25lcyBhcmUgKippZ25vcmVkKiogaW4gdGhpcyBjb21wYXJpc29uLCB3aGljaCBjb21wYXJlcyB0aGUgKipsb2NhbCoqIGNhbGVuZGFyIHRpbWUuIFVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0gdG8gY29udmVydCBvbmUgb2YgdGhlIGRhdGVzIGlmIG5lZWRlZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuaGFzU2FtZShvdGhlckRULCAnZGF5Jyk7IC8vfj4gdHJ1ZSBpZiBvdGhlckRUIGlzIGluIHRoZSBzYW1lIGN1cnJlbnQgY2FsZW5kYXIgZGF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqLztcbiAgX3Byb3RvLmhhc1NhbWUgPSBmdW5jdGlvbiBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpbnB1dE1zID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCk7XG4gICAgdmFyIGFkanVzdGVkVG9ab25lID0gdGhpcy5zZXRab25lKG90aGVyRGF0ZVRpbWUuem9uZSwge1xuICAgICAga2VlcExvY2FsVGltZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBhZGp1c3RlZFRvWm9uZS5zdGFydE9mKHVuaXQpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSBhZGp1c3RlZFRvWm9uZS5lbmRPZih1bml0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZiBhbmQgb25seSBpZiB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBtaWxsaXNlY29uZCwgaGF2ZSB0aGUgc2FtZSB6b25lIGFuZCBsb2NhdGlvbiwgYW5kIGFyZSBib3RoIHZhbGlkLlxuICAgKiBUbyBjb21wYXJlIGp1c3QgdGhlIG1pbGxpc2Vjb25kIHZhbHVlcywgdXNlIGArZHQxID09PSArZHQyYC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovO1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCAmJiBvdGhlci5pc1ZhbGlkICYmIHRoaXMudmFsdWVPZigpID09PSBvdGhlci52YWx1ZU9mKCkgJiYgdGhpcy56b25lLmVxdWFscyhvdGhlci56b25lKSAmJiB0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdGhpcyB0aW1lIHJlbGF0aXZlIHRvIG5vdywgc3VjaCBhcyBcImluIHR3byBkYXlzXCIuIENhbiBvbmx5IGludGVybmF0aW9uYWxpemUgaWYgeW91clxuICAgKiBwbGF0Zm9ybSBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC4gUm91bmRzIGRvd24gYnkgZGVmYXVsdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIHRoZSBzdHlsZSBvZiB1bml0cywgbXVzdCBiZSBcImxvbmdcIiwgXCJzaG9ydFwiLCBvciBcIm5hcnJvd1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0IG9yIGFycmF5IG9mIHVuaXRzOyBpZiBvbWl0dGVkLCBvciBhbiBhcnJheSwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIGJlc3QgdW5pdC4gVXNlIGFuIGFycmF5IG9yIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgb3IgXCJzZWNvbmRzXCJcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcImluIDEgZGF5XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikudG9SZWxhdGl2ZSh7IGRheXM6IDEgfSkgLy89PiBcImRlbnRybyBkZSAxIGTDrWFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRhbnMgMjMgaGV1cmVzXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogXCJob3Vyc1wiIH0pIC8vPT4gXCI0OCBob3VycyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGhvdXJzOiAzNiB9KS50b1JlbGF0aXZlKHsgcm91bmQ6IGZhbHNlIH0pIC8vPT4gXCIxLjUgZGF5cyBhZ29cIlxuICAgKi87XG4gIF9wcm90by50b1JlbGF0aXZlID0gZnVuY3Rpb24gdG9SZWxhdGl2ZShvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGJhc2UgPSBvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwge1xuICAgICAgICB6b25lOiB0aGlzLnpvbmVcbiAgICAgIH0pLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA/IHRoaXMgPCBiYXNlID8gLW9wdGlvbnMucGFkZGluZyA6IG9wdGlvbnMucGFkZGluZyA6IDA7XG4gICAgdmFyIHVuaXRzID0gW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXTtcbiAgICB2YXIgdW5pdCA9IG9wdGlvbnMudW5pdDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnVuaXQpKSB7XG4gICAgICB1bml0cyA9IG9wdGlvbnMudW5pdDtcbiAgICAgIHVuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgbnVtZXJpYzogXCJhbHdheXNcIixcbiAgICAgIHVuaXRzOiB1bml0cyxcbiAgICAgIHVuaXQ6IHVuaXRcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGRhdGUgcmVsYXRpdmUgdG8gdG9kYXksIHN1Y2ggYXMgXCJ5ZXN0ZXJkYXlcIiBvciBcIm5leHQgbW9udGhcIi5cbiAgICogT25seSBpbnRlcm5hdGlvbmFsaXplcyBvbiBwbGF0Zm9ybXMgdGhhdCBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0OyBpZiBvbWl0dGVkLCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgdW5pdC4gVXNlIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBvciBcImRheXNcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCJ0b21vcnJvd1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZShcImVzXCIpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiXCJtYcOxYW5hXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRlbWFpblwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqLztcbiAgX3Byb3RvLnRvUmVsYXRpdmVDYWxlbmRhciA9IGZ1bmN0aW9uIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwge1xuICAgICAgem9uZTogdGhpcy56b25lXG4gICAgfSksIHRoaXMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBudW1lcmljOiBcImF1dG9cIixcbiAgICAgIHVuaXRzOiBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIl0sXG4gICAgICBjYWxlbmRhcnk6IHRydWVcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtaW4gb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1pbmltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtaW4gRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi87XG4gIERhdGVUaW1lLm1pbiA9IGZ1bmN0aW9uIG1pbigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGF0ZVRpbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWluIHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnZhbHVlT2YoKTtcbiAgICB9LCBNYXRoLm1pbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXggb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1heGltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtYXggRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi87XG4gIERhdGVUaW1lLm1heCA9IGZ1bmN0aW9uIG1heCgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtYXggcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudmFsdWVPZigpO1xuICAgIH0sIE1hdGgubWF4KTtcbiAgfVxuXG4gIC8vIE1JU0NcblxuICAvKipcbiAgICogRXhwbGFpbiBob3cgYSBzdHJpbmcgd291bGQgYmUgcGFyc2VkIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIGRlc2NyaXB0aW9uKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovO1xuICBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbiA9IGZ1bmN0aW9uIGZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJGxvY2FsZSA9IF9vcHRpb25zLmxvY2FsZSxcbiAgICAgIGxvY2FsZSA9IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRpb25zJGxvY2FsZSxcbiAgICAgIF9vcHRpb25zJG51bWJlcmluZ1N5cyA9IF9vcHRpb25zLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRpb25zJG51bWJlcmluZ1N5cyA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRpb25zJG51bWJlcmluZ1N5cyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXG4gICAqLztcbiAgRGF0ZVRpbWUuZnJvbVN0cmluZ0V4cGxhaW4gPSBmdW5jdGlvbiBmcm9tU3RyaW5nRXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gRk9STUFUIFBSRVNFVFNcblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAxMC8xNC8xOTgzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqLztcbiAgX2NyZWF0ZUNsYXNzKERhdGVUaW1lLCBbe1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkUmVhc29uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEYXRlVGltZSBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRFeHBsYW5hdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2NhbGUgb2YgYSBEYXRlVGltZSwgc3VjaCAnZW4tR0InLiBUaGUgbG9jYWxlIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJsb2NhbGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIERhdGVUaW1lLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm51bWJlcmluZ1N5c3RlbVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBvdXRwdXQgY2FsZW5kYXIgb2YgYSBEYXRlVGltZSwgc3VjaCAnaXNsYW1pYycuIFRoZSBvdXRwdXQgY2FsZW5kYXIgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm91dHB1dENhbGVuZGFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdGltZSB6b25lIGFzc29jaWF0ZWQgd2l0aCB0aGlzIERhdGVUaW1lLlxuICAgICAqIEB0eXBlIHtab25lfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInpvbmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl96b25lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgdGltZSB6b25lLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiem9uZU5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUubmFtZSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB5ZWFyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnllYXIgLy89PiAyMDE3XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ5ZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBxdWFydGVyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnF1YXJ0ZXIgLy89PiAyXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJxdWFydGVyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9udGggKDEtMTIpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5tb250aCAvLz0+IDVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm1vbnRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1vbnRoIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCAoMS0zMGlzaCkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLmRheSAvLz0+IDI1XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJkYXlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuZGF5IDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaG91ciBvZiB0aGUgZGF5ICgwLTIzKS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSkuaG91ciAvLz0+IDlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImhvdXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuaG91ciA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciAoMC01OSkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwKS5taW51dGUgLy89PiAzMFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibWludXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbnV0ZSA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNlY29uZCBvZiB0aGUgbWludXRlICgwLTU5KS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyKS5zZWNvbmQgLy89PiA1MlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwic2Vjb25kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnNlY29uZCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQgKDAtOTk5KS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyLCA2NTQpLm1pbGxpc2Vjb25kIC8vPT4gNjU0XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJtaWxsaXNlY29uZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taWxsaXNlY29uZCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHdlZWsgeWVhclxuICAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDEyLCAzMSkud2Vla1llYXIgLy89PiAyMDE1XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrWWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla1llYXIgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWVrIG51bWJlciBvZiB0aGUgd2VlayB5ZWFyICgxLTUyaXNoKS5cbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkud2Vla051bWJlciAvLz0+IDIxXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrTnVtYmVyIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAqIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDExLCAzMSkud2Vla2RheSAvLz0+IDRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIndlZWtkYXlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtkYXkgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBvcmRpbmFsIChtZWFuaW5nIHRoZSBkYXkgb2YgdGhlIHllYXIpXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm9yZGluYWwgLy89PiAxNDVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfERhdGVUaW1lfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm9yZGluYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKS5vcmRpbmFsIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0Jy5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoU2hvcnQgLy89PiBPY3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm1vbnRoU2hvcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcInNob3J0XCIsIHtcbiAgICAgICAgbG9jT2JqOiB0aGlzLmxvY1xuICAgICAgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0b2JlcicuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aExvbmcgLy89PiBPY3RvYmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJtb250aExvbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcImxvbmdcIiwge1xuICAgICAgICBsb2NPYmo6IHRoaXMubG9jXG4gICAgICB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgd2Vla2RheSwgc3VjaCBhcyAnTW9uJy5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlTaG9ydCAvLz0+IE1vblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla2RheVNob3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcInNob3J0XCIsIHtcbiAgICAgICAgbG9jT2JqOiB0aGlzLmxvY1xuICAgICAgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyB3ZWVrZGF5LCBzdWNoIGFzICdNb25kYXknLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheUxvbmcgLy89PiBNb25kYXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIndlZWtkYXlMb25nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcImxvbmdcIiwge1xuICAgICAgICBsb2NPYmo6IHRoaXMubG9jXG4gICAgICB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBVVEMgb2Zmc2V0IG9mIHRoaXMgRGF0ZVRpbWUgaW4gbWludXRlc1xuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm9mZnNldCAvLz0+IC0yNDBcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyArdGhpcy5vIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0TmFtZVNob3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbG9uZyBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVhc3Rlcm4gU3RhbmRhcmQgVGltZVwiIG9yIFwiRWFzdGVybiBEYXlsaWdodCBUaW1lXCIuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXROYW1lTG9uZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIHRoaXMgem9uZSdzIG9mZnNldCBldmVyIGNoYW5nZXMsIGFzIGluIGEgRFNULlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImlzT2Zmc2V0Rml4ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUuaXNVbml2ZXJzYWwgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyBpbiBhIERTVC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpc0luRFNUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5pc09mZnNldEZpeGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHtcbiAgICAgICAgICBtb250aDogMSxcbiAgICAgICAgICBkYXk6IDFcbiAgICAgICAgfSkub2Zmc2V0IHx8IHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoe1xuICAgICAgICAgIG1vbnRoOiA1XG4gICAgICAgIH0pLm9mZnNldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbiBhIGxlYXAgeWVhciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuaXNJbkxlYXBZZWFyIC8vPT4gdHJ1ZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmlzSW5MZWFwWWVhciAvLz0+IGZhbHNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNJbkxlYXBZZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyBtb250aFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDIpLmRheXNJbk1vbnRoIC8vPT4gMjlcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAzKS5kYXlzSW5Nb250aCAvLz0+IDMxXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJkYXlzSW5Nb250aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2KS5kYXlzSW5ZZWFyIC8vPT4gMzY2XG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuZGF5c0luWWVhciAvLz0+IDM2NVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5c0luWWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGRheXNJblllYXIodGhpcy55ZWFyKSA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDA0KS53ZWVrc0luV2Vla1llYXIgLy89PiA1M1xuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUyXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrc0luV2Vla1llYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB3ZWVrc0luV2Vla1llYXIodGhpcy53ZWVrWWVhcikgOiBOYU47XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiREFURV9TSE9SVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfU0hPUlQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURV9NRURcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX01FRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIE9jdCAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVfTUVEX1dJVEhfV0VFS0RBWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURV9GVUxMXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURV9GVUxMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ1R1ZXNkYXksIE9jdG9iZXIgMTQsIDE5ODMnXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJEQVRFX0hVR0VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX0hVR0U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfU0lNUExFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9TSU1QTEU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9XSVRIX1NFQ09ORFM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9XSVRIX1NIT1JUX09GRlNFVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfV0lUSF9MT05HX09GRlNFVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfV0lUSF9MT05HX09GRlNFVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9TSU1QTEVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1NJTVBMRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0VDT05EUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX1NIT1JUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfU0hPUlQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfTUVEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCAxNCBPY3QgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0ZVTExcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9GVUxMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0hVR0VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9IVUdFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBEYXRlVGltZTtcbn0oKTtcbmZ1bmN0aW9uIGZyaWVuZGx5RGF0ZVRpbWUoZGF0ZVRpbWVpc2gpIHtcbiAgaWYgKERhdGVUaW1lLmlzRGF0ZVRpbWUoZGF0ZVRpbWVpc2gpKSB7XG4gICAgcmV0dXJuIGRhdGVUaW1laXNoO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIGRhdGVUaW1laXNoLnZhbHVlT2YgJiYgaXNOdW1iZXIoZGF0ZVRpbWVpc2gudmFsdWVPZigpKSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tSlNEYXRlKGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiB0eXBlb2YgZGF0ZVRpbWVpc2ggPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbU9iamVjdChkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiVW5rbm93biBkYXRldGltZSBhcmd1bWVudDogXCIgKyBkYXRlVGltZWlzaCArIFwiLCBvZiB0eXBlIFwiICsgdHlwZW9mIGRhdGVUaW1laXNoKTtcbiAgfVxufVxuXG52YXIgVkVSU0lPTiA9IFwiMy4zLjBcIjtcblxuZXhwb3J0cy5EYXRlVGltZSA9IERhdGVUaW1lO1xuZXhwb3J0cy5EdXJhdGlvbiA9IER1cmF0aW9uO1xuZXhwb3J0cy5GaXhlZE9mZnNldFpvbmUgPSBGaXhlZE9mZnNldFpvbmU7XG5leHBvcnRzLklBTkFab25lID0gSUFOQVpvbmU7XG5leHBvcnRzLkluZm8gPSBJbmZvO1xuZXhwb3J0cy5JbnRlcnZhbCA9IEludGVydmFsO1xuZXhwb3J0cy5JbnZhbGlkWm9uZSA9IEludmFsaWRab25lO1xuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuZXhwb3J0cy5TeXN0ZW1ab25lID0gU3lzdGVtWm9uZTtcbmV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG5leHBvcnRzLlpvbmUgPSBab25lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bHV4b24uanMubWFwXG4iLCJpbXBvcnQgeyBDb29yZHMsIFJlY3RhbmdsZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNpZGVSZWN0YW5nbGUocmVjdDogUmVjdGFuZ2xlLCBwb2ludDogQ29vcmRzKSB7XG4gIHJldHVybiAoXG4gICAgcmVjdC5wb2ludF8xLnggPD0gcG9pbnQueCAmJlxuICAgIHJlY3QucG9pbnRfMi54ID49IHBvaW50LnggJiZcbiAgICByZWN0LnBvaW50XzEueSA8PSBwb2ludC55ICYmXG4gICAgcmVjdC5wb2ludF8yLnkgPj0gcG9pbnQueSAmJlxuICAgIHJlY3QucG9pbnRfMS56IDw9IHBvaW50LnogJiZcbiAgICByZWN0LnBvaW50XzIueiA+PSBwb2ludC56XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRlcnNfdG9fcHgoXG4gIG1ldGVyczogbnVtYmVyLFxuICB2ZW51ZV9sZW5ndGg6IG51bWJlcixcbiAgbGVuZ3RoOiBudW1iZXJcbikge1xuICByZXR1cm4gKG1ldGVycyAvIHZlbnVlX2xlbmd0aCkgKiBsZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0KGE6IENvb3JkcywgYjogQ29vcmRzKSB7XG4gIHJldHVybiBNYXRoLmFicyhNYXRoLnNxcnQoTWF0aC5wb3coYi54IC0gYS54LCAyKSArIE1hdGgucG93KGIueSAtIGEueSwgMikpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluX3JhbmdlKGE6IG51bWJlciwgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0pIHtcbiAgcmV0dXJuIGEgPj0gcmFuZ2VbMF0gJiYgYSA8PSByYW5nZVsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRfaW5fcmFuZ2UoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpICsgYTtcbn0iLCJpbXBvcnQgeyBQaXRjaERpbWVuc2lvbnMsIFZlbnVlIH0gZnJvbSBcIi4uL3dvcmtlci9wbGFjZVwiO1xuXG5leHBvcnQgdHlwZSBDb29yZHMgPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBSZWN0YW5nbGUgPSB7XG4gIHBvaW50XzE6IENvb3JkcztcbiAgcG9pbnRfMjogQ29vcmRzO1xufTtcblxuZXhwb3J0IHR5cGUgTGluZSA9IHtcbiAgcG9pbnRfMTogQ29vcmRzO1xuICBwb2ludF8yOiBDb29yZHM7XG59O1xuXG5mdW5jdGlvbiBvbkxpbmUobDE6IExpbmUsIHA6IENvb3Jkcykge1xuICBpZiAoXG4gICAgcC54IDw9IE1hdGgubWF4KGwxLnBvaW50XzEueCwgbDEucG9pbnRfMi54KSAmJlxuICAgIHAueCA8PSBNYXRoLm1pbihsMS5wb2ludF8xLngsIGwxLnBvaW50XzIueCkgJiZcbiAgICBwLnkgPD0gTWF0aC5tYXgobDEucG9pbnRfMS55LCBsMS5wb2ludF8yLnkpICYmXG4gICAgcC55IDw9IE1hdGgubWluKGwxLnBvaW50XzEueSwgbDEucG9pbnRfMi55KVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGlvbihhLCBiLCBjKSB7XG4gIGxldCB2YWwgPSAoYi55IC0gYS55KSAqIChjLnggLSBiLngpIC0gKGIueCAtIGEueCkgKiAoYy55IC0gYi55KTtcblxuICBpZiAodmFsID09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB2YWwgPiAwID8gMSA6IDI7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJzZWN0KGwxLCBsMikge1xuICBsZXQgZGlyMSA9IGRpcmVjdGlvbihsMS5wb2ludF8xLCBsMS5wb2ludF8yLCBsMi5wb2ludF8xKTtcbiAgbGV0IGRpcjIgPSBkaXJlY3Rpb24obDEucG9pbnRfMSwgbDEucG9pbnRfMiwgbDIucG9pbnRfMik7XG4gIGxldCBkaXIzID0gZGlyZWN0aW9uKGwyLnBvaW50XzEsIGwyLnBvaW50XzIsIGwxLnBvaW50XzEpO1xuICBsZXQgZGlyNCA9IGRpcmVjdGlvbihsMi5wb2ludF8xLCBsMi5wb2ludF8yLCBsMS5wb2ludF8yKTtcblxuICBpZiAoZGlyMSAhPSBkaXIyICYmIGRpcjMgIT0gZGlyNCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRpcjEgPT0gMCAmJiBvbkxpbmUobDEsIGwyLnBvaW50XzEpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZGlyMiA9PSAwICYmIG9uTGluZShsMSwgbDIucG9pbnRfMikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChkaXIzID09IDAgJiYgb25MaW5lKGwyLCBsMS5wb2ludF8xKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRpcjQgPT0gMCAmJiBvbkxpbmUobDIsIGwxLnBvaW50XzIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGFwZSB7XG4gIF9wb2ludHM6IENvb3Jkc1tdO1xuXG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIHRoaXMuX3BvaW50cyA9IHBvaW50cztcbiAgfVxuXG4gIGFkZFBvaW50KHBvaW50OiBDb29yZHMpIHtcbiAgICB0aGlzLl9wb2ludHMucHVzaChwb2ludCk7XG4gIH1cblxuICBzZXQgcG9pbnRzKHBvaW50cykge1xuICAgIHRoaXMuX3BvaW50cyA9IHBvaW50cztcbiAgfVxuXG4gIGdldCBwb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50cztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFNoYXBlIHtcbiAgY29uc3RydWN0b3IocG9pbnRzOiBDb29yZHNbXSkge1xuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgMyBwb2ludHNcIik7XG4gICAgfVxuICAgIHN1cGVyKHBvaW50cyk7XG4gIH1cbiAgaXNJbnNpZGUocG9pbnQ6IENvb3Jkcykge1xuICAgIGxldCBleHRyZW1lOiBDb29yZHMgPSB7IHg6IDEwMDAwMCwgeTogcG9pbnQueSwgejogMCB9O1xuICAgIGxldCBleGxpbmU6IExpbmUgPSB7IHBvaW50XzE6IHBvaW50LCBwb2ludF8yOiBleHRyZW1lIH07XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgZG8ge1xuICAgICAgbGV0IHNpZGU6IExpbmUgPSB7XG4gICAgICAgIHBvaW50XzE6IHRoaXMucG9pbnRzW2ldLFxuICAgICAgICBwb2ludF8yOiB0aGlzLnBvaW50c1soaSArIDEpICUgdGhpcy5wb2ludHMubGVuZ3RoXSxcbiAgICAgIH07XG4gICAgICBpZiAoaXNJbnRlcnNlY3Qoc2lkZSwgZXhsaW5lKSkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uKHNpZGUucG9pbnRfMSwgcG9pbnQsIHNpZGUucG9pbnRfMikgPT0gMCkge1xuICAgICAgICAgIHJldHVybiBvbkxpbmUoc2lkZSwgcG9pbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgICBpID0gKGkgKyAxKSAlIHRoaXMucG9pbnRzLmxlbmd0aDtcbiAgICB9IHdoaWxlIChpICE9IDApO1xuXG4gICAgcmV0dXJuIGNvdW50ICUgMiA9PSAxO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaXRjaEFyZWEge1xuICBfdmVudWU6IFZlbnVlO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih2ZW51ZTogVmVudWUpIHtcbiAgICB0aGlzLmxlbmd0aCA9IHZlbnVlLmxlbmd0aDtcbiAgICB0aGlzLndpZHRoID0gdmVudWUud2lkdGg7XG4gIH1cblxuICBzZXQgdmVudWUodmVudWU6IFZlbnVlKSB7XG4gICAgdGhpcy5fdmVudWUgPSB2ZW51ZTtcbiAgfVxuXG4gIGdldCB2ZW51ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVudWU7XG4gIH1cblxuICBna19hcmVhKHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiKSB7XG4gICAgbGV0IHBvaW50czogQ29vcmRzW107XG4gICAgaWYgKHNpZGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgIHBvaW50cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogdGhpcy53aWR0aCAvIDIgKyBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gMiArIDQsXG4gICAgICAgICAgejogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHg6IFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfbGVuZ3RoICsgNCxcbiAgICAgICAgICB5OiB0aGlzLndpZHRoIC8gMiAtIFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyAyIC0gNCxcbiAgICAgICAgICB6OiAwLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gIH1cblxuICAvLyBnb2Fsa2VlcGVyIGFyZWEgOiBmcm9tIHRoZSBnb2FsIGxpbmUgdG8gdGVuIG1ldGVycyBvdXRcbiAgLypHT0FMS0VFUEVSX0FSRUEgPSBuZXcgUGl0Y2hBcmVhKFxuICAgIHt4OiAwLCB0aGlzLnZlbnVlLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyAyICsgNCwgUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF9sZW5ndGggKyA0LCB0aGlzLnZlbnVlLndpZHRoIC8gMiAtIFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyAyIC0gNCk7XG4gIC8vIGxlZnQgYmFjayBhcmVhIDogZnJvbSB0aGUgY29ybmVyIGZsYWcgdG8gdGhlIHNpeCB5YXJkIGJveCB1cCB0byAzLzQgb2YgdGhlIGhhbGZcbiAgTEJfQVJFQSA9IG5ldyBQaXRjaEFyZWEoMCwgMCwgUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF93aWR0aCwgKHRoaXMudmVudWUubGVuZ3RoIC8gMikgKiAzLzQpO1xuICAvLyByaWdodCBiYWNrIGFyZWEgOiBmcm9tIHRoZSBjb3JuZXIgZmxhZyB0byB0aGUgc2l4IHlhcmQgYm94IHVwIHRvIDMvNCBvZiB0aGUgaGFsZlxuICBSQl9BUkVBID0gbmV3IFBpdGNoQXJlYSgwLCB0aGlzLnZlbnVlLndpZHRoLCBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoLCAodGhpcy52ZW51ZS5sZW5ndGggLyAyKSAqIDMvNCk7XG4gIC8vIGNlbnRlciBiYWNrIGFyZWE6IGZyb20gdGhlIHNpeCB5YXJkIGJveCB0byBoYWxmd2F5IHVwIHRoZSBoYWxmIGFuZCBmcm9tIGEgbGl0dGxlIG91dHNpZGUgdGhlIHBlbmFsdHkgYm94IHRvIHRoZSBwZW5hbHR5IHNwb3RcbiAgQ0JfQVJFQSA9IG5ldyBQaXRjaEFyZWEoUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF9sZW5ndGgsIHRoaXMudmVudWUud2lkdGggLyAyLCB0aGlzLnZlbnVlLmxlbmd0aC80LCAodGhpcy52ZW51ZS53aWR0aCAvIDIpICsgUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDIgKyAzKTtcbiAgLy8gZGVmZW5zaXZlIG1pZCBhcmVhOiBmcm9tIHRoZSBib3ggdG8gMy80IG9mIHRoZSBoYWxmIGFuZCAxNW0gb24gZWl0aGVyIHNpZGUgb2YgdGhlIGNlbnRlciBsaW5lXG4gIERNX0FSRUEgPSBuZXcgUGl0Y2hBcmVhKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoLCB0aGlzLnZlbnVlLndpZHRoIC8gMiArIDE1LCAodGhpcy52ZW51ZS5sZW5ndGgvMikgKiAzLzQsICh0aGlzLnZlbnVlLndpZHRoIC8gMikgLSAxNSk7XG4gIC8vIGxlZnQgY2VudGVyIG1pZCBhcmVhOiBmcm9tIDVtIGluc2lkZSB0aGUgdG91Y2hsaW5lIHRvIHRoZSBjZW50ZXIgbGluZSBhbmQgZnJvbSBhIGxpdHRsZSBvdXRzaWRlIHRoZSBib3ggdG8gdGhlIGNlbnRlciBjaXJjbGVcbiAgTENNX0FSRUEgPSBuZXcgUGl0Y2hBcmVhKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoKzUsIDUsIHRoaXMudmVudWUubGVuZ3RoIC8gMiwgUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDIgKyAzKTsqL1xufVxuXG5leHBvcnQgY29uc3QgYXR0cmlidXRlX25hbWVzID0gW1xuICBcInBhY2VcIixcbiAgXCJhY2NlbGVyYXRpb25cIixcbiAgXCJhZ2lsaXR5XCIsXG4gIFwiYWdncmVzc2lvblwiLFxuICBcImJhbGFuY2VcIixcbiAgXCJkcmliYmxpbmdcIixcbiAgXCJ0ZWNobmlxdWVcIixcbiAgXCJmaW5pc2hpbmdcIixcbiAgXCJwYXNzaW5nXCIsXG4gIFwidmlzaW9uXCIsXG4gIFwidGFja2xpbmdcIixcbiAgXCJoZWFkaW5nXCIsXG4gIFwic3RyZW5ndGhcIixcbiAgXCJzdGFtaW5hXCIsXG4gIFwicG9zaXRpb25pbmdcIixcbiAgXCJtb3ZlbWVudFwiLFxuICBcImRlY2lzaW9uc1wiLFxuICBcImZsYWlyXCIsXG4gIFwibmF0dXJhbF9maXRuZXNzXCIsXG4gIFwid29ya19yYXRlXCIsXG4gIFwiZGV0ZXJtaW5hdGlvblwiLFxuICBcImxlYWRlcnNoaXBcIixcbiAgXCJ0ZWFtd29ya1wiLFxuICBcImp1bXBpbmdcIixcbiAgXCJyZWFjdGlvbnNcIixcbl07XG5cbmV4cG9ydCBjb25zdCBna19hdHRyaWJ1dGVfbmFtZXMgPSBbXG4gIFwiaGFuZGxpbmdcIixcbiAgXCJyZWFjdGlvbnNcIixcbiAgXCJvbmVfb25fb25lc1wiLFxuICBcInJ1c2hpbmdfb3V0XCIsXG4gIFwiY29tbXVuaWNhdGlvblwiLFxuICBcImVjY2VudHJpY2l0eVwiLFxuICBcInRocm93aW5nXCIsXG4gIFwia2lja2luZ1wiLFxuICBcInZpc2lvblwiLFxuICBcInBvc2l0aW9uaW5nXCIsXG4gIFwicGFjZVwiLFxuICBcImFjY2VsZXJhdGlvblwiLFxuICBcInN0cmVuZ3RoXCIsXG4gIFwianVtcGluZ1wiLFxuICBcInN0YW1pbmFcIixcbiAgXCJuYXR1cmFsX2ZpdG5lc3NcIixcbiAgXCJkZXRlcm1pbmF0aW9uXCIsXG4gIFwid29ya19yYXRlXCIsXG4gIFwibGVhZGVyc2hpcFwiLFxuICBcInRlYW13b3JrXCIsXG5dO1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGVyc29uXCI7XG5pbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4vcGxhY2VcIjtcblxuZXhwb3J0IGNsYXNzIENsdWIge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BsYXllcnM6IFBsYXllcltdO1xuICBwcml2YXRlIF9sb2NhdGlvbjogQ2l0eTtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgcGxheWVycyhwbGF5ZXJzOiBQbGF5ZXJbXSkge1xuICAgIHRoaXMuX3BsYXllcnMgPSBwbGF5ZXJzO1xuICB9XG5cbiAgZ2V0IHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XG4gIH1cblxuICBzZXQgbG9jYXRpb24obG9jOiBDaXR5KSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBsb2M7XG4gIH1cblxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDbHViIH0gZnJvbSBcIi4vY2x1YlwiO1xuaW1wb3J0IHtcbiAgUGxheWVyLFxuICBQb3NpdGlvbixcbiAgUm9sZSxcbiAgSW5zdHJ1Y3Rpb24sXG4gIFRlYW1JbnN0cnVjdGlvbixcbiAgUGxheWVySW5zdHJ1Y3Rpb24sXG59IGZyb20gXCIuL3BlcnNvblwiO1xuaW1wb3J0IHsgUGl0Y2hEaW1lbnNpb25zLCBQaXRjaFpvbmUsIFZlbnVlIH0gZnJvbSBcIi4vcGxhY2VcIjtcbmltcG9ydCB7IENvb3JkcywgUGl0Y2hBcmVhLCBQb2x5Z29uIH0gZnJvbSBcIi4uL2NvbW1vbi90eXBlc1wiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCB7IGRyYXdfcGl0Y2ggfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZGlzdCwgaW5fcmFuZ2UsIG1ldGVyc190b19weCwgcmFuZF9pbl9yYW5nZSB9IGZyb20gXCIuLi9jb21tb24vaGVscGVyc1wiO1xuaW1wb3J0IHsgU2ltTWF0Y2ggfSBmcm9tIFwiLi9zaW1fZ2FtZVwiO1xuXG50eXBlIFBsYXllclN0YXRzID0ge1xuICBnb2FsczogbnVtYmVyO1xuICBhc3Npc3RzOiBudW1iZXI7XG4gIHBhc3Nlc19hdHRlbXB0ZWQ6IG51bWJlcjtcbiAgcGFzc2VzX2NvbXBsZXRlZDogbnVtYmVyO1xuICBzaG90czogbnVtYmVyO1xuICBzaG90c19vbl90YXJnZXQ6IG51bWJlcjtcbiAgdGFja2xlc19hdHRlbXB0ZWQ6IG51bWJlcjtcbiAgdGFja2xlc19jb21wbGV0ZWQ6IG51bWJlcjtcbiAgaW50ZXJjZXB0aW9uczogbnVtYmVyO1xuICBmb3VsczogbnVtYmVyO1xuICBmb3Vsc19zdWZmZXJlZDogbnVtYmVyO1xuICB5ZWxsb3dfY2FyZHM6IG51bWJlcjtcbiAgcmVkX2NhcmRzOiBudW1iZXI7XG4gIHNhdmVzOiBudW1iZXI7XG4gIGdvYWxzX2NvbmNlZGVkOiBudW1iZXI7XG4gIGNsZWFuX3NoZWV0czogbnVtYmVyO1xuICBwZW5hbHRpZXNfc2NvcmVkOiBudW1iZXI7XG4gIHBlbmFsdGllc19taXNzZWQ6IG51bWJlcjtcbiAgcGVuYWx0aWVzX3NhdmVkOiBudW1iZXI7XG4gIG93bl9nb2FsczogbnVtYmVyO1xuICBtaW51dGVzX3BsYXllZDogbnVtYmVyO1xuICB4RzogbnVtYmVyO1xuICB4QTogbnVtYmVyO1xufTtcblxuXG5leHBvcnQgY2xhc3MgUGxheWVyT25QaXRjaCBleHRlbmRzIFBsYXllciB7XG4gIF9yb2xlOiBSb2xlO1xuICBfcG9zaXRpb246IFBvc2l0aW9uO1xuICBfaW5zdHJ1Y3Rpb25zOiBQbGF5ZXJJbnN0cnVjdGlvbltdO1xuICBfbG9jOiBDb29yZHM7XG4gIF9keDogbnVtYmVyO1xuICBfZHk6IG51bWJlcjtcbiAgX2R6OiBudW1iZXI7XG4gIHZlbnVlOiBWZW51ZTtcbiAgdGVhbTpUZWFtO1xuICByZWNlaXZlX3Bhc3M6IGJvb2xlYW47XG4gIF96b25lczogbnVtYmVyW107XG5cbiAgdGFyZ2V0X3NwZWVkOiBudW1iZXI7XG4gIHRhcmdldF9sb2M6IENvb3JkcztcblxuICBkZWZlbnNpdmVfYXJlYTogUGl0Y2hBcmVhO1xuXG4gIG06TWF0Y2g7XG5cbiAgc2V0IHJvbGUocm9sZTogUm9sZSkge1xuICAgIHRoaXMuX3JvbGUgPSByb2xlO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHBpdGNoWm9uZVNjb3JlcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmVzO1xuICB9XG5cbiAgc2V0IHBpdGNoWm9uZVNjb3JlcyhzY29yZXM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fem9uZXMgPSBzY29yZXM7XG4gIH1cblxuICBzZXQgaW5zdHJ1Y3Rpb25zKGluc3RydWN0aW9uczogUGxheWVySW5zdHJ1Y3Rpb25bXSkge1xuICAgIHRoaXMuX2luc3RydWN0aW9ucyA9IGluc3RydWN0aW9ucztcbiAgfVxuXG4gIGdldCBpbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RydWN0aW9ucztcbiAgfVxuXG4gIHNldCBsb2MobG9jOiBDb29yZHMpIHtcbiAgICB0aGlzLl9sb2MgPSBsb2M7XG4gIH1cblxuICBnZXQgbG9jKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2M7XG4gIH1cblxuICBzZXQgZHgoZHg6IG51bWJlcikge1xuICAgIHRoaXMuX2R4ID0gZHg7XG4gIH1cblxuICBnZXQgZHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R4O1xuICB9XG5cbiAgc2V0IGR5KGR5OiBudW1iZXIpIHtcbiAgICB0aGlzLl9keSA9IGR5O1xuICB9XG5cbiAgZ2V0IGR5KCkge1xuICAgIHJldHVybiB0aGlzLl9keTtcbiAgfVxuXG4gIHNldCBkeihkejogbnVtYmVyKSB7XG4gICAgdGhpcy5fZHogPSBkejtcbiAgfVxuXG4gIGdldCBkeigpIHtcbiAgICByZXR1cm4gdGhpcy5fZHo7XG4gIH1cblxuICBjYWxjdWxhdGVfcGl0Y2hfem9uZV9zY29yZXMoKSB7XG4gICAgbGV0IHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICAgIGlmICh0aGlzLnRlYW0uYXR0YWNraW5nX2RpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHNpZGUgPSBcInJpZ2h0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGUgPSBcImxlZnRcIjtcbiAgICB9XG4gICAgdGhpcy5waXRjaFpvbmVTY29yZXMgPSBQaXRjaFpvbmUuZ2V0X3Njb3JlKHRoaXMucG9zaXRpb24sIHNpZGUpO1xuICB9XG5cbiAgZ2V0X3pvbmVfbWlkcG9pbnQoKTogQ29vcmRzIHtcbiAgICBsZXQgbWlkcG9pbnQgPSB7eDowLHk6MCx6OjB9O1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBpdGNoWm9uZVNjb3Jlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvb3JkcyA9IFBpdGNoWm9uZS5nZXRfY29vcmRzKGkpO1xuICAgICAgaWYodGhpcy5waXRjaFpvbmVTY29yZXNbaV0gPiAwKSB7XG4gICAgICAgIG1pZHBvaW50LnggKz0gY29vcmRzLnggKiB0aGlzLnBpdGNoWm9uZVNjb3Jlc1tpXTtcbiAgICAgICAgbWlkcG9pbnQueSArPSBjb29yZHMueSAqIHRoaXMucGl0Y2hab25lU2NvcmVzW2ldO1xuICAgICAgICB0b3RhbCArPSB0aGlzLnBpdGNoWm9uZVNjb3Jlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWlkcG9pbnQueCAvPSB0b3RhbDtcbiAgICBtaWRwb2ludC55IC89IHRvdGFsO1xuXG4gICAgcmV0dXJuIG1pZHBvaW50O1xuICB9XG5cbiAgY2FsY3VsYXRlX29wdGltYWxfcG9zaXRpb24odGVhbUluUG9zc2Vzc2lvbjogVGVhbXxudWxsKSB7XG4gICAgLy8gbW92ZSB0b3dhcmRzIG1vcmUgdGhyZWF0ZW5pbmcgcG9zaXRpb25zXG4gICAgLy8gb3IgcHJvdmlkZSBwYXNzaW5nIG9wdGlvbnNcbiAgICBcbiAgICAvLyBpdGVyYXRlIHRocm91Z2ggcG9zaXRpb25zIGluIHJhZGl1c1xuICAgIC8vIHBpY2sgb25lIGJhc2VkIG9uIG1vdmVtZW50IGF0dHJpYnV0ZVxuICAgIC8vIGFuZCB0ZWFtIHRhY3RpY3NcblxuICAgIC8vIGJpYXMgdG93YXJkcyBwb3NpdGlvbnMgd2l0aCBoaWdoZXIgem9uZSBzY29yZXNcblxuICAgIC8qbGV0IHJhZGl1cyA9IDEwO1xuICAgIC8vIDEwIG1cbiAgICBsZXQgcG9zaXRpb25zOiB7cG9zOkNvb3JkcyxzY29yZTpudW1iZXJ9W10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gdGhpcy5sb2MueCAtIHJhZGl1czsgeCA8IHRoaXMubG9jLnggKyByYWRpdXM7IHgrPTIpIHtcbiAgICAgIGZvciAobGV0IHkgPSB0aGlzLmxvYy55IC0gcmFkaXVzOyB5IDwgdGhpcy5sb2MueSArIHJhZGl1czsgeSs9Mikge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB7eDp4LHk6eSx6OjB9O1xuICAgICAgICBsZXQgdGhyZWF0ID0gdGhpcy50aHJlYXRfYXRfcG9zaXRpb24odGhpcy50ZWFtLCBwb3NpdGlvbik7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKHtwb3M6IHBvc2l0aW9uLCBzY29yZTogdGhyZWF0fSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHpvbmVfYmlhcyA9IDAuNTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGl0Y2hab25lU2NvcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5waXRjaFpvbmVTY29yZXNbaV0gPiAwKSB7XG4gICAgICAgIGxldCB6b25lX2Nvb3JkcyA9IFBpdGNoWm9uZS5nZXRfY29vcmRzKGkpO1xuICAgICAgICBmb3IgKGxldCBwb3Mgb2YgcG9zaXRpb25zKSB7XG4gICAgICAgICAgaWYgKGluX3JhbmdlKHBvcy5wb3MueCwgW3pvbmVfY29vcmRzLngtNS4yNSwgem9uZV9jb29yZHMueCs1LjI1XSkpIHtcbiAgICAgICAgICAgIGlmIChpbl9yYW5nZShwb3MucG9zLnksIFt6b25lX2Nvb3Jkcy55LTkuNzE0LzIsIHpvbmVfY29vcmRzLnkrOS43MTQvMl0pKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcG9zaXRpb25zLnNvcnQoKGEsYikgPT4ge1xuICAgICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vdmVtZW50ID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwibW92ZW1lbnRcIikgPz8gMjU7XG4gICAgXG4gICAgLy8gbG93ZXIgbW92ZW1lbnQgbWVhbnMgbW9yZSBkZXZpYXRpb25cbiAgICAvLyBtYXhpbXVtIHJhbmRvbW5lc3MgPSAwLjVcbiAgICAvLyBtaW5pbXVtIHJhbmRvbW5lc3MgPSAwLjFcblxuICAgIGxldCByYW5kb21uZXNzID0gMC41IC0gKG1vdmVtZW50IC8gMTAwKSAqIDAuNDtcbiAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21uZXNzICogMTApO1xuXG4gICAgbGV0IHRhcmdldCA9IHBvc2l0aW9uc1tpbmRleF0ucG9zO1xuICAgIHJldHVybiB0YXJnZXQ7Ki9cblxuICAgIC8vY2FsY3VsYXRlIG1pZHBvaW50IG9mIHpvbmUgc2NvcmVzXG4gICAgbGV0IG1pZHBvaW50ID0gdGhpcy5nZXRfem9uZV9taWRwb2ludCgpO1xuXG4gICAgbGV0IHpvbmVfYmlhcyA9IDA7XG4gICAgaWYgKHRoaXMubS5wb3NzZXNzaW9uID09IHRoaXMudGVhbSkge1xuICAgICAgem9uZV9iaWFzID0gMC4yNTtcbiAgICB9IGVsc2Uge1xuICAgICAgem9uZV9iaWFzID0gMC41O1xuICAgIH1cblxuICAgIGxldCByYWRpdXMgPSAxMDtcbiAgICAvLyAxMCBtXG4gICAgbGV0IHBvc2l0aW9uczoge3BvczpDb29yZHMsc2NvcmU6bnVtYmVyfVtdID0gW107XG4gICAgZm9yIChsZXQgeCA9IHRoaXMubG9jLnggLSByYWRpdXM7IHggPCB0aGlzLmxvYy54ICsgcmFkaXVzOyB4Kz0yKSB7XG4gICAgICBmb3IgKGxldCB5ID0gdGhpcy5sb2MueSAtIHJhZGl1czsgeSA8IHRoaXMubG9jLnkgKyByYWRpdXM7IHkrPTIpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0ge3g6eCx5OnksejowfTtcbiAgICAgICAgbGV0IHRocmVhdCA9IHRoaXMudGhyZWF0X2F0X3Bvc2l0aW9uKHRoaXMudGVhbSwgcG9zaXRpb24pO1xuICAgICAgICBwb3NpdGlvbnMucHVzaCh7cG9zOiBwb3NpdGlvbiwgc2NvcmU6IHRocmVhdH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvc2l0aW9ucy5zb3J0KChhLGIpID0+IHtcbiAgICAgIHJldHVybiBiLnNjb3JlIC0gYS5zY29yZTtcbiAgICB9KTtcblxuICAgIGxldCBtb3ZlbWVudCA9IHRoaXMuYXR0cmlidXRlcy5nZXRfYXR0cihcIm1vdmVtZW50XCIpID8/IDI1O1xuICAgIFxuICAgIC8vIGxvd2VyIG1vdmVtZW50IG1lYW5zIG1vcmUgZGV2aWF0aW9uXG4gICAgLy8gbWF4aW11bSByYW5kb21uZXNzID0gMC41XG4gICAgLy8gbWluaW11bSByYW5kb21uZXNzID0gMC4xXG5cbiAgICBsZXQgcmFuZG9tbmVzcyA9IDAuNSAtIChtb3ZlbWVudCAvIDEwMCkgKiAwLjQ7XG4gICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tbmVzcyAqIDEwKTtcblxuICAgIGxldCB0YXJnZXQgPSBwb3NpdGlvbnNbaW5kZXhdLnBvcztcbiAgICAvLyBhdmVyYWdlIG9mIG1pZHBvaW50IGFuZCB0YXJnZXQgd2l0aCB6b25lIGJpYXNcbiAgICB0YXJnZXQueCA9ICh0YXJnZXQueCArIG1pZHBvaW50LnggKiB6b25lX2JpYXMpIC8gKDEgKyB6b25lX2JpYXMpO1xuICAgIHRhcmdldC55ID0gKHRhcmdldC55ICsgbWlkcG9pbnQueSAqIHpvbmVfYmlhcykgLyAoMSArIHpvbmVfYmlhcyk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgICBcbiAgfVxuXG4gIGtpY2tvZmZfcG9zaXRpb24oKTogQ29vcmRzIHtcbiAgICBsZXQgcG9zID0gdGhpcy5nZXRfem9uZV9taWRwb2ludCgpO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICBkcmliYmxlKCkge1xuICAgIGxldCBkcmliYmxpbmcgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0X2F0dHIoXCJkcmliYmxpbmdcIik7XG4gICAgaWYgKGRyaWJibGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRyaWJibGluZyA9IDI1O1xuICAgIH1cblxuICAgIGxldCB0YXJnZXQgPSB0aGlzLmNhbGN1bGF0ZV9vcHRpbWFsX3Bvc2l0aW9uKHRoaXMudGVhbSk7XG4gICAgdGhpcy5keCA9IDA7XG4gICAgdGhpcy5keSA9IDA7XG4gIH1cblxuICBkZWNlbGVyYXRlKCkge1xuICAgIC8vIGRlY2VsZXJhdGlvbiA9IDAuNSAqIGFjY2VsZXJhdGlvblxuICAgIGxldCBhY2NlbGVyYXRpb24gPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0X2F0dHIoXCJhY2NlbGVyYXRpb25cIik7XG4gICAgaWYgKGFjY2VsZXJhdGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjY2VsZXJhdGlvbiA9IDI1O1xuICAgIH1cblxuICAgIGxldCBtYXhfZGVjZWxlcmF0aW9uID0gNiArIChhY2NlbGVyYXRpb24gLyAxMDApICogMjtcblxuICAgIGxldCBkZWNlbGVyYXRpb24gPSBtYXhfZGVjZWxlcmF0aW9uIC8gMjtcblxuICAgIGlmICh0aGlzLmR4ID4gMCApIHtcbiAgICAgIHRoaXMuZHggLT0gZGVjZWxlcmF0aW9uIC8gNjA7XG4gICAgICBpZiAodGhpcy5keCA8IDApIHtcbiAgICAgICAgdGhpcy5keCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmR4IDwgMCkge1xuICAgICAgdGhpcy5keCArPSBkZWNlbGVyYXRpb24gLyA2MDtcbiAgICAgIGlmICh0aGlzLmR4ID4gMCkge1xuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZHkgPiAwKSB7XG4gICAgICB0aGlzLmR5IC09IGRlY2VsZXJhdGlvbiAvIDYwO1xuICAgICAgaWYgKHRoaXMuZHkgPCAwKSB7XG4gICAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5keSA8IDApIHtcbiAgICAgIHRoaXMuZHkgKz0gZGVjZWxlcmF0aW9uIC8gNjA7XG4gICAgICBpZiAodGhpcy5keSA+IDApIHtcbiAgICAgICAgdGhpcy5keSA9IDA7XG4gICAgICB9XG5cbiAgICB9XG5cblxuICB9XG5cbiAgc2hvb3QoKSB7XG4gICAgbGV0IHNob290aW5nID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwiZmluaXNoaW5nXCIpO1xuICAgIGlmIChzaG9vdGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNob290aW5nID0gMjU7XG4gICAgfVxuICAgIC8vIGFjY3VyYWN5XG4gICAgLy8gbWF4IGFjY3VyYWN5X3JhZGl1cyA9IDEuMjVtXG4gICAgLy8gbWluIGFjY3VyYWN5X3JhZGl1cyA9IDAuMjVtXG4gICAgbGV0IGFjY3VyYWN5X3JhZGl1cyA9IDEuMjUgLSAoc2hvb3RpbmcgLyAxMDApICogMTtcbiAgICAvLyBwb3dlclxuICAgIGxldCB0ZWNobmlxdWUgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0X2F0dHIoXCJ0ZWNobmlxdWVcIik7XG4gICAgaWYgKHRlY2huaXF1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRlY2huaXF1ZSA9IDI1O1xuICAgIH1cbiAgICAvLyBtYXggcG93ZXIgPSAyNSBtL3NcbiAgICAvLyBtaW4gcG93ZXIgPSAxNSBtL3NcbiAgICBsZXQgbWF4X3Bvd2VyID0gMTUgKyAodGVjaG5pcXVlIC8gMTAwKSAqIDEwO1xuICAgIGxldCBwb3dlciA9IG1heF9wb3dlcjtcbiAgICAvLyBkaXN0YW5jZSB0byBnb2FsXG4gICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMudGVhbS5hdHRhY2tpbmdfZGlyZWN0aW9uO1xuICAgIGxldCBsZWZ0OiBDb29yZHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIsXG4gICAgICB6OiAwLFxuICAgIH07XG4gICAgbGV0IHJpZ2h0OiBDb29yZHMgPSB7IFxuICAgICAgeDogdGhpcy52ZW51ZS5sZW5ndGgsXG4gICAgICB5OiB0aGlzLnZlbnVlLndpZHRoIC8gMixcbiAgICAgIHo6IDAsXG4gICAgfTtcblxuICAgIC8vIGNob29zZSBzaWRlIG9mIGdvYWxcbiAgICBsZXQgdGFyZ2V0OiBDb29yZHM7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgIHg6IC0yLFxuICAgICAgICAgIHk6IHRoaXMudmVudWUud2lkdGggLyAyIC0gMSxcbiAgICAgICAgICB6OiAxLjI1LFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQgPSB7XG4gICAgICAgICAgeDogLTIsXG4gICAgICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIgKyAxLFxuICAgICAgICAgIHo6IDEuMjUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgIHg6IHRoaXMudmVudWUubGVuZ3RoICsgMixcbiAgICAgICAgICB5OiB0aGlzLnZlbnVlLndpZHRoIC8gMiAtIDEsXG4gICAgICAgICAgejogMS4yNSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAgIHg6IHRoaXMudmVudWUubGVuZ3RoICsgMixcbiAgICAgICAgICB5OiB0aGlzLnZlbnVlLndpZHRoIC8gMiArIDEsXG4gICAgICAgICAgejogMS4yNSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFwcGx5IGVycm9yIHRvIHRhcmdldF9jb29yZHMgYmFzZWQgb24gc2hvb3RpbmcgYWNjdXJhY3kgYW5kIGRpc3RhbmNlXG4gICAgdGFyZ2V0LnggKz0gcmFuZF9pbl9yYW5nZSgtYWNjdXJhY3lfcmFkaXVzLCBhY2N1cmFjeV9yYWRpdXMpO1xuICAgIHRhcmdldC55ICs9IHJhbmRfaW5fcmFuZ2UoLWFjY3VyYWN5X3JhZGl1cywgYWNjdXJhY3lfcmFkaXVzKTtcbiAgICB0YXJnZXQueiArPSByYW5kX2luX3JhbmdlKC1hY2N1cmFjeV9yYWRpdXMsIGFjY3VyYWN5X3JhZGl1cyk7XG5cbiAgICAvLyBjYWx1Y2xhdGUgc3BlZWQgdG8gYXBwbHkgdG8gYmFsbFxuICAgIGxldCBzcGVlZCA9IG1heF9wb3dlcjtcbiAgICBsZXQgZGlzdGFuY2UgPSBkaXN0KHRoaXMubG9jLCB0YXJnZXQpO1xuICAgIGxldCBlcnJvcl9wbHVzX21pbnVzX3BlcmNlbnRhZ2UgPSAwLjE1IC0gKHRlY2huaXF1ZSAvIDEwMCkgKiAwLjE7XG4gICAgbGV0IGR4ID0gKCh0YXJnZXQueCAtIHRoaXMubG9jLngpIC8gZGlzdGFuY2UpICogc3BlZWQ7XG4gICAgbGV0IGR5ID0gKCh0YXJnZXQueSAtIHRoaXMubG9jLnkpIC8gZGlzdGFuY2UpICogc3BlZWQ7XG4gICAgbGV0IGR6ID0gKCh0YXJnZXQueiAtIHRoaXMubG9jLnopIC8gZGlzdGFuY2UpICogc3BlZWQ7XG5cbiAgICB0aGlzLmF0dGVtcHRfc2hvdChkeCwgZHksIGR6KTtcblxuICB9XG5cbiAgYXR0ZW1wdF9zaG90KGR4LCBkeSwgZHopIHtcbiAgICB0aGlzLm0uYmFsbF9keCA9IGR4O1xuICAgIHRoaXMubS5iYWxsX2R5ID0gZHk7XG4gICAgdGhpcy5tLmJhbGxfZHogPSBkejtcbiAgICB0aGlzLm0ucmVjb3JkKFwic2hvdHNcIiwgdGhpcyk7XG4gIH1cbiAgZGVjaWRlX2FjdGlvbihtOk1hdGNoKSB7XG4gICAgLy8gaWYgYmFsbCBpcyBub3QgcG9zc2Vzc2VkIGJ5IGFueW9uZSwgYW5kIHBsYXllciBpcyBjbG9zZXN0IFxuICAgIC8vIHRlYW1tYXRlLCB0cnkgdG8gZ2V0IGl0XG4gICAgaWYgKG0ucG9zc2Vzc2lvbiA9PSBudWxsKSB7XG4gICAgICBsZXQgY2xvc2VzdCA9IG0uY2xvc2VzdF90b19iYWxsKCk7XG4gICAgICBpZiAoY2xvc2VzdC5pbmNsdWRlcyh0aGlzKSkge1xuICAgICAgICB0aGlzLmdldF9iYWxsKG0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucmVjZWl2ZV9wYXNzKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlX3RvKG0uYmFsbF90YXJnZXQsICdtYXgnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRhcmdldF9sb2MgPSB0aGlzLmNhbGN1bGF0ZV9vcHRpbWFsX3Bvc2l0aW9uKG0ub3V0T2ZQb3NzZXNzaW9uKTtcblxuICAgICAgICAgIHRoaXMubW92ZV90byh0aGlzLnRhcmdldF9sb2MsJ21lZGl1bScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjZWl2ZV9wYXNzID0gZmFsc2U7XG4gICAgICAvLyBpZiBiYWxsIGlzIHBvc3Nlc3NlZCBieSBzZWxmXG4gICAgICBpZiAobS5wbGF5ZXJfcG9zc2Vzc2lvbiA9PSB0aGlzKSB7XG4gICAgICAgIC8vIGRyaWJibGUsIHBhc3MsIG9yIHNob290XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0ZWFtbWF0ZSB0aHJlYXRcbiAgICAgICAgbGV0IHRlYW1tYXRlX3RocmVhdCA9IG5ldyBBcnJheSh0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2gubGVuZ3RoLTEpLmZpbGwoMCk7XG4gICAgICAgIGxldCB0ZWFtbWF0ZV9wcmVzc3VyZSA9IG5ldyBBcnJheSh0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2gubGVuZ3RoLTEpLmZpbGwoMCk7XG4gICAgICAgIGxldCBkaWZmID0gbmV3IEFycmF5KHRoaXMudGVhbS5wbGF5ZXJzT25QaXRjaC5sZW5ndGgtMSkuZmlsbCgwKTtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2guZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcGxheWVyICE9IHRoaXM7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgbGV0IHRocmVhdCA9IHAuY2FsY3VsYXRlX3RocmVhdCh0aGlzLnRlYW0pO1xuICAgICAgICAgIC8vbGV0IHByZXNzdXJlID0gcC5jYWxjdWxhdGVfcHJlc3N1cmUobS5vdXRPZlBvc3Nlc3Npb24gYXMgVGVhbSk7XG4gICAgICAgICAgdGVhbW1hdGVfdGhyZWF0W3RoaXMudGVhbS5wbGF5ZXJzT25QaXRjaC5pbmRleE9mKHApXSA9IHRocmVhdDtcbiAgICAgICAgICAvL3RlYW1tYXRlX3ByZXNzdXJlW3RoaXMudGVhbS5wbGF5ZXJzT25QaXRjaC5pbmRleE9mKHApXSA9IHByZXNzdXJlO1xuICAgICAgICAgIC8vZGlmZlt0aGlzLnRlYW0ucGxheWVyc09uUGl0Y2guaW5kZXhPZihwKV0gPSAodGhyZWF0IC0gcHJlc3N1cmUpKi43NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxmX3RocmVhdCA9IHRoaXMuY2FsY3VsYXRlX3RocmVhdCh0aGlzLnRlYW0pO1xuICAgICAgICAvL2xldCBzZWxmX3ByZXNzdXJlID0gdGhpcy5jYWxjdWxhdGVfcHJlc3N1cmUobS5vdXRPZlBvc3Nlc3Npb24gYXMgVGVhbSk7XG4gICAgICAgIC8vbGV0IHNlbGZfZGlmZiA9IHNlbGZfdGhyZWF0IC0gc2VsZl9wcmVzc3VyZTtcbiAgICAgICAgLy9sZXQgbWF4X2RpZmYgPSBNYXRoLm1heCguLi5kaWZmKTtcbiAgICAgICAgbGV0IG1heF90aHJlYXQgPSBNYXRoLm1heCguLi50ZWFtbWF0ZV90aHJlYXQpO1xuICAgICAgICBpZiAobWF4X3RocmVhdCA+IHNlbGZfdGhyZWF0KSB7XG4gICAgICAgICAgLy8gcGFzc1xuICAgICAgICAgIHRoaXMucGFzcyh0aGlzLnRlYW0sIG0ub3V0T2ZQb3NzZXNzaW9uIGFzIFRlYW0pO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGZfdGhyZWF0ID4gbWF4X3RocmVhdCl7XG4gICAgICAgICAgLy8gaWYgc2VsZiBkaWZmIGlzIGxvd2VyIHRoYW4gc2hvdCB0aHJlc2hvbGQsXG4gICAgICAgICAgLy8gZHJpYmJsZSB0byBhIG1vcmUgdGhyZWF0ZW5pbmcgcG9zaXRpb25cbiAgICAgICAgICBpZiAoc2VsZl90aHJlYXQgPCAwLjAxKSB7XG4gICAgICAgICAgICB0aGlzLmRyaWJibGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG9vdFxuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSA7XG5cbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGlmIGJhbGwgaXMgcG9zc2Vzc2VkIGJ5IHRlYW1tYXRlXG4gICAgICAgIC8vIG1vdmUgdG8gb3B0aW1hbCBwb3NpdGlvblxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5jYWxjdWxhdGVfb3B0aW1hbF9wb3NpdGlvbihtLm91dE9mUG9zc2Vzc2lvbik7XG4gICAgICAgIGlmICh0YXJnZXQ9PXVuZGVmaW5lZCkge1xuICAgICAgICAgIHRhcmdldCA9IHt4OjAseTowLHo6MH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlX3RvKHRhcmdldCwnbWVkaXVtJyk7XG5cbiAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuXG5cblxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZV9jbG9zZXN0X3RlYW1tYXRlKG06IE1hdGNoKSB7XG5cbiAgfVxuXG4gIGdldF9iYWxsKG06TWF0Y2gpIHtcbiAgICBsZXQgdGFyZ2V0ID0gbS5iYWxsX3BvcztcbiAgICB0aGlzLm1vdmVfdG8odGFyZ2V0LCdtYXgnKTtcbiAgfVxuXG4gIG1vdmVfdG8odGFyZ2V0OiBDb29yZHMsIHNwZWVkOiBcIm1heFwiIHwgXCJoaWdoXCIgfCBcIm1lZGl1bVwiIHwgXCJzbG93XCIpIHtcblxuICAgIC8vIGNhbGN1bGF0ZSBkeCwgZHksIGR6XG4gICAgbGV0IHBhY2UgPSB0aGlzLmF0dHJpYnV0ZXMuZ2V0X2F0dHIoXCJwYWNlXCIpO1xuICAgIGlmIChwYWNlID09IHVuZGVmaW5lZCkge1xuICAgICAgcGFjZSA9IDI1O1xuICAgIH1cbiAgICAvLyBtYXggc3BlZWQgb2YgMTAwIHBhY2UgcGxheWVyID0gMTAgbS9zXG4gICAgLy8gbWF4IHNwZWVkIG9mIDAgcGFjZSBwbGF5ZXIgPSA3IG0vc1xuICAgIGxldCBtYXhfc3BlZWQgPSA3ICsgKHBhY2UgLyAxMDApICogMztcbiAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwiYWNjZWxlcmF0aW9uXCIpO1xuICAgIGlmIChhY2NlbGVyYXRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY2NlbGVyYXRpb24gPSAyNTtcbiAgICB9XG4gICAgaWYgKHNwZWVkID09IFwiaGlnaFwiKSB7XG4gICAgICBtYXhfc3BlZWQgKj0gMC44NTtcbiAgICB9XG4gICAgaWYgKHNwZWVkID09IFwibWVkaXVtXCIpIHtcbiAgICAgIG1heF9zcGVlZCAqPSAwLjc7XG4gICAgfVxuICAgIGlmIChzcGVlZCA9PSBcInNsb3dcIikge1xuICAgICAgbWF4X3NwZWVkICo9IDAuNTtcbiAgICB9XG4gICAgLy8gbWF4IGFjY2VsZXJhdGlvbiBvZiAxMDAgYWNjZWxlcmF0aW9uIHBsYXllciA9IDggbS9zL3NcbiAgICAvLyBtYXggYWNjZWxlcmF0aW9uIG9mIDAgYWNjZWxlcmF0aW9uIHBsYXllciA9IDYgbS9zL3NcbiAgICBsZXQgbWF4X2FjY2VsZXJhdGlvbiA9IDYgKyAoYWNjZWxlcmF0aW9uIC8gMTAwKSAqIDI7XG4gICAgaWYgKHNwZWVkID09IFwiaGlnaFwiKSB7XG4gICAgICBtYXhfYWNjZWxlcmF0aW9uICo9IDAuODU7XG4gICAgfVxuICAgIGlmIChzcGVlZCA9PSBcIm1lZGl1bVwiKSB7XG4gICAgICBtYXhfYWNjZWxlcmF0aW9uICo9IDAuNztcbiAgICB9XG4gICAgaWYgKHNwZWVkID09IFwic2xvd1wiKSB7XG4gICAgICBtYXhfYWNjZWxlcmF0aW9uICo9IDAuNTtcbiAgICB9XG5cbiAgICAvL2NhbGN1bGF0ZSB0YXJnZXQgZHggYW5kIGR5XG4gICAgLy8gaS5lLiB2ZWN0b3JpemUgbWF4X3NwZWVkXG4gICAgbGV0IGR4ID0gKCh0YXJnZXQueCAtIHRoaXMubG9jLngpIC8gZGlzdCh0aGlzLmxvYywgdGFyZ2V0KSkgKiBtYXhfc3BlZWQ7XG4gICAgbGV0IGR5ID0gKCh0YXJnZXQueSAtIHRoaXMubG9jLnkpIC8gZGlzdCh0aGlzLmxvYywgdGFyZ2V0KSkgKiBtYXhfc3BlZWQ7XG5cbiAgICBkeCAvPSA2MDtcbiAgICBkeSAvPSA2MDtcblxuICAgIGlmIChkeCA+IHRoaXMuZHgpIHtcbiAgICAgIHRoaXMuZHggKz0gbWF4X2FjY2VsZXJhdGlvbiAvIDM2MDtcbiAgICB9IGVsc2UgaWYgKGR4IDwgdGhpcy5keCkge1xuICAgICAgdGhpcy5keCAtPSBtYXhfYWNjZWxlcmF0aW9uIC8gMzYwO1xuICAgIH1cbiAgICBpZiAoZHkgPiB0aGlzLmR5KSB7XG4gICAgICB0aGlzLmR5ICs9IG1heF9hY2NlbGVyYXRpb24gLyAzNjA7XG4gICAgfSBlbHNlIGlmIChkeSA8IHRoaXMuZHkpIHtcbiAgICAgIHRoaXMuZHkgLT0gbWF4X2FjY2VsZXJhdGlvbiAvIDM2MDtcbiAgICB9XG5cbiAgICAvLyBpZiBhdCB0YXJnZXQsIGRlY2VsZXJhdGUgYW5kIHN0b3BcbiAgICBpZiAoZGlzdCh0aGlzLmxvYywgdGFyZ2V0KSA8IDAuNSkge1xuICAgICAgdGhpcy5keCA9IDA7XG4gICAgICB0aGlzLmR5ID0gMDtcbiAgICB9XG5cblxuICB9XG5cbiAgYXR0ZW1wdF9wYXNzKGR4LCBkeSwgZHopIHtcbiAgICB0aGlzLm0uYmFsbF9keCA9IGR4O1xuICAgIHRoaXMubS5iYWxsX2R5ID0gZHk7XG4gICAgdGhpcy5tLmJhbGxfZHogPSBkejtcbiAgICB0aGlzLm0ucmVjb3JkKFwicGFzc2VzX2F0dGVtcHRlZFwiLCB0aGlzKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5sb2MueCArPSB0aGlzLmR4O1xuICAgIHRoaXMubG9jLnkgKz0gdGhpcy5keTtcbiAgICB0aGlzLmxvYy56ICs9IHRoaXMuZHo7XG5cbiAgICBpZiAodGhpcy5keCA9PSAwICYmIHRoaXMuZHkgPT0gMCAmJiB0aGlzLmR6ID09IDApIHtcbiAgICAgIHRoaXMucGFzc2l2ZV9tb3ZlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHBhc3ModGVhbTogVGVhbSwgb3BwOiBUZWFtKSB7XG4gICAgbGV0IHRhcmdldCA9IHRoaXMuY2hvb3NlX3Bhc3NfdGFyZ2V0KHRlYW0sIG9wcCk7XG4gICAgdGFyZ2V0LnJlY2VpdmVfcGFzcyA9IHRydWU7XG4gICAgLy8gcGFzc2luZyBhY2N1cmFjeVxuICAgIGxldCBwYXNzX2FjY3VyYWN5ID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwicGFzc2luZ1wiKTtcbiAgICBpZiAocGFzc19hY2N1cmFjeSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhc3NfYWNjdXJhY3kgPSAyNTtcbiAgICB9XG4gICAgLy8gZGlzdGFuY2UgdG8gdGFyZ2V0XG4gICAgbGV0IGQgPSBkaXN0KHRoaXMubG9jLCB0YXJnZXQubG9jKTtcbiAgICBsZXQgdGFyZ2V0X2Nvb3JkczogQ29vcmRzID0ge1xuICAgICAgeDogdGFyZ2V0LmxvYy54LFxuICAgICAgeTogdGFyZ2V0LmxvYy55LFxuICAgICAgejogdGFyZ2V0LmxvYy56LFxuICAgIH07XG4gICAgdGhpcy5tLmJhbGxfdGFyZ2V0ID0gdGFyZ2V0X2Nvb3JkcztcbiAgICAvLyBjaG9vc2Ugd2hldGhlciB0byBsb2Igb3IgcGFzcyBvbiBncm91bmRcbiAgICBsZXQgbG9iID0gZmFsc2U7XG4gICAgaWYgKGQgPiAyMCkge1xuICAgICAgLy8gbG9iXG4gICAgICBsb2IgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBjcm9zcyA9IGZhbHNlO1xuICAgIC8vIGlmIHBhc3NlciBpbiBjcm9zc2luZyB6b25lIGFuZCB0YXJnZXQgaW4gYm94LCBjcm9zc1xuICAgIGxldCBkaXJlY3Rpb24gPSB0ZWFtLmF0dGFja2luZ19kaXJlY3Rpb247XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgaWYgKFxuICAgICAgICAodGhpcy5sb2MueCA8IDIwICYmXG4gICAgICAgICAgdGhpcy5sb2MueSA8XG4gICAgICAgICAgICB0aGlzLnZlbnVlLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyAyKSB8fFxuICAgICAgICB0aGlzLmxvYy55ID5cbiAgICAgICAgICB0aGlzLnZlbnVlLndpZHRoIC8gMiAtIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyAyXG4gICAgICApIHtcbiAgICAgICAgLy8gaWYgdGFyZ2V0IGluIGJveFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFyZ2V0LmxvYy54IDwgMTEgJiZcbiAgICAgICAgICB0YXJnZXQubG9jLnkgPlxuICAgICAgICAgICAgdGhpcy52ZW51ZS53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX3dpZHRoIC8gMyAmJlxuICAgICAgICAgIHRhcmdldC5sb2MueSA8XG4gICAgICAgICAgICB0aGlzLnZlbnVlLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyAzXG4gICAgICAgICkge1xuICAgICAgICAgIGNyb3NzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgaWYgKFxuICAgICAgICAodGhpcy5sb2MueCA+IHRoaXMudmVudWUubGVuZ3RoIC0gMjAgJiZcbiAgICAgICAgICB0aGlzLmxvYy55IDxcbiAgICAgICAgICAgIHRoaXMudmVudWUud2lkdGggLyAyICsgUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDIpIHx8XG4gICAgICAgIHRoaXMubG9jLnkgPlxuICAgICAgICAgIHRoaXMudmVudWUud2lkdGggLyAyIC0gUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDJcbiAgICAgICkge1xuICAgICAgICAvLyBpZiB0YXJnZXQgaW4gYm94XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXQubG9jLnggPiB0aGlzLnZlbnVlLmxlbmd0aCAtIDExICYmXG4gICAgICAgICAgdGFyZ2V0LmxvYy55ID5cbiAgICAgICAgICAgIHRoaXMudmVudWUud2lkdGggLyAyIC0gUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDMgJiZcbiAgICAgICAgICB0YXJnZXQubG9jLnkgPFxuICAgICAgICAgICAgdGhpcy52ZW51ZS53aWR0aCAvIDIgKyBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX3dpZHRoIC8gM1xuICAgICAgICApIHtcbiAgICAgICAgICBjcm9zcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NhbGN1bGF0ZSBhY2N1cmFjeVxuICAgIC8vYXBwbHkgZXJyb3IgdG8gdGFyZ2V0X2Nvb3JkcyBiYXNlZCBvbiBwYXNzaW5nIGFjY3VyYWN5IGFuZCBkaXN0YW5jZVxuICAgIC8vIHdvcnNlIHBhc3NpbmcgYWNjdXJhY3kgbWVhbnMgYSBsYXJnZXIgZXJyb3IgcmFkaXVzXG4gICAgLy8gbWF4IHJhZGl1czogMm1cbiAgICAvLyBtaW4gcmFkaXVzOiAuMzVtXG4gICAgbGV0IGVycm9yX3JhZGl1cyA9IDAuMzUgKyAocGFzc19hY2N1cmFjeSAvIDEwMCkgKiAxLjY1O1xuICAgIC8vIHBpY2sgcmFuZG9tIHBvaW50IGluIHRoZSBjaXJjbGVcbiAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkgKiBlcnJvcl9yYWRpdXM7XG4gICAgbGV0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgIHRhcmdldF9jb29yZHMueCArPSByICogTWF0aC5jb3ModGhldGEpO1xuICAgIHRhcmdldF9jb29yZHMueSArPSByICogTWF0aC5zaW4odGhldGEpO1xuXG4gICAgLy8gY2FsdWNsYXRlIHNwZWVkIHRvIGFwcGx5IHRvIGJhbGxcbiAgICAvLyBiZXR0ZXIgcGFzc2luZyBhbmQgdGVjaG5pcXVlIG1lYW5zIGZhc3RlciBwYXNzXG4gICAgLy8gbWF4IHNwZWVkID0gMjUgbS9zXG4gICAgLy8gbWluIHNwZWVkID0gMTUgbS9zXG4gICAgLy8gb3B0aW1hbCBzcGVlZCBpcyBvbmUgdGhhdCB0YWtlcyAxIHNlY29uZCB0byByZWFjaCB0YXJnZXRcbiAgICAvLyBwbGF5ZXIgdy8gYmV0dGVyIHRlY2huaXF1ZSB3aWxsIGFwcGx5IHNwZWVkIGNsb3NlciB0byBvcHRpbWFsIHNwZWVkXG5cbiAgICBsZXQgbWF4X3NwZWVkID0gMTUgKyAocGFzc19hY2N1cmFjeSAvIDEwMCkgKiAxMDtcbiAgICBsZXQgc3BlZWQgPSBtYXhfc3BlZWQ7XG5cbiAgICBsZXQgZGlzdGFuY2UgPSBkaXN0KHRoaXMubG9jLCB0YXJnZXRfY29vcmRzKTtcbiAgICBsZXQgdGVjaG5pcXVlID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwidGVjaG5pcXVlXCIpO1xuICAgIGlmICh0ZWNobmlxdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ZWNobmlxdWUgPSAyNTtcbiAgICB9XG4gICAgbGV0IGVycm9yX3BsdXNfbWludXNfcGVyY2VudGFnZSA9IDAuMTUgLSAodGVjaG5pcXVlIC8gMTAwKSAqIDAuMTtcbiAgICBsZXQgb3B0aW1hbF9zcGVlZCA9IGRpc3RhbmNlLzI7XG4gICAgc3BlZWQgPSBvcHRpbWFsX3NwZWVkICogKDEgKyBlcnJvcl9wbHVzX21pbnVzX3BlcmNlbnRhZ2UgKiByYW5kX2luX3JhbmdlKC0xLDEpKTtcbiAgICBcbiAgICBpZiAoc3BlZWQgPiBtYXhfc3BlZWQpIHtcbiAgICAgIHNwZWVkID0gbWF4X3NwZWVkO1xuICAgIH1cbiAgICAvLyBjYWxjdWxhdGUgZHgsIGR5LCBkelxuICAgIGxldCBkeCA9ICgodGFyZ2V0X2Nvb3Jkcy54IC0gdGhpcy5sb2MueCkgLyBkKSAqIHNwZWVkO1xuICAgIGxldCBkeSA9ICgodGFyZ2V0X2Nvb3Jkcy55IC0gdGhpcy5sb2MueSkgLyBkKSAqIHNwZWVkO1xuICAgIGxldCBkeiA9IDA7XG4gICAgaWYgKGxvYiB8fCBjcm9zcykge1xuICAgICAgZHogPSAoKDEwIC0gdGhpcy5sb2MueikgLyBkKSAqIHNwZWVkO1xuICAgIH1cblxuICAgIHRoaXMuYXR0ZW1wdF9wYXNzKGR4LCBkeSwgZHopO1xuXG4gIH1cblxuICBjaG9vc2VfcGFzc190YXJnZXQodGVhbTogVGVhbSwgb3BwOiBUZWFtKSB7XG4gICAgbGV0IHBsYXllcnMgPSB0ZWFtLnBsYXllcnNPblBpdGNoLmZpbHRlcigocGxheWVyKSA9PiB7XG4gICAgICByZXR1cm4gcGxheWVyICE9IHRoaXM7XG4gICAgfSk7XG4gICAgLy8gdGFyZ2V0IHNjb3JlcyBmb3IgZWFjaCBvdGhlciBwbGF5ZXJcbiAgICAvLyBpbml0aWFsbHkgYXJyYXkgb2YgMTAgMCdzXG4gICAgbGV0IHNjb3JlcyA9IEFycmF5KDEwKS5maWxsKDApO1xuICAgIGZvciAobGV0IHAgb2YgcGxheWVycykge1xuICAgICAgLy8gbm9ybWFsIGRpc3RyaWJ1dGlvbiBieSBkaXN0YW5jZVxuICAgICAgLy8gaWYgdGVhbSBpbnN0cnVjdGlvbiBpcyBzaG9ydGVyIHBhc3NpbmcsIHJlZHVjZSB0aGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gICAgICAvLyBpZiB0ZWFtIGluc3RydWN0aW9uIGlzIGxvbmdlciBwYXNzaW5nLCBpbmNyZWFzZSB0aGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gICAgICAvLyBpZiBwbGF5ZXIgaW5zdHJ1Y3Rpb24gaXMgc2hvcnRlciBwYXNzaW5nLCByZWR1Y2UgdGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICAgICAgLy8gaWYgcGxheWVyIGluc3RydWN0aW9uIGlzIGxvbmdlciBwYXNzaW5nLCBpbmNyZWFzZSB0aGUgc3RhbmRhcmQgZGV2aWF0aW9uXG5cbiAgICAgIGxldCBzdGRfZGV2ID0gMTtcbiAgICAgIGlmICh0ZWFtLnRhY3RpY3MuaW5jbHVkZXMoXCJzaG9ydGVyX3Bhc3NpbmdcIiBhcyBUZWFtSW5zdHJ1Y3Rpb24pKSB7XG4gICAgICAgIC8vIHJlZHVjZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgICAgc3RkX2RldiA9IDAuODtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlYW0udGFjdGljcy5pbmNsdWRlcyhcImxvbmdlcl9wYXNzaW5nXCIgYXMgVGVhbUluc3RydWN0aW9uKSkge1xuICAgICAgICAvLyBpbmNyZWFzZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgICAgc3RkX2RldiA9IDEuMjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25zLmluY2x1ZGVzKFwic2hvcnRlcl9wYXNzaW5nXCIgYXMgUGxheWVySW5zdHJ1Y3Rpb24pKSB7XG4gICAgICAgIHN0ZF9kZXYgPSBzdGRfZGV2IC0gMC4xNTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25zLmluY2x1ZGVzKFwibG9uZ2VyX3Bhc3NpbmdcIiBhcyBQbGF5ZXJJbnN0cnVjdGlvbikpIHtcbiAgICAgICAgc3RkX2RldiA9IHN0ZF9kZXYgKyAwLjE1O1xuICAgICAgfVxuICAgICAgLy9zY29yZXNbcGxheWVycy5pbmRleE9mKHApXSArPSBNYXRoLmV4cChcbiAgICAgICAvLyAoLTAuNSAqIChkICogZCkpIC8gKHN0ZF9kZXYgKiBzdGRfZGV2KVxuICAgICAgLy8pO1xuXG4gICAgICAvLyBwbGF5ZXJzIHRoYXQgdGhlIHBhc3NlciBpcyBjdXJyZW50bHkgZmFjaW5nIGhhdmUgYSBoaWdoZXIgY2hhbmNlIG9mIGJlaW5nIHBhc3NlZCB0b1xuICAgICAgLy9sZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHAubG9jLnkgLSB0aGlzLmxvYy55LCBwLmxvYy54IC0gdGhpcy5sb2MueCk7XG4gICAgICAvL2xldCBmYWNpbmcgPSBNYXRoLmF0YW4yKHRoaXMuZHksIHRoaXMuZHgpO1xuICAgICAgLy9sZXQgZGlmZiA9IE1hdGguYWJzKGFuZ2xlIC0gZmFjaW5nKTtcbiAgICAgIC8vaWYgKGRpZmYgPCBNYXRoLlBJIC8gNCkge1xuICAgICAgLy8gIHNjb3Jlc1twbGF5ZXJzLmluZGV4T2YocCldICs9IDE7XG4gICAgICAvL31cbiAgICAgIC8vIHBsYXllcnMgdW5kZXIgcHJlc3N1cmUgaGF2ZSBhIGxvd2VyIGNoYW5jZSBvZiBiZWluZyBwYXNzZWQgdG9cbiAgICAgIC8vbGV0IHByZXNzdXJlID0gcC5jYWxjdWxhdGVfcHJlc3N1cmUob3BwKTtcbiAgICAgIC8vc2NvcmVzW3BsYXllcnMuaW5kZXhPZihwKV0gLT0gcHJlc3N1cmU7XG4gICAgICAvLyBwbGF5ZXJzIGluIGEgdGhyZWF0ZW5pbmcgcG9zaXRpb24gaGF2ZSBhIGhpZ2hlciBjaGFuY2Ugb2YgYmVpbmcgcGFzc2VkIHRvXG4gICAgICBsZXQgdGhyZWF0ID0gcC5jYWxjdWxhdGVfdGhyZWF0KHRlYW0pO1xuICAgICAgc2NvcmVzW3BsYXllcnMuaW5kZXhPZihwKV0gKz0gdGhyZWF0O1xuXG4gICAgICAvLyBzb3J0IHNjb3Jlc1xuICAgICAgXG5cbiAgICB9XG5cbiAgICAvKnNjb3Jlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYiAtIGE7XG4gICAgfSk7Ki9cbiAgICAvL3NvcnQgZGVzY2VuZGluZ1xuXG4gICAgLy8gcmFuZG9tbHkgY2hvb3NlIHBsYXllclxuICAgIC8vIHVzZSBkZWNpc2lvbiBtYWtpbmcgYXR0cmlidXRlXG4gICAgLy8gdXNlIHRlYW0gdGFjdGljc1xuICAgIC8vIHVzZSBwbGF5ZXIgaW5zdHJ1Y3Rpb25zXG5cbiAgICBsZXQgZGVjaXNpb25zID0gdGhpcy5hdHRyaWJ1dGVzLmdldF9hdHRyKFwiZGVjaXNpb25zXCIpO1xuICAgIGlmIChkZWNpc2lvbnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWNpc2lvbnMgPSAyNTtcbiAgICB9XG5cbiAgICAvLyBsb3dlciBkZWNpc2lvbnMgbWVhbnMgbW9yZSBkZXZpYXRpb25cbiAgICAvLyBtYXhpbXVtIHJhbmRvbW5lc3MgPSAwLjVcbiAgICAvLyBtaW5pbXVtIHJhbmRvbW5lc3MgPSAwLjFcbiAgICAvL2xldCByYW5kb21uZXNzID0gMC41IC0gKGRlY2lzaW9ucyAvIDEwMCkgKiAwLjQ7XG4gICAgLy9sZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21uZXNzICogMTApO1xuXG4gICAgLy8gZ2V0IHBsYXllciB3aXRoIGhpZ2hlc3Qgc2NvcmVcbiAgICBsZXQgaW5kZXggPSBzY29yZXMuaW5kZXhPZihNYXRoLm1heCguLi5zY29yZXMpKTtcbiAgICBsZXQgdGFyZ2V0ID0gcGxheWVyc1tpbmRleF07XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGNhbGN1bGF0ZV9wcmVzc3VyZShvcHA6IFRlYW0pIHtcbiAgICBsZXQgb3Bwb25lbnRzID0gb3BwLnBsYXllcnNPblBpdGNoO1xuICAgIGxldCBwcmVzc3VyZSA9IDA7XG4gICAgb3Bwb25lbnRzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgbGV0IGQgPSBkaXN0KHRoaXMubG9jLCBwbGF5ZXIubG9jKTtcbiAgICAgIGlmIChkIDwgMTApIHtcbiAgICAgICAgaWYgKGQgPT0gMCApIHtcbiAgICAgICAgICBkICs9IDAuMTtcbiAgICAgICAgfVxuICAgICAgICBwcmVzc3VyZSArPSAxIC8gKGQgKiBkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJlc3N1cmU7XG4gIH1cblxuICBwYXNzaXZlX21vdmVtZW50KCkge1xuICAgIC8vIFwiYnJvd25pYW4gbW90aW9uXCIgZm9yIHBsYXllcnNcbiAgICAvLyByYW5kb21seSBtb3ZlIGFyb3VuZCBpbiBzbWFsbCByYWRpdXMgYXJvdW5kIGN1cnJlbnQgbG9jYXRpb25cblxuXG4gICAgbGV0IHJhZGl1cyA9IDAuMDI1O1xuICAgIGxldCB4ID0gdGhpcy5sb2MueCArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHJhZGl1cztcbiAgICBsZXQgeSA9IHRoaXMubG9jLnkgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiByYWRpdXM7XG5cbiAgICAvLyBjaGVjayBpZiBuZXcgbG9jYXRpb24gaXMgd2l0aGluIHBpdGNoXG4gICAgaWYgKHggPCAwKSB7XG4gICAgICB4ID0gMDtcbiAgICB9XG4gICAgaWYgKHggPiB0aGlzLnZlbnVlLmxlbmd0aCkge1xuICAgICAgeCA9IHRoaXMudmVudWUubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoeSA8IDApIHtcbiAgICAgIHkgPSAwO1xuICAgIH1cbiAgICBpZiAoeSA+IHRoaXMudmVudWUud2lkdGgpIHtcbiAgICAgIHkgPSB0aGlzLnZlbnVlLndpZHRoO1xuICAgIH1cblxuICAgIHRoaXMubG9jID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB6OiB0aGlzLmxvYy56LFxuICAgIH07XG4gIH1cblxuICBjYWxjdWxhdGVfdGhyZWF0KHRlYW06IFRlYW0pIHtcbiAgICAvLyBkaXN0YW5jZSB0byBnb2FsXG4gICAgbGV0IGRpcmVjdGlvbiA9IHRlYW0uYXR0YWNraW5nX2RpcmVjdGlvbjtcbiAgICBsZXQgbGVmdDogQ29vcmRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IHRoaXMudmVudWUud2lkdGggLyAyLFxuICAgICAgejogMCxcbiAgICB9O1xuICAgIGxldCByaWdodDogQ29vcmRzID0ge1xuICAgICAgeDogdGhpcy52ZW51ZS5sZW5ndGgsXG4gICAgICB5OiB0aGlzLnZlbnVlLndpZHRoIC8gMixcbiAgICAgIHo6IDAsXG4gICAgfTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJsZWZ0XCIpIHtcbiAgICAgIC8vbGVmdCBzaWRlIGdvYWxcbiAgICAgIGxldCBkID0gZGlzdCh0aGlzLmxvYywgbGVmdCk7XG4gICAgICByZXR1cm4gMSAvIChkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9yaWdodCBzaWRlIGdvYWxcbiAgICAgIGxldCBkID0gZGlzdCh0aGlzLmxvYywgcmlnaHQpO1xuICAgICAgcmV0dXJuIDEgLyAoZCk7XG4gICAgfVxuICB9XG5cbiAgdGhyZWF0X2F0X3Bvc2l0aW9uKHRlYW06VGVhbSwgbG9jOkNvb3Jkcykge1xuICAgIC8vIGRpc3RhbmNlIHRvIGdvYWxcbiAgICBsZXQgZGlyZWN0aW9uID0gdGVhbS5hdHRhY2tpbmdfZGlyZWN0aW9uO1xuICAgIGxldCBsZWZ0OiBDb29yZHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIsXG4gICAgICB6OiAwLFxuICAgIH07XG4gICAgbGV0IHJpZ2h0OiBDb29yZHMgPSB7XG4gICAgICB4OiB0aGlzLnZlbnVlLmxlbmd0aCxcbiAgICAgIHk6IHRoaXMudmVudWUud2lkdGggLyAyLFxuICAgICAgejogMCxcbiAgICB9O1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgLy9sZWZ0IHNpZGUgZ29hbFxuICAgICAgbGV0IGQgPSBkaXN0KGxvYywgbGVmdCk7XG4gICAgICByZXR1cm4gMSAvIChkICogZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vcmlnaHQgc2lkZSBnb2FsXG4gICAgICBsZXQgZCA9IGRpc3QobG9jLCByaWdodCk7XG4gICAgICByZXR1cm4gMSAvIChkICogZCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnRhcmdldF9zcGVlZCA9IDA7XG4gICAgdGhpcy50YXJnZXRfbG9jID0gIChcbiAgICAgIHsgeDogMTA1LzIsIHk6IDY4LzIsIHo6IDAgfVxuICAgICk7XG5cbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLmR5ID0gMDtcbiAgICB0aGlzLmR6ID0gMDtcblxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlYW0gZXh0ZW5kcyBDbHViIHtcbiAgX3BsYXllcnNPblBpdGNoOiBQbGF5ZXJPblBpdGNoW107XG4gIF9zdWJzdGl0dXRlczogUGxheWVyW107XG4gIF9hdHRhY2tpbmdfZGlyZWN0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcblxuICB0YWN0aWNzOiBUZWFtSW5zdHJ1Y3Rpb25bXTtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLnRhY3RpY3MgPSBbXTtcbiAgfVxuXG4gIHNldCBwbGF5ZXJzT25QaXRjaChwbGF5ZXJzOiBQbGF5ZXJPblBpdGNoW10pIHtcbiAgICB0aGlzLl9wbGF5ZXJzT25QaXRjaCA9IHBsYXllcnM7XG4gIH1cblxuICBnZXQgcGxheWVyc09uUGl0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcnNPblBpdGNoO1xuICB9XG5cbiAgc2V0IHN1YnN0aXR1dGVzKHN1YnN0aXR1dGVzOiBQbGF5ZXJbXSkge1xuICAgIHRoaXMuX3N1YnN0aXR1dGVzID0gc3Vic3RpdHV0ZXM7XG4gIH1cblxuICBzZXQgYXR0YWNraW5nX2RpcmVjdGlvbihkaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiKSB7XG4gICAgdGhpcy5fYXR0YWNraW5nX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldCBhdHRhY2tpbmdfZGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2tpbmdfZGlyZWN0aW9uO1xuICB9XG5cbiAgYWRkX2luc3RydWN0aW9uKGluc3RydWN0aW9uOiBUZWFtSW5zdHJ1Y3Rpb24pIHtcbiAgICB0aGlzLnRhY3RpY3MucHVzaChpbnN0cnVjdGlvbik7XG4gIH1cblxuICByZW1vdmVfaW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb246IFRlYW1JbnN0cnVjdGlvbikge1xuICAgIGxldCBpbmRleCA9IHRoaXMudGFjdGljcy5pbmRleE9mKGluc3RydWN0aW9uKTtcbiAgICB0aGlzLnRhY3RpY3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGdldCBpbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFjdGljcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2gge1xuICB0aW1lOiBudW1iZXI7XG4gIGhvbWVfZ29hbHM6IG51bWJlcjtcbiAgYXdheV9nb2FsczogbnVtYmVyO1xuICBzdGFydGVkOiBib29sZWFuO1xuICBtYXhfdGltZTogbnVtYmVyO1xuICBtYXhfMXN0X2hhbGZfdGltZTogbnVtYmVyO1xuICBtYXhfMm5kX2hhbGZfdGltZTogbnVtYmVyO1xuICBoYWxmOiAxIHwgMjtcbiAgcG9zc2libGVfZXh0cmFfdGltZTogYm9vbGVhbjtcbiAgaXNfZXh0cmFfdGltZTogYm9vbGVhbjtcbiAgZXh0cmFfdGltZV9oYWxmOiAxIHwgMjtcbiAgbWF4XzFzdF9oYWxmX2V4dHJhX3RpbWU6IG51bWJlcjtcbiAgbWF4XzJuZF9oYWxmX2V4dHJhX3RpbWU6IG51bWJlcjtcbiAgcG9zc2libGVfcGVuYWx0aWVzOiBib29sZWFuO1xuICBpc19wZW5hbHRpZXM6IGJvb2xlYW47XG4gIHBvc3Nlc3Npb246IFRlYW18bnVsbDtcbiAgb3V0T2ZQb3NzZXNzaW9uOiBUZWFtfG51bGw7XG4gIHBsYXllcl9wb3NzZXNzaW9uOiBQbGF5ZXJPblBpdGNoIHwgbnVsbDtcbiAgdGlja3M6IG51bWJlcjtcbiAgY2xvY2tfdGlja3M6IG51bWJlcjtcbiAgdGVhbV9raWNrZWRfb2ZmX2ZpcnN0OiBUZWFtO1xuICBiYWxsX3BvczogQ29vcmRzO1xuICBiYWxsX2R4OiBudW1iZXI7XG4gIGJhbGxfZHk6IG51bWJlcjtcbiAgYmFsbF9kejogbnVtYmVyO1xuICBiYWxsX3RhcmdldDogQ29vcmRzO1xuICBfdmVudWU6IFZlbnVlO1xuICBUT1BfTEVGVDogQ29vcmRzO1xuICBUT1BfUklHSFQ6IENvb3JkcztcbiAgQk9UVE9NX0xFRlQ6IENvb3JkcztcbiAgQk9UVE9NX1JJR0hUOiBDb29yZHM7XG4gIF9ob21lOiBUZWFtO1xuICBfYXdheTogVGVhbTtcbiAgX2RhdGVfdGltZTogRGF0ZTtcbiAgYmFja2dyb3VuZDogT2Zmc2NyZWVuQ2FudmFzO1xuICBiYWNrZ3JvdW5kQ3R4OiBJbWFnZUJpdG1hcFJlbmRlcmluZ0NvbnRleHQ7XG4gIGJpdG1hcDogSW1hZ2VCaXRtYXA7XG4gIGZvcmVncm91bmQ6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgcGxheWVyc09uUGl0Y2g6IFBsYXllck9uUGl0Y2hbXTtcbiAgc3RhdDpTdGF0O1xuICBiYWxsX2JvdW5jZTpib29sZWFuO1xuICBiYWxsX2xhc3RfdG91Y2g6VGVhbXxudWxsO1xuXG4gIHNldCBob21lKGhvbWU6IFRlYW0pIHtcbiAgICB0aGlzLl9ob21lID0gaG9tZTtcbiAgfVxuICBnZXQgaG9tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9tZTtcbiAgfVxuXG4gIHNldCBhd2F5KGF3YXk6IFRlYW0pIHtcbiAgICB0aGlzLl9hd2F5ID0gYXdheTtcbiAgfVxuICBnZXQgYXdheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdheTtcbiAgfVxuXG4gIHNldCBkYXRlX3RpbWUoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuX2RhdGVfdGltZSA9IGRhdGU7XG4gIH1cbiAgZ2V0IGRhdGVfdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZV90aW1lO1xuICB9XG5cbiAgc2V0IHZlbnVlKHZlbnVlOiBWZW51ZSkge1xuICAgIHRoaXMuX3ZlbnVlID0gdmVudWU7XG4gIH1cbiAgZ2V0IHZlbnVlKCkge1xuICAgIHJldHVybiB0aGlzLl92ZW51ZTtcbiAgfVxuXG4gIHJlY29yZChzdGF0OnN0cmluZywgcGxheWVyOlBsYXllck9uUGl0Y2gpIHtcbiAgICB0aGlzLnN0YXQucmVjb3JkKHN0YXQscGxheWVyKTtcbiAgfVxuXG4gIGluaXRpYWxpemUocnVsZXM6IE1hcDxzdHJpbmcsIGJvb2xlYW4+KSB7XG4gICAgdGhpcy50aW1lID0gMC4wO1xuICAgIHRoaXMuaG9tZV9nb2FscyA9IDA7XG4gICAgdGhpcy5hd2F5X2dvYWxzID0gMDtcbiAgICB0aGlzLm1heF90aW1lID0gOTAuMCAqIDYwLjA7XG4gICAgdGhpcy50aWNrcyA9IDA7XG4gICAgdGhpcy5UT1BfTEVGVCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgejogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5UT1BfUklHSFQgPSB7XG4gICAgICB4OiB0aGlzLl92ZW51ZS5sZW5ndGgsXG4gICAgICB5OiAwLFxuICAgICAgejogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5CT1RUT01fTEVGVCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiB0aGlzLl92ZW51ZS53aWR0aCxcbiAgICAgIHo6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuQk9UVE9NX1JJR0hUID0ge1xuICAgICAgeDogdGhpcy5fdmVudWUubGVuZ3RoLFxuICAgICAgeTogdGhpcy5fdmVudWUud2lkdGgsXG4gICAgICB6OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmJhbGxfcG9zID0ge1xuICAgICAgeDogdGhpcy52ZW51ZS5kaW1lbnNpb25zLmtpY2tvZmZfc3BvdC54LFxuICAgICAgeTogdGhpcy52ZW51ZS53aWR0aCAvIDIsXG4gICAgICB6OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmJhbGxfZHggPSAwIC8gNjA7XG4gICAgdGhpcy5iYWxsX2R5ID0gMCAvIDYwO1xuICAgIHRoaXMuYmFsbF9keiA9IDA7XG4gICAgdGhpcy5iYWxsX2JvdW5jZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5iYWxsX3RhcmdldCA9IHtcbiAgICAgIHg6IHRoaXMudmVudWUuZGltZW5zaW9ucy5raWNrb2ZmX3Nwb3QueCxcbiAgICAgIHk6IHRoaXMudmVudWUuZGltZW5zaW9ucy5raWNrb2ZmX3Nwb3QueSxcbiAgICAgIHo6IDAsXG4gICAgfVxuXG4gICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmIChyYW5kIDwgMC41KSB7XG4gICAgICB0aGlzLmhvbWUuYXR0YWNraW5nX2RpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgIHRoaXMuYXdheS5hdHRhY2tpbmdfZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaG9tZS5hdHRhY2tpbmdfZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICB0aGlzLmF3YXkuYXR0YWNraW5nX2RpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIldoaXRlIHRlYW0gYXR0YWNraW5nIGRpcmVjdGlvbjogXCIgKyB0aGlzLmhvbWUuYXR0YWNraW5nX2RpcmVjdGlvbik7XG5cbiAgICB0aGlzLmhhbGYgPSAxO1xuXG4gICAgdGhpcy5tYXhfMXN0X2hhbGZfdGltZSA9IDQ1LjAgKiA2MC4wO1xuICAgIHRoaXMubWF4XzJuZF9oYWxmX3RpbWUgPSA0NS4wICogNjAuMDtcblxuICAgIGlmIChydWxlcy5nZXQoXCJleHRyYV90aW1lXCIpID09IHRydWUpIHtcbiAgICAgIHRoaXMucG9zc2libGVfZXh0cmFfdGltZSA9IHRydWU7XG4gICAgICB0aGlzLmlzX2V4dHJhX3RpbWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZXh0cmFfdGltZV9oYWxmID0gMTtcbiAgICAgIHRoaXMubWF4XzFzdF9oYWxmX2V4dHJhX3RpbWUgPSAxNS4wICogNjAuMDtcbiAgICAgIHRoaXMubWF4XzJuZF9oYWxmX2V4dHJhX3RpbWUgPSAxNS4wICogNjAuMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3NzaWJsZV9leHRyYV90aW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmlzX2V4dHJhX3RpbWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZXh0cmFfdGltZV9oYWxmID0gMTtcbiAgICAgIHRoaXMubWF4XzFzdF9oYWxmX2V4dHJhX3RpbWUgPSAwO1xuICAgICAgdGhpcy5tYXhfMm5kX2hhbGZfZXh0cmFfdGltZSA9IDA7XG4gICAgfVxuICAgIGlmIChydWxlcy5nZXQoXCJwZW5hbHRpZXNcIikgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5wb3NzaWJsZV9wZW5hbHRpZXMgPSB0cnVlO1xuICAgICAgdGhpcy5pc19wZW5hbHRpZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3NzaWJsZV9wZW5hbHRpZXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNfcGVuYWx0aWVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5ob21lLnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLnZlbnVlID0gdGhpcy52ZW51ZTtcbiAgICAgIHBsYXllci50ZWFtID0gdGhpcy5ob21lO1xuICAgICAgcGxheWVyLm0gPSB0aGlzO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hd2F5LnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLnZlbnVlID0gdGhpcy52ZW51ZTtcbiAgICAgIHBsYXllci50ZWFtID0gdGhpcy5hd2F5O1xuICAgICAgcGxheWVyLm0gPSB0aGlzO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wbGF5ZXJzT25QaXRjaCA9IFtcbiAgICAgIC4uLnRoaXMuaG9tZS5wbGF5ZXJzT25QaXRjaCxcbiAgICAgIC4uLnRoaXMuYXdheS5wbGF5ZXJzT25QaXRjaCxcbiAgICBdO1xuXG4gICAgdGhpcy5wbGF5ZXJzT25QaXRjaC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5jYWxjdWxhdGVfcGl0Y2hfem9uZV9zY29yZXMoKTtcbiAgICAgIHBsYXllci5sb2MgPSBwbGF5ZXIua2lja29mZl9wb3NpdGlvbigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGF0ID0gbmV3IFN0YXQodGhpcyk7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDkwMCwgOTAwKTtcbiAgICBkcmF3X3BpdGNoKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgdGhpcy5iaXRtYXAgPSB0aGlzLmJhY2tncm91bmQudHJhbnNmZXJUb0ltYWdlQml0bWFwKCk7XG4gICAgbGV0IHBpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaXRjaFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwaXRjaC5oZWlnaHQgPSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xuICAgIHBpdGNoLndpZHRoID0gdGhpcy5iYWNrZ3JvdW5kLndpZHRoO1xuICAgIHRoaXMuYmFja2dyb3VuZEN0eCA9IHBpdGNoLmdldENvbnRleHQoXG4gICAgICBcImJpdG1hcHJlbmRlcmVyXCJcbiAgICApIGFzIEltYWdlQml0bWFwUmVuZGVyaW5nQ29udGV4dDtcbiAgICB0aGlzLmJhY2tncm91bmRDdHgudHJhbnNmZXJGcm9tSW1hZ2VCaXRtYXAodGhpcy5iaXRtYXApO1xuXG4gICAgdGhpcy5mb3JlZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmZvcmVncm91bmQuaWQgPSBcImZvcmVncm91bmRcIjtcbiAgICB0aGlzLmZvcmVncm91bmQud2lkdGggPSA5MDA7XG4gICAgdGhpcy5mb3JlZ3JvdW5kLmhlaWdodCA9IHRoaXMuYmFja2dyb3VuZC5oZWlnaHQ7XG4gICAgcGl0Y2guaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgdGhpcy5mb3JlZ3JvdW5kKTtcblxuICAgIHRoaXMudXBkYXRlX2Nsb2NrKCk7XG4gIH1cblxuICB1cGRhdGVfY2xvY2soKSB7XG4gICAgXG4gICAgY29uc3QgY2xvY2s6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIik7XG4gICAgaWYgKGNsb2NrKSB7XG4gICAgICBjbG9jay5pbm5lckhUTUwgPSB0aGlzLmZtdF9zZWNvbmRzKHRoaXMudGltZSk7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNsb2NrLmlubmVySFRNTCA9IHRoaXMuZm10X3NlY29uZHModGhpcy50aW1lKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGZtdF9zZWNvbmRzKHNlY29uZHM6IG51bWJlcikge1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgY29uc3Qgc2VjcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgICAvLyBwYWQgc2Vjb25kcyB3aXRoIDAgaWYgbGVzcyB0aGFuIDEwXG4gICAgaWYgKHNlY3MgPCAxMCkge1xuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9OjAke3NlY3N9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjc31gO1xuICB9XG5cbiAgcGxheWVyc19kZWNpZGUoKSB7XG4gICAgdGhpcy5hd2F5LnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLmRlY2lkZV9hY3Rpb24odGhpcyk7XG4gICAgfSk7XG4gICAgdGhpcy5ob21lLnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLmRlY2lkZV9hY3Rpb24odGhpcyk7XG4gICAgfSk7XG4gICAgXG4gIH1cblxuICAvLyB1cGRhdGUgYmFsbCBwb3NzZXNzaW9uXG4gIHVwZGF0ZV9wb3NzZXNzaW9uKCkge1xuICAgIGxldCBjbG9zZXN0ID0gdGhpcy5jbG9zZXN0X3RvX2JhbGwoKTtcbiAgICAgICAgXG4gICAgLy8gaWYgdGhlIGJhbGwgaXMgbW9yZSB0aGFuIDJtIGF3YXkgZnJvbSBhbnkgcGxheWVycyxcbiAgICAvLyBwb3NzZXNzaW9uIGlzIG51bGxcbiAgICBpZiAoZGlzdChjbG9zZXN0WzBdLmxvYywgdGhpcy5iYWxsX3BvcykgPiAyICYmIGRpc3QoY2xvc2VzdFsxXS5sb2MsIHRoaXMuYmFsbF9wb3MpID4gMiB8fCB0aGlzLmJhbGxfcG9zLnogPiAyKSB7XG4gICAgICB0aGlzLnBsYXllcl9wb3NzZXNzaW9uID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0X3Bvc3Nlc3Npb24obnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xvc2VzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBkaXN0KGEubG9jLCB0aGlzLmJhbGxfcG9zKSAtIGRpc3QoYi5sb2MsIHRoaXMuYmFsbF9wb3MpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXllcl9wb3NzZXNzaW9uID0gY2xvc2VzdFswXTtcbiAgICAgIHRoaXMuc2V0X3Bvc3Nlc3Npb24oY2xvc2VzdFswXS50ZWFtKTtcblxuICAgIH1cbiAgfVxuXG4gIGNsb3Nlc3RfdG9fYmFsbCgpIHtcbiAgICBsZXQgY2xvc2VzdDpQbGF5ZXJPblBpdGNoW10gPSBbXTtcblxuICAgIGxldCB0ZW1wOiBQbGF5ZXJPblBpdGNoID0gdGhpcy5ob21lLnBsYXllcnNPblBpdGNoWzBdO1xuICAgIGxldCBtaW5fZGlzdCA9IDEwMDA7XG4gICAgZm9yIChsZXQgcCBvZiB0aGlzLmhvbWUucGxheWVyc09uUGl0Y2gpIHtcbiAgICAgIGxldCBkID0gZGlzdChwLmxvYywgdGhpcy5iYWxsX3Bvcyk7XG4gICAgICBpZiAoZCA8IG1pbl9kaXN0KSB7XG4gICAgICAgIHRlbXAgPSBwO1xuICAgICAgICBtaW5fZGlzdCA9IGQ7XG4gICAgICB9XG4gICAgfVxuICAgIGNsb3Nlc3QucHVzaCh0ZW1wKTtcbiAgICBtaW5fZGlzdCA9IDEwMDA7XG4gICAgZm9yIChsZXQgcCBvZiB0aGlzLmF3YXkucGxheWVyc09uUGl0Y2gpIHtcbiAgICAgIGxldCBkID0gZGlzdChwLmxvYywgdGhpcy5iYWxsX3Bvcyk7XG4gICAgICBpZiAoZCA8IG1pbl9kaXN0KSB7XG4gICAgICAgIHRlbXAgPSBwO1xuICAgICAgICBtaW5fZGlzdCA9IGQ7XG4gICAgICB9XG4gICAgfVxuICAgIGNsb3Nlc3QucHVzaCh0ZW1wKTtcblxuICAgIHJldHVybiBjbG9zZXN0O1xuXG4gIH1cblxuICBjb2xsaXNpb25fZGV0ZWN0aW9uKCkge1xuICAgIC8vIHR3byBwbGF5ZXJzIGNhbid0IG9jY3VweSB0aGUgc2FtZSBzcGFjZVxuXG4gICAgbGV0IHJhZGl1cyA9IDAuODtcblxuICAgIGZvciAobGV0IHAgb2YgdGhpcy5wbGF5ZXJzT25QaXRjaCkge1xuICAgICAgZm9yIChsZXQgcSBvZiB0aGlzLnBsYXllcnNPblBpdGNoXG4gICAgICAgIC5maWx0ZXIoKHBsYXllcikgPT4ge1xuICAgICAgICAgIHJldHVybiBwbGF5ZXIgIT0gcDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgbGV0IGQgPSBkaXN0KHAubG9jLCBxLmxvYyk7XG4gICAgICAgIGlmIChkIDwgcmFkaXVzKSB7XG4gICAgICAgICAgLy8gY29sbGlzaW9uXG4gICAgICAgICAgLy8gbW92ZSBwIGFuZCBxIGFwYXJ0XG4gICAgICAgICAgcC5sb2MueCArPSAocC5sb2MueCAtIHEubG9jLngpIC84O1xuICAgICAgICAgIHAubG9jLnkgKz0gKHAubG9jLnkgLSBxLmxvYy55KSAvODtcbiAgICAgICAgICBxLmxvYy54ICs9IChxLmxvYy54IC0gcC5sb2MueCkgLzg7XG4gICAgICAgICAgcS5sb2MueSArPSAocS5sb2MueSAtIHAubG9jLnkpIC84O1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwbGF5ZXIgY2FuJ3QgZ28gb2ZmIHRoZSBzY3JlZW5cbiAgICBmb3IgKGxldCBwIG9mIHRoaXMucGxheWVyc09uUGl0Y2gpIHtcbiAgICAgIGlmIChwLmxvYy54IDwgMCkge1xuICAgICAgICBwLmxvYy54ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChwLmxvYy54ID4gdGhpcy52ZW51ZS5sZW5ndGgpIHtcbiAgICAgICAgcC5sb2MueCA9IHRoaXMudmVudWUubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHAubG9jLnkgPCAwKSB7XG4gICAgICAgIHAubG9jLnkgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHAubG9jLnkgPiB0aGlzLnZlbnVlLndpZHRoKSB7XG4gICAgICAgIHAubG9jLnkgPSB0aGlzLnZlbnVlLndpZHRoO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gYmFsbCBjYW4ndCBiZSBpbnNpZGUgYSBwbGF5ZXJcbiAgICBsZXQgYmFsbF9yYWRpdXMgPSAwLjIyO1xuICAgIGZvciAobGV0IHAgb2YgdGhpcy5wbGF5ZXJzT25QaXRjaCkge1xuICAgICAgbGV0IGQgPSBkaXN0KHAubG9jLCB0aGlzLmJhbGxfcG9zKTtcbiAgICAgIGlmIChkIDwgYmFsbF9yYWRpdXMpIHtcbiAgICAgICAgLy8gY29sbGlzaW9uXG4gICAgICAgIC8vbW92ZSBiYWxsIGF3YXkgZnJvbSBwbGF5ZXJcbiAgICAgICAgdGhpcy5iYWxsX3Bvcy54ICs9ICh0aGlzLmJhbGxfcG9zLnggLSBwLmxvYy54KSAvIDI7XG4gICAgICAgIHRoaXMuYmFsbF9wb3MueSArPSAodGhpcy5iYWxsX3Bvcy55IC0gcC5sb2MueSkgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHRoZSBiYWxsIGNyb3NzZXMgdGhlIHRvdWNoIGxpbmVcbiAgICBpZiAodGhpcy5iYWxsX3Bvcy54IDwgMCkge1xuICAgICAgLy8gY2hlY2sgaWYgaXQgY3Jvc3NlcyB0aGUgZ29hbCBsaW5lXG4gICAgICBpZiAodGhpcy5iYWxsX3Bvcy55ID4gdGhpcy52ZW51ZS53aWR0aC8yIC0gNy4zMi8yICYmIHRoaXMuYmFsbF9wb3MueSA8IHRoaXMudmVudWUud2lkdGgvMiArIDcuMzIvMikge1xuICAgICAgICAvLyBnb2FsXG4gICAgICAgIGxldCB0ZWFtX3Njb3JlZDpUZWFtO1xuICAgICAgICBpZiAodGhpcy5ob21lLmF0dGFja2luZ19kaXJlY3Rpb249PVwibGVmdFwiKSB7XG4gICAgICAgICAgdGVhbV9zY29yZWQgPSB0aGlzLmhvbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGVhbV9zY29yZWQgPSB0aGlzLmF3YXk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nb2FsKHRlYW1fc2NvcmVkKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5ob21lLmF0dGFja2luZ19kaXJlY3Rpb249PVwibGVmdFwiKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYmFsbF9sYXN0X3RvdWNoID09IHRoaXMuYXdheSkge1xuICAgICAgICAgICAgLy8gY29ybmVyXG4gICAgICAgICAgICAvLyBzaWRlIG9mIHRoZSBwaXRjaFxuICAgICAgICAgICAgaWYgKHRoaXMuYmFsbF9wb3MueSA+IHRoaXMudmVudWUud2lkdGgvMikge1xuICAgICAgICAgICAgICB0aGlzLmNvcm5lcih0aGlzLmhvbWUsIFwicmlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jb3JuZXIodGhpcy5ob21lLCBcImxlZnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZ29hbCBraWNrXG4gICAgICAgICAgICB0aGlzLmdvYWxfa2ljayh0aGlzLmF3YXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5iYWxsX2xhc3RfdG91Y2ggPT0gdGhpcy5ob21lKSB7XG4gICAgICAgICAgICAvLyBjb3JuZXJcbiAgICAgICAgICAgIC8vIHNpZGUgb2YgdGhlIHBpdGNoXG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsX3Bvcy55ID4gdGhpcy52ZW51ZS53aWR0aC8yKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29ybmVyKHRoaXMuYXdheSwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNvcm5lcih0aGlzLmF3YXksIFwibGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBnb2FsIGtpY2tcbiAgICAgICAgICAgIHRoaXMuZ29hbF9raWNrKHRoaXMuaG9tZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ29hbCh0ZWFtOlRlYW0pIHtcbiAgICB0aGlzLmJhbGxfcG9zID0ge1xuICAgICAgeDogdGhpcy52ZW51ZS5sZW5ndGgvMixcbiAgICAgIHk6IHRoaXMudmVudWUud2lkdGgvMixcbiAgICAgIHo6IDBcbiAgICB9O1xuICAgIGlmICh0ZWFtID09IHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lX2dvYWxzKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hd2F5X2dvYWxzKys7XG4gICAgfVxuICAgIHRoaXMuYmFsbF9sYXN0X3RvdWNoID0gbnVsbDtcbiAgICB0aGlzLmRvX2tpY2tvZmYoKTtcbiAgfVxuXG4gIG1vdmVfYmFsbCgpIHtcbiAgICB0aGlzLmJhbGxfcG9zLnggKz0gdGhpcy5iYWxsX2R4LzYwO1xuICAgIHRoaXMuYmFsbF9wb3MueSArPSB0aGlzLmJhbGxfZHkvNjA7XG4gICAgdGhpcy5iYWxsX3Bvcy56ICs9IHRoaXMuYmFsbF9kei82MDtcbiAgICBjb25zdCByZXN0aXR1dGlvbiA9IDAuODtcbiAgICBsZXQgYV96ID0gLTkuODE7XG4gICAgbGV0IGFpcl9kZW5zaXR5ID0gMS4yO1xuICAgIGxldCBkcmFnX2NvZWZmaWNpZW50ID0gMC40NztcbiAgICBsZXQgYXJlYSA9IE1hdGguUEkgKiAwLjExICogMC4xMTtcbiAgICBsZXQgdmVsb2NpdHkgPSBNYXRoLnNxcnQodGhpcy5iYWxsX2R4KnRoaXMuYmFsbF9keCArIHRoaXMuYmFsbF9keSp0aGlzLmJhbGxfZHkpO1xuICAgIGxldCBhX3ggPSAtMC41ICogYWlyX2RlbnNpdHkgKiBkcmFnX2NvZWZmaWNpZW50ICogYXJlYSAqIHZlbG9jaXR5ICogdGhpcy5iYWxsX2R4O1xuICAgIGxldCBhX3kgPSAtMC41ICogYWlyX2RlbnNpdHkgKiBkcmFnX2NvZWZmaWNpZW50ICogYXJlYSAqIHZlbG9jaXR5ICogdGhpcy5iYWxsX2R5O1xuICAgIGlmICh0aGlzLmJhbGxfcG9zLnogPiAwKSB7XG4gICAgICBpZiAodGhpcy5iYWxsX3Bvcy56ID4gMC4yNSkge1xuICAgICAgICB0aGlzLmJhbGxfYm91bmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGFfeiArPSAtMC41ICogYWlyX2RlbnNpdHkgKiBkcmFnX2NvZWZmaWNpZW50ICogYXJlYSAqIHZlbG9jaXR5ICogdGhpcy5iYWxsX2R6O1xuICAgICAgdGhpcy5iYWxsX2R6ICs9IGFfei82MDtcbiAgICAgIHRoaXMuYmFsbF9keCA9IE1hdGguc2lnbih0aGlzLmJhbGxfZHgpICogTWF0aC5zcXJ0KHRoaXMuYmFsbF9keCp0aGlzLmJhbGxfZHggKyBhX3gvNjApO1xuICAgICAgdGhpcy5iYWxsX2R5ID0gTWF0aC5zaWduKHRoaXMuYmFsbF9keSkgKiBNYXRoLnNxcnQodGhpcy5iYWxsX2R5KnRoaXMuYmFsbF9keSArIGFfeS82MCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGZyaWN0aW9uID0gMC4wMDc7XG4gICAgICB0aGlzLmJhbGxfZHggLT0gZnJpY3Rpb24qdGhpcy5iYWxsX2R4O1xuICAgICAgdGhpcy5iYWxsX2R5IC09IGZyaWN0aW9uKnRoaXMuYmFsbF9keTtcbiAgICAgIHRoaXMuYmFsbF9keCArPSBhX3gvNjA7XG4gICAgICB0aGlzLmJhbGxfZHkgKz0gYV95LzYwO1xuICAgICAgaWYgKHRoaXMuYmFsbF9ib3VuY2UpIHtcbiAgICAgICAgdGhpcy5iYWxsX2R6ID0gLXRoaXMuYmFsbF9keiAqIDAuODtcbiAgICAgICAgdGhpcy5iYWxsX2JvdW5jZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBcblxuICB9XG5cbiAgbW92ZV9wbGF5ZXJzKCkge1xuICAgIHRoaXMuaG9tZS5wbGF5ZXJzT25QaXRjaC5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5tb3ZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5hd2F5LnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLm1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdfYWdlbnRzKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmZvcmVncm91bmQ/LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAodGhpcy5mb3JlZ3JvdW5kKSB7XG4gICAgICBjdHg/LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmZvcmVncm91bmQud2lkdGgsIHRoaXMuZm9yZWdyb3VuZC5oZWlnaHQpO1xuICAgICAgdGhpcy5kcmF3X2JhbGwoKTtcbiAgICAgIHRoaXMuZHJhd19wbGF5ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd19iYWxsKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBsZXQgY3R4ID0gdGhpcy5mb3JlZ3JvdW5kPy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBpZiAodGhpcy5mb3JlZ3JvdW5kKSB7XG5cbiAgICAgICAgY29uc3QgcGl0Y2hPZmZzZXQgPSA1MDtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmJhY2tncm91bmQud2lkdGggLSAyICogcGl0Y2hPZmZzZXQ7XG4gICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCAtIDIgKiBwaXRjaE9mZnNldDtcbiAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBsZXQgeCA9ICh0aGlzLmJhbGxfcG9zLnggLyB0aGlzLnZlbnVlLmxlbmd0aCkgKiBsZW5ndGggKyBwaXRjaE9mZnNldDtcbiAgICAgICAgICAgIGxldCB5ID0gKHRoaXMuYmFsbF9wb3MueSAvIHRoaXMudmVudWUud2lkdGgpICogd2lkdGggKyBwaXRjaE9mZnNldDtcblxuICAgICAgICAgICAgLy8gaWYgeiBpcyBsYXJnZXIgdGhhbiB0aGUgcmFkaXVzIHNob3VsZCBiZSBsYXJnZXJcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSAzLjQ7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsX3Bvcy56ID4gMCkge1xuICAgICAgICAgICAgICByYWRpdXMgKz0gdGhpcy5iYWxsX3Bvcy56O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cy0xLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0X3ggPSAodGhpcy5iYWxsX3RhcmdldC54L3RoaXMudmVudWUubGVuZ3RoKSpsZW5ndGggKyBwaXRjaE9mZnNldDtcbiAgICAgICAgICAgIGxldCB0YXJnZXRfeSA9ICh0aGlzLmJhbGxfdGFyZ2V0LnkvdGhpcy52ZW51ZS53aWR0aCkqd2lkdGggKyBwaXRjaE9mZnNldDtcblxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGFyZ2V0X3gsIHRhcmdldF95LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdfcGxheWVycygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgbGV0IGN0eCA9IHRoaXMuZm9yZWdyb3VuZD8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgaWYgKHRoaXMuZm9yZWdyb3VuZCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcGl0Y2hPZmZzZXQgPSA1MDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuYmFja2dyb3VuZC53aWR0aCAtIDIgKiBwaXRjaE9mZnNldDtcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCAtIDIgKiBwaXRjaE9mZnNldDtcbiAgICAgICAgdGhpcy5ob21lLnBsYXllcnNPblBpdGNoLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICAgIGxldCB4ID0gKHBsYXllci5sb2MueCAvIHRoaXMudmVudWUubGVuZ3RoKSAqIGxlbmd0aCArIHBpdGNoT2Zmc2V0O1xuICAgICAgICAgIGxldCB5ID0gKHBsYXllci5sb2MueSAvIHRoaXMudmVudWUud2lkdGgpICogd2lkdGggKyBwaXRjaE9mZnNldDtcbiAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCA0LjQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIDMuNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF3YXkucGxheWVyc09uUGl0Y2guZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgbGV0IHggPSAocGxheWVyLmxvYy54IC8gdGhpcy52ZW51ZS5sZW5ndGgpICogbGVuZ3RoICsgcGl0Y2hPZmZzZXQ7XG4gICAgICAgICAgbGV0IHkgPSAocGxheWVyLmxvYy55IC8gdGhpcy52ZW51ZS53aWR0aCkgKiB3aWR0aCArIHBpdGNoT2Zmc2V0O1xuICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIDUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIDQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgXG4gICAgdGhpcy50aW1lICs9IDEgLyA2MDtcbiAgICB0aGlzLnRpY2tzICs9IDE7XG4gICAgaWYgKHRoaXMudGlja3MgPT0gMTApIHtcbiAgICAgIHRoaXMudXBkYXRlX3Bvc3Nlc3Npb24oKTtcbiAgICAgIC8vIGh1bWFuIHJlYWN0aW9uIHRpbWUgaXMgcm91Z2hseVxuICAgICAgLy8gYSBzaXh0aCBvZiBhIHNlY29uZCBzbyBvbmx5XG4gICAgICAvLyB1cGRhdGUgZXZlcnkgMTAgdGlja3NcbiAgICAgIHRoaXMudGlja3MgPSAwO1xuICAgICAgdGhpcy5wbGF5ZXJzX2RlY2lkZSgpO1xuICAgIH1cbiAgICB0aGlzLmRyYXdfYWdlbnRzKCk7XG4gICAgdGhpcy5jb2xsaXNpb25fZGV0ZWN0aW9uKCk7XG4gICAgdGhpcy5tb3ZlX3BsYXllcnMoKTtcbiAgICB0aGlzLm1vdmVfYmFsbCgpO1xuICBcbiAgfVxuXG4gIGdldEtpY2tvZmZQbGF5ZXIodGVhbTogVGVhbSkge1xuICAgIGxldCBwbGF5ZXJzID0gdGVhbS5wbGF5ZXJzT25QaXRjaDtcblxuICAgIC8vIGlmIHRlYW0gaGFzIHN0cmlrZXJcbiAgICBwbGF5ZXJzID0gcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4ge1xuICAgICAgcmV0dXJuIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJTVFwiO1xuICAgIH0pO1xuICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gY2hvb3NlIHRoZSBvbmUgd2l0aCBiZXR0ZXIgcGFzc2luZ1xuICAgICAgICBwbGF5ZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYS5nZXRfYXR0cmlidXRlKFwicGFzc2luZ1wiKSAtIGIuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hvb3NlIG1vc3QgYXR0YWNraW5nIHBsYXllclxuICAgICAgcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJMV1wiIHx8XG4gICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIlJXXCJcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgLy8gY2hvb3NlIHRoZSBvbmUgd2l0aCBiZXR0ZXIgcGFzc2luZ1xuICAgICAgICAgIHBsYXllcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIikgLSBiLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGF5ZXJzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiQ0FNXCIgfHxcbiAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJMQU1cIiB8fFxuICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIlJBTVwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBjaG9vc2UgdGhlIG9uZSB3aXRoIGJldHRlciBwYXNzaW5nXG4gICAgICAgICAgICBwbGF5ZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIikgLSBiLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwbGF5ZXJzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJDTVwiIHx8XG4gICAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJMTVwiIHx8XG4gICAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJSTVwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgLy8gY2hvb3NlIHRoZSBvbmUgd2l0aCBiZXR0ZXIgcGFzc2luZ1xuICAgICAgICAgICAgICBwbGF5ZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5nZXRfYXR0cmlidXRlKFwicGFzc2luZ1wiKSAtIGIuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBsYXllcnNbMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiQ0RNXCIgfHxcbiAgICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiTENNXCIgfHxcbiAgICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiQ01cIiB8fFxuICAgICAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJSQ01cIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBjaG9vc2UgdGhlIG9uZSB3aXRoIGJldHRlciBwYXNzaW5nXG4gICAgICAgICAgICAgICAgcGxheWVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBhLmdldF9hdHRyaWJ1dGUoXCJwYXNzaW5nXCIpIC0gYi5nZXRfYXR0cmlidXRlKFwicGFzc2luZ1wiKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uLmFiYnJldmlhdGlvbiA9PSBcIkNETVwiIHx8XG4gICAgICAgICAgICAgICAgICBwbGF5ZXIucG9zaXRpb24uYWJicmV2aWF0aW9uID09IFwiTERNXCIgfHxcbiAgICAgICAgICAgICAgICAgIHBsYXllci5wb3NpdGlvbi5hYmJyZXZpYXRpb24gPT0gXCJSRE1cIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgLy8gY2hvb3NlIHRoZSBvbmUgd2l0aCBiZXR0ZXIgcGFzc2luZ1xuICAgICAgICAgICAgICAgICAgcGxheWVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgYS5nZXRfYXR0cmlidXRlKFwicGFzc2luZ1wiKSAtIGIuZ2V0X2F0dHJpYnV0ZShcInBhc3NpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBwbGF5ZXJzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldF9wb3NzZXNzaW9uKHRlYW06IFRlYW18bnVsbCkge1xuICAgIFxuICAgIGlmICh0ZWFtIGluc3RhbmNlb2YgVGVhbSkge1xuICAgICAgdGhpcy5wb3NzZXNzaW9uID0gdGVhbTtcbiAgICAgIHRoaXMub3V0T2ZQb3NzZXNzaW9uID0gdGVhbSA9PSB0aGlzLmhvbWUgPyB0aGlzLmF3YXkgOiB0aGlzLmhvbWU7XG4gICAgICB0aGlzLmJhbGxfbGFzdF90b3VjaCA9IHRlYW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGw7XG4gICAgICB0aGlzLm91dE9mUG9zc2Vzc2lvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZG9fa2lja29mZih0ZWFtPzogbnVtYmVyLCBoYWxmPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmICh0ZWFtPT1udWxsKSB7XG4gICAgICBsZXQgdGVhbSA9IDA7XG4gICAgfVxuICAgIGlmICghaGFsZikge1xuICAgICAgaWYgKHJhbmQgPCAwLjUpIHtcbiAgICAgICAgdGhpcy5zZXRfcG9zc2Vzc2lvbih0aGlzLmhvbWUpO1xuICAgICAgICB0aGlzLnRlYW1fa2lja2VkX29mZl9maXJzdCA9IHRoaXMuaG9tZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0X3Bvc3Nlc3Npb24odGhpcy5hd2F5KTtcbiAgICAgICAgdGVhbSA9IDE7XG4gICAgICAgIHRoaXMudGVhbV9raWNrZWRfb2ZmX2ZpcnN0ID0gdGhpcy5hd2F5O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50ZWFtX2tpY2tlZF9vZmZfZmlyc3QgPT0gdGhpcy5ob21lKSB7XG4gICAgICAgIHRoaXMuc2V0X3Bvc3Nlc3Npb24odGhpcy5hd2F5KTtcbiAgICAgICAgdGVhbSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldF9wb3NzZXNzaW9uKHRoaXMuaG9tZSk7XG4gICAgICAgIHRlYW0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdCA9IHRlYW0gPT0gMCA/IHRoaXMuaG9tZSA6IHRoaXMuYXdheTtcbiAgICBsZXQgbyA9IHRlYW0gPT0gMCA/IHRoaXMuYXdheSA6IHRoaXMuaG9tZTtcbiAgICBjb25zdCBwMSA9IHRoaXMuZ2V0S2lja29mZlBsYXllcih0KTtcbiAgICBwMS5sb2MueCA9IHRoaXMudmVudWUuZGltZW5zaW9ucy5raWNrb2ZmX3Nwb3QueDtcbiAgICBpZiAocDEudGVhbS5hdHRhY2tpbmdfZGlyZWN0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICBwMS5sb2MueCAtPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwMS5sb2MueCArPSAxO1xuICAgIH1cbiAgICBwMS5sb2MueSA9IHRoaXMudmVudWUuZGltZW5zaW9ucy5raWNrb2ZmX3Nwb3QueTtcbiAgICB0aGlzLnBsYXllcl9wb3NzZXNzaW9uID0gcDE7XG4gICAgLy90aGlzLnBsYXllcl9wb3NzZXNzaW9uLnBhc3ModCwgbyk7XG4gICAgdGhpcy5iYWxsX2R4ID0gMTtcbiAgICB0aGlzLmJhbGxfZHkgPSAxO1xuICAgIHRoaXMuYmFsbF9keiA9IDA7XG4gIH1cblxuICBhc3luYyBwbGF5KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShcbiAgICAgIG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPihbXG4gICAgICAgIFtcImV4dHJhX3RpbWVcIiwgZmFsc2VdLFxuICAgICAgICBbXCJwZW5hbHRpZXNcIiwgZmFsc2VdLFxuICAgICAgXSlcbiAgICApO1xuICAgIHdoaWxlICh0aGlzLmhhbGYgPT0gMSAmJiB0aGlzLnRpbWUgPCB0aGlzLm1heF8xc3RfaGFsZl90aW1lKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICB0aGlzLmRvX2tpY2tvZmYoZmFsc2UpO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbGV0IG5vdyA9IERhdGVUaW1lLm5vdygpO1xuICAgICAgdGhpcy50aWNrKCk7XG4gICAgICBpZiAoRGF0ZVRpbWUubm93KCkuZGlmZihub3cpLm1pbGxpc2Vjb25kcyA8IDEwMDAgLyA2MCkge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAgLyA2MCAtIERhdGVUaW1lLm5vdygpLmRpZmYobm93KS5taWxsaXNlY29uZHMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaGFsZiA9IDI7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgd2hpbGUgKHRoaXMuaGFsZiA9PSAyICYmIHRoaXMudGltZSA8IHRoaXMubWF4XzJuZF9oYWxmX3RpbWUpIHtcbiAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgIHRoaXMuZG9fa2lja29mZih0cnVlKTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBub3cgPSBEYXRlVGltZS5ub3coKTtcbiAgICAgIHRoaXMudGljaygpO1xuICAgICAgaWYgKERhdGVUaW1lLm5vdygpLmRpZmYobm93KS5taWxsaXNlY29uZHMgPCAxMDAwIC8gNjApIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCAxMDAwIC8gNjAgLSBEYXRlVGltZS5ub3coKS5kaWZmKG5vdykubWlsbGlzZWNvbmRzKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wb3NzaWJsZV9leHRyYV90aW1lKSB7XG4gICAgICBpZiAodGhpcy5ob21lX2dvYWxzID09IHRoaXMuYXdheV9nb2Fscykge1xuICAgICAgICB0aGlzLmV4dHJhX3RpbWVfaGFsZiA9IDE7XG4gICAgICAgIHRoaXMuaXNfZXh0cmFfdGltZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgdGhpcy5leHRyYV90aW1lX2hhbGYgPT0gMSAmJlxuICAgICAgICAgIHRoaXMudGltZSA8IHRoaXMubWF4XzFzdF9oYWxmX2V4dHJhX3RpbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9fa2lja29mZihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbm93ID0gRGF0ZVRpbWUubm93KCk7XG4gICAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgICAgaWYgKERhdGVUaW1lLm5vdygpLmRpZmYobm93KS5taWxsaXNlY29uZHMgPCAxMDAwIC8gNjApIHtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PlxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgMTAwMCAvIDYwIC0gRGF0ZVRpbWUubm93KCkuZGlmZihub3cpLm1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4dHJhX3RpbWVfaGFsZiA9IDI7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgdGhpcy5leHRyYV90aW1lX2hhbGYgPT0gMiAmJlxuICAgICAgICAgIHRoaXMudGltZSA8IHRoaXMubWF4XzJuZF9oYWxmX2V4dHJhX3RpbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9fa2lja29mZih0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBub3cgPSBEYXRlVGltZS5ub3coKTtcbiAgICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgICBpZiAoRGF0ZVRpbWUubm93KCkuZGlmZihub3cpLm1pbGxpc2Vjb25kcyA8IDEwMDAgLyA2MCkge1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAxMDAwIC8gNjAgLSBEYXRlVGltZS5ub3coKS5kaWZmKG5vdykubWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0IHtcbiAgcGxheWVyX3N0YXRzOlBsYXllck1hdGNoU3RhdHM7XG5cbiAgY29uc3RydWN0b3IgKG1hdGNoOk1hdGNofFNpbU1hdGNoKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHRoaXMucGxheWVyX3N0YXRzID0gbmV3IFBsYXllck1hdGNoU3RhdHMoKTtcbiAgICBmb3IgKGxldCBfIG9mIG1hdGNoLnBsYXllcnNPblBpdGNoKSB7XG4gICAgICB0aGlzLnBsYXllcl9zdGF0cy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZWNvcmQoc3RhdDpzdHJpbmcsIHR5cGU6UGxheWVyfFRlYW0pIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgLy8gcmVjb3JkIHBsYXllciBzdGF0XG4gICAgICB0aGlzLnBsYXllcl9zdGF0cy5yZWNvcmQoc3RhdCk7XG5cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgUGxheWVyTWF0Y2hTdGF0cyB7XG4gIF9pZDogbnVtYmVyO1xuICBfc3RhdHM6IE1hcDxudW1iZXIsIFBsYXllclN0YXRzPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pZCA9IDA7XG4gICAgdGhpcy5fc3RhdHMgPSBuZXcgTWFwKCk7XG4gIH1cbiAgcHVzaChpZDpudW1iZXIpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX3N0YXRzLnNldChpZCx7XG4gICAgICBnb2FsczogMCxcbiAgICAgIGFzc2lzdHM6IDAsXG4gICAgICBwYXNzZXNfYXR0ZW1wdGVkOiAwLFxuICAgICAgcGFzc2VzX2NvbXBsZXRlZDogMCxcbiAgICAgIHNob3RzOiAwLFxuICAgICAgc2hvdHNfb25fdGFyZ2V0OiAwLFxuICAgICAgdGFja2xlc19hdHRlbXB0ZWQ6IDAsXG4gICAgICB0YWNrbGVzX2NvbXBsZXRlZDogMCxcbiAgICAgIGludGVyY2VwdGlvbnM6IDAsXG4gICAgICBmb3VsczogMCxcbiAgICAgIGZvdWxzX3N1ZmZlcmVkOiAwLFxuICAgICAgeWVsbG93X2NhcmRzOiAwLFxuICAgICAgcmVkX2NhcmRzOiAwLFxuICAgICAgc2F2ZXM6IDAsXG4gICAgICBnb2Fsc19jb25jZWRlZDogMCxcbiAgICAgIGNsZWFuX3NoZWV0czogMCxcbiAgICAgIHBlbmFsdGllc19zY29yZWQ6IDAsXG4gICAgICBwZW5hbHRpZXNfbWlzc2VkOiAwLFxuICAgICAgcGVuYWx0aWVzX3NhdmVkOiAwLFxuICAgICAgb3duX2dvYWxzOiAwLFxuICAgICAgbWludXRlc19wbGF5ZWQ6IDAsXG4gICAgICB4RzogMCxcbiAgICAgIHhBOiAwLFxuICAgIH0pO1xuICB9XG5cbiAgcmVjb3JkKHN0YXQ6c3RyaW5nKSB7XG4gICAgbGV0IHMgPSB0aGlzLl9zdGF0cy5nZXQodGhpcy5faWQpO1xuICAgIGlmIChzKSB7XG4gICAgICBpZiAoc3RhdCA9PSBcInBhc3Nlc19hdHRlbXB0ZWRcIikge1xuICAgICAgICBzLnBhc3Nlc19hdHRlbXB0ZWQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ID09IFwicGFzc2VzX2NvbXBsZXRlZFwiKSB7XG4gICAgICAgIHMucGFzc2VzX2NvbXBsZXRlZCArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXQgPT0gXCJzaG90c1wiKSB7XG4gICAgICAgIHMuc2hvdHMgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ID09IFwic2hvdHNfb25fdGFyZ2V0XCIpIHtcbiAgICAgICAgcy5zaG90c19vbl90YXJnZXQgKz0gMTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG59XG5cbiIsImltcG9ydCB7IE1hdGNoLCBUZWFtLCBQbGF5ZXJPblBpdGNoIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgU2ltTWF0Y2ggfSBmcm9tIFwiLi9zaW1fZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyLCBQb3NpdGlvbiwgUm9sZSB9IGZyb20gXCIuL3BlcnNvblwiO1xuaW1wb3J0IHsgQ2l0eSwgQ291bnRyeSwgUGl0Y2hEaW1lbnNpb25zLCBQaXRjaFpvbmUsIFZlbnVlIH0gZnJvbSBcIi4vcGxhY2VcIjtcbmltcG9ydCB7IEF0dHJpYnV0ZSwgT3V0ZmllbGRBdHRyaWJ1dGUsIEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9wZXJzb25cIjtcbmltcG9ydCB7IG1ldGVyc190b19weCB9IGZyb20gXCIuLi9jb21tb24vaGVscGVyc1wiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCB7IFBvbHlnb24sIGF0dHJpYnV0ZV9uYW1lcywgZ2tfYXR0cmlidXRlX25hbWVzIH0gZnJvbSBcIi4uL2NvbW1vbi90eXBlc1wiO1xuXG5jb25zdCBzdGFydF9kYXRlID0gRGF0ZVRpbWUubG9jYWwoMjAyMiw3LDEpO1xuY29uc3QgdGVhbTEgPSBuZXcgVGVhbShcIkJhcmNlbG9uYVwiKTtcbmNvbnN0IHRlYW0yID0gbmV3IFRlYW0oXCJSZWFsIE1hZHJpZFwiKTtcbmNvbnN0IG1hdGNoID0gbmV3IE1hdGNoKCk7XG5jb25zdCB2ZW51ZSA9IG5ldyBWZW51ZSgpO1xudmVudWUucGl0Y2hfZGltZW5zaW9ucyA9IFsxMDUsIDY4XTtcbm1hdGNoLnZlbnVlID0gdmVudWU7XG52ZW51ZS5uYW1lID0gXCJDYW1wIE5vdVwiO1xudmVudWUuY2FwYWNpdHkgPSA5OTM1NDtcbmNvbnN0IGNpdHkgPSBuZXcgQ2l0eSgpO1xuY2l0eS5uYW1lID0gXCJCYXJjZWxvbmFcIjtcbmNvbnN0IGNvdW50cnkgPSBuZXcgQ291bnRyeSgpO1xuY291bnRyeS5uYW1lID0gXCJTcGFpblwiO1xuY2l0eS5jb3VudHJ5ID0gY291bnRyeTtcbnZlbnVlLmNpdHkgPSBjaXR5O1xuXG5sZXQgZGF0ZV90ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLXRleHRcIik7XG5pZiAoZGF0ZV90ZXh0KSB7XG4gIGRhdGVfdGV4dC5pbm5lckhUTUwgPSBzdGFydF9kYXRlLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7XG59XG5cbmNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgeyBuYW1lOiBcIkdvYWxrZWVwZXJcIiwgYWJicmV2aWF0aW9uOiBcIkdLXCIgfSxcbiAgeyBuYW1lOiBcIkxlZnQgQmFja1wiLCBhYmJyZXZpYXRpb246IFwiTEJcIiB9LFxuICB7IG5hbWU6IFwiUmlnaHQgQmFja1wiLCBhYmJyZXZpYXRpb246IFwiUkJcIiB9LFxuICB7IG5hbWU6IFwiUmlnaHQgQ2VudGVyIEJhY2tcIiwgYWJicmV2aWF0aW9uOiBcIlJDQlwiIH0sXG4gIHsgbmFtZTogXCJMZWZ0IENlbnRlciBCYWNrXCIsIGFiYnJldmlhdGlvbjogXCJMQ0JcIiB9LFxuICB7IG5hbWU6IFwiRGVmZW5zaXZlIE1pZGZpZWxkZXJcIiwgYWJicmV2aWF0aW9uOiBcIkRNXCIgfSxcbiAgeyBuYW1lOiBcIlJpZ2h0IENlbnRyYWwgTWlkZmllbGRlclwiLCBhYmJyZXZpYXRpb246IFwiUkNNXCIgfSxcbiAgeyBuYW1lOiBcIkxlZnQgQ2VudHJhbCBNaWRmaWVsZGVyXCIsIGFiYnJldmlhdGlvbjogXCJMQ01cIiB9LFxuICB7IG5hbWU6IFwiTGVmdCBXaW5nZXJcIiwgYWJicmV2aWF0aW9uOiBcIkxXXCIgfSxcbiAgeyBuYW1lOiBcIlJpZ2h0IFdpbmdlclwiLCBhYmJyZXZpYXRpb246IFwiUldcIiB9LFxuICB7IG5hbWU6IFwiU3RyaWtlclwiLCBhYmJyZXZpYXRpb246IFwiU1RcIiB9LFxuXTtcblxubGV0IHBsYXllcnMxOiBQbGF5ZXJPblBpdGNoW10gPSBbXTtcbmxldCBwbGF5ZXJzMjogUGxheWVyT25QaXRjaFtdID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjI7IGkrKykge1xuICBjb25zdCBwID0gbmV3IFBsYXllck9uUGl0Y2goKTtcbiAgcC5uYW1lID0gXCJQbGF5ZXIgXCIgKyBpO1xuICBwLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCk7XG4gIHAucG9zaXRpb24ubmFtZSA9IHBvc2l0aW9uc1tpICUgMTFdLm5hbWU7XG4gIHAucG9zaXRpb24uYWJicmV2aWF0aW9uID0gcG9zaXRpb25zW2kgJSAxMV0uYWJicmV2aWF0aW9uO1xuICBwLmluaXRpYWxpemUoKTtcbiAgaWYgKGkgPCAxMSkge1xuICAgIHBsYXllcnMxLnB1c2gocCk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyczIucHVzaChwKTtcbiAgfVxufVxuXG50ZWFtMS5wbGF5ZXJzT25QaXRjaCA9IHBsYXllcnMxO1xudGVhbTIucGxheWVyc09uUGl0Y2ggPSBwbGF5ZXJzMjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyMjsgaSsrKSB7XG4gIGxldCBwMTogUGxheWVyT25QaXRjaDtcbiAgaWYgKGkgPCAxMSkge1xuICAgIHAxID0gdGVhbTEucGxheWVyc09uUGl0Y2hbaV07XG4gIH0gZWxzZSB7XG4gICAgcDEgPSB0ZWFtMi5wbGF5ZXJzT25QaXRjaFtpIC0gMTFdO1xuICB9XG5cbiAgcDEuYXR0cmlidXRlcyA9IG5ldyBBdHRyaWJ1dGVzKCk7XG5cbiAgbGV0IGlzX2drID0gZmFsc2U7XG4gIGlmIChwMS5wb3NpdGlvbi5uYW1lID09PSBcIkdvYWxrZWVwZXJcIikge1xuICAgIGlzX2drID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXNfZ2spIHtcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGdrX2F0dHJpYnV0ZV9uYW1lcy5sZW5ndGg7IGErKykge1xuICAgICAgcDEuYXR0cmlidXRlcy5zZXRfYXR0cihcbiAgICAgICAgZ2tfYXR0cmlidXRlX25hbWVzW2FdLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMVxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRyaWJ1dGVfbmFtZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgIHAxLmF0dHJpYnV0ZXMuc2V0X2F0dHIoXG4gICAgICAgIGF0dHJpYnV0ZV9uYW1lc1thXSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDFcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmNvbnNvbGUubG9nKFBpdGNoWm9uZS5nZXRfY29vcmRzKDIxKSk7XG5cbnZlbnVlLmluaXRfcGl0Y2hfZGltZW5zaW9ucygpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd19waXRjaChjYW52YXM6IE9mZnNjcmVlbkNhbnZhcykge1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoY3R4KSB7XG4gICAgY29uc3QgbGVuZ3RoID0gODAwO1xuICAgIGNvbnN0IHdpZHRoID0gdmVudWUuZGltZW5zaW9ucy53aWR0aCAqIChsZW5ndGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCk7XG4gICAgY2FudmFzLndpZHRoID0gbGVuZ3RoICsgMTAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aWR0aCArIDEwMDtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBhZTAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwYWUwMFwiO1xuICAgIGN0eC5maWxsUmVjdCg1MCwgNTAsIGxlbmd0aCwgd2lkdGgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMS41O1xuICAgIGN0eC5yZWN0KDUwLCA1MCwgbGVuZ3RoLCB3aWR0aCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gZHJhdyB3aGl0ZSBjZW50ZXIgbGluZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGxlbmd0aCAvIDIgKyA1MCwgNTApO1xuICAgIGN0eC5saW5lVG8obGVuZ3RoIC8gMiArIDUwLCB3aWR0aCArIDUwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBjZW50ZXIgY2lyY2xlXG4gICAgY29uc3QgcmFkaXVzID1cbiAgICAgIChQaXRjaERpbWVuc2lvbnMuY2VudGVyX2NpcmNsZV9yYWRpdXMgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMobGVuZ3RoIC8gMiArIDUwLCB3aWR0aCAvIDIgKyA1MCwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIGRyYXcga2lja29mZiBzcG90XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggLyAyICsgNTAsIHdpZHRoIC8gMiArIDUwLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBwZW5hbHR5IGFyZWFcbiAgICBsZXQgeDEgPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIGxldCB5MSA9XG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIHZlbnVlLmRpbWVuc2lvbnMud2lkdGgpICogd2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KDUwLCB3aWR0aCAvIDIgLSB5MSAvIDIgKyA1MCwgeDEsIHkxKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBwZW5hbHR5IHNwb3RcbiAgICB4MSA9XG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfc3BvdF9kaXN0YW5jZSAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqXG4gICAgICAgIGxlbmd0aCArXG4gICAgICA1MDtcbiAgICB5MSA9IHdpZHRoIC8gMiArIDUwO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgxLCB5MSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIGRyYXcgd2hpdGUgc2l4IHlhcmQgYm94XG4gICAgeDEgPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIHkxID0gKFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCg1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIGRyYXcgd2hpdGUgZ29hbCBhcmVhXG4gICAgeDEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfZGVwdGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgeTEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxSZWN0KDUwIC0geDEsIHdpZHRoIC8gMiAtIHkxIC8gMiArIDUwLCB4MSwgeTEpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCg1MCAtIHgxLCB3aWR0aCAvIDIgLSB5MSAvIDIgKyA1MCwgeDEsIHkxKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvL2RyYXcgY29ybmVyIGFyY1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBvbmVfbWV0ZXIgPSAoMSAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICBjdHguYXJjKDUwLCA1MCwgb25lX21ldGVyLCAwLCAoMSAvIDIpICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vb3RoZXIgY29ybmVyIGFyY1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKDUwLCB3aWR0aCArIDUwLCBvbmVfbWV0ZXIsIDAsICgzIC8gMikgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBvdGhlciBzaWRlXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMobGVuZ3RoICsgNTAsIDUwLCBvbmVfbWV0ZXIsICgxIC8gMikgKiBNYXRoLlBJLCBNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggKyA1MCwgd2lkdGggKyA1MCwgb25lX21ldGVyLCBNYXRoLlBJLCAoMyAvIDIpICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgeDEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfZGVwdGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgeTEgPSAoUGl0Y2hEaW1lbnNpb25zLmdvYWxfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChsZW5ndGggKyA1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIHgxID1cbiAgICAgIChQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X2xlbmd0aCAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICB5MSA9IChQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gdmVudWUuZGltZW5zaW9ucy53aWR0aCkgKiB3aWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QobGVuZ3RoIC0geDEgKyA1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgeDEgPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X3Nwb3RfZGlzdGFuY2UgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKlxuICAgICAgbGVuZ3RoO1xuICAgIHkxID0gd2lkdGggLyAyICsgNTA7XG5cbiAgICBjb25zdCBwZW5fc3BvdDIgPSBbXG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfc3BvdF9kaXN0YW5jZSAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqXG4gICAgICAgIGxlbmd0aCxcbiAgICAgIHdpZHRoIC8gMiArIDUwLFxuICAgIF07XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMobGVuZ3RoIC0geDEgKyA1MCwgeTEsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIHgxID1cbiAgICAgIChQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX2xlbmd0aCAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICB5MSA9IChQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX3dpZHRoIC8gdmVudWUuZGltZW5zaW9ucy53aWR0aCkgKiB3aWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QobGVuZ3RoIC0geDEgKyA1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gcGVuYWx0eSBhcmNzXG4gICAgY29uc3QgcGVuX3JhZGl1cyA9XG4gICAgICAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJjX3JhZGl1cyAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICBsZXQgeCA9XG4gICAgICBsZW5ndGggLVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoICtcbiAgICAgIDUwO1xuXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2lyY3VsYXJfc2VnbWVudCNSYWRpdXNfYW5kX2NlbnRyYWxfYW5nbGVcbiAgICBjb25zdCBjaG9yZF9sZW5ndGggPSAoNS40MTkgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG5cbiAgICB5MSA9IHdpZHRoIC8gMiArIGNob3JkX2xlbmd0aCArIDUwO1xuICAgIGNvbnN0IHkyID0gd2lkdGggLyAyIC0gY2hvcmRfbGVuZ3RoICsgNTA7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5tb3ZlVG8oeCwgeTEpO1xuICAgIGN0eC5hcmNUbyhcbiAgICAgIHggLSBtZXRlcnNfdG9fcHgoMy42NSwgdmVudWUuZGltZW5zaW9ucy5sZW5ndGgsIGxlbmd0aCksXG4gICAgICB3aWR0aCAvIDIgKyA1MCxcbiAgICAgIHgsXG4gICAgICB5MixcbiAgICAgIHBlbl9yYWRpdXNcbiAgICApO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIHggPVxuICAgICAgKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoICtcbiAgICAgIDUwO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkxKTtcbiAgICBjdHguYXJjVG8oXG4gICAgICB4ICsgbWV0ZXJzX3RvX3B4KDMuNjUsIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoLCBsZW5ndGgpLFxuICAgICAgd2lkdGggLyAyICsgNTAsXG4gICAgICB4LFxuICAgICAgeTIsXG4gICAgICBwZW5fcmFkaXVzXG4gICAgKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBkcmF3IG91dGxpbmVzIGFyb3VuZCBwaXRjaCB6b25lc1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlbnVlLmRpbWVuc2lvbnMuem9uZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHpvbmUgPSB2ZW51ZS5kaW1lbnNpb25zLnpvbmVzW2ldO1xuICAgICAgbGV0IHggPSBtZXRlcnNfdG9fcHgoem9uZS5yZWN0LnBvaW50XzEueCwgdmVudWUuZGltZW5zaW9ucy5sZW5ndGgsIGxlbmd0aCk7XG4gICAgICBsZXQgeSA9IG1ldGVyc190b19weCh6b25lLnJlY3QucG9pbnRfMS55LCB2ZW51ZS5kaW1lbnNpb25zLndpZHRoLCB3aWR0aCk7XG4gICAgICBsZXQgdyA9IG1ldGVyc190b19weCh6b25lLnJlY3QucG9pbnRfMi54IC0gem9uZS5yZWN0LnBvaW50XzEueCwgdmVudWUuZGltZW5zaW9ucy5sZW5ndGgsIGxlbmd0aCk7XG4gICAgICBsZXQgaCA9IG1ldGVyc190b19weCh6b25lLnJlY3QucG9pbnRfMi55IC0gem9uZS5yZWN0LnBvaW50XzEueSwgdmVudWUuZGltZW5zaW9ucy53aWR0aCwgd2lkdGgpO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QoeCs1MCwgeSs1MCwgdywgaCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIC8vIGRyYXcgdGhlIG51bWJlciBvZiB0aGUgem9uZSBpbiB0aGUgbWlkZGxlXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgY3R4LmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICAgIGN0eC5maWxsVGV4dChcbiAgICAgICAgaS50b1N0cmluZygpLFxuICAgICAgICB4ICsgdyAvIDIgKyA1MCxcbiAgICAgICAgeSArIGggLyAyICsgNTBcbiAgICAgICk7XG5cbiAgICB9XG4gIH1cbn1cbm1hdGNoLmhvbWUgPSB0ZWFtMTtcbm1hdGNoLmF3YXkgPSB0ZWFtMjtcbm1hdGNoLnBsYXkoKTtcblxuLy9sZXQgYXJlYXMgPSBuZXcgUGl0Y2hBcmVhKCk7XG4vL2xldCBna19hcmVhID0gUGl0Y2hBcmVhLlxuIiwiaW1wb3J0IHsgQ291bnRyeSwgQ2l0eSB9IGZyb20gXCIuL3BsYWNlXCI7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xuXG5jbGFzcyBQZXJzb24ge1xuICBfbmFtZTogc3RyaW5nO1xuICBfZG9iOiBEYXRlVGltZTtcbiAgX25hdGlvbmFsaXRpZXM6IENvdW50cnlbXTtcbiAgX3BsYWNlX29mX2JpcnRoOiBDaXR5O1xuICBfaGVpZ2h0OiBudW1iZXI7XG4gIF93ZWlnaHQ6IG51bWJlcjtcblxuICBzZXQgbmFtZShuYW1lKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBkb2IoZG9iOiBEYXRlVGltZSkge1xuICAgIHRoaXMuX2RvYiA9IGRvYjtcbiAgfVxuXG4gIGdldCBkb2IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYjtcbiAgfVxuXG4gIGNhbGN1bGF0ZV9hZ2Uobm93OiBEYXRlVGltZSkge1xuICAgIC8vIGNhbGN1bGF0ZSBhZ2UgKHllYXJzIGFuZCBkYXlzKVxuICAgIGNvbnNvbGUubG9nKG5vdyk7XG4gICAgY29uc3QgZGlmZiA9IG5vdy5kaWZmKHRoaXMuX2RvYiwgW1wieWVhcnNcIiwgXCJkYXlzXCJdKTtcbiAgICByZXR1cm4gZGlmZi55ZWFycyArIFwiIHllYXJzLCBcIiArIGRpZmYuZGF5cyArIFwiIGRheXNcIjtcbiAgfVxuXG4gIHNldCBuYXRpb25hbGl0aWVzKG5hdGlvbmFsaXRpZXM6IENvdW50cnlbXSkge1xuICAgIHRoaXMuX25hdGlvbmFsaXRpZXMgPSBuYXRpb25hbGl0aWVzO1xuICB9XG5cbiAgZ2V0IG5hdGlvbmFsaXRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGlvbmFsaXRpZXM7XG4gIH1cblxuICBzZXQgcGxhY2Vfb2ZfYmlydGgocGxhY2Vfb2ZfYmlydGg6IENpdHkpIHtcbiAgICB0aGlzLl9wbGFjZV9vZl9iaXJ0aCA9IHBsYWNlX29mX2JpcnRoO1xuICB9XG5cbiAgZ2V0IHBsYWNlX29mX2JpcnRoKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZV9vZl9iaXJ0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICBzZXQgd2VpZ2h0KHdlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2VpZ2h0ID0gd2VpZ2h0O1xuICB9XG5cbiAgZ2V0IHdlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE91dGZpZWxkQXR0cmlidXRlID1cbiAgfCBcInBhY2VcIlxuICB8IFwiYWNjZWxlcmF0aW9uXCJcbiAgfCBcImFnaWxpdHlcIlxuICB8IFwiYWdncmVzc2lvblwiXG4gIHwgXCJiYWxhbmNlXCJcbiAgfCBcImRyaWJibGluZ1wiXG4gIHwgXCJ0ZWNobmlxdWVcIlxuICB8IFwiZmluaXNoaW5nXCJcbiAgfCBcInBhc3NpbmdcIlxuICB8IFwidmlzaW9uXCJcbiAgfCBcInRhY2tsaW5nXCJcbiAgfCBcImhlYWRpbmdcIlxuICB8IFwic3RyZW5ndGhcIlxuICB8IFwic3RhbWluYVwiXG4gIHwgXCJwb3NpdGlvbmluZ1wiXG4gIHwgXCJtb3ZlbWVudFwiXG4gIHwgXCJkZWNpc2lvbnNcIlxuICB8IFwiZmxhaXJcIlxuICB8IFwibmF0dXJhbF9maXRuZXNzXCJcbiAgfCBcIndvcmtfcmF0ZVwiXG4gIHwgXCJkZXRlcm1pbmF0aW9uXCJcbiAgfCBcImxlYWRlcnNoaXBcIlxuICB8IFwidGVhbXdvcmtcIlxuICB8IFwianVtcGluZ1wiXG4gIHwgXCJyZWFjdGlvbnNcIjtcblxuZXhwb3J0IHR5cGUgR29hbGtlZXBlckF0dHJpYnV0ZXMgPVxuICB8IFwiaGFuZGxpbmdcIlxuICB8IFwicmVhY3Rpb25zXCJcbiAgfCBcIm9uZV9vbl9vbmVzXCJcbiAgfCBcInJ1c2hpbmdfb3V0XCJcbiAgfCBcImNvbW11bmljYXRpb25cIlxuICB8IFwiZWNjZW50cmljaXR5XCJcbiAgfCBcInRocm93aW5nXCJcbiAgfCBcImtpY2tpbmdcIlxuICB8IFwidmlzaW9uXCJcbiAgfCBcInBvc2l0aW9uaW5nXCJcbiAgfCBcInBhY2VcIlxuICB8IFwiYWNjZWxlcmF0aW9uXCJcbiAgfCBcInN0cmVuZ3RoXCJcbiAgfCBcImp1bXBpbmdcIlxuICB8IFwic3RhbWluYVwiXG4gIHwgXCJuYXR1cmFsX2ZpdG5lc3NcIlxuICB8IFwiZGV0ZXJtaW5hdGlvblwiXG4gIHwgXCJ3b3JrX3JhdGVcIlxuICB8IFwibGVhZGVyc2hpcFwiXG4gIHwgXCJ0ZWFtd29ya1wiO1xuXG5leHBvcnQgdHlwZSBBdHRyaWJ1dGUgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgX2F0dHJpYnV0ZXM6IE1hcDxzdHJpbmcsIG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gIH1cblxuICBzZXQgYXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBNYXA8c3RyaW5nLCBudW1iZXI+KSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gIH1cblxuICBnZXQgYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlcztcbiAgfVxuXG4gIGdldF9hdHRyKG5hbWU6IHN0cmluZykgOiBudW1iZXIge1xuICAgIGxldCByZXQgPSB0aGlzLl9hdHRyaWJ1dGVzLmdldChuYW1lKTtcbiAgICBpZiAocmV0IT11bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHJldHVybiAyNTtcbiAgfVxuXG4gIHNldF9hdHRyKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2F0dHJpYnV0ZXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGVyc29uIHtcbiAgX2F0dHJpYnV0ZXM6IEF0dHJpYnV0ZXM7XG4gIF9wb3NpdGlvbnM6IFBvc2l0aW9uW107XG5cbiAgc2V0IGF0dHJpYnV0ZXMoYXR0cjogQXR0cmlidXRlcykge1xuICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBhdHRyO1xuICB9XG5cbiAgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXM7XG4gIH1cblxuICBnZXRfYXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IGF0dHIgPSB0aGlzLl9hdHRyaWJ1dGVzLmdldF9hdHRyKG5hbWUpO1xuXG4gICAgaWYgKHR5cGVvZiBhdHRyID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gYXR0cjtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9uczogUG9zaXRpb25bXSkge1xuICAgIHRoaXMuX3Bvc2l0aW9ucyA9IHBvc2l0aW9ucztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICBfbmFtZTogc3RyaW5nO1xuICBfYWJicmV2aWF0aW9uOiBzdHJpbmc7XG4gIF9yb2xlczogUm9sZVtdO1xuXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgYWJicmV2aWF0aW9uKGFiYnJldmlhdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWJicmV2aWF0aW9uID0gYWJicmV2aWF0aW9uO1xuICB9XG5cbiAgZ2V0IGFiYnJldmlhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWJicmV2aWF0aW9uO1xuICB9XG5cbiAgc2V0IHJvbGVzKHJvbGVzOiBSb2xlW10pIHtcbiAgICB0aGlzLl9yb2xlcyA9IHJvbGVzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb2xlIHtcbiAgX25hbWU6IHN0cmluZztcbiAgX2FiYnJldmlhdGlvbjogc3RyaW5nO1xuICBfcG9zaXRpb25zOiBQb3NpdGlvbltdO1xuICBfcHJpbWFyeV9hdHRyaWJ1dGVzOiBzdHJpbmdbXTtcbiAgX3NlY29uZGFyeV9hdHRyaWJ1dGVzOiBzdHJpbmdbXTtcbiAgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIF9pc19nb2Fsa2VlcGVyOiBib29sZWFuO1xuICBfdGFjdGljYWxfaW5zdHJ1Y3Rpb25zOiBJbnN0cnVjdGlvbltdO1xuXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgYWJicmV2aWF0aW9uKGFiYnJldmlhdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWJicmV2aWF0aW9uID0gYWJicmV2aWF0aW9uO1xuICB9XG5cbiAgZ2V0IGFiYnJldmlhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWJicmV2aWF0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnM6IFBvc2l0aW9uW10pIHtcbiAgICB0aGlzLl9wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbnM7XG4gIH1cblxuICBzZXQgcHJpbWFyeV9hdHRyaWJ1dGVzKHByaW1hcnlfYXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcmltYXJ5X2F0dHJpYnV0ZXMgPSBwcmltYXJ5X2F0dHJpYnV0ZXM7XG4gIH1cblxuICBnZXQgcHJpbWFyeV9hdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmltYXJ5X2F0dHJpYnV0ZXM7XG4gIH1cblxuICBzZXQgc2Vjb25kYXJ5X2F0dHJpYnV0ZXMoc2Vjb25kYXJ5X2F0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2Vjb25kYXJ5X2F0dHJpYnV0ZXMgPSBzZWNvbmRhcnlfYXR0cmlidXRlcztcbiAgfVxuXG4gIGdldCBzZWNvbmRhcnlfYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kYXJ5X2F0dHJpYnV0ZXM7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGlzX2dvYWxrZWVwZXIoaXNfZ29hbGtlZXBlcjogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzX2dvYWxrZWVwZXIgPSBpc19nb2Fsa2VlcGVyO1xuICB9XG5cbiAgZ2V0IGlzX2dvYWxrZWVwZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzX2dvYWxrZWVwZXI7XG4gIH1cblxuICBzZXQgdGFjdGljYWxfaW5zdHJ1Y3Rpb25zKHRhY3RpY2FsX2luc3RydWN0aW9uczogSW5zdHJ1Y3Rpb25bXSkge1xuICAgIHRoaXMuX3RhY3RpY2FsX2luc3RydWN0aW9ucyA9IHRhY3RpY2FsX2luc3RydWN0aW9ucztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3Rpb24ge1xuICBfZGVzY3JpcHRpb246IHN0cmluZztcbiAgX2luc3RydWN0aW9uOiBQbGF5ZXJJbnN0cnVjdGlvbiB8IFRlYW1JbnN0cnVjdGlvbiB8IEdvYWxrZWVwZXJJbnN0cnVjdGlvbjtcbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBpbnN0cnVjdGlvbihcbiAgICBpbnN0cnVjdGlvbjogUGxheWVySW5zdHJ1Y3Rpb24gfCBUZWFtSW5zdHJ1Y3Rpb24gfCBHb2Fsa2VlcGVySW5zdHJ1Y3Rpb25cbiAgKSB7XG4gICAgdGhpcy5faW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcbiAgfVxuXG4gIGdldCBpbnN0cnVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdHJ1Y3Rpb247XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVGVhbUluc3RydWN0aW9uID1cbiAgfCBcInBsYXlfb3V0X2Zyb21fYmFja1wiXG4gIHwgXCJwbGF5X3Rocm91Z2hfdGhlX21pZGRsZVwiXG4gIHwgXCJwbGF5X2Rvd25fdGhlX3dpbmdzXCJcbiAgfCBcInBsYXlfbG9uZ19iYWxsc1wiXG4gIHwgXCJwbGF5X2NvdW50ZXJfYXR0YWNrc1wiXG4gIHwgXCJkZWZlbmRfZGVlcFwiXG4gIHwgXCJkZWZlbmRfbWVkaXVtXCJcbiAgfCBcImRlZmVuZF9oaWdoXCJcbiAgfCBcIm9mZnNpZGVfdHJhcFwiXG4gIHwgXCJjcm9zc19vZnRlblwiXG4gIHwgXCJ3b3JrX2JhbGxfaW50b19ib3hcIlxuICB8IFwic2hvb3RfZnJvbV9kaXN0YW5jZVwiXG4gIHwgXCJ3YWl0X2Zvcl9nb29kX3Nob3RcIlxuICB8IFwicGFzc192ZXJ5X3Nob3J0XCJcbiAgfCBcInBhc3Nfc2hvcnRcIlxuICB8IFwicGFzc19tZWRpdW1cIlxuICB8IFwicGFzc19sb25nXCJcbiAgfCBcInBsYXlfdGhyb3VnaF9iYWxsc1wiXG4gIHwgXCJwbGF5X2xvYnNcIlxuICB8IFwicGxheV9vbmVfdHdvc1wiO1xuXG5leHBvcnQgdHlwZSBQbGF5ZXJJbnN0cnVjdGlvbiA9XG4gIHwgXCJ0YWNrbGVfaGFyZGVyXCJcbiAgfCBcIm1hcmtfdGlnaHRseVwiXG4gIHwgXCJzdGF5X29uX2ZlZXRcIlxuICB8IFwic2hvcnRlcl9wYXNzZXNcIlxuICB8IFwiZ2V0X2luX2JlaGluZFwiXG4gIHwgXCJkcmliYmxlX2xlc3NcIlxuICB8IFwiZHJpYmJsZV9tb3JlXCJcbiAgfCBcImNyb3NzX2xlc3NcIlxuICB8IFwiY3Jvc3NfbW9yZVwiXG4gIHwgXCJzaG9vdF9sZXNzXCJcbiAgfCBcInNob290X21vcmVcIlxuICB8IFwicGFzc190b19zcGFjZVwiXG4gIHwgXCJwYXNzX3RvX2ZlZXRcIlxuICB8IFwidHJ5X3Jpc2t5X3Bhc3Nlc1wiXG4gIHwgXCJwbGF5X3NhZmVfcGFzc2VzXCJcbiAgfCBcImhvbGRfdXBfYmFsbFwiXG4gIHwgXCJtb3ZlX2ludG9fY2hhbm5lbHNcIlxuICB8IFwiZ2V0X2Z1cnRoZXJfZm9yd2FyZFwiXG4gIHwgXCJydW5fd2lkZV93aXRoX2JhbGxcIlxuICB8IFwiY3Jvc3NfZnJvbV9ieWxpbmVcIjtcblxuZXhwb3J0IHR5cGUgR29hbGtlZXBlckluc3RydWN0aW9uID1cbiAgfCBcImRyaWJibGVfbW9yZVwiXG4gIHwgXCJ0YWtlX21vcmVfcmlza3NcIlxuICB8IFwicnVzaF9vdXRcIlxuICB8IFwidXNlX2NyZWF0aXZlX2ZyZWVkb21cIjtcbiIsImV4cG9ydCB7IENvdW50cnksIENpdHksIFZlbnVlLCBQaXRjaERpbWVuc2lvbnMgfTtcbmltcG9ydCB7IENvb3JkcywgUmVjdGFuZ2xlIH0gZnJvbSBcIi4uL2NvbW1vbi90eXBlc1wiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9wZXJzb25cIjtcblxuY2xhc3MgUGxhY2Uge1xuICBfbmFtZTogc3RyaW5nO1xuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG59XG5cbmNsYXNzIENvdW50cnkgZXh0ZW5kcyBQbGFjZSB7XG4gIF9mbGFnOiBzdHJpbmc7XG4gIF9wb3B1bGF0aW9uOiBudW1iZXI7XG4gIF9jYXBpdGFsOiBDaXR5O1xuICBfY3VycmVuY3k6IHN0cmluZztcbiAgX2xhbmd1YWdlczogc3RyaW5nW107XG5cbiAgc2V0IGZsYWcoZmxhZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmxhZyA9IGZsYWc7XG4gIH1cblxuICBnZXQgZmxhZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxhZztcbiAgfVxuXG4gIHNldCBwb3B1bGF0aW9uKHBvcHVsYXRpb246IG51bWJlcikge1xuICAgIHRoaXMuX3BvcHVsYXRpb24gPSBwb3B1bGF0aW9uO1xuICB9XG5cbiAgZ2V0IHBvcHVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHVsYXRpb247XG4gIH1cblxuICBzZXQgY2FwaXRhbChjYXBpdGFsOiBDaXR5KSB7XG4gICAgdGhpcy5fY2FwaXRhbCA9IGNhcGl0YWw7XG4gIH1cblxuICBnZXQgY2FwaXRhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwaXRhbDtcbiAgfVxuXG4gIHNldCBjdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxuXG4gIGdldCBjdXJyZW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVuY3k7XG4gIH1cblxuICBzZXQgbGFuZ3VhZ2VzKGxhbmd1YWdlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XG4gIH1cblxuICBnZXQgbGFuZ3VhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbn1cblxuY2xhc3MgQ2l0eSBleHRlbmRzIFBsYWNlIHtcbiAgX3BvcHVsYXRpb246IG51bWJlcjtcbiAgX2NvdW50cnk6IENvdW50cnk7XG5cbiAgc2V0IHBvcHVsYXRpb24ocG9wdWxhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9wdWxhdGlvbiA9IHBvcHVsYXRpb247XG4gIH1cblxuICBnZXQgcG9wdWxhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wdWxhdGlvbjtcbiAgfVxuXG4gIHNldCBjb3VudHJ5KGNvdW50cnk6IENvdW50cnkpIHtcbiAgICB0aGlzLl9jb3VudHJ5ID0gY291bnRyeTtcbiAgfVxuXG4gIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudHJ5O1xuICB9XG59XG5cbmNsYXNzIFZlbnVlIGV4dGVuZHMgUGxhY2Uge1xuICBfY2FwYWNpdHk6IG51bWJlcjtcbiAgX2NpdHk6IENpdHk7XG4gIGxlbmd0aDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBfZGltZW5zaW9uczogUGl0Y2hEaW1lbnNpb25zO1xuXG4gIHNldCBjYXBhY2l0eShjYXBhY2l0eTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgfVxuXG4gIGdldCBjYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHk7XG4gIH1cblxuICBzZXQgY2l0eShjaXR5OiBDaXR5KSB7XG4gICAgdGhpcy5fY2l0eSA9IGNpdHk7XG4gIH1cblxuICBnZXQgY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2l0eTtcbiAgfVxuXG4gIHNldCBwaXRjaF9kaW1lbnNpb25zKHBpdGNoX2RpbWVuc2lvbnM6IFtudW1iZXIsIG51bWJlcl0pIHtcbiAgICB0aGlzLmxlbmd0aCA9IHBpdGNoX2RpbWVuc2lvbnNbMF07XG4gICAgdGhpcy53aWR0aCA9IHBpdGNoX2RpbWVuc2lvbnNbMV07XG4gICAgdGhpcy5pbml0X3BpdGNoX2RpbWVuc2lvbnMoKTtcbiAgfVxuXG4gIGluaXRfcGl0Y2hfZGltZW5zaW9ucygpIHtcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gbmV3IFBpdGNoRGltZW5zaW9ucygpO1xuICAgIHRoaXMuX2RpbWVuc2lvbnMubGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5fZGltZW5zaW9ucy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy5fZGltZW5zaW9ucy5pbml0KCk7XG4gICAgdGhpcy5fZGltZW5zaW9ucy5kaXZpZGVfaW50b196b25lcyg3LDEwKTtcbiAgfVxuXG4gIGdldCBkaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICB9XG59XG5cbmNsYXNzIFBpdGNoRGltZW5zaW9ucyB7XG4gIF9sZW5ndGg6IG51bWJlcjtcbiAgX3dpZHRoOiBudW1iZXI7XG5cbiAgem9uZXM6IFBpdGNoWm9uZVtdO1xuXG4gIHNldCBsZW5ndGgobGVuZ3RoOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgc3RhdGljIGNlbnRlcl9jaXJjbGVfcmFkaXVzID0gOS4xNTtcbiAgc3RhdGljIHBlbmFsdHlfYXJlYV9sZW5ndGggPSAxNi41O1xuICBzdGF0aWMgcGVuYWx0eV9hcmVhX3dpZHRoID0gNDAuMzI7XG4gIHN0YXRpYyBwZW5hbHR5X3Nwb3RfZGlzdGFuY2UgPSAxMTtcbiAgc3RhdGljIHNpeF95YXJkX2JveF9sZW5ndGggPSA1LjU7XG4gIHN0YXRpYyBzaXhfeWFyZF9ib3hfd2lkdGggPSAxOC4zMjtcbiAgc3RhdGljIGdvYWxfd2lkdGggPSA3LjMyO1xuICBzdGF0aWMgZ29hbF9oZWlnaHQgPSAyLjQ0O1xuICBzdGF0aWMgZ29hbF9kZXB0aCA9IDIuNDQ7XG4gIHN0YXRpYyBwZW5hbHR5X2FyY19yYWRpdXMgPSA5LjE1O1xuXG4gIHBlbmFsdHlfc3BvdF8xX2Nvb3JkczogQ29vcmRzO1xuICBwZW5hbHR5X3Nwb3RfMl9jb29yZHM6IENvb3JkcztcbiAga2lja29mZl9zcG90OiBDb29yZHM7XG4gIGdvYWxfMTogUmVjdGFuZ2xlO1xuICBnb2FsXzI6IFJlY3RhbmdsZTtcblxuICBkaXZpZGVfaW50b196b25lcyhyb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlcikge1xuICAgIGxldCB6b25lV2lkdGggPSB0aGlzLmxlbmd0aCAvIGNvbHM7XG4gICAgbGV0IHpvbmVMZW5ndGggPSB0aGlzLndpZHRoIC8gcm93cztcbiAgICBjb25zb2xlLmxvZyh6b25lV2lkdGgsIHpvbmVMZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICBsZXQgcmVjdDogUmVjdGFuZ2xlID0ge1xuICAgICAgICAgIHBvaW50XzE6IHtcbiAgICAgICAgICAgIHg6IGogKiB6b25lV2lkdGgsXG4gICAgICAgICAgICB5OiBpICogem9uZUxlbmd0aCxcbiAgICAgICAgICAgIHo6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb2ludF8yOiB7XG4gICAgICAgICAgICB4OiAoaiArIDEpICogem9uZVdpZHRoLFxuICAgICAgICAgICAgeTogKGkgKyAxKSAqIHpvbmVMZW5ndGgsXG4gICAgICAgICAgICB6OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGxldCB6b25lID0gbmV3IFBpdGNoWm9uZShyZWN0KTtcbiAgICAgICAgdGhpcy56b25lcy5wdXNoKHpvbmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy56b25lcyA9IFtdO1xuICAgIHRoaXMucGVuYWx0eV9zcG90XzFfY29vcmRzID0ge1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9zcG90X2Rpc3RhbmNlLFxuICAgICAgejogMCxcbiAgICB9O1xuICAgIHRoaXMucGVuYWx0eV9zcG90XzJfY29vcmRzID0ge1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLmxlbmd0aCAtIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X3Nwb3RfZGlzdGFuY2UsXG4gICAgICB6OiAwLFxuICAgIH07XG4gICAgdGhpcy5raWNrb2ZmX3Nwb3QgPSB7XG4gICAgICB4OiB0aGlzLmxlbmd0aCAvIDIsXG4gICAgICB5OiB0aGlzLndpZHRoIC8gMixcbiAgICAgIHo6IDAsXG4gICAgfTtcbiAgICB0aGlzLmdvYWxfMSA9IHtcbiAgICAgIHBvaW50XzE6IHtcbiAgICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMuZ29hbF93aWR0aCAvIDIsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDAsXG4gICAgICB9LFxuICAgICAgcG9pbnRfMjoge1xuICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5nb2FsX3dpZHRoIC8gMixcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogUGl0Y2hEaW1lbnNpb25zLmdvYWxfaGVpZ2h0LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuZ29hbF8yID0ge1xuICAgICAgcG9pbnRfMToge1xuICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIFBpdGNoRGltZW5zaW9ucy5nb2FsX3dpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5sZW5ndGgsXG4gICAgICAgIHo6IDAsXG4gICAgICB9LFxuICAgICAgcG9pbnRfMjoge1xuICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5nb2FsX3dpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5sZW5ndGgsXG4gICAgICAgIHo6IFBpdGNoRGltZW5zaW9ucy5nb2FsX2hlaWdodCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGl0Y2hab25lIHtcbiAgX3JlY3Q6IFJlY3RhbmdsZTtcblxuICBjb25zdHJ1Y3RvcihyZWN0OiBSZWN0YW5nbGUpIHtcbiAgICB0aGlzLl9yZWN0ID0gcmVjdDtcbiAgfVxuXG4gIGdldCByZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWN0O1xuICB9XG5cbiAgc3RhdGljIGdldF9zY29yZShwb3NpdGlvbjpQb3NpdGlvbiwgc2lkZTonbGVmdCd8J3JpZ2h0Jykge1xuICAgIC8vIGZpbGwgYXJyYXkgbGVuZ3RoIDcwIHdpdGggMHNcbiAgICBjb25zdCB6b25lcyA9IG5ldyBBcnJheSg3MCkuZmlsbCgwKTtcblxuICAgIHN3aXRjaCAocG9zaXRpb24ubmFtZSkge1xuICAgICAgY2FzZSAnR29hbGtlZXBlcic6XG4gICAgICAgIGlmIChzaWRlPT0nbGVmdCcpIHtcbiAgICAgICAgICB6b25lc1szMF0gPSAxO1xuICAgICAgICAgIHpvbmVzWzMxXSA9IDAuNDtcbiAgICAgICAgICB6b25lc1syMF0gPSAwLjI7XG4gICAgICAgICAgem9uZXNbNDBdID0gMC4yO1xuICAgICAgICAgIHpvbmVzWzIxXSA9IDAuMDU7XG4gICAgICAgICAgem9uZXNbNDFdID0gMC4wNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB6b25lc1szOV0gPSAxO1xuICAgICAgICAgIHpvbmVzWzM4XSA9IDAuNDtcbiAgICAgICAgICB6b25lc1s0OV0gPSAwLjI7XG4gICAgICAgICAgem9uZXNbMjldID0gMC4yO1xuICAgICAgICAgIHpvbmVzWzQ4XSA9IDAuMDU7XG4gICAgICAgICAgem9uZXNbMjhdID0gMC4wNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gem9uZXM7XG5cbiAgICAgIGNhc2UgJ0xlZnQgQmFjayc6XG4gICAgICAgIGlmIChzaWRlPT0nbGVmdCcpIHtcbiAgICAgICAgICB6b25lc1sxMV0gPSAxO1xuICAgICAgICAgIHpvbmVzWzEyXSA9IDAuNzU7XG4gICAgICAgICAgem9uZXNbMTBdID0gMC41O1xuICAgICAgICAgIHpvbmVzWzBdID0gMC40O1xuICAgICAgICAgIHpvbmVzWzFdID0gMC40O1xuICAgICAgICAgIHpvbmVzWzJdID0gMC40O1xuICAgICAgICAgIHpvbmVzWzIxXSA9IDAuMTtcbiAgICAgICAgICB6b25lc1syMF0gPSAwLjE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgem9uZXNbNThdID0gMTtcbiAgICAgICAgICB6b25lc1s1N10gPSAwLjc1O1xuICAgICAgICAgIHpvbmVzWzU5XSA9IDAuNTtcbiAgICAgICAgICB6b25lc1s2N10gPSAwLjQ7XG4gICAgICAgICAgem9uZXNbNjhdID0gMC40O1xuICAgICAgICAgIHpvbmVzWzY5XSA9IDAuNDtcbiAgICAgICAgICB6b25lc1s0OF0gPSAwLjE7XG4gICAgICAgICAgem9uZXNbNDldID0gMC4xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6b25lcztcblxuICAgICAgY2FzZSAnUmlnaHQgQmFjayc6XG4gICAgICAgIGlmIChzaWRlPT0nbGVmdCcpIHtcbiAgICAgICAgICB6b25lc1s1MV0gPSAxO1xuICAgICAgICAgIHpvbmVzWzUyXSA9IDAuNzU7XG4gICAgICAgICAgem9uZXNbNTBdID0gMC41O1xuICAgICAgICAgIHpvbmVzWzYwXSA9IDAuNDtcbiAgICAgICAgICB6b25lc1s2MV0gPSAwLjQ7XG4gICAgICAgICAgem9uZXNbNjJdID0gMC40O1xuICAgICAgICAgIHpvbmVzWzQxXSA9IDAuMTtcbiAgICAgICAgICB6b25lc1s0MF0gPSAwLjE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgem9uZXNbMThdID0gMTtcbiAgICAgICAgICB6b25lc1sxN10gPSAwLjc1O1xuICAgICAgICAgIHpvbmVzWzE5XSA9IDAuNTtcbiAgICAgICAgICB6b25lc1s5XSA9IDAuNDtcbiAgICAgICAgICB6b25lc1s4XSA9IDAuNDtcbiAgICAgICAgICB6b25lc1s3XSA9IDAuNDtcbiAgICAgICAgICB6b25lc1syOF0gPSAwLjE7XG4gICAgICAgICAgem9uZXNbMjldID0gMC4xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6b25lcztcblxuICAgICAgY2FzZSAnTGVmdCBDZW50ZXIgQmFjayc6XG4gICAgICAgIGlmIChzaWRlPT0nbGVmdCcpIHtcbiAgICAgICAgICB6b25lc1syMV0gPSAxO1xuICAgICAgICAgIHpvbmVzWzIyXSA9IDAuNzU7XG4gICAgICAgICAgem9uZXNbMzFdID0gMC41O1xuICAgICAgICAgIHpvbmVzWzIwXSA9IDAuNTtcbiAgICAgICAgICB6b25lc1szMF0gPSAwLjI1O1xuICAgICAgICAgIHpvbmVzWzEwXSA9IDAuMjU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgem9uZXNbNDhdID0gMTtcbiAgICAgICAgICB6b25lc1s0N10gPSAwLjc1O1xuICAgICAgICAgIHpvbmVzWzM4XSA9IDAuNTtcbiAgICAgICAgICB6b25lc1s0OV0gPSAwLjU7XG4gICAgICAgICAgem9uZXNbMzldID0gMC4yNTtcbiAgICAgICAgICB6b25lc1s1OV0gPSAwLjI1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6b25lcztcblxuICAgICAgY2FzZSAnUmlnaHQgQ2VudGVyIEJhY2snOlxuICAgICAgICBpZiAoc2lkZT09J2xlZnQnKSB7XG4gICAgICAgICAgem9uZXNbNDFdID0gMTtcbiAgICAgICAgICB6b25lc1s0Ml0gPSAwLjc1O1xuICAgICAgICAgIHpvbmVzWzUxXSA9IDAuNTtcbiAgICAgICAgICB6b25lc1s0MF0gPSAwLjU7XG4gICAgICAgICAgem9uZXNbNTBdID0gMC4yNTtcbiAgICAgICAgICB6b25lc1szMF0gPSAwLjI1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHpvbmVzWzI4XSA9IDE7XG4gICAgICAgICAgem9uZXNbMjddID0gMC43NTtcbiAgICAgICAgICB6b25lc1sxOF0gPSAwLjU7XG4gICAgICAgICAgem9uZXNbMjldID0gMC41O1xuICAgICAgICAgIHpvbmVzWzE5XSA9IDAuMjU7XG4gICAgICAgICAgem9uZXNbMzldID0gMC4yNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gem9uZXM7XG4gICAgICBcbiAgICAgICAgY2FzZSAnRGVmZW5zaXZlIE1pZGZpZWxkZXInOlxuICAgICAgICAgIGlmIChzaWRlPT0nbGVmdCcpIHtcbiAgICAgICAgICAgIHpvbmVzWzMyXSA9IDE7XG4gICAgICAgICAgICB6b25lc1szM10gPSAwLjc1O1xuICAgICAgICAgICAgem9uZXNbMjJdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbNDJdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbMjNdID0gMC4yNTtcbiAgICAgICAgICAgIHpvbmVzWzQzXSA9IDAuMjU7XG4gICAgICAgICAgICB6b25lc1syMV0gPSAwLjE7XG4gICAgICAgICAgICB6b25lc1s0MV0gPSAwLjE7XG4gICAgICAgICAgICB6b25lc1szMV0gPSAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgem9uZXNbMzddID0gMTtcbiAgICAgICAgICAgIHpvbmVzWzM2XSA9IDAuNzU7XG4gICAgICAgICAgICB6b25lc1s0N10gPSAwLjU7XG4gICAgICAgICAgICB6b25lc1syN10gPSAwLjU7XG4gICAgICAgICAgICB6b25lc1syNl0gPSAwLjI1O1xuICAgICAgICAgICAgem9uZXNbNDZdID0gMC4yNTtcbiAgICAgICAgICAgIHpvbmVzWzI4XSA9IDAuMTtcbiAgICAgICAgICAgIHpvbmVzWzQ4XSA9IDAuMTtcbiAgICAgICAgICAgIHpvbmVzWzM4XSA9IDAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHpvbmVzO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnUmlnaHQgQ2VudHJhbCBNaWRmaWVsZGVyJzpcbiAgICAgICAgICBpZiAoc2lkZT09J2xlZnQnKSB7XG4gICAgICAgICAgICB6b25lc1s0M10gPSAxO1xuICAgICAgICAgICAgem9uZXNbNDRdID0gMC43NTtcbiAgICAgICAgICAgIHpvbmVzWzM0XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzU0XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzMzXSA9IDAuMjU7XG4gICAgICAgICAgICB6b25lc1s1M10gPSAwLjI1O1xuICAgICAgICAgICAgem9uZXNbMzJdID0gMC4xO1xuICAgICAgICAgICAgem9uZXNbNDJdID0gMC4xO1xuICAgICAgICAgICAgem9uZXNbNTJdID0gMC4xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHpvbmVzWzI2XSA9IDE7XG4gICAgICAgICAgICB6b25lc1syNV0gPSAwLjc1O1xuICAgICAgICAgICAgem9uZXNbMzVdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbMTVdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbMzZdID0gMC4yNTtcbiAgICAgICAgICAgIHpvbmVzWzE2XSA9IDAuMjU7XG4gICAgICAgICAgICB6b25lc1szN10gPSAwLjE7XG4gICAgICAgICAgICB6b25lc1syN10gPSAwLjE7XG4gICAgICAgICAgICB6b25lc1sxN10gPSAwLjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB6b25lcztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ0xlZnQgQ2VudHJhbCBNaWRmaWVsZGVyJzpcbiAgICAgICAgICBpZiAoc2lkZT09J2xlZnQnKSB7XG4gICAgICAgICAgICB6b25lc1syM10gPSAxO1xuICAgICAgICAgICAgem9uZXNbMjRdID0gMC43NTtcbiAgICAgICAgICAgIHpvbmVzWzM0XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzE0XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzMzXSA9IDAuMjU7XG4gICAgICAgICAgICB6b25lc1sxM10gPSAwLjI1O1xuICAgICAgICAgICAgem9uZXNbMzJdID0gMC4xO1xuICAgICAgICAgICAgem9uZXNbMjJdID0gMC4xO1xuICAgICAgICAgICAgem9uZXNbMTJdID0gMC4xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHpvbmVzWzQ2XSA9IDE7XG4gICAgICAgICAgICB6b25lc1s0NV0gPSAwLjc1O1xuICAgICAgICAgICAgem9uZXNbMzVdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbNTVdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbMzZdID0gMC4yNTtcbiAgICAgICAgICAgIHpvbmVzWzU2XSA9IDAuMjU7XG4gICAgICAgICAgICB6b25lc1szN10gPSAwLjE7XG4gICAgICAgICAgICB6b25lc1s0N10gPSAwLjE7XG4gICAgICAgICAgICB6b25lc1s1N10gPSAwLjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB6b25lcztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ0xlZnQgV2luZ2VyJzpcbiAgICAgICAgICBpZiAoc2lkZT09J2xlZnQnKSB7XG4gICAgICAgICAgICB6b25lc1sxNF0gPSAxO1xuICAgICAgICAgICAgem9uZXNbMTNdID0gMC43NTtcbiAgICAgICAgICAgIHpvbmVzWzI0XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzRdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbMjNdID0gMC4yNTtcbiAgICAgICAgICAgIHpvbmVzWzNdID0gMC4yNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB6b25lc1s1NV0gPSAxO1xuICAgICAgICAgICAgem9uZXNbNTZdID0gMC43NTtcbiAgICAgICAgICAgIHpvbmVzWzQ1XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzY1XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzQ2XSA9IDAuMjU7XG4gICAgICAgICAgICB6b25lc1s2Nl0gPSAwLjI1O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gem9uZXM7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdSaWdodCBXaW5nZXInOlxuICAgICAgICAgIGlmIChzaWRlPT0nbGVmdCcpIHtcbiAgICAgICAgICAgIHpvbmVzWzU0XSA9IDE7XG4gICAgICAgICAgICB6b25lc1s1M10gPSAwLjc1O1xuICAgICAgICAgICAgem9uZXNbNDRdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbNjRdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbNDNdID0gMC4yNTtcbiAgICAgICAgICAgIHpvbmVzWzYzXSA9IDAuMjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgem9uZXNbMTVdID0gMTtcbiAgICAgICAgICAgIHpvbmVzWzE2XSA9IDAuNzU7XG4gICAgICAgICAgICB6b25lc1syNV0gPSAwLjU7XG4gICAgICAgICAgICB6b25lc1s1XSA9IDAuNTtcbiAgICAgICAgICAgIHpvbmVzWzI2XSA9IDAuMjU7XG4gICAgICAgICAgICB6b25lc1s2XSA9IDAuMjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB6b25lcztcblxuICAgICAgICBjYXNlICdTdHJpa2VyJzpcbiAgICAgICAgICBpZiAoc2lkZT09J2xlZnQnKSB7XG4gICAgICAgICAgICB6b25lc1szNF0gPSAxO1xuICAgICAgICAgICAgem9uZXNbMjRdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbNDRdID0gMC41O1xuICAgICAgICAgICAgem9uZXNbMzNdID0gMC4xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHpvbmVzWzM1XSA9IDE7XG4gICAgICAgICAgICB6b25lc1syNV0gPSAwLjU7XG4gICAgICAgICAgICB6b25lc1s0NV0gPSAwLjU7XG4gICAgICAgICAgICB6b25lc1szNl0gPSAwLjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB6b25lcztcbiAgICAgICAgXG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gem9uZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0X2Nvb3Jkcyh6b25lOiBudW1iZXIpIHtcbiAgICBsZXQgcm93SW5kZXggPSBNYXRoLmZsb29yKHpvbmUvMTApO1xuICAgIGxldCBjb2xJbmRleCA9IHpvbmUlMTA7XG5cbiAgICBsZXQgeCA9IGNvbEluZGV4ICogMTAuNSArIDUuMjU7XG4gICAgbGV0IHkgPSByb3dJbmRleCAqIDkuNzE0MyArIDkuNzE0My8yO1xuXG4gICAgcmV0dXJuIHt4OngsIHk6eSwgejowfTtcbiAgfVxufSJdfQ==
