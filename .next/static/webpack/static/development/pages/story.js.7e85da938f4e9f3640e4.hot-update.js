webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CommentList */ "./components/CommentList.js");







var _jsxFileName = "C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\pages\\story.js";







var Story =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Story, _React$Component);

  function Story() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Story);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Story).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Story, [{
    key: "render",
    value: function render() {
      var story = this.props.story;

      if (!story) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_10___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: story.title,
        backButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: "jsx-2558603553",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2558603553" + " " + "story-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: story.url,
        className: "jsx-2558603553",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2558603553" + " " + "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-2558603553",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, story.points, " points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-2558603553",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, story.comments_count, " comments"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-2558603553",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, story.time_ago)), story.comments.length > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_CommentList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        comments: story.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2558603553",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "No comments for this story")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2558603553",
        __self: this
      }, "main.jsx-2558603553{padding:1em;}.story-title.jsx-2558603553{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-2558603553 a.jsx-2558603553{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2558603553 a.jsx-2558603553:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-2558603553{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.story-details.jsx-2558603553 strong.jsx-2558603553{margin-right:1em;}.story-details.jsx-2558603553 a.jsx-2558603553{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxwYWdlc1xcc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RnQixBQUdtQixBQUdLLEFBTU4sQUFJZSxBQUdULEFBTUEsQUFHTixXQWZVLEFBZ0J0QixDQXpCQSxLQUdVLEFBYVUsQUFNcEIsU0FsQmlCLFVBYTJCLE1BWnRCLGtCQVF0QixDQUhBLEVBSkEsYUFZbUIsa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxwYWdlc1xcc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tZW50TGlzdFwiO1xyXG5cclxuY2xhc3MgU3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcywgcXVlcnkgfSkge1xyXG5cdFx0bGV0IHN0b3J5O1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3Qgc3RvcnlJZCA9IHF1ZXJ5LmlkO1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcdGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gXHJcblx0XHRcdCk7XHJcblx0XHRcdHN0b3J5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdHN0b3J5ID0gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4geyBzdG9yeSB9O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRpZiAoIXN0b3J5KSB7XHJcblx0XHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPXtzdG9yeS50aXRsZX0gYmFja0J1dHRvbj17dHJ1ZX0+XHJcblx0XHRcdFx0PG1haW4+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPlxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPntzdG9yeS5wb2ludHN9IHBvaW50czwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPntzdG9yeS5jb21tZW50c19jb3VudH0gY29tbWVudHM8L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0PHN0cm9uZz57c3RvcnkudGltZV9hZ299PC9zdHJvbmc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHR7c3RvcnkuY29tbWVudHMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0PENvbW1lbnRMaXN0IGNvbW1lbnRzPXtzdG9yeS5jb21tZW50c30gLz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxkaXY+Tm8gY29tbWVudHMgZm9yIHRoaXMgc3Rvcnk8L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9tYWluPlxyXG5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRtYWluIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnN0b3J5LXRpdGxlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnN0b3J5LXRpdGxlIGEge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnN0b3J5LXRpdGxlIGE6aG92ZXIge1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zdG9yeS1kZXRhaWxzIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhyZW07XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxZW07XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zdG9yeS1kZXRhaWxzIHN0cm9uZyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnN0b3J5LWRldGFpbHMgYSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjYwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\pages\\story.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, story, storyId, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                _context.prev = 1;
                storyId = query.id;
                _context.next = 5;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()("https://node-hnapi.herokuapp.com/item/".concat(storyId));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                story = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                story = null;

              case 15:
                return _context.abrupt("return", {
                  story: story
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Story;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ })

})
//# sourceMappingURL=story.js.7e85da938f4e9f3640e4.hot-update.js.map