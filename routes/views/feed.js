var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'feed';
	locals.filters = {
		post: req.params.post,
	};
	locals.data = {
		posts: [],
	};

	// Load the galleries by sortOrder
	view.query('feeds', keystone.list('Feed').model.find().sort('-publishedDate'));

	// Render the view
	view.render('feed');

};
