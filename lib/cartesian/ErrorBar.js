"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBar = ErrorBar;
var _react = _interopRequireDefault(require("react"));
var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));
var _Layer = require("../container/Layer");
var _ReactUtils = require("../util/ReactUtils");
var _excluded = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
/**
 * @fileOverview Render a group of error bar
 */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ErrorBar(props) {
  var offset = props.offset,
    layout = props.layout,
    width = props.width,
    dataKey = props.dataKey,
    data = props.data,
    dataPointFormatter = props.dataPointFormatter,
    xAxis = props.xAxis,
    yAxis = props.yAxis,
    others = _objectWithoutProperties(props, _excluded);
  var svgProps = (0, _ReactUtils.filterProps)(others, false);
  !!(props.direction === 'x' && xAxis.type !== 'number') ? process.env.NODE_ENV !== "production" ? (0, _tinyInvariant["default"])(false, 'ErrorBar requires Axis type property to be "number".') : (0, _tinyInvariant["default"])(false) : void 0;
  var errorBars = data.map(function (entry) {
    var _dataPointFormatter = dataPointFormatter(entry, dataKey),
      x = _dataPointFormatter.x,
      y = _dataPointFormatter.y,
      value = _dataPointFormatter.value,
      errorVal = _dataPointFormatter.errorVal;
    if (!errorVal) {
      return null;
    }
    var lineCoordinates = [];
    var lowBound, highBound;
    if (Array.isArray(errorVal)) {
      var _errorVal = _slicedToArray(errorVal, 2);
      lowBound = _errorVal[0];
      highBound = _errorVal[1];
    } else {
      lowBound = highBound = errorVal;
    }
    if (layout === 'vertical') {
      // error bar for horizontal charts, the y is fixed, x is a range value
      var scale = xAxis.scale;
      var yMid = y + offset;
      var yMin = yMid + width;
      var yMax = yMid - width;
      var xMin = scale(value - lowBound);
      var xMax = scale(value + highBound);

      // the right line of |--|
      lineCoordinates.push({
        x1: xMax,
        y1: yMin,
        x2: xMax,
        y2: yMax
      });
      // the middle line of |--|
      lineCoordinates.push({
        x1: xMin,
        y1: yMid,
        x2: xMax,
        y2: yMid
      });
      // the left line of |--|
      lineCoordinates.push({
        x1: xMin,
        y1: yMin,
        x2: xMin,
        y2: yMax
      });
    } else if (layout === 'horizontal') {
      // error bar for horizontal charts, the x is fixed, y is a range value
      var _scale = yAxis.scale;
      var xMid = x + offset;
      var _xMin = xMid - width;
      var _xMax = xMid + width;
      var _yMin = _scale(value - lowBound);
      var _yMax = _scale(value + highBound);

      // the top line
      lineCoordinates.push({
        x1: _xMin,
        y1: _yMax,
        x2: _xMax,
        y2: _yMax
      });
      // the middle line
      lineCoordinates.push({
        x1: xMid,
        y1: _yMin,
        x2: xMid,
        y2: _yMax
      });
      // the bottom line
      lineCoordinates.push({
        x1: _xMin,
        y1: _yMin,
        x2: _xMax,
        y2: _yMin
      });
    }
    return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, _extends({
      className: "recharts-errorBar",
      key: "bar-".concat(lineCoordinates.map(function (c) {
        return "".concat(c.x1, "-").concat(c.x2, "-").concat(c.y1, "-").concat(c.y2);
      }))
    }, svgProps), lineCoordinates.map(function (coordinates) {
      return /*#__PURE__*/_react["default"].createElement("line", _extends({}, coordinates, {
        key: "line-".concat(coordinates.x1, "-").concat(coordinates.x2, "-").concat(coordinates.y1, "-").concat(coordinates.y2)
      }));
    }));
  });
  return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
    className: "recharts-errorBars"
  }, errorBars);
}
ErrorBar.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal'
};
ErrorBar.displayName = 'ErrorBar';