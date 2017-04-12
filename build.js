'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file The main file of ReactElementsToString
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Daniel<daniel.zhu@thenetcircle.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017-01-04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
// import { html as beautifyHtml } from 'js-beautify'


var ReactElementsToString = function (_Component) {
  _inherits(ReactElementsToString, _Component);

  function ReactElementsToString() {
    _classCallCheck(this, ReactElementsToString);

    return _possibleConstructorReturn(this, (ReactElementsToString.__proto__ || Object.getPrototypeOf(ReactElementsToString)).apply(this, arguments));
  }

  _createClass(ReactElementsToString, [{
    key: 'componentWillMount',

    // constructor (props) {
    //   super(props)
    // }
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'stringifyReactElement',
    value: function stringifyReactElement(el, opts) {
      var _this2 = this;

      var useFuncContent = this.props.useFuncContent;

      var str = '';

      // Regular HTML tag s
      if (typeof el.type === 'string') {
        // Tag start now
        str += '<' + el.type;

        var children = el.props.children;

        var hasChildren = children !== undefined;
        // Delete children, has some issues
        // el.props.children = undefined

        // Deal with tag's properties
        if (el.props !== undefined && _typeof(el.props) === 'object' && !(el.props instanceof Array)) {
          for (var attrKey in el.props) {
            if (el.props.hasOwnProperty(attrKey) && attrKey !== 'children') {
              str += ' ' + attrKey + '=';

              if (typeof el.props[attrKey] === 'string') {
                str += '\'' + el.props[attrKey] + '\'';
              } else if (el.props[attrKey] instanceof Array || _typeof(el.props[attrKey]) === 'object') {
                str += '{';
                str += JSON.stringify(el.props[attrKey]).replace(/:"/g, ': \'').replace(/"/g, '\'');
                str += '}';
              } else if (typeof el.props[attrKey] === 'boolean') {
                str += '{';
                str += el.props[attrKey];
                str += '}';
              } else if (typeof el.props[attrKey] === 'function') {
                str += '{';
                str += useFuncContent ? el.props[attrKey] : el.props[attrKey].name;
                str += '}';
              }
            }
          }
          // Close the start tag with a lot of properties
          // str += '>'
        }
        // Tag ending here
        if (hasChildren) {
          str += '>';
          if (children instanceof Array) {
            // New child tags
            children.map(function (item, idx) {
              str += _this2.stringifyReactElement(item, opts);
            });
          } else if (typeof children === 'string' || typeof children === 'number') {
            // or just the content of the current tag
            str += children;
          } else if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
            str += this.stringifyReactElement(children, opts);
          }
          str += '</' + el.type + '>';
        } else {
          str += ' />';
        }
      } else if (typeof el.type === 'function') {
        // Tag start now
        str += '<' + el.type.name;

        var _children = el.props.children;

        var _hasChildren = _children !== undefined;
        // Delete children, has some issues
        // el.props.children = undefined

        // Deal with tag's properties
        if (el.props !== undefined && _typeof(el.props) === 'object' && !(el.props instanceof Array)) {
          for (var _attrKey in el.props) {
            if (el.props.hasOwnProperty(_attrKey) && _attrKey !== 'children') {
              str += ' ' + _attrKey + '=';

              if (typeof el.props[_attrKey] === 'string') {
                str += '\'' + el.props[_attrKey] + '\'';
              } else if (el.props[_attrKey] instanceof Array || _typeof(el.props[_attrKey]) === 'object') {
                str += '{';
                str += JSON.stringify(el.props[_attrKey]).replace(/:"/g, ': \'').replace(/"/g, '\'');
                str += '}';
              } else if (typeof el.props[_attrKey] === 'boolean') {
                str += '{';
                str += el.props[_attrKey];
                str += '}';
              } else if (typeof el.props[_attrKey] === 'function') {
                str += '{';
                str += useFuncContent ? el.props[_attrKey] : el.props[_attrKey].name;
                str += '}';
              }
            }
          }
          // Close the start tag with a lot of properties
          // str += '>'
        }
        // Tag ending here
        if (_hasChildren) {} else {
          str += ' />';
        }
      }

      return str;
      // return beautifyHtml(
      //   str,
      //   {
      //     indent_size: 2
      //   }
      // )
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.stringifyReactElement(this.props.reactElements)
      );
    }
  }]);

  return ReactElementsToString;
}(_react.Component);

ReactElementsToString.proptypes = {
  reactElements: _propTypes2.default.object,
  useFuncContent: _propTypes2.default.bool
};

exports.default = ReactElementsToString;
