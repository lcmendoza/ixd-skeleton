
var data = require("../data.json");

exports.addFriend = function(request, response) {    
	newfriend = {'image':'playfulemoji.png','name': request.query.name,'description':request.query.description, 'date':'1/15/19 11:25 AM'};
	console.log(newfriend);
	data.friends.push(newfriend);
	response.render('add', data);
 }