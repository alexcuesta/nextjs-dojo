webpackHotUpdate(5,{

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(400);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Page = __webpack_require__(397);

var _Page2 = _interopRequireDefault(_Page);

var _isomorphicFetch = __webpack_require__(398);

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
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, _react2.default.createElement('span', {
          className: 'jsx-314198219',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, story.title, _react2.default.createElement(_style2.default, {
          styleId: '314198219',
          css: '.jsx-314198219{font-weight:bold;font-size:larger;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFFZ0MsaUJBQ0EsaUJBQ25CIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hLmN1ZXN0YS9EZXZlbG9wbWVudC9wcm9qZWN0cy9wbGF5Z3JvdW5kL25leHQuanMvaG5jbG9uZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyBhbSBpIGluIHRoZSBzZXJ2ZXIgb3IgY2xpZW50IHdpdGggbmV4dC5qcz9cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2Jlc3RzdG9yaWVzLmpzb24nKVxuICAgIGNvbnN0IGlkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgaWRzLnNsaWNlKDAsMjApLm1hcChcbiAgICAgICAgaWQgPT4gZmV0Y2goYGh0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvaXRlbS8ke2lkfS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgKVxuICAgIClcbiAgICByZXR1cm4ge3N0b3JpZXN9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3N0b3JpZXN9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAge3N0b3JpZXMubWFwKHN0b3J5ID0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuPntzdG9yeS50aXRsZX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+e3N0b3J5LmJ5fVxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement('span', {
          className: 'jsx-1082418608',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, story.by, _react2.default.createElement(_style2.default, {
          styleId: '1082418608',
          css: '.jsx-1082418608{font-size:smaller;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDMEIsQUFFbUMsa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hLmN1ZXN0YS9EZXZlbG9wbWVudC9wcm9qZWN0cy9wbGF5Z3JvdW5kL25leHQuanMvaG5jbG9uZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyBhbSBpIGluIHRoZSBzZXJ2ZXIgb3IgY2xpZW50IHdpdGggbmV4dC5qcz9cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2Jlc3RzdG9yaWVzLmpzb24nKVxuICAgIGNvbnN0IGlkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgaWRzLnNsaWNlKDAsMjApLm1hcChcbiAgICAgICAgaWQgPT4gZmV0Y2goYGh0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvaXRlbS8ke2lkfS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgKVxuICAgIClcbiAgICByZXR1cm4ge3N0b3JpZXN9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3N0b3JpZXN9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAge3N0b3JpZXMubWFwKHN0b3J5ID0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuPntzdG9yeS50aXRsZX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+e3N0b3J5LmJ5fVxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlBhZ2UiLCJmZXRjaCIsIkluZGV4Iiwic3RvcmllcyIsInByb3BzIiwibWFwIiwic3RvcnkiLCJ0aXRsZSIsImJ5IiwicmVzcG9uc2UiLCJqc29uIiwiaWRzIiwiYWxsIiwic2xpY2UiLCJpZCIsInRoZW4iLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0lBRWMsQTs7Ozs7Ozs7Ozs7NkJBZ0JWO1VBQUEsQUFDQSxVQUFXLEtBRFgsQUFDZ0IsTUFEaEIsQUFDQSxBQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLFVBQ0csQUFBUSxJQUFJLGlCQUFBOytCQUNYLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQUEsQUFBYTttQkFBYjtlQURGLEFBQ0UsQUFNQTtBQU5BLDZCQU1BLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQU87QUFBUDtBQUFBLGlCQUFBLEFBQWE7bUJBQWI7ZUFUTyxBQUNYLEFBT0UsQUFDRTtBQUFBO0FBWFYsQUFDRSxBQUNHLEFBbUJOOzs7Ozs7Ozs7Ozs7dUJBbkN3QiwrQkFBQSxBLEFBQU07O21CQUF2QjtBOzt1QkFDWSxTQUFBLEEsQUFBUzs7bUJBQXJCO0E7O3lDQUVnQixBQUFRLFFBQzVCLEFBQUksTUFBSixBQUFVLEdBQVYsQUFBWSxJQUFaLEFBQWdCLElBQ2QsY0FBQTt3R0FBTSxBQUFvRCxjQUFwRCxBQUNELEtBQUssZUFBQTsyQkFBTyxJQUFQLEFBQU8sQUFBSTtBQURyQixBQUFNLG1CQUFBO0EsQUFGWSxBQUNwQixpQkFBQSxDQURvQjs7bUJBQWhCO0E7aURBTUMsRUFBQyxTLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFid0IsQTs7a0JBQWQsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYS5jdWVzdGEvRGV2ZWxvcG1lbnQvcHJvamVjdHMvcGxheWdyb3VuZC9uZXh0LmpzL2huY2xvbmUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/a.cuesta/Development/projects/playground/next.js/hnclone/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/a.cuesta/Development/projects/playground/next.js/hnclone/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iYTViMWFhYWI0ZDI3YzM1ZGMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzBhMzE1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgLy8gYW0gaSBpbiB0aGUgc2VydmVyIG9yIGNsaWVudCB3aXRoIG5leHQuanM/XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9oYWNrZXItbmV3cy5maXJlYmFzZWlvLmNvbS92MC9iZXN0c3Rvcmllcy5qc29uJylcbiAgICBjb25zdCBpZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGNvbnN0IHN0b3JpZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGlkcy5zbGljZSgwLDIwKS5tYXAoXG4gICAgICAgIGlkID0+IGZldGNoKGBodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2l0ZW0vJHtpZH0uanNvbmApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIClcbiAgICApXG4gICAgcmV0dXJuIHtzdG9yaWVzfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzdG9yaWVzfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj57c3RvcnkudGl0bGV9XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuPntzdG9yeS5ieX1cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFOQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7Ozs7Ozs7OztBQW5DQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=