module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([1],{187:function(e,t,r){e.exports=r(188)},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(22);var o=r.n(n);var a=r(4);var u=r.n(a);var i=r(91);var c=r.n(i);var f=r(201);var l=r.n(f);var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function v(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var u=t[o](a);var i=u.value}catch(e){r(e);return}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=function(e){b(t,e);function t(){y(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}p(t,[{key:"render",value:function e(){return u.a.createElement("main",null,u.a.createElement("h1",null,"Next.js"),u.a.createElement("section",null,this.props.posts.map(function(e){return u.a.createElement("li",null,u.a.createElement(c.a,{href:{pathname:"/post",query:{id:e}},as:"/post/"+e},u.a.createElement("a",null,"Read more...",e)))})))}}],[{key:"getInitialProps",value:function(){var e=v(o.a.mark(function e(){return o.a.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return{posts:[].concat(s(f["postIDS"]))};case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]);return t}(a["Component"]);t["default"]=m},201:function(e,t){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function n(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var o=Array.from(new Array(3),function(e,t){return t});e.exports={postIDS:o,exportPathMap:function e(t){var a=o.reduce(function(e,t){return r({},e,n({},"/post/"+t,{page:"/post",query:{id:t}}))},{});return r({},a,{"/":{page:"/"}},{"/about":{page:"/about"}})}}}},[187]);return{page:e.default}});