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
            lineNumber: 25
          }
        }, story.title);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlBhZ2UiLCJmZXRjaCIsIkluZGV4Iiwic3RvcmllcyIsInByb3BzIiwibWFwIiwic3RvcnkiLCJ0aXRsZSIsInJlc3BvbnNlIiwianNvbiIsImlkcyIsImFsbCIsInNsaWNlIiwiaWQiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0lBRWMsQTs7Ozs7Ozs7Ozs7NkJBZ0JWO1VBQUEsQUFDQSxVQUFXLEtBRFgsQUFDZ0IsTUFEaEIsQUFDQSxBQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLFVBQ0csQUFBUSxJQUFJLGlCQUFBOytCQUFTLGNBQUE7O3NCQUFBO3dCQUFBLEFBQU07QUFBTjtBQUFBLFNBQUEsUUFBVCxBQUFTLEFBQVk7QUFGdEMsQUFDRSxBQUNHLEFBR047Ozs7Ozs7Ozs7Ozt1QkFuQndCLCtCQUFBLEFBQU0sQTs7bUJBQXZCO0E7O3VCQUNZLFNBQVMsQSxBQUFUOzttQkFBWjtBOzt5Q0FFZ0IsQUFBUSxRQUM1QixBQUFJLE1BQUosQUFBVSxHQUFWLEFBQVksSUFBWixBQUFnQixJQUNkLGNBQUE7d0dBQU0sQUFBb0QsY0FBcEQsQUFDRCxLQUFLLGVBQUE7MkJBQU8sSUFBUCxBQUFPLEFBQUk7QUFEckIsQUFBTSxtQkFBQTtBQUZZLEFBQ3BCLEEsaUJBQUEsQ0FEb0I7O21CQUFoQjtBO2lEQU1DLEVBQUMsU0FBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYndCLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2EuY3Vlc3RhL0RldmVsb3BtZW50L3Byb2plY3RzL3BsYXlncm91bmQvbmV4dC5qcy9obmNsb25lIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mMzNiMGQ4MGMyYjcwYjdjNzExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzNiNjI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgLy8gYW0gaSBpbiB0aGUgc2VydmVyIG9yIGNsaWVudCB3aXRoIG5leHQuanM/XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9oYWNrZXItbmV3cy5maXJlYmFzZWlvLmNvbS92MC9iZXN0c3Rvcmllcy5qc29uJylcbiAgICBjb25zdCBpZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGNvbnN0IHN0b3JpZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGlkcy5zbGljZSgwLDIwKS5tYXAoXG4gICAgICAgIGlkID0+IGZldGNoKGBodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2l0ZW0vJHtpZH0uanNvbmApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIClcbiAgICApXG4gICAgcmV0dXJuIHtzdG9yaWVzfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzdG9yaWVzfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PiA8ZGl2PntzdG9yeS50aXRsZX08L2Rpdj4pfVxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7OztBQW5CQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=