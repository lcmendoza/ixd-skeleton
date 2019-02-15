exports.viewHome = function(req, res) { 
var name = req.params.name;
console.log("The Home name is: " + name); 
  res.render('Home', {
  	'Home' : name
  });
};