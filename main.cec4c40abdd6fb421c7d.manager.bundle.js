(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{454:function(module,exports,__webpack_require__){__webpack_require__(455),__webpack_require__(844),__webpack_require__(850),__webpack_require__(853),__webpack_require__(845),__webpack_require__(848),__webpack_require__(847),__webpack_require__(849),__webpack_require__(846),__webpack_require__(851),module.exports=__webpack_require__(852)},522:function(module,exports){},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,esm=__webpack_require__(115),types=__webpack_require__(428),ADDON_ID="storybook/react-runner",PANEL_ID="".concat(ADDON_ID,"/panel"),EVENTS={SET_CODE:"".concat(ADDON_ID,"/set-code")},react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist_esm=__webpack_require__(7),addon_panel=__webpack_require__(861),theming_dist_esm=__webpack_require__(1),index_esm=__webpack_require__(446);var CodeEditor=Object(theming_dist_esm.styled)(index_esm.a)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 14px;\n  white-space: pre;\n  caret-color: #fff;\n  min-width: 100%;\n  min-height: 100%;\n  float: left;\n\n  & > textarea,\n  & > pre {\n    outline: none;\n    white-space: pre !important;\n  }\n"]))),Panel_handleChange=function handleChange(code){esm.a.getChannel().emit(EVENTS.SET_CODE,code)},Panel_Panel=function Panel(props){var _useParameter,source=(null===(_useParameter=Object(dist_esm.n)("storySource"))||void 0===_useParameter?void 0:_useParameter.source)||"",options=Object(dist_esm.n)("reactRunner");return react_default.a.createElement(addon_panel.a,props,react_default.a.createElement(CodeEditor,{key:source,disabled:null==options?void 0:options.disabled,padding:"1rem",defaultValue:source,onChange:Panel_handleChange}))};esm.a.register(ADDON_ID,(function(){esm.a.add(PANEL_ID,{type:types.a.PANEL,title:"Live Code",match:function match(_ref){return"story"===_ref.viewMode},render:Panel_Panel})}))}},[[454,2,3]]]);