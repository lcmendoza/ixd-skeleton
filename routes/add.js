 exports.viewAdd = function(req, res) { 
var name = req.params.name;
console.log("The Add name is: "+ name); 
  res.render('add', {
  	'addName' : name
  });
};