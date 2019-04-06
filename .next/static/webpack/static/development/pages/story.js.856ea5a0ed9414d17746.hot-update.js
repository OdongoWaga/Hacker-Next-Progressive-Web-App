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
    className: "jsx-2503090409" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2503090409" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-2503090409" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2503090409" + " " + "nested-comments",
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
    id: "2503090409",
    __self: this
  }, ".comment.jsx-2503090409{margin-bottom:1.5em;}.comment-user.jsx-2503090409{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-2503090409{font-size:0.9rem;}.comment-content.jsx-2503090409 p{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-2503090409 a{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-2503090409 pre{max-width:100%;overflow:scroll;}.nested-comments.jsx-2503090409{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVjLEFBR3lCLEFBR0gsQUFLQSxBQUdSLEFBS0UsQUFJSSxBQUlBLFNBWkssRUFLTSxJQUlWLEFBSXlCLEVBckJ4QixBQUtsQixHQVJBLFNBWXNCLEVBU3RCLEdBakJxQixnQkFTckIsR0FZa0IsQ0FwQmxCLGdCQXFCQSxDQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50LXVzZXJcIj57Y29tbWVudC51c2VyfTwvZGl2PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxyXG5cdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQuY29udGVudCB9fVxyXG5cdFx0Lz5cclxuXHRcdHtjb21tZW50LmNvbW1lbnRzICYmIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtY29tbWVudHNcIj5cclxuXHRcdFx0XHR7Y29tbWVudC5jb21tZW50cy5tYXAoKG5lc3RlZENvbW1lbnQpID0+IChcclxuXHRcdFx0XHRcdDxDb21tZW50IGtleT17bmVzdGVkQ29tbWVudC5pZH0gY29tbWVudD17bmVzdGVkQ29tbWVudH0gLz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpfVxyXG5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0LmNvbW1lbnQge1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jb21tZW50LXVzZXIge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jb21tZW50LWNvbnRlbnQge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChwKSB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG5cdFx0XHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuY29tbWVudC1jb250ZW50IDpnbG9iYWwoYSkge1xyXG5cdFx0XHRcdGNvbG9yOiAjZjYwO1xyXG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChwcmUpIHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0b3ZlcmZsb3c6IHNjcm9sbDtcclxuXHRcdFx0fVxyXG5cdFx0XHQubmVzdGVkLWNvbW1lbnRzIHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxZW07XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxZW07XHJcblx0XHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\components\\Comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.856ea5a0ed9414d17746.hot-update.js.map