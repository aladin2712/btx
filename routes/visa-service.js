var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  var title = "Visa bầu trời xanh, dịch vụ làm visa đi Anh Quốc, Châu Âu, Canada ..."
  res.render('page/dich-vu-visa',{title:title});
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = router;
