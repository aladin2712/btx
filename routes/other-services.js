var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  var title = "Dịch vụ sao y , công chứng, dịch thuật chuyên nghiệp";
  res.render('page/dich-vu-khac',{title:title});
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = router;
