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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

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
          lineNumber: 25
        }
      }, stories.map(function (story) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, _react2.default.createElement('span', {
          className: 'jsx-314198219',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, story.title, _react2.default.createElement(_style2.default, {
          styleId: '314198219',
          css: '.jsx-314198219{font-weight:bold;font-size:larger;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCd0IsQUFFZ0MsaUJBQ0EsaUJBQ25CIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hLmN1ZXN0YS9EZXZlbG9wbWVudC9wcm9qZWN0cy9wbGF5Z3JvdW5kL25leHQuanMvaG5jbG9uZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyBhbSBpIGluIHRoZSBzZXJ2ZXIgb3IgY2xpZW50IHdpdGggbmV4dC5qcz9cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2Jlc3RzdG9yaWVzLmpzb24nKVxuICAgIGNvbnN0IGlkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgaWRzLnNsaWNlKDAsMjApLm1hcChcbiAgICAgICAgaWQgPT4gZmV0Y2goYGh0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvaXRlbS8ke2lkfS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgKVxuICAgIClcbiAgICByZXR1cm4ge3N0b3JpZXN9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3N0b3JpZXN9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAge3N0b3JpZXMubWFwKHN0b3J5ID0+XG4gICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPHNwYW4+e3N0b3J5LnRpdGxlfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e3twYXRobmFtZTogJ2l0ZW0nLCBxdWVyeToge2lkOiBzdG9yeS5pZH0gfX0+PGE+TW9yZSE8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICA8c3Bhbj57c3RvcnkuYnl9XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, _react2.default.createElement(_link2.default, { prefetch: true, href: { pathname: 'item', query: { id: story.id } }, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, 'More!')), _react2.default.createElement('span', {
          className: 'jsx-1082418608',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, story.by, _react2.default.createElement(_style2.default, {
          styleId: '1082418608',
          css: '.jsx-1082418608{font-size:smaller;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDMEIsQUFFbUMsa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hLmN1ZXN0YS9EZXZlbG9wbWVudC9wcm9qZWN0cy9wbGF5Z3JvdW5kL25leHQuanMvaG5jbG9uZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyBhbSBpIGluIHRoZSBzZXJ2ZXIgb3IgY2xpZW50IHdpdGggbmV4dC5qcz9cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2Jlc3RzdG9yaWVzLmpzb24nKVxuICAgIGNvbnN0IGlkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgaWRzLnNsaWNlKDAsMjApLm1hcChcbiAgICAgICAgaWQgPT4gZmV0Y2goYGh0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvaXRlbS8ke2lkfS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgKVxuICAgIClcbiAgICByZXR1cm4ge3N0b3JpZXN9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3N0b3JpZXN9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAge3N0b3JpZXMubWFwKHN0b3J5ID0+XG4gICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPHNwYW4+e3N0b3J5LnRpdGxlfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e3twYXRobmFtZTogJ2l0ZW0nLCBxdWVyeToge2lkOiBzdG9yeS5pZH0gfX0+PGE+TW9yZSE8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICA8c3Bhbj57c3RvcnkuYnl9XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
        }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlBhZ2UiLCJmZXRjaCIsIkxpbmsiLCJJbmRleCIsInN0b3JpZXMiLCJwcm9wcyIsIm1hcCIsInN0b3J5IiwidGl0bGUiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaWQiLCJieSIsInJlc3BvbnNlIiwianNvbiIsImlkcyIsImFsbCIsInNsaWNlIiwidGhlbiIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBRWMsQTs7Ozs7Ozs7Ozs7NkJBZ0JWO1VBQUEsQUFDQSxVQUFXLEtBRFgsQUFDZ0IsTUFEaEIsQUFDQSxBQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLFVBQ0csQUFBUSxJQUFJLGlCQUFBOytCQUNYLGNBQUE7O3NCQUFBO3dCQUFBLEFBRUU7QUFGRjtBQUFBLFNBQUEsa0JBRUUsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQUEsQUFBYTttQkFBYjtlQUZGLEFBRUUsQUFPQTtBQVBBLDZCQU9BLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQU0sRUFBQyxVQUFELEFBQVcsUUFBUSxPQUFPLEVBQUMsSUFBSSxNQUFwRCxBQUFxQixBQUEwQixBQUFXO3NCQUExRDt3QkFBQSxBQUFpRTtBQUFqRTsyQkFBaUUsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBRG5FLEFBQ0UsQUFBaUUsQUFDakUsMkJBQUEsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQUEsQUFBYTttQkFBYjtlQVpPLEFBQ1gsQUFTRSxBQUVFO0FBQUE7QUFkVixBQUNFLEFBQ0csQUF1Qk47Ozs7Ozs7Ozs7Ozt1QkF2Q3dCLCtCQUFBLEFBQU0sQTs7bUJBQXZCO0E7O3VCQUNZLFNBQUEsQSxBQUFTOzttQkFBckI7QTs7eUNBRWdCLEFBQVEsUUFDNUIsQUFBSSxNQUFKLEFBQVUsR0FBVixBQUFZLElBQVosQUFBZ0IsSUFDZCxjQUFBO3dHQUFNLEFBQW9ELGNBQXBELEFBQ0QsS0FBSyxlQUFBOzJCQUFPLElBQVAsQUFBTyxBQUFJO0FBRHJCLEFBQU0sbUJBQUE7QSxBQUZZLEFBQ3BCLGlCQUFBLENBRG9COzttQkFBaEI7QTtpREFNQyxFQUFDLFNBQUQsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJ3QixBOztrQkFBZCxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hLmN1ZXN0YS9EZXZlbG9wbWVudC9wcm9qZWN0cy9wbGF5Z3JvdW5kL25leHQuanMvaG5jbG9uZSJ9