var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page/index', { title: 'ejs' });
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = router;
