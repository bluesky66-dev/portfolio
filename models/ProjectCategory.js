var keystone = require('keystone');

/**
 * ProjectCategory Model
 * ==================
 */

var ProjectCategory = new keystone.List('ProjectCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProjectCategory.add({
	name: { type: String, required: true },
});

ProjectCategory.relationship({ ref: 'Portfolio', path: 'categories' });

ProjectCategory.register();