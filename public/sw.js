if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>n(e,o),d={module:{uri:o},exports:l,require:c};s[o]=Promise.all(i.map((e=>d[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutPage-b2e66783.js",revision:null},{url:"assets/AddonPage-a6e1d0ad.js",revision:null},{url:"assets/AddonPrivacy-76c6e346.js",revision:null},{url:"assets/ContactPage-145eeec6.js",revision:null},{url:"assets/index-778d3fcf.js",revision:null},{url:"assets/index-abeb9898.js",revision:null},{url:"assets/index-d5bde1ee.js",revision:null},{url:"assets/NotFoundPage-fc2c2d14.js",revision:null},{url:"assets/PageTabs-bbf65fd2.js",revision:null},{url:"assets/ScrollToTopOnMount-94ae7c7c.js",revision:null},{url:"assets/TeamPage-2c40e9c7.js",revision:null},{url:"assets/TrainingPage-36c5051d.js",revision:null},{url:"assets/UpdatePage-ba002a53.js",revision:null},{url:"assets/vendor-e69cc4a7.js",revision:null},{url:"assets/XtremePage-72b7b790.js",revision:null},{url:"index.html",revision:"6bc8262a6af9e0a32503e97f40db2b5e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-72x72.png",revision:"8f749c026eb1d2bec4d71f4c3534a8aa"},{url:"icons/icon-96x96.png",revision:"17bed4e1945ff020c43f4778ea96b515"},{url:"icons/icon-128x128.png",revision:"127d9107c7fddd370c57133b52113d93"},{url:"icons/icon-144x144.png",revision:"342dac3ebd24b9245bf3c66bcf14df75"},{url:"icons/icon-152x152.png",revision:"ddd3f94ba98b1b023da0a9f7942d6ca3"},{url:"icons/icon-192x192.png",revision:"bd002b08634a1b9fed3affcfd603e01b"},{url:"icons/icon-384x384.png",revision:"67b33beee60ff7334d5292b25122c349"},{url:"icons/icon-512x512.png",revision:"21c5bd38ea043348e9f770c9b2740f48"},{url:"manifest.webmanifest",revision:"bd120218ca6d46456386a72985352306"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
