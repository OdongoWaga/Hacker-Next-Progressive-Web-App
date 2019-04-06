webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\components\\Comment.js";



var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-233908430" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-233908430" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, " ", comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-233908430" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-233908430" + " " + "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "233908430",
    __self: this
  }, ".comment.jsx-233908430{margin-bottom:1.5em;}.comment-user.jsx-233908430{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-233908430{font-size:0.9rem;}.comment-content.jsx-233908430 p.jsx-233908430{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-233908430 a.jsx-233908430{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-233908430 pre.jsx-233908430{max-width:100%;overflow:scroll;}.nested-comments.jsx-233908430{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCSSxBQUcwQixBQUdILEFBS0EsQUFHUixBQUtFLEFBSUksQUFJQSxTQVpLLEVBS00sSUFJVixBQUl5QixFQXJCeEIsQUFLbEIsR0FSQSxTQVlzQixFQVN0QixHQWpCcUIsZ0JBU3JCLEdBWWtCLENBcEJsQixnQkFxQkEsQ0FUQSIsImZpbGUiOiJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXFdvcmtTcGFjZVxcaGFja2VybmV4dFxcY29tcG9uZW50c1xcQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC11c2VyXCI+IHtjb21tZW50LnVzZXJ9PC9kaXY+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiXHJcblx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC5jb250ZW50IH19XHJcblx0XHQvPlxyXG5cdFx0e2NvbW1lbnQuY29tbWVudHMgJiYgKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5lc3RlZC1jb21tZW50c1wiPlxyXG5cdFx0XHRcdHtjb21tZW50LmNvbW1lbnRzLm1hcCgobmVzdGVkQ29tbWVudCkgPT4gKFxyXG5cdFx0XHRcdFx0PENvbW1lbnQga2V5PXtuZXN0ZWRDb21tZW50LmlkfSBjb21tZW50PXtuZXN0ZWRDb21tZW50fSAvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCl9XHJcblxyXG5cdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0e2BcclxuXHRcdFx0XHQuY29tbWVudCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNvbW1lbnQtdXNlciB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDAuOXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jb21tZW50LWNvbnRlbnQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjlyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jb21tZW50LWNvbnRlbnQgcCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuXHRcdFx0XHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNvbW1lbnQtY29udGVudCBhIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZjYwO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jb21tZW50LWNvbnRlbnQgcHJlIHtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBzY3JvbGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5uZXN0ZWQtY29tbWVudHMge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMWVtO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9XHJcblx0XHQ8L3N0eWxlPlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\components\\Comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./components/CommentList.js":
/*!***********************************!*\
  !*** ./components/CommentList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\components\\CommentList.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var comments = _ref.comments;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, comments.map(function (comment) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: comment.id,
      comment: comment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }));
});

/***/ }),

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
            lineNumber: 28
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: story.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: "jsx-1540405770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1540405770" + " " + "story-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: story.url,
        className: "jsx-1540405770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, story.title, " "), " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1540405770" + " " + "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-1540405770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, story.points, " points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-1540405770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, story.comments_count, " comments"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-1540405770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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
        className: "jsx-1540405770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "No comments for this story")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1540405770",
        __self: this
      }, "main.jsx-1540405770{padding:1em;}.story-title.jsx-1540405770{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-1540405770 a.jsx-1540405770{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-1540405770 a.jsx-1540405770:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-1540405770{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.story-details.jsx-1540405770 strong.jsx-1540405770{margin-right:1em;}.story-details.jsx-1540405770 a.jsx-1540405770{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxwYWdlc1xcc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RNLEFBR29CLEFBR0ssQUFNTixBQUllLEFBR1QsQUFNQSxBQUdOLFdBZlUsQUFnQnRCLENBekJBLEtBR1UsQUFhVSxBQU1wQixTQWxCaUIsVUFhMkIsTUFadEIsa0JBUXRCLENBSEEsRUFKQSxhQVltQixrQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxXb3JrU3BhY2VcXGhhY2tlcm5leHRcXHBhZ2VzXFxzdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0XCI7XHJcblxyXG5jbGFzcyBTdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBxdWVyeSB9KSB7XHJcblx0XHRsZXQgc3Rvcnk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3Qgc3RvcnlJZCA9IHF1ZXJ5LmlkO1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcdGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gXHJcblx0XHRcdCk7XHJcblx0XHRcdHN0b3J5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdHN0b3J5ID0gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4geyBzdG9yeSB9O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRpZiAoIXN0b3J5KSB7XHJcblx0XHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPXtzdG9yeS50aXRsZX0+XHJcblx0XHRcdFx0PG1haW4+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9IDwvYT57XCIgXCJ9XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XHJcblx0XHRcdFx0XHRcdDxzdHJvbmc+e3N0b3J5LnBvaW50c30gcG9pbnRzPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdDxzdHJvbmc+e3N0b3J5LmNvbW1lbnRzX2NvdW50fSBjb21tZW50czwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPntzdG9yeS50aW1lX2Fnb308L3N0cm9uZz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0e3N0b3J5LmNvbW1lbnRzLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdDxDb21tZW50TGlzdCBjb21tZW50cz17c3RvcnkuY29tbWVudHN9IC8+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2Pk5vIGNvbW1lbnRzIGZvciB0aGlzIHN0b3J5PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvbWFpbj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdFx0bWFpbiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5zdG9yeS10aXRsZSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5zdG9yeS10aXRsZSBhIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LnN0b3J5LXRpdGxlIGE6aG92ZXIge1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5zdG9yeS1kZXRhaWxzIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOHJlbTtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5zdG9yeS1kZXRhaWxzIHN0cm9uZyB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LnN0b3J5LWRldGFpbHMgYSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmNjA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGB9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\pages\\story.js */"));
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
//# sourceMappingURL=story.js.2399f18856d4d69b5f79.hot-update.js.map