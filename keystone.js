// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'sidechain-portfolio',
	'brand': 'sidechain-portfolio',


	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'cloudinary config': 'cloudinary://738933918968631:oC_89nSsALkzCJ40N9n2cmWTkx8@dl6hxxyrn',
	'embedly api key':  '6652f309e9c741c9810c4054ad82cafa',
	'wysiwyg images': true,
	'wysiwyg additional plugins': 'paste, hr, media, code',
    'wysiwyg additional options': {
    'paste_data_images': true
  },

  'session store': 'mongo',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga: {
    property: process.env.GA_SITE_PROPERTY,
    domain: process.env.GA_SITE_DOMAIN
    }
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Switch Keystone Email defaults to handlebars
keystone.Email.defaults.templateExt = 'hbs';
keystone.Email.defaults.templateEngine = require('handlebars');


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {

	portfolio: ['portfolios', 'project-categories'],
	feeds: 'feeds',
	enquiries: 'enquiries',
	users: 'users',
	experiments: 'experiments',
	'video': [
		{
			label: 'Video',
			key: 'video',
			path: '/video'
		}
	]
});

//in keystone.js
keystone.set('baseUrl', (keystone.get('env') == 'production') ? 'https://sidechain.studio/' : 'http://localhost:3000/');

// Start Keystone to connect to your database and initialise the web server

keystone.start();
