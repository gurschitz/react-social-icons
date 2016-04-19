'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function Background(props) {
  return _react2['default'].createElement(
    'g',
    (0, _extends3['default'])({}, props, { className: 'social-svg-background', style: _styles.socialSvgContent }),
    _react2['default'].createElement('circle', { cx: '32', cy: '32', r: '31' })
  );
}

exports['default'] = Background;