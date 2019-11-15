var keystone = require('keystone');
var	Types = keystone.Field.Types;

var Experiments = new keystone.List('Experiments', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Experiments.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
	url:{
      type: Types.Url,
      format: function(url){
          return '<img src="'+url+'" style="max-width: 300px">'
      }
  },
	videoUrl: { type: Types.Url },
	videoData: { type: Types.Embedly, from: 'videoUrl' },
	content: {
	brief: { type: Types.Html, wysiwyg: true, height: 150 },
	extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
});

Experiments.register();