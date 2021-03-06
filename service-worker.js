const staticAssets = [
	'/',
	'assets/style.min.css',
	'assets/manifest.json',
	'assets/fonts/font-awesome/webfonts/fa-solid-900.woff2',
	'assets/fonts/font-awesome/webfonts/fa-regular-400.woff2',
	'assets/fonts/font-awesome/webfonts/fa-solid-900.woff',
	'assets/fonts/font-awesome/webfonts/fa-regular-400.woff',
	'assets/fonts/font-awesome/webfonts/fa-solid-900.ttf',
	'assets/fonts/font-awesome/webfonts/fa-regular-400.ttf'
];

self.addEventListener('install', async event=>{
	const cache = await caches.open('static-assets');
	cache.addAll(staticAssets);
});

self.addEventListener('fetch', event=>{
	const req = event.request;
	event.respondWith( cacheFirst(req) );
});

async function cacheFirst(req){
	const cachedResponse = await caches.match(req);
	return cachedResponse || fetch(req);
}