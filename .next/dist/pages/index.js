'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/a.cuesta/Development/projects/playground/next.js/hnclone/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var stories = this.props.stories;

      return _react2.default.createElement(_Page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, stories.map(function (story) {
        return _react2.default.createElement('div', {
          className: 'jsx-799739018',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, _react2.default.createElement('span', {
          className: 'jsx-799739018',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, story.title), _react2.default.createElement(_style2.default, {
          styleId: '799739018',
          css: '.jsx-799739018{font-weight:bold;font-size:larger;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFFZ0MsaUJBQ0EsaUJBQUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2EuY3Vlc3RhL0RldmVsb3BtZW50L3Byb2plY3RzL3BsYXlncm91bmQvbmV4dC5qcy9obmNsb25lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIC8vIGFtIGkgaW4gdGhlIHNlcnZlciBvciBjbGllbnQgd2l0aCBuZXh0LmpzP1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvYmVzdHN0b3JpZXMuanNvbicpXG4gICAgY29uc3QgaWRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBjb25zdCBzdG9yaWVzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBpZHMuc2xpY2UoMCwyMCkubWFwKFxuICAgICAgICBpZCA9PiBmZXRjaChgaHR0cHM6Ly9oYWNrZXItbmV3cy5maXJlYmFzZWlvLmNvbS92MC9pdGVtLyR7aWR9Lmpzb25gKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICApXG4gICAgKVxuICAgIHJldHVybiB7c3Rvcmllc31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7c3Rvcmllc30gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+e3N0b3J5LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO2BcbiAgICAgICAgICAgIH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
        }));
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, ids, stories;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('https://hacker-news.firebaseio.com/v0/beststories.json');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                ids = _context.sent;
                _context.next = 8;
                return _promise2.default.all(ids.slice(0, 20).map(function (id) {
                  return (0, _isomorphicFetch2.default)('https://hacker-news.firebaseio.com/v0/item/' + id + '.json').then(function (res) {
                    return res.json();
                  });
                }));

              case 8:
                stories = _context.sent;
                return _context.abrupt('return', { stories: stories });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlBhZ2UiLCJmZXRjaCIsIkluZGV4Iiwic3RvcmllcyIsInByb3BzIiwibWFwIiwic3RvcnkiLCJ0aXRsZSIsInJlc3BvbnNlIiwianNvbiIsImlkcyIsImFsbCIsInNsaWNlIiwiaWQiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7OzZCQWdCVjtVQUFBLEFBQ0EsVUFBVyxLQURYLEFBQ2dCLE1BRGhCLEFBQ0EsQUFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxVQUNHLEFBQVEsSUFBSSxpQkFBQTsrQkFDWCxjQUFBO3FCQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQU87QUFBUDtBQUFBLGlCQURGLEFBQ0UsQUFBYTttQkFEZjtlQURXLEFBQ1g7QUFBQTtBQUhOLEFBQ0UsQUFDRyxBQVdOOzs7Ozs7Ozs7Ozs7dUJBM0J3QiwrQkFBQSxBQUFNLEE7O21CQUF2QjtBOzt1QkFDWSxTQUFBLEFBQVMsQTs7bUJBQXJCO0E7O3lDQUVnQixBQUFRLFFBQzVCLEFBQUksTUFBSixBQUFVLEdBQVYsQUFBWSxJQUFaLEFBQWdCLElBQ2QsY0FBQTt3R0FBTSxBQUFvRCxjQUFwRCxBQUNELEtBQUssZUFBQTsyQkFBTyxJQUFQLEFBQU8sQUFBSTtBQURyQixBQUFNLG1CQUFBO0EsQUFGWSxBQUNwQixpQkFBQSxDQURvQjs7bUJBQWhCO0E7aURBTUMsRUFBQyxTLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFid0IsQTs7a0JBQWQsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYS5jdWVzdGEvRGV2ZWxvcG1lbnQvcHJvamVjdHMvcGxheWdyb3VuZC9uZXh0LmpzL2huY2xvbmUifQ==