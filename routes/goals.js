exports.viewGoals = function(req, res) { 
var data = require('../data2.json')
  res.render('goals', data);
};