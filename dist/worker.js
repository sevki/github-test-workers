!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=3)}([function(e,t,r){"use strict";e.exports=r(4)},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in r=Object(arguments[u]))o.call(r,c)&&(a[c]=r[c]);if(n){i=n(r);for(var s=0;s<i.length;s++)l.call(r,i[s])&&(a[i[s]]=r[i[s]])}}return a}},function(e,t,r){"use strict";e.exports=r(5)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),l=r(2),i=r.n(l);const a='<!DOCTYPE html>\n<html lang="en">\n  <title>Cloudflare Workers Github Test</title>\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <style>\n\n  </style>\n  <body><div id="app">',u="</div>\n</body>\n</html>";let c={"/":o.a.createElement(class extends o.a.Component{render(){return o.a.createElement("div",{className:"App-header"},"This works.")}},null)};self.addEventListener("fetch",e=>{e.respondWith(async function(e){const t=new URL(e.request.url);let r=i.a.renderToString(c[t.pathname]);return new Response(a+r+u,{headers:{"Content-Type":"text/html"}})}(e))})},function(e,t,r){"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(1),o="function"==typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,l,i,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,l,i,a],c=0;(e=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function x(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||b}function k(){}function S(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||b}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=x.prototype;var _=S.prototype=new k;_.constructor=S,n(_,x.prototype),_.isPureReactComponent=!0;var C={current:null,currentDispatcher:null},O=Object.prototype.hasOwnProperty,F={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n=void 0,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!F.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var j=/\/+/g,M=[];function N(e,t,r,n){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function T(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var u=!1;if(null===t)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case l:case i:u=!0}}if(u)return n(o,t,""===r?"."+$(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=r+$(a=t[c],c);u+=e(a,s,n,o)}else if(s=null===t||"object"!=typeof t?null:"function"==typeof(s=v&&t[v]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(a=t.next()).done;)u+=e(a=a.value,s=r+$(a,c++),n,o);else"object"===a&&g("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return u}(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,n,r,function(e){return e}):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+r)),n.push(e))}function V(e,t,r,n,o){var l="";null!=r&&(l=(""+r).replace(j,"$&/")+"/"),T(e,R,t=N(t,l,n,o)),I(t)}var A={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return V(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,D,t=N(null,null,t,r)),I(t)},count:function(e){return T(e,function(){return null},null)},toArray:function(e){var t=[];return V(e,t,null,function(e){return e}),t},only:function(e){return P(e)||g("143"),e}},createRef:function(){return{current:null}},Component:x,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},Fragment:a,StrictMode:u,Suspense:h,createElement:E,cloneElement:function(e,t,r){(null===e||void 0===e)&&g("267",e);var o=void 0,i=n({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=C.current),void 0!==t.key&&(a=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)O.call(t,o)&&!F.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:l,type:e.type,key:a,ref:u,props:i,_owner:c}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.6.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:n}};A.unstable_ConcurrentMode=p,A.unstable_Profiler=c;var L={default:A},W=L&&A||L;e.exports=W.default||W},function(e,t,r){"use strict";
/** @license React v16.6.1
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(1),o=r(0);function l(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,l,i,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,l,i,a],c=0;(e=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.portal"):60106,u=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,s=i?Symbol.for("react.profiler"):60114,f=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.concurrent_mode"):60111,h=i?Symbol.for("react.forward_ref"):60112,y=i?Symbol.for("react.suspense"):60113,m=i?Symbol.for("react.memo"):60115,v=i?Symbol.for("react.lazy"):60116;function g(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case d:return"ConcurrentMode";case u:return"Fragment";case a:return"Portal";case s:return"Profiler";case c:return"StrictMode";case y:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case p:return"Context.Consumer";case f:return"Context.Provider";case h:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return g(e.type);case v:if(e=1===e._status?e._result:null)return g(e)}return null}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x=Object.prototype.hasOwnProperty,k={},S={};function _(e){return!!x.call(S,e)||!x.call(k,e)&&(w.test(e)?S[e]=!0:(k[e]=!0,!1))}function C(e,t,r,n){if(null===t||void 0===t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,r,n,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new O(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];F[t]=new O(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new O(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new O(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new O(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new O(e,3,!0,e,null)}),["capture","download"].forEach(function(e){F[e]=new O(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){F[e]=new O(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){F[e]=new O(e,5,!1,e.toLowerCase(),null)});var E=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,P);F[t]=new O(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,P);F[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,P);F[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),F.tabIndex=new O("tabIndex",1,!1,"tabindex",null);var j=/["'&<>]/;function M(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=j.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var N=!1;function I(e,t,r,n){for(;N;)N=!1,r=e(t,n);return r}var T={readContext:function(e){return e._currentValue}},$={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function D(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var R={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},V=n({menuitem:!0},R),A={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(A).forEach(function(e){L.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),A[t]=A[e]})});var W=/([A-Z])/g,U=/^ms-/,z=o.Children.toArray,q=b.ReactCurrentOwner,H={listing:!0,pre:!0,textarea:!0},B=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Z={},G={};var Y={};var X=Object.prototype.hasOwnProperty,J={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function K(e,t){void 0===e&&l("152",g(t)||"Component")}function Q(e,t){function r(r,o){var i=function(e,t){var r=e.contextType;if("object"==typeof r&&null!==r)return r._currentValue;if(e=e.contextTypes){for(var n in r={},e)r[n]=t[n];t=r}else t=Y;return t}(o,t),a=[],u=!1,c={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===a)return null},enqueueReplaceState:function(e,t){u=!0,a=[t]},enqueueSetState:function(e,t){if(null===a)return null;a.push(t)}},s=void 0;if(o.prototype&&o.prototype.isReactComponent){if(s=new o(r.props,i,c),"function"==typeof o.getDerivedStateFromProps){var f=o.getDerivedStateFromProps.call(null,r.props,s.state);null!=f&&(s.state=n({},s.state,f))}}else if(s=o(r.props,i,c),null==(s=I(o,r.props,s,i))||null==s.render)return void K(e=s,o);if(s.props=r.props,s.context=i,s.updater=c,void 0===(c=s.state)&&(s.state=c=null),"function"==typeof s.UNSAFE_componentWillMount||"function"==typeof s.componentWillMount)if("function"==typeof s.componentWillMount&&"function"!=typeof o.getDerivedStateFromProps&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&"function"!=typeof o.getDerivedStateFromProps&&s.UNSAFE_componentWillMount(),a.length){c=a;var p=u;if(a=null,u=!1,p&&1===c.length)s.state=c[0];else{f=p?c[0]:s.state;var d=!0;for(p=p?1:0;p<c.length;p++){var h=c[p];null!=(h="function"==typeof h?h.call(s,f,r.props,i):h)&&(d?(d=!1,f=n({},f,h)):n(f,h))}s.state=f}}else a=null;if(K(e=s.render(),o),r=void 0,"function"==typeof s.getChildContext&&"object"==typeof(i=o.childContextTypes))for(var y in r=s.getChildContext())y in i||l("108",g(o)||"Unknown",y);r&&(t=n({},t,r))}for(;o.isValidElement(e);){var i=e,a=i.type;if("function"!=typeof a)break;r(i,a)}return{child:e,context:t}}var ee=function(){function e(t,r){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");o.isValidElement(t)?t.type!==u?t=[t]:(t=t.props.children,t=o.isValidElement(t)?[t]:z(t)):t=z(t),this.stack=[{type:null,domNamespace:$.html,children:t,childIndex:0,context:Y,footer:""}],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=r,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=r._currentValue;this.contextStack[t]=r,this.contextValueStack[t]=n,r._currentValue=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t._currentValue=r},e.prototype.read=function(e){if(this.exhausted)return null;var t=q.currentDispatcher;q.currentDispatcher=T;try{for(var r="";r.length<e;){if(0===this.stack.length){this.exhausted=!0;break}var n=this.stack[this.stack.length-1];if(n.childIndex>=n.children.length){var o=n.footer;r+=o,""!==o&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===n.type?this.currentSelectValue=null:null!=n.type&&null!=n.type.type&&n.type.type.$$typeof===f&&this.popProvider(n.type)}else{var l=n.children[n.childIndex++];r+=this.render(l,n.context,n.domNamespace)}}return r}finally{q.currentDispatcher=t}},e.prototype.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""===(r=""+e)?"":this.makeStaticMarkup?M(r):this.previousWasTextNode?"\x3c!-- --\x3e"+M(r):(this.previousWasTextNode=!0,M(r));if(e=(t=Q(e,t)).child,t=t.context,null===e||!1===e)return"";if(!o.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var i=e.$$typeof;i===a&&l("257"),l("258",i.toString())}return e=z(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(i=e.type))return this.renderDOM(e,t,r);switch(i){case c:case d:case s:case u:return e=z(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case y:l("294")}if("object"==typeof i&&null!==i)switch(i.$$typeof){case h:var g=i.render(e.props,e.ref);return g=I(i.render,e.props,g,e.ref),g=z(g),this.stack.push({type:null,domNamespace:r,children:g,childIndex:0,context:t,footer:""}),"";case m:return e=[o.createElement(i.type,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case f:return r={type:e,domNamespace:r,children:i=z(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case p:return i=z(e.props.children(e.type._currentValue)),this.stack.push({type:e,domNamespace:r,children:i,childIndex:0,context:t,footer:""}),"";case v:l("295")}l("130",null==i?i:typeof i,"")},e.prototype.renderDOM=function(e,t,r){var i=e.type.toLowerCase();r===$.html&&D(i),Z.hasOwnProperty(i)||(B.test(i)||l("65",i),Z[i]=!0);var a=e.props;if("input"===i)a=n({type:void 0},a,{defaultChecked:void 0,defaultValue:void 0,value:null!=a.value?a.value:a.defaultValue,checked:null!=a.checked?a.checked:a.defaultChecked});else if("textarea"===i){var u=a.value;if(null==u){u=a.defaultValue;var c=a.children;null!=c&&(null!=u&&l("92"),Array.isArray(c)&&(1>=c.length||l("93"),c=c[0]),u=""+c),null==u&&(u="")}a=n({},a,{value:void 0,children:""+u})}else if("select"===i)this.currentSelectValue=null!=a.value?a.value:a.defaultValue,a=n({},a,{value:void 0});else if("option"===i){c=this.currentSelectValue;var s=function(e){if(void 0===e||null===e)return e;var t="";return o.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(a.children);if(null!=c){var f=null!=a.value?a.value+"":s;if(u=!1,Array.isArray(c)){for(var p=0;p<c.length;p++)if(""+c[p]===f){u=!0;break}}else u=""+c===f;a=n({selected:void 0,children:void 0},a,{selected:u,children:s})}}for(w in(u=a)&&(V[i]&&(null!=u.children||null!=u.dangerouslySetInnerHTML)&&l("137",i,""),null!=u.dangerouslySetInnerHTML&&(null!=u.children&&l("60"),"object"==typeof u.dangerouslySetInnerHTML&&"__html"in u.dangerouslySetInnerHTML||l("61")),null!=u.style&&"object"!=typeof u.style&&l("62","")),u=a,c=this.makeStaticMarkup,s=1===this.stack.length,f="<"+e.type,u)if(X.call(u,w)){var d=u[w];if(null!=d){if("style"===w){p=void 0;var h="",y="";for(p in d)if(d.hasOwnProperty(p)){var m=0===p.indexOf("--"),v=d[p];if(null!=v){var g=p;if(G.hasOwnProperty(g))g=G[g];else{var b=g.replace(W,"-$1").toLowerCase().replace(U,"-ms-");g=G[g]=b}h+=y+g+":",y=p,h+=m=null==v||"boolean"==typeof v||""===v?"":m||"number"!=typeof v||0===v||A.hasOwnProperty(y)&&A[y]?(""+v).trim():v+"px",y=";"}}d=h||null}p=null;e:if(m=i,v=u,-1===m.indexOf("-"))m="string"==typeof v.is;else switch(m){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":m=!1;break e;default:m=!0}m?J.hasOwnProperty(w)||(p=_(p=w)&&null!=d?p+'="'+M(d)+'"':""):(m=w,p=d,d=F.hasOwnProperty(m)?F[m]:null,(v="style"!==m)&&(v=null!==d?0===d.type:2<m.length&&("o"===m[0]||"O"===m[0])&&("n"===m[1]||"N"===m[1])),v||C(m,p,d,!1)?p="":null!==d?(m=d.attributeName,p=3===(d=d.type)||4===d&&!0===p?m+'=""':m+'="'+M(p)+'"'):p=_(m)?m+'="'+M(p)+'"':""),p&&(f+=" "+p)}}c||s&&(f+=' data-reactroot=""');var w=f;u="",R.hasOwnProperty(i)?w+="/>":(w+=">",u="</"+e.type+">");e:{if(null!=(c=a.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=a.children)||"number"==typeof c){c=M(c);break e}c=null}return null!=c?(a=[],H[i]&&"\n"===c.charAt(0)&&(w+="\n"),w+=c):a=z(a.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?D(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:i,children:a,childIndex:0,context:t,footer:u}),this.previousWasTextNode=!1,w},e}(),te={renderToString:function(e){return new ee(e,!1).read(1/0)},renderToStaticMarkup:function(e){return new ee(e,!0).read(1/0)},renderToNodeStream:function(){l("207")},renderToStaticNodeStream:function(){l("208")},version:"16.6.1"},re={default:te},ne=re&&te||re;e.exports=ne.default||ne}]);