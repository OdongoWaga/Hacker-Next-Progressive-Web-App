webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\components\\StoryList.js";




var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3326399883",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3326399883" + " " + "story-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3326399883" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-3326399883",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, " ", story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3326399883" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3326399883",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.points || 0, " points "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story? id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3326399883",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, story.comments_count || 0, " comments "))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3326399883",
    __self: this
  }, ".story-list.jsx-3326399883{padding:0 1em;}.story.jsx-3326399883{padding:1em 0;}.story-title.jsx-3326399883{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3326399883 a.jsx-3326399883{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3326399883 a.jsx-3326399883:hover,.story-details.jsx-3326399883 a.jsx-3326399883:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-3326399883{font-size:0.8rem;font-weight:bold;}.story-details.jsx-3326399883 span.jsx-3326399883{margin-right:1em;}.story-details.jsx-3326399883 a.jsx-3326399883{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJJLEFBR29CLEFBR0EsQUFHQyxBQU1KLEFBS2UsQUFHVCxBQUlBLEFBR0gsV0FkTyxHQVp0QixBQUdBLEFBd0JzQixDQXJCTCxFQWNDLEFBSWxCLGNBakJVLEdBY1YsTUFicUIsb0JBQ3JCLEFBUUEsQ0FKQSxHQWVBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcV29ya1NwYWNlXFxoYWNrZXJuZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBTdG9yeUxpc3QgPSAoeyBzdG9yaWVzIH0pID0+IChcclxuXHQ8ZGl2PlxyXG5cdFx0e3N0b3JpZXMubWFwKChzdG9yeSkgPT4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e3N0b3J5LnVybH0+IHtzdG9yeS50aXRsZX08L2E+XHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cclxuXHRcdFx0XHRcdDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Avc3Rvcnk/IGlkPSR7c3RvcnkuaWR9YH0+XHJcblx0XHRcdFx0XHRcdDxhPntzdG9yeS5jb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50cyA8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KSl9XHJcblxyXG5cdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0e2BcclxuXHRcdFx0XHQuc3RvcnktbGlzdCB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDFlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5IHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDFlbSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuc3RvcnktdGl0bGUge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuc3RvcnktdGl0bGUgYSB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5LXRpdGxlIGE6aG92ZXIsXHJcblx0XHRcdFx0LnN0b3J5LWRldGFpbHMgYTpob3ZlciB7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5LWRldGFpbHMge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5LWRldGFpbHMgc3BhbiB7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDFlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnN0b3J5LWRldGFpbHMgYSB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzY2MDBmZjtcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9XHJcblx0XHQ8L3N0eWxlPlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\WorkSpace\\hackernext\\components\\StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.5f5af3a8a86c01978fea.hot-update.js.map