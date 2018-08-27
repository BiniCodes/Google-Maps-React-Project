//https://stackoverflow.com/questions/38806320/how-to-configure-service-workers-with-create-react-app
//https://github.com/jeffposnick/create-react-pwa#what-additional-changes-might-be-needed

//importScripts('/cache-polyfill.js');

// Install and add cache
window.addEventListener('install',function(event){
	event.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll([
				'/',
				'/src/App.css',
				'/src/App.js',
				'/src/App.test.js',
				'/src/index.css',
				'/src/index.js',
				'/src/registerSw.js',
				'/components/src/firstMarker.js',
				'/components/src/locations.js',
				'/components/src/Map.js',
				'/components/src/MapContainer.js',
				'/components/src/modal.js',
				'/components/src/modalWindow.js'
				]);
		})
	);
});


//Pull the request from the cache
// Added with the help of the following resource: https://codelabs.developers.google.com/codelabs/offline/#7
window.addEventListener('fetch', function(event) {
	console.log(event.request.url);
		event.respondWith(
			caches.match(event.request).then(function(response) {
				// Cache hit - return response
		        if (response) {
		          return response;
		        }
		      })
		    );
		});