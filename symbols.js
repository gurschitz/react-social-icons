'use strict';

exports.__esModule = true;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _networks = require('./networks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('symbol', {
  id: 'background',
  viewBox: '0 0 64 64'
}, void 0, (0, _jsx3.default)('g', {
  className: 'social-background'
}, void 0, (0, _jsx3.default)('circle', {
  cx: '32',
  cy: '32',
  r: '31'
})));

function renderBackgroundSymbol() {
  return _ref;
}

function renderSymbols(props) {
  return props.networks.map(function (key) {
    return [(0, _jsx3.default)('symbol', {
      id: key + '-icon',
      viewBox: '0 0 64 64'
    }, void 0, (0, _jsx3.default)('g', {
      className: 'social-icon'
    }, void 0, (0, _jsx3.default)('path', {
      d: (0, _networks.iconFor)(key)
    }))), (0, _jsx3.default)('symbol', {
      id: key + '-mask',
      viewBox: '0 0 64 64'
    }, void 0, (0, _jsx3.default)('g', {
      className: 'social-mask'
    }, void 0, (0, _jsx3.default)('path', {
      d: (0, _networks.maskFor)(key)
    })))];
  });
}

function Symbols(props) {
  return (0, _jsx3.default)('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    id: 'social-symbols',
    version: '1.1'
  }, void 0, renderBackgroundSymbol(), renderSymbols(props));
}

exports.default = Symbols;