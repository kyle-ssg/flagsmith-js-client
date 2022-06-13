!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).isomorphic={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={},r={exports:{}};!function(t,n){var r="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",o="[object Function]",u="[object Object]",s=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c[a]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c[o]=c["[object Map]"]=c["[object Number]"]=c[u]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1;var f="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,g=f||h||Function("return this")(),v=n&&!n.nodeType&&n,p=v&&t&&!t.nodeType&&t,d=p&&p.exports===v,y=d&&f.process,b=function(){try{var t=p&&p.require&&p.require("util").types;return t||y&&y.binding&&y.binding("util")}catch(t){}}(),_=b&&b.isTypedArray;function m(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var S,j,w,O=Array.prototype,I=Function.prototype,F=Object.prototype,A=g["__core-js_shared__"],E=I.toString,T=F.hasOwnProperty,P=(S=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",N=F.toString,C=E.call(Object),L=RegExp("^"+E.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=d?g.Buffer:void 0,k=g.Symbol,x=g.Uint8Array,J=D?D.allocUnsafe:void 0,z=(j=Object.getPrototypeOf,w=Object,function(t){return j(w(t))}),R=Object.create,U=F.propertyIsEnumerable,M=O.splice,G=k?k.toStringTag:void 0,B=function(){try{var t=pt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),$=D?D.isBuffer:void 0,q=Math.max,V=Date.now,H=pt(g,"Map"),K=pt(Object,"create"),W=function(){function t(){}return function(e){if(!At(e))return{};if(R)return R(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Q(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function X(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Y(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Z(t){var e=this.__data__=new X(t);this.size=e.size}function tt(t,e){var n=jt(t),r=!n&&St(t),i=!n&&!r&&Ot(t),a=!n&&!r&&!i&&Tt(t),o=n||r||i||a,u=o?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],s=u.length;for(var l in t)!e&&!T.call(t,l)||o&&("length"==l||i&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||dt(l,s))||u.push(l);return u}function et(t,e,n){(void 0!==n&&!mt(t[e],n)||void 0===n&&!(e in t))&&it(t,e,n)}function nt(t,e,n){var r=t[e];T.call(t,e)&&mt(r,n)&&(void 0!==n||e in t)||it(t,e,n)}function rt(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1}function it(t,e,n){"__proto__"==e&&B?B(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}Q.prototype.clear=function(){this.__data__=K?K(null):{},this.size=0},Q.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Q.prototype.get=function(t){var e=this.__data__;if(K){var n=e[t];return n===r?void 0:n}return T.call(e,t)?e[t]:void 0},Q.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:T.call(e,t)},Q.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=K&&void 0===e?r:e,this},X.prototype.clear=function(){this.__data__=[],this.size=0},X.prototype.delete=function(t){var e=this.__data__,n=rt(e,t);return!(n<0)&&(n==e.length-1?e.pop():M.call(e,n,1),--this.size,!0)},X.prototype.get=function(t){var e=this.__data__,n=rt(e,t);return n<0?void 0:e[n][1]},X.prototype.has=function(t){return rt(this.__data__,t)>-1},X.prototype.set=function(t,e){var n=this.__data__,r=rt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Y.prototype.clear=function(){this.size=0,this.__data__={hash:new Q,map:new(H||X),string:new Q}},Y.prototype.delete=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e},Y.prototype.get=function(t){return vt(this,t).get(t)},Y.prototype.has=function(t){return vt(this,t).has(t)},Y.prototype.set=function(t,e){var n=vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Z.prototype.clear=function(){this.__data__=new X,this.size=0},Z.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Z.prototype.get=function(t){return this.__data__.get(t)},Z.prototype.has=function(t){return this.__data__.has(t)},Z.prototype.set=function(t,e){var n=this.__data__;if(n instanceof X){var r=n.__data__;if(!H||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Y(r)}return n.set(t,e),this.size=n.size,this};var at,ot=function(t,e,n){for(var r=-1,i=Object(t),a=n(t),o=a.length;o--;){var u=a[at?o:++r];if(!1===e(i[u],u,i))break}return t};function ut(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":G&&G in Object(t)?function(t){var e=T.call(t,G),n=t[G];try{t[G]=void 0;var r=!0}catch(t){}var i=N.call(t);r&&(e?t[G]=n:delete t[G]);return i}(t):function(t){return N.call(t)}(t)}function st(t){return Et(t)&&ut(t)==a}function lt(t){return!(!At(t)||function(t){return!!P&&P in t}(t))&&(It(t)?L:s).test(function(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ct(t){if(!At(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=yt(t),n=[];for(var r in t)("constructor"!=r||!e&&T.call(t,r))&&n.push(r);return n}function ft(t,e,n,r,i){t!==e&&ot(e,(function(a,o){if(i||(i=new Z),At(a))!function(t,e,n,r,i,a,o){var s=bt(t,n),l=bt(e,n),c=o.get(l);if(c)return void et(t,n,c);var f=a?a(s,l,n+"",t,e,o):void 0,h=void 0===f;if(h){var g=jt(l),v=!g&&Ot(l),p=!g&&!v&&Tt(l);f=l,g||v||p?jt(s)?f=s:Et(m=s)&&wt(m)?f=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(s):v?(h=!1,f=function(t,e){if(e)return t.slice();var n=t.length,r=J?J(n):new t.constructor(n);return t.copy(r),r}(l,!0)):p?(h=!1,d=l,y=!0?(b=d.buffer,_=new b.constructor(b.byteLength),new x(_).set(new x(b)),_):d.buffer,f=new d.constructor(y,d.byteOffset,d.length)):f=[]:function(t){if(!Et(t)||ut(t)!=u)return!1;var e=z(t);if(null===e)return!0;var n=T.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&E.call(n)==C}(l)||St(l)?(f=s,St(s)?f=function(t){return function(t,e,n,r){var i=!n;n||(n={});var a=-1,o=e.length;for(;++a<o;){var u=e[a],s=r?r(n[u],t[u],u,n,t):void 0;void 0===s&&(s=t[u]),i?it(n,u,s):nt(n,u,s)}return n}(t,Pt(t))}(s):At(s)&&!It(s)||(f=function(t){return"function"!=typeof t.constructor||yt(t)?{}:W(z(t))}(l))):h=!1}var d,y,b,_;var m;h&&(o.set(l,f),i(f,l,r,a,o),o.delete(l));et(t,n,f)}(t,e,o,n,ft,r,i);else{var s=r?r(bt(t,o),a,o+"",t,e,i):void 0;void 0===s&&(s=a),et(t,o,s)}}),Pt)}function ht(t,e){return _t(function(t,e,n){return e=q(void 0===e?t.length-1:e,0),function(){for(var r=arguments,i=-1,a=q(r.length-e,0),o=Array(a);++i<a;)o[i]=r[e+i];i=-1;for(var u=Array(e+1);++i<e;)u[i]=r[i];return u[e]=n(o),m(t,this,u)}}(t,e,Lt),t+"")}var gt=B?function(t,e){return B(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:Lt;function vt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function pt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(n)?n:void 0}function dt(t,e){var n=typeof t;return!!(e=null==e?i:e)&&("number"==n||"symbol"!=n&&l.test(t))&&t>-1&&t%1==0&&t<e}function yt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||F)}function bt(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var _t=function(t){var e=0,n=0;return function(){var r=V(),i=16-(r-n);if(n=r,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(gt);function mt(t,e){return t===e||t!=t&&e!=e}var St=st(function(){return arguments}())?st:function(t){return Et(t)&&T.call(t,"callee")&&!U.call(t,"callee")},jt=Array.isArray;function wt(t){return null!=t&&Ft(t.length)&&!It(t)}var Ot=$||function(){return!1};function It(t){if(!At(t))return!1;var e=ut(t);return e==o||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Ft(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function At(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Et(t){return null!=t&&"object"==typeof t}var Tt=_?function(t){return function(e){return t(e)}}(_):function(t){return Et(t)&&Ft(t.length)&&!!c[ut(t)]};function Pt(t){return wt(t)?tt(t,!0):ct(t)}var Nt,Ct=(Nt=function(t,e,n){ft(t,e,n)},ht((function(t,e){var n=-1,r=e.length,i=r>1?e[r-1]:void 0,a=r>2?e[2]:void 0;for(i=Nt.length>3&&"function"==typeof i?(r--,i):void 0,a&&function(t,e,n){if(!At(n))return!1;var r=typeof e;return!!("number"==r?wt(n)&&dt(e,n.length):"string"==r&&e in n)&&mt(n[e],t)}(e[0],e[1],a)&&(i=r<3?void 0:i,r=1),t=Object(t);++n<r;){var o=e[n];o&&Nt(t,o,n,i)}return t})));function Lt(t){return t}t.exports=Ct}(r,r.exports),Object.defineProperty(n,"__esModule",{value:!0});var i,a=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=(i=r.exports)&&i.__esModule?i:{default:i};var u={getItem:function(t,e){return u.multiGet([t]).then((function(t){return t[0][1]})).then((function(t){return e&&e(null,t),t})).catch((function(t){return e&&e(t,null),t}))},setItem:function(t,e,n){return u.multiSet([[t,e]]).then((function(t){return n&&n(null,t),t})).catch((function(t){return n&&n(t,null),t}))},getAllKeys:function(t){return Promise.resolve(Object.keys(localStorage)).then((function(e){return t&&t(null,e),e})).catch((function(e){return t&&t(e,null),e}))},removeItem:function(t,e){return u.multiRemove([t]).then((function(){e&&e(null)})).catch((function(t){e&&e(t,null)}))},clear:function(){return new Promise((function(t){window.localStorage.clear(),t()}))},mergeItem:function(t,e){return u.multiMerge([[t,e]])},multiGet:function(t){return new Promise((function(e){e(t.reduce((function(t,e){return t.concat([[e,localStorage.getItem(e)]])}),[]))}))},multiSet:function(t){return new Promise((function(e,n){var r=[];return t.forEach((function(t){var e=a(t,2),n=e[0],i=e[1];try{localStorage.setItem(n,i)}catch(t){r.push(t)}})),r.length>0?n(r):e()}))},multiMerge:function(t){return new Promise((function(e,n){var r=[];return t.forEach((function(t){var e=a(t,2),n=e[0],i=e[1],u=localStorage.getItem(n);if(u)try{localStorage.setItem(n,JSON.stringify((0,o.default)(JSON.parse(u),JSON.parse(i))))}catch(t){r.push(t)}})),r.length>0?n(r):e()}))},multiRemove:function(t){return new Promise((function(e){t.forEach((function(t){return window.localStorage.removeItem(t)})),e()}))},flushGetRequests:function(){console.warn("AsyncStorage.flushGetRequests: Not supported on `web`")}},s=n.default=u,l=function(){return l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},l.apply(this,arguments)};function c(t,e,n){if(n||2===arguments.length)for(var r,i=0,a=e.length;i<a;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}var f,h,g=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(i=r;0!=i--;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(a=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!=i--;){var o=a[i];if(!t(e[o],n[o]))return!1}return!0}return e!=e&&n!=n},v=void 0!==v?v:"undefined"!=typeof window?window:{},p="BULLET_TRAIN_DB",d="BULLET_TRAIN_EVENT",y="https://edge.api.flagsmith.com/api/v1/",b=function(t){return"Attempted to "+t+" a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true."},_=function(){function t(t){var e=this;this.getJSON=function(t,n,r){var i=e,a=i.environmentID,o=i.headers,u={method:n||"GET",body:r,headers:{"x-environment-key":a}};return n&&"GET"!==n&&(u.headers["Content-Type"]="application/json; charset=utf-8"),o&&Object.assign(u.headers,o),f(t,u).then((function(t){return t.text().then((function(e){var n=e;try{n=JSON.parse(e)}catch(t){}return t.ok?n:Promise.reject(n)}))}))},this.getFlags=function(t,n){var r=e,i=r.onChange,a=r.onError,o=r.identity,u=r.api,s=!1,c=function(t){var n=t.flags,r=t.traits;o&&(e.withTraits=!1);var a={},u={};r=r||[],(n=n||[]).forEach((function(t){a[t.feature.name.toLowerCase().replace(/ /g,"_")]={id:t.feature.id,enabled:t.enabled,value:t.feature_state_value}})),r.forEach((function(t){u[t.trait_key.toLowerCase().replace(/ /g,"_")]=t.trait_value})),e.oldFlags=l({},e.flags);var s=g(e.flags,a),c=g(e.traits,u);if(e.flags=a,e.traits=u,e.updateStorage(),e.dtrum){var f={javaDouble:{},date:{},shortString:{},javaLongOrObject:{}};Object.keys(e.flags).map((function(t){S(f,"flagsmith_value_"+t,e.getValue(t)),S(f,"flagsmith_enabled_"+t,e.hasFeature(t))})),Object.keys(e.traits).map((function(t){S(f,"flagsmith_trait_"+t,e.getTrait(t))})),e.log("Sending javaLongOrObject traits to dynatrace",f.javaLongOrObject),e.log("Sending date traits to dynatrace",f.date),e.log("Sending shortString traits to dynatrace",f.shortString),e.log("Sending javaDouble to dynatrace",f.javaDouble),e.dtrum.sendSessionProperties(f.javaLongOrObject,f.date,f.shortString,f.javaDouble)}e.trigger&&e.trigger(),i&&i(e.oldFlags,{isFromServer:!0,flagsChanged:!s,traitsChanged:!c})};return o?Promise.all([e.withTraits?e.getJSON(u+"identities/","POST",JSON.stringify({identifier:o,traits:Object.keys(e.withTraits).map((function(t){return{trait_key:t,trait_value:e.withTraits[t]}}))})):e.getJSON(u+"identities/?identifier="+encodeURIComponent(o))]).then((function(n){e.withTraits=!1,c(n[0]),t&&!s&&(s=!0,t())})).catch((function(t){var e=t.message;a&&a({message:e})})):Promise.all([e.getJSON(u+"flags/")]).then((function(e){c({flags:e[0]}),t&&!s&&(s=!0,t())})).catch((function(t){n&&!s&&(s=!0,n(t)),a&&a(t)}))},this.analyticsFlags=function(){var t=e.api;if(0!==Object.getOwnPropertyNames(e.evaluationEvent).length)return e.getJSON(t+"analytics/flags/","POST",JSON.stringify(e.evaluationEvent)).then((function(t){var n=e.getState();e.setState(l(l({},n),{evaluationEvent:{}})),e.updateEventStorage()})).catch((function(t){e.log("Exception fetching evaluationEvent",t)}))},this.analyticsInterval=null,this.api=null,this.cacheFlags=null,this.enableAnalytics=null,this.enableLogs=null,this.environmentID=null,this.evaluationEvent=null,this.flags=null,this.getFlagInterval=null,this.headers=null,this.initialised=null,this.oldFlags=null,this.onChange=null,this.onError=null,this.trigger=null,this.identity=null,this.ticks=null,this.timer=null,this.traits=null,this.dtrum=null,this.withTraits=null,this.evaluateFlag=function(t){if(e.enableAnalytics){if(!e.evaluationEvent)return;void 0===e.evaluationEvent[t]&&(e.evaluationEvent[t]=0),e.evaluationEvent[t]+=1}e.updateEventStorage()},this.getValue=function(t){var n=e.flags&&e.flags[t.toLowerCase().replace(/ /g,"_")],r=null;return n&&(r=n.value),e.evaluateFlag(t),r},this.getTrait=function(t){return e.traits&&e.traits[t.toLowerCase().replace(/ /g,"_")]},this.setTrait=function(t,n){var r=e,i=r.getJSON,a=r.identity,o=r.api;if(o){var u={};if(u[t]=n,!e.identity)return e.withTraits=l(l({},e.withTraits||{}),u),void e.log("Set trait prior to identifying",e.withTraits);var s={identity:{identifier:a},trait_key:t,trait_value:n};return i("".concat(o,"traits/"),"POST",JSON.stringify(s)).then((function(){e.initialised&&e.getFlags()}))}console.error(b("setTrait"))},this.setTraits=function(t){var n=e;n.getJSON;var r=n.identity,i=n.api;if(i)return t&&"object"==typeof t||console.error("Expected object for flagsmith.setTraits"),e.identity?e.getJSON(i+"identities/","POST",JSON.stringify({identifier:r,traits:Object.keys(t).map((function(e){return{trait_key:e,trait_value:t[e]}}))})).then((function(){e.initialised&&e.getFlags()})):(e.withTraits=l(l({},e.withTraits||{}),t),void e.log("Set traits prior to identifying",e.withTraits));console.error(b("setTraits"))},this.hasFeature=function(t){var n=e.flags&&e.flags[t.toLowerCase().replace(/ /g,"_")],r=!1;return n&&n.enabled&&(r=!0),e.evaluateFlag(t),r},f=t.fetch?t.fetch:"undefined"!=typeof fetch?fetch:v.fetch,h=t.AsyncStorage}return t.prototype.init=function(t){var e=this,n=t.environmentID,r=t.api,i=void 0===r?y:r,a=t.headers,o=t.onChange,u=t.cacheFlags,s=t.onError,c=t.defaultFlags,g=t.preventFetch,v=t.enableLogs,b=t.dtrum,_=t.enableAnalytics,m=t.AsyncStorage,S=t.identity,j=t.traits,w=t._trigger,O=t.state,I=t.angularHttpClient;return new Promise((function(t,r){if(e.environmentID=n,e.api=i,e.headers=a,e.getFlagInterval=null,e.analyticsInterval=null,e.onChange=o,e.trigger=w,e.onError=s,e.identity=S,e.withTraits=j,e.enableLogs=v,e.enableAnalytics=_||!1,e.flags=Object.assign({},c)||{},e.initialised=!0,e.ticks=1e4,e.log("Initialising with properties",{environmentID:n,api:i,headers:a,onChange:o,cacheFlags:u,onError:s,defaultFlags:c,preventFetch:g,enableLogs:v,enableAnalytics:_,AsyncStorage:h,identity:S,traits:j,_trigger:w,state:O,angularHttpClient:I},e),e.timer=e.enableLogs?(new Date).valueOf():null,m&&(h=m),e.cacheFlags=void 0!==h&&u,e.setState(O),!n)throw r("Please specify a environment id"),"Please specify a environment id";b&&(e.dtrum=b),I&&(f=function(t,e){var n=e.headers,r=e.method,i=e.body;return new Promise((function(e){switch(r){case"GET":return I.get(t,{headers:n}).subscribe((function(t){e({ok:1,text:function(){return Promise.resolve(t)}})}));case"POST":case"PUT":return I.post(t,i,{headers:n}).subscribe((function(t){e({ok:1,text:function(){return Promise.resolve(t)}})}))}}))}),h&&"undefined"!=typeof window&&h.getItem(d).then((function(t){if(t)try{e.evaluationEvent=JSON.parse(t)}catch(t){e.evaluationEvent={}}else e.evaluationEvent={};return e.analyticsInterval=setInterval(e.analyticsFlags,e.ticks),!0})),e.enableAnalytics&&(e.analyticsInterval&&clearInterval(e.analyticsInterval),h&&"undefined"!=typeof window&&h.getItem(d,(function(t,n){if(n){var r=JSON.parse(n);r&&(O=e.getState(),e.log("Retrieved events from cache",n),e.setState(l(l({},O),{evaluationEvent:r})))}return!0}))),u?h&&"undefined"!=typeof window&&h.getItem(p,(function(n,i){if(i)try{var a=JSON.parse(i);a&&a.api===e.api&&a.environmentID===e.environmentID&&(e.setState(a),e.log("Retrieved flags from cache",a)),e.flags?(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1}),e.oldFlags=e.flags,t(!0),g||e.getFlags()):g?t(!0):e.getFlags(t,r)}catch(t){e.log("Exception fetching cached logs",t)}else g?(c&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),t(!0)):e.getFlags(t,r);return!0})):g?(c&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),t(!0)):e.getFlags(t,r)})).catch((function(t){return s&&s(t)}))},t.prototype.getAllFlags=function(){return this.flags},t.prototype.identify=function(t,e){return this.identity=t,e&&(this.withTraits=l(l({},this.withTraits||{}),e)),this.initialised?this.getFlags():Promise.resolve()},t.prototype.getState=function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,traits:this.traits,evaluationEvent:this.evaluationEvent}},t.prototype.setState=function(t){t&&(this.initialised=!0,this.api=t.api||this.api||y,this.environmentID=t.environmentID||this.environmentID,this.flags=t.flags||this.flags,this.identity=t.identity||this.identity,this.traits=t.traits||this.traits,this.evaluationEvent=t.evaluationEvent||this.evaluationEvent)},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enableLogs&&console.log.apply(this,c(["FLAGSMITH:",(new Date).valueOf()-this.timer,"ms"],t,!0))},t.prototype.updateStorage=function(){if(this.cacheFlags){var t=JSON.stringify(this.getState());this.log("Setting storage",t),h.setItem(p,t)}},t.prototype.updateEventStorage=function(){if(this.enableAnalytics){var t=JSON.stringify(this.getState().evaluationEvent);this.log("Setting event storage",t),h.setItem(d,t)}},t.prototype.logout=function(){return this.identity=null,this.traits=null,this.initialised?this.getFlags():Promise.resolve()},t.prototype.startListening=function(t){void 0===t&&(t=1e3),this.getFlagInterval&&clearInterval(this.getFlagInterval),this.getFlagInterval=setInterval(this.getFlags,t)},t.prototype.stopListening=function(){clearInterval(this.getFlagInterval),this.getFlagInterval=null},t.prototype.getSegments=function(){},t}();function m(t){var e=t.fetch,n=t.AsyncStorage;return new _({fetch:e,AsyncStorage:n})}var S=function(t,e,n){var r="shortString",i=!0;"number"==typeof n&&(r="javaDouble",i=!1),t[r]=t[r]||{},t[r][e]=i?n+"":n},j=m({AsyncStorage:s});"undefined"!=typeof window&&(window.flagsmith=j);t.createFlagsmithInstance=function(){return m({AsyncStorage:s})},t.default=j,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=isomorphic.js.map
