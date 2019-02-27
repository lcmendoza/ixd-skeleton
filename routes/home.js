var data = require('../data.json');


exports.viewHome = function(req, res) { 
	console.log(data);
	data["viewHomeAlt"] = false;
  res.render('home', data);

};

exports.viewHomeAlt = function(request, response){
	data["viewHomeAlt"] = true;
  	response.render('home', data);
  	
};
