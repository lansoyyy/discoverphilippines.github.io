'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "8ec6ce8090d1c6642fc103d41c165b01",
"assets/AssetManifest.bin": "cb2a495df50f742f172f9bc782ec3dd4",
"assets/AssetManifest.bin.json": "7e8ef9da2050977c15b65fcd92719c92",
"assets/AssetManifest.json": "6da8a95bab82d561f4b4a962ec4029a8",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Medium.ttf": "4ad8149153b5d0f27200a938be9298fb",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/Barbara.ttf": "9528c81d06774ff2576873bed5aac966",
"assets/assets/fonts/Harabara%2520Mais%2520Demo.otf": "a0d8e2d6b8b8bc47662d338f22b1930e",
"assets/assets/images/20.png": "7b6a6c92ff1381115c970ca6905a830f",
"assets/assets/images/21.png": "cc17e21199b5014826be6f0e3d7acb1e",
"assets/assets/images/22.png": "f2c02b8cd4c20dd36505bd898f980426",
"assets/assets/images/23.png": "61fb25ecceeb466e1524e106ccb43e49",
"assets/assets/images/24.png": "cfe731c321f7734325f53a5a5177411b",
"assets/assets/images/25.png": "d8c3a2c985321fe23d3d14135c23bf81",
"assets/assets/images/26.png": "405cb1f0871b3095b507e69409459038",
"assets/assets/images/backgrounds/batanes.jpg": "c81260a180245877591c458d5eefea84",
"assets/assets/images/backgrounds/boracay.jpg": "8c6f6a68b64147c8f8d122a31528ff66",
"assets/assets/images/backgrounds/chocolatehills.jpg": "06b1fbeb2413125012b2deca9504266f",
"assets/assets/images/backgrounds/collage.png": "d1b2c164060a1e6aa105e4525b287f52",
"assets/assets/images/backgrounds/coron.jpg": "1ce08bb7ee158147d25da2a34a14ad96",
"assets/assets/images/backgrounds/culture.jpg": "9594c7a00498fd37b544d858c96a2474",
"assets/assets/images/backgrounds/food.jpg": "9683159efa3e3f95b453a0a08fecbacd",
"assets/assets/images/backgrounds/maskarafestival.jpg": "cd64f47e188218933c0aa3a208dc45b6",
"assets/assets/images/backgrounds/mayonvolcano.jpg": "ad0e5fe7b4d82e6c5a9fd7386fdf7cdf",
"assets/assets/images/backgrounds/onboarding2.jpg": "73fc483a7564aedf42d1b03f85598628",
"assets/assets/images/backgrounds/riceteracess.jpg": "adcafd1dcb5f20f3908a50f5002d8b80",
"assets/assets/images/backgrounds/siargao.jpg": "f960c01a717e2bc1a0e927e44da78692",
"assets/assets/images/backgrounds/siquijor.jpg": "a8b08e1699e1736b36cbe91bf3b70d16",
"assets/assets/images/backgrounds/sunkencementery.jpg": "b42b2a71294910208d00f9e8bcbae514",
"assets/assets/images/backgrounds/vigan.jpg": "f656a481ab723605537bedf4af90ca15",
"assets/assets/images/backgrounds/wangod.jpg": "122b5996b6e4996baaf5716977b495d7",
"assets/assets/images/icon.png": "7dee723b9c5868cc4d0f43cab92f9422",
"assets/FontManifest.json": "42158728eff40ecab4684441cca54ce2",
"assets/fonts/MaterialIcons-Regular.otf": "c64c33cf98423f70e093f5e38bf07ec6",
"assets/NOTICES": "7434f467e73d7b193f1a5fcb0ab1b0bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4eef06ee0968a790adc8647a6cd24875",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9181aac0046dcef69ca3e8366a2e8779",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a3a05870724950efc8eea7b822a55d4b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "7dee723b9c5868cc4d0f43cab92f9422",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2081db5338a7ef239aaec4e5dc2de596",
"icons/Icon-192.png": "7dee723b9c5868cc4d0f43cab92f9422",
"icons/Icon-512.png": "7dee723b9c5868cc4d0f43cab92f9422",
"icons/Icon-maskable-192.png": "7dee723b9c5868cc4d0f43cab92f9422",
"icons/Icon-maskable-512.png": "7dee723b9c5868cc4d0f43cab92f9422",
"index.html": "3556cbee89c26c0fff70e3e123c88c4b",
"/": "3556cbee89c26c0fff70e3e123c88c4b",
"main.dart.js": "18c4c06120fbeaf4f71c8205bb212510",
"manifest.json": "7f754fafb703970b3136305ae2380da9",
"robots.txt": "b36b68b2742c041c5750b07a3d6882c3",
"sitemap.xml": "d2f28fc7df4620538d1cd7f16c763e68",
"sw.js": "e59a731eaad12e0e42c7fbef25aae004",
"vercel.json": "6411d2fbb5f0e00aaff0ca0ded84e0b6",
"version.json": "461979f2f33fe58e32175711007764d1",
"_redirects": "5f52dbefcf63c9f677ace09fcf8bc7d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
