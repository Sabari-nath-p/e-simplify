'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4b2d785ccc81cc1899e18797bdf0b994",
".git/config": "7abc62df3f6962c09ce361389172d5e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "60635b242803204087b4126dac6a0c70",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f4184f8a79daa70797acbaddcf4edaf6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3dc2c8b31649ac7afff187b88cabee5",
".git/logs/refs/heads/main": "775382451b7e4d87ee4733dc9e08ad01",
".git/logs/refs/remotes/origin/main": "0529275cf86599843788f72afbd98c63",
".git/objects/04/64ad7caa1de0a0320e3bf4e1228124879eef67": "0e0a11cbdccc49734c55e71212bb3b58",
".git/objects/04/7a60f3ece74e502823ea58e1e186d048d28b09": "5d6cd1766d578e7172e124a85edd6d36",
".git/objects/05/859ba4ebb621b0527c49e38e86d97a964295a1": "11542757210075fcfd9d0fecd0d21f6a",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/09f1634832b06f41634789e77db82fef6a3fcc": "8a528ce76a70576aa78874ad4fa42370",
".git/objects/0c/94868a7e87a2591261b6a8021aa54adb28f3bb": "31d48649ecd77aef766db75a64f99b13",
".git/objects/0f/8550cbc57e92759b38ef03f7bed8d352d7ba6b": "cab437acf98ffc83fc9d506158baba78",
".git/objects/11/b7b5032087eff61f235209f63836a64c72d902": "5ae622ce9672ef5f33506cbbd8fced60",
".git/objects/14/10bb658dc22788a8d04404924925ccd011421a": "e3680e0b007f02552467a77dfe1cf11b",
".git/objects/27/68cdcd89ccdc0000d32113aea99cce156dcb0a": "f6fc9349dde296cb204df4d13ba1488f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/ec826c9d92abfe007ecc82bfe4eecd3c18788e": "173af746d1e3a298c4348c280e5e2721",
".git/objects/39/366902f08d991d58a6f48e7c978c34d22a4ca3": "b0379d2960675097bf9358c0388a9430",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/874aeee76d8dd7bf831a3b1d0e7633fea714b1": "aa2104e83333405d581673af857c9b80",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/6c7208f75a737e0a975edc3ccf4efccf084b53": "aa14ec2b7603d21f407b119bd3875370",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/4a/1fc9c1add12137ee8d1e82b430f022385ab1e0": "a74706f11b011cb691c6fe837013a646",
".git/objects/4b/5e7d13f7098234d096c6a102173f554913ddbb": "ef5d0ec062d2b938e3b43fcf1043a91a",
".git/objects/4d/c1a37130d6af04d6aa92530d732bb1b81190f0": "b2076fa77005ed2e362f04c1bc99b262",
".git/objects/4e/fc491cf19fa5bb6bb3993c5530ee7c4f77b5c6": "dbd8c39e8f624bcf807ab1b7a4e50976",
".git/objects/61/16401b8d2e5b112a9f3eb5d413d06cd73dd6fe": "dd4e2c0f42bbf2ad3e7b46d26a68d33d",
".git/objects/64/91dbc631b97f25885c4f4e1d6add0e0db096ee": "64829d777ccb4501d6b44b00eccb26c4",
".git/objects/69/77e084b8982ae23c1290e525c890bc0c37a6c5": "cc5f5517fb4d11bf635b108cc3f79021",
".git/objects/77/dcbcedba2bf05381111800a6695a42a6a809f6": "fd59d93bdf7209d8e1029066f6ae2503",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/59ce6c06cc2ab481104219f430d1cec9bbce42": "aed69add99402e2040fa5f03088ec3e7",
".git/objects/b2/2e140a5530eeaeb9dc88364d2a09b428ec4334": "88f3dd5997694b32a78f3ecedef34b74",
".git/objects/b6/643d01232cd19711e4e80a6af8eb7bc3853990": "69f4c8b7cc7fdaa971cb0c84e91236c6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cd/d762763b2f28a8f8c02179ca0a98889193357a": "01d8f9a9e7021ec6349ef564aeb15b6c",
".git/objects/ce/1a13470134f28e86431465a98cb9f785d1b165": "64a78970290aba94f20e84801d15d916",
".git/objects/d1/6cf9a4ed1bdd68f13032f7a67a6f30aea7e6ae": "582b8640c1d986498fe1ddadb2b94011",
".git/objects/d1/6f6217e310146f1e25ba7871e38faf93729c6c": "1eedca053b99aa6ca99db4123b042cf6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/975b7908c7a2dc5e63543b3c8ee8826ad04c66": "3a7b87f998677be407b9f8585593709f",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/dc/d9951f916782a15ab20ac4f48f66634786f01c": "d066c9792cb541417f5b0f78ee9ef1ab",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/cc660f6af1a5a9c07aa6dda636f803fb268023": "a4589565ad50b09e044df34e740dc607",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0465c6c91ec42495a189b8bace8d15fd5edf7c": "51ad5df3ce3b75000975a97aa05cf14c",
".git/objects/fd/64c669d603f963abbd7cc16885e4781a244265": "5f9f65c92c7f24669847700808c9b136",
".git/objects/ff/447569abb39085390a09d139f2e4a57b785949": "c18c63b86d34f74343bf43499ad039b0",
".git/ORIG_HEAD": "2cf20af404d83a7029ede5de56ca84d6",
".git/refs/heads/main": "3df6f55644c360049fa55734271319a0",
".git/refs/remotes/origin/main": "3df6f55644c360049fa55734271319a0",
"assets/asset/homebg.png": "2e37e18f95c60321f1fb4049f2761188",
"assets/asset/homebg1.png": "1c8564e076538d597babdda0605b9809",
"assets/asset/homebg2.png": "6f567f302425320e17f14c44e558ab52",
"assets/AssetManifest.json": "5598742e7acfc824e56e48f725193d3c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0ab4952e3804e65da726fabb9bccf226",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f6830d7061c34cc4ea067dc706f8445",
"/": "9f6830d7061c34cc4ea067dc706f8445",
"main.dart.js": "b2184817d2c712b8bf99f18e092399f2",
"manifest.json": "f9152bdec8da50ab8083af7fc5e1eeda",
"version.json": "070ef2cd67935474f9c3267e1c351d65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
