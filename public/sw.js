if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>n(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutPage-f0fe4484.js",revision:null},{url:"assets/ContactPage-81535278.js",revision:null},{url:"assets/index-3e032743.css",revision:null},{url:"assets/index-edae83a3.js",revision:null},{url:"assets/NotFoundPage-d413d332.js",revision:null},{url:"assets/vendor-4dc654ff.js",revision:null},{url:"index.html",revision:"90948f36fc5b7f5b89dca4182556fe25"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"a682f65f0792ba3d4d2be38f6fde036e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
