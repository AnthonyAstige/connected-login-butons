'use strict';
/*global Package*/

Package.describe({
  summary: 'Hides loginButtons functionality if not connected to server',
  version: '0.0.1',
  name:'anthonyastige:connected-login-buttons',
  git:'git@github.com:AnthonyAstige/connected-login-buttons.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');

	api.use([
		'standard-app-packages'
	]);

	api.addFiles(
		[
			'connected-login-buttons.html',
			'connected-login-buttons.js'
		],
		'client'
	);
});
