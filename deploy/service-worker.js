if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,t)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}})).then(e=>{const s=t(...e);return i.default||(i.default=s),i})}))}}define("./service-worker.js",["./workbox-6ac7f038"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"23ed27e33de416cfae792648ac828aa0"},{url:"/static/css/2.676857e0.chunk.css",revision:"5e8b8457670e9496719d6a522e68a247"},{url:"/static/css/main.91b52455.chunk.css",revision:"8464b42d3640bb8e61b6887a45ffeac2"},{url:"/static/js/2.43ca9d5d.chunk.js",revision:"67badd83ffa08aeb587004066016e8f6"},{url:"/static/js/2.43ca9d5d.chunk.js.LICENSE.txt",revision:"2847ab92d897ac24d4cd42e758f3f1dd"},{url:"/static/js/main.ecee6193.chunk.js",revision:"b3ad0d74719745209083d0c86b99402f"},{url:"/static/js/main.ecee6193.chunk.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"/static/js/runtime-main.561137ef.js",revision:"41e91f4d1296d7266d6e5f619843e4ad"},{url:"/static/media/slick.2630a3e3.svg",revision:"f97e3bbf73254b0112091d0192f17aec"},{url:"/static/media/slick.29518378.woff",revision:"b7c9e1e479de3b53f1e4e30ebac2403a"},{url:"/static/media/slick.a4e97f5a.eot",revision:"ced611daf7709cc778da928fec876475"},{url:"/static/media/slick.c94f7671.ttf",revision:"d41f55a78e6f49a5512878df1737e58a"},{url:"/static/media/test.247421bf.jpeg",revision:"2654560099c16bd7c5e4b2eb831fd4d4"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map