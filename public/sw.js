if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const d=e=>n(e,o),c={module:{uri:o},exports:l,require:d};s[o]=Promise.all(i.map((e=>c[e]||d(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutPage-0796477d.js",revision:null},{url:"assets/AddonPage-be42e8f4.js",revision:null},{url:"assets/AddonPrivacy-8638b9d0.js",revision:null},{url:"assets/ContactPage-03ff87d9.js",revision:null},{url:"assets/index-8f991dc9.js",revision:null},{url:"assets/index-b5d9265c.js",revision:null},{url:"assets/NotFoundPage-94076cb6.js",revision:null},{url:"assets/PageTabs-d40d0003.js",revision:null},{url:"assets/ScrollToTopOnMount-5e730e15.js",revision:null},{url:"assets/TeamPage-88128fb0.js",revision:null},{url:"assets/TrainingPage-74e81fb9.js",revision:null},{url:"assets/UpdatePage-38341434.js",revision:null},{url:"assets/vendor-e4fb983d.js",revision:null},{url:"assets/XtremePage-acce8700.js",revision:null},{url:"index.html",revision:"4ad80ced6d80da37872e880e7b479b33"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-72x72.png",revision:"8f749c026eb1d2bec4d71f4c3534a8aa"},{url:"icons/icon-96x96.png",revision:"17bed4e1945ff020c43f4778ea96b515"},{url:"icons/icon-128x128.png",revision:"127d9107c7fddd370c57133b52113d93"},{url:"icons/icon-144x144.png",revision:"342dac3ebd24b9245bf3c66bcf14df75"},{url:"icons/icon-152x152.png",revision:"ddd3f94ba98b1b023da0a9f7942d6ca3"},{url:"icons/icon-192x192.png",revision:"bd002b08634a1b9fed3affcfd603e01b"},{url:"icons/icon-384x384.png",revision:"67b33beee60ff7334d5292b25122c349"},{url:"icons/icon-512x512.png",revision:"21c5bd38ea043348e9f770c9b2740f48"},{url:"manifest.webmanifest",revision:"bd120218ca6d46456386a72985352306"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
