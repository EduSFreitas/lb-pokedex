!function(e){function t(t){for(var a,l,o=t[0],u=t[1],i=t[2],f=0,m=[];f<o.length;f++)l=o[f],r[l]&&m.push(r[l][0]),r[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(s&&s(t);m.length;)m.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=u;c.push([183,1]),n()}({104:function(e,t,n){e.exports=n.p+"src/Filter/icons/search.svg"},105:function(e,t,n){e.exports=n.p+"src/Filter/icons/clear.svg"},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){},144:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);n(73),n(112),n(113);var a=n(0),r=n.n(a),c=n(103),l=n.n(c),o=n(70),u=n(21),i=(n(25),n(34),n(35),n(64),n(88),n(89),n(36),n(26),n(126),n(51),n(38),n(20),n(95),n(39),n(130),n(40),n(131),function(e){var t=e.children;return r.a.createElement("div",{className:"NavigationPanel"},t)}),s=(n(132),n(104)),f=n.n(s),m=n(105),p=n.n(m),v=function(e){var t=e.value,n=e.setValue;return r.a.createElement("div",{className:"Filter"},r.a.createElement("img",{src:f.a,className:"Filter_searchIcon"}),r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value.toLocaleLowerCase())},placeholder:"Search...",className:"Filter_input"}),""!==t?r.a.createElement("img",{src:p.a,onClick:function(e){return n("")},className:"Filter_clearIcon",title:"Clear"}):null)},d=(n(133),function(e){var t=e.data,n=e.selected,a=e.ItemComponent,c=e.onSelectItem;return r.a.createElement("ol",{className:"List"},t.map(function(e){return r.a.createElement(a,{key:e.name,pokemon:e.name,selected:n.includes(e.name),onSelect:c})}))}),h=(n(134),function(e){var t=e.pokemon,n=e.selected,a=e.onSelect;return r.a.createElement("li",{className:"ListItem "+(n?"ListItem__selected":"")},r.a.createElement("a",{className:"ListItem_link",onClick:function(e){return a(t)}},r.a.createElement("input",{className:"ListItem_checkbox",type:"checkbox",checked:n,readOnly:!0}),t))}),b=(n(135),function(e){var t=e.selectedCount,n=e.totalCount;return r.a.createElement("div",{className:"Statusbar"},0!==t?r.a.createElement("span",{className:"Statusbar_selectedCount"},t," Selected"):null,r.a.createElement("span",{className:"Statusbar_totalCount"},n," Total"))}),y=(n(136),function(e){var t=e.active,n=e.onClick,a=e.children;return r.a.createElement("div",{className:"DetailPanel ".concat(t?"DetailPanel__active":""),onClickCapture:n},a)}),E=(n(137),n(139),Object(a.memo)(function(){return r.a.createElement("svg",{className:"Pokeball",height:"256",width:"256",viewBox:"0 0 256 256"},r.a.createElement("path",{id:"mainsymbolpath",className:"Pokeball_path",d:"m 154.54015,127.99605 c 0,14.65791 -11.88258,26.5405 -26.54049,26.5405 -14.65792,0 -26.5405,-11.88259 -26.5405,-26.5405 0,-14.65791 11.88258,-26.5405 26.5405,-26.5405 14.65791,0 26.54049,11.88259 26.54049,26.5405 z M 127.98849,38 C 82.019956,38 44.102136,72.45551 38.65601,116.95141 l 48.360613,0 c 4.858969,-18.07571 21.360667,-31.3734 40.971867,-31.3734 19.6112,0 36.13066,13.29769 40.99488,31.3734 l 48.36062,0 C 211.8949,72.45551 173.95702,38 127.98849,38 z M 38.65601,139.04859 C 44.102136,183.54449 82.019956,218 127.98849,218 c 45.96853,0 83.90641,-34.45551 89.3555,-78.95141 l -48.36062,0 c -4.86422,18.07571 -21.38368,31.37341 -40.99488,31.37341 -19.6112,0 -36.112898,-13.2977 -40.971867,-31.37341 l -48.360613,0 z"}))}));function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function k(e){var t=e.children,n=Object(a.useRef)(),c=g(Object(a.useState)(!1),2),l=c[0],o=c[1];return Object(a.useEffect)(function(){n.current&&!1===l&&(n.current.scrollIntoView({behavior:"smooth"}),o(!0))},[t,l]),r.a.createElement("div",{ref:n},t)}n(140),n(141);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){var t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top;return{x:n/t.width*200-100,y:a/t.height*200-100}},_=function(e){var t=e.children,n=O(Object(a.useState)({x:0,y:0}),2),c=n[0],l=n[1],o=O(Object(a.useState)(100),2),u=o[0],i=o[1],s=Object(a.useCallback)(function(e){l(w(e)),setTimeout(function(){i(0)},u)},[]),f=Object(a.useCallback)(function(e){u||l(w(e))},[u]),m=Object(a.useCallback)(function(e){i(250),setTimeout(function(){i(100)}),l({x:0,y:0})},[]),p=c.x||c.y;return r.a.createElement("div",{className:"Tilt",onMouseEnter:s,onMouseMove:f,onMouseLeave:m},r.a.createElement("div",{className:"Tilt_wrapper",style:{filter:p?"\n                                drop-shadow(\n                                    ".concat(.1*c.x,"px\n                                    ").concat(.1*c.y,"px\n                                    ").concat("20px","\n                                    ").concat("rgba(0, 0, 0, 0.5)","\n                                )\n                            "):"",transform:"\n                        perspective(".concat("600px",")\n                        rotateY(").concat(-.07*c.x,"deg)\n                        rotateX(").concat(.07*c.y,"deg)\n                        ").concat(p?"scale3d(".concat(1.07,", ").concat(1.07,", ").concat(1.07,")"):"","\n                    "),transition:u?"\n                                transform ".concat(u,"ms ").concat("ease-in-out",",\n                                filter ").concat(u,"ms ").concat("ease-in-out","\n                            "):""}},t))};n(142),n(144);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N=function(e){var t=S(Object(a.useState)(!1),2),n=t[0],c=t[1],l=Object(a.useCallback)(function(){return c(!0)});return r.a.createElement("div",{className:"Image"},n?null:r.a.createElement("div",{className:"Image_overlay"},r.a.createElement(E,null)),r.a.createElement("img",j({},e,{onLoad:l})))},x=(n(145),n(147),n(150),function(e){var t=e.data,n=e.reference;return n===t&&(n=null),r.a.createElement("div",{className:"Stats"},r.a.createElement(D,null,n?n.name:null),r.a.createElement("div",{className:"Stats_entries"},t.stats.map(function(e,t){return r.a.createElement(A,{key:e.stat.name,label:C(e.stat.name),value:e.base_stat,referenceValue:n?n.stats[t].base_stat:null,unit:""})}),r.a.createElement(A,{label:"Height",value:t.height/10,referenceValue:n?n.height/10:null,unit:"m"}),r.a.createElement(A,{label:"Weight",value:t.weight/10,referenceValue:n?n.weight/10:null,unit:"kg"})))}),C=function(){var e={attack:"atk",defense:"def","special-attack":"sp-atk","special-defense":"sp-def",speed:"spd",hp:"hp"};return function(t){return e[t]}}(),A=function(e){var t=e.label,n=e.value,a=e.referenceValue,c=e.unit;return r.a.createElement("div",{className:"Stats_entry"},a?r.a.createElement(I,null,n-a):null,r.a.createElement(P,null,n),r.a.createElement("span",{className:"Stats_entryUnit"},c),r.a.createElement("div",{className:"Stats_entryLabel"},t))},P=function(e){var t=e.children;return r.a.createElement("span",{className:"Stats_entryAbsolute"},t)},I=function(e){var t,n=e.children;switch(Math.sign(n)){case-1:t="negative";break;case 1:t="positive";break;case 0:default:t="neutral"}return r.a.createElement("span",{className:"Stats_entryRelative Stats_entryRelative__".concat(t)},+Math.abs(n).toFixed(1))},D=Object(a.memo)(function(e){var t=e.children;return t?r.a.createElement("div",{className:"Stats_versus"},r.a.createElement("span",{className:"Stats_versusAcronym"},"vs."),r.a.createElement("span",{className:"Stats_versusName"},t)):r.a.createElement("div",{className:"Stats_versus"})});n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(98),n(171),n(101);function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t,n,a,r,c,l){try{var o=e[c](l),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(a,r)}var M=function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=18;break}return e.prev=1,e.next=4,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 4:if(200!==(n=e.sent).status){e.next=12;break}return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",R(a));case 12:return e.abrupt("return",null);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(1),e.abrupt("return",null);case 18:case"end":return e.stop()}},e,null,[[1,15]])}),function(){var t=this,n=arguments;return new Promise(function(a,r){var c=e.apply(t,n);function l(e){T(c,a,r,l,o,"next",e)}function o(e){T(c,a,r,l,o,"throw",e)}l(void 0)})});return function(e){return t.apply(this,arguments)}}(),R=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){F(e,t,n[t])})}return e}({},e,{stats:e.stats.concat().sort(L)})},B=["attack","defense","special-attack","special-defense","speed","hp"],L=function(e,t){return B.indexOf(e.stat.name)>B.indexOf(t.stat.name)?1:-1};function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z,J=Object(a.memo)(function(e){var t=e.pokemon,n=e.onRemove,c=e.onSelect,l=e.active,o=e.reference,u=V(Object(a.useState)(null),2),i=u[0],s=u[1];Object(a.useEffect)(function(){M(t).then(s)},[t]);var f=Object(a.useCallback)(i?c.bind(null,i.name,i):function(){},[i,c]),m=Object(a.useCallback)(i?n.bind(null,i.name):function(){},[i,n]);return null===i?r.a.createElement(k,null,r.a.createElement("div",{className:"Detail"},r.a.createElement(E,null))):r.a.createElement(_,null,r.a.createElement(k,null,r.a.createElement("div",{className:"Detail ".concat(l?"Detail__active":""),onClick:f},r.a.createElement(X,{data:i.types}),r.a.createElement(N,{className:"Detail_image",src:i.sprites.front_default}),r.a.createElement("div",{className:"Detail_name"},i.name),r.a.createElement(x,{data:i,reference:o}),r.a.createElement(W,{onClick:m}))))}),W=Object(a.memo)(function(e){var t=e.onClick;return r.a.createElement("button",{className:"Detail_removeButton",onClick:function(e){e.stopPropagation(),t()},title:"Remove"},"✕")}),X=function(e){var t=e.data;return r.a.createElement("div",{className:"Detail_types"},r.a.createElement("div",{className:"Detail_typesWrapper"},t.map(function(e){return r.a.createElement("div",{className:"Detail_type Detail_type__".concat(e.type.name),style:{background:"".concat(Y(e.type.name))},title:e.type.name},r.a.createElement("span",{className:"Detail_typeName"},e.type.name))})))},Y=(z={normal:"#A8A878",fighting:"#C03028",flying:"#A890F0",poison:"#A040A0",ground:"#E0C068",rock:"#B8A038",bug:"#B8A038",ghost:"#705898",steel:"#B8B8D0",fire:"#F08030",water:"#6890F0",grass:"#78C850",electric:"#F8D030",psychic:"#F85888",ice:"#98D8D8",dragon:"#7038F8",dark:"#705848",fairy:"#F0B6BC",unknown:"#6AA596",shadow:"#705898"},function(e){return z[e]}),G=(n(172),function(e){var t=e.children;return r.a.createElement("div",{className:"Grid"},t)}),H=(n(173),function(){return r.a.createElement("div",{className:"EmptySelection"},r.a.createElement("div",{className:"EmptySelection_message"},"No selection"))});function U(e,t,n,a,r,c,l){try{var o=e[c](l),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(a,r)}var q=function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?limit=802");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var c=e.apply(t,n);function l(e){U(c,a,r,l,o,"next",e)}function o(e){U(c,a,r,l,o,"throw",e)}l(void 0)})});return function(){return t.apply(this,arguments)}}();n(174);function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Q=Object(u.d)(function(e){var t=K(Object(a.useState)([]),2),n=t[0],c=t[1],l=K(Object(a.useState)(e.selected),2),o=l[0],u=l[1],s=K(Object(a.useState)(""),2),f=s[0],m=s[1],p=K(Object(a.useState)(""),2),E=p[0],g=p[1],k=K(Object(a.useState)(null),2),O=k[0],w=k[1];Object(a.useEffect)(function(){q().then(c)},[]),Object(a.useEffect)(function(){e.history.replace("/".concat(o.join("+")))},[o]);var _=Object(a.useCallback)(function(e){return o.includes(e)?u(o.filter(function(t){return t!==e})):u(o.concat(e))},[o]),j=Object(a.useCallback)(function(e){u(o.filter(function(t){return t!==e})),E===e&&S(E)},[o,E]),S=Object(a.useCallback)(function(e,t){E===e?(g(""),w(null)):(g(e),w(t))},[E]),N=Object(a.useCallback)(function(){return S(E)},[S]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null,r.a.createElement(v,{value:f,setValue:m}),r.a.createElement(d,{data:n.filter(function(e){return e.name.includes(f)}),ItemComponent:h,selected:o,onSelectItem:_}),r.a.createElement(b,{selectedCount:o.length,totalCount:n.length})),r.a.createElement(y,{active:0!==o.length,onClick:N},0===o.length?r.a.createElement(H,null):r.a.createElement(G,null,o.map(function(e){return r.a.createElement(J,{key:e,pokemon:e,onRemove:j,onSelect:S,active:E===e,reference:O})}))))});l.a.render(r.a.createElement(o.a,null,r.a.createElement(u.a,{path:"/:selected?",render:function(e){var t=e.match.params.selected?e.match.params.selected.split("+"):[];return r.a.createElement(Q,{selected:t})}})),document.getElementById("container"))}});
//# sourceMappingURL=app.b6aa653b.js.map