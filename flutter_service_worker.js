'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a81581930b59ba9bf285c8dc36ac8435",
"assets/AssetManifest.bin.json": "5e2d267eb7d77300bc1eb688383d0afb",
"assets/AssetManifest.json": "923cf609f57c8e83635d22e7bf08a27b",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Medium.ttf": "4ad8149153b5d0f27200a938be9298fb",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/Barbara.ttf": "9528c81d06774ff2576873bed5aac966",
"assets/assets/fonts/Harabara%2520Mais%2520Demo.otf": "a0d8e2d6b8b8bc47662d338f22b1930e",
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
"assets/fonts/MaterialIcons-Regular.otf": "9717e4366cefd80d670caa3f49a42a89",
"assets/NOTICES": "c3184e90e6e64eb58a2f7f1652b712ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4eef06ee0968a790adc8647a6cd24875",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9181aac0046dcef69ca3e8366a2e8779",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "7d950b7a00df2311be879cf2964e9390",
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
"flutter_bootstrap.js": "3b4d292965b8ae67b96316b4794e32a4",
"icons/Icon-192.png": "7dee723b9c5868cc4d0f43cab92f9422",
"icons/Icon-512.png": "7dee723b9c5868cc4d0f43cab92f9422",
"icons/Icon-maskable-192.png": "7dee723b9c5868cc4d0f43cab92f9422",
"icons/Icon-maskable-512.png": "7dee723b9c5868cc4d0f43cab92f9422",
"index.html": "a3abb56efff0d83d09112f415b7780f8",
"/": "a3abb56efff0d83d09112f415b7780f8",
"main.dart.js": "dab922a3b4ae5e10dba3cf939422ff18",
"manifest.json": "7f754fafb703970b3136305ae2380da9",
"robots.txt": "b36b68b2742c041c5750b07a3d6882c3",
"sitemap.xml": "c1b323de3dfb2a529ca8a8cfb76d8140",
"version.json": "461979f2f33fe58e32175711007764d1"};
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
