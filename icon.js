'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _networks = require('./networks');

var _styles = require('./styles.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function Icon(props) {
  return _react2['default'].createElement(
    'g',
    (0, _extends3['default'])({}, props, { className: 'social-svg-icon', style: _styles.socialSvgContent }),
    _react2['default'].createElement('path', { d: (0, _networks.iconFor)(props.networkKey) })
  );
}

Icon.propTypes = {
  networkKey: _react.PropTypes.string.isRequired
};

exports['default'] = Icon;