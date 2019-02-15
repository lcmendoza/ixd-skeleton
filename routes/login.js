var data = require('../data.json');

exports.viewLogin = function(request, response){
	console.log(data);
  	response.render('login', data);
};