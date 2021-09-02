/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uri-js */ \"uri-js\");\n/* harmony import */ var uri_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uri_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! password-hash */ \"password-hash\");\n/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(password_hash__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar MongoClient = __webpack_require__(/*! mongodb */ \"mongodb\").MongoClient; // express middleware \n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\nvar sheet = new styled_components__WEBPACK_IMPORTED_MODULE_8__.ServerStyleSheet();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static('public'));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_9___default()()); // MONGO database parameters\n\nvar mongodbURL = 'mongodb://127.0.0.1:27017';\nvar mongodbNAME = 'CKZ'; ///////////////////////////////////////////////////////////////////////////////////////// LOGIN USER\n// app.post('/ckz-api-loginUser', (req,res) => {\n// console.log('siema')\n//     MongoClient.connect(mongodbURL, {}, (error,client) => {\n//         if(error) console.log('Cannot connect to the database', error)\n//         else{\n//             const db = client.db(mongodbNAME)\n//             db.collection('Users').find({\n//                 email: req.body.email\n//             }).toArray((error,result) => {\n//                 if(error) {\n//                     console.log(error)\n//                 }else if(result.length === 0){\n//                     res.send({message:'Konto z podanym adresem email nie istnieje', error: true})\n//                 }else if(result.length > 0){\n//                     if(passwordHash.verify(req.body.password,result[0].password)){\n//                         db.collection('Users').updateOne(\n//                             { email: req.body.email },\n//                             { $set: { lastLogin: new Date() }},\n//                             { upsert: true }\n//                         )\n//                         res.send({message:'Zalogowano pomyślnie', error: false, account:result[0]})\n//                     }else{\n//                         res.send({message:'Nieprawidłowe hasło', error: true})\n//                     }\n//                 }\n//         })\n//     }})\n// })\n///////////////////////////////////////////////////////////////////////////////////////// REGISTER NEW USER\n// app.post('/ckz-api-registerNewUser', (req,res) => {\n//     MongoClient.connect(mongodbURL, {}, (error,client) => {\n//         if(error) console.log('Cannot connect to the database', error)\n//         else{\n//             const db = client.db(mongodbNAME)\n//             db.collection('Users').find({\n//                 email: req.body.email\n//             }).toArray((error,result) => {\n//                 if(error) {\n//                     console.log(error)\n//                 }else{\n//                     if(result.length > 0 && result[0].email == req.body.email){\n//                         res.send({message:'Email jest już zajęty', error: true});\n//                         res.end()\n//                     }else{\n//                         db.collection('Users').insertOne({\n//                                 name: req.body.name,\n//                                 surname: req.body.surname,\n//                                 email: req.body.email,\n//                                 password: passwordHash.generate(req.body.password),\n//                                 createdAt: new Date(),\n//                                 lastLogin: new Date(),\n//                                 accountConfirmed: false,\n//                             }, (error, result)=>{\n//                             if(error) {\n//                                 res.send({message:'Nie udało się zarejestrować użytkownika', error: true})\n//                                 res.end()\n//                             }\n//                             else{\n//                                 console.log(result.acknowledged)\n//                                 if(result.acknowledged){\n//                                     res.send({message: 'Zarejestrowano poprawnie', error: false});\n//                                 }\n//                             }\n//                         })  \n//                     }\n//                 }\n//             })\n//         }    \n//     })\n// })\n/////////////////////////////////////////////////////////////////////////////////////// SERVER SIDE RENDERING\n\napp.get('*', function (req, res, next) {\n  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_7__.default.find(function (route) {\n    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.matchPath)(req.url, route);\n  }) || {};\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_8__.ServerStyleSheet();\n  var context = req.query.coreCartId;\n  var markup = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_shared_App__WEBPACK_IMPORTED_MODULE_3__.default, null))));\n  res.send(\"\\n    <!DOCTYPE html>\\n    <html>\\n        <head>\\n            <title> Messenger </title>\\n            <script src='/bundle.js' defer></script>\\n            \".concat(sheet.getStyleTags(), \"\\n            <link rel=\\\"stylesheet\\\" href=\\\"App.css\\\">\\n            <script>window.__INITIAL_DATA__ = \\\"\").concat(context, \"\\\"</script>\\n            <meta\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n            <script src=\\\"https://mapa.ecommerce.poczta-polska.pl/widget/scripts/ppwidget.js \\\">   </script> \\n            <script async src=\\\"https://geowidget.easypack24.net/js/sdk-for-javascript.js\\\"></script>\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://geowidget.easypack24.net/css/easypack.css\\\"/>\\n        </head>\\n        <body style=\\\"margin: 0\\\">\\n            <div id='app'>\").concat(markup, \"</div>\\n        <body/>\\n    </html>\\n    \"));\n});\napp.listen(4000, function () {\n  console.log('server run  on 4000');\n});\n\n//# sourceURL=webpack://creator/./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _excluded = [\"path\", \"exact\", \"component\"];\n\nvar _templateObject, _templateObject2;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n////////////////////////////////////////////////////////////////// IMPORTS ////////////////////////////////////////////////// \n\n\n\n // pink background #F3EDFF\n// blue msg background #F4F7FF\n// pink details #f73b92\n// purple messages #7252F1\n// green online #91E04C\n////////////////////////////////////////////////////////////////// MAIN COMPONENT STYLEDCOMPONENT STYLING /////////////////// \n\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    background-color: #F3EDFF;\\n    height: 100vh;\\n    width: 100vw;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"])));\nvar StyledInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n    width: 800px;\\n    height: 600px;\\n    background: white;\\n    border-radius: 20px;\\n    box-shadow: 0 20px 20px 1px rgba(114, 100, 255, 0.3);\\n    overflow: hidden;\\n\\n\"])));\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {});\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledInnerWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, \" \", _routes__WEBPACK_IMPORTED_MODULE_1__.default.map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            C = _ref.component,\n            rest = _objectWithoutProperties(_ref, _excluded);\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            var _React$createElement;\n\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, (_React$createElement = {\n              changeQuantity: _this2.changeQuantity,\n              state: _this2.state,\n              handleIsInvoiceNeeded: _this2.handleIsInvoiceNeeded,\n              removeFromCart: _this2.removeFromCart,\n              notification: _this2.notification,\n              choosePaymentMethod: _this2.choosePaymentMethod\n            }, _defineProperty(_React$createElement, \"notification\", _this2.notification), _defineProperty(_React$createElement, \"setFormDetails\", _this2.setFormDetails), _defineProperty(_React$createElement, \"setLoginUser\", _this2.setLoginUser), _defineProperty(_React$createElement, \"chooseDeliveryForPackage\", _this2.chooseDeliveryForPackage), _defineProperty(_React$createElement, \"setDeliveryDetailsForKurier\", _this2.setDeliveryDetailsForKurier), _React$createElement));\n          }\n        });\n      })))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App); // TODO obsłużyć załadowanie koszyka z  unikalnym id\n// TODO zfetchować koszyk z core na podstawie unikalnego id \n// TODO zapisać koszyk do DB a następnie pobrać go na front tak samo zapisywać wszystkie dane np wysyłkę formularze itd\n// TODO przy edytowaniu przekazywać ID koszyka wyszukać w bazie edytować go np ilość i zapisać do bazy\n// TODO Wyliczać wartość koszyka na podstawie koszyka pobranego po ID z bazy\n// TODO wykonać request do płatności, zapisać dane transakcji do db  i przekierować klienta na strone płatności \n// TODO po potwierdzeniu płatności wysłać do Core zamówienie zgodnie ze strukturą Api\n// TODO zintegorwać formy płatności\n// TODO change P24 to Production Mode \n// TODO dodać odbieranie potwierdzenia wykonania wpłaty\n// TODO obliczać wartość zamówienia na backendzie bo na froncie może klient zmieniać wartość zamówienia i taka wartość idzie do P24\n//Mała prośba, żeby id produktu nie nazywał się klucz SKU tylko variation_id bo to i tak bedzie id wariacji z core\n\n//# sourceURL=webpack://creator/./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Home.js":
/*!****************************!*\
  !*** ./src/shared/Home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n ///////////////////////////////////////////////////////////////////////////////////////////////////////// MAIN COMPONENT\n\nvar StyledHomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n\"])));\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledHomeWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Contacts, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Messages, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home); ////////////////////////////////////////////////////////////////////////////////////////////////////////// CONTACTS\n\nvar StyledContactList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n    width: 40%;\\n    height: 100%;\\n    box-sizing: border-box;\\n    padding: 20px;\\n\\n\"])));\nvar StyledContactsTopBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: auto;\\n    display: flex;\\n    flex-direction: column;\\n\\n\\n    button{\\n        border: none;\\n        background: transparent;\\n        color: #f73b92;\\n        display: flex;\\n        align-items: center;\\n        font-weight: 700;\\n        font-size: 15px;\\n        cursor: pointer;\\n    }\\n\\n    div{\\n        display: flex;\\n        margin-bottom: 10px;\\n        justify-content: space-between;\\n        align-items: center;\\n        height: 50px;\\n        \\n\\n        button{\\n            color: #4743A8;\\n            font-weight: 700;\\n            font-size: 25px;\\n        }\\n\\n        section{\\n            display: flex;\\n        }\\n    }\\n\"])));\nvar StyledContactsUsersList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n\"])));\n\nvar Contacts = function Contacts() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContactList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContactsTopBar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiMenu, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiSearchAlt2, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiMinusBack, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiDotsVerticalRounded, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiPlusCircle, null), \"Nowa wiadomo\\u015B\\u0107\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContactsUsersList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Contact, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Contact, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Contact, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Contact, null)));\n}; ////////////////////////////////////////////////////////////////////////////////////////////////////////// CONTACT\n\n\nvar StyledContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: 50px;\\n    display: flex;\\n    align-items: center;\\n    box-sizing: border-box;\\n    justify-content: space-between;\\n    padding: 10px;\\n\\n    section{\\n        display: flex;\\n        height: 100%;\\n    }\\n\\n    .user-image{\\n        width: 30px;\\n        height: 100%;\\n        border-radius: 50px;\\n        overflow: hidden;\\n        background-size: cover;\\n        background-position: center;\\n        margin-right: 10px;\\n\\n\\n        img{\\n            max-height: 100%;\\n            max-width: 100%;\\n        }\\n    }\\n    h5{\\n        color: #000;\\n    }\\n\\n    p{\\n        font-size: 10px;\\n        color: #bbb;\\n    }\\n\\n    .last-msg-time{\\n        height: 100%;\\n        display: flex;\\n        align-items: center;\\n        align-self: flex-end;\\n    }\\n    \\n\"])));\n\nvar Contact = function Contact() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContactWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"user-image\",\n    style: {\n      backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Jan Nowak\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Ty: Siema co robisz?\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"last-msg-time\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"21.37\")));\n}; ////////////////////////////////////////////////////////////////////////////////////////////////////////// MESSAGES \n\n\nvar StyledMessages = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n    height: 100%;\\n    width: 60%;\\n    background: #F4F7FF;\\n    box-sizing: border-box;\\n    padding: 50px;\\n    padding-bottom: 0;\\n    padding-top: 0;\\n    display: flex;\\n    flex-direction: column;\\n    position: relative;\\n    margin-bottom: 100px;\\n\"])));\nvar StyledNewMessageForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    position: absolute;\\n    height: 80px;\\n    left: 0;\\n    bottom: 0;\\n    box-sizing: border-box;\\n    padding: 10px;\\n\\n\\n    section{\\n        width: 100%;\\n        height: 100%;\\n        border-top: 1px solid #e6e9f0;\\n        display: flex;\\n        justify-content: space-between;\\n\\n        button{\\n            background: transparent;\\n            border: none;\\n            color: #4743A8;\\n            display: flex;\\n            align-items: center;\\n            font-size: 30px;\\n            cursor: pointer;\\n        }\\n\\n        input{\\n            flex-grow: 1;\\n            background: transparent;\\n            border: none;\\n            box-sizing: border-box;\\n            padding: 10px;\\n        }\\n    }\\n\"])));\nvar StyledMessagesTopbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: 50px;\\n    display: flex;\\n    aling-items: center;\\n    box-sizing: border-box;\\n    padding: 20px;\\n    position: sticky;\\n    top: 0;\\n    color: #000;\\n    font-weight: 700;\\n\"])));\n\nvar Messages = function Messages() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledMessages, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledMessagesTopbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Jan Nowak\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SomeoneMessage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserMessage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SomeoneMessage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SomeoneMessage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserMessage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserMessage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledNewMessageForm, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Wiadomo\\u015B\\u0107\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiSend, null)))));\n}; ////////////////////////////////////////////////////////////////////////////////////////////////////////// SOMEONE MESSAGE\n\n\nvar StyledSomeoneMessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: auto;\\n    display: flex;\\n    justify-content: flex-start;\\n    margin-top: 10px;\\n    flex-direction: column;\\n\\n    span{\\n        font-size: 10px;\\n        color: #bbb;\\n    }\\n\\n    section{\\n        display: flex;\\n        width: auto;\\n        max-width: 60%;\\n    }\\n\\n    .user-image{\\n        width: 40px;\\n        height: 40px;\\n        border-radius: 50px;\\n        overflow: hidden;\\n        background-size: cover;\\n        background-position: center;\\n        margin-right: 10px;\\n\\n\\n        img{\\n            max-height: 40px;\\n            max-width: 40px;\\n        }\\n    }\\n\\n    p{\\n        border-radius: 5px;\\n        background: #7252F1;\\n        box-sizing: border-box;\\n        padding: 10px;\\n        color: #fff;\\n        font-size: 12px;\\n\\n    }\\n\"])));\n\nvar SomeoneMessage = function SomeoneMessage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledSomeoneMessageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"user-image\",\n    style: {\n      backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"siema co tam porabiasz? bo u mnie w sumie nic ciekawe :D\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"21.37\"));\n}; ////////////////////////////////////////////////////////////////////////////////////////////////////////// USER MESSAGE\n\n\nvar StyledUserMessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: auto;\\n    display: flex;\\n    align-items: flex-end;\\n    margin-top: 10px;\\n    flex-direction: column;\\n\\n    span{\\n        font-size: 10px;\\n        color: #bbb;\\n    }\\n\\n    section{\\n        display: flex;\\n        width: auto;\\n        max-width: 60%;\\n        height: auto;\\n        \\n    }\\n\\n    .user-image{\\n        width: 40px ;\\n        height: 40px;\\n        border-radius: 50%;\\n        overflow: hidden;\\n        background-size: cover;\\n        background-position: center\\n    }\\n\\n    p{\\n        flex-grow: 1;\\n        border-radius: 5px;\\n        background: #fff;\\n        box-sizing: border-box;\\n        padding: 10px;\\n        color: #000;\\n        font-size: 12px;\\n        margin-right: 10px;\\n    }\\n\"])));\n\nvar UserMessage = function UserMessage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledUserMessageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"siema co tam porabiasz?  Bo u mnie te\\u017C nic ciekawego wiec ...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"user-image\",\n    style: {\n      backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)'\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"21.38\"));\n};\n\n//# sourceURL=webpack://creator/./src/shared/Home.js?");

/***/ }),

/***/ "./src/shared/Login.js":
/*!*****************************!*\
  !*** ./src/shared/Login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Login = function Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://creator/./src/shared/Login.js?");

/***/ }),

/***/ "./src/shared/Register.js":
/*!********************************!*\
  !*** ./src/shared/Register.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Register = function Register() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n\n//# sourceURL=webpack://creator/./src/shared/Register.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/shared/Home.js\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ \"./src/shared/Login.js\");\n/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register */ \"./src/shared/Register.js\");\n\n\n ////////////////////////////////////////  DYNAMIC ROUTES FOR APP COMPONENT ////////////////////////////////////\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _Home__WEBPACK_IMPORTED_MODULE_0__.default\n}, {\n  path: '/payment',\n  exact: true,\n  component: _Login__WEBPACK_IMPORTED_MODULE_1__.default\n}, {\n  path: '/register',\n  exact: true,\n  component: _Register__WEBPACK_IMPORTED_MODULE_2__.default\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://creator/./src/shared/routes.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "password-hash":
/*!********************************!*\
  !*** external "password-hash" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("password-hash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "uri-js":
/*!*************************!*\
  !*** external "uri-js" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("uri-js");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;