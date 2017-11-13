var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  var title = "Visa bầu trời xanh - Nhanh - Chuẩn - Không phát sinh"
  res.render('page/faq',{title:title});
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});
module.exports = router;
