"use strict";var precacheConfig=[["/dropbox-redesign/index.html","088715cd0f781d948ab1c400eeecb899"],["/dropbox-redesign/static/css/main.dc7e76ec.css","3785a5b34fc49618d1de6171bf25f8c0"],["/dropbox-redesign/static/js/main.a11fc096.js","a2cbee1b61450f82c64d4acbcfdde868"],["/dropbox-redesign/static/media/Facebook button.e7be8610.jpg","e7be861003ac7075caad60a517dca2ce"],["/dropbox-redesign/static/media/Icon Set.87dabb41.jpg","87dabb413d6f092dcc8ee1ca728287eb"],["/dropbox-redesign/static/media/Iron-Man-Mask.95015b98.jpg","95015b98b5f5024569cf745afcf4d89a"],["/dropbox-redesign/static/media/Magic Bacon Ride.25389c0d.jpg","25389c0d9a1feb7b2138ac23d697941e"],["/dropbox-redesign/static/media/Mobile Portfolio.53a7ec97.jpg","53a7ec973839a7f7f38b63715f9fd9a0"],["/dropbox-redesign/static/media/Olimp-006.70dde350.jpg","70dde35084a6bee43e71492fd4342b0b"],["/dropbox-redesign/static/media/Pin Art Dribbble.8cba7220.jpg","8cba72209158e4f86600d0a87d4a9086"],["/dropbox-redesign/static/media/Sweet pixels icon.10457845.jpg","1045784501fb8bcf81dfca7f99d0e23d"],["/dropbox-redesign/static/media/Warehouse design.5c3f8afe.png","5c3f8afe5d053555ec426f7fae8f6c63"],["/dropbox-redesign/static/media/Web Design.fdcae9c4.jpg","fdcae9c4c85084226670dc607b531817"],["/dropbox-redesign/static/media/boxing glove icon.7e091b02.jpg","7e091b02d400f49f7474b460d025e744"],["/dropbox-redesign/static/media/contact.00a1997e.jpg","00a1997e67055a9b7522cb4cd4cbdf48"],["/dropbox-redesign/static/media/dribbble fun.292f2d3c.jpg","292f2d3c31f5d6800ca1e4d1a50ca0be"],["/dropbox-redesign/static/media/dropbox logo.bbeb85f8.jpg","bbeb85f87810af1c5e6e6d6a78e43279"],["/dropbox-redesign/static/media/instagram.58b9a728.jpg","58b9a7284a718423cd19af7a186ba9cf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/dropbox-redesign/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});