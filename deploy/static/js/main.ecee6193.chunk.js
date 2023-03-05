/*! For license information please see main.ecee6193.chunk.js.LICENSE.txt */
(this.webpackJsonpshiba=this.webpackJsonpshiba||[]).push([[0],{48:function(e){e.exports=JSON.parse('{"name":"shiba","version":"0.0.1","private":false,"author":"Jason Wu <jasonwucy.com@gmail.com>","scripts":{"start:web":"node scripts/start.js --progress","build:web":"node scripts/build.js --progress","dev":"cross-env APP_ENV=dev npm run start:web","production":"cross-env APP_ENV=prod npm run start:web","lint":"eslint --ext .js,.jsx ./src","lintFix":"eslint --ext .js,.jsx ./src --fix","clean":"rm -rf build && rm -rf build_node"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"coveragePathIgnorePatterns":["node_modules","<rootDir>/_draft/*","<rootDir>/src/index.js","<rootDir>/src/article/*","<rootDir>/src/mocks/*","<rootDir>/src/base/*","<rootDir>/src/langs/*","<rootDir>/src/providers/*","<rootDir>/src/env/*","<rootDir>/src/services/*","<rootDir>/src/reducers/*","<rootDir>/src/components/*","<rootDir>/src/hooks/*"],"setupFiles":["react-app-polyfill/jsdom","jest-canvas-mock"],"setupFilesAfterEnv":["<rootDir>/src/services/index.js"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jest-environment-jsdom-fourteen","transform":{"^.+\\\\.(js|jsx|ts|tsx)$":"<rootDir>/node_modules/babel-jest","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy","^@Base(.*)$":"<rootDir>/src/base/$1","^@Components(.*)$":"<rootDir>/src/components/$1","^@Reducers(.*)$":"<rootDir>/src/reducers/$1","^@API(.*)$":"<rootDir>/src/api/$1","^@Hooks(.*)$":"<rootDir>/src/hooks/$1","^@Models(.*)$":"<rootDir>/src/models/$1","^@CSS(.*)$":"<rootDir>/src/css/$1","^@Services(.*)$":"<rootDir>/src/services/$1","^@Providers(.*)$":"<rootDir>/src/providers/$1","^@Env(.*)$":"<rootDir>/src/env/$1","^@Langs(.*)$":"<rootDir>/src/langs/$1","^@Tools(.*)$":"<rootDir>/src/tools/$1","^@Mocks(.*)$":"<rootDir>/src/mocks/$1","^@Debug(.*)$":"<rootDir>/src/debug/$1","^@Articles(.*)$":"<rootDir>/src/articles/$1"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"]},"resolutions":{"sanitize.css":"12.0.1","react-error-overlay":"6.0.9"},"dependencies":{"@date-io/dayjs":"^1.3.13","@emotion/react":"^11.10.5","@emotion/styled":"^11.10.5","@koa/router":"^8.0.5","@loadable/component":"^5.15.2","@loadable/server":"^5.15.2","@mui/icons-material":"^5.11.0","@mui/material":"^5.11.4","@svgdotjs/svg.js":"^3.1.2","@videojs/themes":"^1.0.1","axios":"0.27.2","classnames":"^2.3.1","dayjs":"^1.10.7","debug":"4.3.4","dotenv":"^16.0.0","ejs":"3.1.7","html-minifier":"4.0.0","immer":"^7.0.9","isbot":"^3.0.15","joi":"17.6.0","jsonwebtoken":"^8.5.1","knex":"2.0.0","koa":"^2.13.4","koa-body":"^5.0.0","koa-compress":"^5.1.0","koa-csp":"1.1.1","koa-helmet":"^6.1.0","koa-logger":"^3.2.1","koa-mount":"^4.0.0","koa-range":"0.3.0","koa-static":"^5.0.0","lodash":"^4.17.21","marked":"^3.0.8","moment-timezone":"0.5.34","node-html-to-image":"^3.2.4","qs":"^6.10.3","react":"^17.0.2","react-color":"^2.19.3","react-dom":"^17.0.2","react-helmet":"^6.1.0","react-redux":"^7.2.5","react-router":"^5.2.1","react-router-dom":"^5.3.0","react-slick":"^0.29.0","react-sortable-hoc":"^2.0.0","react-spring":"^8.0.27","redux":"^4.1.1","redux-thunk":"^2.3.0","sanitize-html":"^2.7.2","slick-carousel":"^1.8.1","uuid":"8.3.2","video.js":"^7.20.3"},"devDependencies":{"@babel/core":"7.15.5","@loadable/webpack-plugin":"^5.15.2","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.8.3","@types/jest":"27.5.0","@typescript-eslint/eslint-plugin":"^4.17.0","@typescript-eslint/parser":"^4.17.0","babel-eslint":"10.1.0","babel-jest":"^26.6.3","babel-loader":"8.2.2","babel-plugin-lodash":"^3.3.4","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"10.0.0","camelcase":"^6.2.0","case-sensitive-paths-webpack-plugin":"2.4.0","chai":"4.3.6","chalk":"^4.1.0","compression-webpack-plugin":"^6.1.1","cross-env":"^7.0.3","css-loader":"4.3.0","dotenv-expand":"5.1.0","eslint":"^7.21.0","eslint-config-airbnb":"^18.2.1","eslint-config-airbnb-base":"^14.2.0","eslint-config-prettier":"^8.1.0","eslint-config-react-app":"^6.0.0","eslint-import-resolver-alias":"^1.1.2","eslint-loader":"4.0.2","eslint-plugin-flowtype":"5.3.1","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-prettier":"^3.3.1","eslint-plugin-react":"^7.22.0","eslint-plugin-react-hooks":"^4.2.0","file-loader":"6.2.0","fs-extra":"^9.1.0","html-webpack-plugin":"4.4.1","identity-obj-proxy":"3.0.0","jest":"26.6.3","jest-canvas-mock":"^2.3.0","jest-environment-jsdom-fourteen":"1.0.1","jest-resolve":"26.6.2","jest-watch-typeahead":"0.6.1","jsonwebtoken":"^8.5.1","lodash-webpack-plugin":"^0.11.6","mini-css-extract-plugin":"1.3.9","mocha":"^10.0.0","optimize-css-assets-webpack-plugin":"5.0.4","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"9.0.0","postcss-preset-env":"6.7.0","postcss-safe-parser":"4.0.2","prettier":"^2.2.1","react-app-polyfill":"^1.0.6","react-dev-utils":"^11.0.4","resolve":"1.20.0","resolve-url-loader":"^3.1.2","sass-loader":"10.0.2","semver":"7.3.4","style-loader":"1.2.1","supertest":"^6.2.3","terser-webpack-plugin":"4.2.0","ts-pnp":"1.2.0","url-loader":"4.1.1","webpack":"4.44.1","webpack-dev-server":"3.11.2","webpack-manifest-plugin":"2.2.0","webpack-merge":"^5.8.0","webpack-node-externals":"^3.0.0","workbox-webpack-plugin":"5.1.4"}}')},54:function(e,t){},69:function(e,t,r){e.exports=r(82)},76:function(e,t,r){var n={"./test.jpeg":77};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=76},77:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/test.247421bf.jpeg"},82:function(e,t,r){"use strict";r.r(t);var n=r(53),o=r(0),i=r.n(o),s=r(21),a=r.n(s),c=r(19),l=r(34),u=r(28),p=r(29),f=r(35),d=r.n(f),h=r(54),m=r(48),v=Object(u.a)((function e(){Object(p.a)(this,e),this.print=function(){console.log("------------"),console.log("Build In APP_NAME ::: ",m.name),console.log("Build In APP_ENV ::: ","development"),console.log("Build In NODE_ENV ::: ","production"),console.log("Build In Version ::: ",m.version),console.log("Build In Git Commit Hash ::: ","d175ecc\n"),console.log("Build In Git Commit Time ::: ",d()("2023-03-03 00:38:28 +0800\n").tz(h.TIMEZONE_TAIPEI).format("YYYY/MM/DD HH:mm:ss")),console.log("------------")}})),g={EnvName:"default",EnvUrl:"",APIUrl:""},y={EnvName:"develop",EnvUrl:"",APIUrl:""},b={EnvName:"production",EnvUrl:"",APIUrl:""},x=new(function(){function e(){Object(p.a)(this,e),this.env={},this.initialize()}return Object(u.a)(e,[{key:"initialize",value:function(){this.setEnv("development")}},{key:"setEnv",value:function(e){switch(e){case"prod":this.env=b;break;case"dev":this.env=y;break;default:this.env=g}}},{key:"getEnv",value:function(){return this.env}}]),e}()),j=r(55),w=r.n(j),k=r(56),E=r.n(k);r(74),r(75);function D(){D=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var i=t&&t.prototype instanceof f?t:f,s=Object.create(i.prototype),a=new O(o||[]);return n(s,"_invoke",{value:j(e,r,a)}),s}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var p={};function f(){}function d(){}function h(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v($([])));g&&g!==t&&r.call(g,i)&&(m=g);var y=h.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function o(n,i,s,a){var c=u(e[n],e,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){o("next",e,s,a)}),(function(e){o("throw",e,s,a)})):t.resolve(p).then((function(e){l.value=e,s(l)}),(function(e){return o("throw",e,s,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function j(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var a=w(s,r);if(a){if(a===p)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function w(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function $(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=h,n(y,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(x.prototype),c(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var s=new x(l(t,r,n,o),i);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},b(y),c(y,a,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:$(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}d.a.extend(w.a),d.a.extend(E.a),"undefined"!==typeof window&&(window.VIDEOJSNODYNAMIC_STYLE=!0);var O="template",$=new v;function _(){return(_=Object(n.a)(D().mark((function e(){var t,n,o;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r(83).default,n=t(),o=Object(l.a)({key:"mew-prefix",nonce:O}),a.a.render(i.a.createElement(c.a,{value:o},i.a.createElement(n,null)),document.getElementById("root"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){_.apply(this,arguments)}(),x.Debug&&$.print()},83:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r(0),o=r.n(n),i=r(10),s=r(129),a=r(127),c=r(130),l=r(126),u=function(e){return e?r(76)("./"+e).default:""},p="1109",f="039";function d(){var e=Object(n.useState)(p),t=Object(i.a)(e,1)[0],r=Object(n.useState)(""),d=Object(i.a)(r,2),h=d[0],m=d[1],v=Object(n.useState)(!1),g=Object(i.a)(v,2),y=g[0],b=g[1],x=Object(n.useState)(""),j=Object(i.a)(x,2),w=j[0],k=j[1];return o.a.createElement(s.a,{sx:{width:"100%",height:"100%",background:"url(".concat(u("test.jpeg"),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"top",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",flexDirection:"column"}},o.a.createElement(s.a,{sx:{mt:6,width:"600px",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",flexDirection:"column"}},o.a.createElement(s.a,{sx:{width:"100%"}},y?o.a.createElement(s.a,{sx:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",flexDirection:"column"}},o.a.createElement(c.a,{variant:"h5",color:"textPrimary"},"\u606d\u559c\u5f97\u5230\u89e3\u9396\u5bc6\u78bc : ".concat(f))):o.a.createElement(s.a,{sx:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",flexDirection:"column"}},o.a.createElement(s.a,{sx:{width:"300px",mb:2,position:"relative",display:"flex",justifyContent:"center"}},o.a.createElement(c.a,{sx:{fontSize:"30px"},variant:"h4",color:"textPrimary"},"\u8acb\u8f38\u5165\u9b54\u6cd5\u5bc6\u78bc")),o.a.createElement(s.a,{sx:{width:"300px",mb:2,position:"relative",height:"60px",display:"flex",justifyContent:"center"}},o.a.createElement(l.a,{fullWidth:!0,value:h,placeholder:"\u8f38\u5165\u5bc6\u78bc",onChange:function(e){m(Number(e.target.value))}})),o.a.createElement(s.a,{sx:{width:"300px",position:"relative"}},o.a.createElement(a.a,{fullWidth:!0,size:"large",color:"primary",variant:"contained",onClick:function(){t===h?b(!0):(k("\u662f\u932f\u7684\u5462 XD"),setTimeout((function(){k("")}),2e3))},disabled:!h},"\u5617\u8a66\u78ba\u8a8d"))),w&&o.a.createElement(s.a,{sx:{mt:2,position:"relative",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",flexDirection:"column"}},o.a.createElement(c.a,{variant:"h5",color:"textPrimary"},w)))))}var h=Object(n.memo)(d);function m(){return function(){return o.a.createElement(h,null)}}}},[[69,1,2]]]);
//# sourceMappingURL=main.ecee6193.chunk.js.map