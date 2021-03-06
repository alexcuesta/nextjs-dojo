'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/a.cuesta/Development/projects/playground/next.js/hnclone/pages/item.js?entry';


var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);

    return (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).apply(this, arguments));
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, { title: 'Welcome', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.title), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.text), _react2.default.createElement('i', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, (0, _moment2.default)(this.props.time).format('MMM Do YY'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var query = _ref.query;
        var response, item;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('https://hacker-news.firebaseio.com/v0/item/' + query.id + '.json');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                item = _context.sent;
                return _context.abrupt('return', item);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Item;
}(_react.Component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2l0ZW0uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZmV0Y2giLCJQYWdlIiwibW9tZW50IiwiSXRlbSIsInByb3BzIiwidGl0bGUiLCJ0ZXh0IiwidGltZSIsImZvcm1hdCIsInF1ZXJ5IiwiaWQiLCJyZXNwb25zZSIsImpzb24iLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0ksQUFHYzs7Ozs7Ozs7Ozs7NkJBVVYsQUFDUDs2QkFDRSxBQUFDLGdDQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFEWixBQUNFLEFBQWdCLEFBQ2hCLHdCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxNQUZYLEFBRUUsQUFBZSxBQUNmLHVCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLCtCQUFXLEtBQUEsQUFBSyxNQUFaLEFBQWtCLE1BQWxCLEFBQXdCLE9BTGxDLEFBQ0UsQUFDRSxBQUdFLEFBQUksQUFBK0IsQUFJMUM7Ozs7OztZQWxCNkIsQSxhQUFBLEE7Ozs7Ozs7dUJBQ0wsK0VBQ3lCLE1BRHpCLEFBQytCLEs7O21CQURoRDtBOzt1QkFHYSxTQUFBLEFBQVMsQTs7bUJBQXRCO0E7aURBQ0MsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVB1QixBOztrQkFBYixBIiwiZmlsZSI6Iml0ZW0uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2EuY3Vlc3RhL0RldmVsb3BtZW50L3Byb2plY3RzL3BsYXlncm91bmQvbmV4dC5qcy9obmNsb25lIn0=