var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/:visaType/:country', function(req, res, next) {

  var visaType = req.params['visaType'];
  var country = req.params['country'];
  var messageProperties = {
    'visa-du-lich':'du lịch',
    'visa-tham-than':'thăm thân',
    'visa-cong-tac':'công tác',
    'visa-dinh-cu':'định cư'

  }
  var model = {
    visaType:messageProperties[visaType],
    country:country
  };
  var page = 'page/'+visaType+'.html';
  res.render(page,model);
  //console.log(__dirname);
  //res.sendFile(path.join(__dirname + '/../index.html'));
});
module.exports = router;
