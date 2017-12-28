module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(3);

	var _server = __webpack_require__(4);

	var _app = __webpack_require__(5);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(8);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use('/assets', _express2.default.static('assets'));

	server.get('/', function (req, res) {
	  var isMobile = true;
	  var initialState = { isMobile: isMobile };
	  var appString = (0, _server.renderToString)(_react2.default.createElement(
	    _reactRouterDom.StaticRouter,
	    null,
	    _react2.default.createElement(_app2.default, initialState)
	  ));

	  res.status(200).send((0, _template2.default)({
	    body: appString,
	    title: 'Hello World from the server',
	    initialState: JSON.stringify(initialState)
	  }));
	});

	server.get('/about', function (req, res) {
	  var isMobile = true;
	  var initialState = { isMobile: isMobile };
	  var context = {};
	  var appString = (0, _server.renderToString)(_react2.default.createElement(
	    _reactRouterDom.StaticRouter,
	    { context: context, location: req.url },
	    _react2.default.createElement(_app2.default, initialState)
	  ));

	  res.status(200).send((0, _template2.default)({
	    body: appString,
	    title: 'Hello World from the server',
	    initialState: JSON.stringify(initialState)
	  }));
	});

	server.listen(8080);
	console.log('listening');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(3);

	var _home = __webpack_require__(6);

	var _home2 = _interopRequireDefault(_home);

	var _about = __webpack_require__(7);

	var _about2 = _interopRequireDefault(_about);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var isMobile = this.props.isMobile;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'header',
	          null,
	          _react2.default.createElement(
	            'nav',
	            null,
	            _react2.default.createElement(
	              _reactRouterDom.NavLink,
	              { to: '/' },
	              'Home'
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.NavLink,
	              { to: '/about' },
	              'About'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouterDom.Switch,
	          null,
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _home2.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/home', exact: true, component: _home2.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/about', exact: true, component: _about2.default })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;


	App.propTypes = {
	  isMobile: _react.PropTypes.bool.isRequired
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	  _inherits(Home, _Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'This is the Home Page'
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	exports.default = Home;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_Component) {
	  _inherits(About, _Component);

	  function About() {
	    _classCallCheck(this, About);

	    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	  }

	  _createClass(About, [{
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'This is the About Page'
	        )
	      );
	    }
	  }]);

	  return About;
	}(_react.Component);

	exports.default = About;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n      </head>\n      \n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ })
/******/ ]);