"use strict";var precacheConfig=[["/index.html","e18a8c02ba23ff6c95d137099cbc7d0b"],["/static/media/assign-tokens.1d9946b8.svg","1d9946b803eafbb4f1e2f5149cefec0c"],["/static/media/finance.023a1990.svg","023a1990957791048c4e1c1a4603d5c2"],["/static/media/icon.4a63ae7f.svg","4a63ae7f1e6d39a98b0378d490dabd26"],["/static/media/icon.c2135b83.svg","c2135b8340db5f30d3bebc6c77189c46"],["/static/media/kernel-icon.51c2ecd7.svg","51c2ecd7e50c54ace1ee5b55e2bf933a"],["/static/media/logo-background.9bb20744.svg","9bb20744f63675027235b34db48cf8cc"],["/static/media/logo-welcome.65ecf3b2.svg","65ecf3b2a9ce4aaa6d434900a543c759"],["/static/media/logo.097d4fe0.svg","097d4fe0c8195bbdc3a8dc236abd7d0b"],["/static/media/not-found.71ceb509.svg","71ceb50962996c3d7b56ca377991abc0"],["/static/media/payment.29b5fda5.svg","29b5fda5f259f26acea2fa67c3695f3b"],["/static/media/transaction-error.26ce7b94.svg","26ce7b9405d8608d63dc70b225499344"],["/static/media/transaction-pending.1497236e.svg","1497236e6aaedf006da45dacc5fa7cf0"],["/static/media/transaction-success.3d4a25b5.svg","3d4a25b5a88f947f933db388630b39b8"],["/static/media/vote.d60d2f91.svg","d60d2f913235cfaff9c7c99f5d3058eb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});