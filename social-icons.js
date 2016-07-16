'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _socialIcon = require('./social-icon');

var _socialIcon2 = _interopRequireDefault(_socialIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeRenderIcon(color, className) {
  return function renderIcon(url, i) {
    return (0, _jsx3.default)(_socialIcon2.default, {
      url: url,
      color: color,
      className: className
    }, i);
  };
}

function SocialIcons(_ref) {
  var urls = _ref.urls;
  var color = _ref.color;
  var className = _ref.className;
  var rest = (0, _objectWithoutProperties3.default)(_ref, ['urls', 'color', 'className']);

  return _react2.default.createElement(
    'div',
    rest,
    urls.map(makeRenderIcon(color, className))
  );
}

SocialIcons.defaultProps = {
  urls: []
};

exports.default = SocialIcons;