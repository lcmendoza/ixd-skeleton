

exports.addFriend = function(request, response) {    
	// Your code goes here
	newfriend = {'name': request.query.name,'description':request.query.description, 'imageURL':'http://lorempixel.com/400/400/people'};
	console.log(newfriend);
	addFriend.push(newfriend);
	response.render('add', {
		"addFriend": [
		{
			"name": "Doug Engelbart",
			"description": "Has awesome pet mice",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"			
		},
		{
			"name": "Ivan Sutherland",
			"description": "Great at sketching",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"			
		}
		]
	});
 }