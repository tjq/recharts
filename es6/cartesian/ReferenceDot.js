function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Reference Dot
 */
import React from 'react';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { Dot } from '../shape/Dot';
import { Label } from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { ifOverflowMatches } from '../util/IfOverflowMatches';
import { createLabeledScales } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';
import { filterProps } from '../util/ReactUtils';
var getCoordinate = function getCoordinate(props) {
  var x = props.x,
    y = props.y,
    xAxis = props.xAxis,
    yAxis = props.yAxis;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var result = scales.apply({
    x: x,
    y: y
  }, {
    bandAware: true
  });
  if (ifOverflowMatches(props, 'discard') && !scales.isInRange(result)) {
    return null;
  }
  return result;
};
export function ReferenceDot(props) {
  var x = props.x,
    y = props.y,
    r = props.r,
    alwaysShow = props.alwaysShow,
    clipPathId = props.clipPathId;
  var isX = isNumOrStr(x);
  var isY = isNumOrStr(y);
  warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  if (!isX || !isY) {
    return null;
  }
  var coordinate = getCoordinate(props);
  if (!coordinate) {
    return null;
  }
  var cx = coordinate.x,
    cy = coordinate.y;
  var shape = props.shape,
    className = props.className;
  var clipPath = ifOverflowMatches(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;
  var dotProps = _objectSpread(_objectSpread({
    clipPath: clipPath
  }, filterProps(props, true)), {}, {
    cx: cx,
    cy: cy
  });
  return /*#__PURE__*/React.createElement(Layer, {
    className: clsx('recharts-reference-dot', className)
  }, ReferenceDot.renderDot(shape, dotProps), Label.renderCallByParent(props, {
    x: cx - r,
    y: cy - r,
    width: 2 * r,
    height: 2 * r
  }));
}
ReferenceDot.displayName = 'ReferenceDot';
ReferenceDot.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
};
ReferenceDot.renderDot = function (option, props) {
  var dot;
  if ( /*#__PURE__*/React.isValidElement(option)) {
    dot = /*#__PURE__*/React.cloneElement(option, props);
  } else if (isFunction(option)) {
    dot = option(props);
  } else {
    dot = /*#__PURE__*/React.createElement(Dot, _extends({}, props, {
      cx: props.cx,
      cy: props.cy,
      className: "recharts-reference-dot-dot"
    }));
  }
  return dot;
};