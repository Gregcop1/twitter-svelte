!function(){"use strict";const e=["client/index.1d6b6249.js","client/my-tweets.c6cf1b50.js","client/client.dedf369b.js","client/client.2a459e40.js","client/Writer.22f84e69.js"].concat(["service-worker-index.html","avatar-euratech.jpg","avatar-machinerie.jpg","avatar-typo3.jpg","favicon.png","logo-192.png","logo-512.png","main.css","manifest.json","variables.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1581263550405").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1581263550405"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1581263550405").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
