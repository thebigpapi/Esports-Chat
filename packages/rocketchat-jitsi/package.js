Package.describe({
	name: 'rocketchat:jitsi',
	version: '0.0.1',
	summary: 'Package for Jitsi video conferencing integration',
	git: ''
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	
	api.use('rocketchat:lib');
	api.use('ecmascript');

	api.use('templating', 'client');

	api.addFiles('server/settings.js', 'server');

	api.addFiles('client/tabBar.js', 'client');
	api.addFiles('client/jitsiPanel.html', 'client');
	api.addFiles('client/jitsiPanel.js', 'client');
	api.addFiles('client/jitsiVideo.html', 'client');

	api.addFiles('client/utils.js', 'client');
	api.addFiles('client/do_external_connect.js', 'client');
	api.addFiles('client/lib-jitsi-meet.js', 'client');
	api.addFiles('client/app.bundle.js', 'client');
	api.addFiles('client/all.css', 'client');	
});
