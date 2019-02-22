var data = require("../data2.json");

exports.addGoals = function(request, response) {    
    json = {'Goal' : request.query.goal,'Goal Type': request.query.goaltype, 'date':request.quest.date};
	console.log(json);
	data.friends.push(json);
	response.render('goals', data);
 }