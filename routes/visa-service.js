var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  var title = "Dịch vụ xin visa đi nước ngoài chuyên nghiệp, tận tâm, không phát sinh chi phí";
  res.render('page/dich-vu-visa',{title:title});
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = router;
