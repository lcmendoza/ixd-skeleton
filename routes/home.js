var data = require('../data.json');


exports.viewHome = function(req, res) { 
	console.log(data);
  res.render('home', data);

}