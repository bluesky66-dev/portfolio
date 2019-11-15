var keystone = require('keystone');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'portfolio';
	locals.filters = {
		project: req.params.project,
	};
	locals.data = {
		projects: [],
	};

	locals.selected = {
		previous: {},
		next: {},
	};

	// Load the current project
	view.on('init', function (next) {

		var q = keystone.list('Portfolio').model.findOne({
			state: 'published',
			slug: locals.filters.project,
		}).populate('author categories');

		locals.data.projects = q;

		q.exec(function (err, result) {
			locals.data.project = result;
			next(err);
		});

	});

	// Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Portfolio').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('100');
		
		q.exec(function (err, results) {
			locals.data.projects = results;

			for (var i = 0; i < locals.data.projects.length; i ++){
				if(locals.data.projects[i]._id.toString() == locals.data.project._id.toString()){
					
					if(i == 0){
						locals.selected.previous = locals.data.projects[locals.data.projects.length - 1];
					}else {
						locals.selected.previous = locals.data.projects[i-1];
					}

					if(i == locals.data.projects.length - 1){
						locals.selected.next = locals.data.projects[0];
					}else {
						locals.selected.next = locals.data.projects[i + 1];
					}
					
				} else {
				}
			}

			next(err);
		});
	});

	// Render the view
	view.render('project');
};
