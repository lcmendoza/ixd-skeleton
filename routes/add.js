 exports.viewAdd = function(req, res) { 
var data = require('../data1.json')
  res.render('add', data);
};