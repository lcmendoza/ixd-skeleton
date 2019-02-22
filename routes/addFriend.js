
var data = require("../data1.json");

exports.addFriend = function(request, response) {    
    json = {'image':'playfulemoji.png','Username': request.query.name, 'date':'1/15/19 11:25 AM'};
	console.log(json);
	data.friends.push(json);
	response.render('add', data);
 }