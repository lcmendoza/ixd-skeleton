exports.addFriend = function(request, response) {    
	// Your code goes here
	newfriend = {'name': request.query.name,'description':request.query.description, 'imageURL':'http://lorempixel.com/400/400/people'};
	console.log(newfriend);
	data.friends.push(newfriend);
	response.render('index', data);
 }